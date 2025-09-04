'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { getIcon } from './GetIcon'
import React, { useState, useEffect } from 'react'

export default function ThemedIcon({ name, alt = '', size = 24 }) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <span style={{ display: 'inline-block', width: size, height: size }} />
  }

  const icon = getIcon(name, theme === 'dark' ? 'dark' : 'light')
  if (!icon) return null

  return (
   
  <Image
    src={icon.src}
    alt={alt || name}
    width={icon.width || size}
    height={icon.height || size}
    className="object-contain transition-all duration-300 ease-in-out"
  />
  )
}
