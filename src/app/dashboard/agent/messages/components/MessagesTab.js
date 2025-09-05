'use client'
import React, { useState } from 'react'
import ChatList from './ChatList'
import ChatWindow from './ChatWindow'
import SubAgentChatList from './SubAgentChatList'
import SubAgentChat from './SubAgentChat'
import { ConfigProvider } from 'antd'
import GroupDetailsSidebar from './GroupDetailsSidebar'

const conversationsData = [
  {
    name: 'Michael Chen',
    avatar: 'https://i.pravatar.cc/150?img=3',
    agent: 'Sub-Agent',
    extra: 'with John Smith(Lead)',
    isGroup: false,
    preview: "I'll send you the proposal by tomorrow...",
    time: '9:15 AM',
    messages: [
      {
        from: 'them',
        text: 'Hi I’m interested in the property at 456 Maple Ave. Can we schedule a viewing?',
        time: '9:15 AM',
      },
      {
        from: 'me',
        text: 'Absolutely! I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?',
        time: '9:16 AM',
      },
    ],
  },

  {
    name: '123 Oak Street',
    avatar: 'https://i.pravatar.cc/150?img=5',
    agent: 'Listing Agent',
    extra: '',
    isGroup: false,
    preview: "Perfect! I'll send the contract today",
    time: '9:15 AM',
    messages: [
      {
        from: 'them',
        text: 'Hi! I’m interested in the property at 456 Maple Ave. Can we schedule a viewing?',
        time: '9:15 AM',
      },
      {
        from: 'me',
        text: 'Absolutely! I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?',
        time: '9:16 AM',
      },
    ],
  },

  {
    name: 'DownTown Team',
    avatar: 'https://i.pravatar.cc/150?img=7',
    agent: 'Team Agent',
    extra: '',
    isGroup: true,
    preview: "Perfect! I'll send the contract today",
    time: '9:15 AM',
    messages: [
      {
        from: 'Michael Chen',
        role: 'Agent',
        avatar: 'https://i.pravatar.cc/150?img=3',
        text: 'Hi! I’m interested in the property at 456 Maple Ave. Can we schedule a viewing?',
        time: '9:15 AM',
      },
      {
        from: 'John Smith',
        role: 'Lead',
        avatar: 'https://i.pravatar.cc/150?img=4',
        text: 'Absolutely! I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?',
        time: '9:16 AM',
      },
      {
        from: 'John Williams',
        role: 'Sub-Agent',
        avatar: 'https://i.pravatar.cc/150?img=5',
        text: 'I have availability tomorrow at 2 PM or Thursday at 10 AM. Which works better for you?',
        time: '9:17 AM',
      },
    ],
  },
]

const MessagesTabs = () => {
  const [activeTab, setActiveTab] = useState('my')
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="relative">
      {showSidebar && (
        <div className="overflow-y-scroll fixed right-0 top-0 h-full w-80 bg-cardbg shadow-lg border-l border-bordercolor z-50 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Group Settings</h2>
            <button
              onClick={() => setShowSidebar(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          {/* Group Settings Content */}
          <div className="">
            <GroupDetailsSidebar />
          </div>
        </div>
      )}{' '}
      <div className="w-full  rounded-2xl  pt-8">
        {/* Tabs Header */}
        <div className="flex border-b border-bordercolor ">
          <button
            onClick={() => setActiveTab('my')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'my'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            My conversations
          </button>
          <button
            onClick={() => setActiveTab('sub')}
            className={`ml-4 px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'sub'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            Sub-Agent Conversations
          </button>
        </div>

        {/* Tabs Content */}
        <div className="">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#EEB887', // custom theme color
                borderRadius: 12,
              },
              components: {
                Steps: {
                  colorPrimary: '#EEB887',
                  colorText: '#000',
                  colorTextActive: '#EEB887',
                },
              },
            }}
          >
            {activeTab === 'my' && (
              <div className="flex h-screen">
                <ChatList
                  conversations={conversationsData}
                  onSelect={setSelectedConversation}
                  selectedConversation={selectedConversation}
                />
                <ChatWindow
                  conversation={selectedConversation}
                  onOpenGroupSettings={() => setShowSidebar(true)}
                />
              </div>
            )}

            {activeTab === 'sub' && (
              <div className="flex h-screen">
                <SubAgentChatList
                  conversations={conversationsData}
                  onSelect={setSelectedConversation}
                  selectedConversation={selectedConversation}
                />

                <SubAgentChat
                  conversation={selectedConversation}
                  onOpenGroupSettings={() => setShowSidebar(true)}
                />
              </div>
            )}
          </ConfigProvider>
        </div>
      </div>
    </div>
  )
}

export default MessagesTabs
