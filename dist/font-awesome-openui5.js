/*!
 * Font Awesome icons for OpenUI5
 * https://font-awesome-openui5.surge.sh/
 * 
 * The MIT License (MIT)
 * Copyright (c) 2016-2017 Saran Tanpituckpong
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * lodash 4.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/// <reference types="font-awesome-icon-chars" />

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var defer = __webpack_require__(6);
var isNil = __webpack_require__(0);
var utils_1 = __webpack_require__(4);
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var charList = __webpack_require__(5);
var faIconChars = charList.icons;

exports.default = faIconChars;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var faIconChars = __webpack_require__(2);
var font_awesome_openui5_1 = __webpack_require__(1);
font_awesome_openui5_1.default.loadIcons(faIconChars);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var isNil = __webpack_require__(0);
/**
 * Check the requirement for Font Awesome OpenUI5.
 * Return error when requirement is not met.
 *
 * @returns {Error}
 */
function checkRequirement() {
    if (typeof jQuery === 'undefined' || jQuery === null) {
        return new Error('jQuery not found.');
    } else if (isNil(jQuery.sap) || typeof sap === 'undefined' || sap === null) {
        return new Error('OpenUI5 not found.');
    } else {
        return null;
    }
}
exports.checkRequirement = checkRequirement;
/**
 * Import OpenUI5 IconPool.
 */
function importIconPool() {
    var requirementError = checkRequirement();
    if (isNil(requirementError)) {
        jQuery.sap.require('sap.ui.core.IconPool');
    } else {
        throw requirementError;
    }
}
exports.importIconPool = importIconPool;
/**
 * Add icon into OpenUI5
 *
 * @param {string} iconName Icon name.
 * @param {string} unicode Icon unicode.
 */
function addIcon(iconName, unicode) {
    sap.ui.core.IconPool.addIcon(iconName, 'font-awesome', {
        fontFamily: 'FontAwesome',
        content: unicode,
        overWrite: true
    });
}
exports.addIcon = addIcon;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
	"icons": [
		{
			"id": "glass",
			"unicode": "f000"
		},
		{
			"id": "music",
			"unicode": "f001"
		},
		{
			"id": "search",
			"unicode": "f002"
		},
		{
			"id": "envelope-o",
			"unicode": "f003"
		},
		{
			"id": "heart",
			"unicode": "f004"
		},
		{
			"id": "star",
			"unicode": "f005"
		},
		{
			"id": "star-o",
			"unicode": "f006"
		},
		{
			"id": "user",
			"unicode": "f007"
		},
		{
			"id": "film",
			"unicode": "f008"
		},
		{
			"id": "th-large",
			"unicode": "f009"
		},
		{
			"id": "th",
			"unicode": "f00a"
		},
		{
			"id": "th-list",
			"unicode": "f00b"
		},
		{
			"id": "check",
			"unicode": "f00c"
		},
		{
			"id": "times",
			"aliases": [
				"remove",
				"close"
			],
			"unicode": "f00d"
		},
		{
			"id": "search-plus",
			"unicode": "f00e"
		},
		{
			"id": "search-minus",
			"unicode": "f010"
		},
		{
			"id": "power-off",
			"unicode": "f011"
		},
		{
			"id": "signal",
			"unicode": "f012"
		},
		{
			"id": "cog",
			"aliases": [
				"gear"
			],
			"unicode": "f013"
		},
		{
			"id": "trash-o",
			"unicode": "f014"
		},
		{
			"id": "home",
			"unicode": "f015"
		},
		{
			"id": "file-o",
			"unicode": "f016"
		},
		{
			"id": "clock-o",
			"unicode": "f017"
		},
		{
			"id": "road",
			"unicode": "f018"
		},
		{
			"id": "download",
			"unicode": "f019"
		},
		{
			"id": "arrow-circle-o-down",
			"unicode": "f01a"
		},
		{
			"id": "arrow-circle-o-up",
			"unicode": "f01b"
		},
		{
			"id": "inbox",
			"unicode": "f01c"
		},
		{
			"id": "play-circle-o",
			"unicode": "f01d"
		},
		{
			"id": "repeat",
			"aliases": [
				"rotate-right"
			],
			"unicode": "f01e"
		},
		{
			"id": "refresh",
			"unicode": "f021"
		},
		{
			"id": "list-alt",
			"unicode": "f022"
		},
		{
			"id": "lock",
			"unicode": "f023"
		},
		{
			"id": "flag",
			"unicode": "f024"
		},
		{
			"id": "headphones",
			"unicode": "f025"
		},
		{
			"id": "volume-off",
			"unicode": "f026"
		},
		{
			"id": "volume-down",
			"unicode": "f027"
		},
		{
			"id": "volume-up",
			"unicode": "f028"
		},
		{
			"id": "qrcode",
			"unicode": "f029"
		},
		{
			"id": "barcode",
			"unicode": "f02a"
		},
		{
			"id": "tag",
			"unicode": "f02b"
		},
		{
			"id": "tags",
			"unicode": "f02c"
		},
		{
			"id": "book",
			"unicode": "f02d"
		},
		{
			"id": "bookmark",
			"unicode": "f02e"
		},
		{
			"id": "print",
			"unicode": "f02f"
		},
		{
			"id": "camera",
			"unicode": "f030"
		},
		{
			"id": "font",
			"unicode": "f031"
		},
		{
			"id": "bold",
			"unicode": "f032"
		},
		{
			"id": "italic",
			"unicode": "f033"
		},
		{
			"id": "text-height",
			"unicode": "f034"
		},
		{
			"id": "text-width",
			"unicode": "f035"
		},
		{
			"id": "align-left",
			"unicode": "f036"
		},
		{
			"id": "align-center",
			"unicode": "f037"
		},
		{
			"id": "align-right",
			"unicode": "f038"
		},
		{
			"id": "align-justify",
			"unicode": "f039"
		},
		{
			"id": "list",
			"unicode": "f03a"
		},
		{
			"id": "outdent",
			"aliases": [
				"dedent"
			],
			"unicode": "f03b"
		},
		{
			"id": "indent",
			"unicode": "f03c"
		},
		{
			"id": "video-camera",
			"unicode": "f03d"
		},
		{
			"id": "picture-o",
			"aliases": [
				"photo",
				"image"
			],
			"unicode": "f03e"
		},
		{
			"id": "pencil",
			"unicode": "f040"
		},
		{
			"id": "map-marker",
			"unicode": "f041"
		},
		{
			"id": "adjust",
			"unicode": "f042"
		},
		{
			"id": "tint",
			"unicode": "f043"
		},
		{
			"id": "pencil-square-o",
			"aliases": [
				"edit"
			],
			"unicode": "f044"
		},
		{
			"id": "share-square-o",
			"unicode": "f045"
		},
		{
			"id": "check-square-o",
			"unicode": "f046"
		},
		{
			"id": "arrows",
			"unicode": "f047"
		},
		{
			"id": "step-backward",
			"unicode": "f048"
		},
		{
			"id": "fast-backward",
			"unicode": "f049"
		},
		{
			"id": "backward",
			"unicode": "f04a"
		},
		{
			"id": "play",
			"unicode": "f04b"
		},
		{
			"id": "pause",
			"unicode": "f04c"
		},
		{
			"id": "stop",
			"unicode": "f04d"
		},
		{
			"id": "forward",
			"unicode": "f04e"
		},
		{
			"id": "fast-forward",
			"unicode": "f050"
		},
		{
			"id": "step-forward",
			"unicode": "f051"
		},
		{
			"id": "eject",
			"unicode": "f052"
		},
		{
			"id": "chevron-left",
			"unicode": "f053"
		},
		{
			"id": "chevron-right",
			"unicode": "f054"
		},
		{
			"id": "plus-circle",
			"unicode": "f055"
		},
		{
			"id": "minus-circle",
			"unicode": "f056"
		},
		{
			"id": "times-circle",
			"unicode": "f057"
		},
		{
			"id": "check-circle",
			"unicode": "f058"
		},
		{
			"id": "question-circle",
			"unicode": "f059"
		},
		{
			"id": "info-circle",
			"unicode": "f05a"
		},
		{
			"id": "crosshairs",
			"unicode": "f05b"
		},
		{
			"id": "times-circle-o",
			"unicode": "f05c"
		},
		{
			"id": "check-circle-o",
			"unicode": "f05d"
		},
		{
			"id": "ban",
			"unicode": "f05e"
		},
		{
			"id": "arrow-left",
			"unicode": "f060"
		},
		{
			"id": "arrow-right",
			"unicode": "f061"
		},
		{
			"id": "arrow-up",
			"unicode": "f062"
		},
		{
			"id": "arrow-down",
			"unicode": "f063"
		},
		{
			"id": "share",
			"aliases": [
				"mail-forward"
			],
			"unicode": "f064"
		},
		{
			"id": "expand",
			"unicode": "f065"
		},
		{
			"id": "compress",
			"unicode": "f066"
		},
		{
			"id": "plus",
			"unicode": "f067"
		},
		{
			"id": "minus",
			"unicode": "f068"
		},
		{
			"id": "asterisk",
			"unicode": "f069"
		},
		{
			"id": "exclamation-circle",
			"unicode": "f06a"
		},
		{
			"id": "gift",
			"unicode": "f06b"
		},
		{
			"id": "leaf",
			"unicode": "f06c"
		},
		{
			"id": "fire",
			"unicode": "f06d"
		},
		{
			"id": "eye",
			"unicode": "f06e"
		},
		{
			"id": "eye-slash",
			"unicode": "f070"
		},
		{
			"id": "exclamation-triangle",
			"aliases": [
				"warning"
			],
			"unicode": "f071"
		},
		{
			"id": "plane",
			"unicode": "f072"
		},
		{
			"id": "calendar",
			"unicode": "f073"
		},
		{
			"id": "random",
			"unicode": "f074"
		},
		{
			"id": "comment",
			"unicode": "f075"
		},
		{
			"id": "magnet",
			"unicode": "f076"
		},
		{
			"id": "chevron-up",
			"unicode": "f077"
		},
		{
			"id": "chevron-down",
			"unicode": "f078"
		},
		{
			"id": "retweet",
			"unicode": "f079"
		},
		{
			"id": "shopping-cart",
			"unicode": "f07a"
		},
		{
			"id": "folder",
			"unicode": "f07b"
		},
		{
			"id": "folder-open",
			"unicode": "f07c"
		},
		{
			"id": "arrows-v",
			"unicode": "f07d"
		},
		{
			"id": "arrows-h",
			"unicode": "f07e"
		},
		{
			"id": "bar-chart",
			"aliases": [
				"bar-chart-o"
			],
			"unicode": "f080"
		},
		{
			"id": "twitter-square",
			"unicode": "f081"
		},
		{
			"id": "facebook-square",
			"unicode": "f082"
		},
		{
			"id": "camera-retro",
			"unicode": "f083"
		},
		{
			"id": "key",
			"unicode": "f084"
		},
		{
			"id": "cogs",
			"aliases": [
				"gears"
			],
			"unicode": "f085"
		},
		{
			"id": "comments",
			"unicode": "f086"
		},
		{
			"id": "thumbs-o-up",
			"unicode": "f087"
		},
		{
			"id": "thumbs-o-down",
			"unicode": "f088"
		},
		{
			"id": "star-half",
			"unicode": "f089"
		},
		{
			"id": "heart-o",
			"unicode": "f08a"
		},
		{
			"id": "sign-out",
			"unicode": "f08b"
		},
		{
			"id": "linkedin-square",
			"unicode": "f08c"
		},
		{
			"id": "thumb-tack",
			"unicode": "f08d"
		},
		{
			"id": "external-link",
			"unicode": "f08e"
		},
		{
			"id": "sign-in",
			"unicode": "f090"
		},
		{
			"id": "trophy",
			"unicode": "f091"
		},
		{
			"id": "github-square",
			"unicode": "f092"
		},
		{
			"id": "upload",
			"unicode": "f093"
		},
		{
			"id": "lemon-o",
			"unicode": "f094"
		},
		{
			"id": "phone",
			"unicode": "f095"
		},
		{
			"id": "square-o",
			"unicode": "f096"
		},
		{
			"id": "bookmark-o",
			"unicode": "f097"
		},
		{
			"id": "phone-square",
			"unicode": "f098"
		},
		{
			"id": "twitter",
			"unicode": "f099"
		},
		{
			"id": "facebook",
			"aliases": [
				"facebook-f"
			],
			"unicode": "f09a"
		},
		{
			"id": "github",
			"unicode": "f09b"
		},
		{
			"id": "unlock",
			"unicode": "f09c"
		},
		{
			"id": "credit-card",
			"unicode": "f09d"
		},
		{
			"id": "rss",
			"aliases": [
				"feed"
			],
			"unicode": "f09e"
		},
		{
			"id": "hdd-o",
			"unicode": "f0a0"
		},
		{
			"id": "bullhorn",
			"unicode": "f0a1"
		},
		{
			"id": "bell",
			"unicode": "f0f3"
		},
		{
			"id": "certificate",
			"unicode": "f0a3"
		},
		{
			"id": "hand-o-right",
			"unicode": "f0a4"
		},
		{
			"id": "hand-o-left",
			"unicode": "f0a5"
		},
		{
			"id": "hand-o-up",
			"unicode": "f0a6"
		},
		{
			"id": "hand-o-down",
			"unicode": "f0a7"
		},
		{
			"id": "arrow-circle-left",
			"unicode": "f0a8"
		},
		{
			"id": "arrow-circle-right",
			"unicode": "f0a9"
		},
		{
			"id": "arrow-circle-up",
			"unicode": "f0aa"
		},
		{
			"id": "arrow-circle-down",
			"unicode": "f0ab"
		},
		{
			"id": "globe",
			"unicode": "f0ac"
		},
		{
			"id": "wrench",
			"unicode": "f0ad"
		},
		{
			"id": "tasks",
			"unicode": "f0ae"
		},
		{
			"id": "filter",
			"unicode": "f0b0"
		},
		{
			"id": "briefcase",
			"unicode": "f0b1"
		},
		{
			"id": "arrows-alt",
			"unicode": "f0b2"
		},
		{
			"id": "users",
			"aliases": [
				"group"
			],
			"unicode": "f0c0"
		},
		{
			"id": "link",
			"aliases": [
				"chain"
			],
			"unicode": "f0c1"
		},
		{
			"id": "cloud",
			"unicode": "f0c2"
		},
		{
			"id": "flask",
			"unicode": "f0c3"
		},
		{
			"id": "scissors",
			"aliases": [
				"cut"
			],
			"unicode": "f0c4"
		},
		{
			"id": "files-o",
			"aliases": [
				"copy"
			],
			"unicode": "f0c5"
		},
		{
			"id": "paperclip",
			"unicode": "f0c6"
		},
		{
			"id": "floppy-o",
			"aliases": [
				"save"
			],
			"unicode": "f0c7"
		},
		{
			"id": "square",
			"unicode": "f0c8"
		},
		{
			"id": "bars",
			"aliases": [
				"navicon",
				"reorder"
			],
			"unicode": "f0c9"
		},
		{
			"id": "list-ul",
			"unicode": "f0ca"
		},
		{
			"id": "list-ol",
			"unicode": "f0cb"
		},
		{
			"id": "strikethrough",
			"unicode": "f0cc"
		},
		{
			"id": "underline",
			"unicode": "f0cd"
		},
		{
			"id": "table",
			"unicode": "f0ce"
		},
		{
			"id": "magic",
			"unicode": "f0d0"
		},
		{
			"id": "truck",
			"unicode": "f0d1"
		},
		{
			"id": "pinterest",
			"unicode": "f0d2"
		},
		{
			"id": "pinterest-square",
			"unicode": "f0d3"
		},
		{
			"id": "google-plus-square",
			"unicode": "f0d4"
		},
		{
			"id": "google-plus",
			"unicode": "f0d5"
		},
		{
			"id": "money",
			"unicode": "f0d6"
		},
		{
			"id": "caret-down",
			"unicode": "f0d7"
		},
		{
			"id": "caret-up",
			"unicode": "f0d8"
		},
		{
			"id": "caret-left",
			"unicode": "f0d9"
		},
		{
			"id": "caret-right",
			"unicode": "f0da"
		},
		{
			"id": "columns",
			"unicode": "f0db"
		},
		{
			"id": "sort",
			"aliases": [
				"unsorted"
			],
			"unicode": "f0dc"
		},
		{
			"id": "sort-desc",
			"aliases": [
				"sort-down"
			],
			"unicode": "f0dd"
		},
		{
			"id": "sort-asc",
			"aliases": [
				"sort-up"
			],
			"unicode": "f0de"
		},
		{
			"id": "envelope",
			"unicode": "f0e0"
		},
		{
			"id": "linkedin",
			"unicode": "f0e1"
		},
		{
			"id": "undo",
			"aliases": [
				"rotate-left"
			],
			"unicode": "f0e2"
		},
		{
			"id": "gavel",
			"aliases": [
				"legal"
			],
			"unicode": "f0e3"
		},
		{
			"id": "tachometer",
			"aliases": [
				"dashboard"
			],
			"unicode": "f0e4"
		},
		{
			"id": "comment-o",
			"unicode": "f0e5"
		},
		{
			"id": "comments-o",
			"unicode": "f0e6"
		},
		{
			"id": "bolt",
			"aliases": [
				"flash"
			],
			"unicode": "f0e7"
		},
		{
			"id": "sitemap",
			"unicode": "f0e8"
		},
		{
			"id": "umbrella",
			"unicode": "f0e9"
		},
		{
			"id": "clipboard",
			"aliases": [
				"paste"
			],
			"unicode": "f0ea"
		},
		{
			"id": "lightbulb-o",
			"unicode": "f0eb"
		},
		{
			"id": "exchange",
			"unicode": "f0ec"
		},
		{
			"id": "cloud-download",
			"unicode": "f0ed"
		},
		{
			"id": "cloud-upload",
			"unicode": "f0ee"
		},
		{
			"id": "user-md",
			"unicode": "f0f0"
		},
		{
			"id": "stethoscope",
			"unicode": "f0f1"
		},
		{
			"id": "suitcase",
			"unicode": "f0f2"
		},
		{
			"id": "bell-o",
			"unicode": "f0a2"
		},
		{
			"id": "coffee",
			"unicode": "f0f4"
		},
		{
			"id": "cutlery",
			"unicode": "f0f5"
		},
		{
			"id": "file-text-o",
			"unicode": "f0f6"
		},
		{
			"id": "building-o",
			"unicode": "f0f7"
		},
		{
			"id": "hospital-o",
			"unicode": "f0f8"
		},
		{
			"id": "ambulance",
			"unicode": "f0f9"
		},
		{
			"id": "medkit",
			"unicode": "f0fa"
		},
		{
			"id": "fighter-jet",
			"unicode": "f0fb"
		},
		{
			"id": "beer",
			"unicode": "f0fc"
		},
		{
			"id": "h-square",
			"unicode": "f0fd"
		},
		{
			"id": "plus-square",
			"unicode": "f0fe"
		},
		{
			"id": "angle-double-left",
			"unicode": "f100"
		},
		{
			"id": "angle-double-right",
			"unicode": "f101"
		},
		{
			"id": "angle-double-up",
			"unicode": "f102"
		},
		{
			"id": "angle-double-down",
			"unicode": "f103"
		},
		{
			"id": "angle-left",
			"unicode": "f104"
		},
		{
			"id": "angle-right",
			"unicode": "f105"
		},
		{
			"id": "angle-up",
			"unicode": "f106"
		},
		{
			"id": "angle-down",
			"unicode": "f107"
		},
		{
			"id": "desktop",
			"unicode": "f108"
		},
		{
			"id": "laptop",
			"unicode": "f109"
		},
		{
			"id": "tablet",
			"unicode": "f10a"
		},
		{
			"id": "mobile",
			"aliases": [
				"mobile-phone"
			],
			"unicode": "f10b"
		},
		{
			"id": "circle-o",
			"unicode": "f10c"
		},
		{
			"id": "quote-left",
			"unicode": "f10d"
		},
		{
			"id": "quote-right",
			"unicode": "f10e"
		},
		{
			"id": "spinner",
			"unicode": "f110"
		},
		{
			"id": "circle",
			"unicode": "f111"
		},
		{
			"id": "reply",
			"aliases": [
				"mail-reply"
			],
			"unicode": "f112"
		},
		{
			"id": "github-alt",
			"unicode": "f113"
		},
		{
			"id": "folder-o",
			"unicode": "f114"
		},
		{
			"id": "folder-open-o",
			"unicode": "f115"
		},
		{
			"id": "smile-o",
			"unicode": "f118"
		},
		{
			"id": "frown-o",
			"unicode": "f119"
		},
		{
			"id": "meh-o",
			"unicode": "f11a"
		},
		{
			"id": "gamepad",
			"unicode": "f11b"
		},
		{
			"id": "keyboard-o",
			"unicode": "f11c"
		},
		{
			"id": "flag-o",
			"unicode": "f11d"
		},
		{
			"id": "flag-checkered",
			"unicode": "f11e"
		},
		{
			"id": "terminal",
			"unicode": "f120"
		},
		{
			"id": "code",
			"unicode": "f121"
		},
		{
			"id": "reply-all",
			"aliases": [
				"mail-reply-all"
			],
			"unicode": "f122"
		},
		{
			"id": "star-half-o",
			"aliases": [
				"star-half-empty",
				"star-half-full"
			],
			"unicode": "f123"
		},
		{
			"id": "location-arrow",
			"unicode": "f124"
		},
		{
			"id": "crop",
			"unicode": "f125"
		},
		{
			"id": "code-fork",
			"unicode": "f126"
		},
		{
			"id": "chain-broken",
			"aliases": [
				"unlink"
			],
			"unicode": "f127"
		},
		{
			"id": "question",
			"unicode": "f128"
		},
		{
			"id": "info",
			"unicode": "f129"
		},
		{
			"id": "exclamation",
			"unicode": "f12a"
		},
		{
			"id": "superscript",
			"unicode": "f12b"
		},
		{
			"id": "subscript",
			"unicode": "f12c"
		},
		{
			"id": "eraser",
			"unicode": "f12d"
		},
		{
			"id": "puzzle-piece",
			"unicode": "f12e"
		},
		{
			"id": "microphone",
			"unicode": "f130"
		},
		{
			"id": "microphone-slash",
			"unicode": "f131"
		},
		{
			"id": "shield",
			"unicode": "f132"
		},
		{
			"id": "calendar-o",
			"unicode": "f133"
		},
		{
			"id": "fire-extinguisher",
			"unicode": "f134"
		},
		{
			"id": "rocket",
			"unicode": "f135"
		},
		{
			"id": "maxcdn",
			"unicode": "f136"
		},
		{
			"id": "chevron-circle-left",
			"unicode": "f137"
		},
		{
			"id": "chevron-circle-right",
			"unicode": "f138"
		},
		{
			"id": "chevron-circle-up",
			"unicode": "f139"
		},
		{
			"id": "chevron-circle-down",
			"unicode": "f13a"
		},
		{
			"id": "html5",
			"unicode": "f13b"
		},
		{
			"id": "css3",
			"unicode": "f13c"
		},
		{
			"id": "anchor",
			"unicode": "f13d"
		},
		{
			"id": "unlock-alt",
			"unicode": "f13e"
		},
		{
			"id": "bullseye",
			"unicode": "f140"
		},
		{
			"id": "ellipsis-h",
			"unicode": "f141"
		},
		{
			"id": "ellipsis-v",
			"unicode": "f142"
		},
		{
			"id": "rss-square",
			"unicode": "f143"
		},
		{
			"id": "play-circle",
			"unicode": "f144"
		},
		{
			"id": "ticket",
			"unicode": "f145"
		},
		{
			"id": "minus-square",
			"unicode": "f146"
		},
		{
			"id": "minus-square-o",
			"unicode": "f147"
		},
		{
			"id": "level-up",
			"unicode": "f148"
		},
		{
			"id": "level-down",
			"unicode": "f149"
		},
		{
			"id": "check-square",
			"unicode": "f14a"
		},
		{
			"id": "pencil-square",
			"unicode": "f14b"
		},
		{
			"id": "external-link-square",
			"unicode": "f14c"
		},
		{
			"id": "share-square",
			"unicode": "f14d"
		},
		{
			"id": "compass",
			"unicode": "f14e"
		},
		{
			"id": "caret-square-o-down",
			"aliases": [
				"toggle-down"
			],
			"unicode": "f150"
		},
		{
			"id": "caret-square-o-up",
			"aliases": [
				"toggle-up"
			],
			"unicode": "f151"
		},
		{
			"id": "caret-square-o-right",
			"aliases": [
				"toggle-right"
			],
			"unicode": "f152"
		},
		{
			"id": "eur",
			"aliases": [
				"euro"
			],
			"unicode": "f153"
		},
		{
			"id": "gbp",
			"unicode": "f154"
		},
		{
			"id": "usd",
			"aliases": [
				"dollar"
			],
			"unicode": "f155"
		},
		{
			"id": "inr",
			"aliases": [
				"rupee"
			],
			"unicode": "f156"
		},
		{
			"id": "jpy",
			"aliases": [
				"cny",
				"rmb",
				"yen"
			],
			"unicode": "f157"
		},
		{
			"id": "rub",
			"aliases": [
				"ruble",
				"rouble"
			],
			"unicode": "f158"
		},
		{
			"id": "krw",
			"aliases": [
				"won"
			],
			"unicode": "f159"
		},
		{
			"id": "btc",
			"aliases": [
				"bitcoin"
			],
			"unicode": "f15a"
		},
		{
			"id": "file",
			"unicode": "f15b"
		},
		{
			"id": "file-text",
			"unicode": "f15c"
		},
		{
			"id": "sort-alpha-asc",
			"unicode": "f15d"
		},
		{
			"id": "sort-alpha-desc",
			"unicode": "f15e"
		},
		{
			"id": "sort-amount-asc",
			"unicode": "f160"
		},
		{
			"id": "sort-amount-desc",
			"unicode": "f161"
		},
		{
			"id": "sort-numeric-asc",
			"unicode": "f162"
		},
		{
			"id": "sort-numeric-desc",
			"unicode": "f163"
		},
		{
			"id": "thumbs-up",
			"unicode": "f164"
		},
		{
			"id": "thumbs-down",
			"unicode": "f165"
		},
		{
			"id": "youtube-square",
			"unicode": "f166"
		},
		{
			"id": "youtube",
			"unicode": "f167"
		},
		{
			"id": "xing",
			"unicode": "f168"
		},
		{
			"id": "xing-square",
			"unicode": "f169"
		},
		{
			"id": "youtube-play",
			"unicode": "f16a"
		},
		{
			"id": "dropbox",
			"unicode": "f16b"
		},
		{
			"id": "stack-overflow",
			"unicode": "f16c"
		},
		{
			"id": "instagram",
			"unicode": "f16d"
		},
		{
			"id": "flickr",
			"unicode": "f16e"
		},
		{
			"id": "adn",
			"unicode": "f170"
		},
		{
			"id": "bitbucket",
			"unicode": "f171"
		},
		{
			"id": "bitbucket-square",
			"unicode": "f172"
		},
		{
			"id": "tumblr",
			"unicode": "f173"
		},
		{
			"id": "tumblr-square",
			"unicode": "f174"
		},
		{
			"id": "long-arrow-down",
			"unicode": "f175"
		},
		{
			"id": "long-arrow-up",
			"unicode": "f176"
		},
		{
			"id": "long-arrow-left",
			"unicode": "f177"
		},
		{
			"id": "long-arrow-right",
			"unicode": "f178"
		},
		{
			"id": "apple",
			"unicode": "f179"
		},
		{
			"id": "windows",
			"unicode": "f17a"
		},
		{
			"id": "android",
			"unicode": "f17b"
		},
		{
			"id": "linux",
			"unicode": "f17c"
		},
		{
			"id": "dribbble",
			"unicode": "f17d"
		},
		{
			"id": "skype",
			"unicode": "f17e"
		},
		{
			"id": "foursquare",
			"unicode": "f180"
		},
		{
			"id": "trello",
			"unicode": "f181"
		},
		{
			"id": "female",
			"unicode": "f182"
		},
		{
			"id": "male",
			"unicode": "f183"
		},
		{
			"id": "gratipay",
			"aliases": [
				"gittip"
			],
			"unicode": "f184"
		},
		{
			"id": "sun-o",
			"unicode": "f185"
		},
		{
			"id": "moon-o",
			"unicode": "f186"
		},
		{
			"id": "archive",
			"unicode": "f187"
		},
		{
			"id": "bug",
			"unicode": "f188"
		},
		{
			"id": "vk",
			"unicode": "f189"
		},
		{
			"id": "weibo",
			"unicode": "f18a"
		},
		{
			"id": "renren",
			"unicode": "f18b"
		},
		{
			"id": "pagelines",
			"unicode": "f18c"
		},
		{
			"id": "stack-exchange",
			"unicode": "f18d"
		},
		{
			"id": "arrow-circle-o-right",
			"unicode": "f18e"
		},
		{
			"id": "arrow-circle-o-left",
			"unicode": "f190"
		},
		{
			"id": "caret-square-o-left",
			"aliases": [
				"toggle-left"
			],
			"unicode": "f191"
		},
		{
			"id": "dot-circle-o",
			"unicode": "f192"
		},
		{
			"id": "wheelchair",
			"unicode": "f193"
		},
		{
			"id": "vimeo-square",
			"unicode": "f194"
		},
		{
			"id": "try",
			"aliases": [
				"turkish-lira"
			],
			"unicode": "f195"
		},
		{
			"id": "plus-square-o",
			"unicode": "f196"
		},
		{
			"id": "space-shuttle",
			"unicode": "f197"
		},
		{
			"id": "slack",
			"unicode": "f198"
		},
		{
			"id": "envelope-square",
			"unicode": "f199"
		},
		{
			"id": "wordpress",
			"unicode": "f19a"
		},
		{
			"id": "openid",
			"unicode": "f19b"
		},
		{
			"id": "university",
			"aliases": [
				"institution",
				"bank"
			],
			"unicode": "f19c"
		},
		{
			"id": "graduation-cap",
			"aliases": [
				"mortar-board"
			],
			"unicode": "f19d"
		},
		{
			"id": "yahoo",
			"unicode": "f19e"
		},
		{
			"id": "google",
			"unicode": "f1a0"
		},
		{
			"id": "reddit",
			"unicode": "f1a1"
		},
		{
			"id": "reddit-square",
			"unicode": "f1a2"
		},
		{
			"id": "stumbleupon-circle",
			"unicode": "f1a3"
		},
		{
			"id": "stumbleupon",
			"unicode": "f1a4"
		},
		{
			"id": "delicious",
			"unicode": "f1a5"
		},
		{
			"id": "digg",
			"unicode": "f1a6"
		},
		{
			"id": "pied-piper-pp",
			"unicode": "f1a7"
		},
		{
			"id": "pied-piper-alt",
			"unicode": "f1a8"
		},
		{
			"id": "drupal",
			"unicode": "f1a9"
		},
		{
			"id": "joomla",
			"unicode": "f1aa"
		},
		{
			"id": "language",
			"unicode": "f1ab"
		},
		{
			"id": "fax",
			"unicode": "f1ac"
		},
		{
			"id": "building",
			"unicode": "f1ad"
		},
		{
			"id": "child",
			"unicode": "f1ae"
		},
		{
			"id": "paw",
			"unicode": "f1b0"
		},
		{
			"id": "spoon",
			"unicode": "f1b1"
		},
		{
			"id": "cube",
			"unicode": "f1b2"
		},
		{
			"id": "cubes",
			"unicode": "f1b3"
		},
		{
			"id": "behance",
			"unicode": "f1b4"
		},
		{
			"id": "behance-square",
			"unicode": "f1b5"
		},
		{
			"id": "steam",
			"unicode": "f1b6"
		},
		{
			"id": "steam-square",
			"unicode": "f1b7"
		},
		{
			"id": "recycle",
			"unicode": "f1b8"
		},
		{
			"id": "car",
			"aliases": [
				"automobile"
			],
			"unicode": "f1b9"
		},
		{
			"id": "taxi",
			"aliases": [
				"cab"
			],
			"unicode": "f1ba"
		},
		{
			"id": "tree",
			"unicode": "f1bb"
		},
		{
			"id": "spotify",
			"unicode": "f1bc"
		},
		{
			"id": "deviantart",
			"unicode": "f1bd"
		},
		{
			"id": "soundcloud",
			"unicode": "f1be"
		},
		{
			"id": "database",
			"unicode": "f1c0"
		},
		{
			"id": "file-pdf-o",
			"unicode": "f1c1"
		},
		{
			"id": "file-word-o",
			"unicode": "f1c2"
		},
		{
			"id": "file-excel-o",
			"unicode": "f1c3"
		},
		{
			"id": "file-powerpoint-o",
			"unicode": "f1c4"
		},
		{
			"id": "file-image-o",
			"aliases": [
				"file-photo-o",
				"file-picture-o"
			],
			"unicode": "f1c5"
		},
		{
			"id": "file-archive-o",
			"aliases": [
				"file-zip-o"
			],
			"unicode": "f1c6"
		},
		{
			"id": "file-audio-o",
			"aliases": [
				"file-sound-o"
			],
			"unicode": "f1c7"
		},
		{
			"id": "file-video-o",
			"aliases": [
				"file-movie-o"
			],
			"unicode": "f1c8"
		},
		{
			"id": "file-code-o",
			"unicode": "f1c9"
		},
		{
			"id": "vine",
			"unicode": "f1ca"
		},
		{
			"id": "codepen",
			"unicode": "f1cb"
		},
		{
			"id": "jsfiddle",
			"unicode": "f1cc"
		},
		{
			"id": "life-ring",
			"aliases": [
				"life-bouy",
				"life-buoy",
				"life-saver",
				"support"
			],
			"unicode": "f1cd"
		},
		{
			"id": "circle-o-notch",
			"unicode": "f1ce"
		},
		{
			"id": "rebel",
			"aliases": [
				"ra",
				"resistance"
			],
			"unicode": "f1d0"
		},
		{
			"id": "empire",
			"aliases": [
				"ge"
			],
			"unicode": "f1d1"
		},
		{
			"id": "git-square",
			"unicode": "f1d2"
		},
		{
			"id": "git",
			"unicode": "f1d3"
		},
		{
			"id": "hacker-news",
			"aliases": [
				"y-combinator-square",
				"yc-square"
			],
			"unicode": "f1d4"
		},
		{
			"id": "tencent-weibo",
			"unicode": "f1d5"
		},
		{
			"id": "qq",
			"unicode": "f1d6"
		},
		{
			"id": "weixin",
			"aliases": [
				"wechat"
			],
			"unicode": "f1d7"
		},
		{
			"id": "paper-plane",
			"aliases": [
				"send"
			],
			"unicode": "f1d8"
		},
		{
			"id": "paper-plane-o",
			"aliases": [
				"send-o"
			],
			"unicode": "f1d9"
		},
		{
			"id": "history",
			"unicode": "f1da"
		},
		{
			"id": "circle-thin",
			"unicode": "f1db"
		},
		{
			"id": "header",
			"unicode": "f1dc"
		},
		{
			"id": "paragraph",
			"unicode": "f1dd"
		},
		{
			"id": "sliders",
			"unicode": "f1de"
		},
		{
			"id": "share-alt",
			"unicode": "f1e0"
		},
		{
			"id": "share-alt-square",
			"unicode": "f1e1"
		},
		{
			"id": "bomb",
			"unicode": "f1e2"
		},
		{
			"id": "futbol-o",
			"aliases": [
				"soccer-ball-o"
			],
			"unicode": "f1e3"
		},
		{
			"id": "tty",
			"unicode": "f1e4"
		},
		{
			"id": "binoculars",
			"unicode": "f1e5"
		},
		{
			"id": "plug",
			"unicode": "f1e6"
		},
		{
			"id": "slideshare",
			"unicode": "f1e7"
		},
		{
			"id": "twitch",
			"unicode": "f1e8"
		},
		{
			"id": "yelp",
			"unicode": "f1e9"
		},
		{
			"id": "newspaper-o",
			"unicode": "f1ea"
		},
		{
			"id": "wifi",
			"unicode": "f1eb"
		},
		{
			"id": "calculator",
			"unicode": "f1ec"
		},
		{
			"id": "paypal",
			"unicode": "f1ed"
		},
		{
			"id": "google-wallet",
			"unicode": "f1ee"
		},
		{
			"id": "cc-visa",
			"unicode": "f1f0"
		},
		{
			"id": "cc-mastercard",
			"unicode": "f1f1"
		},
		{
			"id": "cc-discover",
			"unicode": "f1f2"
		},
		{
			"id": "cc-amex",
			"unicode": "f1f3"
		},
		{
			"id": "cc-paypal",
			"unicode": "f1f4"
		},
		{
			"id": "cc-stripe",
			"unicode": "f1f5"
		},
		{
			"id": "bell-slash",
			"unicode": "f1f6"
		},
		{
			"id": "bell-slash-o",
			"unicode": "f1f7"
		},
		{
			"id": "trash",
			"unicode": "f1f8"
		},
		{
			"id": "copyright",
			"unicode": "f1f9"
		},
		{
			"id": "at",
			"unicode": "f1fa"
		},
		{
			"id": "eyedropper",
			"unicode": "f1fb"
		},
		{
			"id": "paint-brush",
			"unicode": "f1fc"
		},
		{
			"id": "birthday-cake",
			"unicode": "f1fd"
		},
		{
			"id": "area-chart",
			"unicode": "f1fe"
		},
		{
			"id": "pie-chart",
			"unicode": "f200"
		},
		{
			"id": "line-chart",
			"unicode": "f201"
		},
		{
			"id": "lastfm",
			"unicode": "f202"
		},
		{
			"id": "lastfm-square",
			"unicode": "f203"
		},
		{
			"id": "toggle-off",
			"unicode": "f204"
		},
		{
			"id": "toggle-on",
			"unicode": "f205"
		},
		{
			"id": "bicycle",
			"unicode": "f206"
		},
		{
			"id": "bus",
			"unicode": "f207"
		},
		{
			"id": "ioxhost",
			"unicode": "f208"
		},
		{
			"id": "angellist",
			"unicode": "f209"
		},
		{
			"id": "cc",
			"unicode": "f20a"
		},
		{
			"id": "ils",
			"aliases": [
				"shekel",
				"sheqel"
			],
			"unicode": "f20b"
		},
		{
			"id": "meanpath",
			"unicode": "f20c"
		},
		{
			"id": "buysellads",
			"unicode": "f20d"
		},
		{
			"id": "connectdevelop",
			"unicode": "f20e"
		},
		{
			"id": "dashcube",
			"unicode": "f210"
		},
		{
			"id": "forumbee",
			"unicode": "f211"
		},
		{
			"id": "leanpub",
			"unicode": "f212"
		},
		{
			"id": "sellsy",
			"unicode": "f213"
		},
		{
			"id": "shirtsinbulk",
			"unicode": "f214"
		},
		{
			"id": "simplybuilt",
			"unicode": "f215"
		},
		{
			"id": "skyatlas",
			"unicode": "f216"
		},
		{
			"id": "cart-plus",
			"unicode": "f217"
		},
		{
			"id": "cart-arrow-down",
			"unicode": "f218"
		},
		{
			"id": "diamond",
			"unicode": "f219"
		},
		{
			"id": "ship",
			"unicode": "f21a"
		},
		{
			"id": "user-secret",
			"unicode": "f21b"
		},
		{
			"id": "motorcycle",
			"unicode": "f21c"
		},
		{
			"id": "street-view",
			"unicode": "f21d"
		},
		{
			"id": "heartbeat",
			"unicode": "f21e"
		},
		{
			"id": "venus",
			"unicode": "f221"
		},
		{
			"id": "mars",
			"unicode": "f222"
		},
		{
			"id": "mercury",
			"unicode": "f223"
		},
		{
			"id": "transgender",
			"aliases": [
				"intersex"
			],
			"unicode": "f224"
		},
		{
			"id": "transgender-alt",
			"unicode": "f225"
		},
		{
			"id": "venus-double",
			"unicode": "f226"
		},
		{
			"id": "mars-double",
			"unicode": "f227"
		},
		{
			"id": "venus-mars",
			"unicode": "f228"
		},
		{
			"id": "mars-stroke",
			"unicode": "f229"
		},
		{
			"id": "mars-stroke-v",
			"unicode": "f22a"
		},
		{
			"id": "mars-stroke-h",
			"unicode": "f22b"
		},
		{
			"id": "neuter",
			"unicode": "f22c"
		},
		{
			"id": "genderless",
			"unicode": "f22d"
		},
		{
			"id": "facebook-official",
			"unicode": "f230"
		},
		{
			"id": "pinterest-p",
			"unicode": "f231"
		},
		{
			"id": "whatsapp",
			"unicode": "f232"
		},
		{
			"id": "server",
			"unicode": "f233"
		},
		{
			"id": "user-plus",
			"unicode": "f234"
		},
		{
			"id": "user-times",
			"unicode": "f235"
		},
		{
			"id": "bed",
			"aliases": [
				"hotel"
			],
			"unicode": "f236"
		},
		{
			"id": "viacoin",
			"unicode": "f237"
		},
		{
			"id": "train",
			"unicode": "f238"
		},
		{
			"id": "subway",
			"unicode": "f239"
		},
		{
			"id": "medium",
			"unicode": "f23a"
		},
		{
			"id": "y-combinator",
			"aliases": [
				"yc"
			],
			"unicode": "f23b"
		},
		{
			"id": "optin-monster",
			"unicode": "f23c"
		},
		{
			"id": "opencart",
			"unicode": "f23d"
		},
		{
			"id": "expeditedssl",
			"unicode": "f23e"
		},
		{
			"id": "battery-full",
			"aliases": [
				"battery-4",
				"battery"
			],
			"unicode": "f240"
		},
		{
			"id": "battery-three-quarters",
			"aliases": [
				"battery-3"
			],
			"unicode": "f241"
		},
		{
			"id": "battery-half",
			"aliases": [
				"battery-2"
			],
			"unicode": "f242"
		},
		{
			"id": "battery-quarter",
			"aliases": [
				"battery-1"
			],
			"unicode": "f243"
		},
		{
			"id": "battery-empty",
			"aliases": [
				"battery-0"
			],
			"unicode": "f244"
		},
		{
			"id": "mouse-pointer",
			"unicode": "f245"
		},
		{
			"id": "i-cursor",
			"unicode": "f246"
		},
		{
			"id": "object-group",
			"unicode": "f247"
		},
		{
			"id": "object-ungroup",
			"unicode": "f248"
		},
		{
			"id": "sticky-note",
			"unicode": "f249"
		},
		{
			"id": "sticky-note-o",
			"unicode": "f24a"
		},
		{
			"id": "cc-jcb",
			"unicode": "f24b"
		},
		{
			"id": "cc-diners-club",
			"unicode": "f24c"
		},
		{
			"id": "clone",
			"unicode": "f24d"
		},
		{
			"id": "balance-scale",
			"unicode": "f24e"
		},
		{
			"id": "hourglass-o",
			"unicode": "f250"
		},
		{
			"id": "hourglass-start",
			"aliases": [
				"hourglass-1"
			],
			"unicode": "f251"
		},
		{
			"id": "hourglass-half",
			"aliases": [
				"hourglass-2"
			],
			"unicode": "f252"
		},
		{
			"id": "hourglass-end",
			"aliases": [
				"hourglass-3"
			],
			"unicode": "f253"
		},
		{
			"id": "hourglass",
			"unicode": "f254"
		},
		{
			"id": "hand-rock-o",
			"aliases": [
				"hand-grab-o"
			],
			"unicode": "f255"
		},
		{
			"id": "hand-paper-o",
			"aliases": [
				"hand-stop-o"
			],
			"unicode": "f256"
		},
		{
			"id": "hand-scissors-o",
			"unicode": "f257"
		},
		{
			"id": "hand-lizard-o",
			"unicode": "f258"
		},
		{
			"id": "hand-spock-o",
			"unicode": "f259"
		},
		{
			"id": "hand-pointer-o",
			"unicode": "f25a"
		},
		{
			"id": "hand-peace-o",
			"unicode": "f25b"
		},
		{
			"id": "trademark",
			"unicode": "f25c"
		},
		{
			"id": "registered",
			"unicode": "f25d"
		},
		{
			"id": "creative-commons",
			"unicode": "f25e"
		},
		{
			"id": "gg",
			"unicode": "f260"
		},
		{
			"id": "gg-circle",
			"unicode": "f261"
		},
		{
			"id": "tripadvisor",
			"unicode": "f262"
		},
		{
			"id": "odnoklassniki",
			"unicode": "f263"
		},
		{
			"id": "odnoklassniki-square",
			"unicode": "f264"
		},
		{
			"id": "get-pocket",
			"unicode": "f265"
		},
		{
			"id": "wikipedia-w",
			"unicode": "f266"
		},
		{
			"id": "safari",
			"unicode": "f267"
		},
		{
			"id": "chrome",
			"unicode": "f268"
		},
		{
			"id": "firefox",
			"unicode": "f269"
		},
		{
			"id": "opera",
			"unicode": "f26a"
		},
		{
			"id": "internet-explorer",
			"unicode": "f26b"
		},
		{
			"id": "television",
			"aliases": [
				"tv"
			],
			"unicode": "f26c"
		},
		{
			"id": "contao",
			"unicode": "f26d"
		},
		{
			"id": "500px",
			"unicode": "f26e"
		},
		{
			"id": "amazon",
			"unicode": "f270"
		},
		{
			"id": "calendar-plus-o",
			"unicode": "f271"
		},
		{
			"id": "calendar-minus-o",
			"unicode": "f272"
		},
		{
			"id": "calendar-times-o",
			"unicode": "f273"
		},
		{
			"id": "calendar-check-o",
			"unicode": "f274"
		},
		{
			"id": "industry",
			"unicode": "f275"
		},
		{
			"id": "map-pin",
			"unicode": "f276"
		},
		{
			"id": "map-signs",
			"unicode": "f277"
		},
		{
			"id": "map-o",
			"unicode": "f278"
		},
		{
			"id": "map",
			"unicode": "f279"
		},
		{
			"id": "commenting",
			"unicode": "f27a"
		},
		{
			"id": "commenting-o",
			"unicode": "f27b"
		},
		{
			"id": "houzz",
			"unicode": "f27c"
		},
		{
			"id": "vimeo",
			"unicode": "f27d"
		},
		{
			"id": "black-tie",
			"unicode": "f27e"
		},
		{
			"id": "fonticons",
			"unicode": "f280"
		},
		{
			"id": "reddit-alien",
			"unicode": "f281"
		},
		{
			"id": "edge",
			"unicode": "f282"
		},
		{
			"id": "credit-card-alt",
			"unicode": "f283"
		},
		{
			"id": "codiepie",
			"unicode": "f284"
		},
		{
			"id": "modx",
			"unicode": "f285"
		},
		{
			"id": "fort-awesome",
			"unicode": "f286"
		},
		{
			"id": "usb",
			"unicode": "f287"
		},
		{
			"id": "product-hunt",
			"unicode": "f288"
		},
		{
			"id": "mixcloud",
			"unicode": "f289"
		},
		{
			"id": "scribd",
			"unicode": "f28a"
		},
		{
			"id": "pause-circle",
			"unicode": "f28b"
		},
		{
			"id": "pause-circle-o",
			"unicode": "f28c"
		},
		{
			"id": "stop-circle",
			"unicode": "f28d"
		},
		{
			"id": "stop-circle-o",
			"unicode": "f28e"
		},
		{
			"id": "shopping-bag",
			"unicode": "f290"
		},
		{
			"id": "shopping-basket",
			"unicode": "f291"
		},
		{
			"id": "hashtag",
			"unicode": "f292"
		},
		{
			"id": "bluetooth",
			"unicode": "f293"
		},
		{
			"id": "bluetooth-b",
			"unicode": "f294"
		},
		{
			"id": "percent",
			"unicode": "f295"
		},
		{
			"id": "gitlab",
			"unicode": "f296"
		},
		{
			"id": "wpbeginner",
			"unicode": "f297"
		},
		{
			"id": "wpforms",
			"unicode": "f298"
		},
		{
			"id": "envira",
			"unicode": "f299"
		},
		{
			"id": "universal-access",
			"unicode": "f29a"
		},
		{
			"id": "wheelchair-alt",
			"unicode": "f29b"
		},
		{
			"id": "question-circle-o",
			"unicode": "f29c"
		},
		{
			"id": "blind",
			"unicode": "f29d"
		},
		{
			"id": "audio-description",
			"unicode": "f29e"
		},
		{
			"id": "volume-control-phone",
			"unicode": "f2a0"
		},
		{
			"id": "braille",
			"unicode": "f2a1"
		},
		{
			"id": "assistive-listening-systems",
			"unicode": "f2a2"
		},
		{
			"id": "american-sign-language-interpreting",
			"aliases": [
				"asl-interpreting"
			],
			"unicode": "f2a3"
		},
		{
			"id": "deaf",
			"aliases": [
				"deafness",
				"hard-of-hearing"
			],
			"unicode": "f2a4"
		},
		{
			"id": "glide",
			"unicode": "f2a5"
		},
		{
			"id": "glide-g",
			"unicode": "f2a6"
		},
		{
			"id": "sign-language",
			"aliases": [
				"signing"
			],
			"unicode": "f2a7"
		},
		{
			"id": "low-vision",
			"unicode": "f2a8"
		},
		{
			"id": "viadeo",
			"unicode": "f2a9"
		},
		{
			"id": "viadeo-square",
			"unicode": "f2aa"
		},
		{
			"id": "snapchat",
			"unicode": "f2ab"
		},
		{
			"id": "snapchat-ghost",
			"unicode": "f2ac"
		},
		{
			"id": "snapchat-square",
			"unicode": "f2ad"
		},
		{
			"id": "pied-piper",
			"unicode": "f2ae"
		},
		{
			"id": "first-order",
			"unicode": "f2b0"
		},
		{
			"id": "yoast",
			"unicode": "f2b1"
		},
		{
			"id": "themeisle",
			"unicode": "f2b2"
		},
		{
			"id": "google-plus-official",
			"aliases": [
				"google-plus-circle"
			],
			"unicode": "f2b3"
		},
		{
			"id": "font-awesome",
			"aliases": [
				"fa"
			],
			"unicode": "f2b4"
		},
		{
			"id": "handshake-o",
			"unicode": "f2b5"
		},
		{
			"id": "envelope-open",
			"unicode": "f2b6"
		},
		{
			"id": "envelope-open-o",
			"unicode": "f2b7"
		},
		{
			"id": "linode",
			"unicode": "f2b8"
		},
		{
			"id": "address-book",
			"unicode": "f2b9"
		},
		{
			"id": "address-book-o",
			"unicode": "f2ba"
		},
		{
			"id": "address-card",
			"aliases": [
				"vcard"
			],
			"unicode": "f2bb"
		},
		{
			"id": "address-card-o",
			"aliases": [
				"vcard-o"
			],
			"unicode": "f2bc"
		},
		{
			"id": "user-circle",
			"unicode": "f2bd"
		},
		{
			"id": "user-circle-o",
			"unicode": "f2be"
		},
		{
			"id": "user-o",
			"unicode": "f2c0"
		},
		{
			"id": "id-badge",
			"unicode": "f2c1"
		},
		{
			"id": "id-card",
			"aliases": [
				"drivers-license"
			],
			"unicode": "f2c2"
		},
		{
			"id": "id-card-o",
			"aliases": [
				"drivers-license-o"
			],
			"unicode": "f2c3"
		},
		{
			"id": "quora",
			"unicode": "f2c4"
		},
		{
			"id": "free-code-camp",
			"unicode": "f2c5"
		},
		{
			"id": "telegram",
			"unicode": "f2c6"
		},
		{
			"id": "thermometer-full",
			"aliases": [
				"thermometer-4",
				"thermometer"
			],
			"unicode": "f2c7"
		},
		{
			"id": "thermometer-three-quarters",
			"aliases": [
				"thermometer-3"
			],
			"unicode": "f2c8"
		},
		{
			"id": "thermometer-half",
			"aliases": [
				"thermometer-2"
			],
			"unicode": "f2c9"
		},
		{
			"id": "thermometer-quarter",
			"aliases": [
				"thermometer-1"
			],
			"unicode": "f2ca"
		},
		{
			"id": "thermometer-empty",
			"aliases": [
				"thermometer-0"
			],
			"unicode": "f2cb"
		},
		{
			"id": "shower",
			"unicode": "f2cc"
		},
		{
			"id": "bath",
			"aliases": [
				"bathtub",
				"s15"
			],
			"unicode": "f2cd"
		},
		{
			"id": "podcast",
			"unicode": "f2ce"
		},
		{
			"id": "window-maximize",
			"unicode": "f2d0"
		},
		{
			"id": "window-minimize",
			"unicode": "f2d1"
		},
		{
			"id": "window-restore",
			"unicode": "f2d2"
		},
		{
			"id": "window-close",
			"aliases": [
				"times-rectangle"
			],
			"unicode": "f2d3"
		},
		{
			"id": "window-close-o",
			"aliases": [
				"times-rectangle-o"
			],
			"unicode": "f2d4"
		},
		{
			"id": "bandcamp",
			"unicode": "f2d5"
		},
		{
			"id": "grav",
			"unicode": "f2d6"
		},
		{
			"id": "etsy",
			"unicode": "f2d7"
		},
		{
			"id": "imdb",
			"unicode": "f2d8"
		},
		{
			"id": "ravelry",
			"unicode": "f2d9"
		},
		{
			"id": "eercast",
			"unicode": "f2da"
		},
		{
			"id": "microchip",
			"unicode": "f2db"
		},
		{
			"id": "snowflake-o",
			"unicode": "f2dc"
		},
		{
			"id": "superpowers",
			"unicode": "f2dd"
		},
		{
			"id": "wpexplorer",
			"unicode": "f2de"
		},
		{
			"id": "meetup",
			"unicode": "f2e0"
		}
	]
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number} Returns the timer id.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function(text) {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one or more milliseconds.
 */
var defer = baseRest(function(func, args) {
  return baseDelay(func, 1, args);
});

module.exports = defer;


/***/ })
/******/ ]);
//# sourceMappingURL=font-awesome-openui5.js.map