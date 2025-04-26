"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToNextSection = () => {
    const servicesSection = document.querySelector("#services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-transparent py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      <div className="container mx-auto px-0 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1 px-4 md:px-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] leading-tight"
            >
              The Tools to Dominate Across Industries, Systems, and Chaos.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-700 max-w-xl"
            >
              One Stop Growth empowers businesses in transportation, construction, manufacturing, and real estate to
              modernize operations, unify growth systems and unlock unstoppable potential.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <Link href="/contact" className="flex-1 sm:flex-initial">
                <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-3 rounded-md text-base md:text-lg font-medium transition-all duration-300 w-full">
                  Build Your Growth Engine
                </Button>
              </Link>

              <Button
                onClick={scrollToNextSection}
                variant="outline"
                className="border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5]/10 px-6 py-3 rounded-md text-base md:text-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 w-full"
              >
                <span className="whitespace-nowrap">Our Competencies</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Device Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full order-1 lg:order-2 -mt-4 md:mt-0"
          >
            {/* Mobile-optimized positioning */}
            <div className="absolute top-0 right-0 w-[85%] h-[75%] bg-[#0f172a] rounded-2xl overflow-hidden shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
              <div className="relative w-full h-full">
                <Image
                  src="/logistics-network.png"
                  alt="Digital US map with glowing network connections and industrial infrastructure visualization"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 40vw"
                  priority
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-[#0f172a] rounded-2xl overflow-hidden shadow-xl z-20">
              <div className="relative w-full h-full">
                <Image
                  src="/business-dashboard.png"
                  alt="Business analytics dashboard showing performance metrics and growth data"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw, 25vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile scroll indicator - only visible on smaller screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500 mb-2">Scroll to explore</span>
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            className="w-5 h-5 text-gray-400"
          >
            <ArrowRight className="transform rotate-90" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
