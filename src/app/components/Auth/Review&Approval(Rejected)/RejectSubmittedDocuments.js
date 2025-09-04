import { Check } from "lucide-react";
import { X } from "lucide-react";
import React from "react";


export default function RejectSubmittedDocuments() {
 return (
    <div className="w-full max-w-2xl mx-auto my-6 space-y-4">
      <h2 className="text-sm px-2 md:px-4 md:text-lg text-textheading">Submitted Documents</h2>

    
        <div
          className="w-full flex flex-col space-y-3 items-start bg-cardbg justify-between  px-2 md:px-4 py-3 rounded-lg border border-gray-100"
        >
          <div className="w-full flex items-center justify-between">
          <span className="text-xs md:text-sm text-subtext">Company Registration Certificate</span>
          <span className="flex items-center border px-2 py-1 rounded-full border-green-500 text-xs md:text-sm text-green-500 font-medium gap-1"> 
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-xs md:text-sm text-green-500 font-medium">Validated</span>
          </span>
        </div>
        <div className="w-full flex items-center justify-between">
          <span className="text-xs md:text-sm text-subtext">Company Registration Certificate</span>
          <span className="flex items-center border px-2 py-1 rounded-full border-red-500 text-xs md:text-sm text-red-500 font-medium gap-1"> 
            <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="text-xs md:text-sm text-red-500 font-medium">Rejected</span>
          </span>
        </div>
          
        </div>
  
    </div>
  );
}
