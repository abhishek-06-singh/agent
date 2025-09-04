'use client'
import React, { useState } from 'react'
import PropertyFilters from './my-listing/PropertyFilters'
import PropertyTable from './my-listing/PropertyTable'
import PropertyFiltersSub from './Sub-Agent/PropertyFiltersSub'
import PropertyTableSub from './Sub-Agent/PropertyTableSub'
const ListingsTabs = () => {
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
            My Listings
          </button>
          <button
            onClick={() => setActiveTab('sub')}
            className={`ml-4 px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'sub'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            Sub-Agent Listings
          </button>
        </div>

        {/* Tabs Content */}
        <div className="mt-4">
          {activeTab === 'my' && (
            <div>
              <PropertyFilters />

              <PropertyTable />
            </div>
          )}

          {activeTab === 'sub' && (
            <div>
              <PropertyFiltersSub />

              <PropertyTableSub />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListingsTabs
