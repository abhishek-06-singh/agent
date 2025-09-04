'use client'

import React, { useState } from 'react'
import { Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { ChevronDown } from 'lucide-react'

const { Option } = Select

const SubagentFilters = () => {
  const [status, setStatus] = useState('all')
  const [sort, setSort] = useState('all')

  return (
    <div className="w-full bg-cardbg rounded-2xl shadow-md border border-bordercolor p-6">
      {/* Grid Layout (same as PropertyFiltersSub) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-y-6">
        {/* Search */}
        <div className="lg:col-span-6 w-full flex flex-col justify-end mt-4 sm:mt-0">
         
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search by name, email"
            className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
          />
        </div>

        {/* All Statuses */}
        <div className="lg:col-span-3 w-full flex flex-col mt-4 sm:mt-0">
          <label className="text-sm text-textheading mb-1">All Statuses</label>
          <Select
            value={status}
            onChange={setStatus}
            dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />} 
          >
            <Option value="all" className="!text-textnormal">All Statuses</Option>
            <Option value="active" className="!text-textnormal">Active</Option>
            <Option value="inactive" className="!text-textnormal">Inactive</Option>
          </Select>
        </div>

        {/* Sort By */}
        <div className="lg:col-span-3 w-full flex flex-col mt-4 sm:mt-0">
          <label className="text-sm text-textheading mb-1">Sort By</label>
          <Select
            value={sort}
            onChange={setSort}
            dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />} 
          >
            <Option value="all" className="!text-textnormal">All</Option>
            <Option value="newest" className="!text-textnormal">Newest</Option>
            <Option value="oldest" className="!text-textnormal">Oldest</Option>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default SubagentFilters
