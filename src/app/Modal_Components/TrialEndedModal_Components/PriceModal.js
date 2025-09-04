'use client'
import React, { useState } from 'react'
import ActivePlan_Module from '../PriceModal_components/ActivePlan_Module'
import { useInView } from 'react-intersection-observer'
import Middlebar from '../PriceModal_components/Middlebar'
import AlertBanner from './AlertBanner'



export default function PricingModal({ showModal }) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // triggers every time
  })

  const [active, setActive] = useState('Monthly')
  const [selectedCard, setSelectedCard] = useState(1)

  return (
    <div>
      <div
        className=" py-10 bg-gradient-to-t from-orange-400 to-background  px-4 sm:px-6 lg:px-8 "
        ref={ref}
      >
        
        <div className="w-full  mx-auto text-center">
          <AlertBanner coloredtext="Free trial ended" message=" - Choose a plan to continue using all features" />

          <Middlebar inView={inView} />
          <ActivePlan_Module
          />
        </div>
      </div>
    </div>
  )
}
