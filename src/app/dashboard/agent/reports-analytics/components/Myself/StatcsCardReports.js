'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Importing appropriate icons (replace with your actual icons)
import listingsIcon from '../../../../components/icons/Lightmode_icons/teams/building.svg'
import activeIcon from '../../../../components/icons/Lightmode_icons/leads-light/black_clock.svg'
import leadsIcon from '../../../../components/icons/Lightmode_icons/stats_icons/clipboard-light.svg'
import dealsIcon from '../../../../components/icons/Lightmode_icons/stats_icons/verified-light.svg'

const statsData = [
  {
    id: 1,
    title: 'Total Listings',
    value: '128',
    icon: listingsIcon,
    change: '+12%',
    changeType: 'increase',
  },
  {
    id: 2,
    title: 'Active Listings',
    value: '89',
    icon: activeIcon,
    change: '+8%',
    changeType: 'increase',
  },
  {
    id: 3,
    title: 'Total Leads',
    value: '342',
    icon: leadsIcon,
    change: '-8%',
    changeType: 'decrease',
  },
  {
    id: 4,
    title: 'Closed Deals',
    value: '24',
    icon: dealsIcon,
    change: '+18%',
    changeType: 'increase',
  },
]

export default function StatsCards_Reports({ data = statsData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
      {data.map((stat, index) => {
        const isIncrease = stat.changeType === 'increase'
        const changeColor = isIncrease ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
        const changeArrow = isIncrease ? '↑' : '↓'

        return (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
            className="flex flex-col items-start p-4 bg-cardbg shadow-sm rounded-2xl border border-bordercolor hover:shadow-md transition-shadow"
          >
            <div className='flex items-start justify-between w-full'>
            
            <p className="text-xs md:text-sm text-textnormal">{stat.title}</p>
            <div className="p-2 bg-[#F5EBDD] rounded-lg ">
              <Image src={stat.icon} alt="" className="w-6 h-6" />
            </div>
            </div>
            <h2 className="text-lg font-bold text-textnormal">{stat.value}</h2>
            
            <div
              className={`mt-2 px-2 py-1 rounded text-xs font-medium ${changeColor}`}
            >
              {changeArrow} {stat.change} <span className="">vs last month</span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
