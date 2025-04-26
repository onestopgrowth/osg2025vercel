"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Truck, CheckCircle, Clock, Shield, Settings, User } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function LeaseYourTruck() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    truckType: "",
    truckYear: "",
    truckLocation: "",
    isOwner: "yes",
    notes: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
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

      {/* Why Lease Section */}
      <section className="py-16 bg-gradient-to-r from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Lease Your Truck To One Stop Growth?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              If you've got a truck sitting, we've got the loads. We're an active DOT/MC carrier, operating in key port
              and industrial lanes with vetted CDL-A and CDL-B drivers ready to roll.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <User className="h-12 w-12 text-blue-600" />, title: "Drivers" },
              { icon: <Truck className="h-12 w-12 text-blue-600" />, title: "Fuel" },
              { icon: <Clock className="h-12 w-12 text-blue-600" />, title: "Dispatch" },
              { icon: <Settings className="h-12 w-12 text-blue-600" />, title: "Maintenance" },
              { icon: <Shield className="h-12 w-12 text-blue-600" />, title: "Compliance" },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-none bg-transparent text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-xl font-bold text-gray-900">You get paid every week—simple as that.</p>
          </div>
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
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Owners Choose One Stop Growth</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "High Revenue",
                description: "We offer some of the highest revenue opportunities in the industry.",
              },
              {
                title: "Flexible Home Time",
                description: "We understand the importance of work-life balance.",
              },
              {
                title: "Dedicated Support Team",
                description: "Our team is available 24/7 to assist you with any questions or concerns.",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">{benefit.title}</h3>
                  <p className="text-gray-700 text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                "Veteran-Owned Business",
                "Already Hauling For Major Platforms",
                "Same-Week Payouts",
                "You Retain Ownership",
                "No Broker Fees Or Dispatch % Cut",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-lg font-medium text-gray-900">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <p className="text-lg text-gray-700 italic">
                "We're not another dispatch service. We're a carrier who executes and we're scaling more efficiently
                than our competition."
              </p>
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

              <form action="https://formspree.io/f/xzzrzeek" method="POST" className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-gray-900">
                    Full Name *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-900">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-900">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="truckType" className="text-gray-900">
                    Truck Type *
                  </Label>
                  <Select
                    name="truckType"
                    value={formData.truckType}
                    onValueChange={(value) => handleSelectChange("truckType", value)}
                    required
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select Truck Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semi">Semi-Truck (Class 8)</SelectItem>
                      <SelectItem value="box">Box Truck (26ft)</SelectItem>
                      <SelectItem value="reefer">Reefer Truck</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="truckYear" className="text-gray-900">
                    Truck Model Year *
                  </Label>
                  <Input
                    id="truckYear"
                    name="truckYear"
                    value={formData.truckYear}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="truckLocation" className="text-gray-900">
                    Truck Location (City, State)
                  </Label>
                  <Input
                    id="truckLocation"
                    name="truckLocation"
                    value={formData.truckLocation}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-gray-900">Are You the Owner? *</Label>
                  <RadioGroup
                    name="isOwner"
                    value={formData.isOwner}
                    onValueChange={(value) => handleSelectChange("isOwner", value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="owner-yes" />
                      <Label htmlFor="owner-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="owner-no" />
                      <Label htmlFor="owner-no">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-gray-900">
                    Additional Notes
                  </Label>
                  <Textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} className="mt-1" />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
                >
                  Submit Lease-On Application
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
              <p>DOT: #3794251 | MC: #1349240</p>
              <p>800-610-1999 | grow@onestopgrowth.com</p>
              <p>Corporate Office: Philadelphia Area, Pennsylvania</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
