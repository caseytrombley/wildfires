import React, { useState, useEffect } from "react";
import MapView from "./components/MapView";

const sampleWildfireData = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [-122.4194, 37.7749], // San Francisco
            },
            properties: {
                BRIGHTNESS: 320,
                ACQ_DATE: "2025-07-15",
            },
        },
        {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [-121.4944, 38.5816], // Sacramento
            },
            properties: {
                BRIGHTNESS: 280,
                ACQ_DATE: "2025-07-14",
            },
        },
    ],
};

function App() {
    const [wildfireData, setWildfireData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Simulate data loading
    useEffect(() => {
        setTimeout(() => {
            setWildfireData(sampleWildfireData);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {loading && <div style={{ padding: 20 }}>Loading wildfire data...</div>}
            {!loading && wildfireData && (
                <MapView center={[37.7749, -122.4194]} wildfireData={wildfireData} />
            )}
        </>
    );
}

export default App;
