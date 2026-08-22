'use client'
// app/resume/ResumeViewer.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ResumeViewer() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">

      {/* ── Top bar ── */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/8">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-4">

          {/* Back */}
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-white text-xs font-medium tracking-wider uppercase transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back
          </Link>

          {/* Title */}
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#a3e635] animate-pulse" />
            <span className="text-white text-[11px] font-bold tracking-[0.25em] uppercase">
              Satyam Kumar Jha — Resume
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="/resume1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white text-[10px] font-bold tracking-widest uppercase hover:border-white/40 transition-colors"
            >
              <ExternalLink size={11} />
              Open in tab
            </a>
            <a
              href="/resume1.pdf"
              download="Satyam_Kumar_Jha_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#a3e635] text-black text-[10px] font-bold tracking-widest uppercase hover:bg-[#bef264] transition-colors"
            >
              <Download size={11} />
              Download
            </a>
          </div>
        </div>
      </div>

      {/* ── Hero strip ── */}
      <section className="pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-6xl mx-auto px-6 md:px-12 pt-14 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-zinc-500 text-[10px] font-bold tracking-[0.25em] uppercase mb-3">Resume</p>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none">
              Satyam Kumar Jha
            </h1>
            <p className="text-[#a3e635] text-sm md:text-base font-medium mt-3 tracking-wide">
              Full Stack Developer — Next.js · TypeScript · React · Supabase
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="mailto:krjhasatyam128@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white text-xs font-medium tracking-wider hover:border-[#a3e635] hover:text-[#a3e635] transition-colors"
            >
              <Mail size={13} />
              krjhasatyam128@gmail.com
            </a>
            <a
              href="/resume1.pdf"
              download="Satyam_Kumar_Jha_Resume.pdf"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#a3e635] text-black text-xs font-bold tracking-widest uppercase hover:bg-[#bef264] transition-colors"
            >
              <Download size={13} />
              Download PDF
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── PDF viewer ── */}
      <section className="max-w-6xl mx-auto w-full px-6 md:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
        >
          {/* Loading shimmer */}
          {!loaded && (
            <div className="absolute inset-0 z-10 bg-[#111] flex flex-col items-center justify-center gap-4">
              <div className="w-8 h-8 rounded-full border-2 border-[#a3e635]/30 border-t-[#a3e635] animate-spin" />
              <span className="text-zinc-500 text-xs tracking-widest uppercase">Loading resume…</span>
            </div>
          )}

          {/* The actual PDF embed — works on all modern browsers */}
          <object
            data="/resume1.pdf"
            type="application/pdf"
            className="w-full bg-[#111]"
            style={{ height: 'calc(100vh - 80px)', minHeight: 700 }}
            onLoad={() => setLoaded(true)}
            aria-label="Satyam Kumar Jha Resume PDF"
          >
            {/* Fallback for browsers that don't support object/embed */}
            <div className="flex flex-col items-center justify-center gap-6 py-24 px-8 text-center bg-[#111]">
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                Your browser doesn&apos;t support inline PDF viewing. You can open or download it directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/resume1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-xs font-medium tracking-wider hover:border-white/40 transition-colors"
                >
                  <ExternalLink size={13} />
                  Open PDF
                </a>
                <a
                  href="/resume1.pdf"
                  download="Satyam_Kumar_Jha_Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#a3e635] text-black text-xs font-bold tracking-widest uppercase hover:bg-[#bef264] transition-colors"
                >
                  <Download size={13} />
                  Download
                </a>
              </div>
            </div>
          </object>
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 px-1"
        >
          <p className="text-zinc-500 text-sm text-center sm:text-left">
            Liked what you saw?{' '}
            <a href="mailto:krjhasatyam128@gmail.com" className="text-[#a3e635] hover:underline">
              Let&apos;s talk.
            </a>
          </p>
          <div className="flex items-center gap-3">
            <a
              href="/resume1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white text-[10px] font-bold tracking-widest uppercase hover:border-white/30 transition-colors"
            >
              <ExternalLink size={11} />
              Open in new tab
            </a>
            <a
              href="/resume1.pdf"
              download="Satyam_Kumar_Jha_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#a3e635] text-black text-[10px] font-bold tracking-widest uppercase hover:bg-[#bef264] transition-colors"
            >
              <Download size={11} />
              Download PDF
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
