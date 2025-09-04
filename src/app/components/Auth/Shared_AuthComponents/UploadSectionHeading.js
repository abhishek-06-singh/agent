import React from 'react'
import Image from 'next/image'
import  info  from '../../../images/info.svg'
export default function UploadSectionHeading({index,section}){
    return(
        
            
              <div className="w-full flex items-center">
             
                  <div
                    key={index}
                    className="w-full flex flex-col items-start justify-start p-6"
                  >
                    <div className="flex space-x-2 mb-5">
                        <div className='flex space-x-1 space-y-1 items-center justify-center'>
                      <h2 className="text-xs md:text-sm text-primary">{section.title}</h2>
                      <p className="text-xs  text-important">{section.important}</p>
                      </div>
                      <div className="w-3 md:w-4 md:h-4 flex items-center md:justify-center">
                        <Image src={info} alt='info' className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-xs text-textnormal">
                      {section.description}
                    </p>
                  </div>
                </div>
            
    )
}