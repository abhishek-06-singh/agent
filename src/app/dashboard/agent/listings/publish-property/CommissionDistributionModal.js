'use client'

import { useState } from 'react'
import { Modal, Input, Select, Button } from 'antd'
import { X, Trash2 } from 'lucide-react'
import CommissionSplit from './CommissionSplit'

const { Option } = Select

export default function CommissionDistributionModal({ isOpen, onClose }) {
  const [totalSaleValue, setTotalSaleValue] = useState(450000)
  const [splitType, setSplitType] = useState('percentage')
  const [agents, setAgents] = useState([
    {
      id: 1,
      name: 'SilverOak',
      role: 'You',
      split: 60,
      amount: 9000,
      avatar: '/avatar1.png',
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Lead Agent',
      split: 30,
      amount: 4000,
      avatar: '/avatar2.png',
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Sub-Agent',
      split: 10,
      amount: 1000,
      avatar: '/avatar3.png',
    },
  ])

  const handleRemoveAgent = (id) => {
    setAgents(agents.filter((agent) => agent.id !== id))
  }

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      centered
      width={700}
      closeIcon={<X size={30} className="text-textnormal" />}
      className="rounded-2xl overflow-hidden bg-background"
    >
      <div className="bg-background p-6 rounded-2xl">
        {/* Title */}
        <h2 className="font-montserrat font-semibold text-[24px] leading-[150%] text-textheading mb-4 mt-10">
          Commission Distribution
        </h2>

        {/* Total Sale Value */}
        <p className="text-sm text-textheading mb-2">Total Sale Value*</p>
        <Input
          value={`$${totalSaleValue.toLocaleString()}`}
          onChange={(e) => setTotalSaleValue(e.target.value)}
          className="h-10 rounded-lg mb-4"
        />

        {/* Split Type */}

        {/* Split Type */}
        <p className="text-sm text-textheading mb-2">Split Type</p>
        <div className="flex bg-gray-100 rounded-lg p-2 w-fit mb-4">
          <button
            onClick={() => setSplitType('percentage')}
            className={`px-4 py-1 rounded-md text-sm transition ${
              splitType === 'percentage'
                ? 'bg-background text-textheading'
                : 'text-placeholder'
            }`}
          >
            Percentage
          </button>
          <button
            onClick={() => setSplitType('fixed')}
            className={`px-4 py-1 rounded-md text-sm transition ${
              splitType === 'fixed'
                ? 'bg-background text-textheading'
                : 'text-placeholder'
            }`}
          >
            Fixed Amount
          </button>
        </div>

        {/* Commission Split */}
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm font-medium text-textheading">
            Commission Split
          </p>
          <Button className="bg-textheading text-background rounded-lg px-4 py-1 text-sm">
            + Add Agent
          </Button>
        </div>

        {/* Table */}
        <CommissionSplit />

        {/* Totals */}
        <div className="w-full mt-5">
          {/* Top Row */}
          <div className="flex justify-between text-sm font-medium mb-1">
            <p>Total Percentage</p>
            <p>100%</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-[6px] bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full bg-black w-full"></div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between text-sm font-medium mt-1">
            <p>Total Amount</p>
            <p>
              ${agents.reduce((sum, a) => sum + a.amount, 0).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex w-full justify-between mt-8 gap-10">
          <button
            className="border border-textnormal w-2/5 bg-background h-10 px-6 rounded-lg text-sm text-textheading hover:scale-95 transition-transform"
            onClick={onClose}
          >
            ← Go back
          </button>
          <button
            className="bg-textheading text-background w-2/5 h-10 px-6 rounded-lg text-sm font-medium hover:scale-95 transition-transform"
            onClick={() => alert('Finish & Mark as Sold clicked')}
          >
            Finish & Mark as Sold →
          </button>
        </div>
      </div>
    </Modal>
  )
}
