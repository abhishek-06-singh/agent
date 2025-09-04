import React from 'react';
import Image from 'next/image'
import pdf_Light from '../../../../components/icons/Lightmode_icons/leads-light/pdf_black.svg'
import pdf_Dark from '../../../../components/icons/Darkmode_icons/leads-dark/white_pdf.svg'

const RecentlySigned = () => {
  const documents = [
    {
      id: 1,
      title: 'Purchase Agreement',
      signedTime: 'Signed 1 day ago',
      icon: (
        <>
          <Image src={pdf_Light} className="block dark:hidden w-6 h-6 " />
          <Image src={pdf_Dark} className='hidden dark:block w-6 h-6'></Image>
        </>
      ),
    },
    {
      id: 2,
      title: 'Purchase Agreement',
      signedTime: 'Signed 1 day ago',
      icon: (
        <>
          <Image src={pdf_Light} className="block dark:hidden w-6 h-6" />
          <Image src={pdf_Dark} className='hidden dark:block w-6 h-6'></Image>
        </>
      ),
    }
  ];

  return (
    <div className="bg-cardbg rounded-lg shadow-sm border border-bordercolor p-4 w-full">
      {/* Header */}
      <h3 className="text-sm font-semibold text-textheading mb-4">
        Recently Signed
      </h3>
      
      {/* Document List */}
      <div className="space-y-3 ">

        {documents.map((doc) => (
          <div 
            key={doc.id}
            className="flex items-start border border-bordercolor space-x-3 p-2  rounded-md cursor-pointer transition-colors"
          >
            {/* Document Icon */}
            <div className="flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center">
              <span className="text-lg">{doc.icon}</span>
            </div>
            
            {/* Document Info */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-primary truncate">

                {doc.title}
              </p>
              <p className="text-xs text-textnormal mt-1">
                {doc.signedTime}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlySigned;