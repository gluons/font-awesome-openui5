"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isNil = require("lodash.isnil");
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
//# sourceMappingURL=utils.js.map
