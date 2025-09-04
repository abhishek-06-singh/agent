import Image from "next/image";
import React from "react";

export default function RadioButton({
  value,
  title,
  description,
  name,
  icon,
  checked,
  onChange
}) {
  return (
    <label className="flex items-center gap-4 cursor-pointer">
       <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only peer" // Hide default but keep functionality
      />
      
      <div className="relative flex items-center h-5 mt-1">
  {/* Outer circle - perfectly round with consistent sizing */}
  <div className={`
    h-5 w-5 sm:h-5 sm:w-5
    rounded-full border-2
    flex items-center justify-center
    ${checked ? 'border-black-500' : 'border-gray-300'}
    transition-all duration-200
    bg-white
  `}>
    {/* Inner dot - perfectly centered and proportional */}
    <div className={`
      w-3 h-3 sm:w-3 sm:h-3
      rounded-full
      ${checked ? 'bg-black-500 scale-100' : 'scale-0'}
      transition-all duration-200
    `}></div>
  </div>
</div>
      
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-start">
        <div className="flex flex-row space-x-2">
        <div className="w-6 h-6 flex items-center justify-center">
        {icon && <Image src={icon} alt={`${value} icon`} className="w-6 h-6 text-textnormal" />}
        </div>
       
          <p className="text-sm md:text-lg lg:text-xl text-textheading">{title}</p>
          </div>
          <p className=" text-xs md:text-sm text-textnormal">{description}</p>
        </div>
        </div>
    </label>
  );
}