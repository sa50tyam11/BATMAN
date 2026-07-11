'use client';
import { useState } from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const text = `Hi Satyam,%0A%0AI'm ${formData.name}.%0A%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}${formData.company ? `%0A*Company:* ${formData.company}` : ''}%0A%0A*Message:*%0A${formData.message}`;
    
    // Target WhatsApp number
    const targetNumber = '916200964876';
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${text}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <main className="w-full bg-[#0a0a0a]">
      <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center font-sans">
      
      <div className="w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-12 text-center md:text-left">
          <p className="text-[#a3e635] text-xs md:text-sm tracking-[0.2em] uppercase font-bold mb-4">
            Let&apos;s Build Something
          </p>
          <h1 className="text-5xl md:text-7xl font-sans font-black text-white uppercase tracking-tighter">
            Contact us
          </h1>
        </div>

        {/* Main Card Container */}
        <div className="w-full bg-[#111111] rounded-3xl p-6 md:p-12 border border-white/5">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Left Column - Contact Info */}
            <div className="w-full lg:w-5/12 flex flex-col">
              <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">
                Start a Conversation
              </h2>

              <div className="flex flex-col gap-8 mb-12">
                <div>
                  <h3 className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-2">Call On</h3>
                  <p className="text-white text-lg font-medium">+91 6200964876</p>
                </div>
                <div>
                  <h3 className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-2">Email On</h3>
                  <a href="mailto:krjhasatyam128@gmail.com" className="text-white text-lg font-medium hover:text-[#a3e635] transition-colors break-all">
                    krjhasatyam128@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-2">Address</h3>
                  <p className="text-white text-lg font-medium">India — Open to Remote & On-site</p>
                </div>
                <div>
                  <h3 className="text-zinc-500 text-xs font-bold tracking-widest uppercase mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/satyamkrjha5011" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#a3e635] hover:text-[#a3e635] transition-colors">
                      <LinkedinIcon />
                    </a>
                    <a href="https://github.com/sa50tyam11" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#a3e635] hover:text-[#a3e635] transition-colors">
                      <GithubIcon />
                    </a>
                    <a href="https://instagram.com/whyyyy_me_huhh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#a3e635] hover:text-[#a3e635] transition-colors">
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </div>

              {/* Dashed Divider */}
              <div className="w-full border-t border-dashed border-white/20 my-8"></div>

              {/* Quote Section */}
              <div className="mt-4">
                <p className="text-xl md:text-2xl font-serif italic text-zinc-300 mb-6">
                  "You bring the opportunity. I'll bring the execution."
                </p>
                <div className="flex flex-col">
                  <span className="text-white font-bold tracking-wide uppercase text-sm">Satyam Kumar Jha</span>
                  <span className="text-[#a3e635] text-xs font-medium tracking-widest uppercase mt-1">Full Stack Developer</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-7/12">
              <div className="bg-[#0a0a0a] rounded-2xl p-8 md:p-10 border border-white/5 h-full">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-zinc-400 text-xs font-bold tracking-widest uppercase">Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#a3e635] transition-colors placeholder:text-zinc-700"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-zinc-400 text-xs font-bold tracking-widest uppercase">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#a3e635] transition-colors placeholder:text-zinc-700"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-zinc-400 text-xs font-bold tracking-widest uppercase">Phone *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#a3e635] transition-colors placeholder:text-zinc-700"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-zinc-400 text-xs font-bold tracking-widest uppercase">Company (Optional)</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#a3e635] transition-colors placeholder:text-zinc-700"
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 mt-2 flex-grow">
                    <label htmlFor="message" className="text-zinc-400 text-xs font-bold tracking-widest uppercase">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required 
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-[#a3e635] transition-colors resize-none placeholder:text-zinc-700"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="mt-6 w-full md:w-auto self-start flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-[#0a0a0a] text-sm font-sans font-bold tracking-[0.2em] uppercase hover:bg-zinc-200 transition-all duration-300 shadow-lg shadow-white/10"
                  >
                    <MessageCircle size={18} />
                    Send on WhatsApp
                  </button>
                  
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  );
}
