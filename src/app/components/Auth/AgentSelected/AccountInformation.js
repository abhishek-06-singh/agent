import React from 'react'
import Emailverify from './Emailverify'
import FirstLastName from './FirstLastName'
import Checkbox from '../../utilis/Checkbox'
import SignsetupPassword from './SignupSetPassword'
import PhoneNumber from './PhoneNumber'


export default function AccountInformation() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sign in:')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-cardbg ">
      <p className="text-lg lg:text-xl text-textheading mt-5 lg:mt-10">
        Account Information
      </p>
      <FirstLastName />
      <PhoneNumber />

      <Emailverify />
      <SignsetupPassword />
      <Checkbox
        id="agree"
        label="I agree to the Terms & Conditions and Privacy Policy*"
      />
    </form>
  )
}
