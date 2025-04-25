import "./globals.css"
import { Roboto } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "One Stop Growth - Technology Meets Business Growth",
  description: "Full-service technology and business growth solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} font-sans`}>
      <body>{children}</body>
    </html>
  )
}
