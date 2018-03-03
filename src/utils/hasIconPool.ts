import isNil from 'lodash.isnil';

/**
 * Does `sap.ui.core.IconPool` exist?
 *
 * @export
 * @returns {boolean}
 */
export default function hasIconPool(): boolean {
	return !isNil(sap.ui) && !isNil(sap.ui.core) && !isNil(sap.ui.core.IconPool);
}
