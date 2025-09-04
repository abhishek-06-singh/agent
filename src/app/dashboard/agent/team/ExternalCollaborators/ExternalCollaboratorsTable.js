'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dropdown, Menu, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

const members = [
  {
    id: 1,
    member: 'John Doe',
    status: 'Active',
    role: 'Agent',
    property: {
      name: 'Luxury Villa',
      address: '123 Palm Street, LA',
      image:
        'https://cdn.pixabay.com/photo/2016/11/29/03/53/architecture-1868667_640.jpg',
    },
    joinDate: 'Feb 15, 2023',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    member: 'Sarah Johnson',
    status: 'Inactive',
    role: 'Broker',
    property: {
      name: 'Modern Apartment',
      address: '456 Ocean Drive, Miami',
      image:
        'https://cdn.pixabay.com/photo/2017/03/28/12/11/apartment-2187173_640.jpg',
    },
    joinDate: 'Aug 3, 2022',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    member: 'Michael Smith',
    status: 'Active',
    role: 'Manager',
    property: {
      name: 'Penthouse Suite',
      address: '789 Skyline Blvd, NYC',
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/14/39/condo-1836070_640.jpg',
    },
    joinDate: 'Jan 20, 2021',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
]

export default function ExternalCollaboratorsTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selected, setSelected] = useState([])

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

  const getMenu = (member) => (
    <Menu className="!bg-cardbg [&_.ant-dropdown-menu-item]:!text-textnormal [&_.ant-dropdown-menu-item:hover]:!bg-buttonbg [&_.ant-dropdown-menu-item:hover]:!text-background">
      <Menu.Item key="1" onClick={() => alert(`Edit ${member.member}`)}>
        Edit
      </Menu.Item>
      <Menu.Item key="2" onClick={() => alert(`Delete ${member.member}`)}>
        Delete
      </Menu.Item>
      <Menu.Item
        key="3"
        onClick={() => alert(`View property: ${member.property.name}`)}
      >
        View Property
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="mt-8">
      <div className="overflow-x-auto rounded-xl border border-bordercolor bg-cardbg shadow-md">
        <table className="min-w-full text-left table-auto">
          <thead className="bg-cardbg text-textplaceholder text-sm font-thin">
            <tr>
              <th className="p-2 sm:p-4">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-bordercolor"
                  checked={allChecked}
                  onChange={(e) => toggleSelectAll(e.target.checked)}
                />
              </th>
              <th className="p-2 sm:p-4">Member</th>
              <th className="p-2 sm:p-4">Status</th>
              <th className="p-2 sm:p-4">Role</th>
              <th className="p-2 sm:p-4">For Property</th>
              <th className="p-2 sm:p-4">Join Date</th>
              <th className="p-2 sm:p-4">Actions</th>
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
                    className="w-4 h-4 rounded  border-bordercolor"
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
                  <div className="font-semibold">{member.member}</div>
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

                {/* Role */}
                <td className="p-2 sm:p-4 font-semibold">{member.role}</td>

                {/* For Property */}
                <td className="p-2 sm:p-4 flex items-center gap-3">
                  <img
                    src={member.property.image}
                    alt={member.property.name}
                    className="w-16 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <div className="font-semibold">{member.property.name}</div>
                    <div className="text-sm text-subtext">
                      {member.property.address}
                    </div>
                  </div>
                </td>

                {/* Join Date */}
                <td className="p-2 sm:p-4">{member.joinDate}</td>

                {/* Actions */}
                <td className="p-2 sm:p-4">
                  <Dropdown
                    overlay={getMenu(member)}
                    trigger={['click']}
                    placement="bottomRight"
                  >
                    <Button type="text" icon={<MoreOutlined />} />
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between my-10 text-sm text-textnormal gap-4 sm:gap-0">
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