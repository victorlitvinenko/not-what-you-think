import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map: React.FC = () => {
  return (
    <MapContainer>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
