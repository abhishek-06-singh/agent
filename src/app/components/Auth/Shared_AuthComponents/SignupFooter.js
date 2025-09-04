'use client'
import React from "react";
import { motion } from "framer-motion"
import LegalAndSupport from "./LegalAndSupport";
export default function SignupFooter() {
    return(
             <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
        <div className="w-full flex bg-footerbg justify-center items-center p-4  md:p-4 text-textnormal text-sm md:text-sm ">
            
        <div className='flex items-center '>
            <LegalAndSupport/>
        </div>
        </div>
        </motion.div>
    )
}