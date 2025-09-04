'use client'
import React from 'react'
import { Card, Typography, List, Button, Space } from 'antd'
import { FileTextOutlined, EditOutlined } from '@ant-design/icons'
import {ConfigProvider} from 'antd'
import Image from 'next/image'
import pdf_light from '../../../../../components/icons/Lightmode_icons/leads-light/pdf_black.svg'
import pdf_dark from '../../../../../components/icons/Darkmode_icons/leads-dark/white_pdf.svg'
import signature_dark from '../../../../../components/icons/Darkmode_icons/leads-dark/signature-dark.svg'
import signature_light from '../../../../../components/icons/Lightmode_icons/leads-light/signature-light.svg'

const { Text } = Typography

const documents = [
  { id: 1, title: 'Purchase Agreement', time: '2 days ago' },
  { id: 2, title: 'Title Deed', time: '5 days ago' },
]

const DocumentSignature = () => {
  return (
       <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EEB887', // custom theme color
          borderRadius: 12,
        },
        components: {
          Steps: {
            colorPrimary: '#EEB887',
            colorText: '#000',
            colorTextActive: '#EEB887',
          },
        },
      }}
    >
    <Card className="w-full bg-cardbg rounded-lg shadow-sm border border-bordercolor p-4">
      {/* Heading */}
      <div className="text-textheading text-lg font-semibold mb-5">
        Documents Signatures
      </div>

      {/* Document List */}
      <List
        dataSource={documents}
        split={false}
        renderItem={(item) => (
          <List.Item className="!flex !flex-row !items-center !justify-start border border-bordercolor mb-4 rounded-lg px-4 py-3 gap-2">
            <FileTextOutlined className="pl-4 text-lg text-textnormal" />
            <div className="flex flex-col">
              <Text className="font-medium text-textheading">{item.title}</Text>
              <Text className="text-xs text-textnormal">{item.time}</Text>
            </div>
          </List.Item>
        )}
      />

      {/* Button */}
      <Button
        block
        className="text-background bg-buttonbg border-none rounded-lg h-10 mt-5 flex items-center justify-center"
      >
        <Image className="w-5 h-5 hidden dark:block " src={signature_dark} alt="signature" width={20} height={20} />
        <Image className="w-5 h-5 block dark:hidden" src={signature_light} alt="signature" width={20} height={20} />
        Send For Signature
      </Button>
    </Card></ConfigProvider>
  )
}

export default DocumentSignature
