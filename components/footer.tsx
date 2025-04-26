import Link from "next/link"
import Image from "next/image"
import { Linkedin, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white to-[#f0f8ff] text-gray-900 py-12 border-t border-blue-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link href="/" className="relative">
            <Image
              src="/images/osg-logo.png"
              alt="One Stop Growth Logo"
              width={240}
              height={120}
              className="mb-8 object-contain"
              style={{ filter: "none", mixBlendMode: "normal" }}
            />
          </Link>

          {/* Company Info */}
          <div className="mb-8 text-center w-full max-w-2xl">
            <p className="mb-2">DOT: 4279426 | MC Number: 1663270</p>
            <p>800-674-3599 | get@onestopgrowth.com | Greater Philadelphia Area, Pennsylvania</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <Link
              href="https://linkedin.com/company/onestopgrowth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#4169E1] transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.facebook.com/OneStopGrowthLLC/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#4169E1] transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://twitter.com/onestopgrowth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#4169E1] transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} One Stop Growth. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
