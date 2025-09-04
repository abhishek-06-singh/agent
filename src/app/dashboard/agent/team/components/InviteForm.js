'use client'

import { useState } from 'react'
import { Input, Select } from 'antd'

const { Option } = Select

const InviteForm = ({ activeTab }) => {
  const [email, setEmail] = useState('')
  const [inviteDays, setInviteDays] = useState('')
  const [property, setProperty] = useState('')
  const [role, setRole] = useState('')

  return (
    <div className="mt-6 border rounded-xl p-6 relative">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-textheading font-semibold text-lg">
            {activeTab === 'subAgent'
              ? 'Invite a Sub-Agent'
              : 'Invite an External Collaborator'}
          </h3>
          <p className="text-sm text-textnormal mt-1">
            {activeTab === 'subAgent'
              ? 'Generate a unique referral link to invite a sub-agent to join your team. Each link is single-use and expires after 7 days.'
              : 'Generate a unique referral link to invite an external collaborator to join your team. Each link is single-use and expires after 7 days.'}
          </p>
        </div>
        {/* Expiry badge */}
        {activeTab !== 'subAgent' && (
          <span className="text-xs bg-gray-100 border px-3 py-1 rounded-lg text-textnormal">
            Expires in 7 days
          </span>
        )}
      </div>

      {/* Form Fields */}
      {activeTab !== 'subAgent' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-textheading">
              Enter Email
            </label>
            <Input
              placeholder="Enter email to send directly"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-lg border border-gray-300 focus:!border-black focus:!shadow-none"
            />
          </div>

          {/* Invite For */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-textheading">
              Invite For
            </label>
            <Select
              placeholder="Number of Days"
              value={inviteDays}
              onChange={setInviteDays}
              className="h-12 w-full [&_.ant-select-selector]:h-12 [&_.ant-select-selector]:rounded-lg 
                 [&_.ant-select-selector]:border-gray-300 
                 [&_.ant-select-selector:hover]:!border-black 
                 [&_.ant-select-selector:focus-within]:!border-black"
              dropdownStyle={{ borderRadius: 8 }}
            >
              <Option value="7">7 Days</Option>
              <Option value="14">14 Days</Option>
              <Option value="30">30 Days</Option>
            </Select>
          </div>

          {/* Select Property */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-textheading">
              Select Property
            </label>
            <Select
              placeholder="All Properties"
              value={property}
              onChange={setProperty}
              className="h-12 w-full text-textnormal
                 [&_.ant-select-selector]:h-12 [&_.ant-select-selector]:rounded-lg 
                 [&_.ant-select-selector]:border-gray-300 
                 [&_.ant-select-selector:hover]:!border-black 
                 [&_.ant-select-selector:focus-within]:!border-black"
              dropdownStyle={{ borderRadius: 8 }}
            >
              <Option value="all">All Properties</Option>
              <Option value="villa">Luxury Villa</Option>
              <Option value="apartment">City Apartment</Option>
            </Select>
          </div>

          {/* Role / Purpose */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-textheading">
              Role/Purpose
            </label>
            <Select
              placeholder="Select Role"
              value={role}
              onChange={setRole}
              className="h-12 w-full 
                 [&_.ant-select-selector]:h-12 [&_.ant-select-selector]:rounded-lg 
                 [&_.ant-select-selector]:border-gray-300 
                 [&_.ant-select-selector:hover]:!border-black 
                 [&_.ant-select-selector:focus-within]:!border-black"
              dropdownStyle={{ borderRadius: 8 }}
            >
              <Option value="lawyer">Lawyer</Option>
              <Option value="architect">Architect</Option>
              <Option value="marketing">Marketing Specialist</Option>
            </Select>
          </div>
        </div>
      ) : (
        // Sub-Agent form (your existing style)
        <div className="flex items-center gap-2 mt-4">
          <Input
            placeholder="Enter email to send directly"
            className="flex-1 h-12"
          />
          <button className="bg-textheading text-background p-2 h-12 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform w-44">
            Send Invite
          </button>
        </div>
      )}

      {/* Send button for external */}
      {activeTab !== 'subAgent' && (
        <button className="bg-textheading text-background p-2 h-12 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform w-44 mt-6">
          Send Invite
        </button>
      )}

      {/* Permissions/Info box */}
      <div className="mt-6 bg-gray-100 p-4 rounded-lg text-sm text-textnormal">
        {activeTab === 'subAgent' ? (
          <>
            <p className="font-medium">⚠️ Sub-agent permissions:</p>
            <ul className="list-disc ml-5 mt-1">
              <li>Limited read-only access to listings you explicitly share</li>
              <li>You can revoke access anytime</li>
            </ul>
          </>
        ) : (
          <>
            <p className="font-medium">⚠️ Limited access:</p>
            <ul className="list-disc ml-5 mt-1">
              <li>
                Temporary specific invitations (lawyers, architects, marketing
                specialists)
              </li>
              <li>General access for all external collaborators</li>
              <li>View-only access to properties assigned by you</li>
              <li>Can join your chats or group discussions</li>
            </ul>
          </>
        )}
      </div>
    </div>
  )
}

export default InviteForm
