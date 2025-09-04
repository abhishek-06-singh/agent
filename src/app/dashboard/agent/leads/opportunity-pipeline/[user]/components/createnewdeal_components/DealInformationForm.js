'use client'

import React from 'react'
import {  Input, Select, DatePicker, Form, Row, Col } from 'antd'

const { Option } = Select

export default function DealInformationForm() {
  return (
      <div className="bg-cardbg py-4 px-6 rounded-xl shadow-md w-full border border-bordercolor mx-auto">
        <h2 className="text-lg font-semibold mb-6">Deal Information</h2>

        <Form layout="vertical">
          <Row gutter={[24, 2]}> 
            {/* Deal Title */}
            <Col xs={24} sm={12}>
              <Form.Item className='font-semibold no-label-margin' label="Deal Title*" name="dealTitle" rules={[{  message: 'Please enter deal title' }]}>
                <Input className='h-12' placeholder="Enter Deal Title" />
              </Form.Item>
            </Col>

            {/* Property */}
            <Col xs={24} sm={12}>
              <Form.Item className='font-semibold no-label-margin' label="Property" name="property">
                <Select className='h-12' placeholder="Select property" allowClear>
                  <Option value="property1">Property 1</Option>
                  <Option value="property2">Property 2</Option>
                  <Option value="property3">Property 3</Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Deal Value */}
            <Col xs={24} sm={12}>
              <Form.Item className='font-semibold no-label-margin' label="Deal Value*" name="dealValue" rules={[{  message: 'Please enter deal value' }]}>
                <Input className='h-12' placeholder="Enter Deal Value" />
              </Form.Item>
            </Col>

            {/* Deal Stage */}
            <Col xs={24} sm={12}>
              <Form.Item className='font-semibold no-label-margin' label="Deal Stage*" name="dealStage" rules={[{  message: 'Please select deal stage' }]}>
                <Select className='h-12' defaultValue="New">
                  <Option value="New">New</Option>
                  <Option value="Negotiation">Negotiation</Option>
                  <Option value="Closed">Closed</Option>
                </Select>
              </Form.Item>
            </Col>

            {/* Expected Closing Date */}
            <Col xs={24} sm={12}>
              <Form.Item className='font-semibold no-label-margin' label="Expected Closing Date" name="closingDate">
                <DatePicker className='h-12' style={{ width: '100%' }} placeholder="Select Date" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
  )
}
