'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems=[
  { name: 'Home', href: '/' },
  { name: 'Explore Properties', href: '/exploreproperties' },
  { name: 'Agents & Agencies', href: '/agents_agencies' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  ]
  
const menuVariants = {
  hidden: { opacity: 0, y: -10, height: 0 },
  visible: { opacity: 1, y: 0, height: 'auto' },
  exit: { opacity: 0, y: -10, height: 0 },
}

export default function MainMobileMenu({ isOpen }) {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lg:hidden overflow-hidden "
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1  bg-background border-t border-bordercolor">
            <div className='flex flex-col '>
            {navItems.map((item, i) => {
              const isActive = pathname === item.href
              return (
                <Link href={item.href}
                key={item.href}
          className={` px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${isActive ? 'text-white bg-buttonbg font-semibold' : 'text-textnormal hover:text-white  hover:bg-buttonbg'}`}>
            {item.name}
          </Link>
            )})}
            </div>
            <div className="pt-4 pb-3 border-t border-bordercolor">
              <div className="px-3 space-y-2">
                 <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-buttonbg text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-buttonbg transition-colors duration-200 w-full"
                >
                  Add Listing
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-buttonbg text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-buttonbg transition-colors duration-200 w-full"
                >
                  Go to Dashboard
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
