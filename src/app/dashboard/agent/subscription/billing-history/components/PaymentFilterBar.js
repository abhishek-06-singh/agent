'use client';

import React, { useState } from 'react';
import { DatePicker, Select } from 'antd';
import dayjs from 'dayjs';
import { ChevronDown } from 'lucide-react';

const { RangePicker } = DatePicker;
const { Option } = Select;

export default function PaymentFilterBar() {
  const [dateRange, setDateRange] = useState([]);
  const [status, setStatus] = useState('All Statuses');

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  return (
    <div className="bg-cardbg p-4 rounded-lg shadow-md border border-bordercolor flex flex-wrap md:flex-nowrap gap-4 items-end justify-between">
      
      {/* Date Range Picker */}
      <div className="flex flex-col w-full md:w-2/3">
        <label className="text-sm font-medium text-textnormal mb-1">Date Range</label>
        <RangePicker
          value={dateRange}
          onChange={handleDateChange}
          format="MMM DD, YYYY"
          allowClear
          className="w-full h-10 rounded-xl !bg-cardbg !border-bordercolor !focus:border-textnormal !ring-0"
        
        />
      </div>

      {/* Status Select Dropdown */}
      <div className="flex flex-col w-full md:w-1/3">
        <label className="text-sm font-medium text-textnormal mb-1">Status</label>
        <Select
          value={status}
          onChange={handleStatusChange}
           dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-10 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
        >
          <Option value="All Statuses">All Statuses</Option>
          <Option value="Paid">Paid</Option>
          <Option value="Pending">Pending</Option>
          <Option value="Failed">Failed</Option>
        </Select>
      </div>
    </div>
  );
}
