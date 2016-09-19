'use strict'

if jQuery? and jQuery.sap?
  jQuery.sap.require 'sap.ui.core.IconPool'

FontAwesomeOpenUI5 =
  version: require('../package.json').version
  importFont: (iconSource, sourceProperties = { id: 'id', char: 'unicode' }) ->
    unless jQuery?
      throw new Error 'No jQuery.'
    else unless jQuery.sap? or sap?
      throw new Error 'Cannot find OpenUI5 library.'
    else unless Array.isArray iconSource
      throw new Error 'Icon sources is not array.'
    else unless sourceProperties.hasOwnProperty('id') and sourceProperties.hasOwnProperty('char')
      throw new Error 'Source properties is invalid.'
    else
      icons = iconSource
      for icon in icons
        do (icon) ->
          if icon.hasOwnProperty(sourceProperties.id) and icon.hasOwnProperty(sourceProperties.char)
            sap.ui.core.IconPool.addIcon icon[sourceProperties.id], 'font-awesome', 'FontAwesome', icon[sourceProperties.char]
          return
      return
  loadIcons: (iconFilePath) ->
    unless jQuery?
      throw new Error 'No jQuery.'
    else
      do ($ = jQuery) ->
        ###
          ECMAScript 6 Promise.
          See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
        ###
        new Promise (resolve) ->
          $.getJSON iconFilePath, (iconSource) ->
            if Array.isArray iconSource
              resolve iconSource
            else if iconSource.icons? and Array.isArray iconSource.icons
              resolve iconSource.icons
            return
          return

module.exports = FontAwesomeOpenUI5
