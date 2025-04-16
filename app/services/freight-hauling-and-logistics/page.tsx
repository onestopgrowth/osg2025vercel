"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Shield, MapPin, ArrowRight, PieChart, MessageCircle, Truck, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#000047", "#000037", "#000027"])

  return (
    <motion.div ref={ref} style={{ backgroundColor }}>
      {children}
    </motion.div>
  )
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) => (
  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
    <Card className="bg-gradient-to-br from-[#000047] to-[#0000FF] p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,255,0.2)] hover:shadow-[0_20px_30px_rgba(0,0,255,0.3)] transition-all duration-300 border-0 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(255,128,0,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      <Icon className="w-12 h-12 text-[#FF8000] mb-4 relative z-10" />
      <h3 className="text-xl font-bold mb-2 leading-tight tracking-wide text-white relative z-10">{title}</h3>
      <p className="text-sm text-gray-300 leading-relaxed tracking-wide relative z-10">{description}</p>
    </Card>
  </motion.div>
)

export default function FreightHaulingAndLogistics() {
  return (
    <main className="min-h-screen text-white overflow-hidden tracking-wide">
      <Header />

      <GradientBackground>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OSG%20Freight%20Hero.jpg-3wUCQUDEDgPhyr5XmrdzCCuOfnSq0z.jpeg"
            alt="One Stop Growth branded semi-truck with custom branding and DOT/MC numbers, positioned against a backdrop of shipping containers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Freight Hauling and Logistics Solutions
              </h1>
              <p className="text-xl mb-8 font-light leading-relaxed">
                Precision in Every Mile. Execution in Every Load. We deliver reliability and efficiency in freight
                hauling and logistics.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Freight and Logistics Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={Truck}
                title="Freight Hauling"
                description="Reliable and efficient transportation of goods across the country with our diverse fleet options."
              />
              <FeatureCard
                icon={MapPin}
                title="Route Optimization"
                description="Advanced algorithms to determine the most efficient routes, saving time and fuel."
              />
              <FeatureCard
                icon={Shield}
                title="Secure Transportation"
                description="State-of-the-art security measures to ensure the safety of your cargo throughout its journey."
              />
              <FeatureCard
                icon={PieChart}
                title="Supply Chain Management"
                description="Comprehensive solutions to streamline your entire supply chain process."
              />
              <FeatureCard
                icon={MessageCircle}
                title="Real-time Communication"
                description="Stay informed with instant updates and open lines of communication throughout the shipping process."
              />
              <FeatureCard
                icon={CheckCircle}
                title="Quality Assurance"
                description="Rigorous quality control measures to maintain the highest standards in freight handling."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#000047] to-black">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Optimize Your Freight and Logistics?</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Let's discuss how our freight hauling and logistics solutions can streamline your operations and drive
              your business forward.
            </p>
            <Link
              href="/contact"
              className="bg-[#FF8000] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FF9900] transition duration-300 inline-flex items-center"
            >
              Get a Custom Quote
              <ArrowRight className="ml-2" size={24} />
            </Link>
          </div>
        </section>
      </GradientBackground>

      <Footer />
    </main>
  )
}
