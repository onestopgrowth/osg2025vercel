'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const clients = [
  {
    name: "Al Jazeera",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Al-Jazeera-Logo-edxlBoVYzPbbsOZbJp0r6a4GlBHnfa.png"
  },
  {
    name: "WebBuy",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Web-Buy-Logo-JnPEpj9d3mb3D7AxE7oRr1zi9rc6OY.png"
  },
  {
    name: "Stingray",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stingray-pgmxScFKtpv7A2dKc4jxA5Le9Ks8U7.png"
  },
  {
    name: "ArcelorMittal",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arcelor-Mital-Logo-wyRpvNEAuMGNr3bH81XokJcYM05AVw.png"
  },
  {
    name: "Walter Surface Technologies",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Walter-Surface-Technologies-CaV7PiDIPdVrO3hF3EitKMRD73gSfl.png"
  }
]

export default function ClientCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % clients.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-[#0000f9]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          A Few Companies We&apos;ve Helped Along The Way
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center">
            {clients.map((client, index) => (
              <Card
                key={client.name}
                className={cn(
                  "mx-4 p-6 bg-black/50 backdrop-blur-sm border-0 transition-all duration-500 ease-in-out",
                  {
                    'opacity-100 scale-100': index === activeIndex,
                    'opacity-50 scale-95': Math.abs(index - activeIndex) === 1,
                    'opacity-30 scale-90': Math.abs(index - activeIndex) === 2,
                    'hidden': Math.abs(index - activeIndex) > 2
                  }
                )}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={200}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  index === activeIndex ? "bg-white" : "bg-white/30"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

