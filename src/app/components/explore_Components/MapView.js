// components/SimpleMapComponent.js
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 40.7128, 
  lng: -74.0060,
};

export default function MapView({ center = defaultCenter, zoom = 12 }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '' // ⬅ Leave empty for now, add your key here in future
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={zoom}
    >
      {/* Future: Add markers, info windows, etc. */}
    </GoogleMap>
  ) : (
    <p>Loading map...</p>
  );
}

