'use client'
import React from 'react'
import { Headset } from 'lucide-react' 
import agentBlack from '../../../components/icons/Lightmode_icons/help/agent_black.svg'
import agentWhite from '../../../components/icons/Darkmode_icons/help_dark/agent_white.svg'
import Image from 'next/image'

export default function SupportCTA() {
  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor p-6 shadow-md w-full text-center">
      <h2 className="text-base font-semibold text-textnormal">Still need help?</h2>
      <p className="text-sm text-textnormal mt-1 mb-4">Our support team is here to assist you</p>
      <button className="inline-flex items-center gap-2 bg-buttonbg text-background px-5 py-2 rounded-md text-sm font-medium shadow hover:shadow-shadow transition">
        <Image src={agentBlack} alt="agent" className='hidden dark:block' width={18} height={18} />
        <Image src={agentWhite} alt="agent" className='block dark:hidden' width={18} height={18} />
        Contact Support
      </button>
    </div>
  )
}
