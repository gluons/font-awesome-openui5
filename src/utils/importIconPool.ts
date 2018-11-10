import hasIconPool from './hasIconPool';
import hasjQuery from './hasjQuery';
import hasOpenUI5 from './hasOpenUI5';

/**
 * Import `sap.ui.core.IconPool` if it hasn't been imported.
 *
 * @export
 */
export default function importIconPool(): void {
	if (!hasjQuery()) {
		throw new ReferenceError('jQuery not found.');
	}
	if (!hasOpenUI5()) {
		throw new ReferenceError('OpenUI5 not found.');
	}

	if (!hasIconPool()) {
		jQuery.sap.require('sap.ui.core.IconPool');
	}
}
