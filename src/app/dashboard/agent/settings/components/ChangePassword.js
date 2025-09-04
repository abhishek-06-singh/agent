'use client'
import React from 'react'
import { Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'

export default function ChangePassword() {
  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor p-4 shadow-md  w-full">
      <h2 className="text-base font-semibold text-textheading mb-6">Change Password</h2>

      <form className="flex flex-col gap-4">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium mb-1 text-textnormal">
            Current Password
          </label>
          <Input.Password
            placeholder="Enter Current Password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
          />
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium mb-1 text-textnormal">
            New Password
          </label>
          <Input.Password
            placeholder="Enter New Password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
           className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
          />
        </div>

        {/* Confirm New Password */}
        <div>
          <label className="block text-sm font-medium mb-1 text-textnormal">
            Confirm New Password
          </label>
          <Input.Password
            placeholder="Confirm New Password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
          />
        </div>
      </form>
    </div>
  )
}
