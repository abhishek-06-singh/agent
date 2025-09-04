import React from "react";
import { Info } from "lucide-react";

export default function TrialManagment() {
  return (
    <div className="w-full mt-2 pb-4">
        <div className="bg-coral p-3 rounded-lg flex items-center flex-row gap-1 text-xs mb-4 text-textnormal border border-yellowborder">
            {/* <Info className="w-5 h-5 text-background  fill-yellow-500" /> */}
            <div className="w-3 h-3 rounded-full flex items-center justify-center bg-yellow-500">
           <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-background"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      {/* The dot */}
      <line x1="12" y1="8" x2="12" y2="8" strokeLinecap="round" />
      {/* The vertical line */}
      <line x1="12" y1="12" x2="12" y2="16" strokeLinecap="round" />
    </svg>
            </div>

            Limits are based on your trial subscription package.
        </div>
      <div>
  <h6 className="text-subheading text-sm font-semibold mb-2">
    Time Management
  </h6>
  <p className="text-textnormal text-xs ">
    Once your trial ends, we'll send you a quick feedback form and invite you to subscribe
  </p>
</div>

    </div>
  );
}
