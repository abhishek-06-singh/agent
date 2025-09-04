import React from 'react'
import { ChevronDown } from 'lucide-react'

const CustomDropdownUser = ({
  label,
  selectedLabel,
  isOpen,
  toggleDropdown,
  dropdownKey,
  children,
}) => {
  return (
    <div className="relative w-full">
      {/* Label */}
      {label && (
        <label className="block text-left text-xs sm:text-sm text-textcheckbox mb-1">
          {label}
        </label>
      )}

      {/* Button */}
      <button
        className="flex items-center justify-between w-full  
                   px-2 sm:px-3 md:px-4 py-2 text-xs md:text-sm 
                   bg-input text-primary"
        onClick={() => toggleDropdown(dropdownKey)}
      >
        <span className="truncate text-text">{selectedLabel}</span>
        {/* <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" /> */}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div
          className="absolute mt-2 z-10 w-full bg-input text-primary 
                     border border-bordercolor rounded-md shadow-lg 
                     py-2 space-y-2 max-h-60 overflow-y-auto scrollbar-hide"
        >
          {children}
        </div>
      )}
    </div>
  )
}

export default CustomDropdownUser
