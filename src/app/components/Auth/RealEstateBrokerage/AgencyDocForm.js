'use client'
import React from 'react'
import Progressbar from '../Shared_AuthComponents/Progressbar'
import SetupHeading from '../Shared_AuthComponents/SignupSetupHeading'
import BackSubmit from '../Shared_AuthComponents/BackSubmit'
import AgencyUploadDoc from './AgencyUploadDoc'
import { motion } from "framer-motion"

export default function AgencyDocForm() {
  return (
      <motion.div
            className="  space-y-6 flex-1"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
    <div className="max-w-4xl mx-auto my-10 p-1 md:p-2 lg:p-6  ">
      <div className="w-full mb-6">
        <Progressbar no={2} progress={66.66} desc={'Document Submission'} />
      </div>
      <div className="w-full flex items-center p-1 md:p-2 lg:p-6  border justify-center rounded-xl">
        <div className="w-full flex flex-col">
          <div className="w-full flex items-center justify-center my-4  md:px-20">
            <SetupHeading
              title={'Upload Agency Verification Documents'}
              desc={'Please upload the required documents below to verify your real estate brokerage. This ensures your agency is authorized to operate on the platform and receive commissions.'}
            />
          </div>
          <AgencyUploadDoc/>
          <BackSubmit back_link={"/agencysignup"} submitlink={"/approvalform"} />
        </div>
      </div>
    </div>
    </motion.div>
  )
}
