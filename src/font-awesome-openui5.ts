if (!jQuery) {
	throw new Error('No jQuery.');
}

if (!jQuery.sap && !sap) {
	throw new Error('Cannot find OpenUI5 library.');
}
