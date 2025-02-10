"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function LogisticsFreightHauling() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Freight%20Hauling%20Hero.jpg-Fh3u2Kg1NKveUQIuVFxNjRLxUjwyeB.jpeg"
          alt="Modern semi-truck illustration in front of shipping containers"
          width={1920}
          height={1080}
          className="absolute inset-0 object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/30" /> {/* Semi-transparent overlay */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Freight Solutions Simplified</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience seamless logistics with our reliable freight hauling and real-time tracking services.
          </p>
          <div className="space-x-4">
            <Link
              href="#learn-more"
              className="bg-[#FF8000] text-white px-6 py-3 rounded-full font-bold hover:bg-[#FF9900] transition duration-300"
            >
              Learn More
            </Link>
            <Link
              href="#contact"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Comprehensive Freight Hauling */}
      <section id="learn-more" className="py-20 bg-[#002347]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Comprehensive Freight Hauling Solutions Tailored for Your Business Needs
          </h2>
          <p className="text-xl mb-12 text-center">
            Our logistics services include power-only, box truck, and hot shot options, ensuring flexibility and
            efficiency. Trust One Stop Growth for reliable freight solutions that streamline your operations and enhance
            delivery performance.
          </p>
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Freight Hauling Solutions"
            width={800}
            height={400}
            className="rounded-lg mx-auto"
          />
        </div>
      </section>

      {/* Route Optimization */}
      <section className="py-20 bg-[#003366]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Optimize Your Routes and Maximize Load Efficiency with Our Expert Solutions
          </h2>
          <p className="text-xl mb-12 text-center">
            Our logistics team specializes in broker collaboration and efficient scheduling. We ensure timely deliveries
            and optimized routes to enhance your freight operations.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#002347] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Broker Collaboration</h3>
              <p>Seamless communication with brokers for effective load management and execution.</p>
            </div>
            <div className="bg-[#002347] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Smart Scheduling</h3>
              <p>Strategically planned schedules to ensure timely pickups and deliveries for your freight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Tracking */}
      <section className="py-20 bg-[#002347]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Ensuring Compliance with Real-Time Tracking</h2>
          <p className="text-xl mb-12 text-center">
            Our advanced Motive ELD system guarantees real-time tracking of your shipments. With NMFTA certification, we
            ensure compliance and reliability in every delivery.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#003366] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Seamless Monitoring</h3>
              <p>Stay informed with our cutting-edge tracking solutions for your freight needs.</p>
            </div>
            <div className="bg-[#003366] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Certified Compliance</h3>
              <p>Trust our DOT-certified services for safe and compliant freight transportation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DOT-Certified Trucking Services */}
      <section className="py-20 bg-[#003366]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">
            DOT-Certified Trucking Services: Your Partner in Reliable Freight Solutions
          </h2>
          <p className="text-xl mb-12 text-center">
            At One Stop Growth, we pride ourselves on providing DOT-certified trucking services that ensure reliability
            and efficiency. Our diverse fleet, including power-only, box truck, and hot shot options, is designed to
            meet your unique logistics needs.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#002347] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Freight Hauling</h3>
              <p>Experience seamless freight hauling tailored to your specific requirements with our expert team.</p>
            </div>
            <div className="bg-[#002347] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Route Optimization</h3>
              <p>Optimize your routes for efficiency and cost-effectiveness with our advanced planning solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-[#002347]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Seamless Freight Solutions Await You</h2>
          <p className="text-xl mb-12">
            Join us at One Stop Growth for reliable and efficient logistics solutions tailored to your needs.
          </p>
          <div className="space-x-4">
            <Link
              href="#contact"
              className="bg-[#FF8000] text-white px-6 py-3 rounded-full font-bold hover:bg-[#FF9900] transition duration-300"
            >
              Contact
            </Link>
            <Link
              href="#learn-more"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

