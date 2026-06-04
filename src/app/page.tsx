import { CategorySection } from "@/components/sections/CategorySection";
import { EcoStatsSection } from "@/components/sections/EcoStatsSection";
import { FeatureBannersSection } from "@/components/sections/FeatureBannersSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ProductGridSection } from "@/components/sections/ProductGridSection";
import { PromoBannersSection } from "@/components/sections/PromoBannersSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroCarousel />
      <TrustBar />
      <EcoStatsSection />
      <CategorySection />
      <WhyChooseSection />
      <ServicesSection />
      <FeatureBannersSection />
      <ProductGridSection />
      <PromoBannersSection />
      <HowItWorksSection />
      <GallerySection />
    </main>
  );
}
