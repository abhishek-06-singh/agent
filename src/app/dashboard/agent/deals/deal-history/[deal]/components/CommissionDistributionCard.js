'use client'
import React from 'react'

// Sample data based on your image
const commissionData = [
  {
    id: 1,
    name: 'John Doe (You)',
    email: 'John.Smith@alianza.com',
    role: 'You',
    percentage: '60%',
    amount: '$4,000',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'John Doe (You)',
    email: 'John.Smith@alianza.com',
    role: 'Lead Agent',
    percentage: '30%',
    amount: '$2,000',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Michael Chen',
    email: 'Michael.chen@alianza.com',
    role: 'Sub-Agent',
    percentage: '10%',
    amount: '$1,000',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
  },
]

export default function CommissionDistributionCard() {
  return (
    <div className="border border-bordercolor rounded-xl p-4 bg-white shadow-sm w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-black-500">
          Commission Distribution
        </h3>
        <span className="text-sm text-black-500 font-medium mt-2 sm:mt-0">
          Total: 100%
        </span>
      </div>

      {/* Commission Rows */}
      <div className="space-y-3">
        {commissionData.map((member) => (
          <div
            key={member.id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-bordercolor rounded-lg p-4 gap-3"
          >
            {/* Left: Avatar & Info */}
            <div className="flex items-center gap-4">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-medium text-sm sm:text-base text-black-500">{member.name}</div>
                <div className="text-xs sm:text-sm text-textplaceholder">{member.email}</div>
              </div>
            </div>

            {/* Middle: Role */}
            <div className="text-sm sm:text-base text-black-500 sm:ml-auto">
              {member.role}
            </div>

            {/* Right: Percentage & Amount */}
            <div className="text-right">
              <div className="text-sm font-semibold text-black-500">{member.percentage}</div>
              <div className="text-xs sm:text-sm text-textplaceholder">{member.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
