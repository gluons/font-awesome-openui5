import isNil from 'lodash.isnil';

/**
 * Does `sap.ui.core.IconPool` exist?
 *
 * @export
 * @returns {boolean}
 */
export default function hasIconPool(): boolean {
	let hasSap = (typeof sap !== 'undefined') && (sap !== null);

	return hasSap && !isNil(sap.ui) && !isNil(sap.ui.core) && !isNil(sap.ui.core.IconPool);
}
