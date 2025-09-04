'use client'
import { useState } from 'react'
import { Modal, Button, Checkbox, Tag } from 'antd'
import { FileOutlined, PlusOutlined } from '@ant-design/icons'
import Image from 'next/image'
import fileLight from '../../../../components/icons/Lightmode_icons/leads-light/file-light.svg'
import fileDark from '../../../../components/icons/Darkmode_icons/leads-dark/file-dark.svg'
import AddDealComponent from './AddDealComponent'

export default function AddDealPage({ handleCancel }) {
  const [selectedDocs, setSelectedDocs] = useState([])

  const documents = [
    { id: 1, name: 'Purchase Agreement', tag: 'Offer Letter' },
    { id: 2, name: 'Inspection Report', tag: 'Inspection' },
  ]

  const handleCheck = (checkedValues) => {
    setSelectedDocs(checkedValues)
  }

  const handleSend = () => {
    console.log('Selected Docs:', selectedDocs) // for now just logs
    setOpen(false) // close after send
  }

  return (
    <div className="bg-cardbg px-8 pt-16 pb-6 rounded-lg">
      <h2 className="text-[24px] text-textheading font-semibold mb-2">
        Send Documents for Signature to Sarah Johnson
      </h2>

      <p className="text-textnormal text-xs mb-8">
        These documents will be sent for secure electronic signing. Signer will
        receive an email with a signing link.
      </p>
      <div className="my-4">
        <h3 className="text-textheading font-semibold text-[18px] mb-4">
          Documents to Send
        </h3>
        <Checkbox.Group
          value={selectedDocs}
          onChange={handleCheck}
          className="w-full flex text-textcheckbox flex-col space-y-3"
        >
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="flex  items-center gap-3 border border-bordercolor p-3 rounded-lg hover:shadow-sm transition"
            >
              <Checkbox value={doc.id} />
              <Image
                src={fileLight}
                alt="file"
                className="block dark:hidden w-5 h-5"
              />
              <Image
                src={fileDark}
                alt="file"
                className="hidden dark:block w-5 h-5"
              />

              <div className="flex-1">
                <p className="font-medium text-textheading">{doc.name}</p>
                <Tag className="text-black-500 bg-orange-300 rounded-md border-none text-xs px-2 py-0.5">
                  {doc.tag}
                </Tag>
              </div>
            </div>
          ))}
        </Checkbox.Group>
      </div>

      <Button icon={<PlusOutlined />} className=" text-xs bg-background mt-1 text-textnormal rounded-lg">
        Add New Document
      </Button>

      <AddDealComponent/>

      <div className="flex justify-end gap-3 mt-2">
        <Button
          onClick={handleCancel}
          className="rounded-lg bg-background text-textnormal w-[144.5px] py-5"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSend}
          className="bg-buttonbg text-background rounded-lg w-[144.5px] py-5"
        >
          Send
        </Button>
      </div>
    </div>
  )
}
