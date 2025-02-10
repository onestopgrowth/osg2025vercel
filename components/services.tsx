import { Roboto } from "next/font/google"
import Image from "next/image"
import ServiceCard from "./ServiceCard"

const roboto = Roboto({ weight: ["300", "400", "500", "700"], subsets: ["latin"] })

const services = [
  {
    code: "Sd",
    name: "Software Development",
    color: "bg-[#0000f9]",
    details: ["Custom application development", "API integrations and database management"],
  },
  {
    code: "Ic",
    name: "Infrastructure & Cybersecurity",
    color: "bg-[#008000]",
    details: ["Hyperconverged infrastructure solutions", "Advanced security systems and real-time monitoring"],
  },
  {
    code: "Bd",
    name: "Business Development",
    color: "bg-[#ff8000]",
    details: ["Lead generation, outreach, and CRM optimization", "Sales funnel design and implementation"],
  },
  {
    code: "Tl",
    name: "Trucking & Logistics",
    color: "bg-[#ff0000]",
    details: ["DOT-certified freight hauling", "Route optimization and real-time tracking"],
  },
  {
    code: "Ux",
    name: "User Experience",
    color: "bg-[#0000f9]",
    details: ["Frontend frameworks for seamless customer experiences", "UI/UX strategy and implementation"],
  },
  {
    code: "Da",
    name: "Data & Analytics",
    color: "bg-[#008000]",
    details: ["Actionable data insights for business operations", "Predictive analytics and dashboard creation"],
  },
  {
    code: "Ai",
    name: "AI & Automation",
    color: "bg-[#ff8000]",
    details: ["AI-based process automation", "Intelligent decision-making tools"],
  },
  {
    code: "Op",
    name: "Operations Optimization",
    color: "bg-[#ff0000]",
    details: ["End-to-end supply chain review", "Workflow efficiency enhancements"],
  },
  {
    code: "Sc",
    name: "Scalability Solutions",
    color: "bg-[#0000f9]",
    details: ["Cloud-based infrastructure for growing businesses", "Modular technology design for flexibility"],
  },
  {
    code: "Ps",
    name: "Privacy & Security",
    color: "bg-[#008000]",
    details: ["DDoS protection and cybersecurity planning", "Disaster recovery and compliance management"],
  },
]

export default function Services() {
  return (
    <section id="services" className={`relative py-20 overflow-hidden ${roboto.className} bg-gray-100`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One-Stop-Growth-Methodology-768x768-VfOo4LFfCMPfWtm1WAhUAZlnLZ3bez.png"
          alt="One Stop Growth Methodology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#002347]/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-2xl font-bold text-center mb-4 text-white p-6 rounded-xl bg-[#FF8E00] shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.2)] inline-block">
          Your Growth, <span className="italic font-normal">Our Expertise</span>
        </h2>
        <p className="text-xl text-white mb-12 max-w-3xl mx-auto text-center font-light p-8 rounded-xl bg-[#FF8E00] shadow-[5px_5px_15px_rgba(0,0,0,0.2),-5px_-5px_15px_rgba(255,255,255,0.2)]">
          Our tailored services span multiple domains, combining innovation, precision, and scalability to meet your
          unique business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <div key={service.code} className="bg-[#FF503] rounded-xl p-4">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

