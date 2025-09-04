'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const listingData = [
  {
    id: 1,
    property: {
      name: 'Modern Family Home',
      address: '123 Oak Street, Beverly Hills',
      views: 1252,  
      leads: 20,
      offers: 5,
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
      status: 'Active',
    },
  },
  {
    id: 2,
    property: {
      name: 'Modern Family Home',
      address: '123 Oak Street, Beverly Hills',
      views: 1252,
      leads: 20,
      offers: 5,
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
      status: 'Active',
    },
  },
  {
    id: 3,
    property: {
      name: 'Modern Family Home',
      address: '123 Oak Street, Beverly Hills',
      views: 1252,
      leads: 20,
      offers: 5,
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
      status: 'Active',
    },
  },
]

const statusColors = {
  Active: 'bg-green-600 text-white',
  Inactive: 'bg-gray-400 text-white',
}

export default function ListingDetailsTable() {
 const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 4
  const totalResults = listingData.length
  const totalPages = Math.ceil(totalResults / pageSize)

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const currentItems = listingData.slice(start, end)

  return (
    <div className="mt-8 bg-cardbg rounded-xl shadow-md border border-bordercolor p-6">
      <h2 className="text-sm font-semibold text-textheading mb-6">Listing Details</h2>

   <table className="w-full table-auto">
<thead>
  <tr className="text-xs text-subtext text-left border-b border-bordercolor">
    <th className="py-3 px-2 w-[25%]">Property</th>
    <th className="py-3 px-2 text-center w-[20%]">Views</th>
    <th className="py-3 px-2 text-center w-[20%]">Leads</th>
    <th className="py-3 px-2 text-center w-[20%]">Offers</th>
    <th className="py-3 px-2 text-center w-[20%]">Status</th>
  </tr>
</thead>


  <tbody>
  {currentItems.map(({ id, property }) => (
  <tr
    key={id}
    className="border-b border-bordercolor hover:bg-hover transition"
  >
    {/* Property column */}
    <td className="py-4 px-2">
      <div className="flex items-center text-textnormal gap-2">
        <img
          src={property.image}
          alt={property.name}
          className="w-10 h-10 rounded-md object-cover"
        />
        <div className="leading-tight">
          <div className="font-medium text-sm">{property.name}</div>
          <div className="text-xs text-textplaceholder">{property.address}</div>
        </div>
      </div>
    </td>

    {/* Views */}
    <td className="text-sm text-textnormal text-center px-2">
      {property.views.toLocaleString()}
    </td>

    {/* Leads */}
    <td className="text-sm text-textnormal text-center px-2">
      {property.leads}
    </td>

    {/* Offers */}
    <td className="text-sm text-textnormal text-center px-2">
      {property.offers}
    </td>

    {/* Status */}
    <td className="text-sm text-center px-2">
      <span
        className={`inline-block px-3 py-1 text-xs rounded-full font-medium ${statusColors[property.status]}`}
      >
        {property.status}
      </span>
    </td>
  </tr>
))}


  </tbody>
</table>


      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between my-4 text-sm text-textnormal gap-4 sm:gap-0">
        <p>
          Showing {start + 1} to {Math.min(end, totalResults)} of {totalResults}{' '}
          results
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 border border-bordercolor rounded-lg disabled:opacity-50 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg border border-bordercolor ${
                currentPage === page
                  ? 'bg-black-500 text-white'
                  : 'hover:bg-boxbg text-textnormal'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 border border-textnormal rounded-lg disabled:opacity-50 flex items-center gap-1"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
