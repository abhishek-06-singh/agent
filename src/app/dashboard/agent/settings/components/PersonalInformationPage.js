'use client'
import React from 'react'
import { Row, Col, Form, Input, Button, Upload, Avatar } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

export default function PersonalInformationForm() {
  return (
    <div className="bg-cardbg rounded-xl border border-bordercolor px-6 pt-4 pb-2 shadow-sm w-full">
      <h2 className="text-base font-semibold text-textnormal mb-6">
        Personal Information
      </h2>

      <Row className='mb-2'>
        {/* Left: Profile Picture + Upload Button */}
        <Col className="flex flex-row items-center gap-4">
          <Avatar
            size={100}
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="mb-2"
          />
          <Upload showUploadList={false}>
            <Button icon={<UploadOutlined />} className='bg-buttonbg text-background font-medium rounded-xl h-10'>
              Update Photo
            </Button>
          </Upload>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Form layout="vertical">
            <Row gutter={10}>
              {/* First Name */}
              <Col xs={24} md={12}>
                <Form.Item
                  label={<span className='text-textnormal'>First Name *</span>}
                  name="firstName"
                  initialValue="Sarah"
                  className=''
                  rules={[
                    {
                      message: 'Please input your first name!',
                    },
                  ]}
                >
                  <Input className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
                </Form.Item>
              </Col>

              {/* Last Name */}
              <Col xs={24} md={12}>
                <Form.Item
                  label={<span className='text-textnormal'>Last Name *</span>}
                  name="lastName"
                  initialValue="Johnson"
                  rules={[
                    { message: 'Please input your last name!' },
                  ]}
                >
                  <Input className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
                </Form.Item>
              </Col>

              {/* Email */}
              <Col xs={24} md={12}>
                <Form.Item
                  label={<span className='text-textnormal'>Email</span>}
                  name="email"
                  initialValue="sarah.johnson@gmail.com"
                >
                  <Input
                    disabled
                    className="rounded-xl h-10 !bg-shadow !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none"
                  />
                </Form.Item>
              </Col>

              {/* Phone Number */}
              <Col xs={24} md={12}>
                <Form.Item
                  label={<span className='text-textnormal'>Phone Number</span>}
                  name="phoneNumber"
                  initialValue="+1 (555) 123-4567"
                >
                  <Input className="rounded-xl h-10 !bg-cardbg !text-textnormal !focus:ring-0 !focus:border-textnormal !border-bordercolor !shadow-none !outline-none" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
