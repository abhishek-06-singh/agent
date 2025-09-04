import React from "react"
import Monthly from "./Monthly"
import Anually from "./Anually"
import { useState } from "react"

export default function ActivePlan() {
  const [active, setActive] = useState('Monthly')
  const [selectedCard, setSelectedCard] = useState(1);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Toggle Container */}
      <div className="w-fit mx-auto my-10">
        <div className="bg-background rounded-full flex items-center px-1 py-1">
          
          {/* Monthly Button */}
          <button
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition ${
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
            className={`px-4 py-1.5 text-sm font-medium rounded-full transition flex items-center space-x-1 ${
              active === "Anually"
                 ? "bg-buttonbg text-background"

                : "text-primary hover:text-primary"
            }`}
            onClick={() => setActive("Anually")}
          >
            <span>Annual</span>
            <span className="ml-1 text-xs text-orange-500 border border-orange-200 bg-orange-50 px-2 py-0.5 rounded-full">
              -15%
            </span>
          </button>
        </div>
      </div>

      {/* Content Switch */}
      <div className="max-w-7xl mx-auto">
        {active === "Monthly" && (
          <Monthly
            showModal={showModal}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )}
        {active === "Anually" && (
          <Anually
            showModal={showModal}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
          />
        )}
      </div>
    </>
  )
}
