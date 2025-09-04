"use client";
import React from "react";
import { Check } from "lucide-react";
import Link from "next/link";

export default function PriceCard({
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
      className={`w-full sm:w-[300px] md:w-[350px] h-auto sm:h-[580px] md:h-[480px] lg:h-[500px]
        rounded-xl border border-secondary shadow-md p-4 sm:p-6 flex flex-col gap-4
        my-2  transition-transform duration-300 cursor-pointer

        ${isSelected ? "sm:h-[640px] md:h-[520px] lg:h-[540px] shadow-xl bg-background text-primary" : "bg-background text-textnormal"}`}
    >
      {/* Header */}
      <div className="flex flex-col items-start space-y-3">
        <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        <div className="mb-2">
          <span className="text-3xl sm:text-4xl font-bold">${price}</span>
          {period && <span className="text-xs sm:text-sm ml-1">per {period}</span>}
        </div>
        <p className="text-xs sm:text-sm text-left mb-2">{description}</p>
      </div>

      {/* Button */}
      <button
        className={`text-textnormal border border-bordercolor font-semibold py-3 sm:py-4 px-4 rounded-lg transition
          ${isSelected ? "bg-buttonbg text-white hover:opacity-90" : " bg-background text-primary"}`}
        onClick={showModal}
      >
        {buttontext}
      </button>

      {/* Features */}
      <ul className="flex flex-col items-start gap-2 mt-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex flex-row items-start gap-2 text-sm sm:text-base">
            <div className="flex items-center justify-center bg-orange-400 rounded-full w-5 h-5">
              <Check size={14} className="text-white" />
            </div>
            <span className="text-left">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
