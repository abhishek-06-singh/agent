'use client'

import { useState } from 'react'
import UserDropdown from './UserDropdown'
import { Bell } from 'lucide-react'
import Button from './Button'
import ThemeMode from '../../../components/common/ThemeMode'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const router = useRouter()

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }
  const handleNotificationsClick = () => {
    router.push('/dashboard/agent/notifications')
  }

  return (
    <div className="mt-0 w-full flex items-center border-b border-bordercolor p-2 md:p-4 lg:p-4 bg-background">
      <ThemeMode />
      {/* Right-side buttons wrapper */}
      <div className="ml-auto flex items-center gap-4">
        <Button className="text-textnormal bg-background border border-textnormal hover:bg-opacity-90 hover:scale-105 active:scale-95 hover:shadow-lg text-xs md:text-md lg:text-lg ">
          Explore Properties
        </Button>

        {/* Notification Bell */}
        <div className="relative">
          <Button
            onClick={handleNotificationsClick}
            className="text-textnormal bg-background border border-textnormal hover:bg-opacity-90 hover:scale-105 active:scale-95 hover:shadow-lg"
          >
            <Bell className="w-5 h-5 md:w-5 md:h-5 lg:w-6 ld:h-6" />
          </Button>
          {/* Red Dot Notification */}
          <span className="absolute -top-1 right-[0.02rem] w-3 h-3 bg-red-500 rounded-full"></span>
        </div>

        {/* User Dropdown */}
        <UserDropdown
          userImage="https://i0.wp.com/picjumbo.com/wp-content/uploads/chilled-young-black-male-model-in-studio-portrait-free-image.jpeg?w=2210&quality=70"
          userName="Abhishek Singh"
          isOpen={openDropdown === 'userMenu'}
          toggleDropdown={toggleDropdown}
          dropdownKey="userMenu"
        >
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            Profile
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            Settings
          </button>
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            Logout
          </button>
        </UserDropdown>
      </div>
    </div>
  )
}
