'use client'
import React from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import Help_Page from './components/Help_Page'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export default function HelpCenterPage() {
  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      <Navbar />
      
      <div className="ml-10 mt-6 pr-10 w-full max-w-7xl space-y-7">
        <Heading 
          title="Messages" 
          subtitle="Find guides, tutorials, and answers to your questions."
        />
        
        {/* Search bar below Heading */}
        <div className="mt-4 max-w-md">
          <Input
            placeholder="Search articles, guides, and FAQs"
            prefix={<SearchOutlined className="text-current" />}
            size="large"
            className="rounded-lg border border-bordercolor shadow-sm !bg-input"
            allowClear
            onPressEnter={(e) => console.log('Search:', e.target.value)}
          />
        </div>
      </div>
      
      <div className=" ml-10 pr-10 w-full max-w-7xl">
        <Help_Page />
      </div>
    </div>
  )
}
