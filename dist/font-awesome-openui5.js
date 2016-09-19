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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var FontAwesomeOpenUI5;

	if ((typeof jQuery !== "undefined" && jQuery !== null) && (jQuery.sap != null)) {
	  jQuery.sap.require('sap.ui.core.IconPool');
	}

	FontAwesomeOpenUI5 = {
	  version: __webpack_require__(1).version,
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
		"name": "font-awesome-openui5",
		"version": "1.2.0",
		"description": "Font Awesome icons for OpenUI5",
		"private": true,
		"scripts": {
			"build": "webpack && webpack -p --output-filename font-awesome-openui5.min.js && webpack --config webpack.standalone.config.js && webpack --config webpack.standalone.config.js -p --output-filename font-awesome-openui5.bundle.min.js",
			"test": "karma start --single-run && karma start karma.bundle.conf.js --single-run"
		},
		"repository": {
			"type": "git",
			"url": "git+https://github.com/gluons/font-awesome-openui5.git"
		},
		"keywords": [
			"font-awesome",
			"font awesome",
			"openui5"
		],
		"author": "Saran Tanpituckpong <sarunta@gmail.com>",
		"license": "MIT",
		"bugs": {
			"url": "https://github.com/gluons/font-awesome-openui5/issues"
		},
		"homepage": "https://gluons.github.io/font-awesome-openui5/",
		"dependencies": {
			"font-awesome-icon-chars": "^1.1.1"
		},
		"devDependencies": {
			"babel-core": "^6.14.0",
			"babel-loader": "^6.2.5",
			"babel-preset-es2015": "^6.14.0",
			"chai": "^3.5.0",
			"coffee-loader": "^0.7.2",
			"coffee-script": "^1.10.0",
			"json-loader": "^0.5.4",
			"karma": "^1.3.0",
			"karma-chai": "^0.1.0",
			"karma-coffee-preprocessor": "^1.0.1",
			"karma-firefox-launcher": "^1.0.0",
			"karma-mocha": "^1.1.1",
			"karma-mocha-reporter": "^2.1.0",
			"karma-requirejs": "^1.1.0",
			"mocha": "^3.0.2",
			"requirejs": "^2.3.2",
			"webpack": "^1.13.2"
		}
	};

/***/ }
/******/ ])
});
;