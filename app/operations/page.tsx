"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Lock, Book, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// The password to access the operations manual
const ACCESS_PASSWORD = "onestopgrowth2025"

interface Chapter {
  id: number
  title: string
  content: string
  isOpen: boolean
}

export default function OperationsManual() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Check if user was previously authenticated
  useEffect(() => {
    const authStatus = localStorage.getItem("operations_auth")
    if (authStatus === "true") {
      setIsAuthenticated(true)
      fetchContent()
    } else {
      setIsLoading(false)
    }
  }, [])

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password === ACCESS_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem("operations_auth", "true")
      setErrorMessage("")
      fetchContent()
    } else {
      setErrorMessage("Incorrect password. Please try again.")
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("operations_auth")
    router.push("/")
  }

  const toggleChapter = (id: number) => {
    setChapters(chapters.map((chapter) => (chapter.id === id ? { ...chapter, isOpen: !chapter.isOpen } : chapter)))
  }

  const fetchContent = async () => {
    setIsLoading(true)
    try {
      // In a real application, you would fetch this from an API or database
      // For this example, we'll use hardcoded content
      const chaptersData: Chapter[] = [
        {
          id: 1,
          title: "Introduction to One Stop Growth: Vision, Purpose, and Core Values",
          content: `
            <h3>The Birth of One Stop Growth</h3>
            <p>One Stop Growth LLC was founded with a singular mission: to disrupt and elevate the standard of freight delivery for small to mid-sized shippers needing regional and interstate refrigerated and dry freight solutions. Our journey started like many in this industry—on the load boards, struggling to get consistent work and facing a market dominated by brokers and mega-carriers who care more about volume than service.</p>
            <p>From the beginning, it became clear that the market was broken for smaller shippers and suppliers. They either had to overpay brokers who rarely controlled the assets, or deal with unreliable small fleets that couldn't deliver a consistent level of professionalism. One Stop Growth was created to fill that gap—to offer professional, asset-based, and relationship-driven service that makes shippers feel like they have a true logistics partner, not just a transaction.</p>
            
            <h3>Our Vision</h3>
            <p>Our vision is to become the go-to regional refrigerated and specialty freight carrier for shippers that value consistency, professionalism, and reliability. We want to be big enough to offer capacity, but small enough to maintain personalized service—combining the best of both worlds.</p>
            <p>We envision a 20-unit fleet, serving regional and local interstate routes, built on trustworthy drivers, well-maintained equipment, and direct relationships with shippers. We believe a lean, asset-based model is the future for small to mid-sized carriers who want to thrive without being dependent on brokers and load boards.</p>
            
            <h3>Our Purpose</h3>
            <p>Our purpose is simple but powerful: "To deliver freight the right way—reliably, professionally, and personally."</p>
            <p>We want shippers to feel the difference when they work with One Stop Growth:</p>
            <ul>
              <li>No missed appointments.</li>
              <li>No excuses.</li>
              <li>Real-time communication.</li>
              <li>Professional drivers who represent the brand well.</li>
            </ul>
            <p>Every load is a commitment. Every client is a relationship.</p>
            
            <h3>Core Values That Drive Us</h3>
            <ol>
              <li><strong>Execution First, Always.</strong> - Talk is cheap. We deliver—period. Our drivers, our office staff, and our leadership are committed to getting freight from A to B without drama.</li>
              <li><strong>Professionalism at Every Level.</strong> - Whether it's how we communicate with customers, how our drivers act on a dock, or how we maintain our equipment—we hold a high bar.</li>
              <li><strong>Direct Relationships, No Middlemen.</strong> - We believe in dealing directly with our clients. No hidden brokers. No games. Just straightforward business.</li>
              <li><strong>Respect for Our Drivers.</strong> - Drivers are the heart of this business. We pay them fairly, treat them like professionals, and expect professional behavior in return.</li>
              <li><strong>Adaptability and Agility.</strong> - Markets change. Freight needs shift. We stay flexible—whether it's adjusting lanes, swapping assets, or finding creative solutions for clients.</li>
              <li><strong>Transparency and Integrity.</strong> - No surprises. Whether it's about rates, delivery times, or challenges—we keep communication clear and honest.</li>
              <li><strong>Continuous Improvement.</strong> - Every day is a chance to improve. Better routes, better service, better people—we aim to grow stronger with every load we move.</li>
            </ol>
          `,
          isOpen: false,
        },
        {
          id: 2,
          title: "Asset-Based vs. Broker-Dependent Carriers: Why We Own Our Trucks and Brand",
          content: `
            <h3>Introduction</h3>
            <p>In today's freight market, the divide between asset-based carriers and broker-dependent operators is becoming sharper. For One Stop Growth, being asset-based is not just a business model — it's a philosophy, a strategy, and a competitive advantage. It defines how we operate, how we build relationships, and how we deliver on our promises.</p>
            
            <h3>What Does It Mean to Be Asset-Based?</h3>
            <p>When we say we are asset-based, we mean that we own and control the trucks that haul your freight.</p>
            <ul>
              <li>Our drivers work for us, not for a random third party.</li>
              <li>Our trucks are maintained and managed by us, not borrowed from someone else for a one-time load.</li>
              <li>Our reputation is directly tied to the service you receive.</li>
            </ul>
            <p>This means we are directly accountable for every shipment we take on. We don't hide behind layers of sub-contractors or brokers.</p>
            
            <h3>Why Asset-Based Makes a Difference in Today's Market</h3>
            <h4>1. Direct Accountability and Control</h4>
            <p>When you work with One Stop Growth, you know who's moving your freight. You know the company, the trucks, and often the driver.</p>
            <p>Contrast that with brokers who post loads to load boards, hoping any available carrier will take it — often the cheapest carrier, not the best one.</p>
            <p>For shippers, that means:</p>
            <ul>
              <li>Fewer surprises (you know who's showing up).</li>
              <li>Consistent service (same people, same trucks).</li>
              <li>Direct communication (no middleman to relay messages).</li>
            </ul>
            
            <h4>2. Consistency in Service Quality</h4>
            <p>We train and manage our drivers to meet our standards — not just DOT minimums.</p>
            <ul>
              <li>Uniform appearance.</li>
              <li>Professional communication.</li>
              <li>Understanding of load handling, dock etiquette, and customer expectations.</li>
            </ul>
            <p>Brokers can't guarantee that. With random carriers from the load board, you don't know what you're getting until it's too late.</p>
            
            <h4>3. Real Commitment to Schedules and Appointments</h4>
            <p>When we accept a load, we show up. Period.</p>
            <ul>
              <li>Our trucks are assigned and scheduled — we don't wait until the last minute to find someone to cover the load.</li>
              <li>No double brokering.</li>
              <li>No last-minute cancellations because a carrier didn't show.</li>
            </ul>
            <p>Because we own the assets, we are committed — our name is on the line every time.</p>
          `,
          isOpen: false,
        },
        {
          id: 3,
          title: "Our Fleet Strategy: Reefer Box Trucks, Trailers, and the Road to 20 Units",
          content: `
            <h3>Introduction</h3>
            <p>At One Stop Growth, our fleet strategy is one of the most critical parts of our operational backbone. We are not a "one-size-fits-all" carrier. Instead, we've deliberately chosen a mixed fleet of refrigerated box trucks, refrigerated trailers, and dry units to give us maximum flexibility and adaptability to market demands.</p>
            <p>Unlike carriers who throw every truck on every load, we align the right asset for the right freight — every time. And because we are asset-based, we can control this process and make sure we are profitable and efficient with every move.</p>
            
            <h3>1. Why a Mixed Fleet?</h3>
            <p>When One Stop Growth was launched, the goal was never to run a "cookie-cutter" operation. Instead, we looked closely at the needs of shippers in our region (food, beverage, pharma, industrial) and what types of equipment they consistently require.</p>
            <p>Here's what we found:</p>
            <ul>
              <li>Smaller shippers and regional distributors don't always need a full 53' trailer — they need dock-height box trucks that can handle palletized freight and temperature control.</li>
              <li>Larger shippers, especially in food and beverage, need 53' reefers for regional multi-pallet loads and longer distance runs.</li>
              <li>Some opportunities require lift gates and pallet jacks for deliveries without docks — again, favoring box trucks.</li>
            </ul>
            <p>By running both reefer box trucks and trailers, we can serve BOTH market segments — small, medium, and large — and adjust based on seasonal demand.</p>
            
            <h3>2. Fleet Breakdown: What We Operate Today</h3>
            <table>
              <tr>
                <th>Unit Type</th>
                <th>Specs & Purpose</th>
              </tr>
              <tr>
                <td>53' Refrigerated Trailers (Swing & Roll-up)</td>
                <td>Longer hauls, multi-pallet loads, regional & interstate runs. High-value freight like dairy, seafood, frozen goods.</td>
              </tr>
              <tr>
                <td>26' Refrigerated Box Truck (CDL)</td>
                <td>Mid-sized refrigerated loads, heavier pallets, dock height, pallet jack equipped for warehouse deliveries.</td>
              </tr>
              <tr>
                <td>26' Refrigerated Box Truck (Non-CDL)</td>
                <td>Smaller regional freight, lighter weight, same dock height access, easy for foodservice/medical.</td>
              </tr>
              <tr>
                <td>Power Only (Tractor Units)</td>
                <td>When shippers have their own trailers (drop/hook), low overhead, high efficiency in right conditions.</td>
              </tr>
            </table>
          `,
          isOpen: false,
        },
        {
          id: 4,
          title: "Driver Recruitment and Culture: Building a Team That Delivers Excellence",
          content: `
            <h3>Introduction</h3>
            <p>At One Stop Growth, our drivers are the face of the company. No matter how polished our operations are, how well-maintained our trucks look, or how professional our communication is — it all comes down to the driver who shows up at a customer's dock.</p>
            <p>Our drivers represent our brand, and because of that, recruiting, training, and retaining the right drivers is one of the most critical aspects of our business. This chapter will dive deep into how we approach driver recruitment, the culture we build, and what we expect from every driver who wears our logo on their chest.</p>
            
            <h3>1. Why Driver Quality Is a Non-Negotiable Standard</h3>
            <p>Unlike many carriers who focus on "filling seats," we focus on hiring drivers who align with our service-first culture. Our customers expect:</p>
            <ul>
              <li>Professionalism.</li>
              <li>On-time performance.</li>
              <li>Safe handling of sensitive freight (refrigerated, medical, specialty goods).</li>
              <li>Clear communication.</li>
            </ul>
            <p>We can't deliver on those promises with unreliable or unprofessional drivers.</p>
            <p>That's why we'd rather let a truck sit for a week than put the wrong driver in it.</p>
            
            <h3>2. The Ideal One Stop Growth Driver Profile</h3>
            <p>Here's what we look for when hiring a driver:</p>
            <table>
              <tr>
                <th>Category</th>
                <th>Requirements / Preferences</th>
              </tr>
              <tr>
                <td>License Type</td>
                <td>CDL-A or CDL-B for larger box trucks and trailers; non-CDL for smaller box trucks (26' units).</td>
              </tr>
              <tr>
                <td>Experience</td>
                <td>2+ years minimum — Prefer drivers who understand regional lanes, dock interaction, and refrigerated freight.</td>
              </tr>
              <tr>
                <td>Professionalism</td>
                <td>Clean, courteous, punctual — drivers who understand they represent our brand.</td>
              </tr>
              <tr>
                <td>Communication</td>
                <td>Must be able to communicate updates clearly — No "silent drivers" who won't check in.</td>
              </tr>
              <tr>
                <td>Problem-Solving</td>
                <td>Ability to handle issues on the road, from equipment problems to delays.</td>
              </tr>
              <tr>
                <td>Appearance</td>
                <td>Well-kept, uniformed appearance — understand that customers are watching.</td>
              </tr>
              <tr>
                <td>Attitude</td>
                <td>Positive, solution-oriented, willing to work within a team and take pride in the job.</td>
              </tr>
            </table>
          `,
          isOpen: false,
        },
        {
          id: 5,
          title: "Operational Excellence: Dispatch, Routing, and Daily Management Protocols",
          content: `
            <h3>Introduction</h3>
            <p>Operations are the engine that drives One Stop Growth. Without flawless execution in dispatch, routing, and daily management, even the best strategy, equipment, and drivers won't deliver value. In this chapter, we outline exactly how our daily operations function, how we manage freight movements, and how we ensure every load is handled with the professionalism that defines our brand.</p>
            
            <h3>1. The Role of Operations in One Stop Growth</h3>
            <p>Our operations team is the heartbeat of the company—the bridge between shippers, brokers (when used), drivers, and leadership. They are the first line of communication, the problem solvers, and the coordinators who ensure that every truck is utilized efficiently and profitably.</p>
            <p>Operational excellence for us means:</p>
            <ul>
              <li>Every load picked up and delivered on time.</li>
              <li>Every driver knows what's expected, when, and where.</li>
              <li>Every piece of freight treated with care and professionalism.</li>
              <li>No surprises—only clear, proactive communication.</li>
            </ul>
            
            <h3>2. Dispatch and Load Assignment Process</h3>
            <h4>Step 1: Load Sourcing</h4>
            <p>Depending on the freight type and current agreements, loads come from:</p>
            <ul>
              <li>Direct shippers (our preferred source).</li>
              <li>Select brokers (only those vetted for reliability and fair rates).</li>
              <li>Load boards (when gaps need to be filled)—DAT, Truckstop, Amazon Relay (as fallback).</li>
            </ul>
            <p>Dispatch reviews each load opportunity through this lens:</p>
            <ul>
              <li>Does it meet our profitability targets?</li>
              <li>Is it within our regional/interstate focus?</li>
              <li>Does it match equipment and driver availability?</li>
              <li>Does it make sense logistically for where our assets are?</li>
            </ul>
            
            <h4>Step 2: Driver Assignment</h4>
            <p>Once a load is approved:</p>
            <ul>
              <li>Driver availability and location are checked.</li>
              <li>Driver skill and equipment suitability matched (reefer-specific loads to trained drivers).</li>
              <li>Dispatch confirms with the driver directly, explaining all load details—pickup, drop-off, requirements (e.g., dock height, pallet jack, reefer temp).</li>
              <li>Driver accepts and confirms readiness—we never "force" loads.</li>
            </ul>
          `,
          isOpen: false,
        },
        // Add more chapters as needed
      ]

      setChapters(chaptersData)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching content:", error)
      setIsLoading(false)
    }
  }

  // If not authenticated, show the splash screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#000047]">
        <Card className="w-[400px] bg-[#000037] border-[#FF8000] text-white">
          <CardHeader>
            <CardTitle className="text-center text-[#FF8000]">
              <Lock className="w-12 h-12 mx-auto mb-4" />
              Operations Manual Access
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#000027] border-[#FF8000] text-white"
                />
                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
              </div>
              <Button type="submit" className="w-full bg-[#FF8000] hover:bg-[#FF9900] text-white">
                Access Operations Manual
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Main operations manual interface
  return (
    <div className="min-h-screen bg-[#000047] text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#FF8000] flex items-center">
            <Book className="mr-2" /> One Stop Growth Operations Manual
          </h1>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="border-[#FF8000] text-[#FF8000] hover:bg-[#FF8000] hover:text-white"
          >
            Logout
          </Button>
        </header>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p>Loading content...</p>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>

            {chapters.map((chapter) => (
              <div key={chapter.id} className="mb-6">
                <div
                  className="flex justify-between items-center bg-[#000037] p-4 rounded-lg cursor-pointer hover:bg-[#000027] transition-colors"
                  onClick={() => toggleChapter(chapter.id)}
                >
                  <h3 className="text-lg font-medium">
                    Chapter {chapter.id}: {chapter.title}
                  </h3>
                  <Button variant="ghost" size="sm">
                    {chapter.isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </Button>
                </div>

                {chapter.isOpen && (
                  <div className="mt-4 p-6 bg-[#000027] rounded-lg prose prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: chapter.content }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
