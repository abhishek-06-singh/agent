'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Dropdown, Menu, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import DesktopDealsTable from './DesktopDealsTable'
import MobileDealCard from './MobileCardVIew'

const deals = [
  {
    id: 1,
    property: {
      name: 'Modern Family Home',
      priceRange: '$450,000 - $600,000',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
    },
    subAgent: {
      name: 'Michael Chen',
      role: 'Sub-Agent',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    lead: {
      name: 'John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    totalCommission: '$87,400',
    split: {
      you: '50%',
      leadAgent: '30%',
      subAgent: '10%',
    },
    status: 'Paid',
    lastUpdated: 'Jan 15, 2025',
  },
  {
    id: 2,
    property: {
      name: 'Modern Family Home',
      priceRange: '$450,000 - $600,000',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80',
    },
    subAgent: {
      name: 'Michael Chen',
      role: 'Sub-Agent',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    lead: {
      name: 'John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    totalCommission: '$87,400',
    split: {
      you: '50%',
      leadAgent: '30%',
      subAgent: '10%',
    },
    status: 'Pending',
    lastUpdated: 'Jan 15, 2025',
  },
]

const statusStyles = {
  Paid: 'bg-green-500 text-white',
  Pending: 'bg-yellow-500 text-white',
}

const getMenu = (deal) => (
  <Menu className="!bg-cardbg [&_.ant-dropdown-menu-item]:!text-textnormal [&_.ant-dropdown-menu-item:hover]:!bg-buttonbg [&_.ant-dropdown-menu-item:hover]:!text-background">
    <Menu.Item key="1" onClick={() => alert(`View ${deal.property.name}`)}>
      View
    </Menu.Item>
    <Menu.Item key="2" onClick={() => alert(`Edit ${deal.property.name}`)}>
      Edit
    </Menu.Item>
  </Menu>
)

export default function DealsTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selected, setSelected] = useState([])
  const pageSize = 4
  const totalResults = deals.length
  const totalPages = Math.ceil(totalResults / pageSize)

  const start = (currentPage - 1) * pageSize
  const end = start + pageSize
  const currentItems = deals.slice(start, end)

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
      {/* Desktop / Tablet Table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-bordercolor bg-cardbg shadow-md">
  <DesktopDealsTable
    currentItems={currentItems}
    selected={selected}
    allChecked={allChecked}
    toggleSelectAll={toggleSelectAll}
    toggleRow={toggleRow}
    getMenu={getMenu}
    statusStyles={statusStyles}
  />
      </div>

 <div className="md:hidden flex flex-col gap-4">
  {currentItems.map((item) => (
    <MobileDealCard
      key={item.id}
      item={item}
      statusStyles={statusStyles}
      getMenu={getMenu}
    />
  ))}
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
