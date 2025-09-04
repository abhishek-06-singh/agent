import { Check } from 'lucide-react'
import React from 'react'
import UpgradeCard from './UpgradeCard'

export default function FeedbackSubmittedForm({
  feedback,
  feedbackImprove,
  trialNeeds,
  upgradePlan,
  rating,
  onUpgrade,
  onSkip,

}) {
  return (
    <div>
      <p className="text-lg  text-primary mb-4">Your Feedback Summary</p>
      <div className="mb-10 bg-accentBg border border-bordersemicolor rounded-lg p-4">
        <p className="text-primary text-sm mb-2">What did you Like the most?</p>
        <p className="text-subtext text-sm">" {feedback} "</p>
      </div>
      <div className="mb-10 bg-accentBg border border-bordersemicolor rounded-lg p-4">
        <p className="text-primary text-sm mb-2">What can we improve?</p>
        <p className="text-subtext text-sm">" {feedbackImprove} "</p>
      </div>
      <div className="w-full flex flex-row items-center justify-between gap- ">
        <div className="bg-accentBg border border-bordersemicolor rounded-lg p-3">
          <p className="text-primary whitespace-nowrap text-sm mb-2">

            Did the Trial meet your needs?
          </p>
          <div className="w-full flex flex-row items-center  gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>

            <p className="text-subtext text-sm">{trialNeeds}</p>
          </div>
        </div>

        <div className="bg-accentBg border border-bordersemicolor rounded-lg p-3">
          <p className="text-primary whitespace-nowrap text-sm mb-2">


            Would you consider upgrading?
          </p>
          <div className="w-full flex flex-row items-center  gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-white" />
            </div>
            <p className="text-subtext text-sm">{upgradePlan}</p>
          </div>
        </div>
      </div>
      <UpgradeCard onUpgrade={onUpgrade} onSkip={onSkip} />


    </div>
  )
}
