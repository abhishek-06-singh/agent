'use client'
import React from 'react'
import Navbar from "../../../components/minicomponents/Navbar"
import Heading from "../../../components/minicomponents/Heading"
import { Plus } from 'lucide-react'
import { useState } from 'react'
import DealHistoryFilter from './components/DealHistoryFilter'
import DealHistoryTable from './components/DealHistoryTable'
import CreateNewDeal from './components/CreateNewDeal'

export default function DealHistoryPage() {
  const [showNewDeals, setShowNewDeals] = useState(false)
    const [open, setOpen] = useState(false)
    const [propertyDeals, setPropertyDeals] = useState(false)
  return(
   <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      <Navbar />

      {/* ✅ CASE 1: If property listing is TRUE → Only show overview */}
      {propertyDeals ? (
       <div></div>
      ) : (
        <>
          {/* ✅ CASE 2: If NOT adding new dev, show default content */}
          {!showNewDeals ? (
            <>
              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Deals History" subtitle={'View past deals, including closed, canceled, or archived transactions.'}/>
                <button
                  onClick={() => setShowNewDeals(true)} 
                  className="bg-buttonbg text-background p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                >
                  <Plus className="text-sm w-4" /> Create New Deals
                </button>
              </div>

              <div className="mt-6 space-y-6 p-10 ">
                <DealHistoryFilter/>
               <DealHistoryTable />
              </div>
            </>
          ) : (
            // ✅ CASE 3: New Dev Flow (Add New Property)
            <>
             <CreateNewDeal />
            </>
          )}
        </>
      )}
     
    </div>
  )
}

  
