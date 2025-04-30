import Link from "next/link"
import Image from "next/image"
import { Linkedin, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white to-[#f0f8ff] text-gray-900 py-8 md:py-12 border-t border-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link href="/" className="relative mb-6 md:mb-8">
            <Image
              src="/images/osg-logo.png"
              alt="One Stop Growth Logo"
              width={240}
              height={120}
              className="w-auto h-10 md:h-12 object-contain"
              style={{ filter: "none", mixBlendMode: "normal" }}
            />
          </Link>

          {/* Company Info */}
          <div className="mb-6 md:mb-8 text-center w-full max-w-2xl">
            <p className="mb-2 text-sm md:text-base">DOT: 4279426 | MC Number: 1663270</p>
            <p className="text-sm md:text-base">
              800-674-3599 | get@onestopgrowth.com | Greater Philadelphia Area, Pennsylvania
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 md:space-x-6 mb-6 md:mb-8">
            <Link
              href="https://linkedin.com/company/onestopgrowth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#4169E1] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.facebook.com/OneStopGrowthLLC/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#4169E1] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 md:h-6 md:w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://twitter.com/onestopgrowth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#4169E1] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 md:h-6 md:w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs md:text-sm text-gray-600">
            © {new Date().getFullYear()} One Stop Growth. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
