// app/api/github/contributions/route.ts
// Fetches the last 52 weeks of contribution data from GitHub's GraphQL API.
// Uses GITHUB_TOKEN env var if present (5000 req/hr), falls back to unauthenticated (60 req/hr).
// Response is cached for 1 hour via Next.js revalidation.

import { NextResponse } from 'next/server';

export const revalidate = 3600; // cache for 1 hour

const GITHUB_USERNAME = 'sa50tyam11';
const GRAPHQL_URL = 'https://api.github.com/graphql';

const QUERY = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;

  // --- GraphQL path (requires token) ---
  if (token) {
    try {
      const res = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          'User-Agent': 'satyamkrjha-portfolio',
        },
        body: JSON.stringify({ query: QUERY, variables: { username: GITHUB_USERNAME } }),
        next: { revalidate: 3600 },
      });

      const json = await res.json();

      if (json.errors) {
        console.error('GitHub GraphQL errors:', json.errors);
        throw new Error('GraphQL error');
      }

      const calendar = json.data.user.contributionsCollection.contributionCalendar;
      return NextResponse.json({
        totalContributions: calendar.totalContributions,
        weeks: calendar.weeks,
        source: 'graphql',
      });
    } catch (err) {
      console.error('GraphQL fetch failed, falling back:', err);
      // fall through to REST fallback
    }
  }

  // --- REST fallback (public, no token needed) ---
  // Uses ghchart.ssh.surf — a free public proxy that reads GitHub's SVG contribution graph
  // and exposes structured JSON. No auth required.
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`, {
      next: { revalidate: 3600 },
      headers: { 'User-Agent': 'satyamkrjha-portfolio' },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();

    // Normalise to the same shape as the GraphQL response
    // jogruber returns: { total: { [year]: N }, contributions: [{ date, count, level }] }
    const contributions: { date: string; count: number; level: number }[] = json.contributions ?? [];

    // Group flat array into weeks (Sun→Sat)
    const weeks: { contributionDays: { date: string; contributionCount: number; weekday: number }[] }[] = [];
    let week: { date: string; contributionCount: number; weekday: number }[] = [];

    for (const day of contributions) {
      const weekday = new Date(day.date).getUTCDay(); // 0=Sun
      if (weekday === 0 && week.length > 0) {
        weeks.push({ contributionDays: week });
        week = [];
      }
      week.push({ date: day.date, contributionCount: day.count, weekday });
    }
    if (week.length > 0) weeks.push({ contributionDays: week });

    const total = contributions.reduce((s, d) => s + d.count, 0);

    return NextResponse.json({
      totalContributions: total,
      weeks,
      source: 'rest',
    });
  } catch (err) {
    console.error('REST fallback also failed:', err);
    return NextResponse.json({ error: 'Failed to fetch contribution data' }, { status: 500 });
  }
}
