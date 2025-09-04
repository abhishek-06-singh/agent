import React from "react"
import {Clock} from "lucide-react"

export default function AlertBanner({coloredtext, message }) {
  return (
    <div className="flex items-center gap-2  p-3 border border-secondary bg-coral  rounded-md text-sm">
      <div className="flex items-center gap-0.5">
      <Clock className="text-red-500 w-5 h-5" />
      <span className="text-red-500">{coloredtext}</span>
      </div>

      <span className="text-textnormal font-medium">{message}</span>
    </div>
  )
}
