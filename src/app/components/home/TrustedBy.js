'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import MarqueeData from '../HomeNav_components/TrustedMarqueeData'

const TrustedBy = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false, // allow retrigger
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden') // reset when out of view
    }
  }, [controls, inView])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 text-center mt-10" ref={ref}>
     <h2 className="w-36 md:w-40 rounded-full px-3 py-3 mx-auto text-xs md:text-sm bg-textheading text-background flex items-center justify-center mb-16 font-bold">
          Trusted By
        </h2>
      <MarqueeData/>
    </div>
  )
}

export default TrustedBy
