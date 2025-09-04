'use client'
import { Check } from "lucide-react";
import React,{useState} from "react";

export default function Checkbox({id,label}) {
  const [agree,setAgree]=useState(false)
  return (
    <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
      {/* Hidden native checkbox */}
      <input
        id={id}
        type="checkbox"
        checked={agree}
        onChange={(e) => setAgree(e.target.checked)}
        className="peer sr-only"
      />

      {/* Custom box */}
      <div
        className="
          w-4 h-4 rounded-sm flex items-center justify-center
          border border-gray-400 transition-colors duration-200
          peer-checked:bg-black-500 peer-checked:border-black-500
        "
      >
        <Check
          className="
            w-4 h-4 text-white transition-opacity duration-200
      opacity-0 peer-checked:opacity-100
          "
          strokeWidth={4}
        />
      </div>

      {/* Label text */}
      {label && (
        <span className="text-xs md:text-sm text-textnormal select-none">
          {label}
        </span>
      )}
    </label>
  );
}
