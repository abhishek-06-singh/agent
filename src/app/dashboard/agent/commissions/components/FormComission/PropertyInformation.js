'use client';

import { Select, Input, Button } from 'antd';

const { Option } = Select;

export default function PropertyInformation() {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm w-full max-w-screen-xl mx-auto">
      <h3 className="text-base font-semibold mb-4">Property Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Select Property */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="property" className="text-sm font-medium text-gray-700">
            Select Property<span className="text-red-500">*</span>
          </label>
          <Select
            id="property"
            placeholder="Enter Full Name"
            className="w-full"
            size="large"
          >
            <Option value="property1">Property One</Option>
            <Option value="property2">Property Two</Option>
          </Select>
        </div>

        {/* Property Value */}
        <div className="flex flex-col space-y-1">
          <label htmlFor="propertyValue" className="text-sm font-medium text-gray-700">
            Property Value<span className="text-red-500">*</span>
          </label>
          <Input
            id="propertyValue"
            placeholder="Enter Value"
            size="large"
            className="w-full"
            type="number"
          />
        </div>
      </div>

      {/* Button */}
      <div className="mt-4">
        <Button type="default">+ Post A Property</Button>
      </div>
    </div>
  );
}
