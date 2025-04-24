import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';

const toNumber = (val) => typeof val === 'string' ? parseFloat(val) : val;

const RoutingControl = ({ from, to, setRouteInfo }) => {
  const map = useMap();
  const routingControlRef = useRef(null);

  useEffect(() => {
    if (!map) return;

    const fromLatLng = [toNumber(from[0]), toNumber(from[1])];
    const toLatLng = [toNumber(to[0]), toNumber(to[1])];

    if (
      isNaN(fromLatLng[0]) || isNaN(fromLatLng[1]) ||
      isNaN(toLatLng[0]) || isNaN(toLatLng[1])
    ) {
      console.error("Invalid coordinates:", fromLatLng, toLatLng);
      return;
    }

    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current);
    }

    const fromIcon = L.icon({
      iconUrl: '/images/from-icon.png', 
      iconSize: [50, 50],
      iconAnchor: [16, 32],
    });

    routingControlRef.current = L.Routing.control({
      waypoints: [
        L.latLng(fromLatLng[0], fromLatLng[1]),
        L.latLng(toLatLng[0], toLatLng[1]),
      ],
      routeWhileDragging: false,
      createMarker: function (i, wp) {
       
        return i === 0
          ? L.marker(wp.latLng, { icon: fromIcon })
          : L.marker(wp.latLng); 
      },
    }).addTo(map);

    routingControlRef.current.on('routesfound', function (e) {
      const route = e.routes[0];
      const { totalDistance, totalTime } = route.summary;
      setRouteInfo({
        distance: (totalDistance / 1000).toFixed(2),
        time: (totalTime / 60).toFixed(2),
      });
    });

    return () => {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }
    };
  }, [from, to, map, setRouteInfo]);

  return null;
};

const RoutingMap = ({ from, to }) => {
  const [routeInfo, setRouteInfo] = useState(null);

  if (!from || !to || from.length !== 2 || to.length !== 2) {
    return <div>Loading map...</div>;
  }

  const center = [
    (toNumber(from[0]) + toNumber(to[0])) / 2,
    (toNumber(from[1]) + toNumber(to[1])) / 2,
  ];

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <MapContainer
        center={center}
        zoom={12}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <RoutingControl from={from} to={to} setRouteInfo={setRouteInfo} />
      </MapContainer>

      {routeInfo && (
        <div className='absolute top-[360px] right-[10px] bg-white p-[10px] rounded-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.2)] z-[1000]'>
          
            <strong>Route Info</strong><br />
            Distance: {routeInfo.distance} km<br />
            Estimated Time: {routeInfo.time} mins
          
          
        </div>
      )}
    </div>
  );
};

export default RoutingMap;
