"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Code, Server, PieChart, Truck } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type React from "react"

const ServiceSection = ({
  title,
  description,
  icon,
  link,
  linkText,
  imageUrl,
  isReversed = false,
}: {
  title: string
  description: string
  icon: React.ReactNode
  link: string
  linkText: string
  imageUrl: string
  isReversed?: boolean
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#000047] to-black opacity-90" />
      <div
        className={`container mx-auto px-6 relative z-10 flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}
      >
        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#FF8000] rounded-lg">{icon}</div>
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
          <p className="text-base text-gray-300">{description}</p>
          <Link href={link} className="inline-flex items-center text-[#FF8000] hover:text-[#FF9900] transition-colors">
            {linkText}
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Growth%20Services%20Hero.jpg-0bUeHkfIqrquL3TTp8W1B8dEjLGTIO.jpeg"
          alt="Abstract network visualization representing interconnected systems and efficiency"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000047] to-black opacity-80" />
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 relative z-10 text-center"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Systems. Efficiency. Execution.</h1>
          <p className="text-base mb-8 max-w-3xl mx-auto mt-12 text-center">
            At One Stop Growth, we don't provide fragmented solutions. We build integrated systems that drive
            sustainable growth. Each of our core services is designed to work in unison, ensuring no inefficiencies, no
            waste—just results.
          </p>
        </motion.div>
      </section>

      {/* Service Sections */}
      <ServiceSection
        title="Software Development"
        description="Building for Performance, Scale, and Longevity. Software should be an enabler, not an obstacle. We develop systems designed to grow with your business—secure, scalable, and efficient."
        icon={<Code size={32} className="text-white" />}
        link="/services/software-development"
        linkText="Explore Software Development"
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Growth%20Software%20Development%20Services-leupR0j3E9t79DorS4hAiQJwoFhhA6.png"
      />

      <ServiceSection
        title="IT Infrastructure & Cybersecurity"
        description="Optimized Systems for Resilience and Security. Technology should work without compromise. Our infrastructure solutions ensure you can scale with confidence—without bottlenecks or vulnerabilities."
        icon={<Server size={32} className="text-white" />}
        link="/services/it-infrastructure-cybersecurity"
        linkText="Explore IT Infrastructure & Cybersecurity"
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-13%20at%201.16.51%E2%80%AFPM-SnHdH1o2kWCmpH6n5v4Axpua3XPGIJ.png"
        isReversed
      />

      <ServiceSection
        title="Business Development"
        description="A Sales Pipeline Built for Precision. Growth is not about volume—it's about efficiency. We ensure that every lead, every conversation, and every process is intentional, refined, and executed with precision."
        icon={<PieChart size={32} className="text-white" />}
        link="/services/business-development"
        linkText="Explore Business Development"
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Growth%20Business%20Devleopment.jpg-3fmJL8okssfJmrZYD0GxbIaxL7Z6Y1.jpeg"
      />

      <ServiceSection
        title="Logistics & Freight"
        description="Executing Freight Operations with Discipline. Freight is more than transportation—it's a system. Every load, every route, every deadline is executed with intent, eliminating inefficiencies and reducing costs."
        icon={<Truck size={32} className="text-white" />}
        link="/services/logistics-freight-hauling"
        linkText="Explore Logistics & Freight"
        imageUrl="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Growth%20Logistic%20Services.jpg-ksWVdAIsdTqTvrtwG8CCB83Ay7bXnP.jpeg"
      />

      {/* Call-to-Action */}
      <section className="py-20 bg-gradient-to-b from-black to-[#000047]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-8">Stop Managing Chaos. Start Building Systems.</h2>
          <Link
            href="/contact"
            className="bg-[#FF8000] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-[#FF9900] transition duration-300 inline-flex items-center"
          >
            Let's Talk Growth
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
