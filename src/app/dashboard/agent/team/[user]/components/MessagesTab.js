'use client'
import { useState } from 'react'

const messages = [
  {
    id: 1,
    name: 'Sarah Johnson',
    subject: 'Property Inquiry',
    message: "Hi Sarah, I'm interested in the downtown condo listing...",
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    time: '2 hours ago',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    subject: 'Property Inquiry',
    message: "Hi Sarah, I'm interested in the downtown condo listing...",
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    time: '2 hours ago',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    subject: 'Property Inquiry',
    message: "Hi Sarah, I'm interested in the downtown condo listing...",
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    time: '2 hours ago',
  },
]

export default function MessagesTab() {
  return (
    <div className="mt-8">
      <h2 className="text-lg text-textheading font-semibold mb-4">
        Recent Communications
      </h2>

      <div className="rounded-xl border border-gray-200 bg-background shadow divide-y">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="flex items-center justify-between p-4 hover:bg-gray-50"
          >
            {/* Left side: avatar + message preview */}
            <div className="flex items-center gap-3">
              <img
                src={msg.avatar}
                alt={msg.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-textheading">
                  {msg.name} - {msg.subject}
                </div>
                <div className="text-sm text-textnormal truncate w-64">
                  {msg.message}
                </div>
              </div>
            </div>

            {/* Right side: time + button */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-textnormal">{msg.time}</span>
              <button className="bg-textheading   text-background px-7 py-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform">
                Open Conversation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
