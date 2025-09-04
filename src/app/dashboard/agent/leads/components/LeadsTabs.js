'use client'
import React, { useState } from 'react'
import LeadsFilter from '../components/MyLeads/LeadsFilter'
import LeadsTable from '../components/MyLeads/LeadsTable'
import SubAgentsLeadsFilters from '../components/Sub-agentLeads/SubAgentsleadsFilters'
import SubAgentLeadsTable from './Sub-agentLeads/SubAgentLeadsTable'


const LeadsTabs = () => {
  const [activeTab, setActiveTab] = useState('my')

  return (
    <div>
      {' '}
      <div className="w-full  rounded-2xl  p-8">
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
        <div className="mt-4">
          {activeTab === 'my' && (
            <div>
             <LeadsFilter />

             <LeadsTable />
            </div>
          )}

          {activeTab === 'sub' && (
            <div>
              <SubAgentsLeadsFilters />

              <SubAgentLeadsTable />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LeadsTabs
