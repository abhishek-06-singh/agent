import React from 'react'
import DocumentCard from './DocumentCard'
import PdfPreview from './PdfPreview'

const LeftColumnDocument = ({doc}) => {
  return (
    <div className="w-full lg:w-8/12 flex flex-col items-start space-y-6">
      <DocumentCard doc={doc} />
      <PdfPreview doc={doc} />


    </div>
  )
}

export default LeftColumnDocument
