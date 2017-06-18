function checkScaleForCalculation(event, intendedCalculation) {
  const topBottomProperties = getPropertiesOfBothFeatures(event);
  const topFeature = topBottomProperties.top;
  const bottomFeature = topBottomProperties.bottom;

  if(topFeature.scale === bottomFeature.scale) {
    if(calculationAllowedForScale(topFeature.scale, intendedCalculation)){
      return true;
    }
    else {
      throw Error("" + intendedCalculation + " not allowed for " + topFeature.scale);
    }
  }
  else {
    throw Error("Top and Botom features do not have the same scale");
  }
};

function calculationAllowedForScale(scale, intendedCalculation) {
  const allowedCalculation = scaleNiveauCalculation[scale];
  return allowedCalculation.find(element => {
    return element == intendedCalculation;
  });
};

function differenceTopBottomFratureValues(event) {
  try {
    const topBottomProperties = getPropertiesOfBothFeatures(event);
    const topValue = topBottomProperties.top.value;
    const bottomValue = topBottomProperties.bottom.value;
    console.log("top : " +topBottomProperties.top.name + " " + topBottomProperties.top.value);
    console.log("bottom : "+ topBottomProperties.bottom.name + " " + topBottomProperties.bottom.value);
    return topValue - bottomValue;
  }
  catch (error) {
    console.log("ERROR, NOT BOTH FEATURES ARE GIVEN")
  }
}

function equalityTopBottomFratureValues(event) {
  try{
    const topBottomProperties = getPropertiesOfBothFeatures(event);
    const topValue = topBottomProperties.top.value;
    const bottomValue = topBottomProperties.bottom.value;
    console.log("top : " +topBottomProperties.top.name + " " + topBottomProperties.top.value);
    console.log("bottom : "+ topBottomProperties.bottom.name + " " + topBottomProperties.bottom.value);
    return topValue === bottomValue;
  }
  catch(error) {
    console.log("ERROR, NOT BOTH FEATURES ARE GIVEN")

  }
};

function greaterTopBottomFratureValues(event) {
  try{
    const topBottomProperties = getPropertiesOfBothFeatures(event);
    const topValue = topBottomProperties.top.value;
    const bottomValue = topBottomProperties.bottom.value;
    console.log("top : " +topBottomProperties.top.name + " " + topBottomProperties.top.value);
    console.log("bottom : "+ topBottomProperties.bottom.name + " " + topBottomProperties.bottom.value);
    return topValue > bottomValue;
  }
  catch(error) {
    console.log("ERROR, NOT BOTH FEATURES ARE GIVEN")
  }
};

function smallerTopBottomFratureValues(event) {
  try{
    const topBottomProperties = getPropertiesOfBothFeatures(event);
    const topValue = topBottomProperties.top.value;
    const bottomValue = topBottomProperties.bottom.value;
    console.log("top : " +topBottomProperties.top.name + " " + topBottomProperties.top.value);
    console.log("bottom : "+ topBottomProperties.bottom.name + " " + topBottomProperties.bottom.value);
    return topValue < bottomValue;
  }
  catch(error) {
    console.log("ERROR, NOT BOTH FEATURES ARE GIVEN")
  }
};


function addTopBottomFratureValues(event) {
  try{
    const topBottomProperties = getPropertiesOfBothFeatures(event);
    const topValue = topBottomProperties.top.value;
    const bottomValue = topBottomProperties.bottom.value;
    console.log("top : " +topBottomProperties.top.name + " " + topBottomProperties.top.value);
    console.log("bottom : "+ topBottomProperties.bottom.name + " " + topBottomProperties.bottom.value);
    console.log("ADD");
    console.log(topValue + bottomValue);
    return topValue + bottomValue;
  }
  catch(error) {
    console.log("ERROR, NOT BOTH FEATURES ARE GIVEN")
  }
}

function quotientTopBottomFratureValues(event) {
  try{
    const topBottomProperties = getPropertiesOfBothFeatures(event);
    const topValue = topBottomProperties.top.value;
    const bottomValue = topBottomProperties.bottom.value;
    console.log("top : " +topBottomProperties.top.name + " " + topBottomProperties.top.value);
    console.log("bottom : "+ topBottomProperties.bottom.name + " " + topBottomProperties.bottom.value);
    console.log("quotient");
    console.log(topValue / bottomValue);
    return topValue / bottomValue;
  }
  catch(error) {
    console.log("ERROR, NOT BOTH FEATURES ARE GIVEN")
  }
}


let scaleNiveauCalculation = {
  "nominal" : ["equality"],
  "ordinal" : ["equality", "greater", "smaller"],
  "interval" : ["equality", "greater", "smaller", "difference", "add"],
  "rational" : ["equality", "greater", "smaller", "difference", "add", "quotient"]
};
