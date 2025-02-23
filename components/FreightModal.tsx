"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruck } from "@fortawesome/free-solid-svg-icons"

export default function FreightModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isButtonVisible, setIsButtonVisible] = useState(true)

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal()
      }
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const bodyHeight = document.body.offsetHeight

      // Check if user has scrolled halfway down the page
      if (scrollPosition > (bodyHeight - windowHeight) / 2) {
        setIsButtonVisible(false)
      } else {
        setIsButtonVisible(true)
      }
    }

    document.addEventListener("keydown", handleEscapeKey)
    window.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("keydown", handleEscapeKey)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [closeModal])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <>
      {isButtonVisible && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-[#FF8000] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#FF9900] transition-colors duration-300 z-50"
        >
          <FontAwesomeIcon icon={faTruck} className="mr-2" />
          Are You A Freight Broker? Click here.
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-auto relative space-y-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <X size={24} />
            </button>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTruck} className="text-blue-600 text-3xl mr-2" />
              <h2 className="text-3xl font-extrabold text-blue-900">Need Freight Hauled?</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">On-time. Optimized. No Excuses. Let's move.</p>
            <Link
              href="/interstate-freight-hauling"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md w-full text-center block transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              View Interstate Freight Hauling
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

