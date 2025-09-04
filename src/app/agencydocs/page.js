import React from 'react'
import SignupHeader from '../components/Auth/Shared_AuthComponents/SignupHeader'
import SignupFooter from '../components/Auth/Shared_AuthComponents/SignupFooter'
import AgencyDocForm from '../components/Auth/RealEstateBrokerage/AgencyDocForm'

export default function AgencyUploadDocs() {
  return (
    <div className=" min-h-screen w-full bg-background  flex flex-col">
      <SignupHeader />

      <AgencyDocForm />

      <SignupFooter />
    </div>
  )
}
