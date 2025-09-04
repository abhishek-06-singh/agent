'use client'
import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import {
  ReceiptText,
  ChartLine,
  Building,
  Users,
  ArrowRight,
  PieChart,
  BookUser,
  FilePen,
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: <Building className="w-6 h-6 lg:w-8 lg:h-8 text-textblack" />,
    title: 'Property Listings',
    description:
      'Create, manage and showcase your properties with high-quality images and detailed information.',
  },
  {
    icon: <BookUser className="w-6 lg:w-8 h-6 lg:h-8 text-textblack" />,
    title: 'CRM System',
    description:
      'Keep track of all your leads, clients, and transactions in one centralized database.',
  },
  {
    icon: (
      <Users
        className="w-6 h-6 lg:w-8 lg:h-8 text-textblack"
        fill="currentColor"
      />
    ),

    title: 'Sub-agent Management',
    description:
      'Easily add, manage and track performance of sub-agents working under your agency.',
  },
  {
    icon: <ChartLine className="w-6 h-6 lg:w-8 lg:h-8 text-textblack" />,
    title: 'Commission Tracking',
    description:
      'Automate commission calculations and distributions with our customizable commission plans.',
  },
  {
    icon: <FilePen className="w-6 h-6 lg:w-8 lg:h-8 text-textblack" />,
    title: 'Digital Contracts',
    description:
      'Create, send, and sign real estate contracts digitally with legally binding e-signatures.',
  },
  {
    icon: <PieChart className="w-6 h-6 lg:w-8 lg:h-8 text-textblack" />,
    title: 'Analytics Dashboard',
    description:
      'Get insights into your business performance with comprehensive analytics and reports.',
  },
]

export default function KeyFeatures() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // <--- This ensures it triggers every time
  })

  return (
    <section className="py-12 bg-gradient-to-t from-orange-100 to-orange-400 px-4 sm:px-6 lg:px-8 " ref={ref}>

      <div className="w-full  lg:px-5 text-center">
        <motion.h2
          className="text-2xl font-semibold text-textheading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-36 md:w-40 rounded-full bg-black-500 text-white px-3 py-3 mx-auto text-xs md:text-sm flex items-center justify-center mb-16 font-bold">
            Key Features
          </span>
        </motion.h2>
        <motion.p
          className="font-medium font-glancyr text-2xl md:text-4xl text-textblack text-center md:36 lg:mx-44 mb-5"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Everything you need to run your real estate business
        </motion.p>
        <motion.p
          className="text-textblack text-center mb-10 md:36 lg:mx-44"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Powerful features designed specifically for real estate professionals
          to optimize workflow and increase productivity.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border rounded-lg p-6 text-left shadow-sm shadow-shadow flex flex-col justify-between h-full min-h-[200px]" // << added flex & min height
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
            >
              <div>
                <div className="p-2 bg-orange-200 rounded-xl flex items-center justify-center w-16 h-16 mb-14">
                  <div className="bg-gradient-to-t from-orange-400 to-orange-50 rounded-lg w-14 h-12 flex items-center justify-center">

                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl text-black-400 mb-1 md:mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base mb-4 text-black-300">
                  {feature.description}
                </p>
              </div>

              <Link
                href="/keyfeatures"
                className="mt-autofont-bold text-sm flex items-center gap-2 bg-buttonbg hover:bg-buttonhover text-buttontext px-4 py-2 rounded-full w-36 transition-colors"
              >
                  Learn More{' '}
                  <ArrowRight className="w-3 md:w-4 text-iconcolor" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
