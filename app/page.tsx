// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}