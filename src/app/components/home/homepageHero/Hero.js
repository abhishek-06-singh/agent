'use client'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import dashboard from '../../../images/Dashboard.png'
import Link from 'next/link'

export default function Hero() {
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
    <section
      className="relative  bg-background overflow-hidden "
      ref={ref}
    >
      <div className="relative  max-w-7xl mx-auto px-0 sm:px-0 md:px-8">
        <div className=" z-40 pt-10 sm:pt-10 md:pt-14 lg:pt-24 xl:pt-32 pb-4 sm:pb-6 md:pb-20 lg:pb-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Heading */}
            <motion.h1
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-xl sm:text-5xl md:text-6xl text-textheading font-glancyr leading-tight tracking-tight"
              style={{ lineHeight: '1.1' }}
            >
              Manage Real Estate Smarter
            </motion.h1>

            {/* Description */}
            <motion.p
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="mt-2 md:mt-4 lg:mt-6 text-sm sm:text-md md:text-lg text-textnormal leading-relaxed max-w-full lg:max-w-3xl mx-auto"
              style={{ lineHeight: '1.6' }}
            >
              Streamline property listings, manage agents, track commissions,
              and close deals faster with our all-in-one real estate platform.
            </motion.p>

            {/* Button */}
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="mt-8"
            >
              <Link href={'/agentsignup'}
                className="px-8 py-3 bg-[#EEB887] border border-[#EEB887] rounded-md shadow-sm hover:bg-[#e6a66e] hover:border-[#e6a66e] text-primary text-base transition-all duration-200 ease-in-out min-w-[180px]"
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-1px)'
                  e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                

                Start Your Adventure
                </Link>

            
            </motion.div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.9, delay: 0.6, ease: 'easeOut' }}
          className="relative w-full mx-auto "
        >
          {' '}
          <div
            className="w-full absolute inset-0 bg-gradient-to-t from-orange-500 to-orange-100"

            style={{
              filter: 'blur(100px)',
              pointerEvents: 'none',
            }}
          />
          
          <div className=" z-10  rounded-2xl  transition-all  lg:mx-0 overflow-hidden relative top-10">
            <div className="rounded-t-3xl bg-orange-200 w-full px-4 pt-2  sm:pt-3 md:pt-5 lg:pt-5 shadow-sm mx-auto overflow-hidden   z-10 flex justify-center">
              <Image
                src={dashboard}
                alt="Dashboard Preview"
                className="w-full h-auto "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
