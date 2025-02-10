import { CheckCircle } from "lucide-react"

const methodologies = ["Six Sigma", "Agile", "Scrum", "Kaizen"]

export default function Methodologies() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Our Methodologies: Driving Continuous Improvement and Innovation
        </h2>
        <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
          We leverage proven frameworks to enhance efficiency and effectiveness.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodologies.map((methodology, index) => (
            <div key={index} className="flex items-center bg-[#000047] p-6 rounded-lg">
              <CheckCircle className="text-[#FF8000] mr-4" size={24} />
              <span className="text-lg font-bold">{methodology}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

