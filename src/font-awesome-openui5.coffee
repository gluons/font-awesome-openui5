if jQuery != undefined and jQuery.sap != undefined
  jQuery.sap.require 'sap.ui.core.IconPool'
else
  throw new Error 'Cannot find OpenUI5 library.'

FontAwesomeOpenUI5 =
  version: '1.0.0'
  importFont: (iconSources, sourceProperties = { id: 'id', char: 'unicode' }) ->
    if !sap
      throw new Error 'Cannot find OpenUI5 library.'
    if !Array.isArray iconSources
      throw new Error 'Icon sources is not array.'
    if !(sourceProperties.hasOwnProperty('id') and sourceProperties.hasOwnProperty('char'))
      throw new Error 'Source properties is invalid.'
    for icon in iconSources
      do (icon) ->
        if icon.hasOwnProperty(sourceProperties.id) and icon.hasOwnProperty(sourceProperties.char)
          sap.ui.core.IconPool.addIcon icon[sourceProperties.id], 'font-awesome', 'FontAwesome', icon[sourceProperties.char]
        return
    return
