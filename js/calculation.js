function checkScaleForCalculation(event, intendedCalculation) {
  const topBottomProperties = getPropertiesOfBothFeatures(event);
  const topFeature = topBottomProperties.top;
  const bottomFeature = topBottomProperties.bottom;

    if(calculationAllowedForScale(topFeature.scale, intendedCalculation)){
      return true;
    }
    else {
      throw Error("" + intendedCalculation + " not allowed for " + topFeature.scale);
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
    const topValue = topBottomProperties.value;
    const bottomValue = topBottomProperties.bottomValue;
    console.log("top : " +topValue);
    console.log("bottom : "+ bottomValue);
    return topValue - bottomValue;
  }
  catch (error) {
    console.log("ERROR, NOT BOTH FEATURES ARE GIVEN")
  }
}

function equalityTopBottomFratureValues(event) {
  try{
    const topBottomProperties = getPropertiesOfBothFeatures(event);
    const topValue = topBottomProperties.value;
    const bottomValue = topBottomProperties.bottomValue;
    console.log("top : " +topValue);
    console.log("bottom : "+ bottomValue);
    return topValue === bottomValue;
  }
  catch(error) {
    console.log("ERROR, NOT BOTH FEATURES ARE GIVEN")

  }
};

function greaterTopBottomFratureValues(event) {
  try{
    const topBottomProperties = getPropertiesOfBothFeatures(event);
    const topValue = topBottomProperties.value;
    const bottomValue = topBottomProperties.bottomValue;
    console.log("top : " +topValue);
    console.log("bottom : "+ bottomValue);
    return topValue > bottomValue;
  }
  catch(error) {
    console.log("ERROR, NOT BOTH FEATURES ARE GIVEN")
  }
};

function smallerTopBottomFratureValues(event) {
  try{
    const topBottomProperties = getPropertiesOfBothFeatures(event);
    const topValue = topBottomProperties.value;
    const bottomValue = topBottomProperties.bottomValue;
    console.log("top : " +topValue);
    console.log("bottom : "+ bottomValue);
    return topValue < bottomValue;
  }
  catch(error) {
    console.log("ERROR, NOT BOTH FEATURES ARE GIVEN")
  }
};


function addTopBottomFratureValues(event) {
  try{
    const topBottomProperties = getPropertiesOfBothFeatures(event);
    const topValue = topBottomProperties.value;
    const bottomValue = topBottomProperties.bottomValue;
    console.log("top : " +topValue);
    console.log("bottom : "+ bottomValue);
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
    const topValue = topBottomProperties.value;
    const bottomValue = topBottomProperties.bottomValue;
    console.log("top : " +topValue);
    console.log("bottom : "+ bottomValue);
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
