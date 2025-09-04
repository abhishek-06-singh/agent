'use client'
import React from 'react'
import { FaEdit } from 'react-icons/fa'

export default function InternalNotesCard() {
  const note = `Client is very motivated to close quickly due to job relocation. They've already secured financing pre-approval for $500k. Mentioned they’re also looking at two other properties but this is their preferred choice. Follow up on inspection scheduled for next week.`

  const lastUpdated = {
    by: 'John Smith',
    date: 'Jan 24, 2025',
    time: '2:30 PM',
  }

  return (
    <div className="w-full max-w-7xl mx-auto bg-white border border-bordercolor rounded-xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
        <h3 className="text-base sm:text-lg font-semibold text-black-500">
          Internal Notes
        </h3>
        <button className="mt-2 sm:mt-0 flex items-center gap-1 text-sm px-3 py-1 rounded border border-gray-300 hover:bg-gray-100 transition">
          <FaEdit className="text-xs" />
          Edit Notes
        </button>
      </div>

      {/* Note Content */}
      <p className="text-sm text-black-500 leading-relaxed mb-4">
        {note}
      </p>

      {/* Last Updated Info */}
      <div className="text-xs text-textplaceholder border-t pt-2">
        Last updated by {lastUpdated.by} on {lastUpdated.date} at {lastUpdated.time}
      </div>
    </div>
  )
}
