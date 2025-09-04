'use client'

import { Modal, Input, Select, Button, ConfigProvider } from 'antd'
import { X, Mail } from 'lucide-react'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const { Option } = Select

const InviteModal = ({ open, onCancel, onConfirm }) => {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EEB887',
          borderRadius: 12,
        },
      }}
    >
      <Modal
        open={open}
        onCancel={onCancel}
        footer={null}
        closeIcon={<X className="text-black" />}
        centered
        className="rounded-lg bg-cardbg"
        width={450}
      >
        <div className="p-6 sm:p-8">
          {/* Title */}
          <h3 className="text-xl font-semibold mb-6">Invite External Collaborator</h3>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-2 font-medium">Email Address</label>
            <Input
              size="large"
              placeholder="johndoe@email.com"
              prefix={<Mail size={16} className="text-gray-400" />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md h-12 [&_.ant-input-prefix]:!text-textnormal"
            />
          </div>

          {/* Role Select */}
          <div className="mb-4">
            <label className="block mb-2 text-textnormal font-medium">Role/Purpose</label>
            <Select
              placeholder="Select Role"
              onChange={setRole}
                dropdownClassName="bg-cardbg border border-bordercolor [&_.ant-select-item-option-selected]:!bg-buttonbg [&_.ant-select-item-option-selected]:!text-background [&_.ant-select-item-option-active]:!bg-buttonbg [&_.ant-select-item-option-active]:!text-background"
            className="w-full h-12 [&_.ant-select-selector]:!bg-cardbg [&_.ant-select-selector]:!rounded-xl [&_.ant-select-selector]:!border-bordercolor [&_.ant-select-selection-item]:!text-textnormal [&_.ant-select-selector]:!focus:border-textnormal [&_.ant-select-selector]:!ring-0"
            suffixIcon={<ChevronDown className="w-4 h-4 text-textnormal" />}
            >
              <Option value="viewer">Viewer</Option>
              <Option value="editor">Editor</Option>
              <Option value="approver">Approver</Option>
            </Select>
          </div>

          {/* Footer Buttons */}
          <div className="w-full flex justify-center gap-3 pt-4">
            <Button
              type="default"
              onClick={onCancel}
              style={{ paddingTop: '20px', paddingBottom: '20px' }}
              className="w-1/2 border border-bordercolor "
            >
              Cancel
            </Button>
            <Button
              type="default"
             style={{ paddingTop: '20px', paddingBottom: '20px' }}
              className="w-1/2 bg-buttonbg text-background border border-bordercolor  hover:bg-black/80"
              onClick={() => onConfirm({ email, role })}
            >
              Send Invite
            </Button>
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  )
}

export default InviteModal
