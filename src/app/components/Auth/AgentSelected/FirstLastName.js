'use client'
import React from 'react'
import { useState } from 'react'
export default function FirstLastName() {
   const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  return (
    <div className="w-full flex gap-3 ">
<div className="w-1/2 flex flex-col ">
        <label className="py-2 px-2 text-textnormal text-sm">First Name* </label>
        <input type="text"
        id="firstname"
        placeholder="Enter Your First Name"
         value={first}
        onChange={(e) => setFirst(e.target.value)}
       className="w-full px-4 pr-10 py-2 md:py-3 text-sm md:text-lg border border-bordercolor rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-textheading placeholder-textplaceholder"></input>
         </div>
        <div className="w-1/2 flex flex-col">
         <label className="py-2 px-2 text-textnormal text-sm">Last Name* </label>
        <input type='text'
        id="lastname"
        placeholder="Enter your Last Name"
         value={last}
            onChange={(e) => setLast(e.target.value)}
       className="w-full  px-4 pr-10 py-2 md:py-3 text-sm md:text-lg border border-bordercolor rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-200 text-textheading placeholder-textplaceholder"></input>
          </div>
         
    </div>
  );
}