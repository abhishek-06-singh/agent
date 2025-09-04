'use client'
import React, { useState } from 'react'
import ActivePlan_Module from './ActivePlan_Module'
import { useInView } from 'react-intersection-observer'
import Middlebar from './Middlebar'
import TrialBar from './TrialBar'

export default function Pricing_Modal() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // triggers every time
  })



  return (
    <div>
      <div
        className=" py-10 bg-gradient-to-t from-orange-400 to-background  px-4 sm:px-6 lg:px-8 "
        ref={ref}
      >
        <TrialBar />
        <div className="w-full  mx-auto text-center">
          <Middlebar inView={inView} />
          <ActivePlan_Module
          />
        </div>
      </div>
    </div>
  )
}
