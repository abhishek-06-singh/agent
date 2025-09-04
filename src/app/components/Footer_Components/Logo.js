'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'

// Pass LightLogo and DarkLogo as props for flexibility
export default function Logo({ LightLogo, DarkLogo, width = 200, height = 200 }) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <motion.div
      className="flex items-center mb-4 sm:mb-5 md:mb-6"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {mounted ? (
        <Image
          src={resolvedTheme === 'dark' ? DarkLogo : LightLogo}
          alt="Logo"
          width={width}
          height={height}
        />
      ) : (
        <div style={{ width, height }} />
      )}
    </motion.div>
  )
}
