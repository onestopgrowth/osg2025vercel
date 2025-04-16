"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SparklesProps {
  children: React.ReactNode
}

export const Sparkles = ({ children }: SparklesProps) => {
  return (
    <motion.span
      className="relative inline-block"
      animate={{
        filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
        opacity: [1, 0.8, 1],
        transition: {
          duration: 1,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        },
      }}
    >
      {children}
      <span className="absolute inset-0 z-[-1] w-full h-full bg-gradient-radial from-transparent to-[#FF8000] opacity-20 blur-lg" />
    </motion.span>
  )
}
