import { useState, useEffect } from "react";
import axios from "axios";

export default function useWildfireData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Fetching wildfire data...");
        axios
            .get("/data/fire_nrt_SV-C2_636579_NA.json")
            .then((res) => {
                console.log("Data fetched:", res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.error("Error loading wildfire data", err);
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}
