'use client'
import { motion } from "framer-motion"
import Link from 'next/link'
import React from 'react'
import { useTheme } from 'next-themes'
import Lightlogo from '../../../images/div.svg'
import Darklogo from '../../../images/Darkmode.svg'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function SignupHeader() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Avoid rendering until mounted (fix hydration mismatch)
    return null
  }

  return (
    <motion.div
          className="w-full flex"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
    <div className="w-full flex items-center justify-center p-2 border-b  ">
      <div className="w-full md:w-[70%] lg:w-[70%] flex items-center justify-between ">
        <div className="flex flex-col md:flex-row lg:flex-row items-center  w-full justify-between">
          <div className=" flex items-center justify-center">
            <Link href={'/'}>
              {resolvedTheme === 'dark' ? (
                <Image
                  src={Darklogo}
                  alt="Logo"
                  width={200}
                  height={200}
                  className="dark"
                />
              ) : (
                <Image
                  src={Lightlogo}
                  alt="Logo"
                  width={200}
                  height={200}
                  className="light"
                />
              )}
            </Link>
          </div>

          <div className="flex items-center mt-2 md:mt-0 lg:mt-0 ">
            <p className="text-xs md:text-sm lg:text-sm  text-textnormal ">
              Already have an account?{' '}
              <Link href="/signin" className="text-primary font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div></motion.div>
  )
}
