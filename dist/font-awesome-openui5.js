(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FontAwesomeOpenUI5", [], factory);
	else if(typeof exports === 'object')
		exports["FontAwesomeOpenUI5"] = factory();
	else
		root["FontAwesomeOpenUI5"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var axios_1 = __webpack_require__(1);
	var defer = __webpack_require__(27);
	var faIconChars = __webpack_require__(28);
	var nvl = __webpack_require__(30);
	/**
	 * Font Awesome for OpenUI5.
	 */
	
	var FontAwesomeOpenUI5 = function () {
	    function FontAwesomeOpenUI5() {
	        _classCallCheck(this, FontAwesomeOpenUI5);
	    }
	
	    _createClass(FontAwesomeOpenUI5, null, [{
	        key: "checkRequirement",
	
	        /**
	         * Check the requirement for Font Awesome OpenUI5.
	         * @private
	         * @static
	         * @since 2.0.0
	         * @returns {Error|null} return the Error when requirement isn't met.
	         */
	        value: function checkRequirement() {
	            if (!jQuery) {
	                return new Error('jQuery not found.');
	            } else if (!jQuery.sap || !sap) {
	                return new Error('OpenUI5 not found.');
	            } else {
	                return null;
	            }
	        }
	        /**
	         * Add built-in icons (if no icons given) or your icons to OpenUI5.
	         * Built-in icons are from `font-awesome-icon-chars`.
	         * @public
	         * @static
	         * @since 2.0.0
	         * @see [Font Awesome Icon Character List]{@link https://github.com/gluons/Font-Awesome-Icon-Chars}
	         * @param {boolean}                     [includeAliases=true] Include Font Awesome aliases.
	         * @param {FontAwesomeIconChars.Icon[]} [icons]               Icons to add.
	         * @param {string}                      icons[].id            Icon id.
	         * @param {string}                      icons[].unicode       Icon unicode.
	         * @param {string[]}                    [icons[].aliases]     Icon aliases.
	         */
	
	    }, {
	        key: "load",
	        value: function load() {
	            var includeAliases = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	            var icons = arguments[1];
	
	            var requirementError = FontAwesomeOpenUI5.checkRequirement();
	            if (requirementError == null) {
	                jQuery.sap.require('sap.ui.core.IconPool'); // Require IconPool.
	                icons = nvl(icons, faIconChars);
	                icons.forEach(function (icon) {
	                    if (icon.id && icon.unicode) {
	                        // Import icon.
	                        sap.ui.core.IconPool.addIcon(icon.id, 'font-awesome', {
	                            fontFamily: 'FontAwesome',
	                            content: icon.unicode,
	                            overWrite: true
	                        });
	                        // Import icon aliases.
	                        if (includeAliases && Array.isArray(icon.aliases) && icon.aliases.length > 0) {
	                            icon.aliases.forEach(function (alias) {
	                                sap.ui.core.IconPool.addIcon(alias, 'font-awesome', {
	                                    fontFamily: 'FontAwesome',
	                                    content: icon.unicode,
	                                    overWrite: true
	                                });
	                            });
	                        }
	                    }
	                });
	            } else {
	                throw requirementError;
	            }
	        }
	        /**
	         * Asynchronously add built-in icons (if no icons given) or your icons to OpenUI5.
	         * @public
	         * @static
	         * @since 2.0.0
	         * @see {@link load}
	         * @param   {boolean}                     [includeAliases=true] Include Font Awesome aliases.
	         * @param   {FontAwesomeIconChars.Icon[]} [icons]               Icons to add.
	         * @param   {string}                      icons[].id            Icon id.
	         * @param   {string}                      icons[].unicode       Icon unicode.
	         * @param   {string[]}                    [icons[].aliases]     Icon aliases.
	         * @returns {Promise}
	         */
	
	    }, {
	        key: "loadAsync",
	        value: function loadAsync() {
	            var includeAliases = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	            var icons = arguments[1];
	
	            return new Promise(function (resolve, reject) {
	                defer(function () {
	                    var requirementError = FontAwesomeOpenUI5.checkRequirement();
	                    if (requirementError == null) {
	                        jQuery.sap.require('sap.ui.core.IconPool'); // Require IconPool.
	                        icons = nvl(icons, faIconChars);
	                        try {
	                            FontAwesomeOpenUI5.load(includeAliases, icons);
	                            resolve();
	                        } catch (err) {
	                            reject(err);
	                        }
	                    } else {
	                        reject(requirementError);
	                    }
	                });
	            });
	        }
	        /**
	         * Add icons from JSON file.
	         * @public
	         * @static
	         * @since 2.0.0
	         * @param   {string}  url                   File url.
	         * @param   {boolean} [includeAliases=true] Include Font Awesome aliases.
	         * @returns {Promise}
	         */
	
	    }, {
	        key: "loadFromFile",
	        value: function loadFromFile(url) {
	            var includeAliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	            return axios_1.default.get(url, {
	                responseType: 'json'
	            }).then(function (response) {
	                if (response.data && Array.isArray(response.data.icons)) {
	                    var icons = response.data.icons;
	                    return FontAwesomeOpenUI5.loadAsync(includeAliases, icons);
	                } else {
	                    throw new Error('Invalid icons resource.');
	                }
	            });
	        }
	    }]);
	
	    return FontAwesomeOpenUI5;
	}();
	
	module.exports = FontAwesomeOpenUI5;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(3);
	var bind = __webpack_require__(4);
	var Axios = __webpack_require__(5);
	var defaults = __webpack_require__(6);
	
	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);
	
	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);
	
	  // Copy context to instance
	  utils.extend(instance, context);
	
	  return instance;
	}
	
	// Create the default instance to be exported
	var axios = createInstance(defaults);
	
	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;
	
	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};
	
	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(24);
	axios.CancelToken = __webpack_require__(25);
	axios.isCancel = __webpack_require__(21);
	
	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(26);
	
	module.exports = axios;
	
	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var bind = __webpack_require__(4);
	
	/*global toString:true*/
	
	// utils is a library of generic helper functions non-specific to axios
	
	var toString = Object.prototype.toString;
	
	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}
	
	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}
	
	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return typeof FormData !== 'undefined' && val instanceof FormData;
	}
	
	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
	  }
	  return result;
	}
	
	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}
	
	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}
	
	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}
	
	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object';
	}
	
	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}
	
	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}
	
	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}
	
	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}
	
	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}
	
	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}
	
	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}
	
	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function';
	}
	
	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }
	
	  // Force an array if not already something iterable
	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }
	
	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}
	
	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge() /* obj1, obj2, obj3, ... */{
	  var result = {};
	  function assignValue(val, key) {
	    if (_typeof(result[key]) === 'object' && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }
	
	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}
	
	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}
	
	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var defaults = __webpack_require__(6);
	var utils = __webpack_require__(3);
	var InterceptorManager = __webpack_require__(18);
	var dispatchRequest = __webpack_require__(19);
	var isAbsoluteURL = __webpack_require__(22);
	var combineURLs = __webpack_require__(23);
	
	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}
	
	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }
	
	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
	
	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }
	
	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);
	
	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });
	
	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }
	
	  return promise;
	};
	
	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function (url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function (url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});
	
	module.exports = Axios;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(3);
	var normalizeHeaderName = __webpack_require__(8);
	
	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};
	
	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}
	
	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(9);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(9);
	  }
	  return adapter;
	}
	
	var defaults = {
	  adapter: getDefaultAdapter(),
	
	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],
	
	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) {/* Ignore */}
	    }
	    return data;
	  }],
	
	  timeout: 0,
	
	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',
	
	  maxContentLength: -1,
	
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};
	
	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};
	
	utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
	  defaults.headers[method] = {};
	});
	
	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});
	
	module.exports = defaults;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(3);
	
	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var utils = __webpack_require__(3);
	var settle = __webpack_require__(10);
	var buildURL = __webpack_require__(13);
	var parseHeaders = __webpack_require__(14);
	var isURLSameOrigin = __webpack_require__(15);
	var createError = __webpack_require__(11);
	var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(16);
	
	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;
	
	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }
	
	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;
	
	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }
	
	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }
	
	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
	
	    // Set the request timeout in MS
	    request.timeout = config.timeout;
	
	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || request.readyState !== 4 && !xDomain) {
	        return;
	      }
	
	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }
	
	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };
	
	      settle(resolve, reject, response);
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));
	
	      // Clean up request
	      request = null;
	    };
	
	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(17);
	
	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
	
	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }
	
	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }
	
	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }
	
	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }
	
	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }
	
	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }
	
	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }
	
	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }
	
	    if (requestData === undefined) {
	      requestData = null;
	    }
	
	    // Send the request
	    request.send(requestData);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var createError = __webpack_require__(11);
	
	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError('Request failed with status code ' + response.status, response.config, null, response));
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var enhanceError = __webpack_require__(12);
	
	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(3);
	
	function encode(val) {
	  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
	}
	
	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }
	
	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];
	
	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }
	
	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }
	
	      if (!utils.isArray(val)) {
	        val = [val];
	      }
	
	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });
	
	    serializedParams = parts.join('&');
	  }
	
	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }
	
	  return url;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(3);
	
	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;
	
	  if (!headers) {
	    return parsed;
	  }
	
	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));
	
	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });
	
	  return parsed;
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(3);
	
	module.exports = utils.isStandardBrowserEnv() ?
	
	// Standard browser envs have full support of the APIs needed to test
	// whether the request URL is of the same origin as current location.
	function standardBrowserEnv() {
	  var msie = /(msie|trident)/i.test(navigator.userAgent);
	  var urlParsingNode = document.createElement('a');
	  var originURL;
	
	  /**
	  * Parse a URL to discover it's components
	  *
	  * @param {String} url The URL to be parsed
	  * @returns {Object}
	  */
	  function resolveURL(url) {
	    var href = url;
	
	    if (msie) {
	      // IE needs attribute set twice to normalize properties
	      urlParsingNode.setAttribute('href', href);
	      href = urlParsingNode.href;
	    }
	
	    urlParsingNode.setAttribute('href', href);
	
	    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	    return {
	      href: urlParsingNode.href,
	      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	      host: urlParsingNode.host,
	      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	      hostname: urlParsingNode.hostname,
	      port: urlParsingNode.port,
	      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
	    };
	  }
	
	  originURL = resolveURL(window.location.href);
	
	  /**
	  * Determine if a URL shares the same origin as the current location
	  *
	  * @param {String} requestURL The URL to test
	  * @returns {boolean} True if URL shares the same origin, otherwise false
	  */
	  return function isURLSameOrigin(requestURL) {
	    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
	    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
	  };
	}() :
	
	// Non standard browser envs (web workers, react-native) lack needed support.
	function nonStandardBrowserEnv() {
	  return function isURLSameOrigin() {
	    return true;
	  };
	}();

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
	
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	
	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error();
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';
	
	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	  // initialize result and counter
	  var block, charCode, idx = 0, map = chars;
	  // if the next str index does not exist:
	  //   change the mapping table to "="
	  //   check if d has no fractional digits
	  str.charAt(idx | 0) || (map = '=', idx % 1);
	  // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}
	
	module.exports = btoa;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(3);
	
	module.exports = utils.isStandardBrowserEnv() ?
	
	// Standard browser envs support document.cookie
	function standardBrowserEnv() {
	  return {
	    write: function write(name, value, expires, path, domain, secure) {
	      var cookie = [];
	      cookie.push(name + '=' + encodeURIComponent(value));
	
	      if (utils.isNumber(expires)) {
	        cookie.push('expires=' + new Date(expires).toGMTString());
	      }
	
	      if (utils.isString(path)) {
	        cookie.push('path=' + path);
	      }
	
	      if (utils.isString(domain)) {
	        cookie.push('domain=' + domain);
	      }
	
	      if (secure === true) {
	        cookie.push('secure');
	      }
	
	      document.cookie = cookie.join('; ');
	    },
	
	    read: function read(name) {
	      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	      return match ? decodeURIComponent(match[3]) : null;
	    },
	
	    remove: function remove(name) {
	      this.write(name, '', Date.now() - 86400000);
	    }
	  };
	}() :
	
	// Non standard browser env (web workers, react-native) lack needed support.
	function nonStandardBrowserEnv() {
	  return {
	    write: function write() {},
	    read: function read() {
	      return null;
	    },
	    remove: function remove() {}
	  };
	}();

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(3);
	
	function InterceptorManager() {
	  this.handlers = [];
	}
	
	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};
	
	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};
	
	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};
	
	module.exports = InterceptorManager;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(3);
	var transformData = __webpack_require__(20);
	var isCancel = __webpack_require__(21);
	var defaults = __webpack_require__(6);
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}
	
	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);
	
	  // Ensure headers exist
	  config.headers = config.headers || {};
	
	  // Transform request data
	  config.data = transformData(config.data, config.headers, config.transformRequest);
	
	  // Flatten headers
	  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
	
	  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
	    delete config.headers[method];
	  });
	
	  var adapter = config.adapter || defaults.adapter;
	
	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);
	
	    // Transform response data
	    response.data = transformData(response.data, response.headers, config.transformResponse);
	
	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);
	
	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
	      }
	    }
	
	    return Promise.reject(reason);
	  });
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var utils = __webpack_require__(3);
	
	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });
	
	  return data;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
	  );
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	
	function Cancel(message) {
	  this.message = message;
	}
	
	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};
	
	Cancel.prototype.__CANCEL__ = true;
	
	module.exports = Cancel;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Cancel = __webpack_require__(24);
	
	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }
	
	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });
	
	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }
	
	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}
	
	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};
	
	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};
	
	module.exports = CancelToken;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0:
	      return func.call(thisArg);
	    case 1:
	      return func.call(thisArg, args[0]);
	    case 2:
	      return func.call(thisArg, args[0], args[1]);
	    case 3:
	      return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * The base implementation of `_.delay` and `_.defer` which accepts `args`
	 * to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to delay.
	 * @param {number} wait The number of milliseconds to delay invocation.
	 * @param {Array} args The arguments to provide to `func`.
	 * @returns {number} Returns the timer id.
	 */
	function baseDelay(func, wait, args) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  return setTimeout(function () {
	    func.apply(undefined, args);
	  }, wait);
	}
	
	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
	  return function () {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	/**
	 * Defers invoking the `func` until the current call stack has cleared. Any
	 * additional arguments are provided to `func` when it's invoked.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to defer.
	 * @param {...*} [args] The arguments to invoke `func` with.
	 * @returns {number} Returns the timer id.
	 * @example
	 *
	 * _.defer(function(text) {
	 *   console.log(text);
	 * }, 'deferred');
	 * // => Logs 'deferred' after one or more milliseconds.
	 */
	var defer = baseRest(function (func, args) {
	  return baseDelay(func, 1, args);
	});
	
	module.exports = defer;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = function () {
		var charList = __webpack_require__(29);
		return charList.icons;
	}();

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = {
		"icons": [
			{
				"id": "glass",
				"unicode": "f000"
			},
			{
				"id": "music",
				"unicode": "f001"
			},
			{
				"id": "search",
				"unicode": "f002"
			},
			{
				"id": "envelope-o",
				"unicode": "f003"
			},
			{
				"id": "heart",
				"unicode": "f004"
			},
			{
				"id": "star",
				"unicode": "f005"
			},
			{
				"id": "star-o",
				"unicode": "f006"
			},
			{
				"id": "user",
				"unicode": "f007"
			},
			{
				"id": "film",
				"unicode": "f008"
			},
			{
				"id": "th-large",
				"unicode": "f009"
			},
			{
				"id": "th",
				"unicode": "f00a"
			},
			{
				"id": "th-list",
				"unicode": "f00b"
			},
			{
				"id": "check",
				"unicode": "f00c"
			},
			{
				"id": "times",
				"aliases": [
					"remove",
					"close"
				],
				"unicode": "f00d"
			},
			{
				"id": "search-plus",
				"unicode": "f00e"
			},
			{
				"id": "search-minus",
				"unicode": "f010"
			},
			{
				"id": "power-off",
				"unicode": "f011"
			},
			{
				"id": "signal",
				"unicode": "f012"
			},
			{
				"id": "cog",
				"aliases": [
					"gear"
				],
				"unicode": "f013"
			},
			{
				"id": "trash-o",
				"unicode": "f014"
			},
			{
				"id": "home",
				"unicode": "f015"
			},
			{
				"id": "file-o",
				"unicode": "f016"
			},
			{
				"id": "clock-o",
				"unicode": "f017"
			},
			{
				"id": "road",
				"unicode": "f018"
			},
			{
				"id": "download",
				"unicode": "f019"
			},
			{
				"id": "arrow-circle-o-down",
				"unicode": "f01a"
			},
			{
				"id": "arrow-circle-o-up",
				"unicode": "f01b"
			},
			{
				"id": "inbox",
				"unicode": "f01c"
			},
			{
				"id": "play-circle-o",
				"unicode": "f01d"
			},
			{
				"id": "repeat",
				"aliases": [
					"rotate-right"
				],
				"unicode": "f01e"
			},
			{
				"id": "refresh",
				"unicode": "f021"
			},
			{
				"id": "list-alt",
				"unicode": "f022"
			},
			{
				"id": "lock",
				"unicode": "f023"
			},
			{
				"id": "flag",
				"unicode": "f024"
			},
			{
				"id": "headphones",
				"unicode": "f025"
			},
			{
				"id": "volume-off",
				"unicode": "f026"
			},
			{
				"id": "volume-down",
				"unicode": "f027"
			},
			{
				"id": "volume-up",
				"unicode": "f028"
			},
			{
				"id": "qrcode",
				"unicode": "f029"
			},
			{
				"id": "barcode",
				"unicode": "f02a"
			},
			{
				"id": "tag",
				"unicode": "f02b"
			},
			{
				"id": "tags",
				"unicode": "f02c"
			},
			{
				"id": "book",
				"unicode": "f02d"
			},
			{
				"id": "bookmark",
				"unicode": "f02e"
			},
			{
				"id": "print",
				"unicode": "f02f"
			},
			{
				"id": "camera",
				"unicode": "f030"
			},
			{
				"id": "font",
				"unicode": "f031"
			},
			{
				"id": "bold",
				"unicode": "f032"
			},
			{
				"id": "italic",
				"unicode": "f033"
			},
			{
				"id": "text-height",
				"unicode": "f034"
			},
			{
				"id": "text-width",
				"unicode": "f035"
			},
			{
				"id": "align-left",
				"unicode": "f036"
			},
			{
				"id": "align-center",
				"unicode": "f037"
			},
			{
				"id": "align-right",
				"unicode": "f038"
			},
			{
				"id": "align-justify",
				"unicode": "f039"
			},
			{
				"id": "list",
				"unicode": "f03a"
			},
			{
				"id": "outdent",
				"aliases": [
					"dedent"
				],
				"unicode": "f03b"
			},
			{
				"id": "indent",
				"unicode": "f03c"
			},
			{
				"id": "video-camera",
				"unicode": "f03d"
			},
			{
				"id": "picture-o",
				"aliases": [
					"photo",
					"image"
				],
				"unicode": "f03e"
			},
			{
				"id": "pencil",
				"unicode": "f040"
			},
			{
				"id": "map-marker",
				"unicode": "f041"
			},
			{
				"id": "adjust",
				"unicode": "f042"
			},
			{
				"id": "tint",
				"unicode": "f043"
			},
			{
				"id": "pencil-square-o",
				"aliases": [
					"edit"
				],
				"unicode": "f044"
			},
			{
				"id": "share-square-o",
				"unicode": "f045"
			},
			{
				"id": "check-square-o",
				"unicode": "f046"
			},
			{
				"id": "arrows",
				"unicode": "f047"
			},
			{
				"id": "step-backward",
				"unicode": "f048"
			},
			{
				"id": "fast-backward",
				"unicode": "f049"
			},
			{
				"id": "backward",
				"unicode": "f04a"
			},
			{
				"id": "play",
				"unicode": "f04b"
			},
			{
				"id": "pause",
				"unicode": "f04c"
			},
			{
				"id": "stop",
				"unicode": "f04d"
			},
			{
				"id": "forward",
				"unicode": "f04e"
			},
			{
				"id": "fast-forward",
				"unicode": "f050"
			},
			{
				"id": "step-forward",
				"unicode": "f051"
			},
			{
				"id": "eject",
				"unicode": "f052"
			},
			{
				"id": "chevron-left",
				"unicode": "f053"
			},
			{
				"id": "chevron-right",
				"unicode": "f054"
			},
			{
				"id": "plus-circle",
				"unicode": "f055"
			},
			{
				"id": "minus-circle",
				"unicode": "f056"
			},
			{
				"id": "times-circle",
				"unicode": "f057"
			},
			{
				"id": "check-circle",
				"unicode": "f058"
			},
			{
				"id": "question-circle",
				"unicode": "f059"
			},
			{
				"id": "info-circle",
				"unicode": "f05a"
			},
			{
				"id": "crosshairs",
				"unicode": "f05b"
			},
			{
				"id": "times-circle-o",
				"unicode": "f05c"
			},
			{
				"id": "check-circle-o",
				"unicode": "f05d"
			},
			{
				"id": "ban",
				"unicode": "f05e"
			},
			{
				"id": "arrow-left",
				"unicode": "f060"
			},
			{
				"id": "arrow-right",
				"unicode": "f061"
			},
			{
				"id": "arrow-up",
				"unicode": "f062"
			},
			{
				"id": "arrow-down",
				"unicode": "f063"
			},
			{
				"id": "share",
				"aliases": [
					"mail-forward"
				],
				"unicode": "f064"
			},
			{
				"id": "expand",
				"unicode": "f065"
			},
			{
				"id": "compress",
				"unicode": "f066"
			},
			{
				"id": "plus",
				"unicode": "f067"
			},
			{
				"id": "minus",
				"unicode": "f068"
			},
			{
				"id": "asterisk",
				"unicode": "f069"
			},
			{
				"id": "exclamation-circle",
				"unicode": "f06a"
			},
			{
				"id": "gift",
				"unicode": "f06b"
			},
			{
				"id": "leaf",
				"unicode": "f06c"
			},
			{
				"id": "fire",
				"unicode": "f06d"
			},
			{
				"id": "eye",
				"unicode": "f06e"
			},
			{
				"id": "eye-slash",
				"unicode": "f070"
			},
			{
				"id": "exclamation-triangle",
				"aliases": [
					"warning"
				],
				"unicode": "f071"
			},
			{
				"id": "plane",
				"unicode": "f072"
			},
			{
				"id": "calendar",
				"unicode": "f073"
			},
			{
				"id": "random",
				"unicode": "f074"
			},
			{
				"id": "comment",
				"unicode": "f075"
			},
			{
				"id": "magnet",
				"unicode": "f076"
			},
			{
				"id": "chevron-up",
				"unicode": "f077"
			},
			{
				"id": "chevron-down",
				"unicode": "f078"
			},
			{
				"id": "retweet",
				"unicode": "f079"
			},
			{
				"id": "shopping-cart",
				"unicode": "f07a"
			},
			{
				"id": "folder",
				"unicode": "f07b"
			},
			{
				"id": "folder-open",
				"unicode": "f07c"
			},
			{
				"id": "arrows-v",
				"unicode": "f07d"
			},
			{
				"id": "arrows-h",
				"unicode": "f07e"
			},
			{
				"id": "bar-chart",
				"aliases": [
					"bar-chart-o"
				],
				"unicode": "f080"
			},
			{
				"id": "twitter-square",
				"unicode": "f081"
			},
			{
				"id": "facebook-square",
				"unicode": "f082"
			},
			{
				"id": "camera-retro",
				"unicode": "f083"
			},
			{
				"id": "key",
				"unicode": "f084"
			},
			{
				"id": "cogs",
				"aliases": [
					"gears"
				],
				"unicode": "f085"
			},
			{
				"id": "comments",
				"unicode": "f086"
			},
			{
				"id": "thumbs-o-up",
				"unicode": "f087"
			},
			{
				"id": "thumbs-o-down",
				"unicode": "f088"
			},
			{
				"id": "star-half",
				"unicode": "f089"
			},
			{
				"id": "heart-o",
				"unicode": "f08a"
			},
			{
				"id": "sign-out",
				"unicode": "f08b"
			},
			{
				"id": "linkedin-square",
				"unicode": "f08c"
			},
			{
				"id": "thumb-tack",
				"unicode": "f08d"
			},
			{
				"id": "external-link",
				"unicode": "f08e"
			},
			{
				"id": "sign-in",
				"unicode": "f090"
			},
			{
				"id": "trophy",
				"unicode": "f091"
			},
			{
				"id": "github-square",
				"unicode": "f092"
			},
			{
				"id": "upload",
				"unicode": "f093"
			},
			{
				"id": "lemon-o",
				"unicode": "f094"
			},
			{
				"id": "phone",
				"unicode": "f095"
			},
			{
				"id": "square-o",
				"unicode": "f096"
			},
			{
				"id": "bookmark-o",
				"unicode": "f097"
			},
			{
				"id": "phone-square",
				"unicode": "f098"
			},
			{
				"id": "twitter",
				"unicode": "f099"
			},
			{
				"id": "facebook",
				"aliases": [
					"facebook-f"
				],
				"unicode": "f09a"
			},
			{
				"id": "github",
				"unicode": "f09b"
			},
			{
				"id": "unlock",
				"unicode": "f09c"
			},
			{
				"id": "credit-card",
				"unicode": "f09d"
			},
			{
				"id": "rss",
				"aliases": [
					"feed"
				],
				"unicode": "f09e"
			},
			{
				"id": "hdd-o",
				"unicode": "f0a0"
			},
			{
				"id": "bullhorn",
				"unicode": "f0a1"
			},
			{
				"id": "bell",
				"unicode": "f0f3"
			},
			{
				"id": "certificate",
				"unicode": "f0a3"
			},
			{
				"id": "hand-o-right",
				"unicode": "f0a4"
			},
			{
				"id": "hand-o-left",
				"unicode": "f0a5"
			},
			{
				"id": "hand-o-up",
				"unicode": "f0a6"
			},
			{
				"id": "hand-o-down",
				"unicode": "f0a7"
			},
			{
				"id": "arrow-circle-left",
				"unicode": "f0a8"
			},
			{
				"id": "arrow-circle-right",
				"unicode": "f0a9"
			},
			{
				"id": "arrow-circle-up",
				"unicode": "f0aa"
			},
			{
				"id": "arrow-circle-down",
				"unicode": "f0ab"
			},
			{
				"id": "globe",
				"unicode": "f0ac"
			},
			{
				"id": "wrench",
				"unicode": "f0ad"
			},
			{
				"id": "tasks",
				"unicode": "f0ae"
			},
			{
				"id": "filter",
				"unicode": "f0b0"
			},
			{
				"id": "briefcase",
				"unicode": "f0b1"
			},
			{
				"id": "arrows-alt",
				"unicode": "f0b2"
			},
			{
				"id": "users",
				"aliases": [
					"group"
				],
				"unicode": "f0c0"
			},
			{
				"id": "link",
				"aliases": [
					"chain"
				],
				"unicode": "f0c1"
			},
			{
				"id": "cloud",
				"unicode": "f0c2"
			},
			{
				"id": "flask",
				"unicode": "f0c3"
			},
			{
				"id": "scissors",
				"aliases": [
					"cut"
				],
				"unicode": "f0c4"
			},
			{
				"id": "files-o",
				"aliases": [
					"copy"
				],
				"unicode": "f0c5"
			},
			{
				"id": "paperclip",
				"unicode": "f0c6"
			},
			{
				"id": "floppy-o",
				"aliases": [
					"save"
				],
				"unicode": "f0c7"
			},
			{
				"id": "square",
				"unicode": "f0c8"
			},
			{
				"id": "bars",
				"aliases": [
					"navicon",
					"reorder"
				],
				"unicode": "f0c9"
			},
			{
				"id": "list-ul",
				"unicode": "f0ca"
			},
			{
				"id": "list-ol",
				"unicode": "f0cb"
			},
			{
				"id": "strikethrough",
				"unicode": "f0cc"
			},
			{
				"id": "underline",
				"unicode": "f0cd"
			},
			{
				"id": "table",
				"unicode": "f0ce"
			},
			{
				"id": "magic",
				"unicode": "f0d0"
			},
			{
				"id": "truck",
				"unicode": "f0d1"
			},
			{
				"id": "pinterest",
				"unicode": "f0d2"
			},
			{
				"id": "pinterest-square",
				"unicode": "f0d3"
			},
			{
				"id": "google-plus-square",
				"unicode": "f0d4"
			},
			{
				"id": "google-plus",
				"unicode": "f0d5"
			},
			{
				"id": "money",
				"unicode": "f0d6"
			},
			{
				"id": "caret-down",
				"unicode": "f0d7"
			},
			{
				"id": "caret-up",
				"unicode": "f0d8"
			},
			{
				"id": "caret-left",
				"unicode": "f0d9"
			},
			{
				"id": "caret-right",
				"unicode": "f0da"
			},
			{
				"id": "columns",
				"unicode": "f0db"
			},
			{
				"id": "sort",
				"aliases": [
					"unsorted"
				],
				"unicode": "f0dc"
			},
			{
				"id": "sort-desc",
				"aliases": [
					"sort-down"
				],
				"unicode": "f0dd"
			},
			{
				"id": "sort-asc",
				"aliases": [
					"sort-up"
				],
				"unicode": "f0de"
			},
			{
				"id": "envelope",
				"unicode": "f0e0"
			},
			{
				"id": "linkedin",
				"unicode": "f0e1"
			},
			{
				"id": "undo",
				"aliases": [
					"rotate-left"
				],
				"unicode": "f0e2"
			},
			{
				"id": "gavel",
				"aliases": [
					"legal"
				],
				"unicode": "f0e3"
			},
			{
				"id": "tachometer",
				"aliases": [
					"dashboard"
				],
				"unicode": "f0e4"
			},
			{
				"id": "comment-o",
				"unicode": "f0e5"
			},
			{
				"id": "comments-o",
				"unicode": "f0e6"
			},
			{
				"id": "bolt",
				"aliases": [
					"flash"
				],
				"unicode": "f0e7"
			},
			{
				"id": "sitemap",
				"unicode": "f0e8"
			},
			{
				"id": "umbrella",
				"unicode": "f0e9"
			},
			{
				"id": "clipboard",
				"aliases": [
					"paste"
				],
				"unicode": "f0ea"
			},
			{
				"id": "lightbulb-o",
				"unicode": "f0eb"
			},
			{
				"id": "exchange",
				"unicode": "f0ec"
			},
			{
				"id": "cloud-download",
				"unicode": "f0ed"
			},
			{
				"id": "cloud-upload",
				"unicode": "f0ee"
			},
			{
				"id": "user-md",
				"unicode": "f0f0"
			},
			{
				"id": "stethoscope",
				"unicode": "f0f1"
			},
			{
				"id": "suitcase",
				"unicode": "f0f2"
			},
			{
				"id": "bell-o",
				"unicode": "f0a2"
			},
			{
				"id": "coffee",
				"unicode": "f0f4"
			},
			{
				"id": "cutlery",
				"unicode": "f0f5"
			},
			{
				"id": "file-text-o",
				"unicode": "f0f6"
			},
			{
				"id": "building-o",
				"unicode": "f0f7"
			},
			{
				"id": "hospital-o",
				"unicode": "f0f8"
			},
			{
				"id": "ambulance",
				"unicode": "f0f9"
			},
			{
				"id": "medkit",
				"unicode": "f0fa"
			},
			{
				"id": "fighter-jet",
				"unicode": "f0fb"
			},
			{
				"id": "beer",
				"unicode": "f0fc"
			},
			{
				"id": "h-square",
				"unicode": "f0fd"
			},
			{
				"id": "plus-square",
				"unicode": "f0fe"
			},
			{
				"id": "angle-double-left",
				"unicode": "f100"
			},
			{
				"id": "angle-double-right",
				"unicode": "f101"
			},
			{
				"id": "angle-double-up",
				"unicode": "f102"
			},
			{
				"id": "angle-double-down",
				"unicode": "f103"
			},
			{
				"id": "angle-left",
				"unicode": "f104"
			},
			{
				"id": "angle-right",
				"unicode": "f105"
			},
			{
				"id": "angle-up",
				"unicode": "f106"
			},
			{
				"id": "angle-down",
				"unicode": "f107"
			},
			{
				"id": "desktop",
				"unicode": "f108"
			},
			{
				"id": "laptop",
				"unicode": "f109"
			},
			{
				"id": "tablet",
				"unicode": "f10a"
			},
			{
				"id": "mobile",
				"aliases": [
					"mobile-phone"
				],
				"unicode": "f10b"
			},
			{
				"id": "circle-o",
				"unicode": "f10c"
			},
			{
				"id": "quote-left",
				"unicode": "f10d"
			},
			{
				"id": "quote-right",
				"unicode": "f10e"
			},
			{
				"id": "spinner",
				"unicode": "f110"
			},
			{
				"id": "circle",
				"unicode": "f111"
			},
			{
				"id": "reply",
				"aliases": [
					"mail-reply"
				],
				"unicode": "f112"
			},
			{
				"id": "github-alt",
				"unicode": "f113"
			},
			{
				"id": "folder-o",
				"unicode": "f114"
			},
			{
				"id": "folder-open-o",
				"unicode": "f115"
			},
			{
				"id": "smile-o",
				"unicode": "f118"
			},
			{
				"id": "frown-o",
				"unicode": "f119"
			},
			{
				"id": "meh-o",
				"unicode": "f11a"
			},
			{
				"id": "gamepad",
				"unicode": "f11b"
			},
			{
				"id": "keyboard-o",
				"unicode": "f11c"
			},
			{
				"id": "flag-o",
				"unicode": "f11d"
			},
			{
				"id": "flag-checkered",
				"unicode": "f11e"
			},
			{
				"id": "terminal",
				"unicode": "f120"
			},
			{
				"id": "code",
				"unicode": "f121"
			},
			{
				"id": "reply-all",
				"aliases": [
					"mail-reply-all"
				],
				"unicode": "f122"
			},
			{
				"id": "star-half-o",
				"aliases": [
					"star-half-empty",
					"star-half-full"
				],
				"unicode": "f123"
			},
			{
				"id": "location-arrow",
				"unicode": "f124"
			},
			{
				"id": "crop",
				"unicode": "f125"
			},
			{
				"id": "code-fork",
				"unicode": "f126"
			},
			{
				"id": "chain-broken",
				"aliases": [
					"unlink"
				],
				"unicode": "f127"
			},
			{
				"id": "question",
				"unicode": "f128"
			},
			{
				"id": "info",
				"unicode": "f129"
			},
			{
				"id": "exclamation",
				"unicode": "f12a"
			},
			{
				"id": "superscript",
				"unicode": "f12b"
			},
			{
				"id": "subscript",
				"unicode": "f12c"
			},
			{
				"id": "eraser",
				"unicode": "f12d"
			},
			{
				"id": "puzzle-piece",
				"unicode": "f12e"
			},
			{
				"id": "microphone",
				"unicode": "f130"
			},
			{
				"id": "microphone-slash",
				"unicode": "f131"
			},
			{
				"id": "shield",
				"unicode": "f132"
			},
			{
				"id": "calendar-o",
				"unicode": "f133"
			},
			{
				"id": "fire-extinguisher",
				"unicode": "f134"
			},
			{
				"id": "rocket",
				"unicode": "f135"
			},
			{
				"id": "maxcdn",
				"unicode": "f136"
			},
			{
				"id": "chevron-circle-left",
				"unicode": "f137"
			},
			{
				"id": "chevron-circle-right",
				"unicode": "f138"
			},
			{
				"id": "chevron-circle-up",
				"unicode": "f139"
			},
			{
				"id": "chevron-circle-down",
				"unicode": "f13a"
			},
			{
				"id": "html5",
				"unicode": "f13b"
			},
			{
				"id": "css3",
				"unicode": "f13c"
			},
			{
				"id": "anchor",
				"unicode": "f13d"
			},
			{
				"id": "unlock-alt",
				"unicode": "f13e"
			},
			{
				"id": "bullseye",
				"unicode": "f140"
			},
			{
				"id": "ellipsis-h",
				"unicode": "f141"
			},
			{
				"id": "ellipsis-v",
				"unicode": "f142"
			},
			{
				"id": "rss-square",
				"unicode": "f143"
			},
			{
				"id": "play-circle",
				"unicode": "f144"
			},
			{
				"id": "ticket",
				"unicode": "f145"
			},
			{
				"id": "minus-square",
				"unicode": "f146"
			},
			{
				"id": "minus-square-o",
				"unicode": "f147"
			},
			{
				"id": "level-up",
				"unicode": "f148"
			},
			{
				"id": "level-down",
				"unicode": "f149"
			},
			{
				"id": "check-square",
				"unicode": "f14a"
			},
			{
				"id": "pencil-square",
				"unicode": "f14b"
			},
			{
				"id": "external-link-square",
				"unicode": "f14c"
			},
			{
				"id": "share-square",
				"unicode": "f14d"
			},
			{
				"id": "compass",
				"unicode": "f14e"
			},
			{
				"id": "caret-square-o-down",
				"aliases": [
					"toggle-down"
				],
				"unicode": "f150"
			},
			{
				"id": "caret-square-o-up",
				"aliases": [
					"toggle-up"
				],
				"unicode": "f151"
			},
			{
				"id": "caret-square-o-right",
				"aliases": [
					"toggle-right"
				],
				"unicode": "f152"
			},
			{
				"id": "eur",
				"aliases": [
					"euro"
				],
				"unicode": "f153"
			},
			{
				"id": "gbp",
				"unicode": "f154"
			},
			{
				"id": "usd",
				"aliases": [
					"dollar"
				],
				"unicode": "f155"
			},
			{
				"id": "inr",
				"aliases": [
					"rupee"
				],
				"unicode": "f156"
			},
			{
				"id": "jpy",
				"aliases": [
					"cny",
					"rmb",
					"yen"
				],
				"unicode": "f157"
			},
			{
				"id": "rub",
				"aliases": [
					"ruble",
					"rouble"
				],
				"unicode": "f158"
			},
			{
				"id": "krw",
				"aliases": [
					"won"
				],
				"unicode": "f159"
			},
			{
				"id": "btc",
				"aliases": [
					"bitcoin"
				],
				"unicode": "f15a"
			},
			{
				"id": "file",
				"unicode": "f15b"
			},
			{
				"id": "file-text",
				"unicode": "f15c"
			},
			{
				"id": "sort-alpha-asc",
				"unicode": "f15d"
			},
			{
				"id": "sort-alpha-desc",
				"unicode": "f15e"
			},
			{
				"id": "sort-amount-asc",
				"unicode": "f160"
			},
			{
				"id": "sort-amount-desc",
				"unicode": "f161"
			},
			{
				"id": "sort-numeric-asc",
				"unicode": "f162"
			},
			{
				"id": "sort-numeric-desc",
				"unicode": "f163"
			},
			{
				"id": "thumbs-up",
				"unicode": "f164"
			},
			{
				"id": "thumbs-down",
				"unicode": "f165"
			},
			{
				"id": "youtube-square",
				"unicode": "f166"
			},
			{
				"id": "youtube",
				"unicode": "f167"
			},
			{
				"id": "xing",
				"unicode": "f168"
			},
			{
				"id": "xing-square",
				"unicode": "f169"
			},
			{
				"id": "youtube-play",
				"unicode": "f16a"
			},
			{
				"id": "dropbox",
				"unicode": "f16b"
			},
			{
				"id": "stack-overflow",
				"unicode": "f16c"
			},
			{
				"id": "instagram",
				"unicode": "f16d"
			},
			{
				"id": "flickr",
				"unicode": "f16e"
			},
			{
				"id": "adn",
				"unicode": "f170"
			},
			{
				"id": "bitbucket",
				"unicode": "f171"
			},
			{
				"id": "bitbucket-square",
				"unicode": "f172"
			},
			{
				"id": "tumblr",
				"unicode": "f173"
			},
			{
				"id": "tumblr-square",
				"unicode": "f174"
			},
			{
				"id": "long-arrow-down",
				"unicode": "f175"
			},
			{
				"id": "long-arrow-up",
				"unicode": "f176"
			},
			{
				"id": "long-arrow-left",
				"unicode": "f177"
			},
			{
				"id": "long-arrow-right",
				"unicode": "f178"
			},
			{
				"id": "apple",
				"unicode": "f179"
			},
			{
				"id": "windows",
				"unicode": "f17a"
			},
			{
				"id": "android",
				"unicode": "f17b"
			},
			{
				"id": "linux",
				"unicode": "f17c"
			},
			{
				"id": "dribbble",
				"unicode": "f17d"
			},
			{
				"id": "skype",
				"unicode": "f17e"
			},
			{
				"id": "foursquare",
				"unicode": "f180"
			},
			{
				"id": "trello",
				"unicode": "f181"
			},
			{
				"id": "female",
				"unicode": "f182"
			},
			{
				"id": "male",
				"unicode": "f183"
			},
			{
				"id": "gratipay",
				"aliases": [
					"gittip"
				],
				"unicode": "f184"
			},
			{
				"id": "sun-o",
				"unicode": "f185"
			},
			{
				"id": "moon-o",
				"unicode": "f186"
			},
			{
				"id": "archive",
				"unicode": "f187"
			},
			{
				"id": "bug",
				"unicode": "f188"
			},
			{
				"id": "vk",
				"unicode": "f189"
			},
			{
				"id": "weibo",
				"unicode": "f18a"
			},
			{
				"id": "renren",
				"unicode": "f18b"
			},
			{
				"id": "pagelines",
				"unicode": "f18c"
			},
			{
				"id": "stack-exchange",
				"unicode": "f18d"
			},
			{
				"id": "arrow-circle-o-right",
				"unicode": "f18e"
			},
			{
				"id": "arrow-circle-o-left",
				"unicode": "f190"
			},
			{
				"id": "caret-square-o-left",
				"aliases": [
					"toggle-left"
				],
				"unicode": "f191"
			},
			{
				"id": "dot-circle-o",
				"unicode": "f192"
			},
			{
				"id": "wheelchair",
				"unicode": "f193"
			},
			{
				"id": "vimeo-square",
				"unicode": "f194"
			},
			{
				"id": "try",
				"aliases": [
					"turkish-lira"
				],
				"unicode": "f195"
			},
			{
				"id": "plus-square-o",
				"unicode": "f196"
			},
			{
				"id": "space-shuttle",
				"unicode": "f197"
			},
			{
				"id": "slack",
				"unicode": "f198"
			},
			{
				"id": "envelope-square",
				"unicode": "f199"
			},
			{
				"id": "wordpress",
				"unicode": "f19a"
			},
			{
				"id": "openid",
				"unicode": "f19b"
			},
			{
				"id": "university",
				"aliases": [
					"institution",
					"bank"
				],
				"unicode": "f19c"
			},
			{
				"id": "graduation-cap",
				"aliases": [
					"mortar-board"
				],
				"unicode": "f19d"
			},
			{
				"id": "yahoo",
				"unicode": "f19e"
			},
			{
				"id": "google",
				"unicode": "f1a0"
			},
			{
				"id": "reddit",
				"unicode": "f1a1"
			},
			{
				"id": "reddit-square",
				"unicode": "f1a2"
			},
			{
				"id": "stumbleupon-circle",
				"unicode": "f1a3"
			},
			{
				"id": "stumbleupon",
				"unicode": "f1a4"
			},
			{
				"id": "delicious",
				"unicode": "f1a5"
			},
			{
				"id": "digg",
				"unicode": "f1a6"
			},
			{
				"id": "pied-piper-pp",
				"unicode": "f1a7"
			},
			{
				"id": "pied-piper-alt",
				"unicode": "f1a8"
			},
			{
				"id": "drupal",
				"unicode": "f1a9"
			},
			{
				"id": "joomla",
				"unicode": "f1aa"
			},
			{
				"id": "language",
				"unicode": "f1ab"
			},
			{
				"id": "fax",
				"unicode": "f1ac"
			},
			{
				"id": "building",
				"unicode": "f1ad"
			},
			{
				"id": "child",
				"unicode": "f1ae"
			},
			{
				"id": "paw",
				"unicode": "f1b0"
			},
			{
				"id": "spoon",
				"unicode": "f1b1"
			},
			{
				"id": "cube",
				"unicode": "f1b2"
			},
			{
				"id": "cubes",
				"unicode": "f1b3"
			},
			{
				"id": "behance",
				"unicode": "f1b4"
			},
			{
				"id": "behance-square",
				"unicode": "f1b5"
			},
			{
				"id": "steam",
				"unicode": "f1b6"
			},
			{
				"id": "steam-square",
				"unicode": "f1b7"
			},
			{
				"id": "recycle",
				"unicode": "f1b8"
			},
			{
				"id": "car",
				"aliases": [
					"automobile"
				],
				"unicode": "f1b9"
			},
			{
				"id": "taxi",
				"aliases": [
					"cab"
				],
				"unicode": "f1ba"
			},
			{
				"id": "tree",
				"unicode": "f1bb"
			},
			{
				"id": "spotify",
				"unicode": "f1bc"
			},
			{
				"id": "deviantart",
				"unicode": "f1bd"
			},
			{
				"id": "soundcloud",
				"unicode": "f1be"
			},
			{
				"id": "database",
				"unicode": "f1c0"
			},
			{
				"id": "file-pdf-o",
				"unicode": "f1c1"
			},
			{
				"id": "file-word-o",
				"unicode": "f1c2"
			},
			{
				"id": "file-excel-o",
				"unicode": "f1c3"
			},
			{
				"id": "file-powerpoint-o",
				"unicode": "f1c4"
			},
			{
				"id": "file-image-o",
				"aliases": [
					"file-photo-o",
					"file-picture-o"
				],
				"unicode": "f1c5"
			},
			{
				"id": "file-archive-o",
				"aliases": [
					"file-zip-o"
				],
				"unicode": "f1c6"
			},
			{
				"id": "file-audio-o",
				"aliases": [
					"file-sound-o"
				],
				"unicode": "f1c7"
			},
			{
				"id": "file-video-o",
				"aliases": [
					"file-movie-o"
				],
				"unicode": "f1c8"
			},
			{
				"id": "file-code-o",
				"unicode": "f1c9"
			},
			{
				"id": "vine",
				"unicode": "f1ca"
			},
			{
				"id": "codepen",
				"unicode": "f1cb"
			},
			{
				"id": "jsfiddle",
				"unicode": "f1cc"
			},
			{
				"id": "life-ring",
				"aliases": [
					"life-bouy",
					"life-buoy",
					"life-saver",
					"support"
				],
				"unicode": "f1cd"
			},
			{
				"id": "circle-o-notch",
				"unicode": "f1ce"
			},
			{
				"id": "rebel",
				"aliases": [
					"ra",
					"resistance"
				],
				"unicode": "f1d0"
			},
			{
				"id": "empire",
				"aliases": [
					"ge"
				],
				"unicode": "f1d1"
			},
			{
				"id": "git-square",
				"unicode": "f1d2"
			},
			{
				"id": "git",
				"unicode": "f1d3"
			},
			{
				"id": "hacker-news",
				"aliases": [
					"y-combinator-square",
					"yc-square"
				],
				"unicode": "f1d4"
			},
			{
				"id": "tencent-weibo",
				"unicode": "f1d5"
			},
			{
				"id": "qq",
				"unicode": "f1d6"
			},
			{
				"id": "weixin",
				"aliases": [
					"wechat"
				],
				"unicode": "f1d7"
			},
			{
				"id": "paper-plane",
				"aliases": [
					"send"
				],
				"unicode": "f1d8"
			},
			{
				"id": "paper-plane-o",
				"aliases": [
					"send-o"
				],
				"unicode": "f1d9"
			},
			{
				"id": "history",
				"unicode": "f1da"
			},
			{
				"id": "circle-thin",
				"unicode": "f1db"
			},
			{
				"id": "header",
				"unicode": "f1dc"
			},
			{
				"id": "paragraph",
				"unicode": "f1dd"
			},
			{
				"id": "sliders",
				"unicode": "f1de"
			},
			{
				"id": "share-alt",
				"unicode": "f1e0"
			},
			{
				"id": "share-alt-square",
				"unicode": "f1e1"
			},
			{
				"id": "bomb",
				"unicode": "f1e2"
			},
			{
				"id": "futbol-o",
				"aliases": [
					"soccer-ball-o"
				],
				"unicode": "f1e3"
			},
			{
				"id": "tty",
				"unicode": "f1e4"
			},
			{
				"id": "binoculars",
				"unicode": "f1e5"
			},
			{
				"id": "plug",
				"unicode": "f1e6"
			},
			{
				"id": "slideshare",
				"unicode": "f1e7"
			},
			{
				"id": "twitch",
				"unicode": "f1e8"
			},
			{
				"id": "yelp",
				"unicode": "f1e9"
			},
			{
				"id": "newspaper-o",
				"unicode": "f1ea"
			},
			{
				"id": "wifi",
				"unicode": "f1eb"
			},
			{
				"id": "calculator",
				"unicode": "f1ec"
			},
			{
				"id": "paypal",
				"unicode": "f1ed"
			},
			{
				"id": "google-wallet",
				"unicode": "f1ee"
			},
			{
				"id": "cc-visa",
				"unicode": "f1f0"
			},
			{
				"id": "cc-mastercard",
				"unicode": "f1f1"
			},
			{
				"id": "cc-discover",
				"unicode": "f1f2"
			},
			{
				"id": "cc-amex",
				"unicode": "f1f3"
			},
			{
				"id": "cc-paypal",
				"unicode": "f1f4"
			},
			{
				"id": "cc-stripe",
				"unicode": "f1f5"
			},
			{
				"id": "bell-slash",
				"unicode": "f1f6"
			},
			{
				"id": "bell-slash-o",
				"unicode": "f1f7"
			},
			{
				"id": "trash",
				"unicode": "f1f8"
			},
			{
				"id": "copyright",
				"unicode": "f1f9"
			},
			{
				"id": "at",
				"unicode": "f1fa"
			},
			{
				"id": "eyedropper",
				"unicode": "f1fb"
			},
			{
				"id": "paint-brush",
				"unicode": "f1fc"
			},
			{
				"id": "birthday-cake",
				"unicode": "f1fd"
			},
			{
				"id": "area-chart",
				"unicode": "f1fe"
			},
			{
				"id": "pie-chart",
				"unicode": "f200"
			},
			{
				"id": "line-chart",
				"unicode": "f201"
			},
			{
				"id": "lastfm",
				"unicode": "f202"
			},
			{
				"id": "lastfm-square",
				"unicode": "f203"
			},
			{
				"id": "toggle-off",
				"unicode": "f204"
			},
			{
				"id": "toggle-on",
				"unicode": "f205"
			},
			{
				"id": "bicycle",
				"unicode": "f206"
			},
			{
				"id": "bus",
				"unicode": "f207"
			},
			{
				"id": "ioxhost",
				"unicode": "f208"
			},
			{
				"id": "angellist",
				"unicode": "f209"
			},
			{
				"id": "cc",
				"unicode": "f20a"
			},
			{
				"id": "ils",
				"aliases": [
					"shekel",
					"sheqel"
				],
				"unicode": "f20b"
			},
			{
				"id": "meanpath",
				"unicode": "f20c"
			},
			{
				"id": "buysellads",
				"unicode": "f20d"
			},
			{
				"id": "connectdevelop",
				"unicode": "f20e"
			},
			{
				"id": "dashcube",
				"unicode": "f210"
			},
			{
				"id": "forumbee",
				"unicode": "f211"
			},
			{
				"id": "leanpub",
				"unicode": "f212"
			},
			{
				"id": "sellsy",
				"unicode": "f213"
			},
			{
				"id": "shirtsinbulk",
				"unicode": "f214"
			},
			{
				"id": "simplybuilt",
				"unicode": "f215"
			},
			{
				"id": "skyatlas",
				"unicode": "f216"
			},
			{
				"id": "cart-plus",
				"unicode": "f217"
			},
			{
				"id": "cart-arrow-down",
				"unicode": "f218"
			},
			{
				"id": "diamond",
				"unicode": "f219"
			},
			{
				"id": "ship",
				"unicode": "f21a"
			},
			{
				"id": "user-secret",
				"unicode": "f21b"
			},
			{
				"id": "motorcycle",
				"unicode": "f21c"
			},
			{
				"id": "street-view",
				"unicode": "f21d"
			},
			{
				"id": "heartbeat",
				"unicode": "f21e"
			},
			{
				"id": "venus",
				"unicode": "f221"
			},
			{
				"id": "mars",
				"unicode": "f222"
			},
			{
				"id": "mercury",
				"unicode": "f223"
			},
			{
				"id": "transgender",
				"aliases": [
					"intersex"
				],
				"unicode": "f224"
			},
			{
				"id": "transgender-alt",
				"unicode": "f225"
			},
			{
				"id": "venus-double",
				"unicode": "f226"
			},
			{
				"id": "mars-double",
				"unicode": "f227"
			},
			{
				"id": "venus-mars",
				"unicode": "f228"
			},
			{
				"id": "mars-stroke",
				"unicode": "f229"
			},
			{
				"id": "mars-stroke-v",
				"unicode": "f22a"
			},
			{
				"id": "mars-stroke-h",
				"unicode": "f22b"
			},
			{
				"id": "neuter",
				"unicode": "f22c"
			},
			{
				"id": "genderless",
				"unicode": "f22d"
			},
			{
				"id": "facebook-official",
				"unicode": "f230"
			},
			{
				"id": "pinterest-p",
				"unicode": "f231"
			},
			{
				"id": "whatsapp",
				"unicode": "f232"
			},
			{
				"id": "server",
				"unicode": "f233"
			},
			{
				"id": "user-plus",
				"unicode": "f234"
			},
			{
				"id": "user-times",
				"unicode": "f235"
			},
			{
				"id": "bed",
				"aliases": [
					"hotel"
				],
				"unicode": "f236"
			},
			{
				"id": "viacoin",
				"unicode": "f237"
			},
			{
				"id": "train",
				"unicode": "f238"
			},
			{
				"id": "subway",
				"unicode": "f239"
			},
			{
				"id": "medium",
				"unicode": "f23a"
			},
			{
				"id": "y-combinator",
				"aliases": [
					"yc"
				],
				"unicode": "f23b"
			},
			{
				"id": "optin-monster",
				"unicode": "f23c"
			},
			{
				"id": "opencart",
				"unicode": "f23d"
			},
			{
				"id": "expeditedssl",
				"unicode": "f23e"
			},
			{
				"id": "battery-full",
				"aliases": [
					"battery-4",
					"battery"
				],
				"unicode": "f240"
			},
			{
				"id": "battery-three-quarters",
				"aliases": [
					"battery-3"
				],
				"unicode": "f241"
			},
			{
				"id": "battery-half",
				"aliases": [
					"battery-2"
				],
				"unicode": "f242"
			},
			{
				"id": "battery-quarter",
				"aliases": [
					"battery-1"
				],
				"unicode": "f243"
			},
			{
				"id": "battery-empty",
				"aliases": [
					"battery-0"
				],
				"unicode": "f244"
			},
			{
				"id": "mouse-pointer",
				"unicode": "f245"
			},
			{
				"id": "i-cursor",
				"unicode": "f246"
			},
			{
				"id": "object-group",
				"unicode": "f247"
			},
			{
				"id": "object-ungroup",
				"unicode": "f248"
			},
			{
				"id": "sticky-note",
				"unicode": "f249"
			},
			{
				"id": "sticky-note-o",
				"unicode": "f24a"
			},
			{
				"id": "cc-jcb",
				"unicode": "f24b"
			},
			{
				"id": "cc-diners-club",
				"unicode": "f24c"
			},
			{
				"id": "clone",
				"unicode": "f24d"
			},
			{
				"id": "balance-scale",
				"unicode": "f24e"
			},
			{
				"id": "hourglass-o",
				"unicode": "f250"
			},
			{
				"id": "hourglass-start",
				"aliases": [
					"hourglass-1"
				],
				"unicode": "f251"
			},
			{
				"id": "hourglass-half",
				"aliases": [
					"hourglass-2"
				],
				"unicode": "f252"
			},
			{
				"id": "hourglass-end",
				"aliases": [
					"hourglass-3"
				],
				"unicode": "f253"
			},
			{
				"id": "hourglass",
				"unicode": "f254"
			},
			{
				"id": "hand-rock-o",
				"aliases": [
					"hand-grab-o"
				],
				"unicode": "f255"
			},
			{
				"id": "hand-paper-o",
				"aliases": [
					"hand-stop-o"
				],
				"unicode": "f256"
			},
			{
				"id": "hand-scissors-o",
				"unicode": "f257"
			},
			{
				"id": "hand-lizard-o",
				"unicode": "f258"
			},
			{
				"id": "hand-spock-o",
				"unicode": "f259"
			},
			{
				"id": "hand-pointer-o",
				"unicode": "f25a"
			},
			{
				"id": "hand-peace-o",
				"unicode": "f25b"
			},
			{
				"id": "trademark",
				"unicode": "f25c"
			},
			{
				"id": "registered",
				"unicode": "f25d"
			},
			{
				"id": "creative-commons",
				"unicode": "f25e"
			},
			{
				"id": "gg",
				"unicode": "f260"
			},
			{
				"id": "gg-circle",
				"unicode": "f261"
			},
			{
				"id": "tripadvisor",
				"unicode": "f262"
			},
			{
				"id": "odnoklassniki",
				"unicode": "f263"
			},
			{
				"id": "odnoklassniki-square",
				"unicode": "f264"
			},
			{
				"id": "get-pocket",
				"unicode": "f265"
			},
			{
				"id": "wikipedia-w",
				"unicode": "f266"
			},
			{
				"id": "safari",
				"unicode": "f267"
			},
			{
				"id": "chrome",
				"unicode": "f268"
			},
			{
				"id": "firefox",
				"unicode": "f269"
			},
			{
				"id": "opera",
				"unicode": "f26a"
			},
			{
				"id": "internet-explorer",
				"unicode": "f26b"
			},
			{
				"id": "television",
				"aliases": [
					"tv"
				],
				"unicode": "f26c"
			},
			{
				"id": "contao",
				"unicode": "f26d"
			},
			{
				"id": "500px",
				"unicode": "f26e"
			},
			{
				"id": "amazon",
				"unicode": "f270"
			},
			{
				"id": "calendar-plus-o",
				"unicode": "f271"
			},
			{
				"id": "calendar-minus-o",
				"unicode": "f272"
			},
			{
				"id": "calendar-times-o",
				"unicode": "f273"
			},
			{
				"id": "calendar-check-o",
				"unicode": "f274"
			},
			{
				"id": "industry",
				"unicode": "f275"
			},
			{
				"id": "map-pin",
				"unicode": "f276"
			},
			{
				"id": "map-signs",
				"unicode": "f277"
			},
			{
				"id": "map-o",
				"unicode": "f278"
			},
			{
				"id": "map",
				"unicode": "f279"
			},
			{
				"id": "commenting",
				"unicode": "f27a"
			},
			{
				"id": "commenting-o",
				"unicode": "f27b"
			},
			{
				"id": "houzz",
				"unicode": "f27c"
			},
			{
				"id": "vimeo",
				"unicode": "f27d"
			},
			{
				"id": "black-tie",
				"unicode": "f27e"
			},
			{
				"id": "fonticons",
				"unicode": "f280"
			},
			{
				"id": "reddit-alien",
				"unicode": "f281"
			},
			{
				"id": "edge",
				"unicode": "f282"
			},
			{
				"id": "credit-card-alt",
				"unicode": "f283"
			},
			{
				"id": "codiepie",
				"unicode": "f284"
			},
			{
				"id": "modx",
				"unicode": "f285"
			},
			{
				"id": "fort-awesome",
				"unicode": "f286"
			},
			{
				"id": "usb",
				"unicode": "f287"
			},
			{
				"id": "product-hunt",
				"unicode": "f288"
			},
			{
				"id": "mixcloud",
				"unicode": "f289"
			},
			{
				"id": "scribd",
				"unicode": "f28a"
			},
			{
				"id": "pause-circle",
				"unicode": "f28b"
			},
			{
				"id": "pause-circle-o",
				"unicode": "f28c"
			},
			{
				"id": "stop-circle",
				"unicode": "f28d"
			},
			{
				"id": "stop-circle-o",
				"unicode": "f28e"
			},
			{
				"id": "shopping-bag",
				"unicode": "f290"
			},
			{
				"id": "shopping-basket",
				"unicode": "f291"
			},
			{
				"id": "hashtag",
				"unicode": "f292"
			},
			{
				"id": "bluetooth",
				"unicode": "f293"
			},
			{
				"id": "bluetooth-b",
				"unicode": "f294"
			},
			{
				"id": "percent",
				"unicode": "f295"
			},
			{
				"id": "gitlab",
				"unicode": "f296"
			},
			{
				"id": "wpbeginner",
				"unicode": "f297"
			},
			{
				"id": "wpforms",
				"unicode": "f298"
			},
			{
				"id": "envira",
				"unicode": "f299"
			},
			{
				"id": "universal-access",
				"unicode": "f29a"
			},
			{
				"id": "wheelchair-alt",
				"unicode": "f29b"
			},
			{
				"id": "question-circle-o",
				"unicode": "f29c"
			},
			{
				"id": "blind",
				"unicode": "f29d"
			},
			{
				"id": "audio-description",
				"unicode": "f29e"
			},
			{
				"id": "volume-control-phone",
				"unicode": "f2a0"
			},
			{
				"id": "braille",
				"unicode": "f2a1"
			},
			{
				"id": "assistive-listening-systems",
				"unicode": "f2a2"
			},
			{
				"id": "american-sign-language-interpreting",
				"aliases": [
					"asl-interpreting"
				],
				"unicode": "f2a3"
			},
			{
				"id": "deaf",
				"aliases": [
					"deafness",
					"hard-of-hearing"
				],
				"unicode": "f2a4"
			},
			{
				"id": "glide",
				"unicode": "f2a5"
			},
			{
				"id": "glide-g",
				"unicode": "f2a6"
			},
			{
				"id": "sign-language",
				"aliases": [
					"signing"
				],
				"unicode": "f2a7"
			},
			{
				"id": "low-vision",
				"unicode": "f2a8"
			},
			{
				"id": "viadeo",
				"unicode": "f2a9"
			},
			{
				"id": "viadeo-square",
				"unicode": "f2aa"
			},
			{
				"id": "snapchat",
				"unicode": "f2ab"
			},
			{
				"id": "snapchat-ghost",
				"unicode": "f2ac"
			},
			{
				"id": "snapchat-square",
				"unicode": "f2ad"
			},
			{
				"id": "pied-piper",
				"unicode": "f2ae"
			},
			{
				"id": "first-order",
				"unicode": "f2b0"
			},
			{
				"id": "yoast",
				"unicode": "f2b1"
			},
			{
				"id": "themeisle",
				"unicode": "f2b2"
			},
			{
				"id": "google-plus-official",
				"aliases": [
					"google-plus-circle"
				],
				"unicode": "f2b3"
			},
			{
				"id": "font-awesome",
				"aliases": [
					"fa"
				],
				"unicode": "f2b4"
			},
			{
				"id": "handshake-o",
				"unicode": "f2b5"
			},
			{
				"id": "envelope-open",
				"unicode": "f2b6"
			},
			{
				"id": "envelope-open-o",
				"unicode": "f2b7"
			},
			{
				"id": "linode",
				"unicode": "f2b8"
			},
			{
				"id": "address-book",
				"unicode": "f2b9"
			},
			{
				"id": "address-book-o",
				"unicode": "f2ba"
			},
			{
				"id": "address-card",
				"aliases": [
					"vcard"
				],
				"unicode": "f2bb"
			},
			{
				"id": "address-card-o",
				"aliases": [
					"vcard-o"
				],
				"unicode": "f2bc"
			},
			{
				"id": "user-circle",
				"unicode": "f2bd"
			},
			{
				"id": "user-circle-o",
				"unicode": "f2be"
			},
			{
				"id": "user-o",
				"unicode": "f2c0"
			},
			{
				"id": "id-badge",
				"unicode": "f2c1"
			},
			{
				"id": "id-card",
				"aliases": [
					"drivers-license"
				],
				"unicode": "f2c2"
			},
			{
				"id": "id-card-o",
				"aliases": [
					"drivers-license-o"
				],
				"unicode": "f2c3"
			},
			{
				"id": "quora",
				"unicode": "f2c4"
			},
			{
				"id": "free-code-camp",
				"unicode": "f2c5"
			},
			{
				"id": "telegram",
				"unicode": "f2c6"
			},
			{
				"id": "thermometer-full",
				"aliases": [
					"thermometer-4",
					"thermometer"
				],
				"unicode": "f2c7"
			},
			{
				"id": "thermometer-three-quarters",
				"aliases": [
					"thermometer-3"
				],
				"unicode": "f2c8"
			},
			{
				"id": "thermometer-half",
				"aliases": [
					"thermometer-2"
				],
				"unicode": "f2c9"
			},
			{
				"id": "thermometer-quarter",
				"aliases": [
					"thermometer-1"
				],
				"unicode": "f2ca"
			},
			{
				"id": "thermometer-empty",
				"aliases": [
					"thermometer-0"
				],
				"unicode": "f2cb"
			},
			{
				"id": "shower",
				"unicode": "f2cc"
			},
			{
				"id": "bath",
				"aliases": [
					"bathtub",
					"s15"
				],
				"unicode": "f2cd"
			},
			{
				"id": "podcast",
				"unicode": "f2ce"
			},
			{
				"id": "window-maximize",
				"unicode": "f2d0"
			},
			{
				"id": "window-minimize",
				"unicode": "f2d1"
			},
			{
				"id": "window-restore",
				"unicode": "f2d2"
			},
			{
				"id": "window-close",
				"aliases": [
					"times-rectangle"
				],
				"unicode": "f2d3"
			},
			{
				"id": "window-close-o",
				"aliases": [
					"times-rectangle-o"
				],
				"unicode": "f2d4"
			},
			{
				"id": "bandcamp",
				"unicode": "f2d5"
			},
			{
				"id": "grav",
				"unicode": "f2d6"
			},
			{
				"id": "etsy",
				"unicode": "f2d7"
			},
			{
				"id": "imdb",
				"unicode": "f2d8"
			},
			{
				"id": "ravelry",
				"unicode": "f2d9"
			},
			{
				"id": "eercast",
				"unicode": "f2da"
			},
			{
				"id": "microchip",
				"unicode": "f2db"
			},
			{
				"id": "snowflake-o",
				"unicode": "f2dc"
			},
			{
				"id": "superpowers",
				"unicode": "f2dd"
			},
			{
				"id": "wpexplorer",
				"unicode": "f2de"
			},
			{
				"id": "meetup",
				"unicode": "f2e0"
			}
		]
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function nvl(value, replaceWith) {
		return typeof value !== 'undefined' && value != null ? value : replaceWith;
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=font-awesome-openui5.js.map