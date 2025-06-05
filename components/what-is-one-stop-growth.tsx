"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function WhatIsOneStopGrowth() {
  return (
    <section className="py-16 bg-[#002347]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <motion.h2
              className="text-3xl font-bold mb-6 text-[#FF8E00] p-5 rounded-xl bg-[#003366] shadow-[5px_5px_15px_rgba(0,0,0,0.5),_-5px_-5px_15px_rgba(255,255,255,0.05)] inline-block hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.5),_inset_-5px_-5px_15px_rgba(255,255,255,0.05)] transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              Growth isn't luck - it's engineered.
            </motion.h2>
            <p className="text-[#FD7702] leading-relaxed p-7 rounded-xl bg-[#002347] mb-4">
              At One Stop Growth, we combine business consulting, systems integration, marketing, logistics, and
              customer success into a seamless growth engine. Instead of hiring multiple vendors and crossing your
              fingers, you'll have one experienced partner guiding every step of your scale-up journey.
            </p>
          </div>

          <div className="md:w-1/2">
            <motion.div
              className="relative aspect-video w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.03 }}
            >
              <Link href="https://www.freightiqchain.com" target="_blank" rel="noopener noreferrer" className="group">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-03%20at%206.43.52%E2%80%AFAM-Fk0xbMXIzeY0v7nFfjnwd29TO8whw1.png"
                  alt="FreightIQChain verification platform showing logistics visibility and verification capabilities"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#002347]/30 to-transparent hover:opacity-0 transition-all duration-300 group-hover:scale-105"></div>

                  <div className="absolute inset-0 border-2 border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="bg-white/90 rounded-full p-2 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300 z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0052cc"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
