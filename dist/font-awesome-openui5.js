/*
Font Awesome icons for OpenUI5

The MIT License (MIT)
Copyright (c) 2016 Saran Tanpituckpong
*/
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    root.FontAwesomeOpenUI5 = factory(root.jQuery);
  }
}(this, function () {
var FontAwesomeOpenUI5;

if (jQuery !== void 0 && jQuery.sap !== void 0) {
  jQuery.sap.require('sap.ui.core.IconPool');
} else {
  throw new Error('Cannot find OpenUI5 library.');
}

FontAwesomeOpenUI5 = {
  version: '1.0.0',
  importFont: function(iconSource, sourceProperties) {
    var fn, i, icon, icons, len;
    if (sourceProperties == null) {
      sourceProperties = {
        id: 'id',
        char: 'unicode'
      };
    }
    if (!sap) {
      throw new Error('Cannot find OpenUI5 library.');
    }
    if (!Array.isArray(iconSource)) {
      throw new Error('Icon sources is not array.');
    }
    if (!(sourceProperties.hasOwnProperty('id') && sourceProperties.hasOwnProperty('char'))) {
      throw new Error('Source properties is invalid.');
    }
    if (Array.isArray(iconSource)) {
      icons = iconSource;
    } else if (iconSource.icons !== void 0 && Array.isArray(iconSource.icons)) {
      icons = iconSource.icons;
    }
    fn = function(icon) {
      if (icon.hasOwnProperty(sourceProperties.id) && icon.hasOwnProperty(sourceProperties.char)) {
        sap.ui.core.IconPool.addIcon(icon[sourceProperties.id], 'font-awesome', 'FontAwesome', icon[sourceProperties.char]);
      }
    };
    for (i = 0, len = icons.length; i < len; i++) {
      icon = icons[i];
      fn(icon);
    }
  },
  loadIcons: function(iconFilePath) {
    if (!jQuery) {
      throw new Error('No jQuery.');
    }
    return (function($) {

      /*
        ECMAScript 6 Promise.
        See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
       */
      var promise;
      promise = new Promise(function(resolve, reject) {
        $.getJSON(iconFilePath, function(iconSource) {
          if (Array.isArray(iconSource)) {
            resolve(iconSource);
          } else if (iconSource.icons !== void 0 && Array.isArray(iconSource.icons)) {
            resolve(iconSource.icons);
          }
        });
      });

      /*
      Return promise.
       */
      return promise;
    })(jQuery);
  }
};

return Font-awesome-openui5;
}));
