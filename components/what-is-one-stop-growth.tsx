"use client"

import { motion } from "framer-motion"

export default function WhatIsOneStopGrowth() {
  return (
    <section className="py-16 bg-[#002347]">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <motion.h2
          className="text-3xl font-bold mb-6 text-[#FF8E00] p-5 rounded-xl bg-[#003366] shadow-[5px_5px_15px_rgba(0,0,0,0.5),_-5px_-5px_15px_rgba(255,255,255,0.05)] inline-block hover:shadow-[inset_5px_5px_15px_rgba(0,0,0,0.5),_inset_-5px_-5px_15px_rgba(255,255,255,0.05)] transition-shadow duration-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          Growth isn't luck - it's engineered.
        </motion.h2>
        <p className="text-[#FD7702] leading-relaxed p-7 rounded-xl bg-[#002347] max-w-3xl text-center">
          At One Stop Growth, we combine business consulting, systems integration, marketing, logistics, and customer
          success into a seamless growth engine. Instead of hiring multiple vendors and crossing your fingers, you'll
          have one experienced partner guiding every step of your scale-up journey.
        </p>
      </div>
    </section>
  )
}
