let map = L.map('showMap').setView([37.8, -96], 4);



L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
    '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="http://mapbox.com">Mapbox</a>',
  id: 'mapbox.light'
}).addTo(map);


map.addEventListener('mousemove', function(ev) {



  if (pressedKeys.navigate) { // To disable sound as soon feature is reached, set pressedKeys.navigate = false
    let lat = ev.latlng.lat;
    let lng = ev.latlng.lng;

    if (!nearestFeatureToMouseOnMap) { // Calculate only onthe for eath press of n. After each press of n, nearestFeatureToMouseOnMap will be set to null
      nearestFeatureToMouseOnMap = getNearestFeature(lat, lng);
    };
    console.log(nearestFeatureToMouseOnMap);

    let currentDistance = getCurrentDistanceToNearestFeature(nearestFeatureToMouseOnMap, lat, lng);
    console.log(currentDistance);

    getFrequenzeForValue(currentDistance);
    navigationSound.frequency = getFrequenzeForValue(currentDistance);

  }


});

setActionOnEachGeoJSONAndAddThemToMapsToBeCompared(map);
addTopMapToMap();
setActionOnInfoControl(map);
addLegend();



function addLegend() {
  let legend = L.control({
    position: 'bottomright'
  });

  legend.onAdd = map => {

    let div = L.DomUtil.create('div', 'info legend'),
      grades = [0, 10, 20, 50, 100, 200, 500, 1000],
      labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (let i = 0; i < grades.length; i++) {
      div.innerHTML +=
        '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    };

    return div;
  };

  legend.addTo(map);
}
