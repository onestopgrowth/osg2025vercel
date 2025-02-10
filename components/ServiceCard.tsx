"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface ServiceCardProps {
  code: string
  name: string
  color: string
  details: string[]
  description: string
}

export default function ServiceCard({ code, name, color, details, description }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="group cursor-pointer">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="flex items-center p-4 rounded-xl bg-[#FF503] shadow-[0_0_15px_rgba(255,80,3,0.3)] hover:shadow-[inset_0_0_15px_rgba(0,0,0,0.2)] transition-shadow duration-300">
            <div
              className={`w-16 h-16 ${color} flex items-center justify-center text-white font-bold text-2xl shrink-0 rounded-lg`}
            >
              {code}
            </div>
            <div className="flex-1 ml-4">
              <h3 className="text-white text-lg font-medium">{name}</h3>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white rounded-xl shadow-[5px_5px_15px_rgba(0,0,0,0.1),-5px_-5px_15px_rgba(255,255,255,0.5)]">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{description}</p>
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

