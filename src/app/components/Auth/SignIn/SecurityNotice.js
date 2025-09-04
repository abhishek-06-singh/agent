'use client'
import { Shield } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import shild from '../../../images/lock.svg'
import { motion } from "framer-motion"

export default function SecurityNotice() {
  return (
    <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
    <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 pt-2">
      <Image src={shild} className="w-4 h-4" />
      <span className="text-textnormal">
        Your information is protected with enterprise-grade security
      </span>
    </div></motion.div>
  )
}
