// 'use client'
// import React from 'react'
import Heading from '../../../components/minicomponents/Heading'
import Navbar from '../../../components/minicomponents/Navbar'
import Oppurtunity_Cards from '../components/Oppurtunity-PipelineComponents/Oppurtunity_Cards'
import StatsCards_Leads from '../components/Oppurtunity-PipelineComponents/StatsCards_Leads'
import SendDocumentsModal from '../components/Modals_leads/SendDocumentModal'
import ReceiptAddOnModal from '../components/Modals_leads/ReceiptAddOnModal'


// import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function OpportunityPipeline() {
    // const [open, setOpen] = useState(true);
  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      <Navbar />
      {/* <SendDocumentsModal open={open} setOpen={setOpen} /> */}
      {/* <ReceiptAddOnModal open={open} setOpen={setOpen} /> */}

      <div className="ml-10 mt-4 h-10 flex pr-10 justify-between">
                <Heading title="Opportunity Pipeline" subtitle={"Track and manage your active deals in real time"} />

                <div className="flex gap-4">
                  <button className="bg-background text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                    Export CSV
                  </button>
                  <button className="bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                   <Plus className="w-4 h-4" /> Add Deal

                  </button>
                </div>
              </div>
              <div className="mt-8 px-10">
                <StatsCards_Leads/>

              </div>

              <div className="mt-4 px-10">
                <Oppurtunity_Cards/>
              </div>

     </div>
  )
}
