"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import SparklyText from "./sparkly-text"

const inter = Inter({ subsets: ["latin"] })

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToNextSection = () => {
    const servicesSection = document.querySelector("#services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const textVariants = {
    animate: {
      filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
      opacity: [1, 0.7, 1],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      },
    },
  }

  return (
    <section ref={sectionRef} className={`relative h-screen flex flex-col ${inter.className}`}>
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Growth%20Hero.jpg-GHpT3qLWPfleY5WP4Yk0rofDwcq5eB.jpeg"
          alt="Plant growing through keyboard symbolizing digital growth"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002347]/70 via-[#003366]/60 to-[#003F7D]/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Main Text */}
        <div className="flex-1 flex items-end justify-center pb-32">
          <motion.h1
            className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight whitespace-nowrap"
            variants={textVariants}
            animate="animate"
          >
            Our focus is on growth
          </motion.h1>
        </div>

        {/* Get a clearer picture Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center cursor-pointer group mb-12"
          onClick={scrollToNextSection}
        >
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide text-white">
            <SparklyText color="#FF8E00" numberOfSparkles={8}>
              Get a clearer picture
            </SparklyText>
          </div>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="text-white w-5 h-5 sm:w-6 sm:h-6 group-hover:text-[#FF8000] transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

