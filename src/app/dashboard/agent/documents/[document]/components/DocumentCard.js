'use client'
import { Download, FileText, Trash2, PenTool } from 'lucide-react'
import Image from 'next/image'
import signature_light from '../../../../components/icons/Lightmode_icons/leads-light/signature-light.svg'
import signature_dark from '../../../../components/icons/Darkmode_icons/leads-dark/signature-dark.svg'
import pdf_Light from '../../../../components/icons/Lightmode_icons/leads-light/pdf_black.svg'
import pdf_Dark from '../../../../components/icons/Darkmode_icons/leads-dark/white_pdf.svg'


export default function DocumentCard({ doc }) {
  return (
    <div className="bg-cardbg  border border-bordercolor rounded-xl shadow-md p-6 w-full">

      {/* Top section */}
      <div className="flex gap-3 items-center justify-start">
        <Image src={pdf_Light} className='block dark:hidden w-8 h-8'></Image>
        <Image src={pdf_Dark} className='hidden dark:block w-8 h-8'></Image>

        <div>
          <h3 className="text-lg font-semibold text-textheading">{doc}</h3>
          <p className="text-sm text-textnormal mb-1">
            Uploaded by {doc.uploadedBy || 'Uploaded By John Smith'  }  
          </p>
          <p className='text-xs text-textnormal mb-1'>{doc.size || '2.4 MB'}</p>
          <p className="text-xs text-textnormal">{doc.uploadDate || 'Jan 15, 2025'}</p>

        </div>
      
      </div>

      {/* Info section */}
      <div className="mt-4 flex items-center text-textnormal justify-between text-sm">
        <p>
          Last Interaction : <span className="text-textnormal font-medium">{doc}</span>

        </p>
        <div className="flex items-center">

        <span className="mr-2 text-sm text-textnormal">Status : </span>

        <div
          className={`px-3 py-1 rounded-full text-xs text-textnormal font-medium ${
            doc.status === 'Signed'
              ? 'bg-green-500 text-white'
              : doc.status === 'Pending'
              ? 'bg-yellow-500 text-white'
              : 'bg-bordercolor text-black'
          }`}
        >
          {doc.status || 'Signed'}

        </div>
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-5 flex gap-3 flex-wrap">
        <button className="flex bg-buttonbg text-background items-center gap-2 px-4 py-2 border border-bordercolor rounded-lg">
          <Download className="w-4 h-4" /> Download
        </button>
        <button className="flex text-textnormal items-center gap-2 px-4 py-2 border border-bordercolor rounded-lg">
          <Image src={signature_dark} className="block dark:hidden w-4 h-4" /> 
          <Image src={signature_light} className="hidden dark:block w-4 h-4" /> 
          Send For Signature

        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-bordercolor rounded-lg text-textnormal">
          <Trash2 className="w-4 h-4" /> Delete
        </button>
      </div>
    </div>
  )
}
