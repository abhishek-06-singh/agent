'use client'
import react from 'react'
import ActivePlan from './ActivePlan'
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion"

export default function Pricing_Page() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // <--- This ensures it triggers every time
  })
  

  return (
    <div className="mb-20">
      <div
        className="py-16 bg-gradient-to-t from-orange-400  to-backgroundColor px-4 sm:px-6 lg:px-8 "
        ref={ref}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className=" font-glancyr text-2xl md:text-5xl font-bold text-textheading text-center md:10 lg:mx-24 mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Simple Plans, Powerful Tools for Every Real Estate Professional
          </motion.h1>
          <motion.p
            className="text-textnormal text-center mb-10 md:18 lg:mx-32"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Choose a plan tailored to your role — whether you’re an individual
            agent, a growing agency, or an enterprise team. Unlock access to
            powerful tools, flexible collaboration, and smart property
            management.
          </motion.p>
          <ActivePlan />

        </div>
      </div>
    </div>
  )
}
