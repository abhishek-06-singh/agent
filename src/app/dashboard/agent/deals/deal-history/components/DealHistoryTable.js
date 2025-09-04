'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react'
import { Dropdown, Menu, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'


const leads = [
  {
    id: 1,
    title: 'DownTown Condo Sale',
    lead: {
      name: 'Michael Chen',
      role: 'Agent',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    property: {
      name: 'Modern Family Home',
      priceRange: '$450,000 - $600,000',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
    },
    contact: {
      email: 'michael.chen@email.com',
      phone: '(555) 123-4567',
    },
    dealValue: '$450,000',
    commission: '$14,500',
    status: 'New',
    date: 'Jan 15, 2025',
  },
  {
    id: 2,
    title: 'DownTown Condo Sale',
    lead: {
      name: 'Michael Chen',
      role: 'Agent',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    property: {
      name: 'Modern Family Home',
      priceRange: '$450,000 - $600,000',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
    },
    contact: {
      email: 'michael.chen@email.com',
      phone: '(555) 123-4567',
    },
    dealValue: '$450,000',
    commission: '$14,500',
    status: 'Negotiation',
    date: 'Jan 15, 2025',
  },
  {
    id: 3,
    title: 'DownTown Condo Sale',
    lead: {
      name: 'Michael Chen',
      role: 'Agent',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    property: {
      name: 'Modern Family Home',
      priceRange: '$450,000 - $600,000',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
    },
    contact: {
      email: 'michael.chen@email.com',
      phone: '(555) 123-4567',
    },
    dealValue: '$450,000',
    commission: '$14,500',
    status: 'Closed',
    date: 'Jan 15, 2025',
  },
  {
    id: 4,
    title: 'DownTown Condo Sale',
    lead: {
      name: 'Michael Chen',
      role: 'Agent',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    property: {
      name: 'Modern Family Home',
      priceRange: '$450,000 - $600,000',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
    },
    contact: {
      email: 'michael.chen@email.com',
      phone: '(555) 123-4567',
    },
    dealValue: '$450,000',
    commission: '$14,500',
    status: 'Cancelled',
    date: 'Jan 15, 2025',
  },
]

const statusStyles = {
  New: 'bg-green-500 text-white',
  Closed: 'bg-gray-400 text-black-500',
  Negotiation: 'bg-status-pending-in-review-500 text-white',
  Cancelled: 'bg-red-500 text-white', 
}

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
export default function DealHistoryTable() {
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
  const router = useRouter()
  const handleRowClick = (title) => {
    router.push(`/dashboard/agent/deals/deal-history/${title}`)
  }

  return (
    <div className="mt-8">
      <div className="overflow-x-auto rounded-xl border border-bordercolor bg-cardbg shadow-md">
        <table className="min-w-full text-left table-auto overflow-x-auto">
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
             <th className="p-4">Deal Title</th>
<th className="p-4">Lead</th>
<th className="p-4">Property</th>
<th className="p-4">Deal value</th>
<th className="p-4">Closing Date</th>
<th className="p-4">Commission</th>
<th className="p-4">Status</th>
<th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-bordercolor">
  {currentItems.map((item) => (
    <tr key={item.id} className="hover:bg-boxbg transition">
      <td className="p-4">
        <input
          type="checkbox"
          className="w-4 h-4 rounded border-bordercolor"
          checked={selected.includes(item.id)}
          onChange={() => toggleRow(item.id)}
        />
      </td>

      {/* Deal Title */}
      <td onClick={() => handleRowClick(item.title)} className="cursor-pointer p-4 text-sm font-medium text-textnormal">
        {item.title}
      </td>

      {/* Lead */}
      <td className="p-4">
        <div className="flex items-center gap-3 w-full">
          <img
            src={item.lead.avatar}
            className="w-10 h-10 rounded-full"
            alt={item.lead.name}
          />
          <div className="min-w-0">
            <div className="font-semibold text-sm">{item.lead.name}</div>
          </div>
        </div>
      </td>

      {/* Property */}
      <td className="p-4">
        <div className="flex items-center gap-3 w-full">
          <img
            src={item.property.image}
            className="w-14 h-10 rounded-md object-cover"
            alt={item.property.name}
          />
          <div className="min-w-0 text-sm">
            <div className="font-medium">{item.property.name}</div>
            <div className="text-xs text-textplaceholder">
              {item.property.priceRange}
            </div>
          </div>
        </div>
      </td>

      {/* Deal Value */}
      <td className="p-4 text-sm">{item.dealValue}</td>

      {/* Date */}
      <td className="p-4 text-sm">{item.date}</td>

      {/* Commission */}
      <td className="p-4 text-sm">{item.commission}</td>

      {/* Status */}
      <td className="p-4">
        <span
          className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyles[item.status]}`}
        >
          {item.status}
        </span>
      </td>

      {/* Actions */}
      <td className="p-4">
        <Dropdown
          overlay={getMenu(item)}
          trigger={['click']}
          placement="bottomRight"
        >
          <Button type="text" icon={<MoreOutlined className="text-textnormal" />} />
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
