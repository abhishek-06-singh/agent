'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import eye from '../icons/Lightmode_icons/project_activity/eye-light.svg'
import message from '../icons/Lightmode_icons/project_activity/message-light.svg'



export default function PropertyActivityOverview() {
  const stats = [
    {
      id: 1,
      title: 'Total Property Views',
      value: '1,200',
      icon: <Image src={eye} className="w-6 h-6 text-black-400" />,
    },
    {
      id: 2,
      title: 'Total Inquiries',
      value: '250',
      icon: <Image src={message} className="w-6 h-6 text-black-400" />,

    },
  ]

  return (
    <div className="pr-10 mt-2 bg-background rounded-2xl ">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-3 text-subheading">
        Property Activity Overview
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3, type: 'spring' }}
            className="flex flex-col items-start p-4 bg-cardbg shadow-sm rounded-2xl border border-bordercolor hover:shadow-lg transition-shadow"

          >
            <div className="p-2 bg-[#FAE9DA] rounded-lg mb-4">{stat.icon}</div>
            <p className="text-xs md:text-sm lg:text-sm text-textnormal">
              {stat.title}
            </p>
            <h3 className="text-sm md:text-xl lg:text-xl font-bold text-textnormal">
              {stat.value}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
