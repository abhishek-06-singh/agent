
import React from 'react'
import { Check, Mail, MapPin, MapPinIcon, MessageSquareDot, Phone } from 'lucide-react'
import CardBox from './CardBox'

export default function DetailAgentCard({listing}) {
  return (
    <div className="max-w-7xl mx-auto bg-cardbg px-6 sm:px-8 py-5 border my-4 shadow-md rounded-lg lg:px-12">
      <div className="flex flex-row gap-8  ">
        <div className="w-28 h-28 rounded-full flex-shrink-0">
          <img
            src={listing.agentAvatar}
            alt={`${listing.agent} Avatar`}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col flex-grow">
          <div className="w-full flex justify-between items-center mb-2">
            <div className="flex flex-row items-center gap-6">
              <h2 className="text-xl font-semibold text-textnormal">{listing.agent}</h2>
              <div className="inline-flex items-center gap-1 border border-green-500 rounded-full px-2 py-0.5">
                <div className="w-4 h-4 bg-green-500 flex items-center justify-center rounded-full">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-green-500">Verified</span>
              </div>
            </div>

            <button className="bg-buttonbg text-background px-4 py-2 rounded-md flex flex-row gap-3">
              <MessageSquareDot />
              Message
            </button>
          </div>

          <div className="flex flex-row items-center gap-2 mb-2">
            <MapPinIcon className="w-4 h-4 text-textnormal" aria-hidden="true" />
            <p className="text-sm text-primary">{listing.city}</p>

          </div>

          <p className="text-sm text-textnormal mb-4">
            <span className="font-medium">42</span> Active Listings
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {['Luxury', 'Residential', 'Verified'].map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs text-textnormal font-medium border rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-row gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-textnormal" aria-hidden="true" />
              <span className='text-textnormal'>{listing.agentDetails.phone}</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-textnormal" aria-hidden="true" />
              <span className='text-textnormal'>{listing.agentDetails.email}</span>

            </div>
          </div>
          <CardBox/>
        </div>
        
      </div>
      
    </div>
  )
}
