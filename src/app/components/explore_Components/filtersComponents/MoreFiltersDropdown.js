import React from 'react'
import { ChevronDown } from "lucide-react";

const MoreFiltersDropdown = ({
  filters,
  setFilters,
  locations = [],
  isOpen,
  toggleDropdown,
}) => {
  return (
    <div className="relative w-full">
      {/* Label */}
      <label className="block text-left text-xs sm:text-sm  text-textcheckbox mb-1">
        More Filters
      </label>

      {/* Button */}
      <button
        className="flex items-center justify-between w-full border border-bordercolor rounded-xl 
                   px-2 sm:px-3 md:px-4 py-2 text-xs  md:text-sm 
                   bg-input text-primary"
        onClick={() => toggleDropdown('more')}
      >
        <span className="truncate text-primary">{filters.location || 'All Locations'}</span>
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
            Select Location
          </div>

          {/* Locations */}
          {locations.map((loc, idx) => (
            <div
              key={idx}
              onClick={() => setFilters((prev) => ({ ...prev, location: loc }))}
              className={`cursor-pointer px-0.5 md:px-2 py-1 rounded whitespace-nowrap text-xs md:text-base 
                         hover:bg-buttonbg hover:text-background transition-colors

                         ${
                           filters.location === loc
                             ? 'bg-buttonbg font-medium text-background'
                             : ''
                         }`}
            >
              {loc}
            </div>
          ))}

          {/* Parking Toggle */}
          <div className="flex items-center justify-between pt-2 border-t px-2">
            <span className="text-xs sm:text-sm md:text-base text-textcheckbox">Has Parking</span>
            <input
              type="checkbox"
              checked={filters.parking || false}
              onChange={() =>
                setFilters((prev) => ({ ...prev, parking: !prev.parking }))
              }
              className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
            />
          </div>

          {/* Pet Friendly Toggle */}
          <div className="flex items-center justify-between px-2">
            <span className="text-xs sm:text-sm md:text-base text-textcheckbox">Pet Friendly</span>
            <input
              type="checkbox"
              checked={filters.petFriendly || false}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  petFriendly: !prev.petFriendly,
                }))
              }
              className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default MoreFiltersDropdown
