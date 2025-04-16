"use client"

import { useEffect, useRef } from "react"
import type React from "react"

interface AtomicTextProps {
  children: React.ReactNode
  color?: string
  numberOfParticles?: number
}

export default function AtomicText({ children, color = "#FF8E00", numberOfParticles = 6 }: AtomicTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const textElement = container.querySelector(".text-content")
    if (!textElement) return

    const textRect = textElement.getBoundingClientRect()
    const particles: HTMLDivElement[] = []

    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.cssText = `
        position: absolute;
        background-color: ${color};
        width: 6px;
        height: 6px;
        border-radius: 50%;
        pointer-events: none;
        user-select: none;
        z-index: 10;
        opacity: 0;
      `
      container.appendChild(particle)
      particles.push(particle)

      // Create orbit path
      const orbitPath = document.createElement("div")
      orbitPath.className = "orbit-path"
      orbitPath.style.cssText = `
        position: absolute;
        border: 1px solid ${color};
        border-radius: 50%;
        pointer-events: none;
        user-select: none;
        opacity: 0.3;
      `
      container.appendChild(orbitPath)

      // Animate each particle and its orbit
      const animate = () => {
        const angle = (i / numberOfParticles) * Math.PI * 2
        const radiusX = Math.random() * 20 + textRect.width * 0.3
        const radiusY = Math.random() * 20 + textRect.height * 0.5

        const centerX = textRect.width / 2
        const centerY = textRect.height / 2

        orbitPath.style.width = `${radiusX * 2}px`
        orbitPath.style.height = `${radiusY * 2}px`
        orbitPath.style.left = `${centerX - radiusX}px`
        orbitPath.style.top = `${centerY - radiusY}px`

        particle.animate(
          [
            {
              opacity: 0,
              transform: `translate(${centerX + Math.cos(angle) * radiusX}px, ${
                centerY + Math.sin(angle) * radiusY
              }px) scale(0.5)`,
            },
            {
              opacity: 1,
              transform: `translate(${centerX + Math.cos(angle + Math.PI) * radiusX}px, ${
                centerY + Math.sin(angle + Math.PI) * radiusY
              }px) scale(1.2)`,
            },
            {
              opacity: 0,
              transform: `translate(${centerX + Math.cos(angle) * radiusX}px, ${
                centerY + Math.sin(angle) * radiusY
              }px) scale(0.5)`,
            },
          ],
          {
            duration: 3000 + i * 500,
            iterations: Number.POSITIVE_INFINITY,
            easing: "ease-in-out",
          },
        )
      }

      animate()
    }

    return () => {
      particles.forEach((particle) => particle.remove())
      container.querySelectorAll(".orbit-path").forEach((path) => path.remove())
    }
  }, [color, numberOfParticles])

  return (
    <div ref={containerRef} className="relative inline-block">
      <span className="text-content relative z-20 inline-block" style={{ color }}>
        {children}
      </span>
    </div>
  )
}
