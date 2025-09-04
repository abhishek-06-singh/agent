import React from 'react';
import Details from '../../components/DetailPageComponents/Details'
import listing from '../../Data/Real_Estate.json';

export default function DetailsPage({ params }) {
  const { id } = params;
  const property = listing.find((item) => item.id === id);
  if (!property) {
    return <div>Property not found</div>;
  }



  return (
    <div>
      <Details listing={listing} property={property} />



    </div>
  );
}
