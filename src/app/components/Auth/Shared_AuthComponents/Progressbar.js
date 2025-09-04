
import React from 'react'
export default function Progressbar({ progress,no,desc }) {
  return (
    <div className="flex flex-col gap-2" >
    <div className="w-full flex flex-row items-center justify-between">
        <div>
            <p className="text-primary text-xs md:text-sm">Step {no} of 3</p>
        </div>
        <div>
        <p className="text-secondary-alt text-xs md:text-sm">{desc}</p>
        </div>
    </div>
    <div className="w-full bg-progressbarbackground rounded-full h-1.5 md:h-2.5 dark:bg-primary">

      <div
        className="bg-secondary h-1.5 md:h-2.5 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
    </div>
  );
}