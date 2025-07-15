import MapView from "./components/MapView";
import useWildfireData from "./components/WildfireFetcher";

function App() {
  const center = [37.7749, -122.4194]; // Centered on California
  const wildfireData = useWildfireData();

  return <MapView center={center} wildfireData={wildfireData} />;
}

export default App;
