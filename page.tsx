import Header from './components/header'
import Hero from './components/hero'
import Services from './components/services'
import Stats from './components/stats'
import Clients from './components/clients'
import FAQ from './components/faq'
import Contact from './components/contact'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <Clients />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

