import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Features from "./components/Features";
import ProductPreview from "./components/ProductPreview";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Integrations from "./components/Integrations";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      
      <Hero />
      
      <ScrollReveal>
        <TrustBar />
      </ScrollReveal>

      {/* Adding parallax to major sections for depth */}
      <ScrollReveal parallax={true}>
        <Features />
      </ScrollReveal>

      <ScrollReveal parallax={true}>
        <ProductPreview />
      </ScrollReveal>

      <ScrollReveal>
        <WhyUs />
      </ScrollReveal>

      <ScrollReveal parallax={true}>
        <HowItWorks />
      </ScrollReveal>

      <ScrollReveal parallax={true}>
        <Pricing />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <Integrations />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <ScrollReveal>
        <FinalCTA />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
