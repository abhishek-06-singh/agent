import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function AgentBox({ property }) {
  return (
    <div
      className="
        flex flex-col sm:flex-row lg:flex-col
        items-center sm:items-start lg:items-center
        justify-center gap-4
        border border-bordercolor rounded-lg p-4
        w-full lg:w-3/12
        max-w-md
      "
    >
      {/* Agent Avatar */}
      <div className="w-16 h-16 rounded-full flex-shrink-0">
        <img
          src={property.agentAvatar}
          alt={property.agent}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Agent Info */}
      <div className="flex flex-col items-center sm:items-start lg:items-center text-textnormal gap-2 text-sm sm:text-base w-full">
        <h3 className="font-semibold text-center sm:text-left">{property.agent}</h3>
        <p className="text-base lg:text-sm text-center sm:text-left">{property.agentType}</p>

        {/* Contact Details */}
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-2 min-w-0">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <p className="truncate text-sm lg:text-base min-w-0">{property.agentDetails.phone}</p>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <p className="truncate text-sm lg:text-base min-w-0">{property.agentDetails.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
