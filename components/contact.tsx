import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to Elevate Your Business?</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Contact us today to discover how we can support your growth journey seamlessly.
        </p>
        <form
          className="max-w-md mx-auto mb-8"
          action="mailto:get@onestopgrowth.com"
          method="POST"
          encType="text/plain"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email here"
            className="w-full px-4 py-2 mb-4 text-black rounded-full"
          />
          <button
            type="submit"
            className="w-full bg-[#FF8000] text-white px-8 py-3 rounded-full font-bold hover:bg-[#FF9900] transition duration-300"
          >
            Subscribe to updates
          </button>
        </form>
        <p className="text-sm text-gray-400">
          By subscribing, you accept our{" "}
          <Link href="/privacy-policy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
