"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SparklesCore } from "@/components/ui/sparkles-core"

export default function ShadingPage() {
  const [progress, setProgress] = useState(0)

  return (
    <div>
      {/* New Acme-style Header */}
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <h1 className="md:text-7xl text-6xl lg:text-9xl font-bold text-center text-white relative z-20 pb-8">Acme</h1>

        <div className="w-[40rem] h-[20rem] relative">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500/10 to-transparent opacity-30 blur-3xl" />

          <SparklesCore
            id="tsparticles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#FFFFFF"
            speed={0.5}
            particleBlur={2}
            options={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                opacity: {
                  value: 0.8,
                  random: true,
                  animation: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 2,
                  random: true,
                },
                move: {
                  enable: true,
                  speed: 0.5,
                  direction: "none",
                  random: true,
                  straight: false,
                  outModes: {
                    default: "out",
                  },
                },
              },
            }}
          />
        </div>
      </div>

      {/* Existing Component Showcase */}
      <div className="container mx-auto p-8 space-y-12">
        <h1 className="text-3xl font-bold mb-8">shadcn/ui Components Showcase</h1>

        {/* Keep all existing sections below */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Buttons and Inputs</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Button>Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
            <Input placeholder="Input" />
          </div>
        </section>
      </div>
    </div>
  )
}

