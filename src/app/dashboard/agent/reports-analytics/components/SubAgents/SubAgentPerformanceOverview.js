'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'

const agentsPerPage = 6

// Mock Data
const subAgents = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  name: 'Sarah Johnson',
  role: 'Sub-Agent',
  avatar: `https://randomuser.me/api/portraits/women/${i + 10}.jpg`, // Random avatar
  totalListings: 24,
  activeListings: 24,
  totalLeads: 156,
  closedDeals: 16,
  avgDaysToClose: 28,
}))


const SubAgentPerformanceOverview = () => {
  const [currentPage, setCurrentPage] = useState(1)
   const pageSize = 6
   const totalResults = subAgents.length
   const totalPages = Math.ceil(totalResults / pageSize)
 
   const start = (currentPage - 1) * pageSize
   const end = start + pageSize
   const currentAgents = subAgents.slice(start, end)

  return (
    <div className="w-full border border-bordercolor rounded-xl shadow-md p-4">
      <h2 className="text-lg text-textheading font-semibold mb-4">Sub-Agent Performance Overview</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {currentAgents.map(agent => (
          <div
            key={agent.id}
            className="bg-cardbg rounded-lg border border-bordercolor shadow-md p-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <img
                src={agent.avatar}
                alt={agent.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <div className="text-sm text-textnormal font-semibold">{agent.name}</div>
                <div className="text-xs text-subtext">{agent.role}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-2 text-sm ">
              <div>
                <div className='text-textnormal mb-1'>Total Listings</div>
                <div className="font-semibold text-primary mb-1">{agent.totalListings}</div>
              </div>
              <div>
                <div className='text-textnormal mb-1'>Active Listings</div>
                <div className="font-semibold text-primary mb-1">{agent.activeListings}</div>   
              </div>
              <div>
                <div className='text-textnormal mb-1'>Total Leads</div>
                <div className="font-semibold text-primary mb-1">{agent.totalLeads}</div>
              </div>
              <div>
                <div className='text-textnormal mb-1'>Closed Deals</div>
                <div className="font-semibold text-primary mb-1">{agent.closedDeals}</div>      
              </div>
              <div className="col-span-2">
                <div className='text-textnormal mb-1'>Avg. Days to Close</div>   
                <div className="font-semibold text-primary mb-1">{agent.avgDaysToClose} Days</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
  <div className="flex flex-col sm:flex-row items-center justify-between my-4 text-sm text-textnormal gap-4 sm:gap-0">
        <p>
          Showing {start + 1} to {Math.min(end, totalResults)} of {totalResults}{' '}
          results
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 border border-bordercolor rounded-lg disabled:opacity-50 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg border border-bordercolor ${
                currentPage === page
                  ? 'bg-black-500 text-white'
                  : 'hover:bg-boxbg text-textnormal'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 border border-textnormal rounded-lg disabled:opacity-50 flex items-center gap-1"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubAgentPerformanceOverview
