'use client'
import React from "react"
import FeedbackSubmitted_Rating from "./FeedbackSubmitted_Rating"
import FeedbackSubmittedForm from "./FeedbackSubmittedForm"
import { useRouter } from "next/navigation"


export default function FeedbackSubmitted_Page({SetFeedbackSubmittedOpen,feedback,feedbackImprove,trialNeeds,upgradePlan,rating}){
    const router = useRouter();

    const onUpgrade = () => {
        console.log('Upgrade clicked')
      }
      const onSkip = () => {

       SetFeedbackSubmittedOpen(false);
       router.push('/');

       

      }
    return(
       <div className="w-full bg-cardbg shadow-sm ">
       <p className="text-textnormal text-sm px-4 pt-4">Feedback Submitted</p>
       <hr className="w-full border border-bordercolor my-3" />
       <div className="w-full px-4 py-4">
       <p className="text-primary text-center text-xl mb-2 ">
       Thank you for Sharing your feedback,John!
       </p>
       <FeedbackSubmitted_Rating rating={rating} />
       <FeedbackSubmittedForm feedback={feedback} onUpgrade={onUpgrade} onSkip={onSkip} feedbackImprove={feedbackImprove} trialNeeds={trialNeeds} upgradePlan={upgradePlan} rating={rating} />



       </div>


       
       </div>
    )
}
