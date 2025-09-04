import { Modal } from "antd";
import React from 'react'
import FeedbackModal_page from "../../Modal_Components/FeedbackModal_Components/FeedbackModal_page";

export default function FeedbackModal({feedback,setFeedback,feedbackImprove,setFeedbackImprove,trialNeeds,setTrialNeeds,upgradePlan,setUpgradePlan,FeedbackOpen,SetFeedbackOpen,SetFeedbackSubmittedOpen,rating,setRating}) {




  const handleCancel = () => SetFeedbackOpen(false);
  return (
   <Modal
      open={FeedbackOpen}
      onCancel={handleCancel}
      footer={null}
      centered
      width={400}
    >
         <FeedbackModal_page feedback={feedback} setFeedback={setFeedback} feedbackImprove={feedbackImprove} setFeedbackImprove={setFeedbackImprove} trialNeeds={trialNeeds} setTrialNeeds={setTrialNeeds} upgradePlan={upgradePlan} setUpgradePlan={setUpgradePlan} rating={rating} setRating={setRating} SetFeedbackOpen={SetFeedbackOpen} SetFeedbackSubmittedOpen={SetFeedbackSubmittedOpen}/>



    </Modal>
  )
}
