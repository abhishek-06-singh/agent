'use client'
import React from "react"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'

export default function Middlebar({ inView}) {

    return(
      <>
        <motion.h1
            className=" font-glancyr texy-primary mt-8 text-2xl md:text-3xl font-bold text-textheading text-center md:mx-10 lg:mx-24 "
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
          Choose the plan that fits your business
          </motion.h1>
          <motion.p
            className="text-textnormal text-xs md:text-lg text-center md:18 lg:mx-32"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Keep using all features by subscribing today.
          </motion.p></>
    )}   