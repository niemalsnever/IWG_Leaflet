function mouseover(event) {
    var layer = event.target;

    sayPropertyName(layer);
    sayPropertyValueAndUnit(layer);
    highlightFeature(layer);
};


function highlightFeature(layer) {
  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });

 if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  };

  info.update(layer.feature.properties);
}


function resetHighlight(event) {
  geojson.resetStyle(event.target);
  info.update();
};


function addTopMapToMap() {
  mapsToBeCompared.top.leaflet.addTo(map);
};


// USE LATER FOR LAYER SIWITCHING
// function switchTopBottomMapAndUpdateView(){
//   map.removeLayer(mapsToBeCompared.top.leaflet);
//   let newTop = mapsToBeCompared.bottom;
//   mapsToBeCompared.bottom = mapsToBeCompared.top;
//   mapsToBeCompared.top = newTop;
//   // addTopMapToMap?
// };
//
//
// function removeLayer(layer){
//   console.log("map = " + map);
//   map.removeLayer(layer);
// };



function setActionOnInfoControl(map) {
  info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };

  // method that we will use to update the control based on feature properties passed
  info.update = function(props) {
    this._div.innerHTML = '<h4>US Population Density</h4>' + (props ?
      '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>' :
      'Hover over a state');
  };

  info.addTo(map);
};
