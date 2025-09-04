// FeaturesList.jsx
import React from "react";
import { Check } from "lucide-react"; // adjust icon import if needed

const FeaturesList = ({ features, iconClassName = "w-4 h-4 text-white bg-green-500 rounded-full mt-0.5" }) => {
  return (
    <ul className="mt-3 space-y-3 text-sm md:text-base text-subtext">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-2">
          <Check className={iconClassName} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeaturesList;
