import React from "react";
import LogoSection from "../../components/navbar/navbarComponents/LogoSection";

export default function FeedbackCard(){
    

    return(<div className="mb-2 flex flex-col items-center space-y-2 justify-center">
         <div className="flex justify-center w-[154px] h-[54px] "><LogoSection/></div>
         <div className="flex flex-col items-center justify-center ">
         <h4 className="text-center text-textnormal text-xl px-5 font-bold mb-1">Thank you for trying</h4>
         <h4 className="text-center text-textnormal text-xl px-5 font-bold mb-2">Alianza Black Dog!</h4>

         <p className="text-textnormal text-sm whitespace-nowrap text-center">We'd love your quick feedback to help us improve.</p>
         </div>
        
        </div>

    )
}