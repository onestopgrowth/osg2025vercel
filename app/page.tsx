"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Building2, Truck, Code, Server, Shield, BarChart, Layers, LineChart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Define the company's color palette to match logistics page
const colors = {
  primaryBlue: "#0052cc", // Deep blue from logo
  secondaryBlue: "#0077cc", // Medium blue
  lightBlue: "#e6f2ff", // Light blue for backgrounds
  primaryGreen: "#00875a", // Green from logo
  lightGreen: "#e3fcef", // Light green for backgrounds
  accentOrange: "#FF8000", // Orange accent for CTAs
}

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    // Only import AOS in the browser
    const initAOS = async () => {
      if (typeof window !== "undefined") {
        const AOS = (await import("aos")).default
        await import("aos/dist/aos.css")
        AOS.init({
          duration: 1000,
          once: true,
        })
      }
    }

    initAOS()
  }, [])

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen pt-24 pb-16 md:pb-32 flex items-start md:items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0052cc]/90 via-[#0052cc]/50 to-gray-200" />

        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Growth%20Hero-Yx9Yd9Yx9Yx9Yx9Yx9Yx9Yx9Yx9Yx9.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/70" />
        </div>

        <motion.div className="container mx-auto px-4 md:px-6 pt-16 md:pt-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-6"
            >
              <Badge className="bg-gradient-to-r from-[#0052cc]/20 to-[#00875a]/20 text-[#0052cc] border-0 px-3 py-1 text-xs md:px-4 md:py-1.5 md:text-sm font-medium">
                Systems. Efficiency. Execution.
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-[#0052cc] to-[#00875a] bg-clip-text text-transparent">
                  The Tools to Dominate
                </span>
                <br />
                Across Industries & Systems
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-xl mb-4 md:mb-8">
                One Stop Growth empowers businesses to modernize operations, unify growth systems and unlock unstoppable
                potential.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4 mb-8 md:mb-16">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#0052cc] to-[#00875a] hover:from-[#0052cc]/90 hover:to-[#00875a]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Build Your Growth Engine
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-[#0052cc] text-[#0052cc] hover:bg-[#0052cc]/10 transition-all duration-300 w-full sm:w-auto"
                >
                  <Link href="#services" className="flex items-center gap-2">
                    Explore Our Services
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right Content - Device Mockups */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full hidden md:block"
            >
              <div className="absolute top-0 right-0 w-[85%] h-[75%] bg-white rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 z-10">
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
              <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-white rounded-2xl overflow-hidden shadow-2xl z-20">
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
        </motion.div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#e6f2ff]/30">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
          >
            <Badge className="bg-gradient-to-r from-[#0052cc]/20 to-[#00875a]/20 text-[#0052cc] border-0 px-3 py-1 text-xs md:px-4 md:py-1.5 md:text-sm font-medium mb-4">
              Our Approach
            </Badge>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
              Growth isn't luck — <span className="text-[#0052cc]">it's engineered.</span>
            </h2>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Most industries (especially logistics and manufacturing) are stuck at least a decade behind. Companies are
              leaving massive profits on the table.
            </p>
          </motion.div>

          {/* Mission Statement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12 md:mb-16"
          >
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-gradient-to-br from-[#0052cc] to-[#00875a] p-6 md:p-8 text-white flex items-center">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                    One Stop Growth was built to change that.
                  </h3>
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <p className="text-base md:text-lg text-gray-700 mb-6 font-medium">
                    We are not &quot;just consultants.&quot; We are architects of growth systems, blending Business
                    Development, Freight Hauling, Software Development, and IT Infrastructure to rebuild businesses for
                    the modern world.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {[
                      {
                        icon: <Building2 className="h-6 w-6 md:h-8 md:w-8 text-[#0052cc] mb-2" />,
                        text: "Business Development",
                      },
                      {
                        icon: <Truck className="h-6 w-6 md:h-8 md:w-8 text-[#00875a] mb-2" />,
                        text: "Freight Hauling",
                      },
                      {
                        icon: <Code className="h-6 w-6 md:h-8 md:w-8 text-[#0052cc] mb-2" />,
                        text: "Software Development",
                      },
                      {
                        icon: <Server className="h-6 w-6 md:h-8 md:w-8 text-[#00875a] mb-2" />,
                        text: "IT Infrastructure",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-2 md:p-3 rounded-lg border border-gray-100 hover:border-[#0052cc]/20 hover:bg-[#e6f2ff]/30 transition-all duration-300"
                      >
                        {item.icon}
                        <span className="text-xs md:text-sm font-medium text-center">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Process Roadmap */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <Badge className="bg-gradient-to-r from-[#0052cc]/20 to-[#00875a]/20 text-[#0052cc] border-0 px-3 py-1 text-xs md:px-4 md:py-1.5 md:text-sm font-medium mb-2">
                Our Process
              </Badge>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">How We Drive Growth</h3>
            </motion.div>

            <div className="relative">
              {/* Mobile Timeline */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0052cc]/20 via-[#00875a]/20 to-[#0052cc]/20 md:hidden"></div>

              {/* Desktop Timeline */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0052cc]/20 via-[#00875a]/20 to-[#0052cc]/20 transform -translate-x-1/2 hidden md:block"></div>

              {/* Roadmap Steps */}
              <div className="relative z-10">
                {[
                  {
                    title: "Strategic Planning",
                    description: "We apply Six Sigma, Agile, and Kaizen methodologies to eliminate inefficiencies.",
                    icon: "📋",
                    color: "from-[#0052cc] to-[#0077cc]",
                  },
                  {
                    title: "Execution Excellence",
                    description:
                      "We don't just plan - we execute with precision, ensuring every step moves your business forward.",
                    icon: "🚀",
                    color: "from-[#00875a] to-[#00a86b]",
                  },
                  {
                    title: "Measurable Results",
                    description: "Our data-driven approach ensures you can track progress and see tangible outcomes.",
                    icon: "📊",
                    color: "from-[#0052cc] to-[#0077cc]",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center mb-12 md:mb-16">
                    {/* Mobile Timeline Dot */}
                    <div className="absolute left-0 md:hidden">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} text-white flex items-center justify-center text-lg font-bold z-20 shadow-lg`}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Content for mobile */}
                    <div className="md:hidden pl-16 pr-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                      >
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                          <CardContent className="p-4 md:p-6">
                            <div className="flex items-center mb-3">
                              <span className="text-2xl mr-3">{item.icon}</span>
                              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                            </div>
                            <p className="text-gray-700 text-sm">{item.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>

                    {/* Desktop layout - Left side */}
                    <div className="hidden md:block md:w-5/12 md:pr-12 md:text-right">
                      {index % 2 === 0 && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-end mb-3">
                                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                <span className="text-2xl ml-3">{item.icon}</span>
                              </div>
                              <p className="text-gray-700">{item.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      )}
                    </div>

                    {/* Desktop Timeline Dot */}
                    <div className="hidden md:flex md:w-2/12 md:justify-center">
                      <div className="relative">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} text-white flex items-center justify-center text-lg font-bold z-20 shadow-lg`}
                        >
                          {index + 1}
                        </motion.div>
                        {index < 2 && (
                          <div
                            className={`absolute top-12 left-1/2 h-24 w-0.5 bg-gradient-to-b ${item.color} transform -translate-x-1/2`}
                          ></div>
                        )}
                      </div>
                    </div>

                    {/* Desktop layout - Right side */}
                    <div className="hidden md:block md:w-5/12 md:pl-12">
                      {index % 2 === 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <CardContent className="p-6">
                              <div className="flex items-center mb-3">
                                <span className="text-2xl mr-3">{item.icon}</span>
                                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                              </div>
                              <p className="text-gray-700">{item.description}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      )}
                      {index % 2 === 2 && <div></div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Client Logos Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-10"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
              Companies We've Helped Along The Way
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-16"
          >
            {[
              { name: "Walter Surface Technologies", logo: "/images/Walter-Surface-Technologies.png" },
              { name: "WebBuy", logo: "/images/Web-Buy-Logo.png" },
              { name: "ArcelorMittal", logo: "/images/Arcelor-Mital-Logo.png" },
              { name: "Stingray", logo: "/images/Stingray.png" },
              { name: "NYU Langone Health", logo: "/images/NYU-Langone.png" },
              { name: "FNX Innov", logo: "/images/FNX-Innov-Logo.jpeg" },
            ].map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="transition-all duration-300 bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={180}
                  height={80}
                  className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership & Team Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f0f7ff]/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-[#0052cc]/20 to-[#00875a]/20 text-[#0052cc] border-0 px-4 py-1.5 text-sm font-medium mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Leadership & Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet the diverse team of experts driving our integrated approach to business transformation. As a proud
              veteran-owned and minority-led organization, we bring unique perspectives and disciplined execution to
              every client partnership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Morris",
                title: "CEO & Founder",
                bio: "Michael is a seasoned entrepreneur and logistics expert with over 17 years of experience in business development, fleet operations, and technology innovation. As a full-stack developer and tech solution engineer, he has spearheaded initiatives to bridge gaps between logistics operations and scalable SaaS platforms. Michael's vision drives One Stop Growth toward becoming a leader in transportation logistics and tech integration.",
                color: "border-[#0052cc]",
              },
              {
                name: "Cedric Martino",
                title: "COO & Managing Partner",
                bio: "Cedric brings a decorated background in military logistics, having served as a Chemical Operations Specialist in the U.S. Army. With extensive experience in hazard management, compliance, and operational discipline, Cedric oversees veteran-oriented partnerships and ensures One Stop Growth maintains the highest standards in safety and efficiency.",
                color: "border-[#00875a]",
              },
              {
                name: "Marilyn Truell",
                title: "Chief Financial Officer (CFO)",
                bio: "Marilyn is a finance and administration professional with deep expertise in vendor management, operational scaling, and compliance oversight. She leads financial structuring, SBA and FMCSA compliance, and funding operations at One Stop Growth, positioning the company for sustainable growth.",
                color: "border-[#0052cc]",
              },
              {
                name: "Anthony Matarazzo",
                title: "Operations Manager",
                bio: "Anthony oversees dispatch coordination, fleet management, and daily logistics operations. With strong industry knowledge and client service skills, he ensures seamless load execution and operational reliability across all lanes and markets.",
                color: "border-[#00875a]",
              },
              {
                name: "Jamal Johnson",
                title: "Safety Coordinator & Driver Relations",
                bio: "Jamal brings hands-on field expertise to driver onboarding, safety protocol implementation, and regulatory compliance. As a non-CDL driver and safety liaison, he supports fleet-wide safety training and maintains a proactive safety culture.",
                color: "border-[#0052cc]",
              },
              {
                name: "Barry Bellinger",
                title: "Senior Mobile Logistics Consultant",
                bio: "Barry provides strategic insight into mobile logistics operations, fleet utilization, and customer-facing logistics services. With extensive on-the-ground experience, he bridges dispatch, fleet strategy, and customer service excellence.",
                color: "border-[#00875a]",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 h-full flex flex-col"
                style={{ borderLeftColor: member.color.replace("border-", "") }}
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-[#0052cc] font-medium">{member.title}</p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg flex-grow shadow-inner">
                    <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#0052cc]/5 to-[#00875a]/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why One Stop Growth? Because Accountability Matters
              </h2>
              <p className="text-gray-700 mb-8">
                We don't pass blame. We drive outcomes. Our multidisciplinary team combines business development,
                logistics expertise, software development, and IT integration — all under one roof. We don't just build
                plans — we build engines for sustainable, unstoppable growth.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-[#0052cc]">14</span>
                    <span className="text-[#00875a] text-xl">+</span>
                  </div>
                  <p className="text-gray-700">Years of Experience</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-[#0052cc]">30</span>
                    <span className="text-[#00875a] text-xl">+</span>
                  </div>
                  <p className="text-gray-700">Experts on Staff</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Freight%20Brokers%20Dashboard-qtKpf4HdKli6uNbpodM9m40AQnondw.png"
                alt="Truck IQ Chain TMS dashboard showing fleet metrics, load assignments, and available trucks with real-time status updates"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0052cc]/10 to-transparent hover:opacity-0 transition-opacity duration-300"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <Badge className="bg-gradient-to-r from-[#0052cc]/20 to-[#00875a]/20 text-[#0052cc] border-0 px-3 py-1 text-xs md:px-4 md:py-1.5 md:text-sm font-medium mb-4">
              Our Services
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Your Growth, Our Expertise
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Our tailored services span multiple domains, combining innovation, precision, and scalability to meet your
              unique business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Software Development",
                description: "Custom business applications built to scale.",
                icon: <Code className="h-5 w-5 md:h-6 md:w-6" />,
                color: "from-[#0052cc] to-[#0077cc]",
                link: "/services/software-development",
              },
              {
                title: "IT Infrastructure & Cybersecurity",
                description: "Protect and streamline your core operations.",
                icon: <Shield className="h-5 w-5 md:h-6 md:w-6" />,
                color: "from-[#00875a] to-[#00a86b]",
                link: "/services/it-infrastructure-cybersecurity",
              },
              {
                title: "Business Development",
                description: "Growth systems engineered to scale your pipeline.",
                icon: <BarChart className="h-5 w-5 md:h-6 md:w-6" />,
                color: "from-[#0052cc] to-[#0077cc]",
                link: "/services/business-development",
              },
              {
                title: "Logistics & Freight",
                description: "Operations optimization for transport and logistics.",
                icon: <Truck className="h-5 w-5 md:h-6 md:w-6" />,
                color: "from-[#00875a] to-[#00a86b]",
                link: "/services/logistics-freight-hauling",
              },
              {
                title: "User Experience (UX)",
                description: "Design experiences that drive adoption and revenue.",
                icon: <Layers className="h-5 w-5 md:h-6 md:w-6" />,
                color: "from-[#0052cc] to-[#0077cc]",
                link: "/services/software-development#ui",
              },
              {
                title: "Data & Analytics",
                description: "Harness data to fuel better decisions and faster growth.",
                icon: <LineChart className="h-5 w-5 md:h-6 md:w-6" />,
                color: "from-[#00875a] to-[#00a86b]",
                link: "/services/software-development#analytics",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={`h-1 md:h-2 bg-gradient-to-r ${service.color}`} />
                  <CardHeader className="pb-2 p-4 md:p-6">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className={`p-1.5 md:p-2 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                        {service.icon}
                      </div>
                      <h3 className="text-base md:text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 md:p-6 pt-0 md:pt-0">
                    <p className="text-sm md:text-base text-gray-700">{service.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 md:p-6 pt-0 md:pt-0">
                    <Link
                      href={service.link}
                      className="text-[#0052cc] font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300 text-sm md:text-base"
                    >
                      Learn more <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-[#0052cc]/10 to-[#00875a]/10 p-6 md:p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
              Stop Managing Chaos. Start Building Systems.
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-gray-700">
              Ready to transform your business with integrated growth systems that actually work?
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#0052cc] to-[#00875a] hover:from-[#0052cc]/90 hover:to-[#00875a]/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Let's Talk Growth
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </Button>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-6 md:mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white p-3 rounded-lg shadow-md w-full md:w-auto"
              >
                <p className="text-base md:text-lg font-medium mb-1">Call Us Directly:</p>
                <a href="tel:8006741999" className="text-[#0052cc] text-base md:text-lg font-bold hover:underline">
                  800-674-3599
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white p-3 rounded-lg shadow-md w-full md:w-auto"
              >
                <p className="text-base md:text-lg font-medium mb-1">Email Our Team:</p>
                <a
                  href="mailto:get@onestopgrowth.com"
                  className="text-[#0052cc] text-base md:text-lg font-bold hover:underline"
                >
                  get@onestopgrowth.com
                </a>
              </motion.div>
            </div>
          </motion.div>

          <div className="mt-8 md:mt-12 text-center text-xs md:text-sm text-gray-600">
            <div className="flex justify-center gap-2">
              <Badge variant="outline" className="bg-[#0052cc]/10 text-[#0052cc] border-[#0052cc]/20">
                DOT: 4279426
              </Badge>
              <Badge variant="outline" className="bg-[#00875a]/10 text-[#00875a] border-[#00875a]/20">
                MC: 1663270
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
