import React from "react";
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import karnatakaGeoJSON from "../data/karnataka.json"; 

const MapChart = ({ literacyData }) => {
  
  const geoJSONStyle = {
    fillColor: "blue",
    color: "white",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.4,
  };

  return (
    <MapContainer
      center={[15.3173, 75.7139]} 
      zoom={7}
      className="h-96 rounded-2xl shadow-lg"
      style={{ height: "500px", width: "100%" }}
      maxBounds={[[11.5, 74], [18.5, 78]]} 
      maxBoundsViscosity={1.0} 
    >
      
      <TileLayer
  url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
  attribution="&copy; ESRI, OpenStreetMap contributors"
/>

     
      <GeoJSON data={karnatakaGeoJSON} style={geoJSONStyle} />

     
      {literacyData.map((state, index) =>
        state.state === "Karnataka" ? (
          <Marker key={index} position={[state.lat, state.lng]}>
            <Popup>{`${state.state}: ${state.literacyRate}%`}</Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
};

export default MapChart;
