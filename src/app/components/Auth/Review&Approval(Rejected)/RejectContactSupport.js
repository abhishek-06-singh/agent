import Link from 'next/link'
import React from 'react'
import { MdSupportAgent } from "react-icons/md";
import { Upload } from 'lucide-react';


export default function RejectContactSupport() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-2 flex items-start justify-start gap-3 mb-20">
     <div className='flex flex-col items-start justify-start'>
        <p className="text-md px-2 md:px-4 md:text-lg text-textheading mb-2.5">Need Help?</p>
        <div className='w-full flex items-center flex-col md:flex-row gap-2'>
         <div className='px-4 md:px-0'>
        <Link href="#">
          <button className="w-48 md:w-auto flex items-center space-x-1 md:space-x-2 bg-primary text-background px-4 py-2 md:py-3  rounded-md text-xs md:text-sm hover:bg-hoveroverbutton transition">
            <MdSupportAgent className=" md:w-6 md:h-6" />
            <span>Contact Support</span>
          </button>
        </Link>
      </div>

      <div>
        <Link href="/agencydocs">
          <button className="w-48 md:w-auto flex items-center bg-cardbg border space-x-1 border-bordercolor md:space-x-2 text-subtext px-4  py-2 md:py-3  rounded-md text-xs md:text-sm  transition">
            <Upload className="w-4 h-4 md:w-6 md:h-6 text-subtext" />
            <span>Re-upload Documents</span>
          </button>
        </Link>
      </div>
      </div>
      </div>
    </div>
  )
}
