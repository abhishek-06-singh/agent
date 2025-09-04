import React from 'react'
import SignupHeader from '../components/Auth/Shared_AuthComponents/SignupHeader'
import SignupFooter from '../components/Auth/Shared_AuthComponents/SignupFooter'
import DocumentReviewForm from '../components/Auth/Review&Approval(Pending)/DocumentReviewForm'

export default function ApprovalForm() {

  return (
    <div className=" min-h-screen w-full bg-background  flex flex-col">
      <SignupHeader />

      <DocumentReviewForm />

      <SignupFooter />
    </div>
  )
}
