'use client'
import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import GradientBackground from '../Footer_Components/GradientBackground'

import Image from 'next/image'
import Lightlogo from '../../images/div.svg'
import DarkLogo from '../../images/Darkmode.svg'
import { useTheme } from 'next-themes'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px 0px -50px 0px',
  })
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <footer
      ref={ref}
      className="
        relative 
        py-6 sm:py-6 md:py-10 lg:py-10 shadow-2xl shadow-primary
        overflow-hidden
      "
    >
      {/* Background Decorative Elements */}
    <GradientBackground/>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            gap-8 sm:gap-10 md:gap-12 lg:gap-16
          "
        >
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 sm:col-span-2 lg:col-span-1"
          >
         

            {/* Brand Description */}
            <motion.p
              variants={linkVariants}
              className="
                 leading-relaxed
                text-sm sm:text-base
                max-w-xs sm:max-w-sm text-primary
              "
              style={{
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                lineHeight: '1.6',
              }}
            >
              The complete real estate management platform
            </motion.p>
          </motion.div>

          {/* Product Section */}
          <motion.div variants={itemVariants}>
            <h3
              className="
                text-primary font-semibold mb-4 sm:mb-5 md:mb-6
                text-base sm:text-lg md:text-xl
              "
              style={{
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Product
            </h3>
            <motion.ul className="space-y-3 sm:space-y-4">
              {['Features', 'Pricing', 'Help Center'].map((item, index) => (
                <motion.li key={item} variants={linkVariants} custom={index}>
                  <motion.a
                    href="#"
                    className="
                      text-primary hover:text-secondary
                      text-sm sm:text-base
                      transition-colors duration-200
                      block
                    "
                    style={{
                      fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Company Section */}
          <motion.div variants={itemVariants}>
            <h3
              className="
                text-primary font-semibold mb-4 sm:mb-5 md:mb-6
                text-base sm:text-lg md:text-xl
              "
              style={{
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Company
            </h3>
            <motion.ul className="space-y-3 sm:space-y-4">
              {['About Us', 'Contact'].map((item, index) => (
                <motion.li key={item} variants={linkVariants} custom={index}>
                  <motion.a
                    href="#"
                    className="
                      text-primary hover:text-secondary
                      text-sm sm:text-base
                      transition-colors duration-200
                      block
                    "
                    style={{
                      fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Legal Section */}
          <motion.div variants={itemVariants}>
            <h3
              className="
                text-primary font-semibold mb-4 sm:mb-5 md:mb-6
                text-base sm:text-lg md:text-xl
              "
              style={{
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              Legal
            </h3>
            <motion.ul className="space-y-3 sm:space-y-4">
              {['Privacy Policy', 'Terms of Use'].map((item, index) => (
                <motion.li key={item} variants={linkVariants} custom={index}>
                  <motion.a
                    href="#"
                    className="
                      text-primary hover:text-secondary
                      text-sm sm:text-base
                      transition-colors duration-200
                      block
                    "
                    style={{
                      fontFamily:
                        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {item}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Responsive Breakpoint Indicators (Development Only) */}
    </footer>
  )
}
