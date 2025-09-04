import { Modal } from "antd";
import TrialModalPage from "../../Modal_Components/TrialModal_Components/TrialModalPage";
import React from 'react'

export default function Trial_Modal({trialOpen,SetTrialOpen}) {
    //  const showTrialModal = () => SetTrialOpen(true);
  const handleCancel = () => SetTrialOpen(false);
  return (
   <Modal
      open={trialOpen}
      onCancel={handleCancel}
      footer={null}
      centered
      width={450}
    >
    <TrialModalPage/>
    </Modal>
  )
}
