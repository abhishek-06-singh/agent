'use client'
import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Home, Users, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import small from '../../images/patternsmall.png'

const benefits = [
  {
    icon: <Home className="w-6 h-6 lg:w-8 lg:h-8 text-textblack" />,
    title: 'Property Management',
    description: 'Easily manage all your listings in one place.',
  },
  {
    icon: <Users className="w-6 h-6 lg:w-8 lg:h-8 text-textblack" />,
    title: 'Team Collaboration',
    description: 'Work with your team in real-time with shared access.',
  },
  {
    icon: <MessageSquare className="w-6 h-6 lg:w-8 lg:h-8 text-textblack" />,
    title: 'Client Communication',
    description: 'Built-in messaging system to talk with clients directly.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function WhoChoose() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  })

  useEffect(() => {
    if (inView) {
      controls.start((i) => cardVariants.visible(i))
    } else {
      controls.start('hidden')
    }
  }, [inView, controls])

  return (
    <section
      className="bg-backgroundColor py-16 px-4 sm:px-6 lg:px-8 mb-44"
      ref={ref}
    >
      <div className="w-full mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-textheading mb-10">
          Why Choose Alianza Black Dog?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              className="relative overflow-hidden rounded-xl p-6 h-56 w-full border border-orange-200/50 bg-gradient-to-br from-orange-100 to-orange-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
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
                <h3 className="font-semibold md:text-base lg:text-lg text-textblack mb-2">

                  {benefit.title}
                </h3>
                <p className="text-black text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
