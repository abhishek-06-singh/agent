'use client'

import { Card, Avatar, Tag } from 'antd'
import { MessageOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { Check } from 'lucide-react'
import NewDealForm from "./NewDealForm"


const NewDealCard
 = () => {
  return (
    <>
   <Card className="w-full bg-cardbg rounded-2xl shadow-sm border border-bordercolor p-6">
<div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
  {/* Left Section: Avatar + Info */}
  <div className="flex flex-col lg:flex-row items-center gap-4">
    <Avatar
      size={72}
      src="https://randomuser.me/api/portraits/women/44.jpg"
    />
    <div className="flex flex-col justify-center gap-1">
      <div className='flex flex-col lg:flex-row  gap-3'>
      <h3 className="m-0 font-semibold text-[24px] text-textheading">
        Sarah Johnson
      </h3>
      <div className="flex items-center gap-2">
        <Tag className="px-2 py-1 bg-cardbg rounded-full border text-green-500 border-green-500 text-xs flex items-center gap-1">
          <Check className="w-3 h-3 text-white bg-green-500 rounded-full" />
          Verified
        </Tag>
      </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-textnormal">
        <span className="flex items-center gap-2">
          <PhoneOutlined /> (555) 123-4567
        </span>
        <span className="flex items-center gap-2">
          <MailOutlined /> sarah@prestigerealty.com
        </span>
      </div>
    </div>
  </div>

  {/* Right Section: Button */}
<div className="w-full md:w-auto flex justify-start md:justify-end mt-4 md:mt-0 -translate-y-6 md:-translate-y-6">
  <button className="bg-buttonbg text-background px-5 py-2 rounded-lg flex text-sm items-center gap-2 hover:scale-95 transition-transform w-full md:w-auto justify-center">
    <MessageOutlined /> Message
  </button>
</div>

</div>

    </Card>
    <NewDealForm/>
    </>
  )
}

export default NewDealCard

