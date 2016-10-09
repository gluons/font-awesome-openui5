'use strict'

unless jQuery?
  throw new Error 'No jQuery.'
else unless jQuery.sap? or sap?
  throw new Error 'Cannot find OpenUI5 library.'
else
  jQuery.sap.require 'sap.ui.core.IconPool'

  icons = require 'font-awesome-icon-chars'

  sap.ui.core.IconPool.addIcon icon.id, 'font-awesome', 'FontAwesome', icon.unicode for icon in icons

  for icon in icons
    do (icon) ->
      sap.ui.core.IconPool.addIcon icon.id, 'font-awesome', 'FontAwesome', icon.unicode
      if icon.aliases?
        sap.ui.core.IconPool.addIcon alias, 'font-awesome', 'FontAwesome', icon.unicode for alias in icon.aliases
      return
