var info = L.control(); // Used to display on mouseover property name and density

var pressedKeys = {
  difference: false,
  equal: false,
  greater: false,
  smaller: false,
  add: false,
  quotient: false,
  navigate: false
}

var nearestFeatureToMouseOnMap = null;

var mapsToBeCompared = { // stores the leaflet-GeoJson and the raw GeoJson. Want to use both because it is easier to get bottom values with raw GeoJSON
  top: ""
};


$(document).on("keypress", function(e) {
  var code = e.keyCode || e.which;
  console.log(code)

  if (code === 100) { //100 stands for 'd', like difference
    pressedKeys.difference = !pressedKeys.difference;
    let storePress = pressedKeys.difference;
    setAllKeysFalse(); // Make sure that only one calculation is enabled.
    pressedKeys.difference = storePress;
  } else if (code === 101) { // 101 stands for e like 'equal'
    pressedKeys.equal = !pressedKeys.equal;
    let storePress = pressedKeys.equal;
    setAllKeysFalse(); // Make sure that only one calculation is enabled.
    pressedKeys.equal = storePress;
  } else if (code === 103) { // 103 stands for g like 'greater'
    pressedKeys.greater = !pressedKeys.greater;
    let storePress = pressedKeys.greater;
    setAllKeysFalse(); // Make sure that only one calculation is enabled.
    pressedKeys.greater = storePress;
  } else if (code === 115) { // 115 stands for s like smaller
    pressedKeys.smaller = !pressedKeys.smaller;
    let storePress = pressedKeys.smaller;
    setAllKeysFalse(); // Make sure that only one calculation is enabled.
    pressedKeys.smaller = storePress;
  } else if (code === 97) { // 115 stands for s like smaller
    pressedKeys.add = !pressedKeys.add;
    let storePress = pressedKeys.add;
    setAllKeysFalse(); // Make sure that only one calculation is enabled.
    pressedKeys.add = storePress;
  }
  else if (code === 113) { // 113 stands for q like quotient
    pressedKeys.quotient = !pressedKeys.quotient;
    let storePress = pressedKeys.quotient;
    setAllKeysFalse(); // Make sure that only one calculation is enabled.
    pressedKeys.quotient = storePress;
  } else if (code === 110) { //110 stands for 'n', like navigate
    let storePress = pressedKeys.navigate;
    setAllKeysFalse(); // Make sure that only one calculation is enabled.
    pressedKeys.navigate = storePress;
    nearestFeatureToMouseOnMap = null; // Delete it so it is calculated agin after a new press of null
    pressedKeys.navigate = !pressedKeys.navigate;

    if (!pressedKeys.navigate) { // If nafigatoin stops, stop sound
      navigationSound.stop();
    } else { // If navigation starts
      navigationSound.play();
      navigationSound.frequency = 0;
    }
  };
});

function setAllKeysFalse() {
  for (let key in pressedKeys) {
    if (pressedKeys.hasOwnProperty(key)) {
      pressedKeys[key] = false;
    }
  }
};

function getPropertiesOfBothFeatures(event) {
    console.log(event.target.feature.properties);
    return event.target.feature.properties;
};




function setActionOnEachGeoJSONAndAddThemToMapsToBeCompared(map) {
  geojson = L.geoJson(comparisonFeature, {
    style: setFeatureStyle,
    onEachFeature: addEventsToFeatures
  });

  addMapsToMapsToBeCompared(geojson);
};





function addEventsToFeatures(feature, layer) {
  layer.on({
    mouseover: mouseover, // Could be sound for new Feature
    mouseout: resetHighlight,
    click: getPropertiesOfBothFeatures
  });
};



function addMapsToMapsToBeCompared(topMap) {
  mapsToBeCompared.top = topMap;
};
