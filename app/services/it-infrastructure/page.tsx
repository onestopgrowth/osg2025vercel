import Header from '@/components/header'
import Footer from '@/components/footer'

export default function ITInfrastructure() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">IT Infrastructure</h1>
        <p className="text-xl">
          Our IT infrastructure services ensure your business has a robust, scalable, and secure technology foundation.
          We offer solutions including cloud services, network design, and cybersecurity.
        </p>
      </div>
      <Footer />
    </main>
  )
}
