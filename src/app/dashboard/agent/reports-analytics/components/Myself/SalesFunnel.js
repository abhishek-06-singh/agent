import { ArrowRight } from "lucide-react";
import React from "react";

export default function SalesFunnel() {
  const stages = [
    { label: "Leads", value: 342, bg: "bg-[#FAE9DA]" },
    { label: "New", value: 342, bg: "bg-[#F4CFAF]" },
    { label: "Negotiated", value: 342, bg: "bg-[#EEB887]" },
    { label: "Closed", value: 342, bg: "bg-[#A98360]" },
  ];

  return (
    <div className="p-6 bg-cardbg rounded-2xl shadow-md border border-bordercolor w-full">
      <h2 className="text-base font-semibold text-textheading mb-4">Sales Funnel</h2>

      <div className="flex items-center justify-between flex-wrap gap-y-4">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.label}>
            {/* Stage block */}
            <div className="flex flex-col items-center">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold text-black-500 ${stage.bg}`}
              >
                {stage.value}
              </div>
              <span className="mt-1 text-xs text-textnormal">{stage.label}</span>
            </div>

            {/* Arrow (skip last) */}
            {index !== stages.length - 1 && (
              <ArrowRight className="w-5 h-5 text-subtext mx-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
