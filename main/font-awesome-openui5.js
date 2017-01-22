"use strict";
const defer = require("lodash.defer");
const faIconChars = require("font-awesome-icon-chars");
const nvl = require("nvl");
const util_1 = require("./util");
/**
 * Font Awesome for OpenUI5.
 */
class FontAwesomeOpenUI5 {
    /**
     * Add built-in icons (if no icons given) or your icons to OpenUI5.
     * Built-in icons are from `font-awesome-icon-chars`.
     * @public
     * @static
     * @since 2.0.0
     * @see [Font Awesome Icon Character List]{@link https://github.com/gluons/Font-Awesome-Icon-Chars}
     * @param {FontAwesomeIconChars.Icon[]} [icons]               Icons to add.
     * @param {string}                      icons[].id            Icon id.
     * @param {string}                      icons[].unicode       Icon unicode.
     * @param {string[]}                    [icons[].aliases]     Icon aliases.
     * @param {boolean}                     [includeAliases=true] Include Font Awesome aliases.
     */
    static load(icons, includeAliases = true) {
        let requirementError = util_1.checkRequirement();
        if (requirementError == null) {
            jQuery.sap.require('sap.ui.core.IconPool'); // Require IconPool.
            icons = nvl(icons, faIconChars);
            icons.forEach(icon => {
                if (icon.id && icon.unicode) {
                    // Import icon.
                    sap.ui.core.IconPool.addIcon(icon.id, 'font-awesome', {
                        fontFamily: 'FontAwesome',
                        content: icon.unicode,
                        overWrite: true
                    });
                    // Import icon aliases.
                    if (includeAliases && Array.isArray(icon.aliases) && (icon.aliases.length > 0)) {
                        icon.aliases.forEach(alias => {
                            sap.ui.core.IconPool.addIcon(alias, 'font-awesome', {
                                fontFamily: 'FontAwesome',
                                content: icon.unicode,
                                overWrite: true
                            });
                        });
                    }
                }
            });
        }
        else {
            throw requirementError;
        }
    }
    /**
     * Asynchronously add built-in icons (if no icons given) or your icons to OpenUI5.
     * @public
     * @static
     * @since 2.0.0
     * @see {@link load}
     * @param   {FontAwesomeIconChars.Icon[]} [icons]               Icons to add.
     * @param   {string}                      icons[].id            Icon id.
     * @param   {string}                      icons[].unicode       Icon unicode.
     * @param   {string[]}                    [icons[].aliases]     Icon aliases.
     * @param   {boolean}                     [includeAliases=true] Include Font Awesome aliases.
     * @returns {Promise}
     */
    static loadAsync(icons, includeAliases = true) {
        return new Promise((resolve, reject) => {
            defer(() => {
                let requirementError = util_1.checkRequirement();
                if (requirementError == null) {
                    jQuery.sap.require('sap.ui.core.IconPool'); // Require IconPool.
                    icons = nvl(icons, faIconChars);
                    try {
                        FontAwesomeOpenUI5.load(icons, includeAliases);
                        resolve();
                    }
                    catch (err) {
                        reject(err);
                    }
                }
                else {
                    reject(requirementError);
                }
            });
        });
    }
}
if (VERSION) {
    Object.defineProperty(FontAwesomeOpenUI5, 'version', {
        configurable: false,
        enumerable: true,
        writable: false,
        value: VERSION
    });
}
module.exports = FontAwesomeOpenUI5;
