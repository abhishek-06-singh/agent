'use client'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Dashboard from '../../images/Dashboard1.png'
import Image from 'next/image'


const SeeItInAction = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false, // allow retrigger
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden') // reset when out of view
    }
  }, [controls, inView])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
      <h2 className="text-2xl sm:text-3xl font-bold font-glancyr text-textheading mb-2">
        See It In Action
      </h2>
      <p className="text-sm sm:text-base text-textnormal mb-10">
        Take a look at our intuitive dashboard and features
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full mx-auto">
      <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={controls}
           className="bg-gradient-to-b from-orange-100 to-orange-400 rounded-md h-auto flex items-center justify-center text-gray-700 shadow-sm"
        >
           <Image
              src={Dashboard}
              alt="dashboard"
              width={800}
              height={600}
              className="w-[90%] h-auto mt-6 md:mt-10 ml-[9%]"
            />
          
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={controls}
           className="bg-gradient-to-b from-orange-100 to-orange-400 rounded-md h-auto flex items-center justify-center text-gray-700 shadow-sm"
        >
           <Image
              src={Dashboard}
              alt="dashboard"
              width={800}
              height={600}
              className="w-[90%] h-auto mt-6 md:mt-10 ml-[9%]"
            />
          
        </motion.div>
      </div>
    </div>
  )
}

export default SeeItInAction
