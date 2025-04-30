"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Truck, FileCheck, Briefcase, UserCheck, Wrench, ClipboardList, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LeaseYourTruck() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    truckType: "",
    trailer: "", // Added trailer field
    truckYear: "",
    truckLocation: "",
    isOwner: "yes",
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    setIsSubmitting(true)
    // The form will still submit normally to Formspree
    // This is just to show the submitting state
    setTimeout(() => {
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/one-stop-growth-truck.png"
            alt="Professional semi-truck on highway with sunset backdrop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Got A Truck? We've Got The Freight.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 text-gray-700"
            >
              Put your vehicle to work under our MC authority and earn—without driving or dispatching yourself.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md">
                <Link href="#lease-form">Lease Your Truck Now</Link>
              </Button>
              <p className="mt-4 text-gray-700">True passive income for owners.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section - NEW */}
      <section className="bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            You've Got the Truck. We've Got Everything Else.
          </h2>

          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
            If your truck is parked, it's not producing. We change that—without asking for your credit score or business
            plan. You bring the equipment. We bring the authority, the freight, and the firepower to get it earning.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileCheck className="h-10 w-10 text-blue-600" />,
                title: "Authority & Insurance",
                description: "Operate under our active DOT and MC with full coverage already in place.",
              },
              {
                icon: <Briefcase className="h-10 w-10 text-blue-600" />,
                title: "Freight Contracts Ready",
                description: "We're not guessing—we have booked lanes and contracted loads waiting.",
              },
              {
                icon: <UserCheck className="h-10 w-10 text-blue-600" />,
                title: "Vetted Drivers",
                description: "Our CDL-A drivers are background-checked, safety-focused, and fully onboarded.",
              },
              {
                icon: <Wrench className="h-10 w-10 text-blue-600" />,
                title: "Maintenance & Parking",
                description: "We handle repairs, upkeep, and secure overnight parking so you don't have to.",
              },
              {
                icon: <ClipboardList className="h-10 w-10 text-blue-600" />,
                title: "Compliance & Dispatch",
                description: "From logbooks to lane planning—we manage it all with expert staff.",
              },
              {
                icon: <Truck className="h-10 w-10 text-blue-600" />,
                title: "Operational Backbone",
                description: "Our established infrastructure means your truck starts earning from day one.",
              },
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Card className="h-full border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="text-xl font-bold text-gray-900 mt-10">
            You own the truck. We help it earn. Let's make it move—together.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-10 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md shadow transition-all"
          >
            <Link href="#lease-form">Start the Lease-On Process</Link>
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "You Lease Us The Truck",
                description: "We sign a simple agreement to operate your truck.",
              },
              {
                title: "We Assign A Driver",
                description: "Your truck gets assigned to one of our vetted CDL drivers.",
              },
              {
                title: "You Get Paid Weekly",
                description: "We pay you a fixed rate or revenue share—no exceptions.",
              },
              {
                title: "We Handle Everything Else",
                description: "We handle insurance, basic maintenance, and all operations.",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="pt-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 text-center">{step.title}</h3>
                  <p className="text-gray-700 text-center">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Owners Choose Section */}
      <section className="py-16 bg-gradient-to-r from-white to-blue-50">
        <div className="container mx-auto px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-green-50/30 to-purple-50/50 rounded-3xl blur-3xl opacity-70"></div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Owners Choose One Stop Growth</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full mr-4">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Passive Income</h3>
                <p className="text-gray-700">
                  We offer some of the highest revenue opportunities in the industry. Your truck earns while you focus
                  on what matters to you. No more chasing loads or dealing with brokers—just consistent weekly payments.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-green-100 p-3 rounded-full mr-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Maintenance Handled</h3>
                <p className="text-gray-700">
                  We take care of routine maintenance, repairs, and compliance requirements. Your truck stays in top
                  condition without you having to manage the details, ensuring maximum uptime and longevity for your
                  asset.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Guaranteed Utilization</h3>
              <p className="text-gray-700 mb-6">
                Your truck won't sit idle. With our established freight contracts and consistent demand, we ensure your
                equipment is regularly utilized, maximizing your return on investment while minimizing depreciation from
                disuse.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-2 rounded-lg mr-4">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Real-Time ELD Tracking</h4>
                      <p className="text-gray-700 text-sm">
                        Know where your asset is—24/7. Every truck runs with compliant ELD for full transparency.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-2 rounded-lg mr-4">
                      <UserCheck className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Experienced, Safety-First Drivers</h4>
                      <p className="text-gray-700 text-sm">
                        We assign only vetted CDL drivers with clean records and a focus on uptime—not shortcuts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-2 rounded-lg mr-4">
                      <Wrench className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Professional Equipment Care</h4>
                      <p className="text-gray-700 text-sm">
                        Diesel mechanics on standby and strict PM schedules protect your asset like it's our own.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-2 rounded-lg mr-4">
                      <Truck className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Consistent Contracted Freight</h4>
                      <p className="text-gray-700 text-sm">
                        We're not load board chasers. Our trucks stay moving with dedicated freight lanes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-2 rounded-lg mr-4">
                      <ClipboardList className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Full-Service Back Office</h4>
                      <p className="text-gray-700 text-sm">
                        From insurance to IFTA, you get the structure of a real carrier without the paperwork.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-2 rounded-lg mr-4">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Earn Like an Owner-Op, Without the Grind</h4>
                      <p className="text-gray-700 text-sm">
                        We've rebuilt the model so you keep ownership—and we do the heavy lifting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lease-On Form Section */}
      <section id="lease-form" className="py-16 bg-gradient-to-r from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready To Lease?</h2>
              <p className="text-lg text-gray-700">
                Let's get your truck earning. Complete our quick intake form and we'll follow up within 24 hours to get
                you moving.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border border-blue-100">
              <h3 className="text-xl font-bold mb-6 text-center text-gray-900">Lease-On Intake Form</h3>

              <form
                method="POST"
                action="https://formspree.io/f/xzzrzeek"
                noValidate
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label htmlFor="full-name" className="block text-black font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="fullName"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-black font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-black font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="truck-type" className="block text-black font-semibold mb-2">
                    Truck Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="truck-type"
                    name="truckType"
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                  >
                    <option value="">Select Truck Type</option>
                    <option value="Class 8 Sleeper">Class 8 Sleeper</option>
                    <option value="Box Truck">Box Truck</option>
                    <option value="Hotshot w/ Gooseneck">Hotshot w/ Gooseneck</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="trailer" className="block text-black font-semibold mb-2">
                    Trailer Information
                  </label>
                  <input
                    type="text"
                    id="trailer"
                    name="trailer"
                    placeholder="Describe your trailer (type, length, etc.)"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="truck-year" className="block text-black font-semibold mb-2">
                    Truck Model Year <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="truck-year"
                    name="truckYear"
                    min="2000"
                    max={new Date().getFullYear() + 1}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-black font-semibold mb-2">
                    Truck Location (City, State)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                  />
                </div>

                <div>
                  <p className="block text-black font-semibold mb-2">
                    Are You the Owner? <span className="text-red-500">*</span>
                  </p>
                  <div className="flex space-x-6">
                    <label className="inline-flex items-center">
                      <input type="radio" name="isOwner" value="yes" required className="mr-2 text-black" />
                      <span className="text-black">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="isOwner" value="no" required className="mr-2 text-black" />
                      <span className="text-black">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-black font-semibold mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all w-full"
                >
                  {isSubmitting ? "Submitting..." : "Submit Lease-On Application"}
                </Button>
              </form>

              <p className="text-center mt-6 text-gray-700">
                Have questions first?{" "}
                <Link href="/contact" className="text-blue-600 hover:underline">
                  Contact us
                </Link>{" "}
                and we'll walk you through the process.
              </p>
            </div>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>DOT: #4279426 | MC: #1663270</p>
              <p>215-219-3149 | dispatch@onestopgrowth.com</p>
              <p>Office: Lansdowne, Pennsylvania</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
