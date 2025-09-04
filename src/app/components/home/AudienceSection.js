'use client'
import React from 'react'
import { motion } from "framer-motion"
import { User, Building, Crown } from "lucide-react";
import small from '../../images/whoitsforbg.png'
import Image from 'next/image'

const benefits = [
  {
    icon: <User className="md:w-6 md:h-6 lg:w-10 lg:h-10 text-[#EEB887]" fill="currentColor" />,


    title: "Real Estate Agents",
    description: "Easily manage your listings, leads, and deals in one place.",
  },
  {
    icon: <Building className="md:w-6 md:h-6 lg:w-10 lg:h-10 text-[#EEB887]" />,
    title: "Real Estate Agencies",
    description: "Oversee teams, control listings, and track performance effortlessly.",
  },
  {
    icon: <Crown className="md:w-6 md:h-6 lg:w-10 lg:h-10 text-[#EEB887]" />,
    title: "Sub-Agents",
    description: "Collaborate with your assigned agent and access shared listings seamlessly.",
  },
];

export default function AudienceSection() {

  return (
    <div className="w-full lg:px-10 mx-auto px-4 py-20 text-center">
      {/* Section Tag */}
      <h2 className="w-36 md:w-40 rounded-full px-3 py-3 mx-auto text-xs md:text-sm bg-textnormal text-background flex items-center justify-center mb-16 font-bold">
        Who It's For
      </h2>

      {/* Main Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-subheading mb-2">
        Tailored Solutions for Every Real Estate Role
      </h3>

      {/* Subtitle */}
      <p className="text-textnormal text-sm md:text-base mb-12 max-w-2xl mx-auto">
        Smart tools tailored for agents, agencies, and sub-agents to manage, sell, and scale
      </p>

      {/* Benefits Grid */}
      <motion.div
  className="grid grid-cols-1 md:grid-cols-3 gap-6" // bigger gap for horizontal, still looks tight vertically
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  {benefits.map((benefit, index) => (
    <div key={index} className="flex flex-col items-start">
      {/* Card */}
      <motion.div
  className="relative p-8 flex flex-col items-center justify-center border rounded-2xl border-primary w-full h-48
           "
  whileHover={{ y: -5 }}
>
  <div className="absolute inset-0 z-0">
    <Image
      src={small}
      alt="Grid Background"
      fill
      className="object-cover pointer-events-none rounded-2xl"
    />
  </div>


          
        <div className="px-3 py-3 flex border-4 border-secondary items-center justify-center rounded-full bg-black-900 z-10">
          {benefit.icon}
        </div>
      </motion.div>

      {/* Title */}
      <h4 className="font-semibold mx- text-lg text-textnormal mt-2">
        {benefit.title}
      </h4>

      {/* Description */}
      <p className="text-textnormal text-sm mt-1 max-w-xs">

        {benefit.description}
      </p>
    </div>
  ))}
</motion.div>

    </div>
  );
}
