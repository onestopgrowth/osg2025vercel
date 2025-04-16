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
          What Is One Stop Growth, Anyway?
        </motion.h2>
        <p className="text-[#FD7702] leading-relaxed p-7 rounded-xl bg-[#002347] max-w-3xl text-center">
          It is not just a name; it is a philosophy. Whether in software development, IT infrastructure, business
          development, or logistics, we follow one principle: Do what is required, and do it well. We apply Six Sigma,
          Agile, and Kaizen methodologies not because they are fashionable, but because they are effective. Waste is cut
          away, inefficiencies are discarded, and what remains is a streamlined path to success.
        </p>
      </div>
    </section>
  )
}
