'use client'
import React, { useState } from 'react'
import UploadSectionHeading from '../Shared_AuthComponents/UploadSectionHeading'
import UploadBox from '../Shared_AuthComponents/UploadBox'
import UploadProgressBar from '../Shared_AuthComponents/UploadProgressBar'
export default function UploadSection({
  uploadsections,
}) {

  const [files, setFiles] = useState({})
  const [errors, setErrors] = useState({})

  const handleFiles = (sectionTitle, newFiles) => {
    const validFiles = Array.from(newFiles).filter(
      (file) =>
        ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type) &&
        file.size <= 5 * 1024 * 1024
    )
    const currentFiles = files[sectionTitle] || []
    const totalFiles = [...currentFiles, ...validFiles]

    if (totalFiles > 5) {
      setErrors((prev) => ({
        ...prev,
        [sectionTitle]: 'You can upload a maximum of 5 files.',
      }))
      return
    }
    setFiles((prev) => ({
      ...prev,
      [sectionTitle]: totalFiles,
    }))
    setErrors((prev) => ({
      ...prev,
      [sectionTitle]: '',
    }))
    }
     const uploadedCount = Object.values(files).reduce((count, fileArr) => {
    return count + (fileArr?.length || 0)
  }, 0)
  const maxFiles = 5
    return (
      <div className="w-full ">
        <UploadProgressBar UploadCount={uploadedCount} Maxfiles={maxFiles} />
        {uploadsections.map((section, index) => (
          <div className="w-full flex items-start  border justify-start rounded-xl mb-8">

            <div className="w-full flex flex-col ">
            <UploadSectionHeading index={index} section={section} />
            <UploadBox
              section={section}
              handleFiles={handleFiles}
              error={errors[section.title]}
              uploadedFile={files[section.title]?.[0]}
            />
          </div>
          </div>
        ))}
      </div>
    )
  
}
