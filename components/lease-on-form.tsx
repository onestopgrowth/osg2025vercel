"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function LeaseOnForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <form
      method="POST"
      action="https://formspree.io/f/xzzrzeek"
      noValidate
      className="space-y-6"
    >
      <div>
        <label htmlFor="full-name" className="block text-gray-700 font-semibold mb-2">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="full-name"
          name="fullName"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">Select Truck Type</option>
          <option value="Class 8 Sleeper">Class 8 Sleeper</option>
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
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
              className="mr-2"
            />
            <span>Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="isOwner"
              value="no"
              required
              className="mr-2"
            />
            <span>No</span>
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
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all w-full md:w-auto mt-8"
      >
        {isSubmitting ? "Submitting..." : "Submit Lease-On Application"}
      </Button>
    </form>
  )
}
