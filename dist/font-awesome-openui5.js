/*!
 * Font Awesome icons for OpenUI5
 * https://gluons.github.io/font-awesome-openui5/
 * 
 * The MIT License (MIT)
 * Copyright (c) 2016 Saran Tanpituckpong
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("font-awesome-openui5", [], factory);
	else if(typeof exports === 'object')
		exports["font-awesome-openui5"] = factory();
	else
		root["font-awesome-openui5"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	var FontAwesomeOpenUI5;

	if ((typeof jQuery !== "undefined" && jQuery !== null) && (jQuery.sap != null)) {
	  jQuery.sap.require('sap.ui.core.IconPool');
	}

	FontAwesomeOpenUI5 = {
	  version: '1.2.0',
	  importFont: function(iconSource, sourceProperties) {
	    var fn, i, icon, icons, len;
	    if (sourceProperties == null) {
	      sourceProperties = {
	        id: 'id',
	        char: 'unicode'
	      };
	    }
	    if (typeof jQuery === "undefined" || jQuery === null) {
	      throw new Error('No jQuery.');
	    } else if (!((jQuery.sap != null) || (typeof sap !== "undefined" && sap !== null))) {
	      throw new Error('Cannot find OpenUI5 library.');
	    } else if (!Array.isArray(iconSource)) {
	      throw new Error('Icon sources is not array.');
	    } else if (!(sourceProperties.hasOwnProperty('id') && sourceProperties.hasOwnProperty('char'))) {
	      throw new Error('Source properties is invalid.');
	    } else {
	      icons = iconSource;
	      fn = function(icon) {
	        if (icon.hasOwnProperty(sourceProperties.id) && icon.hasOwnProperty(sourceProperties.char)) {
	          sap.ui.core.IconPool.addIcon(icon[sourceProperties.id], 'font-awesome', 'FontAwesome', icon[sourceProperties.char]);
	        }
	      };
	      for (i = 0, len = icons.length; i < len; i++) {
	        icon = icons[i];
	        fn(icon);
	      }
	    }
	  },
	  loadIcons: function(iconFilePath) {
	    if (typeof jQuery === "undefined" || jQuery === null) {
	      throw new Error('No jQuery.');
	    } else {
	      return (function($) {

	        /*
	          ECMAScript 6 Promise.
	          See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
	         */
	        return new Promise(function(resolve) {
	          $.getJSON(iconFilePath, function(iconSource) {
	            if (Array.isArray(iconSource)) {
	              resolve(iconSource);
	            } else if ((iconSource.icons != null) && Array.isArray(iconSource.icons)) {
	              resolve(iconSource.icons);
	            }
	          });
	        });
	      })(jQuery);
	    }
	  }
	};

	module.exports = FontAwesomeOpenUI5;


/***/ }
/******/ ])
});
;