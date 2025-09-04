'use client'

import { motion } from 'framer-motion'
import { DollarSign, Lock, Unlock, Users } from 'lucide-react'

const statsData = [
  {
    id: 1,
    title: 'Properties Listed',
    value: '24',
    icon: <Users className="w-6 h-6 text-black-400" />,
  },
  {
    id: 2,
    title: 'Properties Sold',
    value: '12',
    icon: <Unlock className="w-6 h-6 text-black-400" />,
  },
  {
    id: 3,
    title: 'Leads Converted',
    value: '3',
    icon: <Lock className="w-6 h-6 text-black-400" />,
  },
  {
    id: 4,
    title: 'Active Leads',
    value: '156',
    icon: <DollarSign className="w-6 h-6 text-black-400" />,
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
          className="flex flex-col items-start p-4 bg-white shadow-sm rounded-2xl border hover:shadow-lg transition-shadow"
        >
          <div className="p-2 bg-[#FAE9DA] rounded-lg mb-3 ">{stat.icon}</div>
          <p className="text-xs md:text-sm lg:textsm text-textnormal">
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
