'use client'
import React from 'react'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import RememberMeCheckbox from './RememberMeCheckbox'
import { motion } from "framer-motion"


export default function SignInForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sign in:')
  }

  return (
     <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
    <form
      onSubmit={handleSubmit}
      className="space-y-2 sm:space-y-4 lg:space-y-6"
    >
      <EmailInput />
      <PasswordInput />
      <RememberMeCheckbox />
      <button
        type="submit"
        className="w-full bg-buttonbg text-white py-3 px-4 rounded-lg hover:bg-opacity-90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 font-medium"
      >
        Sign in
      </button>
    </form></motion.div>
  )
}
