"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  Shield,
  Server,
  Cloud,
  Database,
  Lock,
  Network,
  Monitor,
  AlertTriangle,
  CheckCircle2,
  Scale,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type React from "react"

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
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
}) => (
  <div className="bg-[#000047] p-8 rounded-lg hover:shadow-xl transition-shadow duration-300">
    <Icon className="w-12 h-12 text-[#FF8000] mb-4" />
    <h3 className="text-lg font-bold mb-4">{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
)

export default function ITInfrastructureCybersecurity() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* 1. Header Section */}
      <Section className="relative h-[70vh] flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Growth%20Infrastructure.jpg-eKujYBHwnA5SvcXy3mZkwIpoRKCjHT.jpeg"
          alt="Modern data center hallway with illuminated server racks and code display, representing the fusion of physical and digital infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000047] to-black opacity-80" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Resilient Systems. Secure Infrastructure. Seamless Execution.
          </h1>
          <p className="text-lg mb-8 max-w-3xl">
            IT should not be an obstacle—it should be a competitive advantage. We design and optimize infrastructure
            that is scalable, secure, and built for high performance. No downtime. No inefficiencies. Just seamless
            execution.
          </p>
        </div>
      </Section>

      {/* 2. The Problem with Traditional IT Infrastructure */}
      <Section className="bg-[#000037]">
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold mb-8">The Problem with Traditional IT Infrastructure</h2>
          <p className="text-sm mb-8">
            Many companies build infrastructure reactively—patching together systems without a long-term strategy. This
            results in inefficiencies, bottlenecks, and security risks that slow down growth.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#000047] p-6 rounded-lg">
              <AlertTriangle className="w-12 h-12 text-[#FF8000] mb-4" />
              <h3 className="text-lg font-bold mb-4">Outdated, Siloed Systems</h3>
              <p className="text-sm text-gray-300">Infrastructure that wasn't designed to scale.</p>
            </div>
            <div className="bg-[#000047] p-6 rounded-lg">
              <Shield className="w-12 h-12 text-[#FF8000] mb-4" />
              <h3 className="text-lg font-bold mb-4">Security Gaps & Compliance Issues</h3>
              <p className="text-sm text-gray-300">Vulnerabilities that expose businesses to risks.</p>
            </div>
            <div className="bg-[#000047] p-6 rounded-lg">
              <Database className="w-12 h-12 text-[#FF8000] mb-4" />
              <h3 className="text-lg font-bold mb-4">Lack of High-Performance Storage & Compute</h3>
              <p className="text-sm text-gray-300">Sluggish processing for data-heavy applications.</p>
            </div>
          </div>
          <p className="text-sm mt-8 font-bold text-center">
            We take a structured, future-proof approach—eliminating inefficiencies and securing your technology stack
            from the ground up.
          </p>
        </div>
      </Section>

      {/* 3. Our Approach – IT as an Engine for Growth */}
      <Section>
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold mb-8 text-center">Our Approach – IT as an Engine for Growth</h2>
          <p className="text-sm mb-12 text-center">
            A secure, scalable, and optimized infrastructure is the foundation of an efficient business.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Server}
              title="Hyperconverged Infrastructure (HCI)"
              description="AI-ready storage solutions, data center optimization, and infrastructure automation for maximum efficiency."
            />
            <FeatureCard
              icon={Lock}
              title="Advanced Cybersecurity & Compliance"
              description="Enterprise-grade security frameworks with continuous monitoring and zero-trust architecture."
            />
            <FeatureCard
              icon={Cloud}
              title="Scalable Cloud & Network Architecture"
              description="Hybrid & multi-cloud optimization with load balancing and automated disaster recovery."
            />
          </div>
          <p className="text-sm mt-12 text-center font-bold">
            We don't just secure systems—we optimize them for high performance and longevity.
          </p>
        </div>
      </Section>

      {/* 4. How It Works – Structured Execution for Resilient IT */}
      <Section className="bg-[#000037]">
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold mb-8">How It Works – Structured Execution for Resilient IT</h2>
          <p className="text-sm mb-12">Technology should not slow you down—it should accelerate your business.</p>
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="bg-[#FF8000] p-4 rounded-full">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Phase 1: Infrastructure Audit & Strategy</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="text-sm">• Assess current system performance, security, and scalability.</li>
                  <li className="text-sm">• Develop a customized IT optimization plan aligned with business goals.</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="bg-[#FF8000] p-4 rounded-full">
                <Network className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Phase 2: Implementation & Optimization</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="text-sm">
                    • Deploy high-performance storage, cloud infrastructure, and security frameworks.
                  </li>
                  <li className="text-sm">• Eliminate bottlenecks and automate key IT workflows.</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="bg-[#FF8000] p-4 rounded-full">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Phase 3: Continuous Monitoring & Security Hardening</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="text-sm">• Implement real-time monitoring and threat detection.</li>
                  <li className="text-sm">
                    • Ensure infrastructure remains scalable and secure as business demands evolve.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Why One Stop Growth? */}
      <Section>
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold mb-8 text-center">Why One Stop Growth?</h2>
          <p className="text-sm mb-12 text-center">
            IT should be an enabler, not a liability. We build systems that are efficient, scalable, and secure.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#000047] p-6 rounded-lg">
              <CheckCircle2 className="w-12 h-12 text-[#FF8000] mb-4" />
              <h3 className="text-lg font-bold mb-4">Designed for Performance</h3>
              <p className="text-sm text-gray-300">Optimized for speed, scalability, and resilience.</p>
            </div>
            <div className="bg-[#000047] p-6 rounded-lg">
              <Lock className="w-12 h-12 text-[#FF8000] mb-4" />
              <h3 className="text-lg font-bold mb-4">Security Without Weakness</h3>
              <p className="text-sm text-gray-300">Proactive threat monitoring and zero-trust frameworks.</p>
            </div>
            <div className="bg-[#000047] p-6 rounded-lg">
              <Scale className="w-12 h-12 text-[#FF8000] mb-4" />
              <h3 className="text-lg font-bold mb-4">Built to Scale</h3>
              <p className="text-sm text-gray-300">Infrastructure that evolves with your business.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Call-to-Action (Conversion Section) */}
      <Section className="bg-gradient-to-r from-[#000047] to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-xl font-bold mb-8">Eliminate Weak Links in Your IT Strategy</h2>
          <Link
            href="/contact"
            className="bg-[#FF8000] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FF9900] transition duration-300 inline-flex items-center"
          >
            Secure & Scale Your Systems
            <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </Section>

      <Footer />
    </main>
  )
}

