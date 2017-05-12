"use strict";
/// <reference types="font-awesome-icon-chars" />

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var defer = require("lodash.defer");
var isNil = require("lodash.isnil");
var utils_1 = require("./utils");
/**
 * Font Awesome OpenUI5 icons loader.
 *
 * @abstract
 * @class FontAwesomeOpenUI5
 */

var FontAwesomeOpenUI5 = function () {
    function FontAwesomeOpenUI5() {
        _classCallCheck(this, FontAwesomeOpenUI5);
    }

    _createClass(FontAwesomeOpenUI5, null, [{
        key: "loadIcons",

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
        value: function loadIcons(icons) {
            var includeAliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (isNil(sap.ui.core.IconPool)) {
                utils_1.importIconPool();
            }
            icons.forEach(function (icon) {
                // Add icon.
                if (!isNil(icon.id) && !isNil(icon.unicode)) {
                    utils_1.addIcon(icon.id, icon.unicode);
                }
                // Add icon aliases.
                if (includeAliases && Array.isArray(icon.aliases) && icon.aliases.length > 0) {
                    icon.aliases.forEach(function (alias) {
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

    }, {
        key: "loadIconsAsync",
        value: function loadIconsAsync(icons) {
            var includeAliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            return new Promise(function (resolve, reject) {
                defer(function () {
                    try {
                        FontAwesomeOpenUI5.loadIcons(icons, includeAliases);
                        resolve();
                    } catch (err) {
                        reject(err);
                    }
                });
            });
        }
    }]);

    return FontAwesomeOpenUI5;
}();

exports.default = FontAwesomeOpenUI5;
//# sourceMappingURL=font-awesome-openui5.js.map
