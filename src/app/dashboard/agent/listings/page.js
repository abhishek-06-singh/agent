'use client'
import React from 'react'

import { Plus } from 'lucide-react'
import Heading from '../../components/minicomponents/Heading'
import Navbar from '../../components/minicomponents/Navbar'
import ListingTabs from './ListingsTabs'
import StepperForm from './publish-property/StepperForm'
import { useState } from 'react'
import SuccessModal from './publish-property/SuccessModal'
import PropertyOverview from './publish-property/PropertyOverview' // 👈 import your overview component
import BuyerLeadModal from './publish-property/BuyerLeadModal'
import SaleValueModal from './publish-property/SaleValueModal'
import CommissionDistributionModal from './publish-property/CommissionDistributionModal'
export default function ListingsPage() {
  const [showNewDev, setShowNewDev] = useState(false)
  const [open, setOpen] = useState(false)
  const [propertyListings, setPropertyListings] = useState(false)
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      <Navbar />

      {/* ✅ CASE 1: If property listing is TRUE → Only show overview */}
      {propertyListings ? (
        <PropertyOverview />
      ) : (
        <>
          {/* ✅ CASE 2: If NOT adding new dev, show default content */}
          {!showNewDev ? (
            <>
              <div className="ml-10 mt-6 h-10 flex pr-10 justify-between">
                <Heading title="Listings" />
                <button
                  onClick={() => setShowNewDev(true)}
                  className="bg-buttonbg text-background p-2 rounded-lg flex text-sm justify-center items-center gap-2 hover:scale-95 transition-transform"
                >
                  <Plus className="text-sm w-4" /> Add New Listing
                </button>
              </div>

              <div className="mt-4">
                <ListingTabs />
              </div>
            </>
          ) : (
            // ✅ CASE 3: New Dev Flow (Add New Property)
            <>
              <div className="ml-10 mt-4 h-10 flex pr-10 justify-between">
                <Heading title="Add New Property" />

                <div className="flex gap-4">
                  <button className="bg-background text-textnormal border-2 p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform">
                    Save as Draft
                  </button>
                  <button
                    className="bg-textheading text-background p-2 rounded-lg flex text-xs justify-center items-center gap-2 hover:scale-95 transition-transform"
                    onClick={() => setOpen(true)}
                  >
                    Publish Property
                  </button>
                </div>
              </div>
              <div className="my-4">
                <StepperForm />
              </div>
            </>
          )}
        </>
      )}

      {/* Success Modal */}
      <SuccessModal
        isOpen={open}
        onClose={() => setOpen(false)}
        setPropertyListings={setPropertyListings}
      />
      {/* <BuyerLeadModal isOpen={isOpen} /> */}
      {/* <SaleValueModal isOpen={isOpen} /> */}
      {/* <CommissionDistributionModal isOpen={isOpen} /> */}
    </div>
  )
}
