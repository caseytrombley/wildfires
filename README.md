# Wildfire Incident Explorer

This project is a React web application that visualizes near-real-time wildfire incident data on an interactive map. It uses public wildfire hotspot data (e.g., NASA VIIRS) to plot thousands of fire detections worldwide with clustering and details on each hotspot.

The app is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [React Leaflet](https://react-leaflet.js.org/) for map rendering and marker clustering.

---

## What this project does

- Loads large GeoJSON wildfire hotspot data sets asynchronously.
- Filters or subsets the data for performance (e.g., by region like North America).
- Displays fire detections as clustered markers on a zoomable, pannable Leaflet map.
- Clicking a marker shows details like brightness and acquisition date.
- Supports future enhancements like filtering by date or confidence.

---

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make edits, and you will see lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.  
More info: [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

### `npm run build`

Builds the app for production to the `build` folder.  
It bundles React in production mode and optimizes the build for the best performance.

More info: [deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run eject`

**Warning: This is a one-way operation.**

Ejects the app configuration for full control over the build setup.

More info: [ejecting](https://facebook.github.io/create-react-app/docs/available-scripts#npm-run-eject)

---

## Learn More

- [React documentation](https://reactjs.org/)
- [React Leaflet documentation](https://react-leaflet.js.org/)
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)

---

## Notes

- This project is designed to handle large geospatial datasets efficiently using clustering and data filtering.
- The data source is public wildfire detection data (NASA FIRMS/VIIRS).
- For performance, consider filtering data by region or date before loading.

---

