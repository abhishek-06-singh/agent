'use client'
import React, { useState } from 'react'
import { Switch } from 'antd'

const notificationSettings = [
  {
    id: 1,
    label: 'Email Notifications',
    description: 'Get notified when you receive a new lead',
  },
  {
    id: 2,
    label: 'Weekly Summary',
    description: 'Weekly performance and activity summary',
  },
  {
    id: 3,
    label: 'In-App Notifications',
    description: '',
  },
  {
    id: 4,
    label: 'Lead Activity',
    description: 'Notifications about lead interactions',
  },
  {
    id: 5,
    label: 'Team Updates',
    description: 'Updates from your team members',
  },
  {
    id: 6,
    label: 'Real time chat updates',
    description: 'Updates from your chats',
  },
]

export default function NotificationPreferences() {
  const [toggles, setToggles] = useState(() =>
    notificationSettings.reduce((acc, cur) => {
      acc[cur.id] = true
      return acc
    }, {})
  )

  const handleToggle = (id) => {
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor p-4 shadow-md  w-full">
      <h2 className="text-base font-semibold text-textheading mb-6">Notification Preferences</h2>

      <div className="flex flex-col gap-6">
        {notificationSettings.map(({ id, label, description }) => (
          <div
            key={id}
            className="flex flex-col sm:flex-row sm:items-center justify-between"
          >
            <div className="text-sm sm:max-w-[70%]">
              <div className="font-medium text-primary">{label}</div>
              {description && (
                <div className="text-xs text-subtext mt-0.5">{description}</div>
              )}
            </div>
            <Switch
              checked={toggles[id]}
              onChange={() => handleToggle(id)}
              className="mt-2 sm:mt-0"
              size="small"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
