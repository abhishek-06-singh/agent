'use client'

import { Form, Select, Row, Col, InputNumber, Switch } from 'antd'

export default function PropertyFeaturesStepThree({ onNext, onBack }) {
  const [form] = Form.useForm()

  return (
    <>
      <div className="p-6 bg-background rounded-xl shadow-sm border w-full">
        <h2 className="text-lg text-textheading font-semibold mb-1">
          Property Features
        </h2>
        <p className="text-textnormal mb-6 text-sm">
          Highlight property features and amenities to showcase its value.
        </p>

        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          className="space-y-4"
        >
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                label="Bedrooms"
                name="bedrooms"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select" className="h-12">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <Select.Option key={num} value={num}>
                      {num}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Bathrooms"
                name="bathrooms"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select" className="h-12">
                  {[1, 2, 3, 4].map((num) => (
                    <Select.Option key={num} value={num}>
                      {num}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                label="Area (sq ft)"
                name="area"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select Area" className="h-12">
                  {[500, 1000, 1500, 2000, 2500, 3000].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value.toLocaleString()} sq ft
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Parking Spaces"
                name="parkingSpaces"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Enter Number" className="h-12">
                  {[0, 1, 2, 3, 4].map((num) => (
                    <Select.Option key={num} value={num}>
                      {num}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Year Built"
                name="yearBuilt"
                className="text-textheading font-semibold"
              >
                <Select placeholder="Select Year" className="h-12">
                  {Array.from({ length: 50 }, (_, i) => {
                    const year = new Date().getFullYear() - i
                    return (
                      <Select.Option key={year} value={year}>
                        {year}
                      </Select.Option>
                    )
                  })}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          {/* Amenities */}
          <div className="mt-4">
            <p className="text-textheading font-semibold mb-2">Amenities</p>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="airConditioning" valuePropName="checked">
                  <div className="flex justify-between items-center border rounded-lg p-3">
                    <span>❄️ Air Conditioning</span>
                    <Switch />
                  </div>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="pool" valuePropName="checked">
                  <div className="flex justify-between items-center border rounded-lg p-3">
                    <span>🏊 Pool</span>
                    <Switch />
                  </div>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="laundryRoom" valuePropName="checked">
                  <div className="flex justify-between items-center border rounded-lg p-3">
                    <span>👕 Laundry Room</span>
                    <Switch />
                  </div>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="gatedCommunity" valuePropName="checked">
                  <div className="flex justify-between items-center border rounded-lg p-3">
                    <span>🏠 Gated Community</span>
                    <Switch />
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </div>
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
          Next : Media →
        </button>
      </div>
    </>
  )
}
