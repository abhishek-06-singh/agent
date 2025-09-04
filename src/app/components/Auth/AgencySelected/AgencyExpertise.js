'use client'
import React from 'react'
import { useState } from 'react'
import Checkbox from '../../utilis/Checkbox'
const EXPERTISE = [
  'Real Estate Marketing',
  'Commercial Sales',
  'International Real Estate',
  'Real Estate Legal Advisory',
  'Other',
  'Residential Sales',
  'Property Management',
  'Developments and Projects',
  'Technology and Innovation',
]

export default function Expertise() {
  const [selectedExpertise, setSelectedExpertise] = useState([])

  const handleCheckBox = (option) => {
    setSelectedExpertise((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    )
  }
  return (
    <div>
      <h2 className="text-textheading text-md md:text-lg mb-6">
        Your Expertise
      </h2>
      <p className="text-xs md:text-sm text-textcheckbox mb-4">
        Area of Expertise (Select all that apply)
      </p>
      <div className="grid grid-cols-2 gap-y-3 gap-x-3 text-xs md:text-sm text-textcheckbox">
        {EXPERTISE.map((option) => (
          <Checkbox
            key={option}
            id={`expertise-${option}`}
            checked={selectedExpertise.includes(option)}
            onChange={() => handleCheckBox(option)}
            label={option}
          />
        ))}
      </div>
    </div>
  )
}
