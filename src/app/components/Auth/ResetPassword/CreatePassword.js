'use client'
import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion"
import { Eye, EyeOff } from 'lucide-react'

export default function CreatePassword() {
const[password,setPassword] = useState('')
const[confirmPassword,setConfirmPassword] = useState('')
const[showPassword,setShowPassword] = useState(false)
const[showConfirmPassword,setShowConfirmPassword] = useState(false)


  return (
    <motion.div
            className=" p-8 space-y-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
    <div className="space-y-4">
      {/* New Password Field */}
      <div>
        <label
          htmlFor="new-password"
          className="block text-sm font-medium text-textnormal"
        >
          New Password
        </label>
        <div className="relative mt-1">
          <input
            id="new-password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-textplaceholder"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Confirm Password Field */}
      <div>
        <label
          htmlFor="confirm-password"
          className="block text-sm font-medium text-textnormal"
        >
          Confirm Password
        </label>
        <div className="relative mt-1">
          <input
            id="confirm-password"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-gray-900 placeholder-textplaceholder"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div></motion.div>
  )
}
