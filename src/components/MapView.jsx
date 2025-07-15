import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet's default icon issues with React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function MapView({ center, wildfireData }) {
    if (
        !wildfireData ||
        !wildfireData.features ||
        wildfireData.features.length === 0
    ) {
        return <div>No wildfire data available</div>;
    }

    return (
        <MapContainer center={center} zoom={6} style={{ height: "100vh", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {wildfireData.features.map((feature, idx) => {
                const [lon, lat] = feature.geometry.coordinates;
                return (
                    <Marker key={idx} position={[lat, lon]}>
                        <Popup>
                            <div>
                                <strong>Brightness:</strong> {feature.properties.BRIGHTNESS} <br />
                                <strong>Date:</strong> {feature.properties.ACQ_DATE}
                            </div>
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
}
