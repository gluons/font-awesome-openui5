import isNil from 'lodash.isnil';

/**
 * Does OpenUI5 exist?
 *
 * @export
 * @returns {boolean}
 */
export default function hasOpenUI5(): boolean {
	return !isNil(jQuery.sap) && !isNil(sap);
}
