'use client'
import React from 'react'
import { useState } from 'react'
import AccountInformation from './AccountInformation'
import BackContinue from '../Shared_AuthComponents/BackContinue'
import Progressbar from '../Shared_AuthComponents/Progressbar'
import RadioButton from '../../utilis/RadioButton'
import SetupHeading from '../Shared_AuthComponents/SignupSetupHeading'
import agent from "../../../images/agent.svg";
import building from "../../../images/Frame.svg";
import { motion } from 'framer-motion'

export default function AgentSelectedForm() {
  const [selectedOption, setSelectedOption] = useState('false')
     const options = [
      {
        value: 'agent',
        title: 'Individual Real Estate Agent',
        description: 'Independent agent or working under a brokerage',
        name:"accountType",
        icon: agent,
      },
      {
        value: 'broker',
        title: 'Real Estate Brokerage/Agency',
        description: 'Company or agency managing multiple agents',
        name:"accountType",
        icon: building,
      },
    ];

     const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <motion.div
        className="flex-1 flex flex-col justify-center"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
    <div className="lg:max-w-4xl   md:max-w-4xl max-w-full mx-auto my-10 p-1 md:p-2 lg:p-6 ">
      <div className="w-full  mb-6">
        <Progressbar no={1} progress={33.33} desc={'Acount Creation'} />
      </div>
      <div className="w-full flex items-center  my-10 p-3 md:p-6 lg:p-6  bg-cardbg  border justify-center rounded-xl mx-auto">
        <div className="w-full flex  bg-cardbg flex-col">
          <div className="w-full flex items-center justify-center my-10">
            <SetupHeading
              title={'Create Your Account'}
              desc={
                'Join thousands of real estate professionals growing their business'
              }
            />
          </div>
          <div className="w-full flex flex-col gap-2 items-start">
            <p className="text-textnormal text-base md:text-lg lg:text-lg">
              I am:
            </p>
       {options.map((option) => (
                    <div
                      key={option.value}
                      className="w-full rounded-lg border p-2 md:p-4 lg:p-4"
                    >
                      <RadioButton
                        {...option}
                        checked={selectedOption === option.value}
                        onChange={() => handleOptionChange(option.value)}
                      />
                    </div>
                  ))}
          </div>
          <AccountInformation />
          <BackContinue back_link={'/signin'} Continue_link={'/agentdocs'} />
        </div>
      </div>
    </div></motion.div>
  )
}
