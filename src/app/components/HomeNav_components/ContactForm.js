'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion"
import Form from './Form'

export default function ContactForm() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })
  return (
    <div className="min-h-screen w-full mb-10 mx-auto">
      <div
        className="py-16 bg-gradient-to-t from-orange-400  to-backgroundColor px-4 sm:px-6 lg:px-8 "
        ref={ref}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className=" font-glancyr text-2xl md:text-5xl font-bold text-textheading text-center md:36 lg:mx-44 mb-5"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We'd Love to Hear From You
          </motion.h1>
          <motion.p
            className="text-textnormal text-center mb-10 md:36 lg:mx-44"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Whether you're a real estate agent, brokerage, or a curious visitor
            — reach out to us with your questions, feedback, or partnership
            ideas.
          </motion.p>
          <Form />
        </div>
      </div>
    </div>
  )
}
