'use client'
import React from 'react'
import FollowUpCard from './FollowUpCard'
import DocumentSignature from './DocumentSignature'

const RightColumn = () => {
  return (
    <div className="w-full lg:w-4/12 flex flex-col items-start space-y-6">
      <FollowUpCard />
      <DocumentSignature />
    </div>
  )
}

export default RightColumn
