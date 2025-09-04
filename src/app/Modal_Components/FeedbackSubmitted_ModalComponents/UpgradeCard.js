import React from 'react'
import { FaRocket } from "react-icons/fa";

export default function UpgradeCard({ onUpgrade, onSkip }) {
  return (
    <div className="bg-accentBg mx-auto rounded-xl shadow-sm border border-bordersemicolor mt-8 p-4 w-full max-w-md text-center">
      {/* Icon */}
      <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg bg-background border border-yellow-500 mb-4">

        <FaRocket className="w-6 h-6 text-yellow-500" />

      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-textnormal mb-2">
        Ready to unlock more features?
      </h2>

      {/* Description */}
      <p className="text-sm text-textnormal mb-6">
        Upgrade now to access premium tools, advanced analytics, and priority
        support.
      </p>

      {/* Upgrade Button */}
      <button
        onClick={onUpgrade}
        className="w-full bg-buttonbg text-background  py-2.5 rounded-lg font-medium  transition-colors"
      >
        Upgrade to Paid Plan
      </button>

     <div className="flex justify-center items-center">
      <button
        onClick={onSkip}
        className="mt-3 flex justify-center items-center text-sm text-subtext hover:underline"

      >
        Skip
      </button>
      </div>

    </div>
  );
}
