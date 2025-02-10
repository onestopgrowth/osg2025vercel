"use client"

import { useEffect, useRef } from "react"
import type React from "react"

interface SparklyTextProps {
  children: React.ReactNode
  color?: string
  numberOfSparkles?: number
}

export default function SparklyText({ children, color = "#FF8E00", numberOfSparkles = 6 }: SparklyTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const textElement = container.querySelector(".text-content")
    if (!textElement) return

    const textRect = textElement.getBoundingClientRect()
    const sparkles: HTMLDivElement[] = []

    // Create sparkles
    for (let i = 0; i < numberOfSparkles; i++) {
      const sparkle = document.createElement("div")
      sparkle.textContent = "✨"
      sparkle.style.cssText = `
        position: absolute;
        color: ${color};
        font-size: 12px;
        pointer-events: none;
        user-select: none;
        z-index: 10;
        opacity: 0;
        top: 0;
        left: 0;
      `
      container.appendChild(sparkle)
      sparkles.push(sparkle)

      // Animate each sparkle
      const animate = () => {
        const angle = (i / numberOfSparkles) * Math.PI * 2
        const radius = Math.min(textRect.width, textRect.height) * 0.5

        const x = textRect.width / 2 + Math.cos(angle) * radius
        const y = textRect.height / 2 + Math.sin(angle) * radius

        sparkle.animate(
          [
            {
              opacity: 0,
              transform: `translate(${x}px, ${y}px) scale(0.5) rotate(0deg)`,
            },
            {
              opacity: 1,
              transform: `translate(${x}px, ${y}px) scale(1.2) rotate(180deg)`,
            },
            {
              opacity: 0,
              transform: `translate(${x}px, ${y}px) scale(0.5) rotate(360deg)`,
            },
          ],
          {
            duration: 2000,
            delay: i * (2000 / numberOfSparkles),
            iterations: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
          },
        )
      }

      animate()
    }

    return () => {
      sparkles.forEach((sparkle) => sparkle.remove())
    }
  }, [color, numberOfSparkles])

  return (
    <div ref={containerRef} className="relative inline-block">
      <span className="text-content relative z-20 inline-block text-[#FF8E00]">{children}</span>
    </div>
  )
}

