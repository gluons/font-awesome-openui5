import { hasIconPool, hasjQuery, hasOpenUI5 } from './index';

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
