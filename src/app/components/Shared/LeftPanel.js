'use client'

import React, { useState, useEffect } from "react";

import Image from "next/image";
import dashboard from "../../images/dashboardfull.png";
import Lightlogo from '../../images/div.svg'
import Darklogo from '../../images/Darkmode.svg'
import Link from "next/link"
import pattern from "../../images/Pattern.png";
import { useTheme } from "next-themes";

const LeftPanel = () => {
  const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
  
      useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        // Avoid rendering until mounted (fix hydration mismatch)
        return null
      }
  return (
    <div className="hidden md:block bg-gradient-to-t from-orange-500 to-background rounded-xl shadow-lg p-4 md:p-6 lg:p-10 max-w-md sm:max-w-3xl mx-auto text-center relative overflow-hidden border border-[#e5e5e5]">

      
      {/* Background Pattern without opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src={pattern}
          alt="Grid Background"
          fill
          className="object-cover md:opacity-40 lg:opacity-35 pointer-events-none"
        />
      </div>

      {/* Logo Section aligned left */}
      <div className="flex justify-start md:mb-24 lg:mb-14 relative z-10">
        <div className="w-24 sm:w-28 md:w-44 lg:w-48">

      <Link href="/">

      {resolvedTheme === 'dark' ? (
        <Image src={Darklogo} alt="Logo" width={200} height={200} className="dark" />
      ) : (
        <Image src={Lightlogo} alt="Logo" width={200} height={200} className='light' />
      )}</Link>
        </div>
      </div>

      {/* Dashboard Image */}
      <div className="rounded-xl shadow-sm overflow-hidden mb-3 relative z-10 flex justify-center">
        <Image
          src={dashboard}
          alt="Dashboard Preview"
          className="md:6/12 lg:w-9/12 h-auto object-contain"
            priority
        />
      </div>

      {/* Title + Description */}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary mb-3 relative z-10">
        Your Real Estate Management Solution
      </h2>
      <p className="text-xs md:text-base lg:text-lg text-textnormal px-1 lg:px-2 sm:px-4 relative z-10">
        Streamlined platform for agents, agencies, and brokerages to manage listings,
        and transactions in one place.
      </p>
    </div>
  );
};

export default LeftPanel;
