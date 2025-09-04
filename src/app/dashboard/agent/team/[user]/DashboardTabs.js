'use client'
import React, { useState } from 'react'
import PropertiesTab from './components/PropertiesTab'
import LeadsTab from './components/LeadsTab'
import MessagesTab from './components/MessagesTab'
import CommissionsTab from './components/CommissionsTab'
// Example icons (replace with your own if needed)
import { Home, Users, MessageCircle, DollarSign } from 'lucide-react'

// Dummy components for each tab

const DashboardTabs = ({ decodedUser }) => {
  const [activeTab, setActiveTab] = useState('properties')

  const tabs = [
    {
      id: 'properties',
      label: 'Properties',
      icon: <Home size={16} />,
      component: <PropertiesTab decodedUser={decodedUser} />,
    },
    {
      id: 'leads',
      label: 'Leads',
      icon: <Users size={16} />,
      component: <LeadsTab />,
    },
    {
      id: 'messages',
      label: 'Messages',
      icon: <MessageCircle size={16} />,
      component: <MessagesTab />,
    },
    {
      id: 'commissions',
      label: 'Commissions',
      icon: <DollarSign size={16} />,
      component: <CommissionsTab />,
    },
  ]

  return (
    <div className="w-full rounded-2xl p-6 bg-white shadow">
      {/* Tabs Header */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-t-lg transition-all
              ${
                activeTab === tab.id
                  ? 'text-textheading border-b-2 border-textnormal'
                  : 'text-textnormal hover:text-textheading'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  )
}

export default DashboardTabs
