'use client'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function Pagination({currentpage,setCurrentpage,filtered,listingperpage}) {

  const totalpages = Math.max(1, Math.ceil((filtered?.length || 0) / listingperpage)) 
  const maxVisiblePages = 5

  const handleClick = (page) => {
    if (page >= 1 && page <= totalpages) {
      setCurrentpage(page)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const getPagination = () => {
    const page = []

    if (totalpages <= maxVisiblePages) {
      for (let i = 1; i <= totalpages; i++) {
        page.push(i)
      }
    } else {
      if (currentpage <= 3) {
        page.push(1, 2, 3, 4, '....', totalpages)
      } else if (currentpage >= totalpages - 2) {
        page.push(
          1,
          '....',
          totalpages - 3,
          totalpages - 2,
          totalpages - 1,
          totalpages
        )
      } else {
        page.push(
          1,
          '....',
          currentpage,
          currentpage + 1,
          currentpage + 2,
          '....',
          totalpages
        )
      }
    }
    return page
  }
  return (
    <div className="flex items-center justify-center text-textnormal space-x-2 md:space-x-3 my-10  ">
      <button
        onClick={() => handleClick(currentpage - 1)}
        disabled={currentpage === 1}
        className="flex items-center text-xs sm:text-sm md:text-base justify-center px-2 py-1 md:px-2 md:py-1 border border-gray-300  rounded hover:bg-buttonbg hover:text-background disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        <span className="hidden md:inline ">Back</span>
      </button>
      {getPagination().map((page, index) =>
        page === '....' ? (
          <span
            key={index}
            className="px-2 text-textnormal  text-xs sm:text-sm md:text-lg select-none"
          >
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => handleClick(page)}
            className={` px-2 py-1 md:px-3 md:py-0.5 text-xs sm:text-sm md:text-base border border-gray-300 rounded ${currentpage === page ? 'bg-buttonbg text-background hover:bg-hoveroverbutton' : 'text-primary hover:bg-buttonbg hover:text-background'}`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => handleClick(currentpage + 1)}
        disabled={currentpage === totalpages}
        className="flex items-center text-sm md:text-base text-textnormal justify-center px-2 py-1 md:px-2 md:py-1 border border-gray-300 rounded hover:bg-buttonbg hover:text-background disabled:text-gray-400"
      >
        <span className="hidden md:inline md:mr-1">Next</span>
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  )
}
