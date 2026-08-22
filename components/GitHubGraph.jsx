'use client'
// components/GitHubGraph.jsx
// Renders a GitHub-style contribution heatmap synced to the real GitHub account.
// Data is fetched from /api/github/contributions (server-cached 1 hour).

import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { GitCommitHorizontal, Flame } from 'lucide-react';

const LEVELS = [
  'bg-zinc-800/60',          // 0 — empty
  'bg-[#a3e635]/20',         // 1 — very light
  'bg-[#a3e635]/45',         // 2 — light
  'bg-[#a3e635]/70',         // 3 — medium
  'bg-[#a3e635]',            // 4 — full
];

const MONTH_LABELS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DAY_LABELS   = ['','Mon','','Wed','','Fri',''];

function getLevel(count) {
  if (count === 0) return 0;
  if (count <= 2)  return 1;
  if (count <= 5)  return 2;
  if (count <= 10) return 3;
  return 4;
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
}

// Returns the label months visible in the grid
function buildMonthLabels(weeks) {
  const labels = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const firstDay = week.contributionDays[0];
    if (!firstDay) return;
    const m = new Date(firstDay.date).getMonth();
    if (m !== lastMonth) {
      labels.push({ weekIndex: wi, label: MONTH_LABELS[m] });
      lastMonth = m;
    }
  });
  return labels;
}

export default function GitHubGraph() {
  const [data, setData]       = useState(null);
  const [error, setError]     = useState(false);
  const [tooltip, setTooltip] = useState(null); // { x, y, date, count }

  useEffect(() => {
    fetch('/api/github/contributions')
      .then(r => r.ok ? r.json() : Promise.reject(r.status))
      .then(setData)
      .catch(() => setError(true));
  }, []);

  const { weeks, totalContributions, streakInfo, monthLabels } = useMemo(() => {
    if (!data?.weeks) return {};

    const weeks = data.weeks;

    // --- streak calculation ---
    const allDays = weeks.flatMap(w => w.contributionDays).sort((a, b) => a.date.localeCompare(b.date));
    let currentStreak = 0, longestStreak = 0, run = 0;
    const todayStr = new Date().toISOString().slice(0, 10);

    // walk backwards for current streak
    const reversed = [...allDays].reverse();
    let foundContrib = false;
    for (const d of reversed) {
      if (d.contributionCount > 0) { currentStreak++; foundContrib = true; }
      else if (foundContrib) break;
    }

    // longest streak
    for (const d of allDays) {
      if (d.contributionCount > 0) { run++; longestStreak = Math.max(longestStreak, run); }
      else run = 0;
    }

    // busiest day
    let busiest = allDays.reduce((max, d) => d.contributionCount > max.contributionCount ? d : max, allDays[0] ?? { contributionCount: 0, date: '' });

    return {
      weeks,
      totalContributions: data.totalContributions,
      streakInfo: { currentStreak, longestStreak, busiestDate: busiest.date },
      monthLabels: buildMonthLabels(weeks),
    };
  }, [data]);

  // ── Loading state ──
  if (!data && !error) {
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-2 w-32 bg-zinc-800 rounded animate-pulse" />
        </div>
        <div className="flex gap-[3px] overflow-hidden">
          {Array.from({ length: 53 }).map((_, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }).map((_, di) => (
                <div key={di} className="w-[10px] h-[10px] rounded-sm bg-zinc-800/40 animate-pulse" style={{ animationDelay: `${(wi + di) * 10}ms` }} />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Error state ──
  if (error) {
    return (
      <div className="text-zinc-600 text-xs text-center py-6">
        Could not load contribution data.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-4 relative"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GitCommitHorizontal size={13} className="text-[#a3e635]" />
          <span className="text-white text-xs font-bold tracking-widest uppercase">
            {totalContributions.toLocaleString()} contributions this year
          </span>
        </div>
        <a
          href="https://github.com/sa50tyam11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 hover:text-[#a3e635] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
          </svg>
        </a>
      </div>

      {/* Graph wrapper — scrollable on mobile */}
      <div className="overflow-x-auto pb-1 -mx-1 px-1">
        <div className="relative" style={{ minWidth: `${weeks.length * 13}px` }}>

          {/* Month labels */}
          <div className="flex gap-[3px] mb-1 pl-[20px]">
            {weeks.map((_, wi) => {
              const found = monthLabels?.find(m => m.weekIndex === wi);
              return (
                <div key={wi} className="w-[10px] text-[8px] text-zinc-600 font-medium" style={{ minWidth: 10 }}>
                  {found ? found.label : ''}
                </div>
              );
            })}
          </div>

          {/* Grid rows + day labels */}
          <div className="flex gap-[3px]">
            {/* Day-of-week labels */}
            <div className="flex flex-col gap-[3px] mr-1 shrink-0">
              {DAY_LABELS.map((label, i) => (
                <div key={i} className="h-[10px] text-[8px] text-zinc-600 font-medium flex items-center" style={{ width: 14 }}>
                  {label}
                </div>
              ))}
            </div>

            {/* Contribution cells */}
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {/* Pad weeks that start mid-week */}
                {week.contributionDays.map((day, di) => (
                  <div
                    key={day.date}
                    className={`w-[10px] h-[10px] rounded-sm cursor-default transition-all duration-150 hover:ring-1 hover:ring-[#a3e635]/60 hover:scale-125 ${LEVELS[getLevel(day.contributionCount)]}`}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setTooltip({ x: rect.left, y: rect.top, date: day.date, count: day.contributionCount });
                    }}
                    onMouseLeave={() => setTooltip(null)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="fixed z-50 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-[10px] text-white shadow-xl pointer-events-none"
          style={{ top: tooltip.y - 40, left: tooltip.x, transform: 'translateX(-50%)' }}
        >
          <span className="font-bold text-[#a3e635]">{tooltip.count} commit{tooltip.count !== 1 ? 's' : ''}</span>
          {' · '}
          <span className="text-zinc-400">{formatDate(tooltip.date)}</span>
        </div>
      )}

      {/* Legend + streak stats */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-1">
        {/* Streak stats */}
        <div className="flex items-center gap-5 text-[10px] text-zinc-500">
          <span>
            <span className="text-zinc-300 font-bold">{streakInfo?.longestStreak ?? 0}</span>
            {' '}day longest streak
          </span>
          <span className="flex items-center gap-1">
            <Flame size={11} className={streakInfo?.currentStreak > 0 ? 'text-orange-400' : 'text-zinc-700'} />
            <span className="text-zinc-300 font-bold">{streakInfo?.currentStreak ?? 0}</span>
            {' '}day current streak
          </span>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 text-[9px] text-zinc-600">
          <span>Less</span>
          {LEVELS.map((cls, i) => (
            <div key={i} className={`w-[10px] h-[10px] rounded-sm ${cls}`} />
          ))}
          <span>More</span>
        </div>
      </div>
    </motion.div>
  );
}
