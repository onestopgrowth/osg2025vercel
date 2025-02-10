import Image from "next/image"
import { Roboto } from "next/font/google"

const roboto = Roboto({ weight: ["300", "400", "500", "700"], subsets: ["latin"] })

export default function WorkExamples() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <p className="text-[#FF8E00] text-2xl font-medium mb-20 text-center">What Working With Us Looks Like</p>

        {/* Al-Jazeera Proof of Concept */}
        <div className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white italic">Al-Jazeera Proof Of Concept.</h3>
              <p className="text-gray-300 leading-relaxed">
                Discover firsthand our cutting-edge AI capabilities in action. In this video, observe as newscasters and
                interviewees effortlessly translate from their native languages to English almost instantly. It's a
                testament to the unparalleled translation solutions we offer, harnessing the power of advanced AI
                technologies.
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

        {/* Best in Class CX Tools */}
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
              <h3 className="text-3xl font-bold mb-6 text-white italic">Best In Class CX Tools</h3>
              <p className="text-gray-300 leading-relaxed">
                At One Stop Growth, we believe in transforming customer interactions into empathetic experiences. As a
                distinguished partner of Genesys, we enhance their top-tier CX platform to resonate with your specific
                challenges and aspirations. Our AI-driven customer experience dashboard, shown here, provides real-time
                insights and analytics to help you deliver exceptional service. With us, you'll harness the power of
                Genesys's advanced chatbots and predictive engagement tools, tailored to anticipate and meet your
                customer's needs seamlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Actionable Data Analytics */}
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
              <h3 className="text-3xl font-bold mb-6 text-white italic">Actionable Data Analytics</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe in the power of informed foresight. By harnessing our expertise in AI and data analytics, we
                help you interpret the present and historical intricacies of your business. Our advanced analytics tools
                provide clear, actionable insights that empower you to anticipate future trends and make strategic
                decisions with confidence and precision. From predictive modeling to real-time performance tracking, our
                solutions ensure you're always a step ahead in your industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

