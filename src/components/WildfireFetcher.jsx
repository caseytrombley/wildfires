import { useEffect, useState } from "react";
import axios from "axios";

export default function useWildfireData() {
    const [wildfireData, setWildfireData] = useState([]);

    useEffect(() => {
        const fetchFires = async () => {
            try {
                const res = await axios.get(
                    "https://firms.modaps.eosdis.nasa.gov/data/active_fire/c6.1/viirs_snpp_nrt/geojson/viirs_snpp_nrt_USA_contiguous_and_Hawaii_24h.geojson"
                );
                const features = res.data.features.map((f) => ({
                    lat: f.geometry.coordinates[1],
                    lon: f.geometry.coordinates[0],
                    brightness: f.properties.brightness,
                    confidence: f.properties.confidence,
                    acq_date: f.properties.acq_date,
                }));
                setWildfireData(features);
            } catch (err) {
                console.error("Failed to load wildfire data", err);
            }
        };

        fetchFires();
    }, []);

    return wildfireData;
}
