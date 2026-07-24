import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { StatStrip } from "./components/StatStrip";
import { SmartCapture } from "./components/SmartCapture";
import { FeatureGrid } from "./components/FeatureGrid";
import { Friends } from "./components/Friends";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { Waitlist } from "./components/Waitlist";
import { Faq } from "./components/Faq";
import { ClosingCTA } from "./components/ClosingCTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <StatStrip />
        <SmartCapture />
        <FeatureGrid />
        <Friends />
        <HowItWorks />
        <Testimonials />
        <Waitlist />
        <Faq />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
