var info = L.control(); // Used to display on mouseover property name and density

var pressedKeys = {
  calculate : false,
  navigate : false
}

var nearestFeatureToMouseOnMap = null;

var mapsToBeCompared = { // stores the leaflet-GeoJson and the raw GeoJson. Want to use both because it is easier to get bottom values with raw GeoJSON
  top: {
    raw: null,
    leaflet: null
  },
  bottom: {
    raw: null,
    leaflet: null
  }
};


$(document).on("keypress", function (e) {
  var code = e.keyCode || e.which;
  console.log(code)
  if(code === 99) { //99 stands for 'c', like calculate
    pressedKeys.calculate = !pressedKeys.calculate;
  };

  if(code === 110) { //110 stands for 'n', like navigate

    nearestFeatureToMouseOnMap = null; // Delete it so it is calculated agin after a new press of null
    pressedKeys.navigate = !pressedKeys.navigate;

    if(!pressedKeys.navigate) { // If nafigatoin stops, stop sound
      navigationSound.stop();
    }
    else {  // If navigation starts
      navigationSound.play();
      navigationSound.frequency = 0;
    }
  };

});



function getPropertiesOfBothFeatures(event) {
  const result = {
    top: event.target.feature.properties,
    bottom: getBottomFeatureWithCoordinates(event.latlng).properties
  };

  return result;
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
    mouseover: mouseover, // Could be sound for new Feature
    mouseout: resetHighlight,
    click: getPropertiesOfBothFeatures
  });
};



function addMapsToMapsToBeCompared(topMap, bottomMap) {
  mapsToBeCompared.top = topMap;
  mapsToBeCompared.bottom = bottomMap;
};
