'use client'

import React, { useState } from 'react'
import { Input, Select } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { ChevronDown } from "lucide-react"

const { Option } = Select

const ExternalCollaboratorsFilters = () => {
  const [role, setRole] = useState('all')
  const [status, setStatus] = useState('all')
  const [sort, setSort] = useState('all')

  return (
    <div className="w-full bg-cardbg rounded-2xl shadow-md border border-bordercolor p-6">
      {/* Flex Row */}
      <div className="flex flex-col lg:flex-row  gap-6">
        {/* Search (45%) */}
        <div className="flex flex-col justify-end lg:basis-[45%]">
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search by name, email"
            className="rounded-xl h-10 !placeholder:text-textplaceholder !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
          />
        </div>

        {/* Right side (55%) split into 3 selects) */}
        <div className="flex flex-col lg:basis-[55%] lg:flex-row gap-6">
          {/* Roles */}
          <div className="flex flex-col flex-1">
            <label className="text-sm text-textheading mb-1">Roles</label>
            <Select
              value={role}
              onChange={setRole}
              dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
              className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
              suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />} 
            >
              <Option value="all" className="!text-textnormal">All Roles</Option>
              <Option value="admin" className="!text-textnormal">Admin</Option>
              <Option value="editor" className="!text-textnormal">Editor</Option>
              <Option value="viewer" className="!text-textnormal">Viewer</Option>
            </Select>
          </div>

          {/* All Statuses */}
          <div className="flex flex-col flex-1">
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
              <Option value="sold" className="!text-textnormal">Sold</Option>
            </Select>
          </div>

          {/* Sort By */}
          <div className="flex flex-col flex-1">
            <label className="text-sm text-textheading mb-1">Sort By</label>
            <Select
              value={sort}
              onChange={setSort}
              dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
              className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
              suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />} 

            >
              <Option value="all" className="!text-textnormal">All</Option>
              <Option value="name" className="!text-textnormal">Name</Option>
              <Option value="email" className="!text-textnormal">Email</Option>
              <Option value="date" className="!text-textnormal">Date Added</Option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExternalCollaboratorsFilters
