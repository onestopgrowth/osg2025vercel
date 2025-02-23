"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    name: "Our Services",
    href: "/services",
    subItems: [
      { name: "Software Development", href: "/services/software-development" },
      { name: "IT Infrastructure & Cybersecurity", href: "/services/it-infrastructure-cybersecurity" },
      { name: "Business Development", href: "/services/business-development" },
    ],
  },
  { name: "Size Matters - We Deliver", href: "/services/logistics-freight-hauling" },
  { name: "About Us", href: "/about" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmenuToggle = (itemName: string) => {
    setActiveSubmenu(activeSubmenu === itemName ? null : itemName)
  }

  return (
    <>
      <div className="fixed w-full bg-black text-white z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-end py-1 text-sm font-light">
            <span>DOT: 4279426 | MC: 1663270 | SCAC: ONRT</span>
          </div>
        </div>
      </div>
      <header
        className={`fixed w-full top-0 z-50 mt-6 transition-all duration-300 ${
          isScrolled ? "bg-[#000047]/95 backdrop-blur-sm" : "bg-transparent"
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
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.subItems ? (
                    <button
                      className="text-white hover:text-[#FF8000] transition-colors text-lg font-medium flex items-center"
                      onClick={() => handleSubmenuToggle(item.name)}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:text-[#FF8000] transition-colors text-lg font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.subItems && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-[#000047] ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-[#FF8000] hover:text-white"
                            role="menuitem"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Button
                asChild
                className="bg-[#FF8000] hover:bg-[#FF9900] text-white font-bold py-2 px-4 rounded-full transition-colors text-lg"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
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
              isScrolled ? "bg-[#000047]/95 backdrop-blur-sm" : "bg-[#000047]"
            } border-t border-white/10`}
          >
            <ul className="flex flex-col space-y-4 px-6 py-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.subItems ? (
                    <div>
                      <button
                        className="text-white hover:text-[#FF8000] transition-colors block py-2 text-lg font-medium w-full text-left flex items-center justify-between"
                        onClick={() => handleSubmenuToggle(item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transform transition-transform ${
                            activeSubmenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {activeSubmenu === item.name && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                className="text-white hover:text-[#FF8000] transition-colors block py-1 text-base font-regular"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:text-[#FF8000] transition-colors block py-2 text-lg font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Button
                  asChild
                  className="bg-[#FF8000] hover:bg-[#FF9900] text-white font-bold py-2 px-4 rounded-full transition-colors w-full text-lg"
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}

