'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const commissions = [
  {
    id: 1,
    property: {
      name: 'Modern Family Home',
      address: '123 Oak Street, Beverly Hills',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1868667_640.jpg',
    },
    salePrice: '$450,000',
    commission: '3.5%',
    amountEarned: '$42,000',
    dateClosed: 'Jan 15, 2025',
    payoutStatus: 'Paid',
  },
  {
    id: 2,
    property: {
      name: 'Modern Family Home',
      address: '123 Oak Street, Beverly Hills',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1868667_640.jpg',
    },
    salePrice: '$450,000',
    commission: '3.5%',
    amountEarned: '$42,000',
    dateClosed: 'Jan 15, 2025',
    payoutStatus: 'Paid',
  },
  {
    id: 3,
    property: {
      name: 'Modern Family Home',
      address: '123 Oak Street, Beverly Hills',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1868667_640.jpg',
    },
    salePrice: '$450,000',
    commission: '3.5%',
    amountEarned: '$42,000',
    dateClosed: 'Jan 15, 2025',
    payoutStatus: 'Paid',
  },
]

export default function CommissionsTab() {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 2
  const totalResults = commissions.length
  const totalPages = Math.ceil(totalResults / pageSize)

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const currentItems = commissions.slice(start, end)

  const totalEarned = commissions.reduce((acc, c) => {
    const val = parseInt(c.amountEarned.replace(/[^0-9]/g, ''))
    return acc + val
  }, 0)

  return (
    <div className="mt-8">
      {/* Header with Total Earned */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg text-textheading font-semibold">
          Commission History
        </h2>
        <div className="text-sm text-gray-500">
          Total Earned{' '}
          <span className="text-xl font-bold text-black">
            ${totalEarned.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-background shadow">
        <table className="min-w-full text-left">
          <thead className="bg-background text-textplaceholder text-sm font-thin">
            <tr>
              <th className="p-4">Property Name</th>
              <th className="p-4">Sale Price</th>
              <th className="p-4">Commission</th>
              <th className="p-4">Amount Earned</th>
              <th className="p-4">Date Closed</th>
              <th className="p-4">Payout Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-textnormal">
            {currentItems.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                {/* Property */}
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={c.property.image}
                    alt={c.property.name}
                    className="w-16 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <div className="font-semibold">{c.property.name}</div>
                    <div className="text-sm text-textnormal">
                      {c.property.address}
                    </div>
                  </div>
                </td>

                {/* Sale Price */}
                <td className="p-4 font-semibold">{c.salePrice}</td>

                {/* Commission */}
                <td className="p-4">{c.commission}</td>

                {/* Amount Earned */}
                <td className="p-4 font-semibold">{c.amountEarned}</td>

                {/* Date Closed */}
                <td className="p-4">{c.dateClosed}</td>

                {/* Payout Status */}
                <td className="p-4">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium 
                    ${
                      c.payoutStatus === 'Paid'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {c.payoutStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
        <p>
          Showing {start + 1} to {Math.min(end, totalResults)} of {totalResults}{' '}
          results
        </p>
        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 border border-textnormal rounded-lg disabled:opacity-50 flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg border ${
                currentPage === page
                  ? 'bg-textnormal text-background'
                  : 'hover:bg-gray-100 text-textnormal'
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
