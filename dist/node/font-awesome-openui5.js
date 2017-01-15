"use strict";
const axios_1 = require("axios");
const defer = require("lodash.defer");
const faIconChars = require("font-awesome-icon-chars");
const nvl = require("nvl");
/**
 * Font Awesome for OpenUI5.
 */
class FontAwesomeOpenUI5 {
    /**
     * Check the requirement for Font Awesome OpenUI5.
     * @private
     * @static
     * @since 2.0.0
     * @returns {Error|null} return the Error when requirement isn't met.
     */
    static checkRequirement() {
        if (!jQuery) {
            return new Error('jQuery not found.');
        }
        else if (!jQuery.sap || !sap) {
            return new Error('OpenUI5 not found.');
        }
        else {
            return null;
        }
    }
    /**
     * Add built-in icons (if no icons given) or your icons to OpenUI5.
     * Built-in icons are from `font-awesome-icon-chars`.
     * @public
     * @static
     * @since 2.0.0
     * @see [Font Awesome Icon Character List]{@link https://github.com/gluons/Font-Awesome-Icon-Chars}
     * @param {boolean}                     [includeAliases=true] Include Font Awesome aliases.
     * @param {FontAwesomeIconChars.Icon[]} [icons]               Icons to add.
     * @param {string}                      icons[].id            Icon id.
     * @param {string}                      icons[].unicode       Icon unicode.
     * @param {string[]}                    [icons[].aliases]     Icon aliases.
     */
    static load(includeAliases = true, icons) {
        let requirementError = FontAwesomeOpenUI5.checkRequirement();
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
     * @param   {boolean}                     [includeAliases=true] Include Font Awesome aliases.
     * @param   {FontAwesomeIconChars.Icon[]} [icons]               Icons to add.
     * @param   {string}                      icons[].id            Icon id.
     * @param   {string}                      icons[].unicode       Icon unicode.
     * @param   {string[]}                    [icons[].aliases]     Icon aliases.
     * @returns {Promise}
     */
    static loadAsync(includeAliases = true, icons) {
        return new Promise((resolve, reject) => {
            defer(() => {
                let requirementError = FontAwesomeOpenUI5.checkRequirement();
                if (requirementError == null) {
                    jQuery.sap.require('sap.ui.core.IconPool'); // Require IconPool.
                    icons = nvl(icons, faIconChars);
                    try {
                        FontAwesomeOpenUI5.load(includeAliases, icons);
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
    /**
     * Add icons from JSON file.
     * @public
     * @static
     * @since 2.0.0
     * @param   {string}  url                   File url.
     * @param   {boolean} [includeAliases=true] Include Font Awesome aliases.
     * @returns {Promise}
     */
    static loadFromFile(url, includeAliases = true) {
        return axios_1.default.get(url, {
            responseType: 'json'
        }).then(response => {
            if (response.data && Array.isArray(response.data.icons)) {
                let icons = response.data.icons;
                return FontAwesomeOpenUI5.loadAsync(includeAliases, icons);
            }
            else {
                throw new Error('Invalid icons resource.');
            }
        });
    }
}
module.exports = FontAwesomeOpenUI5;
//# sourceMappingURL=font-awesome-openui5.js.map