
import { Navigation } from '../components/Navigation'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Metrics } from '../components/Metrics'
import { Products } from '../components/Products'
import { Footer } from '../components/Footer'
export function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Products />
        <Metrics />
        <Footer />
      </main>
    </div>
  )
}
