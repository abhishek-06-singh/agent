import { Modal } from "antd";
import React from 'react'
import GuideModal_Page from "../../Modal_Components/GuideModal_Components/GuideModal_Page";

export default function GuideModal({GuideOpen,SetGuideOpen}) {

  const handleCancel = () => SetGuideOpen(false);
  return (
   <Modal
      open={GuideOpen}
      onCancel={handleCancel}
      footer={null}
      centered
      width={500}
    >
        <GuideModal_Page/>   
    </Modal>
  )
}
