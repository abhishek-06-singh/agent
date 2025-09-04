'use client'
import React, { useState } from 'react'
import AllComissionsFilter from './AllComissionsFilter'
import AllComissionsTable from './AllComissionsTable'
import ReportsFilter from './ReportsFilter'
import ReportsTable from './ReportsTable'

const CommissionsTabs = () => {
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
            My Commissions
          </button>
          <button
            onClick={() => setActiveTab('sub')}
            className={`ml-4 px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'sub'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            Reports
          </button>
        </div>

        {/* Tabs Content */}
        <div className="mt-4">            
          {activeTab === 'my' && (
            <div>
                <AllComissionsFilter/>
                <AllComissionsTable />
            
            </div>
          )}

          {activeTab === 'sub' && (
            <div>
             <ReportsFilter/>
             <ReportsTable/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CommissionsTabs
