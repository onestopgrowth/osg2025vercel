'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Truck, Snowflake, Package, BarChart, Clock, FileText, Shield, Zap } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function FreightHauling() {
  const [daysActive, setDaysActive] = useState(0);

  useEffect(() => {
    const authorityStartDate = new Date('2024-08-12');
    const today = new Date();
    const differenceInTime = today.getTime() - authorityStartDate.getTime();
    const days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    setDaysActive(days);
  }, []);

  return (
    <main className="min-h-screen bg-[#000047] text-white">
      <Header />
      <section className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Freight Hauling Services</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl mb-6">
              Welcome to One Stop Growth! We specialize in providing reliable, efficient, and technology-driven freight solutions tailored to meet your unique needs. Whether you're moving perishables, oversized loads, or everyday goods, our team is committed to delivering excellence in every shipment.
            </p>
            <p className="text-xl mb-6">
              Since activating our authority, we have successfully built a reputation for reliability, innovation, and superior customer service. Whether you're shipping across town or across the country, One Stop Growth is your trusted freight partner.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Freight Hauling Services"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#0000FF] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Freight Hauling Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white text-[#000047] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Zap className="mr-2 text-[#FF8000]" />
                Advanced Tracking and Logistics
              </h3>
              <p>
                Stay informed every step of the way with our cutting-edge technology. Leveraging industry-leading tools such as Motive ELD, Project 44, and MacroPoint, we provide real-time tracking and visibility for your shipments. From pickup to delivery, you'll always know where your freight is.
              </p>
            </div>
            <div className="bg-white text-[#000047] p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="mr-2 text-[#FF8000]" />
                Reliability and Safety First
              </h3>
              <p>
                At One Stop Growth, we prioritize safety and compliance. Using advanced safety tools and adhering to FMCSA regulations, we ensure that your freight arrives securely and on time. Our dedication to safety and reliability makes us a trusted partner in freight transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-8">Versatile Fleet for Every Need</h2>
        <p className="text-xl mb-6">
          No matter the size or type of your shipment, our diverse fleet can handle it all:
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <Snowflake className="mr-2 text-[#FF8000]" />
            <span>Reefer Trucks: Ideal for temperature-sensitive goods such as food and pharmaceuticals.</span>
          </li>
          <li className="flex items-center">
            <Package className="mr-2 text-[#FF8000]" />
            <span>Box Trucks: Perfect for mid-sized loads and regional deliveries.</span>
          </li>
          <li className="flex items-center">
            <Truck className="mr-2 text-[#FF8000]" />
            <span>Semi-Trucks (Power Only): Reliable solutions for full truckloads and high-capacity shipments.</span>
          </li>
        </ul>
      </section>

      <section className="bg-[#0000FF] py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Customer-First Freight Solutions</h2>
          <p className="text-xl text-center">
            At One Stop Growth, our customers come first. We build long-term partnerships by tailoring our services to your specific requirements, offering dependable capacity and competitive pricing. We aim to exceed your expectations with every haul.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="bg-[#000047] border border-[#FF8000] rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-[#FF8000]">For Brokers</h2>
          <div className="flex items-center mb-4">
            <FileText className="mr-2 text-[#FF8000]" />
            <p className="text-xl">
              As of today, our authority is <strong>{daysActive}</strong> days old.
            </p>
          </div>
          <p className="text-lg mb-4">
            We're proud of our growing experience and commitment to excellence in the freight industry.
          </p>
          <p className="text-lg">
            Please direct all carrier packets to:{' '}
            <a href="mailto:dispatch@onestopgrowth.com" className="text-[#FF8000] hover:underline">
              dispatch@onestopgrowth.com
            </a>
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Ship?</h2>
        <p className="text-xl mb-8">
          Let us take the stress out of freight hauling. Contact us today for a free quote and discover how our technology, reliability, and customer-first approach can make a difference in your logistics.
        </p>
        <Link href="/contact" className="bg-[#FF8000] text-white px-8 py-3 rounded-full font-bold hover:bg-[#FF9900] transition duration-300">
          Get a Free Quote
        </Link>
      </section>

      <Footer />
    </main>
  )
}
