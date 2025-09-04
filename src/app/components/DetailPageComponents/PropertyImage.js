import React from 'react';
import Image from 'next/image';

export default function PropertyImage({ property }) {
  return (
    <div
      className="
        relative max-w-7xl 
        h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] 
        mx-auto rounded-lg overflow-hidden
      "
    >
      {/* Property Image */}
      <Image
        src={property.image}
        alt={property.title || `Property ${property.id}`}
        width={1200}
        height={800}
        className="w-full h-full object-cover"
        priority
      />

      {/* "See All Photos" button */}
      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-6">
        <div
          className="
            bg-primary border border-background 
            px-3 py-1 sm:px-4 sm:py-2 
            rounded-lg font-semibold text-background 
            flex items-center gap-2 text-xs sm:text-sm md:text-base
          "
        >
          <p>See All Photos</p>
        </div>
      </div>
    </div>
  );
}
