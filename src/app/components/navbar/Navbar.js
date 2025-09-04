'use client'
import React from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from "framer-motion"
import LogoSection from './navbarComponents/LogoSection'
import DesktopNavLinks from './navbarComponents/DesktopNavLinks'
import DesktopAuthButtons from './navbarComponents/DesktopAuthButtons'
import MobileMenu from './navbarComponents/MobileMenu'
import ThemeMode from '../common/ThemeMode'


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.nav
      className=" bg-background sticky top-0 left-0 w-full z-50 p-2"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <LogoSection />

          {/* Desktop Links */}
       
          <div className="hidden md:block">
            <DesktopNavLinks />
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeMode/>
            <DesktopAuthButtons />
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeMode/>
            <motion.button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center p-2 rounded-md text-textnormal hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} />
    </motion.nav>
  )
}
