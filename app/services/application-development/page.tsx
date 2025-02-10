import Header from '@/components/header'
import Footer from '@/components/footer'

export default function ApplicationDevelopment() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Application Development</h1>
        <p className="text-xl">
          Our application development services provide cutting-edge solutions tailored to your business needs.
          We specialize in web applications, mobile apps, and custom software development.
        </p>
      </div>
      <Footer />
    </main>
  )
}

