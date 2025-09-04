'use client'
import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/minicomponents/Navbar'
import Heading from '../../components/minicomponents/Heading'
import { Plus, Upload } from 'lucide-react'
import ContactsData from './components/ContactData'
import ContactDetails from './components/ContactDetails'


export default function LeadsPage() {
  const [showNewContacts, setShowNewContacts] = useState(false)
  const [open, setOpen] = useState(false)
  const [propertyContacts, setPropertyContacts] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      <Navbar />

      {/* ✅ CASE 1: If property listing is TRUE → Only show overview */}
      {propertyContacts ? (
       <div></div>
      ) : (
        <>
          {/* ✅ CASE 2: If NOT adding new contact, show default content */}
          {!showNewContacts ? (
            <>
              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Contacts" subtitle={'Your personal contact database to track, segment, and engage your clients'}/>
               <div className="flex gap-4">
                  <button className="bg-background text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                    <Upload/> Export CSV
                  </button>
                  <button
                    className="bg-textheading text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={() => setShowNewContacts(true)}
                  >
                    Add Contact
                  </button>
                </div>
              </div>

              <div className="mt-4">
              <ContactsData/>
              </div>
            </>
          ) : (
            // ✅ CASE 3: New Dev Flow (Add New Property)
            <>
              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Add New Contact" subtitle="Add a new professional contact to your CRM." />

                <div className="flex gap-4">
                  <button className="bg-background text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                   Cancel
                  </button>
                  <button
                    className="bg-textheading text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={() => setOpen(true)}
                  >
                     Save Contact
                  </button>
                </div>
              </div>
              <div className="my-4 ]">
               <ContactDetails/>
              </div>
            </>
          )}
        </>
      )}

      {/* Success Modal */}
      {/* <SuccessModal
        isOpen={open}
        onClose={() => setOpen(false)}
        setPropertyListings={setPropertyListings}
      /> */}
     
    </div>
  )
}
