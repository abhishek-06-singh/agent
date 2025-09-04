'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import CustomDropdownUser from './CustomDropdownUser'

export default function UserDropdown({
  userImage,
  userName,
  isOpen,
  toggleDropdown,
  dropdownKey,
  children,
  className = '',
}) {
  return (
    <div className={`flex items-center  ${className}`}>
      {/* User Image */}
      <img
        src={userImage}
        alt={userName}
        className="w-10 h-10 rounded-md object-cover border border-bordercolor hidden md:block lg:block"
      />

      {/* Username + Dropdown */}
      <div className="flex-1">
        <CustomDropdownUser
          selectedLabel={userName}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
          dropdownKey={dropdownKey}
        >
          {children}
        </CustomDropdownUser>
      </div>

      {/* Icon that also toggles dropdown */}
      <button
        onClick={() => toggleDropdown(dropdownKey)}
        className="focus:outline-none"
      >
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-primary" />
        ) : (
          <ChevronDown className="w-5 h-5 text-primary" />
        )}
      </button>
    </div>
  )
}
