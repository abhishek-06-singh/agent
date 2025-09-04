'use client';

import { Input, DatePicker } from 'antd';
import dayjs from 'dayjs';

export default function DealDetails() {
  return (
    <div className="bg-cardbg p-4 rounded-xl border border-bordercolor shadow-sm w-full max-w-screen-xl mx-auto">
      <h3 className="text-base font-semibold mb-4">Deal Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Sale Value Input */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="saleValue" className="text-sm font-medium text-gray-700">
            Sale Value<span className="text-red-500">*</span>
          </label>
          <Input
            id="saleValue"
            placeholder="Enter Sale Value"
            size="large"
            type="number"
            className="w-full"
          />
        </div>

        {/* Date Picker */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="saleDate" className="text-sm font-medium text-gray-700">
            Date of Sale<span className="text-red-500">*</span>
          </label>
          <DatePicker
            id="saleDate"
            size="large"
            placeholder="Select Date"
            className="w-full"
            format="YYYY-MM-DD"
            disabledDate={(current) => current && current > dayjs().endOf('day')}
          />
        </div>
      </div>
    </div>
  );
}
