'use client'

import { useState } from 'react'
import { Modal, Input, DatePicker } from 'antd'
import { X } from 'lucide-react'

export default function SaleValueModal({ isOpen, onClose, property }) {
  const [price, setPrice] = useState('')
  const [date, setDate] = useState(null)

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      closeIcon={<X size={30} className="text-textnormal" />}
      className="rounded-2xl overflow-hidden bg-background"
    >
      <div className="bg-background p-6 rounded-2xl">
        {/* Title */}
        <h2 className="font-montserrat font-semibold text-[24px] leading-[150%] tracking-[0] text-textheading mb-4 mt-10">
          Enter Sale Value
        </h2>

        {/* Property Info Box */}
        <div className="border border-gray-200 rounded-xl p-4 mb-6 bg-background">
          <div className="flex justify-between text-sm mb-2">
            <span className="border-textnormal">Property Name:</span>
            <span className="text-textheading">{property?.name || '—'}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="border-textnormal">Property ID:</span>
            <span className="text-textheading">{property?.id || '—'}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="border-textnormal">Address:</span>
            <span className="text-textheading">{property?.address || '—'}</span>
          </div>
        </div>

        {/* Final Sale Price */}
        <label className="text-sm text-textheading mb-1 block">
          Final Sale Price<span className="text-red-500">*</span>
        </label>
        <Input
          placeholder="Enter the Sale price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="h-10 rounded-lg mb-4"
        />

        {/* Date of Sale */}
        <label className="text-sm text-textheading mb-1 block">
          Date of Sale<span className="text-red-500">*</span>
        </label>
        <DatePicker
          placeholder="Select Date"
          value={date}
          onChange={(value) => setDate(value)}
          className="w-full h-10 rounded-lg mb-6"
        />

        {/* Footer Buttons */}
        <div className="flex justify-between mt-4">
          <button
            className="flex items-center justify-center gap-2 border border-textnormal bg-background h-10 px-6 rounded-lg text-sm text-textheading hover:scale-95 transition-transform"
            onClick={onClose}
          >
            ← Go back
          </button>
          <button
            className="bg-textheading text-background h-10 px-10 rounded-lg text-sm font-medium hover:scale-95 transition-transform"
            onClick={() =>
              alert(
                `Submitted Sale: $${price}, Date: ${date?.format('YYYY-MM-DD')}`
              )
            }
          >
            Next →
          </button>
        </div>
      </div>
    </Modal>
  )
}
