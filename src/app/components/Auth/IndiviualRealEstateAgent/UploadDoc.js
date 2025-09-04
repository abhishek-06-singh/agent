import React from 'react'
import { UploadCloud } from 'lucide-react'
import UploadSection from './UploadSection'

const uploadsections = [
  {
    title: 'National ID (RUN)',
    important:'*',
    description:
      'Upload your RUN – Front and Back (JPG, PNG, PDF | Max 5MB per file)',
  },
  {
    title: 'Real Estate License / Certification',
    important:'(Optional but recommended)',
    description: 'State-issued document or certificate',
  },
  {
    title: 'Proof of Address',
    important:'*',
    description: 'Utility bill (electricity, water, internet, gas) OR bank statement (last 3 months)',
  },
  {
    title: 'RUT (Tax Identification Number)',
    important:'*',
    description: 'Mandatory for legal transactions & commissions',
  },
  {
    title: 'Professional Liability Insurance',
    important:'(Optional)',
    description: 'Upload Liability Insurance Certificate (adds credibility, not required)',
  },
]

export default function UploadDoc() {
 
  return (
    <div className="w-full mx-auto px-1 md:px-6  ">
      <UploadSection
        uploadsections={uploadsections}
        />
    </div>
  )
}
