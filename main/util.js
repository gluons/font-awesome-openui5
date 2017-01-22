"use strict";
/**
 * Check the requirement for Font Awesome OpenUI5.
 * @since 2.0.0
 * @returns {Error|null} return the Error when requirement isn't met.
 */
function checkRequirement() {
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
exports.checkRequirement = checkRequirement;
