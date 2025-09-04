'use client';

import React from 'react';

export default function BillingSummaryCard() {
  return (
    <div className="bg-cardbg border border-bordercolor rounded-xl p-6 shadow-md w-full ">
      <h3 className="font-semibold text-textheading text-base mb-4">Billing Summary</h3>
      
      <div className="flex justify-between items-center py-2 border-b border-bordercolor">
        <span className="text-sm text-textnormal">Next Payment Amount</span>
        <span className="text-sm font-medium text-textheading">$49</span>
      </div>

      <div className="flex justify-between items-center py-2 border-b border-bordercolor">
        <span className="text-sm text-textnormal">Payment method</span>
        <div className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="w-10 h-auto"
          />
          <span className="text-sm text-textheading">Visa ending with 1234</span>
        </div>
      </div>

      <div className="flex justify-between items-center py-2">
        <span className="text-sm text-subtext">Billing Cycle</span>
        <span className="text-sm text-primary">Monthly</span>
      </div>
    </div>
  );
}
