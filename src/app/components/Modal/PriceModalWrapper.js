// Modals/PriceModalWrapper.tsx
import { Modal } from 'antd'
import React from 'react'
import Pricing_Modal from '../../Modal_Components/PriceModal_components/PriceModal'

export default function PriceModalWrapper({
  isModalOpen,
  handleCancel,
  showModal,
}) {
  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      centered
      width={900}
    >
      <Pricing_Modal showModal={showModal} />
    </Modal>
  )
}
