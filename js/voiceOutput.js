function sayPropertyName(layer) {
    let propertyName = layer.feature.properties.name;
    if(!propertyName){
      throw new Error("Property name is undefined");
    }
    responsiveVoice.speak("Property name " + propertyName);
};

function sayPropertyValueAndUnit(layer) {
    let propertyValue = layer.feature.properties.value;
    if(!propertyValue){
      throw new Error("Property value is undefined");
    }
    responsiveVoice.speak("Property value " + propertyValue + layer.feature.properties.unit);
};
