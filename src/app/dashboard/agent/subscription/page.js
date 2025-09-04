'use client'
import React from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import SubscriptionPlanCard from './components/SubscriptionPlanCard'
import BillingSummaryCard from './components/BillingSummaryCard'


export default function SubscriptionPage() {
  return (
 <div className="mt-0 w-full flex flex-col overflow-x-hidden">
         <Navbar />
   <div className='ml-10'>
     <Heading className='mt-6' title="My Current Plan" subtitle={'Manage Your Subscription and billing information'}/>
   </div>
      <div className='space-y-6 p-10'>
    <SubscriptionPlanCard />
    <BillingSummaryCard />
    </div>
    </div>
  )
}