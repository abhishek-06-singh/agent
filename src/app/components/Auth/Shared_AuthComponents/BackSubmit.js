import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

export default function BackSubmit({ back_link, submitlink }) {
  return (
    <div className="w-full flex  mb-4">
      <div className="w-[94%] mx-auto flex items-center justify-between">
        <div className="w- flex items-center justify-between">
          <Link href={back_link}>
            <button className="flex items-center gap-2 border rounded-lg px-4 py-2 text-subtext text-xs md:text-sm">
              <ArrowLeft className="text-subtext  w-3 h-3 md:w-4 md:h-4 text-[1px] md:text-xs" />
              Back
            </button>
          </Link>
        </div>

        <div className=" flex items-center justify-center gap-2 rounded-lg">
          <Link href={submitlink}>
            <button className="sm:w-40 md:w-56 flex items-center justify-center gap-2 bg-buttonbg text-background px-2 md:px-4 py-2 text-xs md:text-sm rounded-lg ">
              <span className="text-xs md:text-sm">
                <span className="md:hidden">Submit</span>
                <span className="hidden md:inline">Submit For Review</span>
              </span>
              <ArrowRight className="  w-3 h-3 md:w-4 md:h-4 text-background text-[1px] md:text-xs" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
