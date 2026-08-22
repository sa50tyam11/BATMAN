// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import GithubChaos from "@/components/GithubChaos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Satyam Kumar Jha",
    "alternateName": "Satya",
    "url": "https://satyamkrjha.site",
    "image": "https://satyamkrjha.site/ogtag.jpg",
    "sameAs": [
      "https://github.com/sa50tyam11",
      "https://www.linkedin.com/in/satyamkrjha5011",
      "https://twitter.com/sa50tyam11"
    ],
    "jobTitle": "Full Stack Developer",
    "description": "BCA student and full-stack developer building production web apps with Next.js, TypeScript, and React.",
  };

  return (
    <main className="w-full bg-[#0a0a0a] light:bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Homepage order per blueprint Section 2:
          Hero → About (with Experience+Education) → Projects → GitHub CTA → Contact → Footer
          Blog, Guestbook, FAQ moved to footer links only */}
      <Hero />
      <About />
      <Work />
      <GithubChaos />
      <Contact />
      <Footer />
    </main>
  );
}