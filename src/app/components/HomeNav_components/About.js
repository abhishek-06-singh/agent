'use client'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import React from 'react'
import AboutDashboard from './AboutDashboard'
import CoreValues from './CoreValues'

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })
  return (
    <div className="w-full mx-auto min-h-screen px-5">
      <div
        className="py-16 bg-gradient-to-t from-orange-300  to-background px-4 sm:px-6 lg:px-8 "
        ref={ref}
      >
        <div className="max-w-6xl mx-auto ">
          <motion.h1
            className=" font-glancyr text-2xl md:text-5xl font-bold text-textheading text-center md:36 lg:mx-44 mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Everything you need to run your real estate business
          </motion.h1>
          <motion.p
            className="text-textnormal text-center mb-20 md:36 lg:mx-44"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Powerful features designed specifically for real estate
            professionals to optimize workflow and increase productivity.
          </motion.p>
          <AboutDashboard />
        </div>
      </div>
      <CoreValues />
    </div>
  )
}
