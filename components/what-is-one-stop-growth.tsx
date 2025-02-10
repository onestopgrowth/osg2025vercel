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
          It's more than just a name. It's where software development, IT infrastructure, business development, and
          logistics intersect—driven by the principles of constant improvement. We leverage the expertise of Six Sigma
          methodologies, Scrum, and Agile practices to ensure every step of our process is optimized for efficiency and
          impact. Whether it's building scalable systems, streamlining operations, driving sales, or delivering freight,
          our Kaizen approach ensures we're always evolving, always improving, and always delivering results.
        </p>
      </div>
    </section>
  )
}

