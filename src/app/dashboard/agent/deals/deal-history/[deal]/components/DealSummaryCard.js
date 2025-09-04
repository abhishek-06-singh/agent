'use client'
import React from 'react'

const deal = {
  title: 'Downtown Condo Sale',
  status: 'Negotiation',
  dealValue: '$425,000',
  commission: '$6,250',
  date: 'Mar 15, 2025',
  property: {
    name: 'Modern Family Home',
    priceRange: '$450,000 - $600,000',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
  },
}

const statusStyles = {
  New: 'bg-green-500 text-white',
  Closed: 'bg-gray-400 text-black-500',
  Negotiation: 'bg-status-pending-in-review-500 text-white',
  Cancelled: 'bg-red-500 text-white',
}

export default function DealSummaryCard() {
  return (
    <div className="p-4 rounded-xl border border-bordercolor bg-white w-full max-w-7xl mx-auto shadow-sm">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={deal.property.image}
            alt={deal.title}
            className="w-20 h-16 rounded-md object-cover"
          />
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black-500">
              {deal.title}
            </h2>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${statusStyles[deal.status]}`}
            >
              {deal.status}
            </span>
          </div>
        </div>
      </div>

      {/* Deal Info Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="p-4 border border-bordercolor rounded-lg">
          <div className="text-xs sm:text-sm text-textplaceholder mb-1">Deal Value</div>
          <div className="text-sm sm:text-base font-semibold text-black-500">
            {deal.dealValue}
          </div>
        </div>

        <div className="p-4 border border-bordercolor rounded-lg">
          <div className="text-xs sm:text-sm text-textplaceholder mb-1">Total Commission</div>
          <div className="text-sm sm:text-base font-semibold text-black-500">
            {deal.commission}
          </div>
        </div>

        <div className="p-4 border border-bordercolor rounded-lg">
          <div className="text-xs sm:text-sm text-textplaceholder mb-1">Deal Stage</div>
          <div className="text-sm sm:text-base font-semibold text-black-500">
            {deal.status}
          </div>
        </div>

        <div className="p-4 border border-bordercolor rounded-lg">
          <div className="text-xs sm:text-sm text-textplaceholder mb-1">Expected Closing</div>
          <div className="text-sm sm:text-base font-semibold text-black-500">
            {deal.date}
          </div>
        </div>
      </div>
    </div>
  )
}
