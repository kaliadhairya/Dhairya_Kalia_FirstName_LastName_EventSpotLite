// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for leaflet's default marker icon not showing up
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'leaflet/dist/images/marker-icon-2x.png',
  iconUrl: 'leaflet/dist/images/marker-icon.png',
  shadowUrl: 'leaflet/dist/images/marker-shadow.png',
});

const Map = ({ events }) => (
  <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "50vh", width: "200%" }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    {events.map(event => (
      event.lat !== undefined && event.lng !== undefined ? (
        <Marker key={event.id} position={[event.lat, event.lng]}>
          <div style={{ marginBottom: '20px', zIndex: -100, position: 'relative' }}>
            <Popup>
              <span>{event.name}</span>
            </Popup>
          </div>
        </Marker>
      ) : null
    ))}
  </MapContainer>
);

export default Map;
