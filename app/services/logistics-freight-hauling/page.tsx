"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useScroll, useTransform, motion } from "framer-motion"
import {
  Truck,
  BarChart,
  Shield,
  Clock,
  MapPin,
  ThermometerSnowflake,
  Package,
  ArrowRight,
  CheckCircle,
  Zap,
  Anchor,
  Power,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SparklyText from "@/components/sparkly-text"

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
}: { icon: React.ElementType; title: string; description: string }) => (
  <div className="bg-[#000047]/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-xl transition-all duration-300">
    <Icon className="w-12 h-12 text-[#FF8000] mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
)

export default function LogisticsFreightHauling() {
  return (
    <main className="min-h-screen text-white overflow-hidden">
      <Header />

      <GradientBackground>
        {/* Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Freight%20Hauling%20Hero.jpg-Fh3u2Kg1NKveUQIuVFxNjRLxUjwyeB.jpeg"
            alt="Modern freight logistics operations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000047]/90 via-[#FF8000]/20 to-transparent" />
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <SparklyText color="#FF8E00" numberOfParticles={8}>
                  Precision in Every Mile. Execution in Every Load.
                </SparklyText>
              </h1>
              <p className="text-xl mb-8 font-light leading-relaxed">
                From temperature-controlled transport to expedited shipping, One Stop Growth delivers freight solutions
                with transparency, efficiency, and methodical execution. No delays. No uncertainty. Just results.
              </p>
              <Link
                href="/contact"
                className="bg-[#FF8000] text-white px-8 py-4 rounded-full font-bold inline-flex items-center hover:bg-[#FF9900] transition duration-300"
              >
                Book Reliable Freight
                <ArrowRight className="ml-2" size={24} />
              </Link>
            </div>
          </div>
        </section>

        {/* Technology-Driven Freight Execution */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Technology-Driven Freight Execution</h2>
            <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
              At One Stop Growth, we combine advanced logistics technology with strategic execution to provide seamless,
              broker-friendly freight solutions.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={MapPin}
                title="Real-Time GPS Tracking"
                description="Full shipment visibility at every stage."
              />
              <FeatureCard
                icon={BarChart}
                title="Performance Analytics"
                description="Data-driven route optimization for cost efficiency."
              />
              <FeatureCard
                icon={Clock}
                title="ETA Updates"
                description="Automated status reports for accurate scheduling."
              />
              <FeatureCard
                icon={Zap}
                title="Project44 Integration"
                description="Enhanced tracking & supply chain visibility."
              />
            </div>
          </div>
        </section>

        {/* Specialized Freight Capabilities */}
        <section className="py-20 bg-[#000037]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Specialized Freight Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-[#000047]/50 backdrop-blur-sm border-0 p-8">
                <ThermometerSnowflake className="w-12 h-12 text-[#FF8000] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Temperature-Controlled Transport (Reefer Freight)</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>Box trucks and 53-ft reefer vans for temperature-sensitive cargo.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>Pharmaceuticals, fresh produce, frozen goods, and critical cold-chain freight.</span>
                  </li>
                </ul>
              </Card>
              <Card className="bg-[#000047]/50 backdrop-blur-sm border-0 p-8">
                <Truck className="w-12 h-12 text-[#FF8000] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Dedicated Lanes & Contract Freight</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>Consistent freight execution for long-term efficiency.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>Minimized deadhead miles to reduce costs for brokers & shippers.</span>
                  </li>
                </ul>
              </Card>
              <Card className="bg-[#000047]/50 backdrop-blur-sm border-0 p-8">
                <Anchor className="w-12 h-12 text-[#FF8000] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Port & Secured Freight (TWIC Certified)</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>Authorized for secured facilities, including ports and high-security zones.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>TWIC-certified drivers for seamless pickup & delivery at restricted access locations.</span>
                  </li>
                </ul>
              </Card>
              <Card className="bg-[#000047]/50 backdrop-blur-sm border-0 p-8">
                <Power className="w-12 h-12 text-[#FF8000] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Power-Only & Trailer Interchange</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>Experienced CDL-A drivers for drop & hook operations.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>Trailer interchange coverage ensures full asset protection.</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Transparent Insurance & Compliance */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Transparent Insurance & Compliance</h2>
            <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
              At One Stop Growth, we believe in full transparency, ensuring every broker and shipper knows their freight
              is protected.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-[#000047]/50 backdrop-blur-sm border-0 p-6">
                <Shield className="w-12 h-12 text-[#FF8000] mb-4" />
                <h3 className="text-xl font-bold mb-2">$1,000,000 Liability Coverage</h3>
                <p className="text-sm text-gray-300">GEICO Marine Insurance</p>
              </Card>
              <Card className="bg-[#000047]/50 backdrop-blur-sm border-0 p-6">
                <Package className="w-12 h-12 text-[#FF8000] mb-4" />
                <h3 className="text-xl font-bold mb-2">$100,000 Cargo Insurance</h3>
                <p className="text-sm text-gray-300">Dry & Reefer Freight</p>
              </Card>
              <Card className="bg-[#000047]/50 backdrop-blur-sm border-0 p-6">
                <Truck className="w-12 h-12 text-[#FF8000] mb-4" />
                <h3 className="text-xl font-bold mb-2">Trailer Interchange Coverage</h3>
                <p className="text-sm text-gray-300">For power-only operations</p>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg mb-4">DOT & MC Registered, SCAC Certified</p>
              <p className="text-lg mb-4">Regular FMCSA & DOT Compliance Audits</p>
              <p className="text-lg">
                We proactively provide our Certificate of Insurance (COI) upon request to ensure complete transparency.
              </p>
            </div>
          </div>
        </section>

        {/* Why Brokers & Shippers Choose One Stop Growth */}
        <section className="py-20 bg-[#000037]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Brokers & Shippers Choose One Stop Growth</h2>
            <p className="text-xl mb-12 text-center max-w-3xl mx-auto italic">
              "Most freight carriers just move loads. We execute logistics with precision."
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-[#000047]/50 backdrop-blur-sm border-0 p-8">
                <Truck className="w-12 h-12 text-[#FF8000] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Reliable, Broker-Friendly Freight Execution</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>Clear, proactive communication with brokers.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>On-time pickups & drop-offs with real-time tracking.</span>
                  </li>
                </ul>
              </Card>
              <Card className="bg-[#000047]/50 backdrop-blur-sm border-0 p-8">
                <Zap className="w-12 h-12 text-[#FF8000] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Technology-Backed Visibility & Efficiency</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>Motive ELD & GPS tracking for operational transparency.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>Project44 integration for seamless freight visibility.</span>
                  </li>
                </ul>
              </Card>
              <Card className="bg-[#000047]/50 backdrop-blur-sm border-0 p-8">
                <BarChart className="w-12 h-12 text-[#FF8000] mb-4" />
                <h3 className="text-2xl font-bold mb-4">Commitment to Growth & Innovation</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>Actively developing a carrier-centric TMS to revolutionize load execution.</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#FF8000] mr-2" />
                    <span>Built for efficiency, backed by strategy.</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Book Freight Execution You Can Trust</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Stop Uncertainty. Start Moving Freight Smarter.</p>
            <Link
              href="/contact"
              className="bg-[#FF8000] text-white px-8 py-4 rounded-full font-bold inline-flex items-center hover:bg-[#FF9900] transition duration-300"
            >
              Get Reliable Freight Execution
              <ArrowRight className="ml-2" size={24} />
            </Link>
          </div>
        </section>
      </GradientBackground>

      <Footer />
    </main>
  )
}

