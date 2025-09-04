'use client'
import React from 'react'
import { motion } from "framer-motion"
const MainHeading = ({title,desc}) => {
  return (
    <motion.div
      className="bg-background space-y-2 my-10 md:my-12 lg:my-16"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-textheading font-medium pb-1 md:pb-1 font-glancyr lg:px-32 lg:pb-4">{title}</h1>
      <p className="text-textnormal text-center text-sm md:text-lg ">
       {desc}
      </p>
    </motion.div>
  )
}

export default MainHeading
