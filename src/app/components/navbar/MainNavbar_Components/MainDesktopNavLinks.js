'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Explore Properties', href: '/exploreproperties' },
  { name: 'Agents & Agencies', href: '/agents_agencies' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

const variants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
}

export default function PropertyDesktopNavLinks() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex lg:ml-6 items-baseline whitespace-nowrap md:space-x-1 lg:space-x-1">

      {navItems.map((item, i) => {
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
    </nav>
  )
}
