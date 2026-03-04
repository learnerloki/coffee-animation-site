import HeroCanvasAnimation from "@/components/HeroCanvasAnimation";
import ProductShowcase from "@/components/ProductShowcase";
import FeatureSection from "@/components/FeatureSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="w-full relative bg-coffee-950 font-sans selection:bg-accent selection:text-coffee-950">
      <HeroCanvasAnimation />
      <ProductShowcase />
      <FeatureSection />
      <FinalCTA />
    </main>
  );
}
