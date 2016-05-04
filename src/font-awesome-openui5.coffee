if jQuery != undefined and jQuery.sap != undefined
  jQuery.sap.require 'sap.ui.core.IconPool'
else
  throw new Error 'Cannot find OpenUI5 library.'

FontAwesomeOpenUI5 =
  version: '1.1.0'
  importFont: (iconSource, sourceProperties = { id: 'id', char: 'unicode' }) ->
    if !sap
      throw new Error 'Cannot find OpenUI5 library.'
    if !Array.isArray iconSource
      throw new Error 'Icon sources is not array.'
    if !(sourceProperties.hasOwnProperty('id') and sourceProperties.hasOwnProperty('char'))
      throw new Error 'Source properties is invalid.'
    if Array.isArray iconSource
      icons = iconSource
    else if iconSource.icons != undefined and Array.isArray iconSource.icons
      icons = iconSource.icons
    for icon in icons
      do (icon) ->
        if icon.hasOwnProperty(sourceProperties.id) and icon.hasOwnProperty(sourceProperties.char)
          sap.ui.core.IconPool.addIcon icon[sourceProperties.id], 'font-awesome', 'FontAwesome', icon[sourceProperties.char]
        return
    return
  loadIcons: (iconFilePath) ->
    if !jQuery
      throw new Error('No jQuery.')
    do ($ = jQuery) ->
      ###
        ECMAScript 6 Promise.
        See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
      ###
      promise = new Promise (resolve, reject) ->
        $.getJSON iconFilePath, (iconSource) ->
          if Array.isArray iconSource
            resolve iconSource
          else if iconSource.icons != undefined and Array.isArray iconSource.icons
            resolve iconSource.icons
          return
        return
      ###
      Return promise.
      ###
      promise
