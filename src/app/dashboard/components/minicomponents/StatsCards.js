'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Users from '../icons/Lightmode_icons/stats_icons/clipboard-light.svg'
import lockopen from '../icons/Lightmode_icons/stats_icons/lockopen-light.svg'
import verified from '../icons/Lightmode_icons/stats_icons/verified-light.svg'
import dollar from '../icons/Lightmode_icons/stats_icons/Dollar-light.svg'

const statsData = [
  {
    id: 1,
    title: 'Total Leads (All-Time)',
    value: '152',
    icon: <Image src={Users} className="w-6 h-6 text-black-400" />,

  },
  {
    id: 2,
    title: 'Open Deals',
    value: '12',
    icon:<Image src={lockopen} className="w-6 h-6 text-black-400" />,
  },
  {
    id: 3,
    title: 'Closed Deals',
    value: '35',
    icon: <Image src={verified} className="w-6 h-6 text-black-400" />, 
  },
  {
    id: 4,
    title: 'Commission Earnings',
    value: '$25,400',
    icon: <Image src={dollar} className="w-6 h-6 text-black-400" />,
  },
]

export default function StatsCards({ data = statsData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 pr-10">
      {data.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
          className="flex flex-col items-start p-4 bg-cardbg shadow-sm rounded-2xl border border-bordercolor hover:shadow-lg transition-shadow"
        >
          <div className="p-2 bg-orange-100 rounded-lg mb-3 ">{stat.icon}</div>
          <p className="text-xs md:text-sm lg:text-sm text-textnormal  ">
            {stat.title}
          </p>
          <h2 className="text-sm md:text-xl lg:text-xl font-bold text-textnormal">
            {stat.value}
          </h2>
        </motion.div>
      ))}
    </div>
  )
}
