
import React from 'react'

import BackToHomeLink from '../components/Shared/BackToHomeLink'
import SecurityNotice from '../components/Auth/SignIn/SecurityNotice'
import LeftPanel from '../components/Shared/LeftPanel'
import ForgetPasswordHeading from '../components/Auth/Forgetpassword/ForgetPasswordHeading'
import EmailInput from '../components/Auth/SignIn/EmailInput'
import ForgetPasswordButton from '../components/Auth/Forgetpassword/ForgetPasswordButton'
 
export default function ForgetPassword () {

  return (
    <div className="h-screen flex w-full">
      <LeftPanel />
 
      <div className="relative lg:w-7/12 md:w-full w-full flex items-center justify-center p-8 bg-background">

        <div className="w-full max-w-lg space-y-8">
          {/* Link with fade-in from top */}
        
            <BackToHomeLink />
         
 
          {/* Sign-in Card with slide-up and fade-in */}
          <ForgetPasswordHeading />
          <EmailInput />
          <ForgetPasswordButton />
          {/* Security Notice - slow fade */}
         
            <SecurityNotice />
         
        </div>
      </div>
    </div>
  )
}