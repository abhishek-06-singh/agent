'use client'
import React from 'react'
import Heading from '../../../components/minicomponents/Heading'
import PaymentHistoryTable from './components/PaymentHistoryTable'
import PaymentFilterBar from './components/PaymentFilterBar'
import Navbar from '../../../components/minicomponents/Navbar'
import { ConfigProvider } from 'antd'

export default function BillingHistoryPage() {
  return (
          <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EEB887', // custom theme color
          borderRadius: 12,
        },
        components: {
          Steps: {
            colorPrimary: '#EEB887',
            colorText: '#000',
            colorTextActive: '#EEB887',
          },
        },
      }}
    >
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
         <Navbar />
   <div className='ml-10'>
     <Heading className='mt-6' title="Billing History" subtitle={'View your billing history'}/>
   </div>
      <div className='space-y-6 p-10'>
    <PaymentFilterBar/>
    <PaymentHistoryTable/>
    </div>
    </div>
    </ConfigProvider>
  )
}
