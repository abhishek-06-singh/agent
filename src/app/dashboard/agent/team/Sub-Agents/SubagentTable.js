'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react'
import Link from 'next/link'

const members = [
  {
    id: 1,
    member: 'John Doe',
    status: 'Active',
    propertiesListed: 12,
    dealsClosed: 5,
    joinDate: 'Feb 15, 2023',
    dateAdded: 'Jan 10, 2025',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    member: 'Sarah Johnson',
    status: 'Inactive',
    propertiesListed: 7,
    dealsClosed: 2,
    joinDate: 'Aug 3, 2022',
    dateAdded: 'Jan 11, 2025',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    member: 'Michael Smith',
    status: 'Active',
    propertiesListed: 20,
    dealsClosed: 12,
    joinDate: 'Jan 20, 2021',
    dateAdded: 'Jan 12, 2025',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    id: 4,
    member: 'Emily Davis',
    status: 'Active',
    propertiesListed: 15,
    dealsClosed: 9,
    joinDate: 'Oct 5, 2020',
    dateAdded: 'Jan 14, 2025',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 5,
    member: 'David Wilson',
    status: 'Pending',
    propertiesListed: 5,
    dealsClosed: 1,
    joinDate: 'Dec 2, 2024',
    dateAdded: 'Jan 15, 2025',
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
  },
  {
    id: 6,
    member: 'Olivia Martinez',
    status: 'Active',
    propertiesListed: 18,
    dealsClosed: 10,
    joinDate: 'Jul 19, 2023',
    dateAdded: 'Jan 16, 2025',
    image: 'https://randomuser.me/api/portraits/women/85.jpg',
  },
]

export default function SubagentTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selected, setSelected] = useState([])
  const [openRow, setOpenRow] = useState(null)

  const pageSize = 4
  const totalResults = members.length
  const totalPages = Math.ceil(totalResults / pageSize)

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const currentItems = members.slice(start, end)

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
              <th className="p-4">Member</th>
              <th className="p-4">Status</th>
              <th className="p-4">Properties Listed</th>
              <th className="p-4">Deals Closed</th>
              <th className="p-4">Join Date</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bordercolor text-textnormal">
            {currentItems.map((member) => (
              <tr
                key={member.id}
                className="hover:bg-boxbg flex flex-col sm:table-row mb-4 sm:mb-0"
              >
                {/* Checkbox */}
                <td className="p-2 sm:p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-bordercolor"
                    checked={selected.includes(member.id)}
                    onChange={() => toggleRow(member.id)}
                  />
                </td>

                {/* Member */}
                <td className="p-2 sm:p-4 flex items-center gap-3">
                  <img
                    src={member.image}
                    alt={member.member}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <Link
                      href={`/dashboard/agent/team/${encodeURIComponent(
                        member.member
                      )}`}
                      className="font-semibold hover:underline"
                    >
                      {member.member}
                    </Link>
                  </div>
                </td>

                {/* Status */}
                <td className="p-2 sm:p-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-white
            ${
              member.status === 'Active'
                ? 'bg-green-700'
                : member.status === 'Inactive'
                ? 'bg-gray-500'
                : 'bg-yellow-600'
            }`}
                  >
                    ● {member.status}
                  </span>
                </td>

                {/* Properties Listed */}
                <td className="p-2 sm:p-4 font-semibold">{member.propertiesListed}</td>

                {/* Deals Closed */}
                <td className="p-2 sm:p-4">{member.dealsClosed}</td>

                {/* Join Date */}
                <td className="p-2 sm:p-4">{member.joinDate}</td>

                {/* Actions */}
                <td className="p-2 sm:p-4 relative">
                  <button
                    onClick={() =>
                      setOpenRow(openRow === member.id ? null : member.id)
                    }
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <MoreVertical className="w-5 h-5 text-textnormal" />
                  </button>

                  {openRow === member.id && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-10">
                      <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                        Edit
                      </button>
                      <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
                        Delete
                      </button>
                    </div>
                  )}
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
