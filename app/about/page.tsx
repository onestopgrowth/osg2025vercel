"use client"

import type React from "react"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Shield, PieChart, Truck, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useInView } from "react-intersection-observer"

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 text-center"
  >
    {children}
  </motion.h2>
)

const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType
  title: string
  description: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-blue-50 p-6 shadow-xl border border-blue-100"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#FF8000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <Icon className="w-12 h-12 text-[#FF8000] mb-4 transform group-hover:scale-110 transition-transform duration-300" />
    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#FF8000] transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </motion.div>
)

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={`py-20 bg-white ${className}`}
    >
      {children}
    </motion.section>
  )
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />

      {/* Enhanced Hero Section */}
      <motion.section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0 w-full h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Growth%20About%20Hero-V5n3yzVFU8rXoTOsVgvfLjnnZhZkuN.png"
            alt="Night view of Philadelphia skyline with illuminated buildings and a semi-truck driving on the highway"
            layout="fill"
            objectFit="cover"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/80" />
        </motion.div>

        <motion.div
          style={{ y: textY, opacity: heroOpacity }}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight tracking-tight"
          >
            One Stop Growth: Where Vision Meets Execution
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-gray-700"
          >
            We don't just plan for growth. We build it.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Remove the Link element */}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-2 h-2 bg-white/70 rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Introduction Section */}
      <Section className="bg-gradient-to-r from-white to-blue-50">
        <div className="container mx-auto px-4">
          <p className="text-lg mb-6 max-w-3xl mx-auto text-center text-gray-700">
            At One Stop Growth, we blend cutting-edge technology with time-tested business principles. Our approach is
            rooted in discipline, data-driven decisions, and a relentless focus on execution.
          </p>
        </div>
      </Section>

      {/* Eagles Celebration Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-3xl font-bold bg-gradient-to-r from-[#004C54] via-[#A5A5A5] to-[#004C54] text-transparent bg-clip-text animate-pulse mb-6">
              ...but before we get into it, Congrats to OUR Philadelphia Eagles, SuperBowl LIX CHAMPIONS!
            </p>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngegg-ekfbxQrJFyDOk3MLuJJT2SVeZd0KEM.png"
                alt="Philadelphia Eagles Logo"
                width={200}
                height={160}
                className="mx-auto drop-shadow-[0_0_10px_rgba(0,76,84,0.5)]"
              />
            </motion.div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xl leading-relaxed mb-6 max-w-3xl mx-auto text-center text-gray-700"
          >
            At One Stop Growth, we blend cutting-edge technology with time-tested business principles. Our approach is
            rooted in discipline, data-driven decisions, and a relentless focus on execution.
          </motion.p>
        </div>
      </section>

      {/* We Are Philly Section */}
      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle>Philly Born, Globally Focused</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-center">
                  <span className="text-[#FF8000] mr-2">•</span> Born in the city of underdogs, we bring grit to every
                  project.
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF8000] mr-2">•</span> Tough as the Eagles' defense, resilient like Rocky.
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF8000] mr-2">•</span> We embody the spirit of innovation that's shaped Philly
                  since 1776.
                </li>
              </ul>
              <p className="text-lg mt-6 text-gray-700">
                Our roots in Philadelphia shape our approach to business: tough, innovative, and always punching above
                our weight. But our vision extends far beyond the city limits. We bring this Philly spirit to clients
                across the globe, combining local grit with world-class expertise.
              </p>
            </div>
            <div className="relative w-full aspect-square md:aspect-[4/3]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(13)-c8rpTziJeJ3DsgTqWSXFLSEGepepMC.png"
                alt="Liberty Bell floating in space above Earth, symbolizing Philadelphia's global reach"
                fill
                className="rounded-lg object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Section>

      {/* The Stoic Approach Section */}
      <Section className="bg-gradient-to-b from-blue-50 to-blue-100 relative">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stoic%20OSG-okpk2fghI2bUajhjCLfD52b7AMrj3g.png"
            alt="Marcus Aurelius statue on horseback against an American flag background, symbolizing the fusion of classical wisdom with modern execution"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle>Our Philosophy: Stoic Execution in a Chaotic World</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                <Shield className="mr-2 text-[#FF8000]" /> Disciplined Execution
              </h3>
              <p className="text-gray-700 mb-6">
                In a world of constant change, we focus on what we can control: our actions, our strategies, and our
                commitment to excellence.
              </p>
              <h3 className="text-2xl font-bold mb-4 flex items-center text-gray-900">
                <Code className="mr-2 text-[#FF8000]" /> Results, Not Rhetoric
              </h3>
              <p className="text-gray-700">
                We believe in the power of tangible outcomes. Our work speaks louder than any sales pitch ever could.
              </p>
            </div>
            <div>
              <blockquote className="italic text-xl text-gray-600 mb-6">
                "You have power over your mind - not outside events. Realize this, and you will find strength."
                <footer className="text-right">- Marcus Aurelius</footer>
              </blockquote>
              <blockquote className="italic text-xl text-gray-600">
                "We suffer more often in imagination than in reality."
                <footer className="text-right">- Seneca</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </Section>

      {/* Services & Methodology Section */}
      <Section id="methodology" className="bg-gradient-to-r from-white to-blue-50">
        <div className="container mx-auto px-4">
          <SectionTitle>Our Services & Methodology</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <ServiceCard
              icon={Code}
              title="Software Development"
              description="Crafting high-performance, scalable solutions that drive real business growth."
            />
            <ServiceCard
              icon={Shield}
              title="IT Infrastructure & Cybersecurity"
              description="Building robust, secure systems that stand up to modern threats."
            />
            <ServiceCard
              icon={PieChart}
              title="Business Development"
              description="Strategic lead generation and CRM optimization for measurable results."
            />
            <ServiceCard
              icon={Truck}
              title="Logistics & Freight"
              description="Precision logistics execution with real-time tracking and zero excuses."
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Our Methodology</h3>
            <div className="flex justify-center space-x-8 mb-8">
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF8000] to-[#FF4D00] flex items-center justify-center mb-4 mx-auto"
                >
                  <span className="text-2xl font-bold text-white">6σ</span>
                </motion.div>
                <p className="font-bold text-gray-900">Six Sigma</p>
              </div>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF8000] to-[#FF4D00] flex items-center justify-center mb-4 mx-auto"
                >
                  <span className="text-2xl font-bold text-white">A</span>
                </motion.div>
                <p className="font-bold text-gray-900">Agile</p>
              </div>
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF8000] to-[#FF4D00] flex items-center justify-center mb-4 mx-auto"
                >
                  <span className="text-2xl font-bold text-white">改</span>
                </motion.div>
                <p className="font-bold text-gray-900">Kaizen</p>
              </div>
            </div>
            <p className="text-lg mb-4 text-gray-700">
              Our methodology isn't just a buzzword—it's the backbone of everything we do. We combine the precision of
              Six Sigma, the adaptability of Agile, and the continuous improvement mindset of Kaizen to create a
              powerful framework for success.
            </p>
            <p className="text-lg text-gray-700">
              This unique blend allows us to eliminate inefficiencies, adapt quickly to changing markets, and
              consistently deliver superior results. It's not just about working harder—it's about working smarter, with
              a relentless focus on measurable outcomes.
            </p>
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="bg-gradient-to-b from-white to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">We don't just consult. We execute.</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-700">
              We're not here to sell you services. We're here to partner with you, to roll up our sleeves and drive
              real, measurable growth for your business. If you're ready for a different kind of growth partner—one that
              values execution over excuses—you're in the right place.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8000] to-[#FF4D00] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FF8000]/20"
              >
                Start Your Growth Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
