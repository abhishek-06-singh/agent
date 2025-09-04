'use client'
import React, { useState } from 'react'
import Emailverify from '../AgentSelected/Emailverify'
import FirstLastName from '../AgentSelected/FirstLastName'
import Checkbox from '../../utilis/Checkbox'
import SignsetupPassword from '../AgentSelected/SignupSetPassword'
import ExperienceOption from './Experienceoptions'
import Expertise from './AgencyExpertise'
import PhoneNumber from '../AgentSelected/PhoneNumber'

export default function Agencyaccountinfo() {
  const [isOpen, setIsOpen] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sign in:')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-xl text-textheading mt-10">Account Information</p>
      <FirstLastName />
      <PhoneNumber />
      <Emailverify />
      <SignsetupPassword />
      <Expertise />
      <ExperienceOption isOpen={isOpen} setIsOpen={setIsOpen} />
      <Checkbox id="agree" label="I agree to the Terms & Conditions and Privacy Policy*" />
    </form>
  )
}
