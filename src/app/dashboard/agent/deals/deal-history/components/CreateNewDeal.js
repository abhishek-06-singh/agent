'use client'
import React, { useState } from 'react';
import { Breadcrumb } from 'antd';
import Heading from '../../../../components/minicomponents/Heading';
import AddDealScreen from './AddDealScreen';
import CreateNewDealPage from './CreateNewDealPage';

export default function CreateNewDeal() {
    const [open, setOpen] = useState(false)
  return (
    <div> 
      <div className="ml-10 mt-4 text-textheading">
        <Breadcrumb  

          separator=">"
          items={[
            {
              title: (
                <a className="text-textnormal" href="/dashboard/agent/deals/deal-history">
                  Deal History
                </a>
              ),
            },
            {
              title: (
                <a
                  className="text-textnormal font-bold"
                  href="/dashboard/agent/deals/deal-history"

                >
                  Create New Deal
                </a>
              ),
            },
          ]}
        />
      </div>
      <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
        <Heading title="Create New Deal" />

        <div className="flex gap-4">
          <button className="bg-background text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
            Cancel
          </button>
          <button
            className="bg-textheading text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
            onClick={() => setOpen(true)}
          >
            Save & Send Documents
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
        <CreateNewDealPage />
        
      </div>
      <AddDealScreen open={open} setOpen={setOpen} />
    </div>
  )
}