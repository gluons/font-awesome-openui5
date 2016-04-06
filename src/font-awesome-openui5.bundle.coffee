if jQuery != undefined and jQuery.sap != undefined
  jQuery.sap.require 'sap.ui.core.IconPool'
  
  faIconChars = require 'font-awesome-icon-chars'

  icons = faIconChars().icons
  sap.ui.core.IconPool.addIcon icon.id, 'font-awesome', 'FontAwesome', icon.unicode for icon in icons
else
  throw new Error 'Cannot find OpenUI5 library.'
