import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BusinessDevelopment() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Business Development</h1>
        <p className="text-xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat
          molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
        </p>
        <p className="text-xl">
          Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum
          feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.
        </p>
      </div>
      <Footer />
    </main>
  )
}

