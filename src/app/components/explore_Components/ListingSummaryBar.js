import ListingControls from './Listing_Components'
import React from 'react'
const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price (Low to High)', value: 'priceLow' },
  { label: 'Price (High to Low)', value: 'priceHigh' },
]
const distanceOptions = [
  { label: '5 kms', value: '5' },
  { label: '10 kms', value: '10' },
  { label: '20 kms', value: '20' },
]

export default function ListingSummaryBar({
  listing,
  listingsPerPage,
  currentPage,
  onMapClick,
  MapActive,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 sm:px-6 lg:px-8 py-6 w-full">
      {/* Count text */}
      <p className="hidden md:block text-sm text-textnormal">
        Showing {Math.min(currentPage * listingsPerPage, listing.length)} of {listing.length} listings
      </p>

      {/* Controls - full width on mobile, shrink on desktop */}
      <div className="w-full md:w-auto">
        <ListingControls
          onMapClick={onMapClick}
          MapActive={MapActive}
          sortOptions={sortOptions}
          selectedSort="newest"
          onSortChange={(val) => console.log('Sort:', val)}
          distanceOptions={distanceOptions}
          selectedDistance="5"
          onDistanceChange={(val) => console.log('Distance:', val)}
        />
      </div>
    </div>
  )
}
