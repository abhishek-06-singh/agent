'use client'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Shield, Lock, FilePen } from 'lucide-react'
import Image from 'next/image'
import small from '../../images/patternsmall.png' // pattern background

const benefits = [
  {
    icon: <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-textblack" />,
    title: 'Secure Login',
    description: 'Multi-factor authentication and encrypted data',
  },
  {
    icon: <Lock className="w-6 h-6 lg:w-8 lg:h-8 text-textblack" />,
    title: 'GDPR Compliant',
    description: 'Full compliance with data protection regulations',
  },
  {
    icon: <FilePen className="w-6 h-6 lg:w-8 lg:h-8 text-textblack" />,
    title: 'Zapsign Integration',
    description: 'Secure digital signature capabilities',
  },
]

export default function Security() {
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
    <section className="py-5" ref={ref}>
      <div className="max-w-full px-10 py-10 md:py-14 lg:py-14">
        <h2 className="text-2xl md:text-3xl text-textheading text-center mb-10 font-bold">
          Security & Privacy
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto place-items-center"
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {},
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl p-6 hover:shadow-lg transition-all h-56 w-full  duration-300 hover:-translate-y-1 border border-orange-200/50 bg-gradient-to-br from-orange-100 to-orange-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Pattern Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={small}
                  alt="Pattern Background"
                  fill
                  className="object-cover pointer-events-none"
                />
              </div>

              {/* Foreground */}
              <div className="relative z-10 flex flex-col items-start">
                <div className="p-2 bg-orange-200 rounded-xl flex items-start justify-start w-16 h-16 mb-6">
                  <div className="bg-gradient-to-t from-orange-400 to-orange-50 rounded-lg w-14 h-12 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-textblack mb-2">

                  {benefit.title}
                </h3>
                <p className="text-textblack text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
