// components/AgentPlanCard.jsx
import { Check, Users } from "lucide-react";
import React from 'react'

export default function AgentPlanCard() {
  const features = [
    "14 days of free access",
    "Full access to all platform features",
    "Unlimited property posting",
    "Limited external collaborators",
  ];

  return (
    <div className="w-full rounded-md border border-bordercolor mt-4 shadow-sm p-3 bg-subcardbg">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <Users className="w-4 h-4 text-textnormal" />
        <h3 className="text-sm font-semibold text-subheading">For Agent</h3>
      </div>

      {/* Features */}
      <div className="space-y-2">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex justify-center items-center">
              <Check className="w-3 h-3 text-white flex-shrink-0" />
            </div>
            <span className="text-textnormal text-xs">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
