import React from "react";
import Link from "next/link";
import {  MessageSquare } from 'lucide-react';

export default function ProfileCard({ listing }) {
  return (

    <div className="max-w-sm sm:max-w-xl md:max-w-sm bg-cardbg shadow-lg rounded-lg p-6 border border-gray-200">
      <div className="flex flex-row gap-8 items-center">
     <div className="w-16 h-16 rounded-full flex-shrink-0">
        <img
          src={listing.agentAvatar}
          alt={listing.agent}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <div className="flex flex-col ">
      <div className="mb-1">
        <h2 className="text-xl font-semibold text-primary">{listing.agent}</h2>

        <p className="text-sm text-primary">{listing.city}</p>
      </div>

      {/* Active Listings */}
      <p className="text-sm text-primary mb-2">
        <span className="font-medium">42</span> Active Listings
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {['Luxury', 'Residential', 'Verified'].map((tag) => (
          <span
            key={tag}
            className={`px-2 py-1 text-primary text-xs font-medium rounded-md border`}
          >
            {tag}
          </span>
        ))}
      </div>
      </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2">
  <Link href={`/agents_agencies/${listing.id}`} className="flex-grow">
    <button className="w-full px-4 py-2 font-medium text-background bg-buttonbg text-sm rounded-md">
      View Profile
    </button>
  </Link>
  <button className="py-2 px-3 bg-buttonbg rounded-lg border">
    <MessageSquare className="text-background" />
  </button>
</div>

    </div>
  );
}
