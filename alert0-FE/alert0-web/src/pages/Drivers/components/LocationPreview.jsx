import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';

const LocationPreview = ({ originLat, originLng, destLat, destLng }) => {
  const [isLoading, setIsLoading] = useState(true);

  const googleMapUrl = `https://www.google.com/maps/embed/v1/directions?key=YOUR_GOOGLE_MAPS_API_KEY&origin=${originLat},${originLng}&destination=${destLat},${destLng}&zoom=14`;

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
          <CircularProgress />
        </div>
      )}
      <iframe
        src={googleMapUrl}
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        style={{ border: 0 }}
        title="Google Maps Directions"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default LocationPreview;
