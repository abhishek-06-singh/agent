'use client'
import React from "react"
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"
import CoreValueCards from "./CoreValueCards";


export default function CoreValues(){

            const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, 
  })
    return(
        <div className="max-w-7xl mx-auto min-h-screen">
     
    <div
      className="py-16  px-4 sm:px-6 lg:px-8 "
      ref={ref}
    >

      <div className="max-w-6xl mx-auto ">
    
        <motion.h2
          className=' font-glancyr text-2xl md:text-4xl font-bold text-textheading text-center md:36 lg:mx-44 mb-5'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Our Core Values
        </motion.h2>
        <motion.p
          className='text-textnormal text-center mb-20 md:36 lg:mx-44'
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
         Built with privacy-first architecture to keep your data safe, compliant, and secure.
        </motion.p>
        <CoreValueCards/>
       </div>
        </div>
         </div>
    )

  }
