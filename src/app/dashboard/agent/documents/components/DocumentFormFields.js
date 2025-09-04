'use client'
import React from "react"
import { Form, Input, Select } from "antd"

const { Option } = Select

export default function DocumentFormFields() {
  return (
    <Form
      layout="vertical"
      className="w-full px-4 sm:px-6 md:px-6"
    >
      {/* Document Name */}
      <Form.Item
        label={<span className="w-full text-textnormal text-sm sm:text-base font-medium">Document Name<span className="text-textnormal">*</span></span>}
        name="documentName"
        rules={[{  message: "Please enter document name" }]}
      >
        <Input 
          placeholder="Enter Document Name"
          className="rounded-lg border border-bordercolor text-textnormal text-sm sm:text-base py-2 sm:py-3"

        />
      </Form.Item>

      {/* Document Type */}
      <Form.Item
        label={<span className="text-sm sm:text-base font-medium">Document Type<span className="text-textnormal">*</span></span>}
        name="documentType"
        rules={[{  message: "Please select document type" }]}
      >
        <Select
          placeholder="Select Document Type"
          className="rounded-lg text-sm sm:text-base"
          size="large"
        >
          <Option value="agreement">Agreement</Option>
          <Option value="contract">Contract</Option>
          <Option value="invoice">Invoice</Option>
        </Select>
      </Form.Item>
    </Form>
  )
}
