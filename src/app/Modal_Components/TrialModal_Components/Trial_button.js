import React from "react"
import { MdSupportAgent } from "react-icons/md"
import { FaRocket } from "react-icons/fa" // Font Awesome rocket

export default function Trial_button() {
  return (
    <div className="w-full flex flex-row gap-2 mt-3 pb-4">
      {/* Free Trial Button */}
      <button className="w-full bg-buttonbg  text-background text-sm py-1.5 rounded-md flex flex-row items-center justify-center">
        <FaRocket className="w-4 h-4 inline-block mr-1.5 fill-current" />
        <span>Start Free Trial</span>
      </button>

      {/* Contact Sales Button */}
      <button className="w-full bg-cardbg text-primary text-sm py-1.5 border-2 border-bordercolor flex flex-row items-center justify-center rounded-md">
        <MdSupportAgent className="w-4 h-4 inline-block mr-1.5 fill-current" />
        <span>Contact Sales</span>
      </button>
    </div>
  )
}
