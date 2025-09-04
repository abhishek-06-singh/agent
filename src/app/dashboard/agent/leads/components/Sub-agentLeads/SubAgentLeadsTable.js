'use client'
import { useState } from 'react'
import { MoreVertical } from 'lucide-react'
import { Dropdown, Menu, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'


const leads = [
  {
    id: 1,
    lead: {
      name: 'Michael Chen',
      role: 'Agent',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    subAgent: {
      name: 'Sarah Smith',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    status: 'New',
    date: 'Jan 15, 2025',
  },
  {
    id: 2,
    lead: {
      name: 'Michael Chen',
      role: 'Agent',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    subAgent: {
      name: 'Sarah Smith',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    status: 'Closed',
    date: 'Jan 15, 2025',
  },
  {
    id: 3,
    lead: {
      name: 'Michael Chen',
      role: 'Sub-Agent',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    subAgent: {
      name: 'Sarah Smith',
      avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    status: 'Negotiation',
    date: 'Jan 16, 2025',
  },
]
const getMenu = (member) => (
    <Menu className="!bg-cardbg [&_.ant-dropdown-menu-item]:!text-textnormal [&_.ant-dropdown-menu-item:hover]:!bg-buttonbg  [&_.ant-dropdown-menu-item:hover]:!text-background">
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
    </Menu>)

const statusStyles = {
  New: 'bg-green-500 text-white',
  Closed: 'bg-gray-400 text-black-500',
  Negotiation: 'bg-status-pending-in-review-500 text-white',
}

export default function SubAgentLeadsTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selected, setSelected] = useState([])
  const pageSize = 4
  const totalResults = leads.length
  const totalPages = Math.ceil(totalResults / pageSize)

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const currentItems = leads.slice(start, end)

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
              <th className="p-4">Lead</th>
              <th className="p-4">Sub-Agent</th>
              <th className="p-4">Status</th>
              <th className="p-4">Date Added</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bordercolor text-textnormal">
            {currentItems.map((lead) => (
              <tr
                key={lead.id}
                className="hover:bg-boxbg flex flex-col sm:table-row mb-4 sm:mb-0"
              >
                <td className="p-2 sm:p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-bordercolor"
                    checked={selected.includes(lead.id)}
                    onChange={() => toggleRow(lead.id)}
                  />
                </td>
                {/* Lead */}
<td className="p-4">
  <div className="flex items-center gap-3 w-full">
    <img
      src={lead.lead.avatar}
      alt={lead.lead.name}
      className="w-10 h-10 rounded-full object-cover"
    />
    <div className="min-w-0">
      <div className="font-semibold text-sm">{lead.lead.name}</div>
      <div className="text-xs text-textplaceholder">{lead.lead.role}</div>
    </div>
  </div>
</td>

{/* Sub-Agent */}
<td className="p-4">
  <div className="flex items-center gap-3 w-full">
    <img
      src={lead.subAgent.avatar}
      alt={lead.subAgent.name}
      className="w-10 h-10 rounded-full object-cover"
    />
    <div className="min-w-0">
      <div className="font-semibold text-sm">{lead.subAgent.name}</div>
    </div>
  </div>
</td>

                <td className="p-2 sm:p-4">
                  <span className={`inline-flex items-center rounded-full ${statusStyles[lead.status]} px-2.5 py-1 text-xs font-medium text-white`}>
                     {lead.status}
                  </span>
                </td>
                <td className="p-2 sm:p-4">{lead.date}</td>
                <td className="p-2 sm:p-4 relative ">
                  <Dropdown
                    overlay={getMenu(lead)}
                    trigger={['click']}
                    placement="bottomRight"
                  >
                    <Button type="text" icon={<MoreOutlined className='text-textnormal' />} />
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
            Back
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
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
