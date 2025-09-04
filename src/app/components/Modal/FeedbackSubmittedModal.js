import { Modal } from "antd";
import React from 'react'
import FeedbackSubmitted_Page from "../../Modal_Components/FeedbackSubmitted_ModalComponents/FeedbackSubmited_Page";

export default function FeedbackSubmittedModal({feedback,feedbackImprove,trialNeeds,upgradePlan,rating,FeedbackSubmittedOpen,SetFeedbackSubmittedOpen}) {



  const handleCancel = () => SetFeedbackSubmittedOpen(false);
  return (
   <Modal
      open={FeedbackSubmittedOpen}
      onCancel={handleCancel}
      footer={null}
      centered
      width={550}
    >
        <FeedbackSubmitted_Page SetFeedbackSubmittedOpen={SetFeedbackSubmittedOpen} feedback={feedback} feedbackImprove={feedbackImprove} trialNeeds={trialNeeds} upgradePlan={upgradePlan} rating={rating} />



    </Modal>
  )
}
