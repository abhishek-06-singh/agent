'use client'
import RejectDocumentReview from "./RejectDocumentReview";
import Progressbar from "../Shared_AuthComponents/Progressbar";
import RejectContactSupport from "./RejectContactSupport";
import RejectSubmittedDocuments from "./RejectSubmittedDocuments";
import React from "react";
import { motion } from "framer-motion"


export default function RejectForm() {
  return (
    <motion.div
            className="flex-1 flex flex-col justify-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
    <div className="w-full max-w-4xl mx-auto">
      <div className="w-full px-2 md:px-4 my-16">
      <Progressbar  no={3} progress={100} desc={"Review & Approval"} />
      </div>
     <RejectDocumentReview/>
     <RejectSubmittedDocuments/>
     <RejectContactSupport/>
    </div></motion.div>
  )
}