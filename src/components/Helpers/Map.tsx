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

const LocationMarker: React.FC<Record<string, number>> = ({ lat, lng }) => {
  const [position, setPosition] = useState({
    lat,
    lng,
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

const Map: React.FC<Record<string, number>> = ({ capitalLat, capitalLon }) => {
  return (
    <MapContainer
      center={{ lat: capitalLat, lng: capitalLon }}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution="Created by top 1 team in the world"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker lat={capitalLat} lng={capitalLon} />
    </MapContainer>
  );
};

export default Map;
