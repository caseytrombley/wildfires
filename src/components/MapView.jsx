import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapView({ center, wildfireData }) {
    return (
        <MapContainer center={center} zoom={5} style={{ height: "100vh", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {wildfireData.map((fire, idx) => (
                <Marker key={idx} position={[fire.lat, fire.lon]}>
                    <Popup>
                        <strong>{fire.brightness}</strong><br />
                        Date: {fire.acq_date}<br />
                        Confidence: {fire.confidence}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
