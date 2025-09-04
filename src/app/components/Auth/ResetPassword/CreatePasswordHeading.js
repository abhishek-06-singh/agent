'use client'
import React from 'react'
import { motion } from "framer-motion"
export default function CreatePasswordHeading() {
  return (
    <motion.div
      className="text-center space-y-2"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h1 className="text-2xl text-textheading">Reset Your Password</h1>
      <p className="text-textnormal text-md">
        Enter a new password to secure your account.
      </p>
    </motion.div>
  )
}


