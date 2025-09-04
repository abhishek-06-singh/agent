'use client'

import { Form, Input, Upload, Button } from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'

const { Dragger } = Upload

export default function MediaStepFour({ onBack }) {
  const [form] = Form.useForm()

  const uploadProps = {
    name: 'file',
    multiple: true,
    maxCount: 7,
    accept: '.jpg,.png,.pdf',
    beforeUpload: (file) => {
      const isAllowed = ['image/jpeg', 'image/png', 'application/pdf'].includes(
        file.type
      )
      if (!isAllowed) {
        alert('Only JPG, PNG, or PDF files are allowed!')
        return Upload.LIST_IGNORE
      }
      if (file.size / 1024 / 1024 > 5) {
        alert('File must be smaller than 5MB!')
        return Upload.LIST_IGNORE
      }
      return true
    },
  }

  return (
    <>
      <div className="p-6 bg-background rounded-xl shadow-sm border w-full">
        <h2 className="text-lg text-textheading font-semibold mb-1">
          Images & Media
        </h2>
        <p className="text-textnormal mb-6 text-sm">
          Upload images or videos to give a visual impression of the property.
        </p>

        <Form
          form={form}
          layout="vertical"
          requiredMark={false}
          className="space-y-4"
        >
          <Form.Item
            label="Property Title"
            name="propertyTitle"
            className="text-textheading font-semibold"
          >
            <p className="text-textnormal mb-1 text-sm font-thin">
              Upload your RUN – Front and Back (JPG, PNG, PDF | Max 5MB per
              file)
            </p>
            <Dragger {...uploadProps} className="rounded-xl">
              <p className="ant-upload-drag-icon">
                <InboxOutlined className="text-textheading text-2xl" />
              </p>
              <p className="ant-upload-text">
                Drag and drop your files here, or
              </p>
              <p className="ant-upload-hint text-sm text-textnormal">
                JPG, PNG, PDF only. Max 5MB per file. Up to 7 images.
              </p>
              <button className="mt-2 bg-textheading text-background rounded-lg h-10 gap-3 px-3 ">
                Upload Images
              </button>
            </Dragger>
          </Form.Item>

          <Form.Item
            label="Video Link (Optional)"
            name="videoLink"
            className="text-textheading font-semibold"
          >
            <Input placeholder="Enter YouTube video URL" className="h-12" />
            <p className="text-textnormal text-sm mt-1 font-thin">
              Add a virtual tour or property video
            </p>
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
      </div>
    </>
  )
}
