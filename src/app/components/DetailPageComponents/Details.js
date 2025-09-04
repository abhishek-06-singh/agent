'use client'
import react, { useState } from 'react'

import DetailTopBar from './DetailTopBar'
import PropertyImage from './PropertyImage'
import DetailsHeading from './DetailsHeading'
import Description from './Description'
import AgentBox from './AgentBox'
import DetailTop from './DetailTop'
import MapView from '../explore_Components/MapView'
import MapEmbed from './MapEmbed'
import KeyFeatures from './KeyFeatures'
import NearbyFacilities from './NearbyFacilities'
import Documents from './Documents'
import Card_Components from '../explore_Components/Card_Components'

export default function DetailsPage({ property,listing }) {
  const [liked, setLiked] = useState([]);
  return (
    <div className="bg-background min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <DetailTopBar />
      <PropertyImage property={property} />
      <DetailTop property={property} />
      <Description property={property} />
      <KeyFeatures property={property} />
      <div className="w-full h-auto ">
        <MapEmbed city={property.city} />
        <NearbyFacilities property={property} />
        <Documents property={property} />
        <div className='flex flex-col'>
        <h2 className='text-lg text-textnormal'>Similar Properties</h2>
        <Card_Components
          filtered={listing.slice(0, 3)}
          liked={liked}
          setLiked={setLiked}
        />
        </div>
      </div>
    </div>
  )
}
