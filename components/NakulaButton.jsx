// components/NakulaButton.jsx
'use client'
export default function NakulaButton({ text, href = "#" }) {
  return (
    <a 
      href={href}
      className="group relative inline-flex overflow-hidden rounded-full bg-black px-8 py-4 text-white font-medium uppercase tracking-wide"
    >
      <div className="relative flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
        {/* Visible Text */}
        <span className="block h-full">{text}</span>
        {/* Hover Text (Hidden below initially) */}
        <span className="absolute top-full block h-full">{text}</span>
      </div>
    </a>
  );
}