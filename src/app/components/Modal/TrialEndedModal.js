import { Modal } from "antd";
import React from 'react'
import PricingModal from "../../Modal_Components/TrialEndedModal_Components/PriceModal";

export default function TrialEndedModal({trialEnded,SetTrialEnded}) {

    //  const showTrialModal = () => SetTrialOpen(true);
  const handleCancel = () => SetTrialEnded(false);
  return (
   <Modal
      open={trialEnded}
      onCancel={handleCancel}
      footer={null}
      centered
      width={900}
    >
    <PricingModal />
    </Modal>
  )
}
