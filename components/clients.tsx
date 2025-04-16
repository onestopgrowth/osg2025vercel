import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const clients = [
  { name: "WebBuy", logo: "/placeholder.svg" },
  { name: "ArcelorMittal", logo: "/placeholder.svg" },
  { name: "Digital Research Alliance", logo: "/placeholder.svg" },
  { name: "Al-Jazeera", logo: "/placeholder.svg" },
  { name: "Stingray", logo: "/placeholder.svg" }
]

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
          <p className="text-gray-400">Companies that we've helped along the way</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={75}
                  className="max-w-[150px] h-auto"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
