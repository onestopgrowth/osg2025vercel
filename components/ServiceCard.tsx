"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface ServiceCardProps {
  code: string
  name: string
  color: string
  details: string[]
}

export default function ServiceCard({ code, name, color, details }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group cursor-pointer">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div
            className={`aspect-square ${color} rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center p-2`}
          >
            <div className="text-2xl font-bold text-black">{code}</div>
            <div className="text-xs text-center mt-1 text-black font-medium">{name}</div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.5)]">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {details.map((detail, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
