import React from 'react'
import Link from 'next/link'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
export default function BackContinue({ back_link, Continue_link }) {
  return (
    <div className="w-full flex mt-5 mb-4">
      <div className="w-full flex items-center flex-col space-y-2 sm:space-y-0  sm:justify-between sm:flex-row">
        <div className="w-full flex items-center flex-col space-y-2  sm:space-y-0 sm:justify-between sm:flex-row">
          <Link href={back_link}>
            <button className="w-full flex items-center text-subtext gap-2 border border-bordercolor rounded-lg px-4 py-2 text-backgroundtext-xs md:text-sm">
              <FaArrowLeft className="text-subtext text-sm md:text-sm" />
              Back
            </button>
          </Link>
        </div>

        <div className=" flex items-center justify-center gap-2 rounded-lg">
          <Link href={Continue_link}>
            <button className="w-full sm:w-40 md:w-56 flex items-center justify-center gap-2 bg-buttonbg text-background px-2 md:px-4 py-2 text-xs md:text-sm rounded-lg ">
              Continue
              <FaArrowRight className="text-background text-sm md:text-sm" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
