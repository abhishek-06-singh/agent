// PlanHeader.jsx
import React from "react";

const PlanHeader = ({ title, subtitle, price, billing }) => {
  return (
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="font-semibold text-sm md:text-lg text-subheading mb-1">{title}</h3>
        {subtitle && <p className="text-xs md:text-sm text-subtext">{subtitle}</p>}
      </div>
      <div className="text-right">
        <p className="font-semibold text-sm md:text-lg text-subheading mb-1">{price}</p>


        {billing && <p className="text-xs md:text-sm text-subtext">{billing}</p>}

      </div>
    </div>
  );
};

export default PlanHeader;
