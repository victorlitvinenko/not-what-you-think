import { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';

import iconUrl from '../../assets/gif/mapgif.gif';

const LocationMarker = () => {
  const [position, setPosition] = useState({
    lat: 53.902284,
    lng: 27.561831,
  });

  const iconPerson = new L.Icon({
    iconUrl,
    iconSize: new L.Point(80, 85),
  });

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker icon={iconPerson} position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const Map: React.FC = () => {
  return (
    <MapContainer
      center={{ lat: 53.902284, lng: 27.561831 }}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="Created by top 1 team in the world"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default Map;
