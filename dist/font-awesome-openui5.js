var FontAwesomeOpenUI5;

if (jQuery !== void 0 && jQuery.sap !== void 0) {
  jQuery.sap.require('sap.ui.core.IconPool');
} else {
  throw new Error('Cannot find OpenUI5 library.');
}

FontAwesomeOpenUI5 = {
  version: '1.0.0',
  importFont: function(iconSources, sourceProperties) {
    var fn, i, icon, len;
    if (sourceProperties == null) {
      sourceProperties = {
        id: 'id',
        char: 'unicode'
      };
    }
    if (!sap) {
      throw new Error('Cannot find OpenUI5 library.');
    }
    if (!Array.isArray(iconSources)) {
      throw new Error('Icon sources is not array.');
    }
    if (!(sourceProperties.hasOwnProperty('id') && sourceProperties.hasOwnProperty('char'))) {
      throw new Error('Source properties is invalid.');
    }
    fn = function(icon) {
      if (icon.hasOwnProperty(sourceProperties.id) && icon.hasOwnProperty(sourceProperties.char)) {
        sap.ui.core.IconPool.addIcon(icon[sourceProperties.id], 'font-awesome', 'FontAwesome', icon[sourceProperties.char]);
      }
    };
    for (i = 0, len = iconSources.length; i < len; i++) {
      icon = iconSources[i];
      fn(icon);
    }
  }
};
