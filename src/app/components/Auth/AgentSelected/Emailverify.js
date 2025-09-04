'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import info from '../../../images/info.svg'
import verify from '../../../images/Vector.svg'
export default function EmailInput() {
  const [email, setEmail] = useState('')
  const [verified, setVerified] = useState(false)
  return (
    <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-medium text-textheading">
        Email Address*
      </label>
      <div className="w-full flex justify-between items-center gap-2 flex-row">
        <div className="w-[90%] relative">
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 pr-10 py-2 md:py-3 text-sm md:text-lg border border-bordercolor rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-primary placeholder-textplaceholder "
            required
          />
          {verified ? (
            <>
              {' '}
              <Image
                src={verify}
                alt="Verified"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textnormal"
              />
            </>
          ) : (
            ''
          )}
        </div>
        <div>
          <button
            type="button"
            className={`md:py-3 px-5 py-2 text-sm md:text-lg rounded-lg transition-colors duration-300 text-background ${verified ? 'bg-verifiedbg' : 'bg-textheading'}`}
            onClick={() => setVerified(true)}
          >
            {verified ? 'Verified' : 'Verify'}
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-1">
        <div className="flex items-center  md:justify-center w-4 h-4 md:mt-1">
          <Image src={info} alt="info icon" className="w-4 h-4" />
        </div>
        <div className="w-full flex justify-between items-center ">
          <div className="text-xs md:text-sm text-textnormal mt-1">
            Verify your email to unlock the next step.
          </div>
          <div>
            <button
              className="text-textnormal text-xs md:text-sm"
              disabled={!verified}
              onClick={() => console.log('clicked')}
            >
              Resend Email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
