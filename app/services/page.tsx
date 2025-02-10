import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

const services = [
  {
    title: "Software Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/services/software-development",
  },
  {
    title: "IT Infrastructure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/services/it-infrastructure-cybersecurity",
  },
  {
    title: "Business Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/services/business-development",
  },
  {
    title: "Logistics & Freight",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    href: "/services/logistics-freight-hauling",
  },
]

export default function Services() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold text-black mb-8">Our Services</h1>
        <p className="text-2xl text-black mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-black mb-4">{service.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{service.description}</p>
              <Link href={service.href} className="text-[#0000f9] hover:text-[#0000b2] text-lg font-medium">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

