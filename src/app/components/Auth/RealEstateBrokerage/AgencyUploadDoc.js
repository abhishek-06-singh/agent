import React from 'react'
import UploadSection from '../IndiviualRealEstateAgent/UploadSection'

const uploadsections = [
  {
    title: 'Company Registration Certificate',
    important:'*',
    description:
      'Escritura de Constitución de Sociedad (Issued by SII)',
  },
  {
    title: "Legal Representative's National ID (RUN)",
    important:'',
    description: 'Front and Back of ID - Required for legal identification',
  },
  {
    title: 'Company Tax ID (RUT)',
    important:'',
    description: 'Taxpayer Identification Number - Required for tax/legal transactions',
  },
  {
    title: 'Proof of Tax Compliance',
     important:'',
    description: "Issued by SII - Confirms company's tax standing",
  },
  {
    title: 'Proof of Office Address',
    important:'',
    description: 'Rental agreement or recent utility bill',
  },
]

export default function AgencyUploadDoc() {
    return (
    <div className="w-full mx-auto px-6  ">
      <UploadSection
        uploadsections={uploadsections}
            />
    </div>
  )
}
