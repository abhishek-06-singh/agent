'use client'
import React, { useState } from 'react'
import SubagentFilters from './Sub-Agents/SubagentFilters'
import SubagentTable from './Sub-Agents/SubagentTable'
import ExternalCollaboratorsFilters from './ExternalCollaborators/ExternalCollaboratorsFilters'
import ExternalCollaboratorsTable from './ExternalCollaborators/ExternalCollaboratorsTable'
// import PropertyFilters from './my-listing/PropertyFilters'
// import PropertyTable from './my-listing/PropertyTable'
// import PropertyFiltersSub from './Sub-Agent/PropertyFiltersSub'
// import PropertyTableSub from './Sub-Agent/PropertyTableSub'
const ListingsTabs = () => {
  const [activeTab, setActiveTab] = useState('my')

  return (
    <div>
      {' '}
      <div className="w-full  rounded-2xl  p-6">
        {/* Tabs Header */}
        <div className="flex mb-6 border-b border-bordercolor">
          <button
            onClick={() => setActiveTab('my')}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'my'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            Sub-Agents
          </button>
          <button
            onClick={() => setActiveTab('sub')}
            className={`ml-4 px-4 py-2 text-sm font-medium rounded-t-lg ${
              activeTab === 'sub'
                ? 'text-buttonbg border-b-2 border-buttonbg'
                : 'text-textnormal hover:text-textnormal '
            }`}
          >
            External Collaborators
          </button>
        </div>

        {/* Tabs Content */}
        <div className="mt-4">
          {activeTab === 'my' && (
            <div>
              <SubagentFilters />
              <SubagentTable />
              {/* <PropertyTable /> */}
            </div>
          )}

          {activeTab === 'sub' && (
            <div>
              <ExternalCollaboratorsFilters />

              <ExternalCollaboratorsTable />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListingsTabs
