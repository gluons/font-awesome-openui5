/// <reference types="font-awesome-icon-chars" />

import defer from 'lodash.defer';
import isNil from 'lodash.isnil';
import { addIcon, importIconPool } from './utils';

/**
 * Font Awesome OpenUI5 icons loader.
 *
 * @abstract
 * @class FontAwesomeOpenUI5
 */
abstract class FontAwesomeOpenUI5 {
	/**
	 * Add icons into OpenUI5.
	 *
	 * @static
	 * @see [Font Awesome Icon Character List]{@link https://github.com/gluons/Font-Awesome-Icon-Chars}
	 * @param {FontAwesomeIconChars.Icon[]} icons Icons source.
	 * @param {boolean} [includeAliases=true] Include icons aliases.
	 *
	 * @memberOf FontAwesomeOpenUI5
	 */
	public static loadIcons(icons: FontAwesomeIconChars.Icon[], includeAliases = true): void {
		if (isNil(sap.ui.core.IconPool)) {
			importIconPool();
		}

		icons.forEach(icon => {
			// Add icon.
			if (!isNil(icon.id) && !isNil(icon.unicode)) {
				addIcon(icon.id, icon.unicode);
			}
			// Add icon aliases.
			if (includeAliases && Array.isArray(icon.aliases) && (icon.aliases.length > 0)) {
				icon.aliases.forEach(alias => {
					addIcon(alias, icon.unicode);
				});
			}
		});
	}

	/**
	 * Add icons into OpenUI5 asynchronously.
	 *
	 * @static
	 * @see {@link loadIcons}
	 * @param {FontAwesomeIconChars.Icon[]} icons Icons source.
	 * @param {boolean} [includeAliases=true] Include icons aliases.
	 * @returns {Promise<void>}
	 *
	 * @memberOf FontAwesomeOpenUI5
	 */
	public static loadIconsAsync(icons: FontAwesomeIconChars.Icon[], includeAliases = true): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			defer(() => {
				try {
					FontAwesomeOpenUI5.loadIcons(icons, includeAliases);
					resolve();
				} catch (err) {
					reject(err);
				}
			});
		});
	}
}

export default FontAwesomeOpenUI5;
