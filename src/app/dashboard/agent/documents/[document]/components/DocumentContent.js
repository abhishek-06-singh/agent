'use client'

import React from 'react'
import Heading from '../../../../components/minicomponents/Heading'
import { EditIcon, Plus, Trash } from 'lucide-react'
import LeftColumnDocument from './LeftColumnDocument'
import RightColumnDocument from './RightColumnDocument'


const DocumentContent = ({doc}) => {
  return (
    <>
    <div className="flex flex-col lg:flex-row w-full gap-6 px-10 py-6">
    <LeftColumnDocument doc={doc} />
    <RightColumnDocument />


    </div>
    </>
  )
}

export default DocumentContent
