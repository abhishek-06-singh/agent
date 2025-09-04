'use client'
import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import { Plus } from 'lucide-react'
import LeadsTabs from '../leads/components/LeadsTabs'
import FormDetails from './components/Form/FormDetails'


export default function LeadsPage() {
  const [showNewLeads, setShowNewLeads] = useState(false)
  const [open, setOpen] = useState(false)
  const [propertyLeads, setPropertyLeads] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      <Navbar />

      {/* ✅ CASE 1: If property listing is TRUE → Only show overview */}
      {propertyLeads ? (
       <div></div>
      ) : (
        <>
          {/* ✅ CASE 2: If NOT adding new dev, show default content */}
          {!showNewLeads ? (
            <>
              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Leads" />
                <button
                  onClick={() => setShowNewLeads(true)} 
                  className="bg-buttonbg text-background p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                >
                  <Plus className="text-sm w-4" /> Add New Leads
                </button>
              </div>

              <div className="mt-4">
              <LeadsTabs/>
              </div>
            </>
          ) : (
            // ✅ CASE 3: New Dev Flow (Add New Property)
            <>
              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Add New Property" subtitle="Create a new lead" />

                <div className="flex gap-4">
                  <button className="bg-background text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                    Cancel
                  </button>
                  <button
                    className="bg-textheading text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={() => setOpen(true)}
                  >
                    Save Lead
                  </button>
                </div>
              </div>
              <div className="my-4">
                <FormDetails/>
              </div>
            </>
          )}
        </>
      )}

      {/* Success Modal */}
      {/* <SuccessModal
        isOpen={open}
        onClose={() => setOpen(false)}
        setPropertyListings={setPropertyListings}
      /> */}
     
    </div>
  )
}
