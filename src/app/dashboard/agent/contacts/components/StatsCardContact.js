'use client'

import { motion } from 'framer-motion'
import { Users, CalendarCheck, UserPlus, Tag } from 'lucide-react' // using lucide-react icons

const statsData = [
  {
    id: 1,
    title: 'Total Contacts',
    value: '47',
    icon: <Users className="w-6 h-6 text-black" />,
  },
  {
    id: 2,
    title: 'Follow-ups Scheduled',
    value: '30',
    icon: <CalendarCheck className="w-6 h-6 text-black" />,
  },
  {
    id: 3,
    title: 'Recently Added',
    value: '10',
    icon: <UserPlus className="w-6 h-6 text-black" />,
  },
  {
    id: 4,
    title: 'Tagged Contacts',
    value: '7',
    icon: <Tag className="w-6 h-6 text-black" />,
  },
]

export default function StatsCardContact({ data = statsData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 mb-8">
      {data.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
          className="flex flex-col items-start p-4 bg-cardbg shadow-sm rounded-2xl border border-bordercolor hover:shadow-lg transition-shadow"
        >
          <div className="p-2 bg-[#FAE9DA] rounded-lg mb-3 ">{stat.icon}</div>
          <p className="text-xs md:text-sm lg:text-sm  text-textnormal">
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
