import Navbar from "@/components/layout/Navbar/Navbar";
import Hero from "@/components/features/landing/Hero/Hero";
import Features from "@/components/features/landing/Features/Features";
import Comparison from "@/components/features/landing/Comparison/Comparison";
import CTASection from "@/components/features/landing/CTASection/CTASection";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Comparison />
      <CTASection />
      <Footer />
    </main>
  );
}
