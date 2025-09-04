
import React from 'react';
import { X } from "lucide-react";


export default function  RejectDocumentReview() {
  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 flex items-center justify-center rounded-full p-4">
          <X className="w-6 md:w-8 text-red-500" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm md:text-lg  text-textheading mb-3">Documents Under Review</h2>
          <p className="text-xs md:text-base lg:text-lg tracking-wide text-textnormal">
          Your submitted documents couldn't be verified. Please review the rejection reasons below and upload new documents. Once resubmitted, the verification process will restart and may take up to 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
