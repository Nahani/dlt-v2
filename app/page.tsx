import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { PromoBanners } from '@/components/promo-banners'
import { CookieConsent } from '@/components/cookie-consent'
import { TrainingModules } from '@/components/training-modules'
import { Testimonials } from '@/components/testimonials'
import { CallToAction } from '@/components/call-to-action'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <PromoBanners />
      <Header />
      <HeroSection />
      <TrainingModules />
      <Testimonials />
      <CallToAction />
      <CookieConsent />
    </div>
  )
}
