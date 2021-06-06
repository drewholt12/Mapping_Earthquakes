# Mapping_Earthquakes

## Prupose
This challenge utilizes JavaScript, Leaflet.js, and GeoJSON data to create an HTML page displaying earthquakes.  The earthquake data is retrieved from an outside source in json format and converted to be used with JavaScript and Leaflet.  The resulting page shows tectonic plates with popup markers indicated the plates that converge at that spot, recent earthquakes with magnitude and location information, and finally utilizes multiple map layers from MapBox for user preference.  


### Results
Deliverable 1- add Tectonic Plate Data
Tectonic plate data was added to the map on the HTML page.  The GeoJSON data was converted using d3.json() method and added to the mapbox as a geojson layer.  The line color and popup information were coded to be easily seen.  

![Tectonic Plate with popup](https://user-images.githubusercontent.com/79231355/120911607-4e662d80-c64e-11eb-8cae-ad370aecf899.png)


Deliverable 2- Major Earthquake Data
Another data source was used to pull in GeoJSON data specific to earthquakes with a magnitude greater than 4.5.  These were styled with different colors than the other earthquake data for visual differentiation.  Also, the popup markers read "Major Earthquake".  

![Major Earthquake](https://user-images.githubusercontent.com/79231355/120911652-97b67d00-c64e-11eb-945c-73950d0e8469.png)

Deliverable 3- A Third Map Layer
A third map layer, dark map, was added.  Adding different map layers provides additional information for users, depending on the type of map being utilized.  These different map layer types can also enhance the visual differentiation between the map and the markers so that users can better identify where those markers are located.  Adding a dark map layer provides increased contrast from the earth tone colors used in the markers for this map.  

![third map layer added](https://user-images.githubusercontent.com/79231355/120911681-d3514700-c64e-11eb-992f-ef6a75a8ed58.png)

