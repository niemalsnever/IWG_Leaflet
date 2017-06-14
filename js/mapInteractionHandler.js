

function mouseover(event) {
    var layer = event.target;

    highlightFeature(layer);
    playBorderSound();

    if(pressedKeys.navigate) {
      while(pressedKeys.navigate) {
        // Aktuelle Mausposition
        // Er,ottöe nächste Feature
        // Nehme dieses als Navigationsausgangspunkt - alle Weiteren Berechnungen auf diesen Koordinaten.
        // Ermittle kürzeste Distanz
        // Wenn Sich diese geändert hat:
        //    Änder Ton
        //    Ansonsten spiele ton weiter
      }
    }

    if(pressedKeys.calculate) {
      console.log("differenceTopBottomFratureValues() " + differenceTopBottomFratureValues(event));
    }
    else {
      sayPropertyName(layer);
      sayPropertyValueAndUnit(layer);
    }

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
      '<b>' + props.name + '</b><br />' + props.value + ' ' + props.unit :
      'Hover over a state');
  };

  info.addTo(map);
};
