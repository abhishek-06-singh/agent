'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function DesktopAuthButtons() {
  return (
    <div className="ml-4 flex items-center space-x-4">
      <Link href={'/signin'}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-primary bg-secondary hover:text-secondary hover:border hover:border-secondary hover:bg-primary px-6 py-2.5 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Login
        </motion.button>
      </Link>
      <Link href={'/agencysignup'}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="  px-4 py-2 rounded-md text-sm text-textnormal font-medium border border-buttonbg hover:bg-primary hover:border-secondary hover:text-secondary  transition-colors duration-200"
        >
          Sign Up
        </motion.button>
      </Link>
    </div>
  )
}
