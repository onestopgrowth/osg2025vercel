"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, Target, PieChart, RefreshCcw, BarChart, Users, TrendingUp } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AtomicText from "@/components/sparkly-text"
import Image from "next/image"

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

export default function BusinessDevelopment() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      document.body.style.setProperty("--scroll", String(scrollPosition))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen text-white overflow-hidden">
      <Header />

      <GradientBackground>
        {/* 1. Hero Section */}
        <section className="relative py-32 overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Business%20Development%20Hero.jpg-1aGqr35ATRfMjNGheMi8DusNpjLjlx.jpeg"
            alt="Scientific visualization of molecular structures and atomic symbols representing our methodical approach to business development"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-20" />
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <AtomicText color="#FF8E00" numberOfParticles={8}>
                  Business Development as a Science
                </AtomicText>
              </h1>
              <p className="text-xl mb-8 font-light leading-relaxed">
                At One Stop Growth, we transform business development into a precise, data-driven discipline. Our
                approach is deliberate, strategic, and focused on measurable outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. The Problem with Traditional Sales Outreach */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center">The Problem with Traditional Sales Outreach</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Users size={64} className="text-[#FF8000] mb-6" />,
                  title: "Over-Reliance on Cold Calls",
                  description: "Generic pitches waste time and resources.",
                },
                {
                  icon: <BarChart size={64} className="text-[#FF8000] mb-6" />,
                  title: "Unqualified Lead Overflow",
                  description: "More leads doesn't mean better conversion.",
                },
                {
                  icon: <TrendingUp size={64} className="text-[#FF8000] mb-6" />,
                  title: "Lack of Process Optimization",
                  description: "Static strategies fail in dynamic markets.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#000047] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="font-light text-lg">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-2xl mt-12 text-center font-bold">
              We fix this. Our approach is structured, methodical, and focused on execution.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF8000] via-transparent to-[#FF8000] opacity-5"></div>
        </section>

        {/* 3. Our Approach – Business Development as a Science */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Approach – Business Development as a Science</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Target size={64} className="text-[#FF8000] mb-6" />,
                  title: "Strategic, Personalized Outreach",
                  points: ["Intentional, brand-aligned conversations", "Direct extension of your company"],
                },
                {
                  icon: <PieChart size={64} className="text-[#FF8000] mb-6" />,
                  title: "Sales Pipeline Optimization",
                  points: ["Streamlined lead tracking and qualification", "Deep CRM integration"],
                },
                {
                  icon: <RefreshCcw size={64} className="text-[#FF8000] mb-6" />,
                  title: "Data-Driven Execution",
                  points: ["Continuous measurement and improvement", "Six Sigma and Kaizen methodologies"],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#000037] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-2 font-light text-lg">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF8000] to-transparent opacity-5"></div>
        </section>

        {/* 4. How It Works – Execution with Precision */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center">How It Works – Execution with Precision</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Target size={64} className="text-[#FF8000] mb-6" />,
                  title: "Phase 1: Deep Research & Targeting",
                  points: ["Identify high-value prospects", "Develop customized outreach strategies"],
                },
                {
                  icon: <Users size={64} className="text-[#FF8000] mb-6" />,
                  title: "Phase 2: Execution & Lead Engagement",
                  points: ["One-on-one engagements with decision-makers", "Value-driven, conversational interactions"],
                },
                {
                  icon: <BarChart size={64} className="text-[#FF8000] mb-6" />,
                  title: "Phase 3: Optimization & Reporting",
                  points: ["Weekly pipeline analysis", "Scalable, adaptable execution"],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#000047] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <ul className="space-y-2 font-light text-lg">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FF8000] via-transparent to-[#FF8000] opacity-5"></div>
        </section>

        {/* 5. Why One Stop Growth? */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center">Why One Stop Growth?</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <CheckCircle size={64} className="text-[#FF8000] mb-6" />,
                  title: "Deep Industry Expertise",
                  description: "Years of experience in business development and process optimization.",
                },
                {
                  icon: <RefreshCcw size={64} className="text-[#FF8000] mb-6" />,
                  title: "Methodology-Driven",
                  description: "We apply Six Sigma, Agile, and Kaizen to eliminate inefficiencies.",
                },
                {
                  icon: <Users size={64} className="text-[#FF8000] mb-6" />,
                  title: "Direct Representation",
                  description: "We engage as a true extension of your team, no gimmicks.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#000037] p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center transform hover:scale-105"
                >
                  <div className="flex justify-center">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="font-light text-lg">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-[#FF8000] to-transparent opacity-5"></div>
        </section>

        {/* 6. Call-to-Action (Conversion Section) */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-4xl font-bold mb-8">
                <AtomicText color="#FF8E00" numberOfParticles={6}>
                  Transform Your Sales Process
                </AtomicText>
              </h2>
              <p className="text-xl mb-8 font-light">
                Don't let your sales process be a bottleneck. Let's optimize it for growth.
              </p>
              <Link
                href="/contact"
                className="bg-[#FF8000] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FF9900] transition duration-300 inline-flex items-center"
              >
                Let's Talk Growth Strategy
                <ArrowRight className="ml-2" size={24} />
              </Link>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF8000] to-transparent opacity-10"></div>
        </section>
      </GradientBackground>

      <Footer />
    </main>
  )
}

