import React from 'react'
import SignupHeader from '../components/Auth/Shared_AuthComponents/SignupHeader'
import SignupFooter from '../components/Auth/Shared_AuthComponents/SignupFooter'
import AgentDocForm from '../components/Auth/IndiviualRealEstateAgent/AgentDocForm'

export default function AgentUploadDocs() {
  return (
    <div className=" min-h-screen w-full bg-background flex flex-col">
      <SignupHeader />

      <AgentDocForm />

      <SignupFooter />
    </div>
  )
}
