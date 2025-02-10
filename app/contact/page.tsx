import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.</p>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name
            </label>
            <input type="text" id="name" name="name" className="w-full p-2 bg-[#000047] rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input type="email" id="email" name="email" className="w-full p-2 bg-[#000047] rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Message
            </label>
            <textarea id="message" name="message" rows={4} className="w-full p-2 bg-[#000047] rounded"></textarea>
          </div>
          <button type="submit" className="bg-[#FF8000] text-white px-4 py-2 rounded hover:bg-[#FF9900]">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </main>
  )
}

