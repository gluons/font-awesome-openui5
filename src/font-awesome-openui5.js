/*global jQuery, sap */
jQuery.sap.require("sap.ui.core.IconPool");

var faIconChars = require('font-awesome-icon-chars');
var icons = faIconChars().icons;
for (var i in icons) {
	var icon = icons[i];
	sap.ui.core.IconPool.addIcon(icon.id, 'font-awesome', 'FontAwesome', icon.unicode);
}
