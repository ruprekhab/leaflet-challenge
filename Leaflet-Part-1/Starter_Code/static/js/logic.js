// Store the API endpoint to a variable
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Perform a get reuqest to the URL and 
d3.json(url).then(function(data) {
    // Once we get a response, send the data.features object to the createFeatures function.
    createFeatures(data.features);
});

// Create function to determine circle marker color
function circleColor(depth) {
    // Depth ranges and associated colors
    if (depth >= -10 && depth <= 10){
        return '#79ff2f'; }
        else if  (depth > 10 && depth <= 30){
            return "#e1ff2f"; }
            else if  (depth > 30 && depth <= 50){
                return "#ffc762"; }
                else if  (depth > 50 && depth <= 70){
                    return  "#ffb52f"; }
                    else if  (depth > 70 && depth <= 90){
                        return "#ff6349"; }
                        else return  "#ff3716"; }

// Create function to create features: Circle markers and Pop ups
function createFeatures(earthquakeData) {
      // Create a GeoJSON layer that contains the features array from the earthquake data
    let earthquakes = L.geoJson(earthquakeData, {

        //  Convert each feature into a circle marker
        pointToLayer: function(feature, latlng) {
            return L.circleMarker(latlng, {
                radius: feature.properties.mag*5, // Circle size proportional to magnitude
                fillColor: circleColor(feature.geometry.coordinates[2]), // Color based on depth
                color: "#000", // Black border for circles
                fillOpacity:1, // Fully filled
                weight:0.75, // Border thickness
                              
            });
        },
         // Add popups to each feature with relevant information
        onEachFeature: function(feature, layer) {
            layer.bindPopup(`Magnitude: ${feature.properties.mag}<br>Depth: ${feature.geometry.coordinates[2]} km<br>Location: ${feature.properties.place}`)
        }
});// Send earthquakes layer to the createMap function/
    createMap(earthquakes);

}

function createMap(earthquakes) {
    // Create the base layers.
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
    });
     // Create map, giving it the streetmap and earthquakes layers to display on load.
    let myMap = L.map("map", {
     center: [38.7946, -106.5348],
    zoom: 6,
    layers: [street, earthquakes] // Add base layer(street) and earthquakes layer on load 
  
    })
    // Add legend to the map
 let legend = L.control({ position: "bottomright" });

 legend.onAdd = function () {
   let div = L.DomUtil.create("div", "info legend");
   div.style.backgroundColor = "#ffffff";
   div.style.padding = "10px";
   div.style.borderRadius = "5px";
   

   // Define the depth ranges and corresponding colors
   let depthRanges = [
     { range: "-10 to 10", color: "#79ff2f" },
     { range: "10 to 30", color: "#e1ff2f" },
     { range: "30 to 50", color: "#ffc762" },
     { range: "50 to 70", color: "#ffb52f" },
     { range: "70 to 90", color: "#ff6349" },
     { range: "90+", color: "#ff3716" }
   ];

   // Generate legend content
   depthRanges.forEach((item) => {
     div.innerHTML +=
       `<i style="background: ${item.color}; width: 18px; height: 18px; display: inline-block; margin-right: 8px;"></i>` +
       `${item.range}<br>`;
   });

   return div;
 };

 // Add the legend to the map
 legend.addTo(myMap);
    

}