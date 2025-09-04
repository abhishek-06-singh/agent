'use client'
import React, { useState } from 'react'
import AllNotifications from './AllNotifications'

const NotificationsTabs = () => {
  const [activeTab, setActiveTab] = useState('All')
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <div className='relative'>
       
      {' '}
      <div className="w-full  rounded-2xl  pt-8">
        {/* Tabs Header */}
        <div className="flex border-b border-bordercolor ">

          <button
            onClick={() => setActiveTab('All')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'All'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
         All
          </button>
          <button
            onClick={() => setActiveTab('Leads')}
            className={`ml-4 px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'Leads'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
           Leads
          </button>
          <button
            onClick={() => setActiveTab('Deals')}
            className={`ml-4 px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'Deals'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
           Deals
          </button>
          <button
            onClick={() => setActiveTab('Messages')}
            className={`ml-4 px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'Messages'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
           Messages
          </button>
        </div>

        {/* Tabs Content */}
        <div className="">
          {activeTab === 'All' && (
            <div className="">
                <AllNotifications/>
             
            </div>
          )}

          {activeTab === 'Leads' && (
            <div className="">
                 <AllNotifications/>
            
            </div>
          )}
          {activeTab === 'Deals' && (
            <div className="">
             <AllNotifications/>
            </div>
          )}
          {activeTab === 'Messages' && (
            <div className="">
                 <AllNotifications/>
            
            </div>
          )}
         
        </div>
      </div>
    </div>
  )
}

export default NotificationsTabs
