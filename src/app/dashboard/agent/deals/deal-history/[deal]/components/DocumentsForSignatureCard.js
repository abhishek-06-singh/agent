'use client'
import React from 'react'
import { FaFileAlt } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'

// Sample document data
const documents = [
  {
    id: 1,
    name: 'Purchase Agreement',
    sentDate: 'Jan 22, 2025',
    status: 'Signed',
  },
  {
    id: 2,
    name: 'Inspection Report',
    sentDate: 'Jan 22, 2025',
    status: 'Pending',
  },
]

// Status styles mapping
const statusStyles = {
  Signed: 'bg-green-100 text-green-700 border border-green-300',
  Pending: 'bg-yellow-100 text-yellow-700 border border-yellow-300',
}

export default function DocumentsForSignatureCard() {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white border border-bordercolor rounded-xl p-4 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h3 className="text-base sm:text-lg font-semibold text-black-500">
          Documents For Signature
        </h3>
        <button className="mt-2 sm:mt-0 px-3 py-1 text-sm rounded-md border border-gray-300 hover:bg-gray-100 transition">
          + Add Document
        </button>
      </div>

      {/* Document List */}
      <div className="space-y-3">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center border border-bordercolor rounded-lg p-4 gap-3"
          >
            {/* Left: Icon & Info */}
            <div className="flex items-center gap-3">
              <FaFileAlt className="text-black-500 text-lg" />
              <div>
                <div className="text-sm font-medium text-black-500">{doc.name}</div>
                <div className="text-xs text-textplaceholder">
                  Sent on {doc.sentDate}
                </div>
              </div>
            </div>

            {/* Right: Status and Actions */}
            <div className="flex items-center gap-2 sm:ml-auto">
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusStyles[doc.status]}`}>
                {doc.status === 'Pending' && <span className="mr-1 text-sm">•</span>}
                {doc.status}
              </span>

              {doc.status === 'Pending' && (
                <button className="text-xs px-3 py-1 rounded border border-gray-400 text-gray-700 hover:bg-gray-100 transition">
                  Resend
                </button>
              )}

              <button className="p-1 text-gray-500 hover:text-gray-700">
                <FiEye />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
