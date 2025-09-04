'use client'
import { useState } from 'react'
import { ZoomIn, ZoomOut, FileText } from 'lucide-react'
import pdf_Light from '../../../../components/icons/Lightmode_icons/leads-light/pdf_black.svg'
import pdf_Dark from '../../../../components/icons/Darkmode_icons/leads-dark/white_pdf.svg'
import Image from 'next/image'


export default function PdfPreview(doc) {
  const [zoom, setZoom] = useState(100)

  const handleZoomIn = () => setZoom((z) => Math.min(z + 10, 200))
  const handleZoomOut = () => setZoom((z) => Math.max(z - 10, 50))

  return (
    <div className="bg-cardbg  border border-bordercolor rounded-xl shadow-md p-6 w-full mx-auto">
      {/* Preview Area */}
      <div className="bg-gray-100  dark:bg-background rounded-lg flex flex-col items-center justify-center h-64">
        <Image src={pdf_Light} className="block dark:hidden w-12 h-12  mb-2" />
        <Image src={pdf_Dark} className='hidden dark:block w-12 h-12 mb-2'></Image>

        <p className="text-textnormal  font-medium">
          PDF Document Preview
        </p>
        <p className="text-sm text-textnormal ">{doc.doc}</p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-4 text-sm text-textnormal dark:text-textnormal">
        <button
          onClick={handleZoomOut}
          className="flex items-center gap-1 hover:text-black-500 dark:hover:text-white"
        >
          <ZoomOut className="w-4 h-4" /> Zoom Out
        </button>

        <span className="px-3 py-1 border border-bordercolor rounded-lg">
          {zoom}%
        </span>

        <button
          onClick={handleZoomIn}
          className="flex items-center gap-1 hover:text-black-500 dark:hover:text-white"

        >
          <ZoomIn className="w-4 h-4" /> Zoom In
        </button>
      </div>
    </div>
  )
}
