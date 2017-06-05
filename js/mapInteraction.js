var info = L.control(); // Used to display on mouseover property name and density

const mapsToBeCompared = { // stores the leaflet-GeoJson and the raw GeoJson. Want to use both because it is easier to get bottom values with raw GeoJSON
  top: {
    raw: null,
    leaflet: null
  },
  bottom: {
    raw: null,
    leaflet: null
  }
};


function getValuesOfBothFeatures(event) {
  console.log("getValuesOfBothFeatures");

  console.log("top: ");
  console.log(topLayer.feature.properties);

  console.log("bottom: ");
  let bottomFeature = getBottomFeatureWithCoordinates(event.latlng).properties;
  console.log(bottomFeature)
  let topLayer = event.target;
};


function getBottomFeatureWithCoordinates(latlng) {
  for (let i = 0; i < mapsToBeCompared.bottom.raw.features.length; i++) {
    if (pointInPolygon(latlng, mapsToBeCompared.bottom.raw.features[i].geometry.coordinates[0])) {
      return mapsToBeCompared.bottom.raw.features[i];
    }
  }
  return false;
};


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
};

function addEventsToFeatures(feature, layer) {
  layer.on({
    mouseover: highlightFeature, // Could be sound for new Feature
    mouseout: resetHighlight,
    click: getValuesOfBothFeatures
  });
};

function addMapsToMapsToBeCompared(topMap, bottomMap) {
  mapsToBeCompared.top = topMap;
  mapsToBeCompared.bottom = bottomMap;
};
