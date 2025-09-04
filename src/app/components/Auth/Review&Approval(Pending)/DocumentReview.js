import React from 'react';
import { CheckCircle, Clock } from 'lucide-react'; 
import { Hourglass } from 'lucide-react'
import { Check } from 'lucide-react'
import Image from 'next/image';

export default function DocumentReview() {
  return (
    <div className="w-full max-w-2xl mx-auto p-2 md:p-4 space-y-4">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-10 md:w-16 md:h-12 bg-orange-50 flex items-center justify-center rounded-full p-4">
          <Hourglass className="text-orange-500 w-5 h-5" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm md:text-lg  font-medium text-textheading lg:mb-1">Documents Under Review</h2>
          <p className="text-xs md:text-md lg:text-lg text-textnormal">
            Your documents are being reviewed by our team. This process may take up to 48 hours.
            You will receive an email notification once the verification is complete.
          </p>
        </div>
      </div>

      {/* Progress Box */}
      <div className="md:ml-12 border border-bordercolor bg-cardbg rounded-xl p-2 md:p-4 space-y-3">

        <h3 className="text-sm md:text-base font-medium text-textheading my-1">Verification Progress</h3>

        {/* Item 1 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mt-2">
  <span className="text-xs md:text-sm text-subtext">
    Company Registration Certificate
  </span>
  <span className="flex items-center border px-2 py-1 rounded-full border-green-500 text-xs md:text-sm text-green-500 font-medium gap-1">
    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
    </div>
    <span className="text-xs md:text-sm text-green-500 font-medium">Validated</span>
  </span>
</div>

        {/* Item 2 */}
       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
  <span className="text-xs md:text-sm text-subtext">
    Legal Representative's National ID (RUN)
  </span>
  <span className="flex items-center border px-2 py-1 rounded-full border-yellow-500 text-xs sm:text-sm text-yellow-500 font-medium gap-1">
    <span className="w-4 h-4 text-yellow-500 rounded-full flex items-center justify-center">
      <Clock className="w-4 h-4" />
    </span>
    <span className="text-xs md:text-sm text-yellow-500 whitespace-nowrap font-medium">In Progress</span>
  </span>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mt-2">
  <span className="text-xs md:text-sm text-subtext">
    Company Tax ID (RUT)
  </span>
  <span className="flex items-center border px-2 py-1 rounded-full border-yellow-500 text-xs md:text-sm text-yellow-500 font-medium gap-1">
    <span className="w-4 h-4 text-yellow-500 rounded-full flex items-center justify-center">
      <Clock className="w-4 h-4" />
    </span>
    <span className="text-xs md:text-sm text-yellow-500 whitespace-nowrap font-medium">In Progress</span>

  </span>
</div>

      </div>
    </div>
  );
}
