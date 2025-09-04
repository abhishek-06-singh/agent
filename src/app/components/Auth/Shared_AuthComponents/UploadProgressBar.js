import React from "react";

export default function UploadProgressBar({UploadCount,Maxfiles}) {
    const progress = (UploadCount/Maxfiles)*100;
    return (
        <div className="w-full bg-lightgray p-1 rounded-lg mt-5 mb-8">
            <div className="w-[90%] mx-auto mt-2 ">
            <div className="flex justify-between text-xs md:text-sm items-center mx-auto mb-2 text-textnormal">
                <p>Files Uploaded</p>
                <p>{UploadCount}/{Maxfiles} maximum</p>
            </div>
            <div className="w-full mx-auto bg-progressbarbackground h-1 md:h-2 mb-3 rounded-r-full">
                <div className="bg-primary h-1 md:h-2 transition-all duration-300 rounded-r-full" style={{width: `${progress}%`}}></div>

            </div>
            </div>
        </div>
    )
}