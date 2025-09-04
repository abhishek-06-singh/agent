import React from 'react'
import { ChevronDown } from 'lucide-react'

const BedBathDropdown = ({ filters, setFilters, isOpen, toggleDropdown }) => {
  const bed = filters.bedrooms
  const bath = filters.bathrooms

  const getLabel = () => {
    if (!bed && !bath) return 'Any'
    if (bed && bath) return `${bed} Bed, ${bath} Bath`
    if (bed) return `${bed} Bed`
    if (bath) return `${bath} Bath`
  }

  const options = ['Any', '1', '2', '3', '4+']

  const handleSelect = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value === 'Any' ? '' : value,
    }))
  }

  return (
    <div className="relative w-full">
      {/* Label */}
      <label className="block text-left text-xs sm:text-sm text-textcheckbox mb-1">
        Bedrooms & Bathrooms
      </label>

      {/* Button */}
      <button
        className="flex items-center justify-between w-full border border-bordercolor rounded-xl 
                   px-2 sm:px-3 md:px-4 py-2 text-xs md:text-sm 
                   bg-input text-primary"
        onClick={() => toggleDropdown('beds')}
      >
        <span className="truncate text-primary">{getLabel()}</span>
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute mt-2 z-10 w-full bg-input text-primary 
                     border border-bordercolor rounded-xl shadow-lg 
                     p-4 space-y-4 max-h-60 overflow-y-auto 
                     scrollbar-hide scrollbar-show"
        >
          {/* Bedrooms */}
          <div>
            <div className="text-xs sm:text-sm md:text-base text-primary whitespace-nowrap font-medium mb-2">
              Bedrooms
            </div>
            <div className="grid grid-cols-5 gap-2 text-primary">
              {options.map((num, idx) => (
                <button
                  key={`bed-${idx}`}
                  onClick={() => handleSelect('bedrooms', num)}
                  className={`w-10 h-8 flex items-center justify-center rounded-md border text-xs sm:text-sm
                             transition-colors
                             ${
                               filters.bedrooms === (num === 'Any' ? '' : num)
                                 ? 'bg-buttonbg text-background font-medium border-bordercolor'
                                 : 'hover:bg-buttonbg hover:text-background border-bordercolor'
                             }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div>
            <div className="text-xs sm:text-sm md:text-base text-primary whitespace-nowrap font-medium mb-2">
              Bathrooms
            </div>
            <div className="grid grid-cols-5 gap-2 text-primary">
              {options.map((num, idx) => (
                <button
                  key={`bath-${idx}`}
                  onClick={() => handleSelect('bathrooms', num)}
                  className={`w-10 h-8 flex items-center justify-center rounded-md border text-xs sm:text-sm
                             transition-colors
                             ${
                               filters.bathrooms === (num === 'Any' ? '' : num)
                                 ? 'bg-buttonbg text-background font-medium border-bordercolor'
                                 : 'hover:bg-buttonbg hover:text-background border-bordercolor'
                             }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BedBathDropdown
