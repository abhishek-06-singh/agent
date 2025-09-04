'use client'
import React from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import { Plus, Upload } from 'lucide-react'
import DocumentData from './components/DocumentData'
import { useRouter } from 'next/navigation'




export default function DocumentsPage() {
  const router = useRouter()
const handleClick = () => {
  router.push(`/dashboard/agent/documents/add-document`)
}


  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      <Navbar />
              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Documents" subtitle={'Upload, manage, sign, and track your client documents seamlessly.'}/>
               <div className="flex gap-4">
                  <button
                    className="bg-buttonbg text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={handleClick}
                  ><Plus className='w-5 h-5'/>
                    Upload Document
                  </button>
                </div>
              </div>

              <div className="mt-4">
              <DocumentData/>
              </div>
     
    </div>
  )
}
