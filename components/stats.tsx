import Image from "next/image"
import { Brain, Users } from "../icons"

export default function Stats() {
  return (
    <section className="relative py-32 bg-gradient-to-r from-[#002347] to-[#003366] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Circular Image */}
          <div className="relative aspect-square w-full max-w-[700px] mx-auto">
            <div className="rounded-full overflow-hidden w-full h-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design.jpg-LjbACrUcAa00PuHOvNqkCFuKXXXCmz.jpeg"
                alt="Classical statue examining a modern tablet, symbolizing the fusion of timeless wisdom with cutting-edge technology"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <p className="text-[#FF8001] text-lg font-medium">Why Choose One Stop Growth</p>
            <h2 className="text-4xl font-bold text-white leading-tight">
              One Vision, One Solution,
              <br />
              Complete Accountability.
            </h2>
            <p className="text-gray-300 leading-relaxed text-base">
              At One Stop Growth, we focus on simplicity and efficiency. We believe in clear ownership of every aspect
              of your project—from concept to execution. Our methodology emphasizes a thorough understanding of your
              needs, ensuring that each solution is tailor-made, scalable, and seamlessly integrated into your
              operations. With us, you have a single, dedicated partner driving your success, leaving no room for
              confusion or blame—just results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-12 pt-8">
              <div className="space-y-3">
                <Brain className="h-10 w-10 text-[#FF8001]" />
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">14</span>
                  <span className="text-[#FF8001] text-xl">+</span>
                </div>
                <p className="text-gray-400 text-base">Years of Experience</p>
              </div>
              <div className="space-y-3">
                <Users className="h-10 w-10 text-[#FF8001]" />
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">30</span>
                  <span className="text-[#FF8001] text-xl">+</span>
                </div>
                <p className="text-gray-400 text-base">Experts on Staff</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

