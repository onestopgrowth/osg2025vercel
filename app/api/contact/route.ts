import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")

  // Here you would typically send an email or save to a database
  console.log("Form submission:", { name, email, phone, message })

  // For now, we'll just log the data and return a success response
  return NextResponse.json({ message: "Form submitted successfully" })
}

