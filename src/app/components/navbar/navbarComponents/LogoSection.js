'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Lightlogo from '../../../images/div.svg'
import Darklogo from '../../../images/Darkmode.svg'
import { useTheme } from 'next-themes'
import Link from 'next/link'

export default function LogoSection() {
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
      className=" flex items-center whitespace-nowrap"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Link href="/">

      {resolvedTheme === 'dark' ? (
        <Image src={Darklogo} alt="Logo" width={200} height={200} className="dark" />
      ) : (
        <Image src={Lightlogo} alt="Logo" width={200} height={200} className='light' />
      )}</Link>
    </motion.div>
  )
}
