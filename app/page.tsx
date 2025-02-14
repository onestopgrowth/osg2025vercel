import Header from "../components/header"
import Hero from "../components/hero"
import WhatIsOneStopGrowth from "../components/what-is-one-stop-growth"
import BlankBlock from "../components/blank-block"
import ClientLogos from "../components/client-logos"
import Services from "../components/services"
import Stats from "../components/stats"
import FAQ from "../components/faq"
import Contact from "../components/contact"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <WhatIsOneStopGrowth />
      <BlankBlock />
      <ClientLogos />
      <Stats />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

