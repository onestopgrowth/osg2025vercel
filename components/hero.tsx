"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Inter } from "next/font/google"
import { Button } from "@/components/ui/button"

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
    <section ref={sectionRef} className={`relative h-screen ${inter.className}`}>
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
        <div className="absolute inset-0 bg-[#000033]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center h-full pt-[250px]">
        <motion.h1
          variants={textVariants}
          animate="animate"
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-center mb-32"
        >
          Our focus is on growth
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button
            onClick={scrollToNextSection}
            className="bg-[#FF8000] hover:bg-[#FF8000]/90 text-white px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 flex items-center gap-2"
          >
            Get a clearer picture
            <ChevronDown className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

