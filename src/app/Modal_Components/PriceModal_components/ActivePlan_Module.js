'use client'
import React from "react"
import Monthly_Module from "./Monthly_Module"
import Anually_Module from "./Anually_Module"
import { useState } from "react"


export default function ActivePlan_Module() {
    const [active, setActive] = useState('Monthly')
  const [selectedCard, setSelectedCard] = useState(1)
  const [showModal, setShowModal] = useState(false);


  return (
    <>
      {/* Toggle Container */}
<div className="w-fit mx-auto mt-3">
  <div className="bg-background border border-bordercolor rounded-full flex items-center p-0.5">
    {/* Monthly Button */}
    <button
      className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full transition ${
        active === "Monthly"
          ? "bg-buttonbg text-background"
          : "text-primary hover:text-primary"
      }`}
      onClick={() => setActive("Monthly")}
    >
      Monthly
    </button>

    {/* Annual Button */}
    <button
      className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full transition flex items-center space-x-1 ${
        active === "Anually"
          ? "bg-buttonbg text-background"
          : "text-primary hover:text-primary"
      }`}
      onClick={() => setActive("Anually")}
    >
      <span>Annual</span>
      <span className="ml-1 text-[9px] text-orange-500 border border-orange-200 bg-orange-50 px-1 py-[1px] rounded-full">
        -15%
      </span>
    </button>
  </div>
</div>


      {/* Content Switch */}
      <div className="max-w-7xl mx-auto">
        {active === "Monthly" && (
          <Monthly_Module

            showModal={showModal}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )}
        {active === "Anually" && (
          <Anually_Module

            showModal={showModal}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )}
      </div>
    </>
  )
}
