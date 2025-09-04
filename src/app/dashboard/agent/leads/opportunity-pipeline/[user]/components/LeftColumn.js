'use client'
import React from 'react'
import AgentCard_Oppurtunity from './AgentCard_Oppurtunity'
import Deal_Oppurtunity from './Deal_Oppurtunity'

const LeftColumn = ({user}) => {
  return (
    <div className="w-full lg:w-8/12 flex flex-col items-start space-y-6">
      <AgentCard_Oppurtunity />
      <Deal_Oppurtunity user={user} />

    </div>
  )
}

export default LeftColumn
