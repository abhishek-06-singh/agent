import React from 'react'
import { ChevronDown } from "lucide-react";

const PriceRangeDropdown = ({
  filters,
  setFilters,
  isOpen,
  toggleDropdown,
}) => {
  const handleChange = (key, value) => {
    // Prevent negative values
    const numericValue = Math.max(0, Number(value));
    setFilters((prev) => ({ ...prev, [key]: numericValue || '' }))
  }

  return (
    <div className="relative w-full">
      {/* Label */}
      <label className="block text-left text-xs sm:text-sm text-textcheckbox mb-1">
        Price Range
      </label>

      {/* Button */}
      <button
        className="flex items-center justify-between w-full border border-bordercolor rounded-xl 
                   px-2 sm:px-3 md:px-4 py-2 text-xs md:text-sm 
                   bg-input text-primary"
        onClick={() => toggleDropdown('price')}
      >
        <span className="truncate text-primary">
          {filters.minPrice || filters.maxPrice
            ? `${filters.minPrice || 0} - ${filters.maxPrice || '∞'}`
            : 'Any Price'}
        </span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute mt-2 z-10 w-full bg-input text-primary 
                     border border-bordercolor rounded-xl shadow-lg 
                     py-2 space-y-2"
        >
          {/* Section Label */}
          <div className="text-xs sm:text-sm md:text-base text-primary whitespace-nowrap font-medium mb-1 px-0.5 md:px-2">
            Enter Price Range
          </div>

          {/* Inputs */}
          <div className="flex gap-2 px-0.5 md:px-2">
            <input
              type="number"
              placeholder="Min"
              min="0"
              className="w-1/2 border border-bordercolor rounded-md px-2 py-1 text-xs md:text-sm text-text bg-input focus:outline-none focus:ring-1 focus:ring-primary"
              value={filters.minPrice || ''}
              onChange={(e) => handleChange('minPrice', e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              min="0"
              className="w-1/2 border border-bordercolor rounded-md px-2 py-1 text-xs md:text-sm text-text bg-input focus:outline-none focus:ring-1 focus:ring-primary"
              value={filters.maxPrice || ''}
              onChange={(e) => handleChange('maxPrice', e.target.value)}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default PriceRangeDropdown
