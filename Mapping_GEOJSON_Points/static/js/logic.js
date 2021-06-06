// // Add console.log to check to see if our code is working.
// console.log("working");

// // Create the map object with a geographic center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.  useful when multiple tile layers or a background image of maps
// let map = L.map("mapid", {
//   center: [36.1733, -120.1794],
//   zoom: 7
// });

// Changed map object to use setview() method
// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// multiple points- replaced marker var with cities equal to the cities we want to mark. (then moved to cities.js)
// Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function (city) {
//   console.log(city)
//   L.circleMarker(city.location, {  // objects passed through the marker are the ID for the marker text and the actual location   Then we changed marker to circleMarker
//     radius: city.population/200000,
//     color: "orange",
//       lineweight: 4,
//     fillColor: "orange"  
//   })
//     // create popup for the marker when clicked to contain city name and city state and city population from the city array with city pop as a heading font --  toLocaleString() adds the thousands comma
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>") 
//     .addTo(map);
// });
// skill drill for above- changed radius to divided by 200,000... chaged color to orange, fill to orange, and lineweight to 4--  then changed to darkmap below

// // Coordinates for each point to be used in the line.  FOR A SINGLE LINE SERIES.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);

//  Add a circle marker to the map for Los Angeles, California.
// L.circle([34.0522, -118.2437], {
//   radius: 300,
//   color: "black",
//   fillColor: "lightyellow"
// }).addTo(map);

// update to circle marker method
// L.circleMarker([34.0522, -118.2437], {
//   radius: 300,
//   color: "black",
//   fillColor: "lightyellow"
// }).addTo(map);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([30, 30], 2);

// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}  //geoJSON uses long/lat instead of lat/long
// ]};

// Grabbing our GeoJSON data
// pointToLayer method
// L.geoJson(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>" + feature.properties.city + "</h2>");
//   }

// }).addTo(map);

//onEachFeature method
// L.geoJson(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup(`<h3>Airport code: ${feature.properties.faa}</h3><hr><p>Airport Name: ${feature.properties.name}</p>`);
//    }
// }).addTo(map);


// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//   attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   accessToken: API_KEY
// });



// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// // Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/drewholt12/Mapping_Earthquakes/Mapping_GEOJSON_Points/majorAirports.json";



// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJson(data).addTo(map);
// });

// Start Earthquake code but for airports 1st

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.  baseMaps adds the key box on the web page to change between base maps
L.control.layers(baseMaps).addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/drewholt12/Mapping_Earthquakes/Mapping_GEOJSON_Points/majorAirports.json";


// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    onEachFeature: function(features, layer){
      layer.bindPopup("<h3>" + "Airport Code: " + features.properties.faa + "</h3> <hr> <h4> Aiport Location: " 
      + features.properties.name + "</h4>")
    }
  }).addTo(map);
});
