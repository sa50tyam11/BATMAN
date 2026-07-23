// app/page.tsx
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import GithubChaos from "@/components/GithubChaos";
import RecentBlogs from "@/components/RecentBlogs";
import RecentGuestbook from "@/components/RecentGuestbook";
import Faq from "@/components/Faq";
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
      "https://twitter.com/sa50tyam11"
    ],
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "SENO Studio"
    }
  };

  return (
    <main className="w-full bg-[#0a0a0a] light:bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Work />
      <GithubChaos />
      <RecentBlogs />
      <RecentGuestbook />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}