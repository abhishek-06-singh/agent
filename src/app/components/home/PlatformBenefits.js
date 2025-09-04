'use client'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Home, Users, MessageSquare } from 'lucide-react'
import small from '../../images/patternsmall.png'
import Image from 'next/image'

const benefits = [
  {
    icon: <Home className="w-6 h-6 lg:w-8 lg:h-8 text-black" />,
    title: 'List Properties Easily',
    description: 'Create and manage property listings with intuitive tools',
  },
  {
    icon: (
      <Users
        className="w-6 h-6 lg:w-8 lg:h-8 text-black"
        fill="currentColor"
      />
    ),
    title: 'Manage Agents & Commissions',
    description: 'Track agent performance and automate commission calculations',
  },
  {
    icon: <MessageSquare className="w-6 h-6 lg:w-8 lg:h-8 text-black" />,

    title: 'Integrated Chat & Signatures',
    description: 'Communicate with clients and get documents signed digitally',
  },
]

export default function PlatformBenefits() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [inView, controls])

  return (
    <section className="py-8 md:py-20" ref={ref}>

      <div className="w-full px-0">
        <h2 className="w-36 md:w-40 rounded-full px-3 py-3 mx-auto text-xs md:text-sm bg-primary  text-background flex items-center justify-center mb-16 font-bold">


          Platform Benefits
        </h2>
        <h1 className="font-medium font-glancyr text-2xl md:text-4xl text-subheading text-center mb-5">
          Struggling to Manage Your Leads and Customers?
        </h1>
        <p className="text-textnormal text-center mb-10">
          Our CRM helps you eliminate manual tasks, reduce lead leakage, and
          deliver exceptional customer experiences
        </p>
      </div>

      <div className="w-full px-4 py-10 md:py-14 lg:py-14">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full  lg:px-10"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
            hidden: {},
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-orange-300 rounded-xl p-2 md:p-6 hover:shadow-lg hover:shadow-shadow transition-all duration-300 hover:-translate-y-1 border border-orange-100"

              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={small}
                  alt="Grid Background"
                  fill
                  className="object-cover pointer-events-none"
                />
              </div>

              {/* Foreground content */}
              <div className="relative z-10">
                <div className="p-2 bg-orange-200 rounded-xl flex items-center justify-center w-16 h-16 mb-10 md:mb-14">

                  <div className="bg-gradient-to-t from-orange-500 to-orange-50 rounded-lg w-14 h-12 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>

                <h3 className="font-semibold text-sm  md:text-lg lg:text-xl whitespace-nowrap text-black mb-3 leading-relaxed">
                  {benefit.title}
                </h3>

                <p className="text-black text-xs sm:text-sm md:text-lg mb-3 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
