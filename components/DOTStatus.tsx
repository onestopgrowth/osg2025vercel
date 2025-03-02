"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { FaCheckCircle, FaCalendarAlt, FaClock, FaHourglassHalf } from "react-icons/fa"

export default function DOTStatus() {
  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Fixed dates
  const dotGrantDate = new Date("2024-08-30")
  const dotActiveDate = new Date("2024-08-29")

  // Calculate days active
  const daysActive = Math.floor((currentDate.getTime() - dotActiveDate.getTime()) / (1000 * 60 * 60 * 24)) - 1

  // Calculate days remaining (180 days total for new entrant period)
  const daysRemaining = 180 - daysActive

  // Function to format dates consistently
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="max-w-3xl mx-auto my-8">
      {/* Updated Compliance Preface */}
      <div className="bg-blue-900 text-white p-4 rounded-lg mb-4">
        <p className="text-lg font-semibold mb-2">
          Many brokers with compliance departments prefer carriers with an MC age of 6+ or 12+ months before onboarding.
          While this isn't always a practical measure of service quality, it remains an external factor beyond our
          control.
        </p>
        <p className="text-lg font-semibold mb-2">Here's where we stand:</p>
        <p className="text-md mb-2">
          At One Stop Growth, we don't just move freight—we build the technology that moves the industry forward.
        </p>
        <p className="text-md">
          As a solutions provider at the forefront of logistics innovation, we're working on a next-generation freight
          management platform designed to eliminate fraud, automate payments, and optimize load efficiency with true
          AI-driven insights.
        </p>
      </div>

      {/* DOT Status Box */}
      <div className="bg-blue-800 text-blue-200 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-extrabold text-orange-400 flex items-center mb-6">
          <FaCheckCircle className="text-orange-400 mr-2" />
          DOT Authority Status
        </h3>

        <div className="space-y-4">
          {/* DOT Grant Date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-orange-400" />
              <span>DOT Grant Date:</span>
            </div>
            <span className="font-bold text-white">{formatDate(dotGrantDate)}</span>
          </div>

          {/* DOT Active Since */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-orange-400" />
              <span>DOT Active Since:</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-white">{formatDate(dotActiveDate)}</span>
              <Link
                href="https://li-public.fmcsa.dot.gov/LIVIEW/pkg_carrquery.prc_authorityhistory"
                target="_blank"
                className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs hover:bg-orange-600 transition-colors"
              >
                Check FMCSA
              </Link>
            </div>
          </div>

          {/* Current Date */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaClock className="text-orange-400" />
              <span>Current Date:</span>
            </div>
            <span className="font-bold text-white">{formatDate(currentDate)}</span>
          </div>

          {/* DOT Active Days */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaHourglassHalf className="text-orange-400" />
              <span>DOT Active Days:</span>
            </div>
            <span className="font-bold text-white">{daysActive} days</span>
          </div>

          {/* Days Remaining */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaHourglassHalf className="text-orange-400" />
              <span>Days Remaining until @ 180:</span>
            </div>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {daysRemaining} days
            </span>
          </div>

          {/* New field: Days Remaining until @ 365 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FaHourglassHalf className="text-orange-400" />
              <span>Days Remaining until @ 365:</span>
            </div>
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              {365 - daysActive} days
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

