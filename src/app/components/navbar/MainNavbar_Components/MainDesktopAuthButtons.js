'use client'
import { motion } from "framer-motion"
import React from 'react'
import Profilelogo from "../../../images/Profilelogo.svg"
import Image from "next/image"
import Link from 'next/link'

export default function PropertyDesktopAuthButtons({openDashboard}) {

  return (
    <div className="ml-4 lg:ml-0 md:ml-0 flex items-center lg:space-x-2 md:space-x-1 space-x-4  whitespace-nowrap">
      <Link href="/exploreproperties">

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
         className="bg-buttonbg text-background font-medium h-10 px-4 py-2   md:px-4 md:py-1 rounded-xl text-xs  transition-colors duration-200"
      >
        Add Listing
      </motion.button>
      </Link>
      <motion.button
        onClick={openDashboard}
        whileTap={{ scale: 0.95 }}
        className="bg-buttonbg  text-background font-medium h-10 px-4 py-2  md:px-4 md:py-1 rounded-xl text-xs  transition-colors duration-200"
      >
        Go to Dashboard       

      </motion.button>
      <motion.div
      initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.10 }}
  className="flex items-center">
        <Image
          src={Profilelogo}
          alt="Profilelogo"
          className="w-10 h-10 md:w-8 lg:w-8 xl:w-10 rounded-full"
        />
      </motion.div>

    </div>
  )
}
