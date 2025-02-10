"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Our Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "More Info", href: "#" },
  // { name: "Case Studies", href: "/case-studies" }, // Commented out to hide this option
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-gradient-to-r from-[#002347]/90 to-[#003366]/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Growth%20Logo-8ScVK3VH9tC5LOk2OF6ff3hV9ZNtGV.png"
              alt="One Stop Growth Logo - A cute blue sprout character with green leaves"
              width={250}
              height={62}
              className="w-auto h-12"
            />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-white hover:text-[#FF8000] transition-colors text-lg">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-[#0000FF]/20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav
          className={`md:hidden ${
            isScrolled ? "bg-[#002347]/90 backdrop-blur-sm" : "bg-[#000047]"
          } border-t border-white/10`}
        >
          <ul className="flex flex-col space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white hover:text-[#FF8000] transition-colors block py-2 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

