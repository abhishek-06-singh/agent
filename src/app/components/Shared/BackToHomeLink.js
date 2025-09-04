'use client'
import Link from 'next/link'
import { ChevronLeft } from "lucide-react";
import React from 'react'
import { motion } from "framer-motion"

export default function BackToHomeLink() {
  return (
    <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
             className='absolute top-[2.5%] left-[3.5%]'
          >
    <Link
      href="/"
      className="border border-bordercolor rounded-lg px-2 py-2  inline-flex items-center text-lg text-primary hover:text-primary transition-colors  w-full"
    >
      <span className=" flex text-md md:text-sm lg:text-md items-center ml-auto ">
        <ChevronLeft className="md:w-4 md:h-4 lg:w-5 lg:h-5 mr-2" />
        Back to Home
      </span>
    </Link></motion.div>
  )
}
