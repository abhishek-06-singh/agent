'use client'

import React from 'react'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import Heading from '../../../../../components/minicomponents/Heading'
import { EditIcon, Plus, Trash } from 'lucide-react'


const OpportunityContent = ({user}) => {
  return (
    <>
     <div className="ml-10 my-8 h-10 flex pr-10 justify-between">
                    <Heading title="Leads Details" />
    
                    <div className="flex gap-4">
                      <button className="bg-background text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                        <EditIcon className="w-4 h-4" />
                        Edit Lead
                      </button>
                      <button className="bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                       <Trash className="w-4 h-4" /> 
                       Delete Lead    
                      </button>
                    </div>
                  </div>
    <div className="flex flex-col lg:flex-row w-full gap-6 px-10 py-4">
     <LeftColumn user={user}  />
      <RightColumn />

    </div>
    </>
  )
}

export default OpportunityContent
