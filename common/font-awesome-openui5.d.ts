/// <reference types="font-awesome-icon-chars" />
/**
 * Font Awesome OpenUI5 icons loader.
 *
 * @abstract
 * @class FontAwesomeOpenUI5
 */
declare abstract class FontAwesomeOpenUI5 {
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
    static loadIcons(icons: FontAwesomeIconChars.Icon[], includeAliases?: boolean): void;
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
    static loadIconsAsync(icons: FontAwesomeIconChars.Icon[], includeAliases?: boolean): Promise<void>;
}
export default FontAwesomeOpenUI5;
