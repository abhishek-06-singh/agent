import React from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function BackButton() {
    return(
        <div className="max-w-7xl mx-auto ">
            <div className="flex justify-start items-center pt-3">
                 <Link href="/agents_agencies">
             <div className="flex items-center space-x-1 border border-bordercolor rounded-md px-2 py-1">
               
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5  text-textnormal  cursor-pointer" />
                <span className="text-textnormal text-xs md:text-sm text-center lg:text-base">Back</span>
               
                </div>
                 </Link>
                
            </div>
        </div>
    )
}