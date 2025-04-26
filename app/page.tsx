"use client"

import Header from "../components/header"
import Hero from "../components/hero"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building2, Truck, Code, Server, Shield, BarChart, Layers, LineChart } from "lucide-react"
import Footer from "../components/footer"
import { useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Home() {
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

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      <Hero />

      {/* Value Proposition Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Growth isn't luck — <span className="text-blue-600">it's engineered.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Most industries (especially logistics and manufacturing) are stuck at least a decade behind. Companies are
              leaving massive profits on the table.
            </p>
          </div>

          {/* Mission Statement Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white flex items-center">
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                    One Stop Growth was built to change that.
                  </h3>
                </div>
                <div className="md:w-3/5 p-8">
                  <p className="text-lg text-gray-700 mb-6 font-medium">
                    We are not &quot;just consultants.&quot; We are architects of growth systems, blending Business
                    Development, Freight Hauling, Software Development, and IT Infrastructure to rebuild businesses for
                    the modern world.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                      <Building2 className="h-8 w-8 text-blue-600 mb-2" />
                      <span className="text-sm font-medium text-center">Business Development</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                      <Truck className="h-8 w-8 text-blue-600 mb-2" />
                      <span className="text-sm font-medium text-center">Freight Hauling</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                      <Code className="h-8 w-8 text-blue-600 mb-2" />
                      <span className="text-sm font-medium text-center">Software Development</span>
                    </div>
                    <div className="flex flex-col items-center p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                      <Server className="h-8 w-8 text-blue-600 mb-2" />
                      <span className="text-sm font-medium text-center">IT Infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Roadmap - Compact Version */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-2">
                Our Process
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">How We Drive Growth</h3>
            </div>

            <div className="relative">
              {/* Road/Path Background - Thinner line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2 hidden md:block"></div>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 md:hidden"></div>

              {/* Roadmap Steps - More compact */}
              <div className="relative z-10">
                {[
                  {
                    title: "Strategic Planning",
                    description: "We apply Six Sigma, Agile, and Kaizen methodologies to eliminate inefficiencies.",
                    icon: "📋",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    title: "Execution Excellence",
                    description:
                      "We don't just plan - we execute with precision, ensuring every step moves your business forward.",
                    icon: "🚀",
                    color: "from-indigo-500 to-indigo-600",
                  },
                  {
                    title: "Measurable Results",
                    description: "Our data-driven approach ensures you can track progress and see tangible outcomes.",
                    icon: "📊",
                    color: "from-purple-500 to-purple-600",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col items-center mb-8 md:mb-12`}
                  >
                    {/* Mobile Timeline Dot - Smaller */}
                    <div className="md:hidden absolute left-0 w-full flex justify-center">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} text-white flex items-center justify-center text-sm font-bold z-20 shadow-md`}
                      >
                        {index + 1}
                      </div>
                    </div>

                    {/* Content - More compact */}
                    <div className="w-full md:w-5/12">
                      <div
                        className="bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                      >
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>

                    {/* Desktop Timeline Dot - Smaller */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="relative">
                        <div
                          className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color} text-white flex items-center justify-center text-sm font-bold z-20 shadow-md`}
                        >
                          {index + 1}
                        </div>
                        {index < 2 && (
                          <div
                            className={`absolute top-10 left-1/2 h-16 w-0.5 bg-gradient-to-b ${item.color} transform -translate-x-1/2`}
                          ></div>
                        )}
                      </div>
                    </div>

                    {/* Empty space for alignment */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Companies We've Helped Along The Way</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { name: "Walter Surface Technologies", logo: "/images/Walter-Surface-Technologies.png" },
              { name: "WebBuy", logo: "/images/Web-Buy-Logo.png" },
              { name: "ArcelorMittal", logo: "/images/Arcelor-Mital-Logo.png" },
              { name: "Stingray", logo: "/images/Stingray.png" },
              { name: "NYU Langone Health", logo: "/images/NYU-Langone.png" },
              { name: "FNX Innov", logo: "/images/FNX-Innov-Logo.jpeg" },
            ].map((client, index) => (
              <div key={index} className="transition-all duration-300 hover:scale-110">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={180}
                  height={80}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why One Stop Growth? Because Accountability Matters
              </h2>
              <p className="text-gray-600 mb-8">
                We don't pass blame. We drive outcomes. Our multidisciplinary team combines business development,
                logistics expertise, software development, and IT integration — all under one roof. We don't just build
                plans — we build engines for sustainable, unstoppable growth.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">14</span>
                    <span className="text-blue-600 text-xl">+</span>
                  </div>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-bold text-gray-900">30</span>
                    <span className="text-blue-600 text-xl">+</span>
                  </div>
                  <p className="text-gray-600">Experts on Staff</p>
                </div>
              </div>
            </div>

            <motion.div
              className="relative aspect-video w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dashboard-gObPk5m7eKB00kPn3dZ04dM5fz3HME.png"
                alt="Project Enchiridion logistics dashboard showing shipment tracking, financial metrics, and delivery status"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Your Growth, Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our tailored services span multiple domains, combining innovation, precision, and scalability to meet your
              unique business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Software Development",
                description: "Custom business applications built to scale.",
                icon: <Code className="h-6 w-6" />,
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "IT Infrastructure & Cybersecurity",
                description: "Protect and streamline your core operations.",
                icon: <Shield className="h-6 w-6" />,
                color: "from-indigo-500 to-indigo-600",
              },
              {
                title: "Business Development",
                description: "Growth systems engineered to scale your pipeline.",
                icon: <BarChart className="h-6 w-6" />,
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Logistics & Freight",
                description: "Operations optimization for transport and logistics.",
                icon: <Truck className="h-6 w-6" />,
                color: "from-pink-500 to-pink-600",
              },
              {
                title: "User Experience (UX)",
                description: "Design experiences that drive adoption and revenue.",
                icon: <Layers className="h-6 w-6" />,
                color: "from-orange-500 to-orange-600",
              },
              {
                title: "Data & Analytics",
                description: "Harness data to fuel better decisions and faster growth.",
                icon: <LineChart className="h-6 w-6" />,
                color: "from-green-500 to-green-600",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg group border-0">
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} text-white`}>{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <Link
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and").replace(/$$|$$/g, "")}`}
                    className="text-blue-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
                  >
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "One Stop Growth did an excellent job. This project was a large one, and they were able to effectively communicate with our team to get us to a good resolution point. I appreciate that we were able to easily integration them into our SCRUM schedule.",
                author: "Steve Dimock",
                position: "CTO, WebBuy",
              },
              {
                quote:
                  "Working with Michael and his team was a game-changer.They brought AI expertise to enhance the capabilities of our drone surveying solutions. Their contribution allowed our drones to accurately identify and analyze sediment deposits within quarry environments, significantly improving the speed and precision of our valuations. Their professionalism, innovation, and ability to seamlessly integrate with our technical needs made them an invaluable partner.",
                author: "Jean-Phillipe Lefebvre",
                position: "VP - Infrastructures, mobilité et aménagement, FNX-Innov",
              },
              {
                quote:
                  "One Stop Growth is an excellent organization for professionals who want to elevate their visibility...they are professional, understood the objective, asked the right questions and delivered. I recommend One Stop Growth - they are reliable, dependable and consistent",
                author: "Ellen Harris",
                position: "CEO/Founder, Business-Accelerated",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
