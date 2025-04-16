"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Shield, MapPin, ArrowRight, AlertTriangle, PieChart, MessageCircle, Truck, CheckCircle } from "lucide-react"
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
              Precision in Every Mile. Execution in Every Load.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg mb-8 max-w-3xl text-gray-300"
            >
              Freight isn't just about moving goods—it's about strategy. We operate with discipline, ensuring every load
              is handled with intent, every mile is optimized, and every broker gets the reliability they need. No
              delays. No excuses. Just execution.
            </motion.p>
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
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#FF8000] to-[#FFA500] text-[#000047] px-8 py-4 rounded-lg font-bold text-lg hover:from-[#FFA500] hover:to-[#FF8000] transition duration-300 min-w-[200px] h-[60px] shadow-[0_10px_20px_rgba(255,128,0,0.3)] hover:shadow-[0_15px_30px_rgba(255,128,0,0.5)]"
              >
                Contact Us
                <ArrowRight className="ml-2" size={24} />
              </Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
