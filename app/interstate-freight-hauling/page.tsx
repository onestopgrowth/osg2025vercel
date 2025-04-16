"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Shield, MapPin, AlertTriangle, PieChart, MessageCircle, Truck, CheckCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Add DOTStatus to the imports
import DOTStatus from "@/components/DOTStatus"

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
  <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
    <Card className="bg-gradient-to-br from-[#000047] to-[#0000FF] p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,255,0.2)] hover:shadow-[0_20px_30px_rgba(0,0,255,0.3)] transition-all duration-300 border-0 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(255,128,0,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      <Icon className="w-12 h-12 text-[#FF8000] mb-4 relative z-10" />
      <h3 className="text-xl font-bold mb-2 leading-tight tracking-wide text-white relative z-10">{title}</h3>
      <p className="text-sm text-gray-300 leading-relaxed tracking-wide relative z-10">{description}</p>
    </Card>
  </motion.div>
)

const TimelineItem = ({ date, title, description }: { date: string; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex mb-8"
  >
    <div className="flex flex-col items-center mr-4">
      <div className="w-4 h-4 bg-[#FF8000] rounded-full shadow-[0_0_10px_#FF8000]"></div>
      <div className="w-0.5 h-full bg-gradient-to-b from-[#FF8000] to-transparent"></div>
    </div>
    <div className="bg-gradient-to-r from-[#000047] to-[#0000FF] p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,255,0.2)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(255,128,0,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      <p className="text-sm text-[#FF8000] mb-1 font-bold relative z-10">{date}</p>
      <h3 className="text-lg font-bold mb-2 leading-tight tracking-wide text-white relative z-10">{title}</h3>
      <p className="text-gray-300 leading-relaxed tracking-wide relative z-10">{description}</p>
    </div>
  </motion.div>
)

const ProcessStep = ({ number, title, description }: { number: number; title: string; description: string }) => (
  <motion.div
    className="flex items-start mb-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="bg-gradient-to-br from-[#FF8000] to-[#FFA500] text-[#000047] rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0 shadow-[0_0_20px_rgba(255,128,0,0.5)]">
      <span className="text-xl font-bold">{number}</span>
    </div>
    <div className="bg-gradient-to-r from-[#000047] to-[#0000FF] p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,255,0.2)] flex-grow relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(255,128,0,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      <h3 className="text-xl font-bold mb-2 leading-tight tracking-wide text-[#FF8000] relative z-10">{title}</h3>
      <p className="text-gray-300 leading-relaxed tracking-wide relative z-10">{description}</p>
    </div>
  </motion.div>
)

export default function LogisticsFreightHauling() {
  return (
    <main className="min-h-screen text-white overflow-hidden tracking-wide">
      <Header />

      <GradientBackground>
        {/* Hero Section */}
        <section className="relative w-full max-w-[1920px] mx-auto aspect-[16/9] overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/OSG%20Freight%20Hero.jpg-3wUCQUDEDgPhyr5XmrdzCCuOfnSq0z.jpeg"
            alt="One Stop Growth branded semi-truck with custom branding and DOT/MC numbers, positioned against a backdrop of shipping containers"
            fill
            className="object-contain"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
        </section>

        <section className="py-16 bg-[#000047]">
          <div className="container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Precision Freight Execution – Trusted by Brokers & Shippers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl mb-8 max-w-3xl text-gray-300"
            >
              We are actively seeking dedicated lanes and contract freight to provide consistent, high-performance
              hauling for brokers and direct shippers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg mb-8 max-w-3xl text-gray-300"
            >
              <p className="mb-4">Our goal is to keep trucks moving efficiently within regional lanes:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Sleeper Tractors: 11-hour max drive time utilization for long-haul reefer freight.</li>
                <li>
                  Box Trucks (CDL & Non-CDL): Optimized for local/regional routes with partial dry van load capability.
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-lg mb-8 max-w-3xl text-gray-300"
            >
              <p className="mb-4">
                We are moving away from load board uncertainty and looking to build strong partnerships with brokers who
                offer dedicated freight opportunities.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Consistent lanes mean fewer surprises.</li>
                <li>We prioritize brokers with contract freight and repeat business.</li>
                <li>Clear, professional communication to prevent delays or mismatched loads.</li>
              </ul>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg mb-8 max-w-3xl text-gray-300 list-disc pl-5"
            >
              <li>East Coast (Philadelphia-based): 53' reefer with swing doors</li>
              <li>CDL 26' Reefer Box Truck: 16.5K payload, dock height, pallet jack equipped</li>
              <li>Non-CDL 26' Box Truck: Dock height, pallet jack equipped for partial dry van loads</li>
              <li>West Coast (California-based): 53' reefer with a roll-up door</li>
            </motion.ul>

            {/* Add the DOTStatus component here */}
            <DOTStatus />
          </div>
        </section>

        {/* Freight Without the Middleman Delays Section */}
        <section className="py-20 bg-[#000047]">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 leading-tight tracking-wide text-center text-[#FF8000]"
            >
              One Stop Growth: Freight Without the Middleman Delays
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl mb-12 text-center text-white font-semibold"
            >
              "No Waiting. No Guesswork. Just Execution."
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <motion.h3
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold mb-6 text-[#FF8000]"
                >
                  Why Shippers Choose Direct Carriers Over Brokers
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg mb-4 text-gray-300"
                >
                  Most shippers assume once they tender a load, their freight is already moving. Reality check: It's
                  probably sitting while brokers waste time playing the rate game.
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="list-disc pl-6 space-y-2 text-gray-300"
                >
                  <li>
                    <strong>Last-minute rate shopping</strong> – Brokers stall, waiting for a cheaper option instead of
                    locking in reliable capacity.
                  </li>
                  <li>
                    <strong>Delayed rate confirmations</strong> – Carriers get strung along, freight doesn't move, and
                    schedules fall apart.
                  </li>
                  <li>
                    <strong>No accountability</strong> – Brokers don't own trucks. If something goes wrong, they pass
                    blame instead of fixing the problem.
                  </li>
                  <li>
                    <strong>Carrier roulette</strong> – Your freight is handed off to whoever takes the lowest bid, not
                    necessarily the best option.
                  </li>
                </motion.ul>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-lg mt-4 font-semibold text-white"
                >
                  That's why <span className="text-[#FF8000]">smart shippers</span> work with{" "}
                  <span className="text-[#FF8000]">direct carriers</span> who take full control of execution.
                </motion.p>
              </div>

              <div>
                <motion.h3
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold mb-6 text-[#FF8000]"
                >
                  One Stop Growth: The Direct Asset-Based Advantage
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg mb-4 text-white font-semibold"
                >
                  We don't "find" you a truck. <span className="text-[#FF8000]">We send our own.</span>
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-4 text-gray-300"
                >
                  <li>
                    <strong className="text-white">
                      Asset-Based Fleet – The Truck You Book is the Truck That Arrives.
                    </strong>
                    <br />
                    No outsourced guessing. No bidding wars. We <span className="text-[#FF8000]">own and operate</span>{" "}
                    the equipment, so you get guaranteed execution.
                  </li>
                  <li>
                    <strong className="text-white">Eliminating Rate Confirmation Delays.</strong>
                    <br />
                    Your freight moves <span className="text-[#FF8000]">immediately</span> because we control the
                    schedule—not a broker playing middleman.
                  </li>
                  <li>
                    <strong className="text-white">Direct Communication – No Broker Runaround.</strong>
                    <br />
                    One contact. <span className="text-[#FF8000]">One source of truth.</span> No "let me check with the
                    carrier" delays.
                  </li>
                  <li>
                    <strong className="text-white">Transparent, Consistent Pricing.</strong>
                    <br />
                    No middleman markups. No last-minute rate hikes. Just{" "}
                    <span className="text-[#FF8000]">straight, execution-driven pricing.</span>
                  </li>
                  <li>
                    <strong className="text-white">Lean, Six Sigma Approach for Maximum Efficiency.</strong>
                    <br />
                    Freight should move without{" "}
                    <span className="text-[#FF8000]">delays, inefficiencies, or unnecessary handoffs.</span>
                    <br />
                    We apply{" "}
                    <span className="text-[#FF8000]">
                      Kaizen principles, continuous improvement, and disciplined logistics management
                    </span>{" "}
                    to keep loads moving on time, every time.
                  </li>
                </motion.ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-16"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-[#FF8000]">
                Competitive Breakdown: One Stop Growth vs. Brokers vs. Large Carriers
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0000FF] text-white">
                      <th className="p-3 border border-[#FF8000]">Feature</th>
                      <th className="p-3 border border-[#FF8000]">One Stop Growth (Us)</th>
                      <th className="p-3 border border-[#FF8000]">Freight Brokers</th>
                      <th className="p-3 border border-[#FF8000]">Large Carriers</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-[#FF8000] font-semibold">Who Handles Your Freight?</td>
                      <td className="p-3 border border-[#FF8000] bg-[#000037] text-[#FF8000] font-bold">
                        Our Own Trucks & Drivers
                      </td>
                      <td className="p-3 border border-[#FF8000]">Unknown carriers, may change load to load</td>
                      <td className="p-3 border border-[#FF8000]">Varies, often subcontracts</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-[#FF8000] font-semibold">Communication & Reliability</td>
                      <td className="p-3 border border-[#FF8000] bg-[#000037] text-[#FF8000] font-bold">
                        One Contact – No Runaround
                      </td>
                      <td className="p-3 border border-[#FF8000]">Slow, layered communication</td>
                      <td className="p-3 border border-[#FF8000]">Large call centers, delayed response times</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-[#FF8000] font-semibold">Pricing Transparency</td>
                      <td className="p-3 border border-[#FF8000] bg-[#000037] text-[#FF8000] font-bold">
                        Fixed Rates – No Markups
                      </td>
                      <td className="p-3 border border-[#FF8000]">Inflated rates, broker takes a cut</td>
                      <td className="p-3 border border-[#FF8000]">Standardized pricing, but rigid</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-[#FF8000] font-semibold">Flexibility & Customization</td>
                      <td className="p-3 border border-[#FF8000] bg-[#000037] text-[#FF8000] font-bold">
                        Tailored to Your Needs
                      </td>
                      <td className="p-3 border border-[#FF8000]">Limited control, load gets passed around</td>
                      <td className="p-3 border border-[#FF8000]">Standardized, less flexibility</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-[#FF8000] font-semibold">Speed & Efficiency</td>
                      <td className="p-3 border border-[#FF8000] bg-[#000037] text-[#FF8000] font-bold">
                        Direct Carrier – No Middlemen
                      </td>
                      <td className="p-3 border border-[#FF8000]">Delays from miscommunication & load transfers</td>
                      <td className="p-3 border border-[#FF8000]">Large network, but slower adaptability</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-[#FF8000] font-semibold">Technology & Tracking</td>
                      <td className="p-3 border border-[#FF8000] bg-[#000037] text-[#FF8000] font-bold">
                        Real-time GPS, ELD tracking
                      </td>
                      <td className="p-3 border border-[#FF8000]">Depends on the carrier used</td>
                      <td className="p-3 border border-[#FF8000]">Large systems, but often outdated</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-[#FF8000] font-semibold">Customer Service</td>
                      <td className="p-3 border border-[#FF8000] bg-[#000037] text-[#FF8000] font-bold">
                        Personalized, Owner-Involved Service
                      </td>
                      <td className="p-3 border border-[#FF8000]">High volume, low-touch customer service</td>
                      <td className="p-3 border border-[#FF8000]">Large bureaucracy, long response times</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-16 text-center"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#FF8000]">Freight Shouldn't Sit. Let's Move It.</h3>
              <p className="text-lg mb-6 text-gray-300">
                Shippers don't have time for{" "}
                <span className="text-white font-semibold">
                  missed appointments, rate games, or unreliable execution.
                </span>
                <br />
                With One Stop Growth, you get:
              </p>
              <ul className="text-lg mb-8 text-gray-300 list-none space-y-2">
                <li>
                  <span className="text-[#FF8000] font-semibold">A direct asset-based carrier</span> – No middlemen. No
                  excuses. Just execution.
                </li>
                <li>
                  <span className="text-[#FF8000] font-semibold">Guaranteed capacity with our fleet</span> – Your
                  shipment is our priority.
                </li>
                <li>
                  <span className="text-[#FF8000] font-semibold">
                    Reliable service, real-time updates, and clear communication.
                  </span>
                </li>
              </ul>
              <Button
                asChild
                className="bg-[#FF8000] hover:bg-[#FF9900] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <Link href="/contact">Secure Your Freight Capacity Today →</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* The Problem with Traditional Freight Logistics */}
        <section className="py-20 bg-gradient-to-b from-[#000047] to-[#000037]">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 leading-tight tracking-wide text-center text-[#FF8000]"
            >
              The Challenges of Freight Logistics & How We Solve Them
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg leading-relaxed mb-6 tracking-wide text-gray-300"
            >
              Freight isn't a guessing game—at least, it shouldn't be. Too many carriers operate in survival mode,
              chasing loads instead of structuring their business for long-term success. That's how you get:
            </motion.p>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-[300px] md:h-[400px]"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-15%20at%2012.23.37%E2%80%AFAM-82SqusvuNQbAclBmlX1u56U2GJVtWO.png"
                  alt="Snow-covered winter road conditions demonstrating challenging freight logistics scenarios"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </motion.div>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start bg-gradient-to-r from-[#000047] to-[#0000FF] p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,255,0.2)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(255,128,0,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <AlertTriangle className="w-8 h-8 text-[#FF8000] mr-4 flex-shrink-0 relative z-10" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 leading-tight tracking-wide text-white">
                      Freight Instability
                    </h3>
                    <p className="text-gray-300 leading-relaxed tracking-wide">
                      Running load to load with no predictable revenue.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start bg-gradient-to-r from-[#000047] to-[#0000FF] p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,255,0.2)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(255,128,0,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <PieChart className="w-8 h-8 text-[#FF8000] mr-4 flex-shrink-0 relative z-10" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 leading-tight tracking-wide text-white">
                      Wasted Miles & Deadhead
                    </h3>
                    <p className="text-gray-300 leading-relaxed tracking-wide">
                      Poor planning leads to empty miles and lost profits.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start bg-gradient-to-r from-[#000047] to-[#0000FF] p-6 rounded-lg shadow-[0_10px_20px_rgba(0,0,255,0.2)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[rgba(255,128,0,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <MessageCircle className="w-8 h-8 text-[#FF8000] mr-4 flex-shrink-0 relative z-10" />
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 leading-tight tracking-wide text-white">
                      Lack of Coordination
                    </h3>
                    <p className="text-gray-300 leading-relaxed tracking-wide">
                      Disorganized operations lead to delays and frustration.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg mt-8 font-bold text-center text-[#FF8000]"
            >
              That's not how we operate. We execute with precision, every time.
            </motion.p>
          </div>
        </section>

        {/* Our Approach – Freight Execution, No Guesswork */}
        <section className="py-20 bg-[#000037]">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 leading-tight tracking-wide text-center text-[#FF8000]"
            >
              Our Approach – Freight Execution, No Guesswork
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={Truck}
                title="Reliable, Broker-Friendly Load Execution"
                description="Clear, professional communication with brokers and dispatchers. On-time pickup and delivery—because timing is everything. Layover & detention transparency—no surprises."
              />
              <FeatureCard
                icon={MapPin}
                title="Route Optimization & Freight Planning"
                description="Minimized deadhead miles to cut costs and maximize efficiency. Strategic load sequencing to keep freight moving without downtime. Back-to-back load execution for seamless operations."
              />
              <FeatureCard
                icon={Shield}
                title="Fleet & Compliance Standards"
                description="Fleet ready for any load: Power-Only, CDL-rated 26ft Box Trucks, and Hot Shot units. Reefer breakdown coverage, 100K Cargo Insurance, Motive ELD Compliance, and SCAC Certified."
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg mt-8 text-center"
            >
              <span className="text-[#FF8000]">
                Curious about what makes a load profitable? Use our free Load Profitability Calculator to analyze rates
                and make informed decisions.{" "}
                <Link href="/calculator" className="hover:underline">
                  Try it now →
                </Link>
              </span>
            </motion.p>
          </div>
        </section>

        {/* Where We Stand – Full Broker Readiness */}
        <section className="py-20 bg-gradient-to-b from-[#000037] to-[#000047]">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 leading-tight tracking-wide text-center text-[#FF8000]"
            >
              Where We Stand – Full Broker Readiness
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg mb-8 text-center text-gray-300"
            >
              Brokers don't like surprises, and neither do we. Here's where we stand:
            </motion.p>
            <div className="max-w-2xl mx-auto">
              <TimelineItem
                date="🚛 Roadside Inspection"
                title="Compliance Verified"
                description="Our fleet has passed one roadside inspection, ensuring compliance with FMCSA regulations. All documentation has been submitted for our new entrant safety audit."
              />
              <TimelineItem
                date="🛡️ Drug & Alcohol Compliance"
                title="Safety First"
                description={
                  <>
                    We partner with{" "}
                    <Link
                      href="https://gradientway.com"
                      className="text-[#FF8000] hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gradient Way
                    </Link>{" "}
                    for Drug & Alcohol Program Management & Clearinghouse Compliance. Every driver is screened and
                    monitored to meet DOT safety standards.
                  </>
                }
              />
              <TimelineItem
                date="📊 Transparency & Compliance"
                title="Building Trust"
                description={
                  <>
                    Brokers and shippers can trust that we run a fully compliant and accountable operation. We are
                    focused on building dedicated lanes for our trucks instead of relying solely on spot rates. Our goal
                    is to meet our margins while remaining fair with brokers to create long-term partnerships.{" "}
                    <Link href="/calculator" className="text-[#FF8000] hover:underline">
                      Run a Profitability Check →
                    </Link>
                  </>
                }
              />
            </div>
          </div>
        </section>

        {/* How We Operate – A Methodical Execution Process */}
        <section className="py-20 bg-[#000047]">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 leading-tight tracking-wide text-center text-[#FF8000]"
            >
              How We Operate – A Methodical Execution Process
            </motion.h2>
            <div className="max-w-3xl mx-auto">
              <ProcessStep
                number={1}
                title="Smart Load Strategy"
                description="Lane-based planning instead of random spot market scrambling. Tactical scheduling to maximize efficiency and reduce downtime."
              />
              <ProcessStep
                number={2}
                title="Flawless Execution"
                description="Live tracking & updates—no broker chasing down status reports. Direct coordination—consistent communication from pickup to delivery."
              />
              <ProcessStep
                number={3}
                title="Continuous Refinement"
                description="Data-driven adjustments to eliminate waste and optimize future loads. Proactive issue management—solving problems before they start."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-[#000047] to-[#000037]">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6 leading-tight tracking-wide text-[#FF8000]"
            >
              Why One Stop Growth?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed tracking-wide text-gray-300"
            >
              "Most carriers just move freight. We execute logistics with strategy."
            </motion.p>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed tracking-wide text-gray-300 text-left"
            >
              <li className="flex items-center mb-2">
                <CheckCircle className="text-[#FF8000] mr-2" size={20} />
                <span>Consistent Execution – On-time, optimized, and broker-friendly.</span>
              </li>
              <li className="flex items-center mb-2">
                <CheckCircle className="text-[#FF8000] mr-2" size={20} />
                <span>Technology-Driven Transparency – Real-time tracking, compliance-first.</span>
              </li>
              <li className="flex items-center mb-2">
                <CheckCircle className="text-[#FF8000] mr-2" size={20} />
                <span>Reliable Broker Partnerships – No surprises, no excuses—just results.</span>
              </li>
            </motion.ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg mb-8 text-center text-gray-300"
            >
              <p className="mb-4">
                If you're a broker looking for a contract-ready carrier, let's discuss dedicated lanes. If you're a
                shipper searching for a direct carrier relationship, we're ready to execute.
              </p>
              <Button
                asChild
                className="bg-[#FF8000] hover:bg-[#FF9900] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                <Link href="/contact">Book Freight Execution Now</Link>
              </Button>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg mt-8 text-center text-gray-300"
            >
              We execute with precision, ensuring both carriers and brokers succeed.{" "}
              <Link href="/calculator" className="text-[#FF8000] hover:underline">
                Get a real-time look at profitability with our Load Profitability Calculator →
              </Link>
            </motion.p>
          </div>
        </section>
      </GradientBackground>

      <Footer />
    </main>
  )
}
