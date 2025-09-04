'use client'
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import MoreFiltersDropdown from './filtersComponents/MoreFiltersDropdown'
import PriceRangeDropdown from './filtersComponents/PriceRangeDropdown'
import PropertyTypeDropdown from './filtersComponents/PropertyTypeDropdown'
import BedBathDropdown from './filtersComponents/BedBathDropdown'
import PropertyStatusDropdown from './filtersComponents/PropertyStatusDropdown'

export default function Filter({ filters, setFilters, listings }) {
  const [openDropdown, setOpenDropdown] = useState(null)
  const dropdownRef = useRef(null)

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  useEffect(() => {
        if (typeof window === 'undefined') return
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredListings = listings.filter((item) => {
    if (filters.petFriendly && !item.petFriendly) return false
    if (filters.parking && !item.parking) return false
    return true
  })

  const locations = [
    ...new Set(filteredListings.map((item) => item.location || item.city)),
  ]

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 shadow-sm"
      ref={dropdownRef}
    >
      <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-1 md:gap-4
 ">
        <MoreFiltersDropdown
          filters={filters}
          setFilters={setFilters}
          locations={locations}
          isOpen={openDropdown === 'more'}
          toggleDropdown={toggleDropdown}
        />
        <PriceRangeDropdown
          filters={filters}
          setFilters={setFilters}
          isOpen={openDropdown === 'price'}
          toggleDropdown={toggleDropdown}
        />

        <PropertyTypeDropdown
          filters={filters}
          setFilters={setFilters}
          isOpen={openDropdown === 'propertyType'}
          toggleDropdown={toggleDropdown}
          listings={listings}
        />

        <BedBathDropdown
          filters={filters}
          setFilters={setFilters}
          isOpen={openDropdown === 'beds'}
          toggleDropdown={toggleDropdown}
        />
        <PropertyStatusDropdown
          selectedStatus={filters.status}
          setSelectedStatus={(status) =>
            setFilters((prev) => ({ ...prev, status }))
          }
          isOpen={openDropdown === 'propertyStatus'}
          toggleDropdown={(key) =>
            setOpenDropdown((prev) => (prev === key ? null : key))
          }
        />
      </div>
    </div>
  )
}
