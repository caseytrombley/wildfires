import React from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapView({ center, wildfireData }) {
    console.log("MapView wildfireData:", wildfireData);

    if (!wildfireData || !wildfireData.features || wildfireData.features.length === 0) {
        return <div>No wildfire data available</div>;
    }

    return (
        <MapContainer center={center} zoom={3} style={{ height: "100vh", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <MarkerClusterGroup>
                {wildfireData.features.map((feature, idx) => {
                    const [lon, lat] = feature.geometry.coordinates;
                    return (
                        <Marker key={idx} position={[lat, lon]}>
                            <Popup>
                                <strong>Brightness:</strong> {feature.properties.BRIGHTNESS} <br />
                                <strong>Date:</strong> {feature.properties.ACQ_DATE}
                            </Popup>
                        </Marker>
                    );
                })}
            </MarkerClusterGroup>
        </MapContainer>
    );
}
