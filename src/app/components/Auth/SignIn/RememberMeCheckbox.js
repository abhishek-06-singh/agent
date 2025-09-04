'use client'
import React,{useState} from 'react'
export default function RememberMeCheckbox() {
  const [rememberMe, setRememberMe] = useState(false)
  return (
    <div className="flex items-center space-x-2">
      <input
        id="remember"
        type="checkbox"
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
        className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
      />
      <label htmlFor="remember" className="text-sm text-textnormal">
        Remember me
      </label>
    </div>
  )
}
