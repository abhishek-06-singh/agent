'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from "framer-motion"
import LogoSection from './navbarComponents/LogoSection'
import MainDesktopAuthButtons from './MainNavbar_Components/MainDesktopAuthButtons'
import MainDesktopNavLinks from './MainNavbar_Components/MainDesktopNavLinks'
import MainMobileMenu from './MainNavbar_Components/MainMobileMenu'
import ThemeMode from '../common/ThemeMode'
import PriceModalWrapper from '../Modal/PriceModalWrapper'


export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);


  return (
    <motion.nav
      className=" shadow-sm shadow-gray-200 bg-background sticky top-0 left-0 w-full z-50 p-2"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16 w-full flex-nowrap overflow-hidden">

          {/* Logo */}
          <LogoSection />

          {/* Desktop Links */}
            
          <div className="hidden lg:block">
            <MainDesktopNavLinks />
          </div>
         
        
          {/* Desktop Auth */}
        
          <div className="hidden lg:flex items-center gap-4">
            <ThemeMode/>
            <MainDesktopAuthButtons openDashboard={showModal} />
          </div>
         

          {/* Mobile Toggle Button */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeMode/>
              <motion.button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center p-2 rounded-md text-textnormal hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6 " />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
       
      <MainMobileMenu isOpen={isMenuOpen} /> 
      <PriceModalWrapper
  isModalOpen={isModalOpen}
  handleCancel={handleCancel}
  showModal={showModal}
/>

    </motion.nav>
  )
}
