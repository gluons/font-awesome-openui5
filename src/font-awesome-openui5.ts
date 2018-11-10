import faIconChars from 'font-awesome-icon-chars';

import { addIcon, importIconPool } from './utils';

const { solid, regular, brands } = faIconChars;

/**
 * Font Awesome OpenUI5
 *
 * @export
 * @abstract
 * @class FontAwesomeOpenUI5
 */
export default abstract class FontAwesomeOpenUI5 {
	/**
	 * Load Font Awesome icons into OpenUI5.
	 *
	 * @static
	 * @memberof FontAwesomeOpenUI5
	 */
	static loadIcons(): void {
		importIconPool();

		solid.forEach(icon => addIcon(icon.name, icon.unicode, 'solid'));
		regular.forEach(icon => addIcon(icon.name, icon.unicode, 'regular'));
		brands.forEach(icon => addIcon(icon.name, icon.unicode, 'brands'));
	}
	/**
	 * Load Font Awesome icons into OpenUI5 asynchronously.
	 *
	 * @static
	 * @returns
	 * @memberof FontAwesomeOpenUI5
	 */
	static loadIconsAsync() {
		return new Promise((resolve, reject) => {
			setTimeout(
				() => {
					try {
						FontAwesomeOpenUI5.loadIcons();
						resolve();
					} catch (err) {
						reject(err);
					}
				},
				0
			);
		});
	}
}

module.exports = FontAwesomeOpenUI5;
