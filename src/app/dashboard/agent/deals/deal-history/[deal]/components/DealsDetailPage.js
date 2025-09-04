import Navbar from '../../../../../components/minicomponents/Navbar'
import Heading from '../../../../../components/minicomponents/Heading'
import { Plus } from 'lucide-react'
import DealSummaryCard from './DealSummaryCard'
import LeadAndDealDetailsCard from './LeadAndDealDetailsCard'
import CommissionDistributionCard from './CommissionDistributionCard'
import DocumentsForSignatureCard from './DocumentsForSignatureCard'
import InternalNotesCard from './InternalNotesCard'

export default function DealsDetailPage() {
  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
          <Navbar />
         <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                    <Heading title="Deal Details" />
                    <button
                      onClick={() => setShowNewDeals(true)} 
                      className="bg-buttonbg text-background p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                    >
                      <Plus className="text-sm w-4" /> Create New Deals
                    </button>
                  </div>

                  <div className=' space-y-6 px-10 py-10'>
                    <DealSummaryCard />
                    <LeadAndDealDetailsCard />
                    <CommissionDistributionCard />
                    <DocumentsForSignatureCard />
                    <InternalNotesCard />
                  </div>
                  </div>
  )
}