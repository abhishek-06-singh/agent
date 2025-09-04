import React from 'react';
import { Bed, Bath, Ruler, Building } from 'lucide-react';

export default function PropertyStats({ property }) {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4  text-xs md:text-sm text-black-500">
      
      <div className="flex flex-col items-center justify-center bg-orange-100 p-3 rounded-lg border border-secondary space-y-1">
        <Bed className="inline-block mr-2" />
        <span>{property.bedrooms}</span>
        <span>Bedrooms</span>
      </div>

      <div className="flex flex-col items-center justify-center bg-orange-100 p-3 rounded-lg border border-secondary space-y-1">
        <Bath className="inline-block mr-2" />
        <span>{property.bathrooms}</span>
        <span>Bathrooms</span>
      </div>

      <div className="flex flex-col items-center justify-center bg-orange-100 p-3 rounded-lg border border-secondary space-y-1">
        <Ruler className="inline-block mr-2" />
        <span>{property.areaSqFt}</span>
        <span>Sq Ft</span>
      </div>

      <div className="flex flex-col items-center justify-center bg-orange-100 p-3 rounded-lg border border-secondary space-y-1">
        <Building className="inline-block mr-2" />
        <span>{property.propertyType}</span>
        <span>Property Type</span>
      </div>
      
    </div>
  );
}
