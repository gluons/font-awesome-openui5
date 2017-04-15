import * as isNil from 'lodash.isnil';

/**
 * Check the requirement for Font Awesome OpenUI5.
 * Return error when requirement is not met.
 *
 * @returns {Error}
 */
function checkRequirement(): Error {
	if (isNil(jQuery)) {
		return new Error('jQuery not found.');
	} else if (isNil(jQuery.sap) || isNil(sap)) {
		return new Error('OpenUI5 not found.');
	} else {
		return null;
	}
}

/**
 * Import OpenUI5 IconPool.
 */
function importIconPool(): void {
	let requirementError = checkRequirement();
	if (isNil(requirementError)) {
		jQuery.sap.require('sap.ui.core.IconPool');
	} else {
		throw requirementError;
	}
}

/**
 * Add icon into OpenUI5
 *
 * @param {string} iconName Icon name.
 * @param {string} unicode Icon unicode.
 */
function addIcon(iconName: string, unicode: string): void {
	sap.ui.core.IconPool.addIcon(iconName, 'font-awesome', {
		fontFamily: 'FontAwesome',
		content: unicode,
		overWrite: true
	});
}

export {
	checkRequirement,
	importIconPool,
	addIcon
};
