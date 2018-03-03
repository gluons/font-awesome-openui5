import isNil from 'lodash.isnil';

/**
 * Does jQuery exist?
 *
 * @export
 * @returns {boolean}
 */
export default function hasjQuery(): boolean {
	return !isNil(jQuery);
}
