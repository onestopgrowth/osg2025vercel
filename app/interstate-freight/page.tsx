"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Truck, Check, ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div ref={ref} className="bg-gradient-to-b from-[#000047] to-[#000027]">
      {children}
    </motion.div>
  )
}

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default function InterStateFreight() {
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

        <Section>
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF8000]">
              One Stop Growth: Freight Without the Middlemen – Just Execution
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Freight Should Move Fast. We Make It Happen.
            </h2>
            <p className="text-xl mb-6 text-gray-300">
              Shippers don't have time for <strong>missed appointments, rate games, or unreliable execution.</strong>
              <br />
              At <strong>One Stop Growth</strong>, we cut through the inefficiencies to deliver{" "}
              <strong>fast, reliable, asset-based trucking solutions.</strong>
            </p>
            <ul className="list-none space-y-2 mb-8">
              <li className="flex items-center">
                <Check className="text-[#FF8000] mr-2" />{" "}
                <span className="text-lg">Reefer & Dry Freight Expertise</span>
              </li>
              <li className="flex items-center">
                <Check className="text-[#FF8000] mr-2" /> <span className="text-lg">Regional & Interstate Lanes</span>
              </li>
              <li className="flex items-center">
                <Check className="text-[#FF8000] mr-2" /> <span className="text-lg">On-Time, No-Excuse Hauling</span>
              </li>
            </ul>
            <p className="text-xl font-bold mb-4">Ready to move freight with a carrier that actually executes?</p>
            <Button asChild className="bg-[#FF8000] hover:bg-[#FF9900] text-white">
              <Link href="/contact">
                Get a Quote in 60 Seconds <Truck className="ml-2" />
              </Link>
            </Button>
          </div>
        </Section>

        <Section className="bg-[#000037]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-[#FF8000]">The Broker Callout – But Not a Shutout</h2>
            <p className="text-xl mb-6 text-gray-300">
              Not all brokers slow freight down—but some do. We work with the ones who get it.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Brokers We Avoid:</h3>
                <p>
                  Those who waste time{" "}
                  <strong>
                    shopping for the lowest bidder, delaying rate confirmations, and causing unnecessary disruptions.
                  </strong>
                </p>
              </div>
              <div className="bg-green-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Brokers We Work With:</h3>
                <p>
                  Those who <strong>run efficient operations, communicate well, and respect carriers.</strong>
                </p>
              </div>
            </div>
            <ul className="list-none space-y-2 mb-8">
              <li className="flex items-center">
                <Check className="text-[#FF8000] mr-2" />{" "}
                <span>
                  We value relationships with All Transportation, Sims Global, Integrity Express, Armstrong, RXO
                  Capacity Solutions, Scottlyn, and PLS.
                </span>
              </li>
              <li className="flex items-center">
                <Check className="text-[#FF8000] mr-2" />{" "}
                <span>If you operate efficiently and respect our capacity, we welcome working together.</span>
              </li>
            </ul>
            <p className="text-xl mb-6">
              Shippers and brokers alike can count on <strong>execution-driven freight solutions.</strong>
            </p>
            <Button asChild className="bg-[#FF8000] hover:bg-[#FF9900] text-white">
              <Link href="/contact">
                Secure Reliable Capacity Today <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </Section>

        <Section>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-[#FF8000]">The One Stop Growth Competitive Advantage</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0000FF] text-white">
                    <th className="p-3 border border-[#FF8000]">Feature</th>
                    <th className="p-3 border border-[#FF8000]">One Stop Growth</th>
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
            <p className="text-xl mt-8 mb-6 text-center">
              <strong>Shippers who need reliable execution choose One Stop Growth.</strong>
            </p>
            <div className="text-center">
              <Button asChild className="bg-[#FF8000] hover:bg-[#FF9900] text-white">
                <Link href="/contact">
                  Book Reliable Freight Capacity <Truck className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>

        <Section className="bg-[#000037]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-[#FF8000]">Contract Freight or Spot Market? We Do Both.</h2>
            <p className="text-xl mb-6 text-gray-300">
              Freight capacity should be reliable—not a guessing game. We offer both contract freight for long-term
              stability and spot market capacity for flexibility. Whether you need dedicated lanes or just-in-time
              shipments, we execute with precision.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#000047] p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#FF8000]">Contract Freight</h3>
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                    <Check className="text-[#FF8000] mr-2" /> <span>Long-term stability</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[#FF8000] mr-2" /> <span>Dedicated lanes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[#FF8000] mr-2" /> <span>Predictable pricing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#000047] p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#FF8000]">Spot Market</h3>
                <ul className="list-none space-y-2">
                  <li className="flex items-center">
                    <Check className="text-[#FF8000] mr-2" /> <span>Flexibility for varying needs</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[#FF8000] mr-2" /> <span>Just-in-time shipments</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="text-[#FF8000] mr-2" /> <span>Competitive rates</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-xl mt-8 mb-6">
              <strong>Choose the option that best fits your business needs. We execute both with precision.</strong>
            </p>
            <Button asChild className="bg-[#FF8000] hover:bg-[#FF9900] text-white">
              <Link href="/contact">
                Discuss Your Freight Needs <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </Section>

        <Section>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-[#FF8000]">Where We Operate – Regional & Interstate Lanes</h2>
            <p className="text-xl mb-6 text-gray-300">
              We specialize in <strong>reefer and dry freight</strong>, covering high-demand lanes with{" "}
              <strong>guaranteed execution.</strong>
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-[#000047] p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#FF8000]">West Coast Operations</h3>
                <ul className="list-none space-y-2">
                  <li className="flex items-start">
                    <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Lane:</strong> CA → NV → AZ → CA Loop
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Freight Type:</strong> Temperature-sensitive (dairy, seafood, produce)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Advantage:</strong> Short-haul lanes for reduced deadhead & fresher deliveries
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#000047] p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#FF8000]">East Coast Operations</h3>
                <ul className="list-none space-y-2">
                  <li className="flex items-start">
                    <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Lane:</strong> Philly → VA, MD, NC Regional Runs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Freight Type:</strong> High-volume food & beverage freight
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Advantage:</strong> Efficient routing and traffic patterns.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#000047] p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-[#FF8000]">Box Truck Regional Freight</h3>
                <ul className="list-none space-y-2">
                  <li className="flex items-start">
                    <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Lane:</strong> PA → NJ, DE, MD, VA
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Freight Type:</strong> Reefer & dry box truck freight
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Advantage:</strong> Dock-height, pallet-jack-ready trucks for food, medical, and
                      industrial loads
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-xl mb-6">
              💡 <strong>Need a reliable carrier in these lanes? Let's talk.</strong>
            </p>
            <Button asChild className="bg-[#FF8000] hover:bg-[#FF9900] text-white">
              <Link href="/contact">
                Secure Your Dedicated Capacity Now <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </Section>

        <Section>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-[#FF8000]">Why Choose One Stop Growth?</h2>
            <ul className="list-none space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>We Own Our Fleet.</strong> The truck you book is the truck that arrives.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Diverse Equipment Options.</strong> We run more than just reefers and dry vans. Our fleet
                  includes power-only units, 53' dry vans, reefers, and 26' box trucks—giving you more options for
                  different freight needs.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Direct Communication.</strong> No middlemen, no runaround—just straight answers and real-time
                  updates.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Real-Time Tracking & Communication.</strong> We provide live GPS tracking and automated
                  updates so you always know where your freight is. No chasing down load statuses—just full visibility,
                  24/7.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Execution-Driven Approach.</strong> We apply Six Sigma and Lean principles to eliminate
                  inefficiencies and deliver consistent results.
                </span>
              </li>
              <li className="flex items-start">
                <Check className="text-[#FF8000] mr-2 mt-1 flex-shrink-0" />
                <span>
                  <strong>Flexibility.</strong> Whether you need contract freight or spot market solutions, we've got
                  you covered.
                </span>
              </li>
            </ul>
            <Button asChild className="bg-[#FF8000] hover:bg-[#FF9900] text-white">
              <Link href="/contact">
                Let's Move Freight – Contact Us <Truck className="ml-2" />
              </Link>
            </Button>
          </div>
        </Section>

        <Section className="bg-[#000037]">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#FF8000]">Take Action – Book Reliable Freight Now</h2>
            <p className="text-2xl mb-8 text-white">
              💡 <strong>Freight Shouldn't Sit. Let's Move It.</strong>
            </p>
            <div className="space-y-4">
              <Button asChild className="bg-[#FF8000] hover:bg-[#FF9900] text-white w-full md:w-auto">
                <Link href="/contact">
                  Get a Quote in 60 Seconds <Truck className="ml-2" />
                </Link>
              </Button>
              <p className="flex items-center justify-center">
                <Phone className="mr-2" /> <strong>Call Us Directly:</strong> 215-219-3149
              </p>
              <p className="flex items-center justify-center">
                <Mail className="mr-2" /> <strong>Email Our Freight Team:</strong> dispatch@onestopgrowth.com
              </p>
            </div>
            <div className="mt-12 relative w-full max-w-3xl mx-auto aspect-video">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Growth%20Box%20Truck.png-qyYcLIJatJFTy9qOTf2ePemtSjE7E0.jpeg"
                alt="One Stop Growth branded box truck with company logo and DOT/MC numbers, showcasing our professional fleet in downtown Philadelphia"
                fill
                className="object-cover rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </Section>
      </GradientBackground>

      <Footer />
    </main>
  )
}
