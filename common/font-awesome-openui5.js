/// <reference types="font-awesome-icon-chars" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defer = require("lodash.defer");
const isNil = require("lodash.isnil");
const utils_1 = require("./utils");
/**
 * Font Awesome OpenUI5 icons loader.
 *
 * @abstract
 * @class FontAwesomeOpenUI5
 */
class FontAwesomeOpenUI5 {
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
    static loadIcons(icons, includeAliases = true) {
        if (isNil(sap.ui.core.IconPool)) {
            utils_1.importIconPool();
        }
        icons.forEach(icon => {
            // Add icon.
            if (!isNil(icon.id) && !isNil(icon.unicode)) {
                utils_1.addIcon(icon.id, icon.unicode);
            }
            // Add icon aliases.
            if (includeAliases && Array.isArray(icon.aliases) && (icon.aliases.length > 0)) {
                icon.aliases.forEach(alias => {
                    utils_1.addIcon(alias, icon.unicode);
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
    static loadIconsAsync(icons, includeAliases = true) {
        return new Promise((resolve, reject) => {
            defer(() => {
                try {
                    FontAwesomeOpenUI5.loadIcons(icons, includeAliases);
                    resolve();
                }
                catch (err) {
                    reject(err);
                }
            });
        });
    }
}
exports.default = FontAwesomeOpenUI5;
//# sourceMappingURL=font-awesome-openui5.js.map