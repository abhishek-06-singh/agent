'use client'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import React,{useState} from 'react'

export default function PasswordInput() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="space-y-2">
      <label htmlFor="password" className="text-sm font-medium text-textnormal">
        Password
      </label>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-textplaceholder"
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-textnormal hover:text-gray-600 transition-colors"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
      <div className="text-right">
        <Link
          href="/forgetpassword"
          className="text-sm text-textnormal hover:text-primary transition-colors"
        >
          Forgot Password?
        </Link>
      </div>
    </div>
  )
}
