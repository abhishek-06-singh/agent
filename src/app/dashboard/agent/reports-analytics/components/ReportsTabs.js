'use client'
import React, { useState } from 'react'
import MyReportsFilters from './Myself/MyReportsFilters'
import SubAgentsFilters from './SubAgents/SubAgentsFilters'
import StatsCard_Reports from './Myself/StatcsCardReports'
import DashboardCharts from './Myself/DashboardCharts'
import SalesFunnel from './Myself/SalesFunnel'
import ListingDetailsTable from './Myself/ListingDetailsTable'
import SubAgentLeaderBoard from './SubAgents/SubAgentLeadershipBoard'
import SubAgentsDashboardCharts from './SubAgents/SubAgentsDashboardCharts'
import SubAgentPerformanceOverview from './SubAgents/SubAgentPerformanceOverview'


const ReportsTabs = () => {
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
            Myself
          </button>
          <button
            onClick={() => setActiveTab('sub')}
            className={`ml-4 px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'sub'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            Sub-Agents
          </button>
        </div>

        {/* Tabs Content */}
        <div className="mt-4">
          {activeTab === 'my' && (
            <div className='space-y-6'>
             <MyReportsFilters />
             <StatsCard_Reports />
             <DashboardCharts />
             <SalesFunnel />
             <ListingDetailsTable/>

           
            </div>
          )}

          {activeTab === 'sub' && (
            <div className='space-y-6'>
              <SubAgentsFilters />
              <SubAgentPerformanceOverview />
              <SubAgentsDashboardCharts />
              <SubAgentLeaderBoard />
              
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReportsTabs
