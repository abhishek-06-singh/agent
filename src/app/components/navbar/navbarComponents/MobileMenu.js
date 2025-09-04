'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'


const nav = [
  { name: 'Features', href: '/keyfeatures' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Contact', href: '/contact' },
]

const menuVariants = {
  hidden: { opacity: 0, y: -10, height: 0 },
  visible: { opacity: 1, y: 0, height: 'auto' },
  exit: { opacity: 0, y: -10, height: 0 },
}

export default function MobileMenu({ isOpen }) {
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
          <div className="px-2 pt-2 pb-3 space-y-1  bg-background border-t border-gray-200">
            <div className='flex flex-col '>
            {nav.map((item, i) => {
              const isActive = pathname === item.href
              return (
                <Link href={item.href}
                key={item.href}
          className={` px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${isActive ? 'text-white bg-buttonbg font-semibold' : 'text-textnormal hover:text-white hover:bg-buttonbg'}`}>

            {item.name}
          </Link>
            )})}
            </div>

            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-3 space-y-2">
                <button className="w-full  text-textnormal hover:text-white hover:bg-buttonbg block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200">
                  Login
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-buttonbg text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-buttonbg transition-colors duration-200 w-full"
                >
                  Sign Up
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
