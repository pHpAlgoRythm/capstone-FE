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
      iconUrl: '/images/ambulance.png',
      iconSize: [70, 70],
      iconAnchor: [20, 32],
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
    <div className='w-full h-full p-1 mt-10'>
      <MapContainer
        center={center}
        zoom={12}
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <RoutingControl from={from} to={to} setRouteInfo={setRouteInfo} />
      </MapContainer>

      {routeInfo && (
        <div className='absolute bottom-2 left-2 md:bottom-3 md:left-3 bg-white p-2 rounded-lg z-1000 shadow-lg'>
          <strong>Route Info</strong><br />
          <p className='text-xs md:text-2xl'>  Distance: {routeInfo.distance} km</p>
          <p className='text-xs md:text-2xl'>Estimated Time: {routeInfo.time} mins</p>
        </div>
      )}
    </div>
  );
};

export default RoutingMap;
