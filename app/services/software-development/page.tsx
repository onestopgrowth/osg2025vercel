"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Code, Zap, Cloud } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WorkExamples from "./work-examples"
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

const TechnologySection = ({ title, items }: { title: string; items: string[] }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="mb-8 p-6 rounded-lg relative overflow-hidden group"
      style={{
        background: "linear-gradient(45deg, rgba(0,0,71,0.6), rgba(0,0,71,0.3))",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(45deg, rgba(255,128,0,0.1), rgba(255,128,0,0.05))",
        }}
      />
      <h3 className="text-lg font-bold mb-4 text-[#FF8000] relative z-10">{title}</h3>
      <div className="text-sm text-gray-300 relative z-10">
        {items.map((item, index) => (
          <span key={index} className="inline-block">
            {item}
            {index < items.length - 1 && <span className="mx-2 text-[#FF8000] animate-pulse">•</span>}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 border border-[#FF8000]/20 rounded-lg" />
    </motion.div>
  )
}

export default function SoftwareDevelopment() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, #000033, #000066)",
          opacity: 0.8,
        }}
      />
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255,128,0,0.15), transparent 70%)",
          y: backgroundY,
        }}
      />

      <Header />

      {/* Hero Section */}
      <Section className="relative h-[70vh] flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Software%20Hero%20One%20Stop%20Growth.jpg-r29Hh30hoK7meKLamf5CZbCdOF1rk1.jpeg"
          alt="Software Development Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000047]/90 via-[#FF8000]/50 to-black/90" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 relative z-10"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#0000FF]">
            Precision. Performance. Scalability.
          </h1>
          <p className="text-sm md:text-base mb-8 max-w-3xl">
            Software should work for you, not against you. At One Stop Growth, we develop systems designed to eliminate
            inefficiencies, scale with demand, and drive sustainable business growth. No technical debt. No wasted code.
            Just execution.
          </p>
        </motion.div>
      </Section>

      {/* The Problem with Traditional Software Development */}
      <Section className="relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Problem%20with%20traditional%20software%20development.jpg-D8KVTTmxxeMbieH3wzRJpx9k2Ss2H2.jpeg"
          alt="Problems in traditional software development"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000047]/95 to-[#000047]/90" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-xl font-bold mb-8">The Problem with Traditional Software Development</h2>
          <p className="text-sm mb-8">
            Most software projects fail—not because of bad ideas, but because of poor execution. Bloated code,
            fragmented systems, and a lack of strategic planning lead to delays, inefficiencies, and wasted resources.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <span className="text-[#FF8000] mr-2">•</span>
              <span>
                <strong>Unscalable Codebases</strong> – Built for today, obsolete tomorrow.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF8000] mr-2">•</span>
              <span>
                <strong>Inefficient System Integrations</strong> – Bottlenecks that slow execution.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF8000] mr-2">•</span>
              <span>
                <strong>Poor Architecture Decisions</strong> – Short-term fixes that create long-term issues.
              </span>
            </li>
          </ul>
          <p className="text-sm mt-8 font-bold">
            We don't build software that just works. We build software that scales.
          </p>
        </div>
      </Section>

      {/* Our Approach */}
      <Section>
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold mb-8">Our Approach – Software Development as a Discipline</h2>
          <p className="text-sm mb-12">
            Every line of code serves a purpose. Every system is designed for efficiency. Every project is executed with
            precision.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <Code size={32} className="text-[#FF8000]" />
              <h3 className="text-lg font-bold">Full-Stack Development for Performance</h3>
              <ul className="space-y-2 text-sm">
                <li>Custom web and mobile applications using React, Vue, Node.js, Python.</li>
                <li>Frontend and backend built for reliability and speed.</li>
                <li>Scalable architecture that grows with your business.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <Zap size={32} className="text-[#FF8000]" />
              <h3 className="text-lg font-bold">API & System Integrations Without the Bottlenecks</h3>
              <ul className="space-y-2 text-sm">
                <li>Secure, seamless integrations that eliminate redundancy.</li>
                <li>Optimization for high-load applications and complex workflows.</li>
                <li>Real-time data synchronization for maximum efficiency.</li>
              </ul>
            </div>
            <div className="space-y-4">
              <Cloud size={32} className="text-[#FF8000]" />
              <h3 className="text-lg font-bold">Scalable Cloud & DevOps Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li>Cloud-native architectures for AWS, Azure, and GCP.</li>
                <li>Microservices & containerized deployments for flexibility.</li>
                <li>CI/CD automation for continuous optimization.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Technology Stack */}
      <Section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000037] to-[#000047]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold mb-8 text-center"
          >
            Technology Stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm mb-12 text-center"
          >
            We usually work with Node, Express, MongoDB or PSQL, React or Vue — but we have worked extensively on
            enterprise and commercial applications with a wide range of technologies.
          </motion.p>

          {/* Logo Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 md:grid-cols-5 gap-8 mb-16"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Programming_Language_Logos__26_Icons_Free__Editable___Community_-fU89XrdAh6cpRmit6cNkzExdXHNxCn.png"
              alt="Technology Stack Logos"
              width={800}
              height={600}
              className="col-span-3 md:col-span-5 w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Technology Lists */}
          <div className="space-y-8">
            <TechnologySection
              title="Backend Languages"
              items={[
                "Ruby",
                "Perl",
                "Python",
                "PHP",
                "Scala",
                "Java",
                "Node",
                "C#",
                "TypeScript",
                "CoffeeScript",
                "Golang",
                "Erlang",
                "Rust",
                "Elixir",
                "C++",
              ]}
            />
            <TechnologySection
              title="Backend Frameworks"
              items={["Ruby on Rails", "Django", "Springboot", "Laravel", "Symfony", "Flask"]}
            />
            <TechnologySection title="Databases" items={["GraphQL", "NoSQL", "MySQL", "PSQL", "MongoDB"]} />
            <TechnologySection
              title="Frontend Stack"
              items={["Adobe Photoshop", "React/Redux", "Angular", "Vue", "Ajax", "jQuery", "Next.js", "Nuxt.js"]}
            />
            <TechnologySection
              title="Additional Expertise"
              items={[
                "TensorFlow",
                "ASP.NET/CORE",
                ".NET",
                "Ansible",
                "Backbone.js",
                "Wordpress",
                "AWS Amplify",
                "NumPy",
                "Docker",
                "Ember.js",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <div className="container mx-auto px-6">
          <h2 className="text-xl font-bold mb-8">How It Works – Structured Execution for Results</h2>
          <p className="text-sm mb-12">A methodical approach. A systemized process. No wasted effort.</p>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-4">🔹 Phase 1: Discovery & Architecture Design</h3>
              <ul className="space-y-2 text-sm">
                <li>Define core business objectives and technical requirements.</li>
                <li>Develop a scalable architecture plan that avoids future roadblocks.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">🔹 Phase 2: Development & Iteration</h3>
              <ul className="space-y-2 text-sm">
                <li>Agile development sprints focused on delivering working software—fast.</li>
                <li>Continuous testing and refinement to ensure long-term performance.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">🔹 Phase 3: Deployment & Optimization</h3>
              <ul className="space-y-2 text-sm">
                <li>Seamless deployment into production-ready environments.</li>
                <li>Ongoing performance monitoring and iteration for maximum efficiency.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Work Examples component */}
      <WorkExamples />

      <Footer />
    </main>
  )
}

