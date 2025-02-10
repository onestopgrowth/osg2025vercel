"use client"

import Image from "next/image"

const clients = [
  {
    name: "Al Jazeera",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Al-Jazeera-Logo-edxlBoVYzPbbsOZbJp0r6a4GlBHnfa.png",
  },
  {
    name: "WebBuy",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Web-Buy-Logo-JnPEpj9d3mb3D7AxE7oRr1zi9rc6OY.png",
  },
  {
    name: "Stingray",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stingray-pgmxScFKtpv7A2dKc4jxA5Le9Ks8U7.png",
  },
  {
    name: "ArcelorMittal",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Arcelor-Mital-Logo-wyRpvNEAuMGNr3bH81XokJcYM05AVw.png",
  },
  {
    name: "Walter Surface Technologies",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Walter-Surface-Technologies-CaV7PiDIPdVrO3hF3EitKMRD73gSfl.png",
  },
]

export default function ClientLogos() {
  return (
    <section className="relative py-16 bg-black">
      {/* Curve Separator */}
      <div className="absolute top-0 left-0 right-0 -mt-1">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0 120L1440 120L1440 60C1440 60 1320 0 720 0C120 0 0 60 0 60L0 120Z" fill="black" />
        </svg>
      </div>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#FF8E00] drop-shadow-lg">
          <span className="italic">A Few Companies We&apos;ve Helped Along The Way</span> &#128522;
        </h2>

        <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
          <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .scrolling-wrapper {
              display: inline-block;
              animation: scroll 30s linear infinite;
            }
            .scrolling-wrapper:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="scrolling-wrapper">
            {[...clients, ...clients].map((client, index) => (
              <div key={`${client.name}-${index}`} className="inline-block px-4">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={200}
                  height={100}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

