'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const nav = [
  { name: 'Features', href: '/keyfeatures' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About Us', href: '/aboutus' },
  { name: 'Contact', href: '/contact' },
]

const variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
}

export default function DesktopNavLinks() {
   const pathname = usePathname()
  return (
    <div className="ml-10 flex items-baseline space-x-8">
     {nav.map((item, i) => {
        const isActive = pathname === item.href
        return (
          <motion.div
            key={item.href}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <Link
              href={item.href}
              className={`mx-2 xl:mx-2 py-2 lg:mx-2 md:mx-2 text-sm font-medium transition-colors duration-200 ${

                isActive
                  ? 'border-b-2 border-secondary text-textnormal'
                  : 'text-textnormal hover:border-b-2 hover:border-secondary'
              }`}
            >
              {item.name}
            </Link>
          </motion.div>
        )
      })}
    </div>
  )
}
