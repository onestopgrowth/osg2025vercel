"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

// Organized navigation structure
const navItems = [
  { name: "Software Development", href: "/services/software-development" },
  { name: "IT Infrastructure", href: "/services/it-infrastructure-cybersecurity" },
  {
    name: "Logistics & Freight",
    href: "/services/logistics-freight-hauling",
    dropdown: [{ name: "Lease Your Truck", href: "/lease-your-truck" }],
  },
  { name: "Business Development", href: "/services/business-development" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Services", href: "/services" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileMenuOpen])

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/osg-logo.png"
              alt="One Stop Growth"
              width={160}
              height={80}
              className="w-auto h-8 md:h-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ml-10 flex-1 justify-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-medium flex items-center py-2 px-1"
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </Link>

                {item.dropdown && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block ml-6">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm py-1 px-3 h-auto">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}>
          {/* Mobile Menu Content - Stop propagation to prevent closing when clicking inside */}
          <div
            className="absolute top-[56px] right-0 bottom-0 w-full max-w-sm bg-white h-[calc(100vh-56px)] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <div key={item.name} className="border-b border-gray-100 last:border-b-0">
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="flex items-center justify-between w-full text-gray-800 hover:text-blue-600 py-4"
                        >
                          <span className="text-base font-medium">{item.name}</span>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Link to main page of dropdown section */}
                        <Link
                          href={item.href}
                          className="block text-sm text-blue-600 hover:underline mb-2 pl-4"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          View All {item.name}
                        </Link>

                        {activeDropdown === item.name && (
                          <div className="pl-4 mb-4 space-y-2 border-l-2 border-blue-100">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block text-gray-800 hover:text-blue-600 py-2 text-base"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block text-gray-800 hover:text-blue-600 py-4 text-base font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA Button */}
              <div className="mt-6">
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md text-base py-3 h-auto"
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
