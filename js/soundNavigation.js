function getNearestFeature(mouseLat, mouseLng) {
  let nearestFeature = null;
  let nearestDistance = Infinity;

  statesData.features.forEach(feature => {
    let distance = getMinimalDistanceToFeature(feature.geometry.coordinates, mouseLat, mouseLng);
    if (distance < nearestDistance) {
      nearestFeature = feature;
      nearestDistance = distance;
    }
  });
  return {feature: nearestFeature,
          distance: nearestDistance};
};


function getMinimalDistanceToFeature(coordinatesArray, mouseLat, mouseLng) {
  let distance = Infinity;
  coordinatesArray.forEach(element => {
    let tempDistance = getMinimalDistanceToCoordinateGroup(element, mouseLat, mouseLng);
    distance = distance < tempDistance ? distance : tempDistance;
  });
  console.log("getMinimalDistanceToFeature distance : " + distance)
  return distance;
}


function getMinimalDistanceToCoordinateGroup(coordinatesArray, mouseLat, mouseLng) {
  let distance = Infinity;
  coordinatesArray.forEach(element => {
    let tempDist = getDistanceFromLatLonInKm(element[1], element[0], mouseLat, mouseLng);
    distance = distance < tempDist ? distance : tempDist;
  });
  console.log("getMinimalDistanceToCoordinateGroup distance : " + distance);
  return distance;
};




// Distance function taken from https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}
