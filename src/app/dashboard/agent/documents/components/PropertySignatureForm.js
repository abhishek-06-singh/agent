'use client'
import React from "react"
import { Form, Select, Switch, Button } from "antd"

const { Option } = Select

export default function PropertySignatureForm() {
  return (
    <Form
      layout="vertical"
      className="w-full px-4 sm:px-6 md:px-6 space-y-6"
    >
      {/* Select Property */}
      <Form.Item
        label={
          <span className="text-sm text-textnormal sm:text-base font-medium">
            Select Property<span className="text-textnormal">*</span>
          </span>
        }
        name="property"
        rules={[{  message: "Please select a property" }]}
      >
        <Select
          placeholder="Select Property"
          className="rounded-lg text-sm sm:text-base h-12"
          size="large"
        >
          <Option value="property1">Property 1</Option>
          <Option value="property2">Property 2</Option>
        </Select>
      </Form.Item>

      {/* Request Signature */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <div>
          <p className="text-sm sm:text-base font-medium">Request Signature</p>
          <p className="text-xs sm:text-sm text-gray-500">
            Enable to request e-signatures from selected contact
          </p>
        </div>
        <Switch className="scale-95 sm:scale-100" />
      </div>

      {/* Leads/Contacts */}
      <Form.Item
        label={
          <span className="text-sm sm:text-base font-medium">
            Leads/Contacts linked to selected property
            <span className="text-textnormal">*</span>
          </span>
        }
        name="contacts"
        rules={[{ message: "Please select a contact" }]}
      >
        <Select
          placeholder="Search Leads / Contacts..."
          showSearch
          className="rounded-lg text-sm sm:text-base"
          size="large"
        >
          <Option value="lead1">Lead 1</Option>
          <Option value="lead2">Lead 2</Option>
        </Select>
      </Form.Item>

      {/* Add Contact Button */}
      <Button
        type="default"
        className="border border-gray-300 px-4 py-2 rounded-md text-sm sm:text-base hover:scale-95 transition-transform"
      >
        + Add Contact
      </Button>
    </Form>
  )
}
