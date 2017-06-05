function getColor(numericValue) {
	return numericValue > 1000 ? '#252525' :
        numericValue > 500  ? '#525252' :
        numericValue > 200  ? '#737373' :
        numericValue > 100  ? '#969696' :
        numericValue > 50   ? '#bdbdbd' :
        numericValue > 20   ? '#d9d9d9' :
        numericValue > 10   ? '#f0f0f0' :
                              '#ffffff';
};

function setFeatureStyle(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
};
