'use client'
import { DownloadOutlined } from '@mui/icons-material'
import React from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import ReportsTabs from './components/ReportsTabs'
import { Download } from 'lucide-react'

export default function ReportsAnalyticsPage() {
  return(
     <div className="mt-0 w-full flex flex-col overflow-x-hidden">
          <Navbar />

           <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Reports & Analytics" subtitle={'Monitor performance across your team and sub-agents'}/>
                <button
                  onClick={() => setShowNewDev(true)}
                  className="bg-buttonbg text-background p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                >
                  <Download className="text-sm w-4" /> Download Report
                </button>
              </div>

              <div className="mt-4">
               <ReportsTabs />
              </div>
    </div>
  )
}
