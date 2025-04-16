import Image from "next/image"
import Link from "next/link"

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#000047]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose One Stop Growth for Your Business Needs?</h2>
            <p className="text-xl mb-8">
              Our experience and technology empower reliable and scalable growth strategies. With years of industry
              experience, we leverage proven frameworks and cutting-edge technology to drive your business forward. Our
              AI-driven decision-making ensures that your growth strategies are not only reliable but also scalable.
            </p>
            <Link
              href="#contact"
              className="bg-[#FF8000] text-white px-8 py-3 rounded-full font-bold hover:bg-[#FF9900] transition duration-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="relative h-96">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Why Choose One Stop Growth"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
