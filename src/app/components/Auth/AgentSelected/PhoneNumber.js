'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
// import 'react-phone-input-2/lib/style.css'
// import './custom-phone-input.css' // We'll customize in this file
const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false })

export default function PhoneNumber() {
  const [phoneNumber, setPhoneNumber] = useState('')
  useEffect(() => {
    // ✅ Only load CSS on the client
    import('react-phone-input-2/lib/style.css')
  }, [])

  return (
    <div className="space-y-2">
      <label htmlFor="phone-number" className="text-sm text-textheading">
        Phone Number*
      </label>
      <PhoneInput
        country={'us'}
        value={phoneNumber}
        onChange={setPhoneNumber}
        inputProps={{
          name: 'phone',
          required: true,
        }}
        inputClass="!w-full !py-[10px] !pl-14 bg-backround !pr-4 !text-sm !text-black !border !border-bordercolor !rounded-xl !placeholder-gray-400"
        containerClass="!w-full"
        buttonClass="!border-r !border-gray-300 !bg-background"
        dropdownClass="!text-black"
      />
    </div>
  )
}
