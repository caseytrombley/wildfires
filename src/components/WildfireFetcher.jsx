import { useState, useEffect } from "react";
import axios from "axios";

export default function useWildfireData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("/data/fire_nrt_SV-C2_636579.json")
            .then((res) => setData(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}
