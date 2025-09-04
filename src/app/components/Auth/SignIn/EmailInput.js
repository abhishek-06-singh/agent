'use client'
import { Mail } from 'lucide-react'
import Image from 'next/image'
import mail from '../../../images/mail.svg'
import React,{useState} from 'react'

export default function EmailInput() {
  const [email, setEmail] = useState('')
  return (
    <div className="space-y-2">
      <label htmlFor="email" className="text-sm font-medium text-textnormal">
        Email Address
      </label>
      <div className="relative">
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-textplaceholder"
          required
        />
        <Image
          src={mail}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-textnormal"

        />
        {/* <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" /> */}
      </div>
    </div>
  )
}
