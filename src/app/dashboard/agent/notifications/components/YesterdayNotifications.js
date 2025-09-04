'use client'
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
    icon: <Image src={userplus} alt="userplus" width={20} height={20} />,
  },
  {
    id: 2,
    title: 'Deal Updated – Maple Street Purchase',
    subtitle: {
      property: 'Maple Street Condo',
      status: 'Pending',
    },
    time: '5 mins ago',
    icon: <Image src={pdf} alt="pdf" width={20} height={20} />,
  },
  {
    id: 3,
    title: 'New Message from Emily Johnson',
    subtitle: {
      message: 'Hey, did you check the documents?',
    },
    time: '5 mins ago',
    icon: <Image src={message} alt="message" width={20} height={20} />,
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
    icon: <Image src={warning} alt="warning" width={20} height={20} />,
  },
]

export default function YesterdayNotifications() {
  return (
    <div className="px-4 pb-4 w-full space-y-4">
      <h3 className="font-semibold text-textheading text-lg mb-4">Yesterday</h3>
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className="flex gap-4 items-start bg-cardbg p-4 rounded-lg shadow-md border border-bordercolor"
        >
          <div className="w-11 h-11 flex items-center justify-center rounded-full bg-orange-100">
            {notif.icon}
          </div>

          <div className="flex flex-col gap-1 text-textnormal">
            <span className="font-semibold text-base text-textheading">{notif.title}</span>

            <div className="text-sm text-textnormal">
              {notif.subtitle.property && (
                <>
                  Property: <span className="font-semibold mx-2">{notif.subtitle.property}</span>{' '}
                </>
              )}
              {notif.subtitle.assignedTo && (
                < >
                  Assigned To: <span className=" font-semibold">{notif.subtitle.assignedTo}</span>{' '}
                </>
              )}
              {notif.subtitle.status && (
                <>
                  Status:{' '}
                  <span className="border border-status-pending-in-review-500 text-status-pending-in-review-500 text-xs px-2 py-0.5 rounded-full">
                    {notif.subtitle.status}
                  </span>{' '}
                </>
              )}
              {notif.subtitle.days && <>For {notif.subtitle.days} days</>}
              {notif.subtitle.message && <span>"{notif.subtitle.message}"</span>}
            </div>

            <span className="text-xs text-subtext mt-1">{notif.time}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
