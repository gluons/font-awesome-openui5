import isNil from 'lodash.isnil';

import hasjQuery from './hasjQuery';

/**
 * Does OpenUI5 exist?
 *
 * @export
 * @returns {boolean}
 */
export default function hasOpenUI5(): boolean {
	let hasSap = (typeof sap !== 'undefined') && (sap !== null);

	return hasjQuery() && !isNil(jQuery.sap) && hasSap;
}
