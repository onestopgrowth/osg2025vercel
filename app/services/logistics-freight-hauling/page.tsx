"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle, Truck, MapPin, Clock, Shield, BarChart3, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Define the company's color palette
const colors = {
  primaryBlue: "#0052cc", // Deep blue from logo
  secondaryBlue: "#0077cc", // Medium blue
  lightBlue: "#e6f2ff", // Light blue for backgrounds
  primaryGreen: "#00875a", // Green from logo
  lightGreen: "#e3fcef", // Light green for backgrounds
  accentOrange: "#FF8000", // Keep the orange accent for CTAs
}

const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#ffffff", "#f0f7ff", "#e6f2ff"])

  return (
    <motion.div ref={ref} style={{ backgroundColor }} className="relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-[#0052cc]/10 to-[#00875a]/10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-l from-[#0052cc]/10 to-[#00875a]/10 pointer-events-none" />

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
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className="bg-white p-6 rounded-lg border-0 overflow-hidden relative h-full flex flex-col
        shadow-[0_4px_20px_rgba(0,82,204,0.1)]
        hover:shadow-[0_8px_30px_rgba(0,82,204,0.2)]
        transition-all duration-300"
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[${colors.primaryBlue}]/5 to-[${colors.primaryGreen}]/5 
          transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[${colors.primaryBlue}] to-[${colors.primaryGreen}] 
          transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-50"}`}
        />

        <div className="relative z-10 flex flex-col h-full">
          <div className="bg-gradient-to-r from-[#0052cc]/10 to-[#00875a]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            <Icon
              className={`w-8 h-8 text-[${colors.primaryBlue}] transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}
            />
          </div>
          <h3 className="text-xl font-bold mb-2 leading-tight tracking-wide text-gray-900">{title}</h3>
          <p className="text-sm text-gray-700 leading-relaxed tracking-wide">{description}</p>
        </div>
      </Card>
    </motion.div>
  )
}

export default function LogisticsFreightHauling() {
  return (
    <main className="min-h-screen text-gray-900 overflow-hidden tracking-wide">
      <Header />

      <GradientBackground>
        {/* Hero Section */}
        <section className="relative w-full max-w-[1920px] mx-auto h-[500px] md:h-[600px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0052cc]/80 to-[#00875a]/80 mix-blend-multiply z-10" />

          <Image
            src="/images/one-stop-growth-freight-hauling.png"
            alt="One Stop Growth branded semi-truck with shipping containers in the background at sunset, showcasing our professional freight hauling and logistics services"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-20" />

          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-sm font-medium z-30 shadow-lg">
            <Badge variant="outline" className="bg-[#0052cc]/10 text-[#0052cc] border-[#0052cc]/20 mr-2">
              DOT: 4279426
            </Badge>
            <Badge variant="outline" className="bg-[#00875a]/10 text-[#00875a] border-[#00875a]/20 mr-2">
              MC: 1663270
            </Badge>
            <Badge variant="outline" className="bg-[#0052cc]/10 text-[#0052cc] border-[#0052cc]/20">
              SCAC: ONRT
            </Badge>
          </div>

          <div className="absolute inset-0 flex items-center z-30">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.95, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-white/20"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
                  Freight Without The Middlemen – Just Execution
                </h1>
                <p className="text-xl mb-6 text-gray-700">Freight Should Move Fast. We Make It Happen.</p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FF8000] hover:bg-[#FF8000]/90 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Get a Quote in 60 Seconds
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-b border-[#0052cc]/10">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Reliable Execution When It Matters Most</h2>
              <p className="text-lg mb-8 text-gray-700">
                Shippers don't have time for missed appointments, rate games, or unreliable execution. At One Stop
                Growth, we cut through the inefficiencies to deliver fast, reliable, asset-based trucking solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: <Truck className="h-6 w-6 text-[#0052cc]" />,
                  title: "Reefer & Dry Freight Expertise",
                },
                {
                  icon: <MapPin className="h-6 w-6 text-[#00875a]" />,
                  title: "Regional & Interstate Lanes",
                },
                {
                  icon: <Clock className="h-6 w-6 text-[#0052cc]" />,
                  title: "On-Time, No-Excuse Hauling",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start bg-gradient-to-r from-[#0052cc]/5 to-[#00875a]/5 p-4 rounded-lg shadow-sm"
                >
                  <div className="mr-3 flex-shrink-0 mt-0.5">{feature.icon}</div>
                  <p className="text-lg font-medium text-gray-900">{feature.title}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-16"
            >
              <p className="text-xl font-bold mb-6">Ready to move freight with a carrier that actually executes?</p>
              <Button
                asChild
                size="lg"
                className="bg-[#0052cc] hover:bg-[#0052cc]/90 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get a Quote in 60 Seconds
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Broker Section */}
        <section className="py-20 bg-gradient-to-r from-[#0052cc]/5 to-[#00875a]/5">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 leading-tight tracking-wide text-center text-[#0052cc]"
            >
              The Broker Callout – But Not A Shutout
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-lg leading-relaxed mb-10 tracking-wide text-gray-700 text-center max-w-3xl mx-auto"
            >
              Not all brokers slow freight down—but some do. We work with the ones who get it.
            </motion.p>

            <Tabs defaultValue="avoid" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="avoid" className="text-base">
                  Brokers We Avoid
                </TabsTrigger>
                <TabsTrigger value="work" className="text-base">
                  Brokers We Work With
                </TabsTrigger>
              </TabsList>
              <TabsContent value="avoid">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500"
                >
                  <h3 className="text-xl font-bold mb-4 text-red-600">Brokers We Avoid:</h3>
                  <ul className="text-gray-700 space-y-3 list-none">
                    {[
                      "Those who waste time shopping loads to the lowest bidder, delaying rate confirmations and creating operational bottlenecks.",
                      "Brokers who misrepresent load details, causing surprises at pickup or delivery.",
                      "Those who prioritize margin over long-term relationships with carriers.",
                      "Brokers who refuse to honor agreed-upon detention, TONU, or layover payments.",
                      "Those who fail to communicate critical changes (e.g., shipper hours, cancellations) in a timely and respectful manner.",
                      "Operations that treat carriers as expendable rather than essential partners.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-3 mt-0.5 bg-red-100 text-red-500 rounded-full">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </TabsContent>
              <TabsContent value="work">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500"
                >
                  <h3 className="text-xl font-bold mb-4 text-green-600">Brokers We Work With:</h3>
                  <ul className="text-gray-700 space-y-3 list-none">
                    {[
                      "Brokers who respect drivers' time and value carrier reliability equally with customer satisfaction.",
                      "Tech-forward brokers who are integrated with shippers' systems (TMS, YMS) and provide real-time updates.",
                      "Those who move quickly on rate confirmations, eliminating costly waiting games.",
                      "Partners who consistently honor accessorial charges (detention, layover, TONU) without unnecessary dispute.",
                      "Brokerages that prioritize accurate, detailed load information upfront to avoid disruption.",
                      "Operations that seek sustainable, repeat carrier relationships; not just one-and-done coverage.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </TabsContent>
            </Tabs>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-12 mb-10 max-w-4xl mx-auto"
            >
              <p className="text-gray-700 mb-6 p-4 bg-white rounded-lg shadow-sm border border-[#0052cc]/10">
                We value relationships with{" "}
                <a
                  href="https://www.alltransportationllc.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0052cc] hover:underline font-medium"
                >
                  All Transportation
                </a>
                ,{" "}
                <a
                  href="https://www.simsglobal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0052cc] hover:underline font-medium"
                >
                  Sims Global
                </a>
                ,{" "}
                <a
                  href="https://www.trinitylogistics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0052cc] hover:underline font-medium"
                >
                  Trinity Logistics
                </a>
                ,{" "}
                <a
                  href="https://www.royaltransportationgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0052cc] hover:underline font-medium"
                >
                  Royal Transportation
                </a>{" "}
                (based out of the Philadelphia area),{" "}
                <a
                  href="https://rxo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0052cc] hover:underline font-medium"
                >
                  RXO Capacity Solutions
                </a>
                , and{" "}
                <a
                  href="https://www.plslogistics.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0052cc] hover:underline font-medium"
                >
                  PLS
                </a>
                .
              </p>
              <div className="flex items-center justify-center mb-6 p-4 bg-[#00875a]/5 rounded-lg">
                <CheckCircle className="h-6 w-6 text-[#00875a] mr-3 flex-shrink-0" />
                <p className="text-lg font-medium text-gray-900">
                  If you operate efficiently and respect our capacity, we welcome working together.
                </p>
              </div>
              <p className="text-lg mb-8">
                Shippers and brokers alike can count on execution-driven freight solutions.
              </p>
              <Button
                asChild
                className="bg-[#00875a] hover:bg-[#00875a]/90 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Secure Reliable Capacity Today
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Lanes Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-[#0052cc] to-[#00875a] bg-clip-text text-transparent">
                Mid-Atlantic Freight Capacity You Can Count On
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
                Looking for reliable capacity in the Mid-Atlantic? We specialize in serving shippers throughout:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
                {[
                  { state: "Pennsylvania", cities: "Philadelphia, Pittsburgh, Allentown", color: "#0052cc" },
                  { state: "New Jersey", cities: "Newark, Jersey City, Camden", color: "#00875a" },
                  { state: "New York", cities: "NYC, Buffalo, Albany", color: "#0052cc" },
                  { state: "Maryland", cities: "Baltimore, Rockville, Annapolis", color: "#00875a" },
                  { state: "Delaware", cities: "Wilmington, Dover, Newark", color: "#0052cc" },
                  { state: "Virginia & DC", cities: "Richmond, Norfolk, Washington", color: "#00875a" },
                ].map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                    className="bg-gradient-to-br from-white to-[#f0f7ff] p-4 rounded-lg border border-[#0052cc]/10 shadow-md"
                  >
                    <div className="h-1 w-16 mx-auto mb-2 rounded-full" style={{ backgroundColor: location.color }} />
                    <p className="font-bold text-gray-900">{location.state}</p>
                    <p className="text-sm text-gray-700">{location.cities}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-lg font-bold text-gray-900 mb-6 p-3 bg-[#0052cc]/5 rounded-lg inline-block">
                  Stop struggling with capacity shortages in these critical lanes.
                </p>

                <div>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-[#0052cc] to-[#00875a] hover:from-[#0052cc]/90 hover:to-[#00875a]/90 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Secure Mid-Atlantic Capacity Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-gradient-to-r from-[#0052cc]/5 to-[#00875a]/5">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-12 leading-tight tracking-wide text-center bg-gradient-to-r from-[#0052cc] to-[#00875a] bg-clip-text text-transparent"
            >
              Why Choose One Stop Growth?
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12 auto-rows-fr">
              {[
                {
                  icon: Shield,
                  title: "Professional, Customer-Centric Drivers",
                  description:
                    "Our drivers are your boots on the ground - ELD compliant, BOL proficient, respectful, and representing your brand with the professionalism your customers expect.",
                },
                {
                  icon: Truck,
                  title: "Diverse Equipment Options",
                  description:
                    "We run more than just reefers and dry vans. Our fleet includes power-only units, 53' dry vans, reefers, and 26' box trucks—giving you more options for different freight needs.",
                },
                {
                  icon: Clock,
                  title: "Direct Communication",
                  description: "No middlemen, no runaround—just straight answers and real-time updates.",
                },
                {
                  icon: MapPin,
                  title: "Real-Time Tracking & Communication",
                  description:
                    "We provide live GPS tracking and automated updates so you always know where your freight is. No chasing down load statuses—just full visibility, 24/7.",
                },
                {
                  icon: BarChart3,
                  title: "Execution-Driven Approach",
                  description:
                    "We apply Six Sigma and Lean principles to eliminate inefficiencies and deliver consistent results.",
                },
                {
                  icon: Shield,
                  title: "Flexibility",
                  description: "Whether you need contract freight or spot market solutions, we've got you covered.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FeatureCard icon={benefit.icon} title={benefit.title} description={benefit.description} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto bg-gradient-to-r from-[#0052cc]/10 to-[#00875a]/10 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6 leading-tight tracking-wide text-gray-900">
                Let's Move Freight - Contact Us
              </h2>
              <p className="text-xl mb-8 leading-relaxed tracking-wide text-gray-700">
                Take Action – Book Reliable Freight Now
              </p>

              <p className="text-lg font-bold mb-6">Freight Shouldn't Sit. Let's Move It.</p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#0052cc] to-[#00875a] hover:from-[#0052cc]/90 hover:to-[#00875a]/90 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get a Quote in 60 Seconds
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center bg-white p-3 rounded-lg shadow-md"
                >
                  <p className="text-lg font-medium mb-1">Call Us Directly:</p>
                  <a href="tel:2152193149" className="text-[#0052cc] text-lg font-bold hover:underline">
                    215-219-3149
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center bg-white p-3 rounded-lg shadow-md"
                >
                  <p className="text-lg font-medium">
                    Email Our Freight Team:{" "}
                    <a href="mailto:dispatch@onestopgrowth.com" className="text-[#0052cc] hover:underline">
                      dispatch@onestopgrowth.com
                    </a>
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <div className="mt-12 text-center text-sm text-gray-600">
              <div className="flex justify-center gap-2">
                <Badge variant="outline" className="bg-[#0052cc]/10 text-[#0052cc] border-[#0052cc]/20">
                  DOT: 4279426
                </Badge>
                <Badge variant="outline" className="bg-[#00875a]/10 text-[#00875a] border-[#00875a]/20">
                  MC: 1663270
                </Badge>
                <Badge variant="outline" className="bg-[#0052cc]/10 text-[#0052cc] border-[#0052cc]/20">
                  SCAC: ONRT
                </Badge>
              </div>
            </div>
          </div>
        </section>
      </GradientBackground>

      <Footer />
    </main>
  )
}
