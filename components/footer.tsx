import Link from "next/link"
import Image from "next/image"
import { Linkedin, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#000047] to-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/One%20Stop%20Growth%20Logo-8ScVK3VH9tC5LOk2OF6ff3hV9ZNtGV.png"
              alt="One Stop Growth Logo - A cute blue sprout character with green leaves"
              width={300}
              height={75}
              className="mb-8"
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
              className="text-white hover:text-[#E65C00] transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://www.facebook.com/OneStopGrowthLLC/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E65C00] transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://twitter.com/onestopgrowth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E65C00] transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} One Stop Growth. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

