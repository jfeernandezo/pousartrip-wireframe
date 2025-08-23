import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SearchFormSection } from "@/components/search-form-section"
import { ExclusiveOffersSection } from "@/components/exclusive-offers-section"
import { BenefitsSection } from "@/components/benefits-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { PackageHighlightsCarousel } from "@/components/package-highlights-carousel"
import { HotelsCarousel } from "@/components/hotels-carousel"
import { BestDestinationsSection } from "@/components/best-destinations-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroSection />
        <SearchFormSection />
        <PackageHighlightsCarousel />
        <ExclusiveOffersSection />
        <HotelsCarousel />
        <BenefitsSection />
        <BestDestinationsSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  )
}
