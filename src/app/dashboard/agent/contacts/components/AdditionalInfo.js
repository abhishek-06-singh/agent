import React, { useState } from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const AdditionalInfo = () => {
  const [notes, setNotes] = useState('');
  const [location, setLocation] = useState('');

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 w-full  mx-auto">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          Additional Info 
          <span className="text-gray-400 text-sm font-normal ml-1">(Optional)</span>
        </h2>
      </div>
      
      <div className="space-y-6">
        {/* Notes Section */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Notes
          </label>
          <TextArea
            placeholder="Add any additional notes about this contact"
            value={notes}
            onChange={handleNotesChange}
            rows={4}
            className="w-full resize-none"
            style={{
              fontSize: '14px',
              lineHeight: '1.5'
            }}
          />
        </div>

        {/* Location/Region Section */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location/Region
              </label>
              <Input
                placeholder="Enter Location/Region"
                value={location}
                onChange={handleLocationChange}
                size="large"
                className="w-full"
              />
            </div>
            {/* Empty column for larger screens */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;