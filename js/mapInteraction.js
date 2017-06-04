var info = L.control();
const mapsToBeCompared = {
  top: {
    raw: null,
    leaflet: null
  },
  bottom: {
    raw: null,
    leaflet: null
  }
}



function getValuesOfBothFeatures(event) {

  console.log("getValuesOfBothFeatures");
  console.log(event.latlng);
  console.log("XXX ");
  //console.log(pointInPolygon(event.latlng, mapsToBeCompared.top.raw.features[0].geometry.coordinates[0]));

  let bottomFeature = getBottomFeatureWithCoordinates(event.latlng).properties;
  console.log(bottomFeature)
  let topLayer = event.target;
  console.log("topLayer"); console.log(topLayer.feature.properties);

}


function getBottomFeatureWithCoordinates(latlng) {

  for (let i = 0; i < mapsToBeCompared.bottom.raw.features.length; i++) {
    if (pointInPolygon(latlng, mapsToBeCompared.bottom.raw.features[i].geometry.coordinates[0])) {
      return mapsToBeCompared.bottom.raw.features[i];
    }
  }
  return false;
}

function addEventsToFeatures(feature, layer) {
  layer.on({
    mouseover: highlightFeature, // Could be sound for new Feature
    mouseout: resetHighlight,
    click: getValuesOfBothFeatures
  });
}



function setActionOnEachGeoJSONAndAddThemToMapsToBeCompared(map) {

  geojson = L.geoJson(statesData, {
    style: setFeatureStyle,
    onEachFeature: addEventsToFeatures
  });

  geojson2 = L.geoJson(statesData2, {
    style: setFeatureStyle,
    onEachFeature: addEventsToFeatures
  });

  let top = {
    raw: statesData,
    leaflet: geojson
  }

  let bottom = {
    raw: statesData2,
    leaflet: geojson2
  }
  addMapsToMapsToBeCompared(top, bottom);

}

function addMapsToMapsToBeCompared(topMap, bottomMap) {
  mapsToBeCompared.top = topMap;
  mapsToBeCompared.bottom = bottomMap;

  console.log("mapsToBeCompared.top  " + mapsToBeCompared.top);
  console.log("mapsToBeCompared.bottom " + mapsToBeCompared.bottom);
}
