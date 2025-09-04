'use client'

import { useState } from 'react'
import { Input, Dropdown, Menu } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

/* ---------- Invite Tabs ---------- */
const InviteTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-3 mt-6 w-full">
      <button
        onClick={() => setActiveTab('subAgent')}
        className={`px-4 py-3 rounded-xl border w-1/2 flex items-center gap-4 h-20 ${
          activeTab === 'subAgent'
            ? 'bg-orange-100 border-orange-300 text-textheading font-medium'
            : 'bg-background text-textnormal border-gray-300'
        }`}
      >
        {activeTab === 'subAgent' && (
          <div className="bg-textheading w-8 h-8 rounded-full border-background"></div>
        )}
        Invite Sub-Agent
      </button>

      <button
        onClick={() => setActiveTab('external')}
        className={`px-4 py-3 rounded-xl w-1/2 h-20 border flex items-center gap-4 ${
          activeTab === 'external'
            ? 'bg-orange-100 border-orange-300 text-textheading font-medium'
            : 'bg-background text-textnormal border-gray-300'
        }`}
      >
        {activeTab === 'external' && (
          <div className="bg-textheading w-8 h-8 rounded-full border-background"></div>
        )}
        Invite External Collaborator
      </button>
    </div>
  )
}

export default InviteTabs
