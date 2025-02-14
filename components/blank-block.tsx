"use client"

import { useRef } from "react"
import Image from "next/image"
import { Monitor, BotIcon as Robot, Server, Layout, Filter, Briefcase, Truck, Package } from "lucide-react"
import { useInView } from "framer-motion"

const services = [
  {
    icon: <Monitor className="w-6 h-6 text-[#FF8001]" />,
    title: "Application Development",
  },
  {
    icon: <Robot className="w-6 h-6 text-[#FF8001]" />,
    title: "AI & ML Solutions",
  },
  {
    icon: <Server className="w-6 h-6 text-[#FF8001]" />,
    title: "IT Infrastructure",
  },
  {
    icon: <Layout className="w-6 h-6 text-[#FF8001]" />,
    title: "UX/UI Services",
  },
]

const additionalServices = [
  {
    icon: <Filter className="w-6 h-6 text-[#FF8001]" />,
    title: "Lead Generation & CRM Mgmt.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-[#FF8001]" />,
    title: "Biz Dev Consulting",
  },
  {
    icon: <Truck className="w-6 h-6 text-[#FF8001]" />,
    title: "Freight Hauling Services",
  },
  {
    icon: <Package className="w-6 h-6 text-[#FF8001]" />,
    title: "Logistics & Supply Chain",
  },
]

export default function GrowthStrategy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-16 bg-[#002347]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p
              ref={ref}
              className={`text-[#FF8001] text-lg font-medium inline-block ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } transition-all duration-700 ease-out`}
            >
              How We Do It.
            </p>
            <h2 className="text-4xl font-bold text-white">Unified Growth Strategy</h2>
            <p className="text-gray-300 leading-relaxed">
              Growth doesn't come from patchwork solutions or half-measures. It requires a structured, methodical
              approach. We don't treat technology, logistics, and business strategy as separate pieces - we integrate
              them into a single, seamless system. With us, you don't just get a service; you get a partner who takes
              full responsibility for your success.
            </p>
          </div>

          {/* Right Column */}
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stoic%20Chess-CCo3vZV3zBhoFmkZcqanxPMQ4Gdnu8.png"
              alt="Classical statue in strategic contemplation over a chess board, symbolizing our methodical and strategic approach to growth"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl object-cover"
              priority
            />
            {/* Text */}
            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <p
                className="text-white text-xl font-bold transform -rotate-12 whitespace-nowrap"
                style={{ fontFamily: "'Permanent Marker', cursive" }}
              >
                Now with extra stoicism!
              </p>
            </div>
          </div>
        </div>

        {/* Service Icons */}
        <div className="space-y-4 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#003366] p-4 rounded-xl flex flex-col items-center text-center space-y-2 
                   shadow-[5px_5px_15px_rgba(0,0,0,0.3),_-5px_-5px_15px_rgba(255,255,255,0.05)]
                   hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.3),_inset_-5px_-5px_15px_rgba(255,255,255,0.05)]
                   hover:bg-[#003F7D]
                   transition-all duration-300 cursor-pointer"
              >
                {service.icon}
                <h3 className="text-blue-300 font-medium leading-tight h-12 flex items-center justify-center text-sm">
                  {service.title.split(" ").slice(0, -1).join(" ")}
                  <br />
                  {service.title.split(" ").slice(-1)}
                </h3>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#003366] p-4 rounded-xl flex flex-col items-center text-center space-y-2 
                   shadow-[5px_5px_15px_rgba(0,0,0,0.3),_-5px_-5px_15px_rgba(255,255,255,0.05)]
                   hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.3),_inset_-5px_-5px_15px_rgba(255,255,255,0.05)]
                   hover:bg-[#003F7D]
                   transition-all duration-300 cursor-pointer"
              >
                {service.icon}
                <h3 className="text-blue-300 font-medium leading-tight h-12 flex items-center justify-center text-sm">
                  {service.title.split(" ").slice(0, -1).join(" ")}
                  <br />
                  {service.title.split(" ").slice(-1)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

