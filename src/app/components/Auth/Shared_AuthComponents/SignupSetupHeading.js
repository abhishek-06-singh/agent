'use client'
import { motion } from "framer-motion"
import React from 'react'

const SetupHeading = ({ title, desc }) => {
  return (
    <motion.div
      className=" space-y-2"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h1 className="text-2xl md:text-3xl lg:text-3xl text-center text-textheading mb-3 md:mb-3 lg:mb-6">
        {title}
      </h1>
      <p className="text-textnormal text-center text-xs md:text-base lg:text-base">
        {desc}
      </p>
    </motion.div>
  )
}

export default SetupHeading
