"use client";
import React from "react";
import { Check } from "lucide-react";

export default function PriceCard_Module({
  title,
  price,
  period,
  description,
  features,
  showModal,
  isSelected,
  onSelect,
  buttontext,
}) {
  return (
    <div
      onClick={onSelect}
       className={`w-full sm:w-[220px] md:w-[240px]   
     h-[320px]                          
    rounded-lg border border-secondary shadow-md p-3 sm:p-4 flex flex-col gap-3
    my-2 transition-all duration-300 cursor-pointer
    origin-top
    ${isSelected ? "h-[340px] shadow-lg bg-background text-primary" : "bg-background text-textnormal"}
  `}
    >
      {/* Header */}
      <div className="flex flex-col items-start space-y-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        <div className="mb-1">
          <span className="text-2xl font-bold">
            {price !== "Custom" ? `$${price}` : "Custom"}
          </span>
          {period && <span className="text-xs ml-1">per {period}</span>}
        </div>
        <p className="text-xs text-left">{description}</p>
      </div>

      {/* Button (kept inline, not pushed down) */}
      <button
        className={`text-textnormal border border-bordercolor font-semibold py-1  px-3 rounded-md transition
          ${isSelected ? "bg-buttonbg text-white hover:opacity-90" : "bg-background text-primary"}
        `}
        onClick={showModal}
      >
        {buttontext}
      </button>

      {/* Features */}
      <ul className="flex flex-col items-start gap-1 mt-2">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex flex-row items-start gap-2 text-xs"
          >
            <div className="flex items-center justify-center bg-orange-400 rounded-full w-4 h-4">
              <Check size={12} className="text-white" />
            </div>
            <span className="text-left">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
