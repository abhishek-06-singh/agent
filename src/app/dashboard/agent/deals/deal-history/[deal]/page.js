'use client'
import DealDetailPage from './components/DealsDetailPage'

export default function DealDetails({params}) {
     const {deal} = params 
  const decodedDeal = decodeURIComponent(deal)
  return (
    <div>
    <DealDetailPage/>
    </div>
  )
}