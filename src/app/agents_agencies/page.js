import React from 'react'
import ListingGrid from '../components/AgentandAgencyComponents/ListingGrid'
import listing from '../Data/Real_Estate.json'

export default function AgentsAndAgenciesPage() {
return(
  <ListingGrid listing={listing} />

  )
}
