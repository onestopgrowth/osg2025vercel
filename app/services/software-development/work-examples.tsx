import Image from "next/image"
import { Roboto } from "next/font/google"

const roboto = Roboto({ weight: ["300", "400", "500", "700"], subsets: ["latin"] })

export default function WorkExamples() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <p className="text-[#FF8E00] text-2xl font-medium mb-20 text-center">Our Software Development Showcase</p>

        {/* AI-Powered Translation */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white italic">AI-Powered Translation for Al-Jazeera</h3>
              <p className="text-gray-200 text-white leading-relaxed">
                Experience our cutting-edge AI capabilities in action. This project showcases our advanced translation
                solution, enabling newscasters and interviewees to seamlessly translate from their native languages to
                English in near real-time. It's a testament to our expertise in AI and natural language processing.
              </p>
            </div>
            <div className="relative aspect-video w-full">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/864648306?h=f9ceb3193a"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* AI-Driven Customer Experience */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video md:order-1">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI-Driven-Customer-Experience-e1695160435564-wx4QCIWlhmwkzwEHxE7MhOtahCHs9N.png"
                alt="AI-Driven Customer Experience Dashboard"
                fill
                className="rounded-lg object-contain"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white italic">AI-Driven Customer Experience Platform</h3>
              <p className="text-gray-200 text-white leading-relaxed">
                We've enhanced Genesys's top-tier CX platform with our custom AI solutions to create empathetic customer
                experiences. Our AI-driven dashboard provides real-time insights and analytics, helping businesses
                deliver exceptional service. This project showcases our ability to integrate AI with existing platforms,
                creating powerful, tailored solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Data Analytics Dashboard */}
        <div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI-and-Analytics-YHqE8qUqhSDC1mP4Imiv2FqnHW0sHb.png"
                alt="AI and Analytics Dashboard showing data visualizations"
                fill
                className="rounded-lg object-contain"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white italic">Advanced Data Analytics Dashboard</h3>
              <p className="text-gray-200 text-white leading-relaxed">
                Our data analytics solution empowers businesses with actionable insights. This custom-built dashboard
                combines AI and data analytics to interpret complex business data, enabling predictive modeling and
                real-time performance tracking. It's a prime example of how we turn data into strategic advantage for
                our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
