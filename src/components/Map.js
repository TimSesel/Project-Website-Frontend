import { useMap, MapContainer, TileLayer, Marker, Popup, Pane, Circle } from "react-leaflet";
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
  const [areas, setAreas] = useState([]);

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
            <Circle center={position} radius={200} fillColor="red" color="red" />
            <Circle center={[position[0] + 0.005, position[1] + 0.005]} radius={500} fillColor="yellow" color="yellow" />
            <Circle center={[position[0] + 0.012, position[1] - 0.035]} radius={200} fillColor="green" color="green" />
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