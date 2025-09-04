"use client";
import { motion } from "framer-motion"
import React from 'react'
import Link from "next/link";
import SignInForm from "./SignInForm"; // adjust path as needed

export default function SignInCard() {
  return (
    <motion.div
      className="rounded-4xl p-8 md:p-4 lg:p-8 space-y-2 sm:space-y-4 lg:space-y-6"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      {/* Heading - zoom-in */}
      <motion.div
        className="text-center space-y-1 md:space-y-1 lg:space-y-2"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h1 className="text-xl md:text-xl lg:text-2xl text-textheading">
          Welcome Back!
        </h1>
        <p className="text-textnormal text-sm md:text-sm lg:text-md">
          Welcome back! Please sign in to your account
        </p>
      </motion.div>

      {/* Form */}
      <SignInForm />

      {/* Sign-up link - fade in */}
      <motion.div
        className="text-center"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <span className="text-sm text-textcheckbox">New here? </span>
        <Link
          href="/agentsignup"
          className="text-sm text-primary hover:underline font-medium"
        >
          Sign up to get started
        </Link>
      </motion.div>
    </motion.div>
  );
}
