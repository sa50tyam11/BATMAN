// components/About.jsx
'use client'
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';

export default function About() {
  // Only defensible, project-backed technologies
  const techStack = {
    Core: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    "Backend / Data": ["Node.js", "PostgreSQL", "Supabase"],
    Tools: ["Git", "GitHub", "Vercel / Netlify", "Figma"],
    "Currently Learning": ["AI/ML", "Data Structures & Algorithms"],
  };

  return (
    <section id="about" className="w-full relative bg-[#0a0a0a] light:bg-[#fafafa] text-white light:text-[#111111] border-t border-white/10 light:border-black/10">

      <div className="max-w-350 mx-auto w-full px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">

        {/* --- LEFT SIDEBAR (Sticky) --- */}
        <div className="w-full lg:col-span-5 lg:sticky lg:top-0 lg:h-screen flex flex-col pt-24 pb-12 pr-0 lg:pr-8">

          <div 
            className="mt-2 pl-6 max-w-[280px] md:max-w-[320px] profile-card-override"
            style={{
              '--card-radius': '20px',
              '--sunpillar-1': 'hsl(0, 0%, 80%)',
              '--sunpillar-2': 'hsl(0, 0%, 60%)',
              '--sunpillar-3': 'hsl(0, 0%, 50%)',
              '--sunpillar-4': 'hsl(0, 0%, 40%)',
              '--sunpillar-5': 'hsl(0, 0%, 20%)',
              '--sunpillar-6': 'hsl(0, 0%, 70%)',
            }}
          >
            <style>{`
              .profile-card-override .pc-card {
                height: 420px !important;
                max-height: 420px !important;
              }
              .profile-card-override .pc-avatar-content {
                mix-blend-mode: normal !important;
              }
              @media (max-width: 1024px) {
                .profile-card-override .pc-card-wrapper {
                  touch-action: auto !important;
                }
              }
            `}</style>
            <ProfileCard
              name="Satyam Kumar Jha"
              title="Full Stack Developer — Next.js / TypeScript / React"
              handle="satyam.codes"
              status="Open to Roles"
              contactText="Download Resume"
              avatarUrl="/aboutme.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowColor="rgba(255, 255, 255, 0.15)"
              innerGradient="linear-gradient(145deg, #1a0a0a 0%, #333333 100%)"
              onContactClick={() => {
                const link = document.createElement('a');
                link.href = '/skjresume.pdf';
                link.download = 'Satyam_Kumar_Jha_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            />
          </div>


        </div>

        {/* --- RIGHT CONTENT (Scrollable) --- */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-16 pt-12 lg:pt-24 pb-24">

          {/* About — student-first framing */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.2] text-zinc-200 light:text-zinc-800 tracking-tight"
          >
            I&apos;m Satyam, a BCA student and full-stack developer working primarily in{' '}
            <span className="text-[#a3e635] light:text-[#84cc16] font-semibold">Next.js, TypeScript, React</span>, and PostgreSQL/Supabase.
          </motion.p>

          <div className="grid grid-cols-1 gap-12">

            {/* About body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase border-b border-white/10 light:border-black/10 pb-4">About</h3>
              <div className="space-y-5 text-zinc-400 light:text-zinc-600 text-sm md:text-base leading-relaxed">
                <p>
                  Over the past two years, I&apos;ve built and shipped production websites and small e-commerce platforms for real local businesses through{' '}
                  <span className="text-white light:text-black font-medium">SENO Studio</span>, the studio I co-founded with Abhinav — handling everything from frontend architecture to data modeling to deployment.
                </p>
                <p>
                  Outside client work, I build things I&apos;m curious about — like{' '}
                  <a href="https://github.com/sa50tyam11/SUR-SANSAR" target="_blank" rel="noopener noreferrer" className="text-[#a3e635] light:text-[#84cc16] hover:underline">Sur-Sansar</a>,
                  an interactive map of Indian folk music.
                </p>
                <p>
                  Right now I&apos;m deepening my CS fundamentals and DSA, and I&apos;m looking for an internship or junior engineering role where I can work on real production systems with a team.
                </p>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              id="experience"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase border-b border-white/10 light:border-black/10 pb-4">Experience</h3>
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="text-white light:text-black font-bold text-lg tracking-tight">Co-Founder, SENO Studio</h4>
                  <p className="text-[#a3e635] light:text-[#84cc16] text-xs font-bold tracking-wider uppercase mt-2">2024 — Present</p>
                  <p className="text-zinc-400 light:text-zinc-600 text-sm md:text-base leading-relaxed mt-3">
                    Co-founded a web design and development studio with Abhinav, formalizing freelance work into a small agency. Responsible for technical delivery across client projects while Abhinav leads design and client relations.
                  </p>
                </div>
                <div>
                  <h4 className="text-white light:text-black font-bold text-lg tracking-tight">Freelance Full Stack Developer</h4>
                  <p className="text-[#a3e635] light:text-[#84cc16] text-xs font-bold tracking-wider uppercase mt-2">2022 — Present <span className="text-zinc-500 mx-2">•</span> <span className="text-zinc-500">Independent</span></p>
                  <p className="text-zinc-400 light:text-zinc-600 text-sm md:text-base leading-relaxed mt-3">
                    Design and build production websites and web applications for small businesses, primarily using Next.js, TypeScript, and Supabase/PostgreSQL. Own the full project lifecycle — requirements gathering, frontend build, data layer, deployment, and post-launch support.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-[10px] font-bold text-zinc-500 tracking-[0.2em] uppercase border-b border-white/10 light:border-black/10 pb-4">Education</h3>
              <div>
                <h4 className="text-white light:text-black font-bold text-lg tracking-tight">Bachelor of Computer Applications</h4>
                <p className="text-[#a3e635] light:text-[#84cc16] text-xs font-bold tracking-wider uppercase mt-2">
                  Nitishwar Mahavidyalaya, BRABU
                  <br /><span className="text-zinc-500">2024 — Present</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Tech Stack — defensible, honest categories */}
          <div className="pt-8 border-t border-white/10 light:border-black/10 mt-8">
            <span className="text-zinc-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 block">(TECH STACK)</span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(techStack).map(([category, skills], categoryIndex) => (
                <div key={categoryIndex} className="flex flex-col gap-3">
                  <h4 className={`text-white light:text-black text-xs font-bold tracking-widest uppercase mb-2 border-l-2 pl-3 ${category === 'Currently Learning' ? 'border-zinc-500 text-zinc-400' : 'border-[#a3e635] light:border-[#84cc16]'}`}>
                    {category}
                    {category === 'Currently Learning' && (
                      <span className="ml-2 text-zinc-600 text-[9px] normal-case tracking-normal font-normal">(in progress)</span>
                    )}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * index, duration: 0.3 }}
                        className={`px-4 py-2 rounded-full border text-[10px] md:text-xs font-semibold tracking-wide transition-all cursor-default ${
                          category === 'Currently Learning'
                            ? 'border-zinc-700 bg-zinc-900 text-zinc-500 hover:border-zinc-500 hover:text-zinc-400'
                            : 'border-white/10 light:border-black/10 bg-[#0f0f0f] light:bg-zinc-100 text-zinc-300 light:text-zinc-700 hover:border-[#a3e635] light:hover:border-[#84cc16] hover:text-[#a3e635] light:hover:text-[#84cc16] hover:bg-[#a3e635]/5 light:hover:bg-[#84cc16]/5'
                        }`}
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}