'use client'
import React from 'react'
import { motion } from "framer-motion"
const ForgetPasswordHeading = () => {
  return (
    <motion.div
      className="text-left space-y-2"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h1 className="text-2xl text-textheading">Forgot Password</h1>
      <p className="text-textnormal text-md">
        Enter your registered email address to receive a password reset link.
      </p>
    </motion.div>
  )
}

export default ForgetPasswordHeading
