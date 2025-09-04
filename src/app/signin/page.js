import React from 'react'
import BackToHomeLink from '../components/Shared/BackToHomeLink'
import SignInCard from '../components/Auth/SignIn/SignInCard'
import SecurityNotice from '../components/Auth/SignIn/SecurityNotice'
import LeftPanel from '../components/Shared/LeftPanel'
import Link from 'next/link'

export default function SignIn() {
  return (
    <div className="h-screen flex x w-full">
      <LeftPanel />

      <div className=" relative lg:w-7/12 md:w-full w-full flex items-center justify-center p-8 ">
        <div className="w-full md:max-w-md lg:max-w-lg space-y-8">
          {/* Link with fade-in from top */}

          <BackToHomeLink />

          <SignInCard />

          {/* Security Notice - slow fade */}

          <SecurityNotice />
        </div>
      </div>
    </div>
  )
}
