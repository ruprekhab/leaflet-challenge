# Leaflet Challenge: Earthquake Visualization

## Overview
The US Geological Survey (USGS) collects massive amounts of earthquake data daily from around the globe. This project aims to develop an interactive map using **Leaflet.js** to visualize earthquake data.

---

## Repository Structure

```plaintext
leaflet-challenge
├── Leaflet-Part-1
│   ├── index.html       # Main HTML file
│   ├── style.css        # Optional CSS for styling
│   ├── logic.js         # JavaScript for visualization (Part 1)
└── README.md            # Project documentation
```

---

## Instructions

### Part 1: Create the Earthquake Visualization

1. **Dataset Selection**:
   - The USGS provides earthquake data in GeoJSON format, updated every five minutes.
   - Visit the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) to select a dataset. This project uses the `all_week.geojson` dataset.

2. **Visualization Requirements**:
   - Use **Leaflet.js** to create a map plotting all earthquakes based on their longitude and latitude.
   - Customize the markers:
     - **Marker Size**: Reflects earthquake magnitude.
     - **Marker Color**: Indicates depth, using a color scale.
   - Include interactive **popups** with details about each earthquake (e.g., magnitude, depth, location).
   - Add a **legend** to explain the color coding for depth.

3. **Technical Details**:
   - Fetch earthquake data via the GeoJSON feed using `d3.json()`.
   - Use the `L.circleMarker` function to create markers with dynamic properties (size and color).
   - Create a **base map** with layers using OpenStreetMap tiles.

4. **Code Implementation**:
   - The main functionality is implemented in `logic.js`.
   - The map is centered at `[38.7946, -106.5348]` with an initial zoom level of 6.
   - The `circleColor()` function determines marker colors based on depth ranges.

---

## Features

- **Interactive Map**: Displays earthquake locations with markers sized by magnitude and colored by depth.
- **Popups**: Provide detailed information about each earthquake.
- **Legend**: Explains color coding for depth levels.
- **Real-Time Data**: The map fetches live earthquake data from the USGS GeoJSON feed.

---

## Getting Started

### Prerequisites

- Install **Leaflet.js**:
  ```html
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"></script>
  ```
- Install **D3.js**:
  ```html
  <script src="https://d3js.org/d3.v5.min.js"></script>
  ```

### Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/leaflet-challenge.git
   ```
2. Open `index.html` in your browser.

---

## Acknowledgments

- **USGS**: For providing real-time earthquake data via their GeoJSON feeds.
- **Leaflet.js**: For the interactive mapping library.
- **D3.js**: For data fetching and manipulation.
