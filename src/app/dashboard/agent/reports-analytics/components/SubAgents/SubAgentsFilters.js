'use client'

import React, { useState } from 'react'
import { Input, Select, DatePicker } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { ChevronDown } from 'lucide-react'

const { Option } = Select
const { RangePicker } = DatePicker

const SubAgentsFilters = () => {
  const [property, setProperty] = useState('all')
  const [type, setType] = useState('all')
  const [subAgent, setSubAgent] = useState('all')

  return (
    <div className="w-full bg-cardbg rounded-2xl shadow-md border border-bordercolor p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-y-6">

        {/* Search Input */}
        <div className="lg:col-span-4 flex items-end justify-end w-full">
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search by name, email or listing"
            className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
          />
        </div>

        {/* Sub-Agents */}
        <div className="lg:col-span-2 w-full flex flex-col">
          <label className="text-sm text-textheading mb-1">Sub-Agents</label>
          <Select
            placeholder="All Sub-Agents"
            onChange={setSubAgent}
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          >
            <Option value="all" className="!text-textnormal">All</Option>
            <Option value="agent1" className="!text-textnormal">Michael Chen</Option>
            <Option value="agent2" className="!text-textnormal">Sarah Lee</Option>
          </Select>
        </div>

        {/* Date Range */}
        <div className="lg:col-span-2 w-full flex flex-col">
          <label className="text-sm text-textheading mb-1">Date Range</label>
          <RangePicker
            className="w-full h-10 rounded-xl !bg-cardbg !border-bordercolor !focus:border-textnormal !ring-0"
          />
        </div>

        {/* Property Type */}
        <div className="lg:col-span-2 w-full flex flex-col">
          <label className="text-sm text-textheading mb-1">Property Type</label>
          <Select
            value={property}
            onChange={setProperty}
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          >
            <Option value="all" className="!text-textnormal">All</Option>
            <Option value="house" className="!text-textnormal">House</Option>
            <Option value="apartment" className="!text-textnormal">Apartment</Option>
          </Select>
        </div>

        {/* Status */}
        <div className="lg:col-span-2 w-full flex flex-col">
          <label className="text-sm text-textheading mb-1">Status</label>
          <Select
            value={type}
            onChange={setType}
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
          >
            <Option value="all" className="!text-textnormal">All</Option>
            <Option value="new" className="!text-textnormal">New</Option>
            <Option value="negotiation" className="!text-textnormal">Negotiation</Option>
            <Option value="closed" className="!text-textnormal">Closed</Option>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default SubAgentsFilters
