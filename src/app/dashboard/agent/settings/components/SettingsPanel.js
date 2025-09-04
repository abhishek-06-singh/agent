'use client'
import React from 'react'
import { Select } from 'antd'
import { ChevronDown } from 'lucide-react'

const { Option } = Select

export default function SettingsPanel() {
  return (
    <div className="  w-full space-y-6">
      {/* Language Section */}
      <div className="bg-cardbg rounded-xl border border-bordercolor p-4 shadow-md w-full">
        <h3 className="text-sm font-semibold text-primary pb-4">Language</h3>
        <label className="block text-xs text-textplaceholder mb-1">Select Language</label>
        <Select
          defaultValue="en"
          dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-12 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
        >
          <Option value="en">English (US)</Option>
          <Option value="es">Spanish (ES)</Option>
          <Option value="fr">French (FR)</Option>
        </Select>
      </div>

      {/* Time Zone Section */}
      <div className="bg-cardbg rounded-xl border border-bordercolor p-4 shadow-md w-full">
        <h3 className="text-sm font-semibold text-primary pb-4">Time Zone</h3>
        <label className="block text-xs text-textplaceholder mb-1">Select Time Zone</label>
        <Select
          defaultValue="pt"
           dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-12 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
        >
          <Option value="pt">Pacific Time (PT)</Option>
          <Option value="et">Eastern Time (ET)</Option>
          <Option value="ct">Central Time (CT)</Option>
        </Select>
      </div>

      {/* Deactivate Section */}
      <div className="bg-red-50 border border-red-100 shadow-md p-4 rounded-xl">
        <button className="text-red-500 font-semibold text-sm hover:underline">
          Deactivate Account
        </button>
        <p className="text-xs text-black-500 mt-1">
          Last updated: January 15, 2025 at 2:30 PM
        </p>
      </div>
    </div>
  )
}
