import React from 'react'
import SignupHeader from '../components/Auth/Shared_AuthComponents/SignupHeader'
import SignupFooter from '../components/Auth/Shared_AuthComponents/SignupFooter'
import AgencySelectedForm from '../components/Auth/AgencySelected/Agencyselectedform'

export default function AgencySignup() {
  return (
    <div className=" min-h-screen w-full bg-background  flex flex-col">
      <SignupHeader />

      <AgencySelectedForm />

      <SignupFooter />
    </div>
  )
}
