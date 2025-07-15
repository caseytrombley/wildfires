const fs = require("fs");

// Define North America bounding box
const northAmericaBounds = {
    minLat: 15,
    maxLat: 72,
    minLon: -170,
    maxLon: -50,
};

// Load the big GeoJSON file
const rawData = fs.readFileSync("fire_nrt_SV-C2_636579.json", "utf8");
const geojson = JSON.parse(rawData);

// Filter features within North America bounds
const filteredFeatures = geojson.features.filter(({ geometry }) => {
    if (!geometry || !geometry.coordinates) return false;
    const [lon, lat] = geometry.coordinates;
    return (
        lat >= northAmericaBounds.minLat &&
        lat <= northAmericaBounds.maxLat &&
        lon >= northAmericaBounds.minLon &&
        lon <= northAmericaBounds.maxLon
    );
});

// Create a new GeoJSON object with filtered features
const filteredGeojson = {
    ...geojson,
    features: filteredFeatures,
};

// Save filtered GeoJSON to a new file
fs.writeFileSync("fire_nrt_SV-C2_636579_NA.json", JSON.stringify(filteredGeojson));

console.log(`Filtered data saved. Features count: ${filteredFeatures.length}`);
