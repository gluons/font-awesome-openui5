const faFontFamily = 'Font Awesome 5 Free';

export type FontAwesomeStyle = 'solid' | 'regular' | 'brands';

/**
 * Add an icon into `sap.ui.core.IconPool`.
 *
 * @export
 * @param {string} iconName Icon name.
 * @param {string} unicode Icon unicode character.
 * @param {FontAwesomeStyle} style Font Awesome icon style.
 */
export default function addIcon(iconName: string, unicode: string, style: FontAwesomeStyle): void {
	sap.ui.core.IconPool.addIcon(
		iconName,
		`font-awesome-${style}`,
		{
			fontFamily: faFontFamily,
			content: unicode,
			overWrite: true
		}
	);
}
