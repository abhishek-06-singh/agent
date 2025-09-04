'use client'
import React from 'react'
import { Phone, Mail } from 'lucide-react' // optional, can replace with your own icons

const lead = {
  name: 'Sarah Johnson',
  role: 'Sub-Agent',
  phone: '(555) 123-4567',
  email: 'sarah@prestigerealty.com',
  verified: true,
  avatar: 'https://randomuser.me/api/portraits/women/44.jpg', // sample avatar
}

const deal = {
  property: '123 Main St #401',
  dealValue: '$450,000',
  status: 'Negotiation',
  date: 'Feb 28, 2025',
}

export default function LeadAndDealDetailsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ">
      {/* Lead Details */}
      <div className="border border-bordercolor rounded-lg p-4 bg-cardbg shadow-sm">
        <h3 className="text-sm sm:text-base font-semibold text-black-500 mb-4">
          Lead Details
        </h3>
        <div className="flex items-center gap-4">
          <img
            src={lead.avatar}
            alt={lead.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-sm sm:text-base text-black-500">
                {lead.name}
              </h4>
              {lead.verified && (
                <span className="bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                  Verified
                </span>
              )}
            </div>
            <p className="text-sm text-textplaceholder">{lead.role}</p>
            <div className="mt-2 space-y-1 text-sm text-textnormal">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{lead.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{lead.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deal Information */}
      <div className="border border-bordercolor rounded-lg p-4 bg-white shadow-sm">
        <h3 className="text-sm sm:text-base font-semibold text-black-500 mb-4">
          Deal Information
        </h3>
        <div className="grid grid-cols-2 gap-y-4 text-sm sm:text-base text-textnormal">
          <div>
            <p className="text-textplaceholder text-xs sm:text-sm mb-1">Property</p>
            <p className="font-semibold text-black-500">{deal.property}</p>
          </div>
          <div>
            <p className="text-textplaceholder text-xs sm:text-sm mb-1">Deal Value</p>
            <p className="font-semibold text-black-500">{deal.dealValue}</p>
          </div>
          <div>
            <p className="text-textplaceholder text-xs sm:text-sm mb-1">Deal Stage</p>
            <p className="font-semibold text-black-500">{deal.status}</p>
          </div>
          <div>
            <p className="text-textplaceholder text-xs sm:text-sm mb-1">Expected Closing</p>
            <p className="font-semibold text-black-500">{deal.date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
