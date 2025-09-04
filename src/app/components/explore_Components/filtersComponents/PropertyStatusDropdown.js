import React from 'react'
import { ChevronDown } from 'lucide-react'

const PropertyStatusDropdown = ({
  selectedStatus,
  setSelectedStatus,
  isOpen,
  toggleDropdown,
}) => {
  const statusOptions = ['Active', 'Under Contract']

  return (
    <div className="relative w-full">
      {/* Label */}
      <label className="block text-xs sm:text-sm text-textcheckbox mb-1">
        Property Status
      </label>

      {/* Button */}
      <button
        className="flex items-center justify-between w-full border border-bordercolor rounded-xl 
                   px-2 sm:px-3 md:px-4 py-2 text-xs md:text-sm 
                   bg-input text-primary"
        onClick={() => toggleDropdown('propertyStatus')}
      >
        <span className="truncate text-primary">
          {selectedStatus || 'Status'}
        </span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute mt-2 z-10 w-full bg-input text-primary 
                     border border-bordercolor rounded-xl shadow-lg 
                     py-2 space-y-2 max-h-60 overflow-y-auto"
        >
          {/* Section Label */}
          <div className="text-xs sm:text-sm md:text-base text-primary whitespace-nowrap font-medium mb-1 px-0.5 md:px-2">
            Select Status
          </div>

          {/* Options */}
          {statusOptions.map((status, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedStatus(status)
                toggleDropdown(null) // close dropdown
              }}
              className={`cursor-pointer px-0.5 md:px-2 py-1 rounded whitespace-nowrap text-xs md:text-base 
                          hover:bg-buttonbg hover:text-background transition-colors

                          ${
                            selectedStatus === status
                              ? 'bg-buttonbg font-medium text-background'
                              : ''
                          }`}
            >
              {status}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PropertyStatusDropdown
