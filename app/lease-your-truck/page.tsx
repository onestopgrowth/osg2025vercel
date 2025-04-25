import EnhancedNavbar from "@/components/enhanced-navbar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Check, Truck, DollarSign, ClipboardCheck } from "lucide-react"

export default function LeaseYourTruck() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <EnhancedNavbar />

      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trucking-flatbed-hero.jpeg"
            alt="Professional semi-truck with flatbed trailer on highway with mountain backdrop"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Got a Truck? We've Got the Freight.
            </h1>
            <p className="text-gray-200 text-xl sm:text-2xl mb-8 max-w-2xl">
              Put your vehicle to work under our MC authority and earn—without driving or dispatching yourself.
            </p>
            <Button
              asChild
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all"
            >
              <a href="#form">
                <Truck className="mr-2 h-5 w-5" />
                Lease Your Truck Now
              </a>
            </Button>
            <p className="text-gray-300 mt-8 text-sm">True passive income for owners.</p>
          </div>
        </div>
      </section>

      {/* 2. Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8">
              Why Lease Your Truck to One Stop Growth?
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              If you've got a truck sitting, we've got the loads. We're an active DOT/MC carrier, operating in key port
              and industrial lanes with vetted CDL-A and CDL-B drivers ready to roll.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-3xl mx-auto mb-12">
              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Drivers</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Fuel</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Dispatch</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Maintenance</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="bg-green-100 p-4 rounded-full mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Compliance</span>
              </div>
            </div>

            <p className="text-2xl font-bold text-green-600 mt-8">You get paid every week—simple as that.</p>
          </div>
        </div>
      </section>

      {/* 3. How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-16">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">You Lease Us the Truck</h3>
              <p className="text-gray-600 text-center">
                We sign a simple agreement to operate your vehicle under our DOT authority. You remain the owner—we
                handle everything else.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">We Assign a Driver</h3>
              <p className="text-gray-600 text-center">
                Your truck gets assigned to one of our vetted CDL drivers operating daily routes for direct freight.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">You Get Paid Weekly</h3>
              <p className="text-gray-600 text-center">
                We pay you a fixed rate or revenue share—no guesswork. Payments go out weekly via ACH.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6 mx-auto">
                <ClipboardCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">We Handle Everything Else</h3>
              <p className="text-gray-600 text-center">
                We handle insurance, basic maintenance, dispatching, and DOT compliance. You just earn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What You Can Earn Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-16">What You Can Earn</h2>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead>
                <tr>
                  <th className="bg-green-50 text-green-800 text-left text-sm font-semibold uppercase tracking-wider px-6 py-4 border-b border-green-100">
                    Truck Type
                  </th>
                  <th className="bg-green-50 text-green-800 text-left text-sm font-semibold uppercase tracking-wider px-6 py-4 border-b border-green-100">
                    Weekly Owner Payout
                  </th>
                  <th className="bg-green-50 text-green-800 text-left text-sm font-semibold uppercase tracking-wider px-6 py-4 border-b border-green-100">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-gray-700 text-sm px-6 py-4 border-b">CDL-A Sleeper / Day Cab</td>
                  <td className="text-gray-700 text-sm px-6 py-4 border-b font-bold text-green-600">$1,000/week</td>
                  <td className="text-gray-700 text-sm px-6 py-4 border-b">
                    Lanes available with Direct Shippers and Uber Freight
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 text-sm px-6 py-4 border-b">Straight Truck</td>
                  <td className="text-gray-700 text-sm px-6 py-4 border-b font-bold text-green-600">$600/week</td>
                  <td className="text-gray-700 text-sm px-6 py-4 border-b">
                    Lanes available for Amazon Relay. If you have a Class 7 flatbed, expect a higher payout
                  </td>
                </tr>
                <tr>
                  <td className="text-gray-700 text-sm px-6 py-4">
                    Hotshot Unit (3500 Chasis w/ Flatbed - must be CDL rated)
                  </td>
                  <td className="text-gray-700 text-sm px-6 py-4 font-bold text-green-600">$900/week</td>
                  <td className="text-gray-700 text-sm px-6 py-4">Flatbed / seasonally high</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
            Earnings vary by lane and vehicle availability. We'll review options with you and show you what to expect.
          </p>
        </div>
      </section>

      {/* 5. Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-16">Requirements</h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 mr-4">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">2012 model year or newer</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 mr-4">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">DOT-legal, inspected, road-ready</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 mr-4">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Registration in your name (or lienholder approval)
                  </h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 mr-4">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Available for full-time use</h3>
                </div>
              </div>

              <div className="flex items-start md:col-span-2">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 mr-4">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Must pass basic condition inspection</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Owners Choose One Stop Growth Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-16">
            Why Owners Choose One Stop Growth
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 mr-4">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Veteran-owned business</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 mr-4">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Already hauling for major platforms</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 mr-4">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Same-week payouts</h3>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 mr-4">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">You retain ownership</h3>
                </div>
              </div>

              <div className="flex items-start md:col-span-2">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-500 mr-4">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">No broker fees or dispatch % cut</h3>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-xl shadow-inner">
              <p className="text-gray-800 italic text-xl text-center">
                "We're not another dispatch service. We're a carrier who executes and we're scaling more efficiently
                than our competition."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Call-to-Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">Ready to Lease?</h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Let's get your truck earning. Complete our quick intake form and we'll follow up within 24 hours to get
              you moving.
            </p>
            <Button
              asChild
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all"
            >
              <a href="#form">Start the Lease-On Process</a>
            </Button>
            <p className="text-gray-500 mt-6">
              Have questions first? Contact us and we'll walk you through the process.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Lease-On Intake Form Section */}
      <section id="form" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-16">Lease-On Intake Form</h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
              <form method="POST" action="https://formspree.io/f/xzzrzeek" className="space-y-6">
                <div>
                  <label htmlFor="full-name" className="block text-gray-700 font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="fullName"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="truck-type" className="block text-gray-700 font-semibold mb-2">
                    Truck Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="truck-type"
                    name="truckType"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select Truck Type</option>
                    <option value="Class 8 Sleeper">Class 8 Sleeper</option>
                    <option value="Class 8 Day Cab">Class 8 Day Cab</option>
                    <option value="Box Truck">Box Truck</option>
                    <option value="Hotshot w/ Gooseneck">Hotshot w/ Gooseneck</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="truck-year" className="block text-gray-700 font-semibold mb-2">
                    Truck Model Year <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="truck-year"
                    name="truckYear"
                    min="2000"
                    max={new Date().getFullYear() + 1}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
                    Truck Location (City, State)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <p className="block text-gray-700 font-semibold mb-2">
                    Are You the Owner? <span className="text-red-500">*</span>
                  </p>
                  <div className="flex space-x-6">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="isOwner"
                        value="yes"
                        required
                        className="form-radio h-5 w-5 text-green-500"
                      />
                      <span className="ml-2 text-gray-700">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="isOwner"
                        value="no"
                        required
                        className="form-radio h-5 w-5 text-green-500"
                      />
                      <span className="ml-2 text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-gray-700 font-semibold mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all"
                >
                  Submit Lease-On Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="mb-6 md:mb-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Growth%20Logo-8ScVK3VH9tC5LOk2OF6ff3hV9ZNtGV.png"
                  alt="One Stop Growth Logo"
                  width={200}
                  height={50}
                  className="h-12 w-auto"
                />
                <p className="text-gray-400 mt-2">Technology meets business growth</p>
              </div>

              <div className="text-center md:text-right">
                <p className="text-gray-300 mb-2">DOT: #3794251 | MC: #1349240</p>
                <p className="text-gray-300 mb-2">800-610-1999 | grow@onestopgrowth.com</p>
                <p className="text-gray-300">Corporate Office: Philadelphia Area, Pennsylvania</p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-500">© {new Date().getFullYear()} One Stop Growth. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
