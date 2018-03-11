/**
 * Does jQuery exist?
 *
 * @export
 * @returns {boolean}
 */
export default function hasjQuery(): boolean {
	return (typeof jQuery !== 'undefined') && (jQuery !== null);
}
