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
