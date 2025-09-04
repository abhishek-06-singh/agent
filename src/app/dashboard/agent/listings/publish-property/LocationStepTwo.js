'use client'

import { Form, Input, Select, Row, Col } from 'antd'
import TextArea from 'antd/es/input/TextArea'

export default function LocationStepTwo({ onNext, onBack }) {
  const [form] = Form.useForm()

  return (
    <>
      <div className="p-6 bg-white rounded-xl shadow-sm border w-full">
        <h2 className="text-lg text-textheading font-semibold mb-1">
          Location & Address
        </h2>
        <p className="text-textnormal mb-6 text-sm">
          Pinpoint the exact address to make your property easily discoverable.
        </p>

        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          className="space-y-4"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Country"
                name="country"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select Country" className="h-12" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="City"
                name="city"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select City" className="h-12" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Region/State"
                name="region"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select Region/State" className="h-12" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="City"
                name="cityDuplicate"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select City" className="h-12" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Neighborhood"
            name="neighborhood"
            className="text-textheading font-semibold"
          >
            <Input placeholder="Enter Neighborhood" className="h-12" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            className="text-textheading font-semibold"
          >
            <TextArea rows={5} placeholder="Enter the address" />
          </Form.Item>

          <Form.Item
            label="Postal Code"
            name="postalCode"
            className="text-textheading font-semibold"
          >
            <Input placeholder="Enter Postal Code" className="h-12" />
          </Form.Item>

          <Form.Item
            label="Location Pin"
            name="locationPin"
            className="text-textheading font-semibold"
          >
            <div className="w-full h-40 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="text-black font-medium mb-1">
                  Interactive Map Preview
                </div>
                <div className="text-textnormal text-sm">
                  Click to set location pin
                </div>
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-10 mb-20">
        <button
          className="border border-gray-300 text-textheading p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform h-12 px-6"
          onClick={onBack}
        >
          ← Go back
        </button>
        <button
          className="bg-textheading text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform h-12 px-6"
          onClick={onNext}
        >
          Next : Property Features →
        </button>
      </div>
    </>
  )
}
