/**
 * Check the requirement for Font Awesome OpenUI5.
 * Return error when requirement is not met.
 *
 * @returns {Error}
 */
declare function checkRequirement(): Error;
/**
 * Import OpenUI5 IconPool.
 */
declare function importIconPool(): void;
/**
 * Add icon into OpenUI5
 *
 * @param {string} iconName Icon name.
 * @param {string} unicode Icon unicode.
 */
declare function addIcon(iconName: string, unicode: string): void;
export { checkRequirement, importIconPool, addIcon };
