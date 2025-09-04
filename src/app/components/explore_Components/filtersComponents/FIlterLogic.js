import React from 'react';
export default function FilterLogic({ filters, listing }) {
let result = [...listing]

    if (filters.search.length >= 3) {
      const query = filters.search.toLowerCase()
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.address.toLowerCase().includes(query) ||
          item.city.toLowerCase().includes(query) ||
          item.propertyType.toLowerCase().includes(query)
      )
    }

    if (filters.location) {
      result = result.filter((item) => item.city === filters.location)
    }
    if (filters.petFriendly) {
      result = result.filter((item) => item.petFriendly === true)
    }

    if (filters.parking) {
      result = result.filter((item) => item.parking === true)
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number)
      result = result.filter((item) => item.price >= min && item.price <= max)
    }

    if (filters.propertyType) {
      result = result.filter(
        (item) => item.propertyType === filters.propertyType
      )
    }
    if (filters.bedrooms) {
      result = result.filter(
        (item) => item.bedrooms === Number(filters.bedrooms)
      )
    }

    if (filters.bathrooms) {
      result = result.filter(
        (item) => item.bathrooms === Number(filters.bathrooms)
      )
    }

    if (filters.status) {
      result = result.filter((item) => item.status === filters.status)
    }

    if (filters.sortBy === 'priceLow') {
      result.sort((a, b) => a.price - b.price)
    } else if (filters.sortBy === 'priceHigh') {
      result.sort((a, b) => b.price - a.price)
    } else if (filters.sortBy === 'newest') {
      result.sort((a, b) => new Date(b.date) - new Date(a.date))
    }

    return result

}
