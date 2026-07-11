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
  return (
    <main className="w-full bg-[#0a0a0a] light:bg-white">
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