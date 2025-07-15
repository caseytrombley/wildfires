import React from "react";
import useWildfireData from "./components/WildfireFetcher";
import MapView from "./components/MapView";

function App() {
    const { data, loading, error } = useWildfireData();

    if (loading) {
        return <div style={{ padding: 20 }}>Loading wildfire data...</div>;
    }

    if (error) {
        return <div style={{ padding: 20, color: "red" }}>Error: {error.message}</div>;
    }

    if (!data || !data.features || data.features.length === 0) {
        return <div style={{ padding: 20 }}>No wildfire data available</div>;
    }

    // If we got this far, data is loaded and valid
    return <MapView center={[37.7749, -122.4194]} wildfireData={data} />;
}

export default App;
