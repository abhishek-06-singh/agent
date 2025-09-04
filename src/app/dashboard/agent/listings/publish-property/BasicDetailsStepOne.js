'use client'

import { Form, Input, Select, Row, Col, Button } from 'antd'
const { TextArea } = Input

export default function BasicDetailsStepOne({ onNext }) {
  const [form] = Form.useForm()

  return (
    <>
      <div className="p-6 bg-white rounded-xl shadow-sm border w-full">
        <h2 className="text-lg text-textheading font-semibold mb-1">
          Basic Details
        </h2>
        <p className="text-textnormal mb-6 text-sm">
          Provide a clear, marketable title and detailed description to attract
          buyers.
        </p>

        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          className="space-y-4"
        >
          <Form.Item
            label="Property Title"
            name="title"
            className="text-textheading font-semibold"
          >
            <Input placeholder="Enter Property Title" className="h-12" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            className="text-textheading font-semibold"
          >
            <TextArea
              rows={5}
              placeholder="Describe the property features and highlights"
            />
          </Form.Item>

          <Form.Item
            label="Property Type"
            name="propertyType"
            className="text-textheading font-semibold"
          >
            <Select placeholder="Select Property Type" className="h-12">
              <Select.Option value="house">House</Select.Option>
              <Select.Option value="apartment">Apartment</Select.Option>
              <Select.Option value="land">Land</Select.Option>
            </Select>
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Price"
                name="price"
                className="text-textheading font-semibold"
              >
                <Input placeholder="Enter Price" className="h-12" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Currency"
                name="currency"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select Currency" className="h-12">
                  <Select.Option value="inr">INR</Select.Option>
                  <Select.Option value="usd">USD</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>

        {/* Next Button */}
      </div>
      <div className="flex justify-end mt-10 mb-20">
        <button
          className="bg-textheading text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform h-12 px-6"
          onClick={onNext}
        >
          Next : Location →
        </button>
      </div>
    </>
  )
}
