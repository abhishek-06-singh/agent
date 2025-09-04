import React from "react";
import Image from "next/image";
import cloud from "../../../images/cloud.svg"

export default function UploadBox({
  section,
  handleFiles,
  error,
  uploadedFile,
}) {   
  

    return(
        <div className='w-[95%] mx-auto mb-6 p-6 border-dotted border-[3px] border-bordercolor rounded-md' onDrop={(e)=>{e.preventDefault();

            handleFiles(section.title,e.dataTransfer.files);
        }}
        onDragOver={(e)=>{e.preventDefault();}}>
       <div className='flex flex-col items-center justify-center   '>
        <div className="w-10 h-10 flex justify-center items-center">
        <Image src={cloud} alt='cloud' className='w-8 h-8  text-authback' />
        </div>
        <p className='text-xs text-textnormal mb-2'> 
          Drag and drop files here or</p>
          <label className='text-background bg-buttonbg font-medium hover:bg-hoveroverbutton p-1.5 md:p-2 text-xs rounded-md cursor-pointer'>Browse Files

            <input type='file' className='hidden' onChange={(e) => handleFiles(section.title, e.target.files)}
            accept='.jpg,.jpeg,.png,.pdf'/>
          </label>
       
       {error && (
        <p className='text-red-500 text-sm mt-2'>{error}</p>
       )}

       {uploadedFile &&(
       <p className='text-green-600 text-xs md:text-sm mt-2'>Uploaded:{uploadedFile.name}</p>
        )}
       </div>

        </div>
    )
 }