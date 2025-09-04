'use client'
import React from "react";
import ContactSupport from "./ContactSupport";
import DocumentReview from "./DocumentReview";
import Progressbar from "../Shared_AuthComponents/Progressbar";
import SubmittedDocuments from "./SubmittedDocuments";
import { motion } from "framer-motion"

export default function DocumentReviewForm() {
  return (
    <motion.div
            className="flex-1 flex flex-col justify-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
    <div className="w-full max-w-4xl mx-auto p-2 md:p-4">
      <div className="w-full my-16">
      <Progressbar  no={3} progress={100} desc={"Review & Approval"} />
      </div>
     <DocumentReview/>
     <SubmittedDocuments/>
     <ContactSupport/>
    </div></motion.div>
  )
}