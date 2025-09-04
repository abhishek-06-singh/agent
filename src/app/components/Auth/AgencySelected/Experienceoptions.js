'use client'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ExperienceOption() {
  const [selected, setSelected] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const options = [
    { value: 'beginner', label: 'Beginner (0-1 years)' },
    { value: 'intermediate', label: 'Intermediate (2-5 years)' },
    { value: 'expert', label: 'Expert (6+ years)' },
  ]

  return (
    <div className="space-y-1 relative">
      <label className="py-2 px-2 block text-sm font-medium text-textheading">
        Experience Level
      </label>

      {/* Custom dropdown button */}
      <div
        className="w-full px-4 pr-10 py-2 relative md:py-3 text-sm md:text-md border border-bordercolor rounded-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected || 'Select Your Experience Level'}
        <ChevronDown className="absolute w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-textcheckbox flex-shrink-0 right-4 top-1/2 transform -translate-y-1/2" />
      </div>

      {/* Custom dropdown options */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-2 hover:bg-black-500 hover:text-white cursor-pointer transition-colors ${
                selected === option.label ? 'bg-gray-100' : ''
              }`}
              onClick={() => {
                setSelected(option.label)
                setIsOpen(false)
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
