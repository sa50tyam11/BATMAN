// app/resume/page.tsx
import type { Metadata } from 'next';
import ResumeViewer from './ResumeViewer';

export const metadata: Metadata = {
  title: 'Resume — Satyam Kumar Jha | Full Stack Developer',
  description:
    'View and download the resume of Satyam Kumar Jha — Full Stack Developer specialising in Next.js, React, TypeScript and Supabase.',
  alternates: { canonical: 'https://satyamkrjha.site/resume' },
  openGraph: {
    title: 'Resume — Satyam Kumar Jha',
    description:
      'Full Stack Developer resume — Next.js, React, TypeScript, Supabase.',
    url: 'https://satyamkrjha.site/resume',
    images: [{ url: 'https://satyamkrjha.site/ogtag.jpg', width: 1200, height: 630 }],
  },
};

export default function ResumePage() {
  return <ResumeViewer />;
}
