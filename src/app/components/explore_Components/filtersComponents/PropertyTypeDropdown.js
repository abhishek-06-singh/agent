import React from 'react'
import { ChevronDown } from 'lucide-react'

const PropertyTypeDropdown = ({
  filters,
  setFilters,
  isOpen,
  toggleDropdown,
  listings = [],
}) => {
  const uniquePropertyTypes = [
    ...new Set(listings.map((item) => item.propertyType)),
  ]

  return (
    <div className="relative w-full">
      {/* Label */}
      <label className="block text-left text-xs sm:text-sm text-textcheckbox mb-1">
        Property Type
      </label>

      {/* Button */}
      <button
        className="flex items-center justify-between w-full border border-bordercolor rounded-xl 
                   px-2 sm:px-3 md:px-4 py-2 text-xs md:text-sm 
                   bg-input text-primary"
        onClick={() => toggleDropdown('propertyType')}
      >
        <span className="truncate text-primary">{filters.propertyType || 'All Types'}</span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute mt-2 z-10 w-full bg-input text-primary 
                     border border-bordercolor rounded-xl shadow-lg 
                     py-2 space-y-2 max-h-48 sm:max-h-56 md:max-h-60 
                     overflow-y-auto scrollbar-hide scrollbar-show"
        >
          {/* Section Label */}
          <div className="text-xs sm:text-sm md:text-base text-primary whitespace-nowrap font-medium mb-1 px-0.5 md:px-2">
            Property Types
          </div>

          {/* All Types Option */}
          <div
            onClick={() =>
              setFilters((prev) => ({ ...prev, propertyType: '' }))
            }
            className={`cursor-pointer px-0.5 md:px-2 py-1 rounded whitespace-nowrap text-xs md:text-base 
                        hover:bg-buttonbg hover:text-background transition-colors
                        ${filters.propertyType === '' ? 'bg-buttonbg font-medium text-background' : ''}`}
          >
            All Types
          </div>

          {/* Property Types */}
          {uniquePropertyTypes.map((type, idx) => (
            <div
              key={idx}
              onClick={() => setFilters((prev) => ({ ...prev, propertyType: type }))}
              className={`cursor-pointer px-0.5 md:px-2 py-1 rounded whitespace-nowrap text-xs md:text-base 
                          hover:bg-buttonbg hover:text-background transition-colors
                          ${filters.propertyType === type ? 'bg-buttonbg font-medium text-background' : ''}`}
            >
              {type}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PropertyTypeDropdown
