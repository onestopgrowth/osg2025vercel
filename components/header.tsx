"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

// Flat list of all pages
const navItems = [
  { name: "Software Development", href: "/services/software-development" },
  { name: "IT Infrastructure", href: "/services/it-infrastructure-cybersecurity" },
  { name: "Business Development", href: "/services/business-development" },
  { name: "Logistics & Freight", href: "/services/logistics-freight-hauling" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Services", href: "/services" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="relative w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/osg-logo.png"
              alt="One Stop Growth"
              width={160}
              height={80}
              className="w-auto h-10 md:h-12"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-6 ml-10 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block ml-6">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm py-1 px-3 h-auto">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container mx-auto px-6 py-3">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm py-1 h-auto"
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
