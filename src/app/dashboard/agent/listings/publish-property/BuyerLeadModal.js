'use client'

import { useState } from 'react'
import { Modal, Input } from 'antd'
import { X } from 'lucide-react'

export default function BuyerLeadModal({ isOpen, onClose }) {
  const [search, setSearch] = useState('')

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      closeIcon={<X size={30} className="text-textnormal" />}
      className="rounded-2xl overflow-hidden bg-background "
    >
      {/* Title */}
      <div className="bg-background p-6 rounded-2xl ">
        {' '}
        <h2 className="font-montserrat font-semibold text-[24px] leading-[150%] tracking-[0%] text-textheading mb-4 mt-10">
          Select Buyer Lead/Contact
        </h2>
        {/* Label */}
        <p className="text-sm text-textheading mb-2 ">
          Select Agent or Contact
        </p>
        {/* Search Input */}
        <Input
          placeholder="Search by name or email mt-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-10 rounded-lg mb-3"
        />
        {/* Add Contact Button */}
        <button className="border border-textnormal w-1/2 h-8 rounded-lg text-sm text-textheading hover:scale-95 transition-transform mb-6 mt-2">
          + Add New Contact
        </button>
        {/* Footer Buttons */}
        <div className="flex justify-between mt-2">
          <button
            className="border border-textnormal bg-background h-10 px-10 rounded-lg text-sm text-textheading hover:scale-95 transition-transform"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-textheading text-background h-10 px-10 rounded-lg text-sm font-medium hover:scale-95 transition-transform"
            onClick={() => alert('Next clicked')}
          >
            Next →
          </button>
        </div>
      </div>
    </Modal>
  )
}
