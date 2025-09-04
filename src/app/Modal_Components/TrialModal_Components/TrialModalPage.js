import React from 'react'
import Image from 'next/image'
import key from "../../images/key.svg"
import AgentPlanCard from './AgentPlanCard'
import TrialManagment from './TrialManagment'
import Trial_button from './Trial_button'

const TrialModalPage = () => {
  return (
    <div className="">
      <div className=" mx-auto bg-cardbg rounded-lg p-4 shadow-sm">
        
        {/* Icon */}
        <div className="w-10 h-10 rounded-md bg-blackbg border border-bordercolor mx-auto flex justify-center items-center mb-2">
          <Image src={key} width={20} height={20} alt="Key Icon" />
        </div>
        
        {/* Header */}
        <div className="pb-3 text-center">
          <h1 className="mb-2 font-medium text-textheading text-lg">
            Welcome to Your Free Trial!
          </h1>
          <p className="text-textnormal text-xs">
            Explore all the powerful tools to boost your real estate business.
          </p>
        </div>
        
        {/* Sections */}
        <div className="space-y-3">
          <AgentPlanCard />
          <TrialManagment />
          <Trial_button />
        </div>
      </div>
    </div>
  )
}

export default TrialModalPage
