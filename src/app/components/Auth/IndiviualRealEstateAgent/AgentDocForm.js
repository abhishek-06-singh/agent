'use client'
import React from 'react'
import { motion } from "framer-motion"
import Progressbar from '../Shared_AuthComponents/Progressbar'
import SetupHeading from '../Shared_AuthComponents/SignupSetupHeading'
import BackSubmit from '../Shared_AuthComponents/BackSubmit'
import UploadDoc from './UploadDoc'

export default function AgentDocForm() {
  return (
     <motion.div
                className="flex-1 flex flex-col justify-center"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
    <div className="max-w-4xl mx-auto my-10 p-1 md:p-2 lg:p-6  ">
      <div className="w-full  mb-6">
        <Progressbar no={2} progress={66.66} desc={'Document Submission'} />
      </div>
      <div className="w-full flex items-center  p-6  bg-cardbg border justify-center rounded-xl">

        <div className="w-full flex flex-col">
          <div className="w-full flex items-center justify-center my-4">
            <SetupHeading
              title={'Upload Your Verification Documents'}
              desc={
                <>
                  Please upload the required documents below to verify your
                  professional identity. <br />
                  <p>
                    This helps ensure platform credibility and regulatory
                    compliance.
                  </p>
                </>
              }
            />
          </div>
          <UploadDoc />
          <BackSubmit back_link={"/agentsignup"} submitlink={"/approvalform"} />
        </div>
      </div>
    </div>
    </motion.div>
  )
}
