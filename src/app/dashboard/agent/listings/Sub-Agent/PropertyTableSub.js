'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react'

const properties = [
  {
    id: 1,
    name: 'Modern Family Home',
    address: '123 Oak Street, Beverly Hills',
    price: '$850,000',
    views: 245,
    inquiries: 20,
    status: 'Active',
    date: 'Jan 10, 2025',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
  },
  {
    id: 2,
    name: 'Modern Family Home',
    address: '123 Oak Street, Beverly Hills',
    price: '$850,000',
    views: 245,
    inquiries: 20,
    status: 'Active',
    date: 'Jan 10, 2025',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
  },
  {
    id: 3,
    name: 'Modern Family Home',
    address: '123 Oak Street, Beverly Hills',
    price: '$850,000',
    views: 245,
    inquiries: 20,
    status: 'Active',
    date: 'Jan 10, 2025',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
  },
  {
    id: 4,
    name: 'Modern Family Home',
    address: '123 Oak Street, Beverly Hills',
    price: '$850,000',
    views: 245,
    inquiries: 20,
    status: 'Active',
    date: 'Jan 10, 2025',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
  },
  {
    id: 5,
    name: 'Modern Family Home',
    address: '123 Oak Street, Beverly Hills',
    price: '$850,000',
    views: 245,
    inquiries: 20,
    status: 'Active',
    date: 'Jan 10, 2025',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
  },
  {
    id: 6,
    name: 'Modern Family Home',
    address: '123 Oak Street, Beverly Hills',
    price: '$850,000',
    views: 245,
    inquiries: 20,
    status: 'Active',
    date: 'Jan 10, 2025',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
  },
]

export default function PropertyTableSub() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selected, setSelected] = useState([])
  const [open, setOpen] = useState(false)
  const pageSize = 4
  const totalResults = properties.length
  const totalPages = Math.ceil(totalResults / pageSize)

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const currentItems = properties.slice(start, end)

  const toggleSelectAll = (checked) => {
    if (checked) {
      setSelected([...new Set([...selected, ...currentItems.map((p) => p.id)])])
    } else {
      setSelected(
        selected.filter((id) => !currentItems.map((p) => p.id).includes(id))
      )
    }
  }

  const toggleRow = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const allChecked = currentItems.every((item) => selected.includes(item.id))

  return (
    <div className="mt-8">
      <div className="overflow-x-auto rounded-xl border border-bordercolor bg-cardbg shadow-md">
        <table className="min-w-full text-left table-auto">
          <thead className="bg-cardbg text-textplaceholder text-sm font-thin">
            <tr>
              <th className="p-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-bordercolor"
                  checked={allChecked}
                  onChange={(e) => toggleSelectAll(e.target.checked)}
                />
              </th>
              <th className="p-4">Property</th>
              <th className="p-4">Status</th>
              <th className="p-4">Price</th>
              <th className="p-4 hidden md:table-cell">Views</th>
              <th className="p-4 hidden md:table-cell">Inquiries</th>
              <th className="p-4">Date Added</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bordercolor text-textnormal">
            {currentItems.map((property) => (
              <tr
                key={property.id}
                className="hover:bg-boxbg flex flex-col sm:table-row mb-4 sm:mb-0"
              >
                <td className="p-2 sm:p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-bordercolor"
                    checked={selected.includes(property.id)}
                    onChange={() => toggleRow(property.id)}
                  />
                </td>
                <td className="p-2 sm:p-4 flex items-center gap-3">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-16 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <div className="font-semibold">{property.name}</div>
                    <div className="text-sm text-textnormal">{property.address}</div>
                  </div>
                </td>
                <td className="p-2 sm:p-4">
                  <span className="inline-flex items-center rounded-full bg-green-700 px-2.5 py-1 text-xs font-medium text-white">
                    ● {property.status}
                  </span>
                </td>
                <td className="p-2 sm:p-4 font-semibold">{property.price}</td>
                <td className="p-2 sm:p-4 hidden md:table-cell">{property.views}</td>
                <td className="p-2 sm:p-4 hidden md:table-cell">{property.inquiries}</td>
                <td className="p-2 sm:p-4">{property.date}</td>
                <td className="p-2 sm:p-4 relative">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <MoreVertical className="w-5 h-5 text-textnormal" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between my-10 text-sm text-textnormal gap-4 sm:gap-0">
        <p>
          Showing {start + 1} to {Math.min(end, totalResults)} of {totalResults} results
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
