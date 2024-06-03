import { useMap, MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import VStack from "@mui/joy/Stack";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import mqtt from "mqtt";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

function MapPositionSetter({ position }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, map.getZoom());
  }, [position, map]);

  return null;
}

function Map() {
  const [position, setPosition] = useState([0, 0]);
  const [noises, setNoises] = useState([]);

  function createMqttClient() {
    const mqttClient = mqtt.connect("ws://localhost:8888", { keepalive: 75 });
    mqttClient.on("connect", () => {
      console.log("[MQTT] Connected");
      mqttClient.subscribe("noise/updates", (err) => {
        if (!err) {
          console.log("[MQTT] Subscribed to noise/updates");
        }
      });
    });

    mqttClient.on("message", (topic, message) => {
      console.log(`[MQTT] Topic: ${topic}, Message: ${message.toString()}`);
    });

    return () => {
      mqttClient.end();
      console.log("[MQTT] Disconnected");
    };
  }

  function getCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  async function getNoises() {
    const res = await fetch("http://localhost:3001/datas", {
      method: "GET",
    });
    const data = await res.json();
    if (data) {
      setNoises(data);
    }
  }

  useEffect(() => {
    getCurrentPosition();
    getNoises();
    return createMqttClient();
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
            <>
              {noises.map((noise, index) => (
                <Circle
                  key={index}
                  center={[noise.latitude, noise.longitude]}
                  radius={noise.decibels * 100}
                  color="red"
                  fillColor="red"
                />
              ))}
            </>
          </Marker>
        </MapContainer>
      </VStack>
    </div>
  );
}
export default Map;

/*

import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

function Map(){
  return (
    <Tabs aria-label="Dates" defaultValue={0} sx={{ borderBottomLeftRadius: 16, borderBottomRightRadius: 16 }}>
      <TabList sx={{
        p: 1,
        justifyContent: 'center',
        [`&& .${tabClasses.root}`]: {
          flex: 'initial',
          bgcolor: 'transparent', '&:hover': {bgcolor: 'background.level1',},
          [`&.${tabClasses.selected}`]: {
            color: 'primary.100', '&::after': {
              height: 2,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              bgcolor: 'primary.100',
            },
          },
        },
      }}
      >
        <Tab>First tab</Tab>
        <Tab>Second tab</Tab>
        <Tab>Third tab</Tab>
      </TabList>
      <TabPanel value={0} sx={{width: '100%'}}>
        <b>First</b> tab panel
      </TabPanel>
      <TabPanel value={1}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2}>
        <b>Third</b> tab panel
      </TabPanel>
    </Tabs>
  );
}

*/
