"use client";

import { Card } from "antd";

export default function AdditionalDetails() {
  return (
    <Card
      className="rounded-lg py-4 px-3 shadow-md border border-bordercolor w-full max-w-md mx-auto"
      bodyStyle={{ padding: "1.5rem" }}
    >
      {/* Header */}
      <p className="text-base font-semibold text-textheading mb-4">
        Additional Details
      </p>

      {/* Details Section */}
      <div className="flex  flex-col gap-4 text-sm sm:text-base text-textnormal">
        
        <div>
          <p className="text-subtext text-xs sm:text-sm">Client Type</p>
          <p className="font-medium text-textnormal">Buyer</p>
        </div>

        <div>
          <p className="text-subtext text-xs sm:text-sm">Budget Range</p>
          <p className="font-medium text-textnormal">$300K – $500K</p>
        </div>

        <div>
          <p className="text-subtext text-xs sm:text-sm">Property Preferences</p>
          <p className="font-medium text-textnormal">Condo, 2BHK, Pet-friendly</p>
        </div>
      </div>
    </Card>
  );
}
