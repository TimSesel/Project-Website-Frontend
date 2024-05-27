import { useMap, MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import Button from "@mui/joy";
import VStack from "@mui/joy/Stack";

function MapPositionSetter({ position }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, map.getZoom());
  }, [position, map]);

  return null;
}

function Map() {
  const [position, setPosition] = useState([0, 0]);

  function getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  useEffect(() => {
    getCurrentPosition();
  }, []);

  return (
    <div>
      <VStack spacing={4}>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <MapPositionSetter position={position} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </VStack>
    </div>
  );
}
export default Map;
