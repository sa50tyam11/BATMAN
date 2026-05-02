// components/Contact.jsx
'use client'

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#0a0a0a] relative overflow-hidden border-t border-white/10 pt-32 pb-24 md:pt-48 md:pb-32">
      
      {/* Background Video Masking - INCREASED OPACITY & BRIGHTNESS */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-80 md:opacity-100 pointer-events-none flex justify-start">
        <div className="w-full md:w-3/4 h-full relative">
          <video 
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline
            // Added brightness and contrast to make the video visuals pop
            className="w-full h-full object-cover object-right brightness-125 contrast-110"
          />
          {/* Lightened the gradients so they don't swallow the video */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]"></div>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        
        <div className="w-full md:w-3/5">
          {/* REDUCED FONT SIZE & added drop-shadow for readability over bright video */}
          <h2 className="text-[14vw] md:text-[8vw] text-white uppercase leading-[0.85] tracking-tighter font-sans font-medium origin-left drop-shadow-2xl">
            LET&apos;S TALK<br />
            <span className="font-serif italic text-zinc-300 font-normal normal-case">opportunities.</span>
          </h2>
        </div>

        <div className="w-full md:w-2/5 flex flex-col items-start md:items-end text-left md:text-right gap-6">
          {/* REDUCED FONT SIZE to text-xl for a cleaner, professional look */}
          <p className="text-zinc-200 text-lg md:text-xl leading-relaxed max-w-md font-sans font-light drop-shadow-lg">
            I am actively seeking <span className="text-white font-medium">internship</span> and <span className="text-white font-medium">full-time</span> roles. Whether you are hiring, building a team, or just want to talk tech—my inbox is always open.
          </p>
          
          <a href="mailto:krjhasatyam128@gmail.com" className="w-full md:w-auto flex items-center justify-center px-12 py-5 rounded-full border border-[#EF4444] text-[#EF4444] text-sm font-sans font-medium tracking-[0.2em] uppercase hover:bg-[#EF4444] hover:text-white transition-all duration-300 bg-black/20 backdrop-blur-sm mt-2">
            SAY HELLO
          </a>
        </div>
      </div>
    </section>
  );
}