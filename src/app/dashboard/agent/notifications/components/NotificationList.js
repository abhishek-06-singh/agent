'use client'

import { Library } from 'lucide-react'
import React from 'react'
import userplus from '../icons/userplus.svg'
import warning from '../icons/warning.svg'
import pdf from '../icons/pdf.svg'
import message from '../icons/message.svg'
import Image from 'next/image'

const notifications = [
  {
    id: 1,
    title: 'New Lead Assigned',
    subtitle: {
      property: 'Maple Street Condo',
      assignedTo: 'John Doe',
    },
    time: '5 mins ago',
    icon: <Image src={userplus} alt="userplus"  />,
  },
  {
    id: 2,
    title: 'Deal Updated – Maple Street Purchase',
    subtitle: {
      property: 'Maple Street Condo',
      status: 'Pending',
    },
    time: '5 mins ago',
    icon:<Image src={pdf} alt="pdf" />,
  },
  {
    id: 3,
    title: 'New Message from Emily Johnson',
    subtitle: {
      message: 'Hey, did you check the documents?',
    },
    time: '5 mins ago',
    icon: <Image src={message} alt="message" />,
  },
  {
    id: 4,
    title: 'Deal Reminder – Oak Avenue Sale',
    subtitle: {
      property: 'Maple Street Condo',
      status: 'Pending',
      days: 4,
    },
    time: '5 mins ago',
    icon: <Image src={warning} alt="warning" />,
  },
]

export default function NotificationList() {
  return (
    <div className="p-4 w-full space-y-4">
      <h3 className="font-semibold text-lg text-textheading mb-4">Today</h3>

      {notifications.map((notif) => (
        <div
          key={notif.id}
          className="flex gap-4 p-4 bg-cardbg rounded-lg shadow-md border border-bordercolor items-center"
        >
          <div className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-100 z-0">
          {notif.icon}
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-textheading">{notif.title}</span>

            {/* Uniform rendering of structured subtitle */}
            <span className="text-textnormal text-sm">
              {notif.subtitle.property && (
                <>
                  Property: <span className="font-semibold mx-3">{notif.subtitle.property}</span>{' '}
                </>
              )}
              {notif.subtitle.assignedTo && (
                <>
                  Assigned To: <span className="font-semibold">{notif.subtitle.assignedTo}</span>{' '}
                </>
              )}
              {notif.subtitle.status && (
                <>
                  Status:{' '}
                  <span className=" border border-status-pending-in-review-500 text-status-pending-in-review-500 text-xs px-2 py-0.5 rounded-full">
                    {notif.subtitle.status}
                  </span>{' '}
                </>
              )}
              {notif.subtitle.days && <>For {notif.subtitle.days} days</>}
              {notif.subtitle.message && <>"{notif.subtitle.message}"</>}
            </span>

            <span className="text-subtext text-xs mt-1">{notif.time}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
