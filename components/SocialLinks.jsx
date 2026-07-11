import { Gamepad2, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Instagram = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const Linkedin = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const Facebook = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const Twitter = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const socials = [
  {
    name: 'Instagram',
    handle: '@whyyyy_me_huhh',
    followers: '1.2K followers',
    icon: <Instagram className="w-6 h-6 text-pink-500" />,
    link: 'https://instagram.com/whyyyy_me_huhh',
    bgColor: 'bg-white/5'
  },
  {
    name: 'LinkedIn',
    handle: 'Satyam Kr Jha',
    followers: '800+ followers',
    icon: <Linkedin className="w-6 h-6 text-blue-500" />,
    link: 'https://www.linkedin.com/in/satyamkrjha5011',
    bgColor: 'bg-[#0077b5]/10'
  },
  {
    name: 'Facebook',
    handle: 'SenoWebStudio',
    followers: '500+ followers',
    icon: <Facebook className="w-6 h-6 text-blue-600" />,
    link: 'https://facebook.com/senowebstudio', // Placeholder
    bgColor: 'bg-[#1877f2]/10'
  },
  {
    name: 'Twitter / X',
    handle: '@senowebstudio',
    followers: '600+ followers',
    icon: <Twitter className="w-6 h-6 text-sky-500" />,
    link: 'https://twitter.com/senowebstudio', // Placeholder
    bgColor: 'bg-[#1da1f2]/10'
  },
  {
    name: 'Discord',
    handle: 'SenoWebStudio',
    followers: '300+ followers',
    icon: <Gamepad2 className="w-6 h-6 text-indigo-500" />,
    link: 'https://discord.gg/senowebstudio', // Placeholder
    bgColor: 'bg-[#5865f2]/10'
  }
];

export default function SocialLinks() {
  return (
    <section className="w-full relative py-24 border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
            {'>'} CONNECT WITH US {'<'}
          </p>
          <h2 className="text-5xl md:text-6xl font-serif italic text-white mb-4">
            Follow the journey
          </h2>
          <p className="text-zinc-400 font-sans max-w-lg mx-auto">
            Stay in the loop with behind-the-scenes content, quick tips, project reveals and more across our socials.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socials.map((social, index) => (
            <Link 
              href={social.link} 
              key={index} 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#111111] border border-white/5 rounded-3xl p-6 hover:border-[#6C63FF]/50 transition-all duration-300 flex flex-col h-[200px]"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={16} className="text-zinc-500 group-hover:text-white" />
              </div>
              
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-auto ${social.bgColor}`}>
                {social.icon}
              </div>
              
              <div className="mt-4">
                <h3 className="text-white font-serif italic text-xl mb-1">{social.name}</h3>
                <p className="text-zinc-500 text-sm font-sans mb-3">{social.handle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
