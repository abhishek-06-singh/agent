'use client'
import React, { useState } from 'react'
import DealsFilter from './DealsFilter'
import DealsTable from './DealsTable'
import SubAgentDealsFilter from './SubAgentDealsFilter'
import SubagentDealsTable from './SubagentDealsTable'


const DealsTabs = () => {
  const [activeTab, setActiveTab] = useState('my')

  return (
    <div>
      {' '}
      <div className="w-full  rounded-2xl  ">
        {/* Tabs Header */}
        <div className="flex border-b border-bordercolor  mb-8">

          <button
            onClick={() => setActiveTab('my')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'my'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            My Leads
          </button>
          <button
            onClick={() => setActiveTab('sub')}
            className={`ml-4 px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'sub'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            Sub-Agent Leads
          </button>
        </div>

        {/* Tabs Content */}
        <div className="mt-4 px-10">
          {activeTab === 'my' && (
            <div>
                <DealsFilter/>
                <DealsTable/>
             
            </div>
          )}

          {activeTab === 'sub' && (
            <div>
                <SubAgentDealsFilter/>
                <SubagentDealsTable/>
              
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default DealsTabs
