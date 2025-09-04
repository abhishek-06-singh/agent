'use client'
import React from 'react'
import {
  Building2,
  CreditCard,
  UserPlus,
  Settings,
  Play,
} from 'lucide-react' 
import building from '../../../components/icons/Lightmode_icons/teams/building.svg'
import credit from '../../../components/icons/Lightmode_icons/help/credit.svg'
import userplus from '../../../components/icons/Lightmode_icons/help/userplus.svg'
import settings from '../../../components/icons/Lightmode_icons/help/setting.svg'
import building_dark from '../../../components/icons/Darkmode_icons/help_dark/building_dark.svg'
import credit_dark from '../../../components/icons/Darkmode_icons/help_dark/credit_dark.svg'
import userplus_dark from '../../../components/icons/Darkmode_icons/help_dark/userplus_dark.svg'
import settings_dark from '../../../components/icons/Darkmode_icons/help_dark/setting_dark.svg'

import Image from 'next/image'

const faqItems = [
  {
    icon: <Play className="w-5 h-5 text-textnormal fill-current" />,
    title: 'Getting Started',
    description: 'Learn the basics and set up your account.',
  },
  {
    icon: <>
      <Image src={building} className='block dark:hidden' alt="building"/>
      <Image src={building_dark} className='hidden dark:block' alt="building"/>
    </>,
    title: 'Listing Properties',
    description: 'Add, edit, and manage your property listings.',
  },
  {
    icon: <Play className="w-5 h-5 text-textnormal fill-current" />,
    title: 'Managing Leads & CRM',
    description: 'Track and nurture your leads effectively.',
  },
  {
    icon: <>
      <Image src={credit} className='block dark:hidden' alt="credit"/>
      <Image src={credit_dark} className='hidden dark:block' alt="credit"/>
    </>,
    title: 'Payments & Billing',
    description: 'Understand billing, subscriptions, and payments.',
  },
  {
    icon: <>
      <Image src={userplus} className='block dark:hidden' alt="userplus"/>
      <Image src={userplus_dark} className='hidden dark:block' alt="userplus"/>
    </>,
    title: 'Inviting Sub-agents',
    description: 'Add and manage your team members.',
  },
  {
    icon: <>
      <Image src={settings} className='block dark:hidden' alt="settings"/>
      <Image src={settings_dark} className='hidden dark:block' alt="settings"/>
    </>,
    title: 'Account & Profile Settings',
    description: 'Customize your profile and account preferences.',
  },
]

export default function DocumentationFaqs() {
  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor p-4 shadow-md w-full">
      <h2 className="text-base font-semibold text-textnormal mb-6">Documentation & FAQs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-bordercolor rounded-lg p-4 bg-cardbg shadow hover:shadow-shadow transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-2">
              {item.icon}
              <h3 className="text-sm font-semibold text-textnormal">{item.title}</h3>
            </div>
            <p className="text-sm text-subtext">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
