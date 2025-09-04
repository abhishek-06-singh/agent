'use client'

import { useState } from 'react'
import { Input, Button, Dropdown, Menu } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import InviteTabs from './InviteTabs'
import InviteForm from './InviteForm'
import InvitationsList from './InvitationsList'
const InviteMember = () => {
  const [activeTab, setActiveTab] = useState('subAgent')

  const invitations = [
    { email: 'john.doe@email.com', status: 'Pending', date: 'Jan 15, 2025' },
    {
      email: 'sarah.smith@email.com',
      status: 'Accepted',
      date: 'Jan 15, 2025',
    },
    { email: 'mike.wilson@email.com', status: 'Expired', date: 'Jan 15, 2025' },
  ]

  return (
    <div className="p-6 bg-background rounded-2xl">
      {/* Heading */}
      <h2 className="text-xl font-semibold text-textheading">
        Invite New Member
      </h2>
      <p className="text-sm text-textnormal mt-1">
        Manage your sub-agents, external collaborators & track their activity
      </p>

      {/* Tabs */}
      <InviteTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Invite Form */}
      <InviteForm activeTab={activeTab} />

      {/* Invitations List */}
      <InvitationsList invitations={invitations} activeTab={activeTab} />
    </div>
  )
}

export default InviteMember
