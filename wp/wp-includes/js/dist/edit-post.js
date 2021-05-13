this["wp"] = this["wp"] || {}; this["wp"]["editPost"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 442);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 103:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["warning"]; }());

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return Object(arrayWithHoles["a" /* default */])(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || Object(nonIterableRest["a" /* default */])();
}

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["viewport"]; }());

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VIEW_AS_LINK_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VIEW_AS_PREVIEW_LINK_SELECTOR; });
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
var STORE_NAME = 'core/edit-post';
/**
 * CSS selector string for the admin bar view post link anchor tag.
 *
 * @type {string}
 */

var VIEW_AS_LINK_SELECTOR = '#wp-admin-bar-view a';
/**
 * CSS selector string for the admin bar preview post link anchor tag.
 *
 * @type {string}
 */

var VIEW_AS_PREVIEW_LINK_SELECTOR = '#wp-admin-bar-preview a';


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

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
function defaultClearTimeout () {
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
} ())
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
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
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
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _toConsumableArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
var arrayLikeToArray = __webpack_require__(24);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(arrayLikeToArray["a" /* default */])(arr);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
var iterableToArray = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || Object(iterableToArray["a" /* default */])(arr) || Object(unsupportedIterableToArray["a" /* default */])(arr) || _nonIterableSpread();
}

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["mediaUtils"]; }());

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var closeSmall = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (closeSmall);


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var close = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
}));
/* harmony default export */ __webpack_exports__["a"] = (close);


/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var check = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.3 5.6L9.9 16.9l-4.6-3.4-.9 1.2 5.8 4.3 9.3-12.6z"
}));
/* harmony default export */ __webpack_exports__["a"] = (check);


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keycodes"]; }());

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export Fill */
/* unused harmony export Slot */
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(103);
/* harmony import */ var _wordpress_warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _preferences_modal_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23);


/**
 * Defines as extensibility slot for the Settings sidebar
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




var _createSlotFill = Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["createSlotFill"])('PluginDocumentSettingPanel'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;



var PluginDocumentSettingFill = function PluginDocumentSettingFill(_ref) {
  var isEnabled = _ref.isEnabled,
      panelName = _ref.panelName,
      opened = _ref.opened,
      onToggle = _ref.onToggle,
      className = _ref.className,
      title = _ref.title,
      icon = _ref.icon,
      children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_preferences_modal_options__WEBPACK_IMPORTED_MODULE_6__[/* EnablePluginDocumentSettingPanelOption */ "d"], {
    label: title,
    panelName: panelName
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fill, null, isEnabled && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    className: className,
    title: title,
    icon: icon,
    opened: opened,
    onToggle: onToggle
  }, children)));
};
/**
 * Renders items below the Status & Availability panel in the Document Sidebar.
 *
 * @param {Object} props Component properties.
 * @param {string} [props.name] The machine-friendly name for the panel.
 * @param {string} [props.className] An optional class name added to the row.
 * @param {string} [props.title] The title of the panel
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 *
 * @example
 * <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var el = wp.element.createElement;
 * var __ = wp.i18n.__;
 * var registerPlugin = wp.plugins.registerPlugin;
 * var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
 *
 * function MyDocumentSettingPlugin() {
 * 	return el(
 * 		PluginDocumentSettingPanel,
 * 		{
 * 			className: 'my-document-setting-plugin',
 * 			title: 'My Panel',
 * 		},
 * 		__( 'My Document Setting Panel' )
 * 	);
 * }
 *
 * registerPlugin( 'my-document-setting-plugin', {
 * 		render: MyDocumentSettingPlugin
 * } );
 * ```
 *
 * @example
 * <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * import { registerPlugin } from '@wordpress/plugins';
 * import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
 *
 * const MyDocumentSettingTest = () => (
 * 		<PluginDocumentSettingPanel className="my-document-setting-plugin" title="My Panel">
 *			<p>My Document Setting Panel</p>
 *		</PluginDocumentSettingPanel>
 *	);
 *
 *  registerPlugin( 'document-setting-test', { render: MyDocumentSettingTest } );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */


var PluginDocumentSettingPanel = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["compose"])(Object(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__["withPluginContext"])(function (context, ownProps) {
  if (undefined === ownProps.name) {
    typeof process !== "undefined" && process.env && "production" !== "production" ? _wordpress_warning__WEBPACK_IMPORTED_MODULE_5___default()('PluginDocumentSettingPanel requires a name property.') : void 0;
  }

  return {
    icon: ownProps.icon || context.icon,
    panelName: "".concat(context.name, "/").concat(ownProps.name)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withSelect"])(function (select, _ref2) {
  var panelName = _ref2.panelName;
  return {
    opened: select(_store__WEBPACK_IMPORTED_MODULE_7__[/* store */ "a"]).isEditorPanelOpened(panelName),
    isEnabled: select(_store__WEBPACK_IMPORTED_MODULE_7__[/* store */ "a"]).isEditorPanelEnabled(panelName)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["withDispatch"])(function (dispatch, _ref3) {
  var panelName = _ref3.panelName;
  return {
    onToggle: function onToggle() {
      return dispatch(_store__WEBPACK_IMPORTED_MODULE_7__[/* store */ "a"]).toggleEditorPanelOpened(panelName);
    }
  };
}))(PluginDocumentSettingFill);
PluginDocumentSettingPanel.Slot = Slot;
/* harmony default export */ __webpack_exports__["a"] = (PluginDocumentSettingPanel);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(120)))

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var plus = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"
}));
/* harmony default export */ __webpack_exports__["a"] = (plus);


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ store; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/edit-post/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "openGeneralSidebar", function() { return openGeneralSidebar; });
__webpack_require__.d(actions_namespaceObject, "closeGeneralSidebar", function() { return closeGeneralSidebar; });
__webpack_require__.d(actions_namespaceObject, "openModal", function() { return openModal; });
__webpack_require__.d(actions_namespaceObject, "closeModal", function() { return closeModal; });
__webpack_require__.d(actions_namespaceObject, "openPublishSidebar", function() { return openPublishSidebar; });
__webpack_require__.d(actions_namespaceObject, "closePublishSidebar", function() { return closePublishSidebar; });
__webpack_require__.d(actions_namespaceObject, "togglePublishSidebar", function() { return togglePublishSidebar; });
__webpack_require__.d(actions_namespaceObject, "toggleEditorPanelEnabled", function() { return toggleEditorPanelEnabled; });
__webpack_require__.d(actions_namespaceObject, "toggleEditorPanelOpened", function() { return toggleEditorPanelOpened; });
__webpack_require__.d(actions_namespaceObject, "removeEditorPanel", function() { return removeEditorPanel; });
__webpack_require__.d(actions_namespaceObject, "toggleFeature", function() { return toggleFeature; });
__webpack_require__.d(actions_namespaceObject, "switchEditorMode", function() { return switchEditorMode; });
__webpack_require__.d(actions_namespaceObject, "togglePinnedPluginItem", function() { return togglePinnedPluginItem; });
__webpack_require__.d(actions_namespaceObject, "hideBlockTypes", function() { return hideBlockTypes; });
__webpack_require__.d(actions_namespaceObject, "updatePreferredStyleVariations", function() { return updatePreferredStyleVariations; });
__webpack_require__.d(actions_namespaceObject, "__experimentalUpdateLocalAutosaveInterval", function() { return __experimentalUpdateLocalAutosaveInterval; });
__webpack_require__.d(actions_namespaceObject, "showBlockTypes", function() { return showBlockTypes; });
__webpack_require__.d(actions_namespaceObject, "setAvailableMetaBoxesPerLocation", function() { return setAvailableMetaBoxesPerLocation; });
__webpack_require__.d(actions_namespaceObject, "requestMetaBoxUpdates", function() { return requestMetaBoxUpdates; });
__webpack_require__.d(actions_namespaceObject, "metaBoxUpdatesSuccess", function() { return metaBoxUpdatesSuccess; });
__webpack_require__.d(actions_namespaceObject, "__experimentalSetPreviewDeviceType", function() { return __experimentalSetPreviewDeviceType; });
__webpack_require__.d(actions_namespaceObject, "setIsInserterOpened", function() { return setIsInserterOpened; });
__webpack_require__.d(actions_namespaceObject, "setIsEditingTemplate", function() { return setIsEditingTemplate; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/edit-post/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getEditorMode", function() { return getEditorMode; });
__webpack_require__.d(selectors_namespaceObject, "isEditorSidebarOpened", function() { return isEditorSidebarOpened; });
__webpack_require__.d(selectors_namespaceObject, "isPluginSidebarOpened", function() { return isPluginSidebarOpened; });
__webpack_require__.d(selectors_namespaceObject, "getActiveGeneralSidebarName", function() { return getActiveGeneralSidebarName; });
__webpack_require__.d(selectors_namespaceObject, "getPreferences", function() { return getPreferences; });
__webpack_require__.d(selectors_namespaceObject, "getPreference", function() { return getPreference; });
__webpack_require__.d(selectors_namespaceObject, "isPublishSidebarOpened", function() { return isPublishSidebarOpened; });
__webpack_require__.d(selectors_namespaceObject, "isEditorPanelRemoved", function() { return isEditorPanelRemoved; });
__webpack_require__.d(selectors_namespaceObject, "isEditorPanelEnabled", function() { return isEditorPanelEnabled; });
__webpack_require__.d(selectors_namespaceObject, "isEditorPanelOpened", function() { return isEditorPanelOpened; });
__webpack_require__.d(selectors_namespaceObject, "isModalActive", function() { return isModalActive; });
__webpack_require__.d(selectors_namespaceObject, "isFeatureActive", function() { return isFeatureActive; });
__webpack_require__.d(selectors_namespaceObject, "isPluginItemPinned", function() { return isPluginItemPinned; });
__webpack_require__.d(selectors_namespaceObject, "getActiveMetaBoxLocations", function() { return getActiveMetaBoxLocations; });
__webpack_require__.d(selectors_namespaceObject, "isMetaBoxLocationVisible", function() { return isMetaBoxLocationVisible; });
__webpack_require__.d(selectors_namespaceObject, "isMetaBoxLocationActive", function() { return isMetaBoxLocationActive; });
__webpack_require__.d(selectors_namespaceObject, "getMetaBoxesPerLocation", function() { return getMetaBoxesPerLocation; });
__webpack_require__.d(selectors_namespaceObject, "getAllMetaBoxes", function() { return getAllMetaBoxes; });
__webpack_require__.d(selectors_namespaceObject, "hasMetaBoxes", function() { return hasMetaBoxes; });
__webpack_require__.d(selectors_namespaceObject, "isSavingMetaBoxes", function() { return selectors_isSavingMetaBoxes; });
__webpack_require__.d(selectors_namespaceObject, "__experimentalGetPreviewDeviceType", function() { return __experimentalGetPreviewDeviceType; });
__webpack_require__.d(selectors_namespaceObject, "isInserterOpened", function() { return selectors_isInserterOpened; });
__webpack_require__.d(selectors_namespaceObject, "isEditingTemplate", function() { return selectors_isEditingTemplate; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wp","dataControls"]
var external_wp_dataControls_ = __webpack_require__(49);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/store/defaults.js
var PREFERENCES_DEFAULTS = {
  editorMode: 'visual',
  panels: {
    'post-status': {
      opened: true
    }
  },
  features: {
    fixedToolbar: false,
    welcomeGuide: true,
    fullscreenMode: true,
    showIconLabels: false,
    themeStyles: true,
    showBlockBreadcrumbs: true
  },
  hiddenBlockTypes: [],
  preferredStyleVariations: {},
  localAutosaveInterval: 15
};

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/store/reducer.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * Higher-order reducer creator which provides the given initial state for the
 * original reducer.
 *
 * @param {*} initialState Initial state to provide to reducer.
 *
 * @return {Function} Higher-order reducer.
 */

var createWithInitialState = function createWithInitialState(initialState) {
  return function (reducer) {
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
      var action = arguments.length > 1 ? arguments[1] : undefined;
      return reducer(state, action);
    };
  };
};
/**
 * Reducer returning the user preferences.
 *
 * @param {Object}  state                           Current state.
 * @param {string}  state.mode                      Current editor mode, either
 *                                                  "visual" or "text".
 * @param {boolean} state.isGeneralSidebarDismissed Whether general sidebar is
 *                                                  dismissed. False by default
 *                                                  or when closing general
 *                                                  sidebar, true when opening
 *                                                  sidebar.
 * @param {boolean} state.isSidebarOpened           Whether the sidebar is
 *                                                  opened or closed.
 * @param {Object}  state.panels                    The state of the different
 *                                                  sidebar panels.
 * @param {Object}  action                          Dispatched action.
 *
 * @return {Object} Updated state.
 */


var preferences = Object(external_lodash_["flow"])([external_wp_data_["combineReducers"], createWithInitialState(PREFERENCES_DEFAULTS)])({
  panels: function panels(state, action) {
    switch (action.type) {
      case 'TOGGLE_PANEL_ENABLED':
        {
          var panelName = action.panelName;
          return _objectSpread(_objectSpread({}, state), {}, Object(defineProperty["a" /* default */])({}, panelName, _objectSpread(_objectSpread({}, state[panelName]), {}, {
            enabled: !Object(external_lodash_["get"])(state, [panelName, 'enabled'], true)
          })));
        }

      case 'TOGGLE_PANEL_OPENED':
        {
          var _panelName = action.panelName;
          var isOpen = state[_panelName] === true || Object(external_lodash_["get"])(state, [_panelName, 'opened'], false);
          return _objectSpread(_objectSpread({}, state), {}, Object(defineProperty["a" /* default */])({}, _panelName, _objectSpread(_objectSpread({}, state[_panelName]), {}, {
            opened: !isOpen
          })));
        }
    }

    return state;
  },
  features: function features(state, action) {
    if (action.type === 'TOGGLE_FEATURE') {
      return _objectSpread(_objectSpread({}, state), {}, Object(defineProperty["a" /* default */])({}, action.feature, !state[action.feature]));
    }

    return state;
  },
  editorMode: function editorMode(state, action) {
    if (action.type === 'SWITCH_MODE') {
      return action.mode;
    }

    return state;
  },
  hiddenBlockTypes: function hiddenBlockTypes(state, action) {
    switch (action.type) {
      case 'SHOW_BLOCK_TYPES':
        return external_lodash_["without"].apply(void 0, [state].concat(Object(toConsumableArray["a" /* default */])(action.blockNames)));

      case 'HIDE_BLOCK_TYPES':
        return Object(external_lodash_["union"])(state, action.blockNames);
    }

    return state;
  },
  preferredStyleVariations: function preferredStyleVariations(state, action) {
    switch (action.type) {
      case 'UPDATE_PREFERRED_STYLE_VARIATIONS':
        {
          if (!action.blockName) {
            return state;
          }

          if (!action.blockStyle) {
            return Object(external_lodash_["omit"])(state, [action.blockName]);
          }

          return _objectSpread(_objectSpread({}, state), {}, Object(defineProperty["a" /* default */])({}, action.blockName, action.blockStyle));
        }
    }

    return state;
  },
  localAutosaveInterval: function localAutosaveInterval(state, action) {
    switch (action.type) {
      case 'UPDATE_LOCAL_AUTOSAVE_INTERVAL':
        return action.interval;
    }

    return state;
  }
});
/**
 * Reducer storing the list of all programmatically removed panels.
 *
 * @param {Array}  state  Current state.
 * @param {Object} action Action object.
 *
 * @return {Array} Updated state.
 */

function removedPanels() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REMOVE_PANEL':
      if (!Object(external_lodash_["includes"])(state, action.panelName)) {
        return [].concat(Object(toConsumableArray["a" /* default */])(state), [action.panelName]);
      }

  }

  return state;
}
/**
 * Reducer for storing the name of the open modal, or null if no modal is open.
 *
 * @param {Object} state  Previous state.
 * @param {Object} action Action object containing the `name` of the modal
 *
 * @return {Object} Updated state
 */

function activeModal() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'OPEN_MODAL':
      return action.name;

    case 'CLOSE_MODAL':
      return null;
  }

  return state;
}
function publishSidebarActive() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'OPEN_PUBLISH_SIDEBAR':
      return true;

    case 'CLOSE_PUBLISH_SIDEBAR':
      return false;

    case 'TOGGLE_PUBLISH_SIDEBAR':
      return !state;
  }

  return state;
}
/**
 * Reducer keeping track of the meta boxes isSaving state.
 * A "true" value means the meta boxes saving request is in-flight.
 *
 *
 * @param {boolean}  state   Previous state.
 * @param {Object}   action  Action Object.
 *
 * @return {Object} Updated state.
 */

function isSavingMetaBoxes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'REQUEST_META_BOX_UPDATES':
      return true;

    case 'META_BOX_UPDATES_SUCCESS':
      return false;

    default:
      return state;
  }
}
/**
 * Reducer keeping track of the meta boxes per location.
 *
 * @param {boolean}  state   Previous state.
 * @param {Object}   action  Action Object.
 *
 * @return {Object} Updated state.
 */

function metaBoxLocations() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_META_BOXES_PER_LOCATIONS':
      return action.metaBoxesPerLocation;
  }

  return state;
}
/**
 * Reducer returning the editing canvas device type.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */

function deviceType() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Desktop';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_PREVIEW_DEVICE_TYPE':
      return action.deviceType;
  }

  return state;
}
/**
 * Reducer tracking whether the inserter is open.
 *
 * @param {boolean} state
 * @param {Object}  action
 */

function isInserterOpened() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_IS_INSERTER_OPENED':
      return action.value;
  }

  return state;
}
/**
 * Reducer tracking whether the inserter is open.
 *
 * @param {boolean} state
 * @param {Object}  action
 */


function isEditingTemplate() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_IS_EDITING_TEMPLATE':
      return action.value;
  }

  return state;
}

var metaBoxes = Object(external_wp_data_["combineReducers"])({
  isSaving: isSavingMetaBoxes,
  locations: metaBoxLocations
});
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  activeModal: activeModal,
  metaBoxes: metaBoxes,
  preferences: preferences,
  publishSidebarActive: publishSidebarActive,
  removedPanels: removedPanels,
  deviceType: deviceType,
  isInserterOpened: isInserterOpened,
  isEditingTemplate: isEditingTemplate
}));

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(11);

// EXTERNAL MODULE: external "regeneratorRuntime"
var external_regeneratorRuntime_ = __webpack_require__(16);
var external_regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(external_regeneratorRuntime_);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@wordpress/interface/build-module/index.js + 15 modules
var build_module = __webpack_require__(61);

// EXTERNAL MODULE: external ["wp","a11y"]
var external_wp_a11y_ = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/utils/meta-boxes.js
/**
 * Function returning the current Meta Boxes DOM Node in the editor
 * whether the meta box area is opened or not.
 * If the MetaBox Area is visible returns it, and returns the original container instead.
 *
 * @param   {string} location Meta Box location.
 * @return {string}          HTML content.
 */
var getMetaBoxContainer = function getMetaBoxContainer(location) {
  var area = document.querySelector(".edit-post-meta-boxes-area.is-".concat(location, " .metabox-location-").concat(location));

  if (area) {
    return area;
  }

  return document.querySelector('#metaboxes .metabox-location-' + location);
};

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/store/actions.js




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _marked = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(openGeneralSidebar),
    _marked2 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(closeGeneralSidebar),
    _marked3 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(switchEditorMode),
    _marked4 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(setAvailableMetaBoxesPerLocation),
    _marked5 = /*#__PURE__*/external_regeneratorRuntime_default.a.mark(requestMetaBoxUpdates);

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



/**
 * Returns an action object used in signalling that the user opened an editor sidebar.
 *
 * @param {?string} name Sidebar name to be opened.
 *
 * @yield {Object} Action object.
 */

function openGeneralSidebar(name) {
  return external_regeneratorRuntime_default.a.wrap(function openGeneralSidebar$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return external_wp_data_["controls"].dispatch(build_module["g" /* store */].name, 'enableComplementaryArea', store.name, name);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}
/**
 * Returns an action object signalling that the user closed the sidebar.
 *
 * @yield {Object} Action object.
 */

function closeGeneralSidebar() {
  return external_regeneratorRuntime_default.a.wrap(function closeGeneralSidebar$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return external_wp_data_["controls"].dispatch(build_module["g" /* store */].name, 'disableComplementaryArea', store.name);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}
/**
 * Returns an action object used in signalling that the user opened a modal.
 *
 * @param {string} name A string that uniquely identifies the modal.
 *
 * @return {Object} Action object.
 */

function openModal(name) {
  return {
    type: 'OPEN_MODAL',
    name: name
  };
}
/**
 * Returns an action object signalling that the user closed a modal.
 *
 * @return {Object} Action object.
 */

function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  };
}
/**
 * Returns an action object used in signalling that the user opened the publish
 * sidebar.
 *
 * @return {Object} Action object
 */

function openPublishSidebar() {
  return {
    type: 'OPEN_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used in signalling that the user closed the
 * publish sidebar.
 *
 * @return {Object} Action object.
 */

function closePublishSidebar() {
  return {
    type: 'CLOSE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used in signalling that the user toggles the publish sidebar.
 *
 * @return {Object} Action object
 */

function togglePublishSidebar() {
  return {
    type: 'TOGGLE_PUBLISH_SIDEBAR'
  };
}
/**
 * Returns an action object used to enable or disable a panel in the editor.
 *
 * @param {string} panelName A string that identifies the panel to enable or disable.
 *
 * @return {Object} Action object.
 */

function toggleEditorPanelEnabled(panelName) {
  return {
    type: 'TOGGLE_PANEL_ENABLED',
    panelName: panelName
  };
}
/**
 * Returns an action object used to open or close a panel in the editor.
 *
 * @param {string} panelName A string that identifies the panel to open or close.
 *
 * @return {Object} Action object.
 */

function toggleEditorPanelOpened(panelName) {
  return {
    type: 'TOGGLE_PANEL_OPENED',
    panelName: panelName
  };
}
/**
 * Returns an action object used to remove a panel from the editor.
 *
 * @param {string} panelName A string that identifies the panel to remove.
 *
 * @return {Object} Action object.
 */

function removeEditorPanel(panelName) {
  return {
    type: 'REMOVE_PANEL',
    panelName: panelName
  };
}
/**
 * Returns an action object used to toggle a feature flag.
 *
 * @param {string} feature Feature name.
 *
 * @return {Object} Action object.
 */

function toggleFeature(feature) {
  return {
    type: 'TOGGLE_FEATURE',
    feature: feature
  };
}
function switchEditorMode(mode) {
  var message;
  return external_regeneratorRuntime_default.a.wrap(function switchEditorMode$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return {
            type: 'SWITCH_MODE',
            mode: mode
          };

        case 2:
          if (!(mode !== 'visual')) {
            _context3.next = 5;
            break;
          }

          _context3.next = 5;
          return external_wp_data_["controls"].dispatch('core/block-editor', 'clearSelectedBlock');

        case 5:
          message = mode === 'visual' ? Object(external_wp_i18n_["__"])('Visual editor selected') : Object(external_wp_i18n_["__"])('Code editor selected');
          Object(external_wp_a11y_["speak"])(message, 'assertive');

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}
/**
 * Returns an action object used to toggle a plugin name flag.
 *
 * @param {string} pluginName Plugin name.
 *
 * @return {Object} Action object.
 */

function togglePinnedPluginItem(pluginName) {
  return {
    type: 'TOGGLE_PINNED_PLUGIN_ITEM',
    pluginName: pluginName
  };
}
/**
 * Returns an action object used in signalling that block types by the given
 * name(s) should be hidden.
 *
 * @param {string[]} blockNames Names of block types to hide.
 *
 * @return {Object} Action object.
 */

function hideBlockTypes(blockNames) {
  return {
    type: 'HIDE_BLOCK_TYPES',
    blockNames: Object(external_lodash_["castArray"])(blockNames)
  };
}
/**
 * Returns an action object used in signaling that a style should be auto-applied when a block is created.
 *
 * @param {string}  blockName  Name of the block.
 * @param {?string} blockStyle Name of the style that should be auto applied. If undefined, the "auto apply" setting of the block is removed.
 *
 * @return {Object} Action object.
 */

function updatePreferredStyleVariations(blockName, blockStyle) {
  return {
    type: 'UPDATE_PREFERRED_STYLE_VARIATIONS',
    blockName: blockName,
    blockStyle: blockStyle
  };
}
/**
 * Returns an action object used in signalling that the editor should attempt
 * to locally autosave the current post every `interval` seconds.
 *
 * @param {number} interval The new interval, in seconds.
 * @return {Object} Action object.
 */

function __experimentalUpdateLocalAutosaveInterval(interval) {
  return {
    type: 'UPDATE_LOCAL_AUTOSAVE_INTERVAL',
    interval: interval
  };
}
/**
 * Returns an action object used in signalling that block types by the given
 * name(s) should be shown.
 *
 * @param {string[]} blockNames Names of block types to show.
 *
 * @return {Object} Action object.
 */

function showBlockTypes(blockNames) {
  return {
    type: 'SHOW_BLOCK_TYPES',
    blockNames: Object(external_lodash_["castArray"])(blockNames)
  };
}
var saveMetaboxUnsubscribe;
/**
 * Returns an action object used in signaling
 * what Meta boxes are available in which location.
 *
 * @param {Object} metaBoxesPerLocation Meta boxes per location.
 *
 * @yield {Object} Action object.
 */

function setAvailableMetaBoxesPerLocation(metaBoxesPerLocation) {
  var postType, wasSavingPost, wasAutosavingPost, hasActiveMetaBoxes;
  return external_regeneratorRuntime_default.a.wrap(function setAvailableMetaBoxesPerLocation$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return {
            type: 'SET_META_BOXES_PER_LOCATIONS',
            metaBoxesPerLocation: metaBoxesPerLocation
          };

        case 2:
          _context4.next = 4;
          return external_wp_data_["controls"].select('core/editor', 'getCurrentPostType');

        case 4:
          postType = _context4.sent;

          if (window.postboxes.page !== postType) {
            window.postboxes.add_postbox_toggles(postType);
          }

          _context4.next = 8;
          return external_wp_data_["controls"].select('core/editor', 'isSavingPost');

        case 8:
          wasSavingPost = _context4.sent;
          _context4.next = 11;
          return external_wp_data_["controls"].select('core/editor', 'isAutosavingPost');

        case 11:
          wasAutosavingPost = _context4.sent;
          _context4.next = 14;
          return external_wp_data_["controls"].select(store.name, 'hasMetaBoxes');

        case 14:
          hasActiveMetaBoxes = _context4.sent;

          // First remove any existing subscription in order to prevent multiple saves
          if (!!saveMetaboxUnsubscribe) {
            saveMetaboxUnsubscribe();
          } // Save metaboxes when performing a full save on the post.


          saveMetaboxUnsubscribe = Object(external_wp_data_["subscribe"])(function () {
            var isSavingPost = Object(external_wp_data_["select"])('core/editor').isSavingPost();
            var isAutosavingPost = Object(external_wp_data_["select"])('core/editor').isAutosavingPost(); // Save metaboxes on save completion, except for autosaves that are not a post preview.

            var shouldTriggerMetaboxesSave = hasActiveMetaBoxes && wasSavingPost && !isSavingPost && !wasAutosavingPost; // Save current state for next inspection.

            wasSavingPost = isSavingPost;
            wasAutosavingPost = isAutosavingPost;

            if (shouldTriggerMetaboxesSave) {
              Object(external_wp_data_["dispatch"])(store.name).requestMetaBoxUpdates();
            }
          });

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}
/**
 * Returns an action object used to request meta box update.
 *
 * @yield {Object} Action object.
 */

function requestMetaBoxUpdates() {
  var post, additionalData, baseFormData, activeMetaBoxLocations, formDataToMerge, formData;
  return external_regeneratorRuntime_default.a.wrap(function requestMetaBoxUpdates$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return {
            type: 'REQUEST_META_BOX_UPDATES'
          };

        case 2:
          // Saves the wp_editor fields
          if (window.tinyMCE) {
            window.tinyMCE.triggerSave();
          } // Additional data needed for backward compatibility.
          // If we do not provide this data, the post will be overridden with the default values.


          _context5.next = 5;
          return external_wp_data_["controls"].select('core/editor', 'getCurrentPost');

        case 5:
          post = _context5.sent;
          additionalData = [post.comment_status ? ['comment_status', post.comment_status] : false, post.ping_status ? ['ping_status', post.ping_status] : false, post.sticky ? ['sticky', post.sticky] : false, post.author ? ['post_author', post.author] : false].filter(Boolean); // We gather all the metaboxes locations data and the base form data

          baseFormData = new window.FormData(document.querySelector('.metabox-base-form'));
          _context5.next = 10;
          return external_wp_data_["controls"].select(store.name, 'getActiveMetaBoxLocations');

        case 10:
          activeMetaBoxLocations = _context5.sent;
          formDataToMerge = [baseFormData].concat(Object(toConsumableArray["a" /* default */])(activeMetaBoxLocations.map(function (location) {
            return new window.FormData(getMetaBoxContainer(location));
          }))); // Merge all form data objects into a single one.

          formData = Object(external_lodash_["reduce"])(formDataToMerge, function (memo, currentFormData) {
            var _iterator = _createForOfIteratorHelper(currentFormData),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _step$value = Object(slicedToArray["a" /* default */])(_step.value, 2),
                    key = _step$value[0],
                    value = _step$value[1];

                memo.append(key, value);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return memo;
          }, new window.FormData());
          additionalData.forEach(function (_ref) {
            var _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];

            return formData.append(key, value);
          }); // Save the metaboxes

          _context5.next = 16;
          return Object(external_wp_dataControls_["apiFetch"])({
            url: window._wpMetaBoxUrl,
            method: 'POST',
            body: formData,
            parse: false
          });

        case 16:
          _context5.next = 18;
          return external_wp_data_["controls"].dispatch(store.name, 'metaBoxUpdatesSuccess');

        case 18:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}
/**
 * Returns an action object used signal a successful meta box update.
 *
 * @return {Object} Action object.
 */

function metaBoxUpdatesSuccess() {
  return {
    type: 'META_BOX_UPDATES_SUCCESS'
  };
}
/**
 * Returns an action object used to toggle the width of the editing canvas.
 *
 * @param {string} deviceType
 *
 * @return {Object} Action object.
 */

function __experimentalSetPreviewDeviceType(deviceType) {
  return {
    type: 'SET_PREVIEW_DEVICE_TYPE',
    deviceType: deviceType
  };
}
/**
 * Returns an action object used to open/close the inserter.
 *
 * @param {boolean} value A boolean representing whether the inserter should be opened or closed.
 * @return {Object} Action object.
 */

function setIsInserterOpened(value) {
  return {
    type: 'SET_IS_INSERTER_OPENED',
    value: value
  };
}
/**
 * Returns an action object used to switch to template editing.
 *
 * @param {boolean} value Is editing template.
 * @return {Object} Action object.
 */

function setIsEditingTemplate(value) {
  return {
    type: 'SET_IS_EDITING_TEMPLATE',
    value: value
  };
}

// EXTERNAL MODULE: ./node_modules/rememo/es/rememo.js
var rememo = __webpack_require__(41);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/store/selectors.js
/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Returns the current editing mode.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Editing mode.
 */

function getEditorMode(state) {
  return getPreference(state, 'editorMode', 'visual');
}
/**
 * Returns true if the editor sidebar is opened.
 *
 * @param {Object} state Global application state
 *
 * @return {boolean} Whether the editor sidebar is opened.
 */

var isEditorSidebarOpened = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function () {
    var activeGeneralSidebar = select(build_module["g" /* store */]).getActiveComplementaryArea('core/edit-post');
    return Object(external_lodash_["includes"])(['edit-post/document', 'edit-post/block'], activeGeneralSidebar);
  };
});
/**
 * Returns true if the plugin sidebar is opened.
 *
 * @param {Object} state Global application state
 * @return {boolean}     Whether the plugin sidebar is opened.
 */

var isPluginSidebarOpened = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function () {
    var activeGeneralSidebar = select(build_module["g" /* store */]).getActiveComplementaryArea('core/edit-post');
    return !!activeGeneralSidebar && !Object(external_lodash_["includes"])(['edit-post/document', 'edit-post/block'], activeGeneralSidebar);
  };
});
/**
 * Returns the current active general sidebar name, or null if there is no
 * general sidebar active. The active general sidebar is a unique name to
 * identify either an editor or plugin sidebar.
 *
 * Examples:
 *
 *  - `edit-post/document`
 *  - `my-plugin/insert-image-sidebar`
 *
 * @param {Object} state Global application state.
 *
 * @return {?string} Active general sidebar name.
 */

var getActiveGeneralSidebarName = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function () {
    return select(build_module["g" /* store */]).getActiveComplementaryArea('core/edit-post');
  };
});
/**
 * Returns the preferences (these preferences are persisted locally).
 *
 * @param {Object} state Global application state.
 *
 * @return {Object} Preferences Object.
 */

function getPreferences(state) {
  return state.preferences;
}
/**
 *
 * @param {Object} state         Global application state.
 * @param {string} preferenceKey Preference Key.
 * @param {*}      defaultValue  Default Value.
 *
 * @return {*} Preference Value.
 */

function getPreference(state, preferenceKey, defaultValue) {
  var preferences = getPreferences(state);
  var value = preferences[preferenceKey];
  return value === undefined ? defaultValue : value;
}
/**
 * Returns true if the publish sidebar is opened.
 *
 * @param {Object} state Global application state
 *
 * @return {boolean} Whether the publish sidebar is open.
 */

function isPublishSidebarOpened(state) {
  return state.publishSidebarActive;
}
/**
 * Returns true if the given panel was programmatically removed, or false otherwise.
 * All panels are not removed by default.
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is removed.
 */

function isEditorPanelRemoved(state, panelName) {
  return Object(external_lodash_["includes"])(state.removedPanels, panelName);
}
/**
 * Returns true if the given panel is enabled, or false otherwise. Panels are
 * enabled by default.
 *
 * @param {Object} state     Global application state.
 * @param {string} panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is enabled.
 */

function isEditorPanelEnabled(state, panelName) {
  var panels = getPreference(state, 'panels');
  return !isEditorPanelRemoved(state, panelName) && Object(external_lodash_["get"])(panels, [panelName, 'enabled'], true);
}
/**
 * Returns true if the given panel is open, or false otherwise. Panels are
 * closed by default.
 *
 * @param  {Object}  state     Global application state.
 * @param  {string}  panelName A string that identifies the panel.
 *
 * @return {boolean} Whether or not the panel is open.
 */

function isEditorPanelOpened(state, panelName) {
  var panels = getPreference(state, 'panels');
  return Object(external_lodash_["get"])(panels, [panelName]) === true || Object(external_lodash_["get"])(panels, [panelName, 'opened']) === true;
}
/**
 * Returns true if a modal is active, or false otherwise.
 *
 * @param  {Object}  state 	   Global application state.
 * @param  {string}  modalName A string that uniquely identifies the modal.
 *
 * @return {boolean} Whether the modal is active.
 */

function isModalActive(state, modalName) {
  return state.activeModal === modalName;
}
/**
 * Returns whether the given feature is enabled or not.
 *
 * @param {Object} state   Global application state.
 * @param {string} feature Feature slug.
 *
 * @return {boolean} Is active.
 */

function isFeatureActive(state, feature) {
  return Object(external_lodash_["get"])(state.preferences.features, [feature], false);
}
/**
 * Returns true if the plugin item is pinned to the header.
 * When the value is not set it defaults to true.
 *
 * @param  {Object}  state      Global application state.
 * @param  {string}  pluginName Plugin item name.
 *
 * @return {boolean} Whether the plugin item is pinned.
 */

var isPluginItemPinned = Object(external_wp_data_["createRegistrySelector"])(function (select) {
  return function (pluginName) {
    return select(build_module["g" /* store */]).isItemPinned('core/edit-post', pluginName);
  };
});
/**
 * Returns an array of active meta box locations.
 *
 * @param {Object} state Post editor state.
 *
 * @return {string[]} Active meta box locations.
 */

var getActiveMetaBoxLocations = Object(rememo["a" /* default */])(function (state) {
  return Object.keys(state.metaBoxes.locations).filter(function (location) {
    return isMetaBoxLocationActive(state, location);
  });
}, function (state) {
  return [state.metaBoxes.locations];
});
/**
 * Returns true if a metabox location is active and visible
 *
 * @param {Object} state    Post editor state.
 * @param {string} location Meta box location to test.
 *
 * @return {boolean} Whether the meta box location is active and visible.
 */

function isMetaBoxLocationVisible(state, location) {
  return isMetaBoxLocationActive(state, location) && Object(external_lodash_["some"])(getMetaBoxesPerLocation(state, location), function (_ref) {
    var id = _ref.id;
    return isEditorPanelEnabled(state, "meta-box-".concat(id));
  });
}
/**
 * Returns true if there is an active meta box in the given location, or false
 * otherwise.
 *
 * @param {Object} state    Post editor state.
 * @param {string} location Meta box location to test.
 *
 * @return {boolean} Whether the meta box location is active.
 */

function isMetaBoxLocationActive(state, location) {
  var metaBoxes = getMetaBoxesPerLocation(state, location);
  return !!metaBoxes && metaBoxes.length !== 0;
}
/**
 * Returns the list of all the available meta boxes for a given location.
 *
 * @param {Object} state    Global application state.
 * @param {string} location Meta box location to test.
 *
 * @return {?Array} List of meta boxes.
 */

function getMetaBoxesPerLocation(state, location) {
  return state.metaBoxes.locations[location];
}
/**
 * Returns the list of all the available meta boxes.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} List of meta boxes.
 */

var getAllMetaBoxes = Object(rememo["a" /* default */])(function (state) {
  return Object(external_lodash_["flatten"])(Object(external_lodash_["values"])(state.metaBoxes.locations));
}, function (state) {
  return [state.metaBoxes.locations];
});
/**
 * Returns true if the post is using Meta Boxes
 *
 * @param  {Object} state Global application state
 *
 * @return {boolean} Whether there are metaboxes or not.
 */

function hasMetaBoxes(state) {
  return getActiveMetaBoxLocations(state).length > 0;
}
/**
 * Returns true if the Meta Boxes are being saved.
 *
 * @param   {Object}  state Global application state.
 *
 * @return {boolean} Whether the metaboxes are being saved.
 */

function selectors_isSavingMetaBoxes(state) {
  return state.metaBoxes.isSaving;
}
/**
 * Returns the current editing canvas device type.
 *
 * @param {Object} state Global application state.
 *
 * @return {string} Device type.
 */

function __experimentalGetPreviewDeviceType(state) {
  return state.deviceType;
}
/**
 * Returns true if the inserter is opened.
 *
 * @param  {Object}  state Global application state.
 *
 * @return {boolean} Whether the inserter is opened.
 */

function selectors_isInserterOpened(state) {
  return state.isInserterOpened;
}
/**
 * Returns true if the template editing mode is enabled.
 *
 * @param  {Object}  state Global application state.
 *
 * @return {boolean} Whether we're editing the template.
 */

function selectors_isEditingTemplate(state) {
  return state.isEditingTemplate;
}

// EXTERNAL MODULE: ./node_modules/@wordpress/edit-post/build-module/store/constants.js
var constants = __webpack_require__(118);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/store/index.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





var storeConfig = {
  reducer: reducer,
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject,
  controls: external_wp_dataControls_["controls"],
  persist: ['preferences']
};
/**
 * Store definition for the edit post namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

var store = Object(external_wp_data_["createReduxStore"])(constants["a" /* STORE_NAME */], storeConfig); // Ideally we use register instead of register store.

Object(external_wp_data_["registerStore"])(constants["a" /* STORE_NAME */], storeConfig);


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_babel_runtime_helpers_esm_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockLibrary"]; }());

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var starFilled = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"
}));
/* harmony default export */ __webpack_exports__["a"] = (starFilled);


/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var starEmpty = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  fillRule: "evenodd",
  d: "M9.706 8.646a.25.25 0 01-.188.137l-4.626.672a.25.25 0 00-.139.427l3.348 3.262a.25.25 0 01.072.222l-.79 4.607a.25.25 0 00.362.264l4.138-2.176a.25.25 0 01.233 0l4.137 2.175a.25.25 0 00.363-.263l-.79-4.607a.25.25 0 01.072-.222l3.347-3.262a.25.25 0 00-.139-.427l-4.626-.672a.25.25 0 01-.188-.137l-2.069-4.192a.25.25 0 00-.448 0L9.706 8.646zM12 7.39l-.948 1.921a1.75 1.75 0 01-1.317.957l-2.12.308 1.534 1.495c.412.402.6.982.503 1.55l-.362 2.11 1.896-.997a1.75 1.75 0 011.629 0l1.895.997-.362-2.11a1.75 1.75 0 01.504-1.55l1.533-1.495-2.12-.308a1.75 1.75 0 01-1.317-.957L12 7.39z",
  clipRule: "evenodd"
}));
/* harmony default export */ __webpack_exports__["a"] = (starEmpty);


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var moreVertical = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M13 19h-2v-2h2v2zm0-6h-2v-2h2v2zm0-6h-2V5h2v2z"
}));
/* harmony default export */ __webpack_exports__["a"] = (moreVertical);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["url"]; }());

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["editor"]; }());

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var LEAF_KEY, hasWeakMap;

/**
 * Arbitrary value used as key for referencing cache object in WeakMap tree.
 *
 * @type {Object}
 */
LEAF_KEY = {};

/**
 * Whether environment supports WeakMap.
 *
 * @type {boolean}
 */
hasWeakMap = typeof WeakMap !== 'undefined';

/**
 * Returns the first argument as the sole entry in an array.
 *
 * @param {*} value Value to return.
 *
 * @return {Array} Value returned as entry in array.
 */
function arrayOf( value ) {
	return [ value ];
}

/**
 * Returns true if the value passed is object-like, or false otherwise. A value
 * is object-like if it can support property assignment, e.g. object or array.
 *
 * @param {*} value Value to test.
 *
 * @return {boolean} Whether value is object-like.
 */
function isObjectLike( value ) {
	return !! value && 'object' === typeof value;
}

/**
 * Creates and returns a new cache object.
 *
 * @return {Object} Cache object.
 */
function createCache() {
	var cache = {
		clear: function() {
			cache.head = null;
		},
	};

	return cache;
}

/**
 * Returns true if entries within the two arrays are strictly equal by
 * reference from a starting index.
 *
 * @param {Array}  a         First array.
 * @param {Array}  b         Second array.
 * @param {number} fromIndex Index from which to start comparison.
 *
 * @return {boolean} Whether arrays are shallowly equal.
 */
function isShallowEqual( a, b, fromIndex ) {
	var i;

	if ( a.length !== b.length ) {
		return false;
	}

	for ( i = fromIndex; i < a.length; i++ ) {
		if ( a[ i ] !== b[ i ] ) {
			return false;
		}
	}

	return true;
}

/**
 * Returns a memoized selector function. The getDependants function argument is
 * called before the memoized selector and is expected to return an immutable
 * reference or array of references on which the selector depends for computing
 * its own return value. The memoize cache is preserved only as long as those
 * dependant references remain the same. If getDependants returns a different
 * reference(s), the cache is cleared and the selector value regenerated.
 *
 * @param {Function} selector      Selector function.
 * @param {Function} getDependants Dependant getter returning an immutable
 *                                 reference or array of reference used in
 *                                 cache bust consideration.
 *
 * @return {Function} Memoized selector.
 */
/* harmony default export */ __webpack_exports__["a"] = (function( selector, getDependants ) {
	var rootCache, getCache;

	// Use object source as dependant if getter not provided
	if ( ! getDependants ) {
		getDependants = arrayOf;
	}

	/**
	 * Returns the root cache. If WeakMap is supported, this is assigned to the
	 * root WeakMap cache set, otherwise it is a shared instance of the default
	 * cache object.
	 *
	 * @return {(WeakMap|Object)} Root cache object.
	 */
	function getRootCache() {
		return rootCache;
	}

	/**
	 * Returns the cache for a given dependants array. When possible, a WeakMap
	 * will be used to create a unique cache for each set of dependants. This
	 * is feasible due to the nature of WeakMap in allowing garbage collection
	 * to occur on entries where the key object is no longer referenced. Since
	 * WeakMap requires the key to be an object, this is only possible when the
	 * dependant is object-like. The root cache is created as a hierarchy where
	 * each top-level key is the first entry in a dependants set, the value a
	 * WeakMap where each key is the next dependant, and so on. This continues
	 * so long as the dependants are object-like. If no dependants are object-
	 * like, then the cache is shared across all invocations.
	 *
	 * @see isObjectLike
	 *
	 * @param {Array} dependants Selector dependants.
	 *
	 * @return {Object} Cache object.
	 */
	function getWeakMapCache( dependants ) {
		var caches = rootCache,
			isUniqueByDependants = true,
			i, dependant, map, cache;

		for ( i = 0; i < dependants.length; i++ ) {
			dependant = dependants[ i ];

			// Can only compose WeakMap from object-like key.
			if ( ! isObjectLike( dependant ) ) {
				isUniqueByDependants = false;
				break;
			}

			// Does current segment of cache already have a WeakMap?
			if ( caches.has( dependant ) ) {
				// Traverse into nested WeakMap.
				caches = caches.get( dependant );
			} else {
				// Create, set, and traverse into a new one.
				map = new WeakMap();
				caches.set( dependant, map );
				caches = map;
			}
		}

		// We use an arbitrary (but consistent) object as key for the last item
		// in the WeakMap to serve as our running cache.
		if ( ! caches.has( LEAF_KEY ) ) {
			cache = createCache();
			cache.isUniqueByDependants = isUniqueByDependants;
			caches.set( LEAF_KEY, cache );
		}

		return caches.get( LEAF_KEY );
	}

	// Assign cache handler by availability of WeakMap
	getCache = hasWeakMap ? getWeakMapCache : getRootCache;

	/**
	 * Resets root memoization cache.
	 */
	function clear() {
		rootCache = hasWeakMap ? new WeakMap() : createCache();
	}

	// eslint-disable-next-line jsdoc/check-param-names
	/**
	 * The augmented selector call, considering first whether dependants have
	 * changed before passing it to underlying memoize function.
	 *
	 * @param {Object} source    Source object for derivation.
	 * @param {...*}   extraArgs Additional arguments to pass to selector.
	 *
	 * @return {*} Selector result.
	 */
	function callSelector( /* source, ...extraArgs */ ) {
		var len = arguments.length,
			cache, node, i, args, dependants;

		// Create copy of arguments (avoid leaking deoptimization).
		args = new Array( len );
		for ( i = 0; i < len; i++ ) {
			args[ i ] = arguments[ i ];
		}

		dependants = getDependants.apply( null, args );
		cache = getCache( dependants );

		// If not guaranteed uniqueness by dependants (primitive type or lack
		// of WeakMap support), shallow compare against last dependants and, if
		// references have changed, destroy cache to recalculate result.
		if ( ! cache.isUniqueByDependants ) {
			if ( cache.lastDependants && ! isShallowEqual( dependants, cache.lastDependants, 0 ) ) {
				cache.clear();
			}

			cache.lastDependants = dependants;
		}

		node = cache.head;
		while ( node ) {
			// Check whether node arguments match arguments
			if ( ! isShallowEqual( node.args, args, 1 ) ) {
				node = node.next;
				continue;
			}

			// At this point we can assume we've found a match

			// Surface matched node to head if not already
			if ( node !== cache.head ) {
				// Adjust siblings to point to each other.
				node.prev.next = node.next;
				if ( node.next ) {
					node.next.prev = node.prev;
				}

				node.next = cache.head;
				node.prev = null;
				cache.head.prev = node;
				cache.head = node;
			}

			// Return immediately
			return node.val;
		}

		// No cached value found. Continue to insertion phase:

		node = {
			// Generate the result from original function
			val: selector.apply( null, args ),
		};

		// Avoid including the source object in the cache.
		args[ 0 ] = null;
		node.args = args;

		// Don't need to check whether node is already head, since it would
		// have been returned above already if it was

		// Shift existing head down list
		if ( cache.head ) {
			cache.head.prev = node;
			node.next = cache.head;
		}

		cache.head = node;

		return node.val;
	}

	callSelector.getDependants = getDependants;
	callSelector.clear = clear;
	clear();

	return callSelector;
});


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

var external = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  d: "M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"
}));
/* harmony default export */ __webpack_exports__["a"] = (external);


/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "store", function() { return /* reexport */ store["a" /* store */]; });
__webpack_require__.d(__webpack_exports__, "reinitializeEditor", function() { return /* binding */ reinitializeEditor; });
__webpack_require__.d(__webpack_exports__, "initializeEditor", function() { return /* binding */ initializeEditor; });
__webpack_require__.d(__webpack_exports__, "PluginBlockSettingsMenuItem", function() { return /* reexport */ plugin_block_settings_menu_item; });
__webpack_require__.d(__webpack_exports__, "PluginDocumentSettingPanel", function() { return /* reexport */ plugin_document_setting_panel["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "PluginMoreMenuItem", function() { return /* reexport */ plugin_more_menu_item; });
__webpack_require__.d(__webpack_exports__, "PluginPostPublishPanel", function() { return /* reexport */ plugin_post_publish_panel; });
__webpack_require__.d(__webpack_exports__, "PluginPostStatusInfo", function() { return /* reexport */ plugin_post_status_info; });
__webpack_require__.d(__webpack_exports__, "PluginPrePublishPanel", function() { return /* reexport */ plugin_pre_publish_panel; });
__webpack_require__.d(__webpack_exports__, "PluginSidebar", function() { return /* reexport */ PluginSidebarEditPost; });
__webpack_require__.d(__webpack_exports__, "PluginSidebarMoreMenuItem", function() { return /* reexport */ PluginSidebarMoreMenuItem; });
__webpack_require__.d(__webpack_exports__, "__experimentalFullscreenModeClose", function() { return /* reexport */ fullscreen_mode_close; });
__webpack_require__.d(__webpack_exports__, "__experimentalMainDashboardButton", function() { return /* reexport */ main_dashboard_button; });

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","coreData"]
var external_wp_coreData_ = __webpack_require__(56);

// EXTERNAL MODULE: external ["wp","blockEditor"]
var external_wp_blockEditor_ = __webpack_require__(6);

// EXTERNAL MODULE: external ["wp","editor"]
var external_wp_editor_ = __webpack_require__(34);

// EXTERNAL MODULE: external ["wp","blockLibrary"]
var external_wp_blockLibrary_ = __webpack_require__(287);

// EXTERNAL MODULE: external ["wp","hooks"]
var external_wp_hooks_ = __webpack_require__(33);

// EXTERNAL MODULE: external ["wp","mediaUtils"]
var external_wp_mediaUtils_ = __webpack_require__(154);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/hooks/components/index.js
/**
 * WordPress dependencies
 */



var components_replaceMediaUpload = function replaceMediaUpload() {
  return external_wp_mediaUtils_["MediaUpload"];
};

Object(external_wp_hooks_["addFilter"])('editor.MediaUpload', 'core/edit-post/replace-media-upload', components_replaceMediaUpload);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// EXTERNAL MODULE: external ["wp","blocks"]
var external_wp_blocks_ = __webpack_require__(9);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/hooks/validate-multiple-use/index.js




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








var enhance = Object(external_wp_compose_["compose"])(
/**
 * For blocks whose block type doesn't support `multiple`, provides the
 * wrapped component with `originalBlockClientId` -- a reference to the
 * first block of the same type in the content -- if and only if that
 * "original" block is not the current one. Thus, an inexisting
 * `originalBlockClientId` prop signals that the block is valid.
 *
 * @param {WPComponent} WrappedBlockEdit A filtered BlockEdit instance.
 *
 * @return {WPComponent} Enhanced component with merged state data props.
 */
Object(external_wp_data_["withSelect"])(function (select, block) {
  var multiple = Object(external_wp_blocks_["hasBlockSupport"])(block.name, 'multiple', true); // For block types with `multiple` support, there is no "original
  // block" to be found in the content, as the block itself is valid.

  if (multiple) {
    return {};
  } // Otherwise, only pass `originalBlockClientId` if it refers to a different
  // block from the current one.


  var blocks = select('core/block-editor').getBlocks();
  var firstOfSameType = Object(external_lodash_["find"])(blocks, function (_ref) {
    var name = _ref.name;
    return block.name === name;
  });
  var isInvalid = firstOfSameType && firstOfSameType.clientId !== block.clientId;
  return {
    originalBlockClientId: isInvalid && firstOfSameType.clientId
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch, _ref2) {
  var originalBlockClientId = _ref2.originalBlockClientId;
  return {
    selectFirst: function selectFirst() {
      return dispatch('core/block-editor').selectBlock(originalBlockClientId);
    }
  };
}));
var withMultipleValidation = Object(external_wp_compose_["createHigherOrderComponent"])(function (BlockEdit) {
  return enhance(function (_ref3) {
    var originalBlockClientId = _ref3.originalBlockClientId,
        selectFirst = _ref3.selectFirst,
        props = Object(objectWithoutProperties["a" /* default */])(_ref3, ["originalBlockClientId", "selectFirst"]);

    if (!originalBlockClientId) {
      return Object(external_wp_element_["createElement"])(BlockEdit, props);
    }

    var blockType = Object(external_wp_blocks_["getBlockType"])(props.name);
    var outboundType = getOutboundType(props.name);
    return [Object(external_wp_element_["createElement"])("div", {
      key: "invalid-preview",
      style: {
        minHeight: '60px'
      }
    }, Object(external_wp_element_["createElement"])(BlockEdit, Object(esm_extends["a" /* default */])({
      key: "block-edit"
    }, props))), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["Warning"], {
      key: "multiple-use-warning",
      actions: [Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        key: "find-original",
        isSecondary: true,
        onClick: selectFirst
      }, Object(external_wp_i18n_["__"])('Find original')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        key: "remove",
        isSecondary: true,
        onClick: function onClick() {
          return props.onReplace([]);
        }
      }, Object(external_wp_i18n_["__"])('Remove')), outboundType && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        key: "transform",
        isSecondary: true,
        onClick: function onClick() {
          return props.onReplace(Object(external_wp_blocks_["createBlock"])(outboundType.name, props.attributes));
        }
      }, Object(external_wp_i18n_["__"])('Transform into:'), " ", outboundType.title)]
    }, Object(external_wp_element_["createElement"])("strong", null, blockType.title, ": "), Object(external_wp_i18n_["__"])('This block can only be used once.'))];
  });
}, 'withMultipleValidation');
/**
 * Given a base block name, returns the default block type to which to offer
 * transforms.
 *
 * @param {string} blockName Base block name.
 *
 * @return {?Object} The chosen default block type.
 */

function getOutboundType(blockName) {
  // Grab the first outbound transform
  var transform = Object(external_wp_blocks_["findTransform"])(Object(external_wp_blocks_["getBlockTransforms"])('to', blockName), function (_ref4) {
    var type = _ref4.type,
        blocks = _ref4.blocks;
    return type === 'block' && blocks.length === 1;
  } // What about when .length > 1?
  );

  if (!transform) {
    return null;
  }

  return Object(external_wp_blocks_["getBlockType"])(transform.blocks[0]);
}

Object(external_wp_hooks_["addFilter"])('editor.BlockEdit', 'core/edit-post/validate-multiple-use/with-multiple-validation', withMultipleValidation);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/hooks/index.js
/**
 * Internal dependencies
 */



// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/external.js
var external = __webpack_require__(420);

// EXTERNAL MODULE: external ["wp","plugins"]
var external_wp_plugins_ = __webpack_require__(73);

// EXTERNAL MODULE: external ["wp","url"]
var external_wp_url_ = __webpack_require__(32);

// EXTERNAL MODULE: external ["wp","notices"]
var external_wp_notices_ = __webpack_require__(51);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/plugins/copy-content-menu-item/index.js


/**
 * WordPress dependencies
 */







function CopyContentMenuItem(_ref) {
  var createNotice = _ref.createNotice,
      editedPostContent = _ref.editedPostContent;
  var ref = Object(external_wp_element_["useRef"])();
  var hasCopied = Object(external_wp_compose_["useCopyOnClick"])(ref, editedPostContent);
  Object(external_wp_element_["useEffect"])(function () {
    if (!hasCopied) {
      return;
    }

    createNotice('info', Object(external_wp_i18n_["__"])('All content copied.'), {
      isDismissible: true,
      type: 'snackbar'
    });
  }, [hasCopied]);
  return Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    ref: ref
  }, hasCopied ? Object(external_wp_i18n_["__"])('Copied!') : Object(external_wp_i18n_["__"])('Copy all content'));
}

/* harmony default export */ var copy_content_menu_item = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  return {
    editedPostContent: select('core/editor').getEditedPostAttribute('content')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(external_wp_notices_["store"]),
      createNotice = _dispatch.createNotice;

  return {
    createNotice: createNotice
  };
}), Object(external_wp_compose_["ifCondition"])(function (_ref2) {
  var editedPostContent = _ref2.editedPostContent;
  return editedPostContent.length > 0;
}))(CopyContentMenuItem));

// EXTERNAL MODULE: ./node_modules/@wordpress/edit-post/build-module/store/index.js + 5 modules
var store = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/plugins/manage-blocks-menu-item/index.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function ManageBlocksMenuItem(_ref) {
  var openModal = _ref.openModal;
  return Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    onClick: function onClick() {
      openModal('edit-post/manage-blocks');
    }
  }, Object(external_wp_i18n_["__"])('Block Manager'));
}
/* harmony default export */ var manage_blocks_menu_item = (Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(store["a" /* store */]),
      openModal = _dispatch.openModal;

  return {
    openModal: openModal
  };
})(ManageBlocksMenuItem));

// EXTERNAL MODULE: external ["wp","keycodes"]
var external_wp_keycodes_ = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/plugins/keyboard-shortcuts-help-menu-item/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function KeyboardShortcutsHelpMenuItem(_ref) {
  var openModal = _ref.openModal;
  return Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    onClick: function onClick() {
      openModal('edit-post/keyboard-shortcut-help');
    },
    shortcut: external_wp_keycodes_["displayShortcut"].access('h')
  }, Object(external_wp_i18n_["__"])('Keyboard shortcuts'));
}
/* harmony default export */ var keyboard_shortcuts_help_menu_item = (Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(store["a" /* store */]),
      openModal = _dispatch.openModal;

  return {
    openModal: openModal
  };
})(KeyboardShortcutsHelpMenuItem));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/tools-more-menu-group/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




var _createSlotFill = Object(external_wp_components_["createSlotFill"])('ToolsMoreMenuGroup'),
    ToolsMoreMenuGroup = _createSlotFill.Fill,
    tools_more_menu_group_Slot = _createSlotFill.Slot;

ToolsMoreMenuGroup.Slot = function (_ref) {
  var fillProps = _ref.fillProps;
  return Object(external_wp_element_["createElement"])(tools_more_menu_group_Slot, {
    fillProps: fillProps
  }, function (fills) {
    return !Object(external_lodash_["isEmpty"])(fills) && Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
      label: Object(external_wp_i18n_["__"])('Tools')
    }, fills);
  });
};

/* harmony default export */ var tools_more_menu_group = (ToolsMoreMenuGroup);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/plugins/welcome-guide-menu-item/index.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function WelcomeGuideMenuItem() {
  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      toggleFeature = _useDispatch.toggleFeature;

  return Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    onClick: function onClick() {
      return toggleFeature('welcomeGuide');
    }
  }, Object(external_wp_i18n_["__"])('Welcome Guide'));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/plugins/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */






Object(external_wp_plugins_["registerPlugin"])('edit-post', {
  render: function render() {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(tools_more_menu_group, null, function (_ref) {
      var onClose = _ref.onClose;
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(manage_blocks_menu_item, {
        onSelect: onClose
      }), Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
        role: "menuitem",
        href: Object(external_wp_url_["addQueryArgs"])('edit.php', {
          post_type: 'wp_block'
        })
      }, Object(external_wp_i18n_["__"])('Manage all reusable blocks')), Object(external_wp_element_["createElement"])(keyboard_shortcuts_help_menu_item, {
        onSelect: onClose
      }), Object(external_wp_element_["createElement"])(WelcomeGuideMenuItem, null), Object(external_wp_element_["createElement"])(copy_content_menu_item, null), Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
        role: "menuitem",
        icon: external["a" /* default */],
        href: Object(external_wp_i18n_["__"])('https://wordpress.org/support/article/wordpress-editor/'),
        target: "_blank",
        rel: "noopener noreferrer"
      }, Object(external_wp_i18n_["__"])('Help'), Object(external_wp_element_["createElement"])(external_wp_components_["VisuallyHidden"], {
        as: "span"
      },
      /* translators: accessibility text */
      Object(external_wp_i18n_["__"])('(opens in a new tab)'))));
    }));
  }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/prevent-event-discovery.js
/* harmony default export */ var prevent_event_discovery = ({
  't a l e s o f g u t e n b e r g': function tALESOFGUTENBERG(event) {
    var ownerDocument = event.target.ownerDocument;

    if (!ownerDocument.activeElement.classList.contains('edit-post-visual-editor') && ownerDocument.activeElement !== ownerDocument.body) {
      return;
    }

    event.preventDefault();
    window.wp.data.dispatch('core/block-editor').insertBlock(window.wp.blocks.createBlock('core/paragraph', {
      content: '🐡🐢🦀🐤🦋🐘🐧🐹🦁🦄🦍🐼🐿🎃🐴🐝🐆🦕🦔🌱🍇π🍌🐉💧🥨🌌🍂🍠🥦🥚🥝🎟🥥🥒🛵🥖🍒🍯🎾🎲🐺🐚🐮⌛️'
    }));
  }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(10);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/@wordpress/interface/build-module/index.js + 15 modules
var build_module = __webpack_require__(61);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close.js
var library_close = __webpack_require__(160);

// EXTERNAL MODULE: external ["wp","keyboardShortcuts"]
var external_wp_keyboardShortcuts_ = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/text-editor/index.js


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function TextEditor(_ref) {
  var onExit = _ref.onExit,
      isRichEditingEnabled = _ref.isRichEditingEnabled;
  return Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-text-editor"
  }, isRichEditingEnabled && Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-text-editor__toolbar"
  }, Object(external_wp_element_["createElement"])("h2", null, Object(external_wp_i18n_["__"])('Editing code')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isTertiary: true,
    onClick: onExit,
    shortcut: external_wp_keycodes_["displayShortcut"].secondary('m')
  }, Object(external_wp_i18n_["__"])('Exit code editor')), Object(external_wp_element_["createElement"])(external_wp_editor_["TextEditorGlobalKeyboardShortcuts"], null)), Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-text-editor__body"
  }, Object(external_wp_element_["createElement"])(external_wp_editor_["PostTitle"], null), Object(external_wp_element_["createElement"])(external_wp_editor_["PostTextEditor"], null)));
}

/* harmony default export */ var text_editor = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  return {
    isRichEditingEnabled: select('core/editor').getEditorSettings().richEditingEnabled
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onExit: function onExit() {
      dispatch(store["a" /* store */]).switchEditorMode('visual');
    }
  };
}))(TextEditor));

// EXTERNAL MODULE: ./node_modules/react-merge-refs/dist/react-merge-refs.esm.js
var react_merge_refs_esm = __webpack_require__(72);

// EXTERNAL MODULE: external ["wp","a11y"]
var external_wp_a11y_ = __webpack_require__(48);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/visual-editor/block-inspector-button.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


function BlockInspectorButton(_ref) {
  var _ref$onClick = _ref.onClick,
      _onClick = _ref$onClick === void 0 ? external_lodash_["noop"] : _ref$onClick,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      shortcut: select(external_wp_keyboardShortcuts_["store"]).getShortcutRepresentation('core/edit-post/toggle-sidebar'),
      areAdvancedSettingsOpened: select(store["a" /* store */]).getActiveGeneralSidebarName() === 'edit-post/block'
    };
  }, []),
      shortcut = _useSelect.shortcut,
      areAdvancedSettingsOpened = _useSelect.areAdvancedSettingsOpened;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      openGeneralSidebar = _useDispatch.openGeneralSidebar,
      closeGeneralSidebar = _useDispatch.closeGeneralSidebar;

  var speakMessage = function speakMessage() {
    if (areAdvancedSettingsOpened) {
      Object(external_wp_a11y_["speak"])(Object(external_wp_i18n_["__"])('Block settings closed'));
    } else {
      Object(external_wp_a11y_["speak"])(Object(external_wp_i18n_["__"])('Additional settings are now available in the Editor block settings sidebar'));
    }
  };

  var label = areAdvancedSettingsOpened ? Object(external_wp_i18n_["__"])('Hide more settings') : Object(external_wp_i18n_["__"])('Show more settings');
  return Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    onClick: function onClick() {
      if (areAdvancedSettingsOpened) {
        closeGeneralSidebar();
      } else {
        openGeneralSidebar('edit-post/block');
        speakMessage();

        _onClick();
      }
    },
    shortcut: shortcut
  }, !small && label);
}
/* harmony default export */ var block_inspector_button = (BlockInspectorButton);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/visual-editor/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function VisualEditor(_ref) {
  var styles = _ref.styles;
  var ref = Object(external_wp_element_["useRef"])();

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(store["a" /* store */]),
        isEditingTemplate = _select.isEditingTemplate,
        __experimentalGetPreviewDeviceType = _select.__experimentalGetPreviewDeviceType;

    return {
      deviceType: __experimentalGetPreviewDeviceType(),
      isTemplateMode: isEditingTemplate()
    };
  }, []),
      deviceType = _useSelect.deviceType,
      isTemplateMode = _useSelect.isTemplateMode;

  var hasMetaBoxes = Object(external_wp_data_["useSelect"])(function (select) {
    return select(store["a" /* store */]).hasMetaBoxes();
  }, []);
  var desktopCanvasStyles = {
    height: '100%',
    // Add a constant padding for the typewritter effect. When typing at the
    // bottom, there needs to be room to scroll up.
    paddingBottom: hasMetaBoxes ? null : '40vh'
  };
  var resizedCanvasStyles = Object(external_wp_blockEditor_["__experimentalUseResizeCanvas"])(deviceType);
  Object(external_wp_blockEditor_["__unstableUseScrollMultiSelectionIntoView"])(ref);
  Object(external_wp_blockEditor_["__unstableUseBlockSelectionClearer"])(ref);
  Object(external_wp_blockEditor_["__unstableUseTypewriter"])(ref);
  Object(external_wp_blockEditor_["__unstableUseClipboardHandler"])(ref);
  Object(external_wp_blockEditor_["__unstableUseTypingObserver"])(ref);
  Object(external_wp_blockEditor_["__unstableUseCanvasClickRedirect"])(ref);
  var editorStylesRef = Object(external_wp_blockEditor_["__unstableUseEditorStyles"])(styles);
  var mergedRefs = Object(external_wp_element_["useCallback"])(Object(react_merge_refs_esm["a" /* default */])([ref, editorStylesRef]), [ref, editorStylesRef]);
  return Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-visual-editor"
  }, Object(external_wp_element_["createElement"])(external_wp_editor_["VisualEditorGlobalKeyboardShortcuts"], null), Object(external_wp_element_["createElement"])(external_wp_components_["Popover"].Slot, {
    name: "block-toolbar"
  }), Object(external_wp_element_["createElement"])("div", {
    ref: mergedRefs,
    className: "editor-styles-wrapper",
    style: resizedCanvasStyles || desktopCanvasStyles
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["WritingFlow"], null, !isTemplateMode && Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-visual-editor__post-title-wrapper"
  }, Object(external_wp_element_["createElement"])(external_wp_editor_["PostTitle"], null)), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockList"], null))), Object(external_wp_element_["createElement"])(external_wp_blockEditor_["__experimentalBlockSettingsMenuFirstItem"], null, function (_ref2) {
    var onClose = _ref2.onClose;
    return Object(external_wp_element_["createElement"])(block_inspector_button, {
      onClick: onClose
    });
  }));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcuts/index.js
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function KeyboardShortcuts() {
  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var settings = select('core/editor').getEditorSettings();
    return {
      getBlockSelectionStart: select('core/block-editor').getBlockSelectionStart,
      getEditorMode: select(store["a" /* store */]).getEditorMode,
      isEditorSidebarOpened: select(store["a" /* store */]).isEditorSidebarOpened,
      richEditingEnabled: settings.richEditingEnabled,
      codeEditingEnabled: settings.codeEditingEnabled
    };
  }),
      getBlockSelectionStart = _useSelect.getBlockSelectionStart,
      getEditorMode = _useSelect.getEditorMode,
      isEditorSidebarOpened = _useSelect.isEditorSidebarOpened,
      richEditingEnabled = _useSelect.richEditingEnabled,
      codeEditingEnabled = _useSelect.codeEditingEnabled;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      switchEditorMode = _useDispatch.switchEditorMode,
      openGeneralSidebar = _useDispatch.openGeneralSidebar,
      closeGeneralSidebar = _useDispatch.closeGeneralSidebar,
      toggleFeature = _useDispatch.toggleFeature;

  var _useDispatch2 = Object(external_wp_data_["useDispatch"])(external_wp_keyboardShortcuts_["store"]),
      registerShortcut = _useDispatch2.registerShortcut;

  Object(external_wp_element_["useEffect"])(function () {
    registerShortcut({
      name: 'core/edit-post/toggle-mode',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Switch between visual editor and code editor.'),
      keyCombination: {
        modifier: 'secondary',
        character: 'm'
      }
    });
    registerShortcut({
      name: 'core/edit-post/toggle-fullscreen',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Toggle fullscreen mode.'),
      keyCombination: {
        modifier: 'secondary',
        character: 'f'
      }
    });
    registerShortcut({
      name: 'core/edit-post/toggle-block-navigation',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Open the block list view.'),
      keyCombination: {
        modifier: 'access',
        character: 'o'
      }
    });
    registerShortcut({
      name: 'core/edit-post/toggle-sidebar',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Show or hide the settings sidebar.'),
      keyCombination: {
        modifier: 'primaryShift',
        character: ','
      }
    });
    registerShortcut({
      name: 'core/edit-post/next-region',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Navigate to the next part of the editor.'),
      keyCombination: {
        modifier: 'ctrl',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'n'
      }]
    });
    registerShortcut({
      name: 'core/edit-post/previous-region',
      category: 'global',
      description: Object(external_wp_i18n_["__"])('Navigate to the previous part of the editor.'),
      keyCombination: {
        modifier: 'ctrlShift',
        character: '`'
      },
      aliases: [{
        modifier: 'access',
        character: 'p'
      }]
    });
    registerShortcut({
      name: 'core/edit-post/keyboard-shortcuts',
      category: 'main',
      description: Object(external_wp_i18n_["__"])('Display these keyboard shortcuts.'),
      keyCombination: {
        modifier: 'access',
        character: 'h'
      }
    });
  }, []);
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/edit-post/toggle-mode', function () {
    switchEditorMode(getEditorMode() === 'visual' ? 'text' : 'visual');
  }, {
    bindGlobal: true,
    isDisabled: !richEditingEnabled || !codeEditingEnabled
  });
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/edit-post/toggle-fullscreen', function () {
    toggleFeature('fullscreenMode');
  }, {
    bindGlobal: true
  });
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/edit-post/toggle-sidebar', function (event) {
    // This shortcut has no known clashes, but use preventDefault to prevent any
    // obscure shortcuts from triggering.
    event.preventDefault();

    if (isEditorSidebarOpened()) {
      closeGeneralSidebar();
    } else {
      var sidebarToOpen = getBlockSelectionStart() ? 'edit-post/block' : 'edit-post/document';
      openGeneralSidebar(sidebarToOpen);
    }
  }, {
    bindGlobal: true
  });
  return null;
}

/* harmony default export */ var keyboard_shortcuts = (KeyboardShortcuts);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/config.js
/**
 * WordPress dependencies
 */

var textFormattingShortcuts = [{
  keyCombination: {
    modifier: 'primary',
    character: 'b'
  },
  description: Object(external_wp_i18n_["__"])('Make the selected text bold.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'i'
  },
  description: Object(external_wp_i18n_["__"])('Make the selected text italic.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'k'
  },
  description: Object(external_wp_i18n_["__"])('Convert the selected text into a link.')
}, {
  keyCombination: {
    modifier: 'primaryShift',
    character: 'k'
  },
  description: Object(external_wp_i18n_["__"])('Remove a link.')
}, {
  keyCombination: {
    modifier: 'primary',
    character: 'u'
  },
  description: Object(external_wp_i18n_["__"])('Underline the selected text.')
}];

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/shortcut.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function KeyCombination(_ref) {
  var keyCombination = _ref.keyCombination,
      forceAriaLabel = _ref.forceAriaLabel;
  var shortcut = keyCombination.modifier ? external_wp_keycodes_["displayShortcutList"][keyCombination.modifier](keyCombination.character) : keyCombination.character;
  var ariaLabel = keyCombination.modifier ? external_wp_keycodes_["shortcutAriaLabel"][keyCombination.modifier](keyCombination.character) : keyCombination.character;
  return Object(external_wp_element_["createElement"])("kbd", {
    className: "edit-post-keyboard-shortcut-help-modal__shortcut-key-combination",
    "aria-label": forceAriaLabel || ariaLabel
  }, Object(external_lodash_["castArray"])(shortcut).map(function (character, index) {
    if (character === '+') {
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], {
        key: index
      }, character);
    }

    return Object(external_wp_element_["createElement"])("kbd", {
      key: index,
      className: "edit-post-keyboard-shortcut-help-modal__shortcut-key"
    }, character);
  }));
}

function Shortcut(_ref2) {
  var description = _ref2.description,
      keyCombination = _ref2.keyCombination,
      _ref2$aliases = _ref2.aliases,
      aliases = _ref2$aliases === void 0 ? [] : _ref2$aliases,
      ariaLabel = _ref2.ariaLabel;
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-keyboard-shortcut-help-modal__shortcut-description"
  }, description), Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-keyboard-shortcut-help-modal__shortcut-term"
  }, Object(external_wp_element_["createElement"])(KeyCombination, {
    keyCombination: keyCombination,
    forceAriaLabel: ariaLabel
  }), aliases.map(function (alias, index) {
    return Object(external_wp_element_["createElement"])(KeyCombination, {
      keyCombination: alias,
      forceAriaLabel: ariaLabel,
      key: index
    });
  })));
}

/* harmony default export */ var keyboard_shortcut_help_modal_shortcut = (Shortcut);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/dynamic-shortcut.js


/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function DynamicShortcut(_ref) {
  var name = _ref.name;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(external_wp_keyboardShortcuts_["store"]),
        getShortcutKeyCombination = _select.getShortcutKeyCombination,
        getShortcutDescription = _select.getShortcutDescription,
        getShortcutAliases = _select.getShortcutAliases;

    return {
      keyCombination: getShortcutKeyCombination(name),
      aliases: getShortcutAliases(name),
      description: getShortcutDescription(name)
    };
  }),
      keyCombination = _useSelect.keyCombination,
      description = _useSelect.description,
      aliases = _useSelect.aliases;

  if (!keyCombination) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_shortcut, {
    keyCombination: keyCombination,
    description: description,
    aliases: aliases
  });
}

/* harmony default export */ var dynamic_shortcut = (DynamicShortcut);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/keyboard-shortcut-help-modal/index.js


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */





var MODAL_NAME = 'edit-post/keyboard-shortcut-help';

var keyboard_shortcut_help_modal_ShortcutList = function ShortcutList(_ref) {
  var shortcuts = _ref.shortcuts;
  return (
    /*
     * Disable reason: The `list` ARIA role is redundant but
     * Safari+VoiceOver won't announce the list otherwise.
     */

    /* eslint-disable jsx-a11y/no-redundant-roles */
    Object(external_wp_element_["createElement"])("ul", {
      className: "edit-post-keyboard-shortcut-help-modal__shortcut-list",
      role: "list"
    }, shortcuts.map(function (shortcut, index) {
      return Object(external_wp_element_["createElement"])("li", {
        className: "edit-post-keyboard-shortcut-help-modal__shortcut",
        key: index
      }, Object(external_lodash_["isString"])(shortcut) ? Object(external_wp_element_["createElement"])(dynamic_shortcut, {
        name: shortcut
      }) : Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_shortcut, shortcut));
    }))
    /* eslint-enable jsx-a11y/no-redundant-roles */

  );
};

var keyboard_shortcut_help_modal_ShortcutSection = function ShortcutSection(_ref2) {
  var title = _ref2.title,
      shortcuts = _ref2.shortcuts,
      className = _ref2.className;
  return Object(external_wp_element_["createElement"])("section", {
    className: classnames_default()('edit-post-keyboard-shortcut-help-modal__section', className)
  }, !!title && Object(external_wp_element_["createElement"])("h2", {
    className: "edit-post-keyboard-shortcut-help-modal__section-title"
  }, title), Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_ShortcutList, {
    shortcuts: shortcuts
  }));
};

var keyboard_shortcut_help_modal_ShortcutCategorySection = function ShortcutCategorySection(_ref3) {
  var title = _ref3.title,
      categoryName = _ref3.categoryName,
      _ref3$additionalShort = _ref3.additionalShortcuts,
      additionalShortcuts = _ref3$additionalShort === void 0 ? [] : _ref3$additionalShort;
  var categoryShortcuts = Object(external_wp_data_["useSelect"])(function (select) {
    return select(external_wp_keyboardShortcuts_["store"]).getCategoryShortcuts(categoryName);
  }, [categoryName]);
  return Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_ShortcutSection, {
    title: title,
    shortcuts: categoryShortcuts.concat(additionalShortcuts)
  });
};

function KeyboardShortcutHelpModal(_ref4) {
  var isModalActive = _ref4.isModalActive,
      toggleModal = _ref4.toggleModal;
  Object(external_wp_keyboardShortcuts_["useShortcut"])('core/edit-post/keyboard-shortcuts', toggleModal, {
    bindGlobal: true
  });

  if (!isModalActive) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
    className: "edit-post-keyboard-shortcut-help-modal",
    title: Object(external_wp_i18n_["__"])('Keyboard shortcuts'),
    closeLabel: Object(external_wp_i18n_["__"])('Close'),
    onRequestClose: toggleModal
  }, Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_ShortcutSection, {
    className: "edit-post-keyboard-shortcut-help-modal__main-shortcuts",
    shortcuts: ['core/edit-post/keyboard-shortcuts']
  }), Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_ShortcutCategorySection, {
    title: Object(external_wp_i18n_["__"])('Global shortcuts'),
    categoryName: "global"
  }), Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_ShortcutCategorySection, {
    title: Object(external_wp_i18n_["__"])('Selection shortcuts'),
    categoryName: "selection"
  }), Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_ShortcutCategorySection, {
    title: Object(external_wp_i18n_["__"])('Block shortcuts'),
    categoryName: "block",
    additionalShortcuts: [{
      keyCombination: {
        character: '/'
      },
      description: Object(external_wp_i18n_["__"])('Change the block type after adding a new paragraph.'),

      /* translators: The forward-slash character. e.g. '/'. */
      ariaLabel: Object(external_wp_i18n_["__"])('Forward-slash')
    }]
  }), Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal_ShortcutSection, {
    title: Object(external_wp_i18n_["__"])('Text formatting'),
    shortcuts: textFormattingShortcuts
  }));
}
/* harmony default export */ var keyboard_shortcut_help_modal = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    isModalActive: select(store["a" /* store */]).isModalActive(MODAL_NAME)
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch, _ref5) {
  var isModalActive = _ref5.isModalActive;

  var _dispatch = dispatch(store["a" /* store */]),
      openModal = _dispatch.openModal,
      closeModal = _dispatch.closeModal;

  return {
    toggleModal: function toggleModal() {
      return isModalActive ? closeModal() : openModal(MODAL_NAME);
    }
  };
})])(KeyboardShortcutHelpModal));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/manage-blocks-modal/checklist.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




function BlockTypesChecklist(_ref) {
  var blockTypes = _ref.blockTypes,
      value = _ref.value,
      onItemChange = _ref.onItemChange;
  return Object(external_wp_element_["createElement"])("ul", {
    className: "edit-post-manage-blocks-modal__checklist"
  }, blockTypes.map(function (blockType) {
    return Object(external_wp_element_["createElement"])("li", {
      key: blockType.name,
      className: "edit-post-manage-blocks-modal__checklist-item"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
      label: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, blockType.title, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockIcon"], {
        icon: blockType.icon
      })),
      checked: value.includes(blockType.name),
      onChange: Object(external_lodash_["partial"])(onItemChange, blockType.name)
    }));
  }));
}

/* harmony default export */ var checklist = (BlockTypesChecklist);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/edit-post-settings/index.js
/**
 * WordPress dependencies
 */

var EditPostSettings = Object(external_wp_element_["createContext"])({});
/* harmony default export */ var edit_post_settings = (EditPostSettings);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/manage-blocks-modal/category.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





function BlockManagerCategory(_ref) {
  var instanceId = _ref.instanceId,
      title = _ref.title,
      blockTypes = _ref.blockTypes,
      hiddenBlockTypes = _ref.hiddenBlockTypes,
      toggleVisible = _ref.toggleVisible,
      toggleAllVisible = _ref.toggleAllVisible;
  var settings = Object(external_wp_element_["useContext"])(edit_post_settings);
  var allowedBlockTypes = settings.allowedBlockTypes;
  var filteredBlockTypes = Object(external_wp_element_["useMemo"])(function () {
    if (allowedBlockTypes === true) {
      return blockTypes;
    }

    return blockTypes.filter(function (_ref2) {
      var name = _ref2.name;
      return Object(external_lodash_["includes"])(allowedBlockTypes || [], name);
    });
  }, [allowedBlockTypes, blockTypes]);

  if (!filteredBlockTypes.length) {
    return null;
  }

  var checkedBlockNames = external_lodash_["without"].apply(void 0, [Object(external_lodash_["map"])(filteredBlockTypes, 'name')].concat(Object(toConsumableArray["a" /* default */])(hiddenBlockTypes)));
  var titleId = 'edit-post-manage-blocks-modal__category-title-' + instanceId;
  var isAllChecked = checkedBlockNames.length === filteredBlockTypes.length;
  var ariaChecked;

  if (isAllChecked) {
    ariaChecked = 'true';
  } else if (checkedBlockNames.length > 0) {
    ariaChecked = 'mixed';
  } else {
    ariaChecked = 'false';
  }

  return Object(external_wp_element_["createElement"])("div", {
    role: "group",
    "aria-labelledby": titleId,
    className: "edit-post-manage-blocks-modal__category"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["CheckboxControl"], {
    checked: isAllChecked,
    onChange: toggleAllVisible,
    className: "edit-post-manage-blocks-modal__category-title",
    "aria-checked": ariaChecked,
    label: Object(external_wp_element_["createElement"])("span", {
      id: titleId
    }, title)
  }), Object(external_wp_element_["createElement"])(checklist, {
    blockTypes: filteredBlockTypes,
    value: checkedBlockNames,
    onItemChange: toggleVisible
  }));
}

/* harmony default export */ var manage_blocks_modal_category = (Object(external_wp_compose_["compose"])([external_wp_compose_["withInstanceId"], Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(store["a" /* store */]),
      getPreference = _select.getPreference;

  return {
    hiddenBlockTypes: getPreference('hiddenBlockTypes')
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch, ownProps) {
  var _dispatch = dispatch(store["a" /* store */]),
      showBlockTypes = _dispatch.showBlockTypes,
      hideBlockTypes = _dispatch.hideBlockTypes;

  return {
    toggleVisible: function toggleVisible(blockName, nextIsChecked) {
      if (nextIsChecked) {
        showBlockTypes(blockName);
      } else {
        hideBlockTypes(blockName);
      }
    },
    toggleAllVisible: function toggleAllVisible(nextIsChecked) {
      var blockNames = Object(external_lodash_["map"])(ownProps.blockTypes, 'name');

      if (nextIsChecked) {
        showBlockTypes(blockNames);
      } else {
        hideBlockTypes(blockNames);
      }
    }
  };
})])(BlockManagerCategory));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/manage-blocks-modal/manager.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */




function BlockManager(_ref) {
  var search = _ref.search,
      setState = _ref.setState,
      blockTypes = _ref.blockTypes,
      categories = _ref.categories,
      hasBlockSupport = _ref.hasBlockSupport,
      isMatchingSearchTerm = _ref.isMatchingSearchTerm,
      numberOfHiddenBlocks = _ref.numberOfHiddenBlocks;
  // Filtering occurs here (as opposed to `withSelect`) to avoid
  // wasted renders by consequence of `Array#filter` producing
  // a new value reference on each call.
  blockTypes = blockTypes.filter(function (blockType) {
    return hasBlockSupport(blockType, 'inserter', true) && (!search || isMatchingSearchTerm(blockType, search)) && (!blockType.parent || Object(external_lodash_["includes"])(blockType.parent, 'core/post-content'));
  });
  return Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-manage-blocks-modal__content"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["TextControl"], {
    type: "search",
    label: Object(external_wp_i18n_["__"])('Search for a block'),
    value: search,
    onChange: function onChange(nextSearch) {
      return setState({
        search: nextSearch
      });
    },
    className: "edit-post-manage-blocks-modal__search"
  }), !!numberOfHiddenBlocks && Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-manage-blocks-modal__disabled-blocks-count"
  }, Object(external_wp_i18n_["sprintf"])(
  /* translators: %d: number of blocks. */
  Object(external_wp_i18n_["_n"])('%d block is disabled.', '%d blocks are disabled.', numberOfHiddenBlocks), numberOfHiddenBlocks)), Object(external_wp_element_["createElement"])("div", {
    tabIndex: "0",
    role: "region",
    "aria-label": Object(external_wp_i18n_["__"])('Available block types'),
    className: "edit-post-manage-blocks-modal__results"
  }, blockTypes.length === 0 && Object(external_wp_element_["createElement"])("p", {
    className: "edit-post-manage-blocks-modal__no-results"
  }, Object(external_wp_i18n_["__"])('No blocks found.')), categories.map(function (category) {
    return Object(external_wp_element_["createElement"])(manage_blocks_modal_category, {
      key: category.slug,
      title: category.title,
      blockTypes: Object(external_lodash_["filter"])(blockTypes, {
        category: category.slug
      })
    });
  }), Object(external_wp_element_["createElement"])(manage_blocks_modal_category, {
    title: Object(external_wp_i18n_["__"])('Uncategorized'),
    blockTypes: Object(external_lodash_["filter"])(blockTypes, function (_ref2) {
      var category = _ref2.category;
      return !category;
    })
  })));
}

/* harmony default export */ var manager = (Object(external_wp_compose_["compose"])([Object(external_wp_compose_["withState"])({
  search: ''
}), Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(external_wp_blocks_["store"]),
      getBlockTypes = _select.getBlockTypes,
      getCategories = _select.getCategories,
      hasBlockSupport = _select.hasBlockSupport,
      isMatchingSearchTerm = _select.isMatchingSearchTerm;

  var _select2 = select(store["a" /* store */]),
      getPreference = _select2.getPreference;

  var hiddenBlockTypes = getPreference('hiddenBlockTypes');
  var numberOfHiddenBlocks = Object(external_lodash_["isArray"])(hiddenBlockTypes) && hiddenBlockTypes.length;
  return {
    blockTypes: getBlockTypes(),
    categories: getCategories(),
    hasBlockSupport: hasBlockSupport,
    isMatchingSearchTerm: isMatchingSearchTerm,
    numberOfHiddenBlocks: numberOfHiddenBlocks
  };
})])(BlockManager));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/manage-blocks-modal/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



/**
 * Unique identifier for Manage Blocks modal.
 *
 * @type {string}
 */

var manage_blocks_modal_MODAL_NAME = 'edit-post/manage-blocks';
function ManageBlocksModal(_ref) {
  var isActive = _ref.isActive,
      closeModal = _ref.closeModal;

  if (!isActive) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
    className: "edit-post-manage-blocks-modal",
    title: Object(external_wp_i18n_["__"])('Block Manager'),
    closeLabel: Object(external_wp_i18n_["__"])('Close'),
    onRequestClose: closeModal
  }, Object(external_wp_element_["createElement"])(manager, null));
}
/* harmony default export */ var manage_blocks_modal = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select(store["a" /* store */]),
      isModalActive = _select.isModalActive;

  return {
    isActive: isModalActive(manage_blocks_modal_MODAL_NAME)
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(store["a" /* store */]),
      closeModal = _dispatch.closeModal;

  return {
    closeModal: closeModal
  };
})])(ManageBlocksModal));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/section.js


var section_Section = function Section(_ref) {
  var description = _ref.description,
      title = _ref.title,
      children = _ref.children;
  return Object(external_wp_element_["createElement"])("section", {
    className: "edit-post-preferences-modal__section"
  }, Object(external_wp_element_["createElement"])("h2", {
    className: "edit-post-preferences-modal__section-title"
  }, title), description && Object(external_wp_element_["createElement"])("p", {
    className: "edit-post-preferences-modal__section-description"
  }, description), children);
};

/* harmony default export */ var preferences_modal_section = (section_Section);

// EXTERNAL MODULE: ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/index.js + 6 modules
var options = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/meta-boxes-section.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function MetaBoxesSection(_ref) {
  var areCustomFieldsRegistered = _ref.areCustomFieldsRegistered,
      metaBoxes = _ref.metaBoxes,
      sectionProps = Object(objectWithoutProperties["a" /* default */])(_ref, ["areCustomFieldsRegistered", "metaBoxes"]);

  // The 'Custom Fields' meta box is a special case that we handle separately.
  var thirdPartyMetaBoxes = Object(external_lodash_["filter"])(metaBoxes, function (_ref2) {
    var id = _ref2.id;
    return id !== 'postcustom';
  });

  if (!areCustomFieldsRegistered && thirdPartyMetaBoxes.length === 0) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(preferences_modal_section, sectionProps, areCustomFieldsRegistered && Object(external_wp_element_["createElement"])(options["a" /* EnableCustomFieldsOption */], {
    label: Object(external_wp_i18n_["__"])('Custom fields')
  }), Object(external_lodash_["map"])(thirdPartyMetaBoxes, function (_ref3) {
    var id = _ref3.id,
        title = _ref3.title;
    return Object(external_wp_element_["createElement"])(options["c" /* EnablePanelOption */], {
      key: id,
      label: title,
      panelName: "meta-box-".concat(id)
    });
  }));
}
/* harmony default export */ var meta_boxes_section = (Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditorSettings = _select.getEditorSettings;

  var _select2 = select(store["a" /* store */]),
      getAllMetaBoxes = _select2.getAllMetaBoxes;

  return {
    // This setting should not live in the block editor's store.
    areCustomFieldsRegistered: getEditorSettings().enableCustomFields !== undefined,
    metaBoxes: getAllMetaBoxes()
  };
})(MetaBoxesSection));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */





var preferences_modal_MODAL_NAME = 'edit-post/preferences';
var PREFERENCES_MENU = 'preferences-menu';
function PreferencesModal() {
  var isLargeViewport = Object(external_wp_compose_["useViewportMatch"])('medium');

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      closeModal = _useDispatch.closeModal;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(external_wp_editor_["store"]),
        getEditedPostAttribute = _select.getEditedPostAttribute;

    var _select2 = select(external_wp_coreData_["store"]),
        getPostType = _select2.getPostType;

    var postType = getPostType(getEditedPostAttribute('type'));
    return {
      isModalActive: select(store["a" /* store */]).isModalActive(preferences_modal_MODAL_NAME),
      isViewable: Object(external_lodash_["get"])(postType, ['viewable'], false)
    };
  }, []),
      isModalActive = _useSelect.isModalActive,
      isViewable = _useSelect.isViewable;

  var showBlockBreadcrumbsOption = Object(external_wp_data_["useSelect"])(function (select) {
    var _select3 = select(external_wp_editor_["store"]),
        getEditorSettings = _select3.getEditorSettings;

    var _select4 = select(store["a" /* store */]),
        getEditorMode = _select4.getEditorMode,
        isFeatureActive = _select4.isFeatureActive;

    var mode = getEditorMode();
    var isRichEditingEnabled = getEditorSettings().richEditingEnabled;
    var hasReducedUI = isFeatureActive('reducedUI');
    return !hasReducedUI && isLargeViewport && isRichEditingEnabled && mode === 'visual';
  }, [isLargeViewport]);
  var sections = Object(external_wp_element_["useMemo"])(function () {
    return [{
      name: 'general',
      tabLabel: Object(external_wp_i18n_["__"])('General'),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, isLargeViewport && Object(external_wp_element_["createElement"])(preferences_modal_section, {
        title: Object(external_wp_i18n_["__"])('Choose your own experience')
      }, Object(external_wp_element_["createElement"])(options["e" /* EnablePublishSidebarOption */], {
        help: Object(external_wp_i18n_["__"])('Review settings such as categories and tags.'),
        label: Object(external_wp_i18n_["__"])('Include pre-publish checklist')
      })), Object(external_wp_element_["createElement"])(preferences_modal_section, {
        title: Object(external_wp_i18n_["__"])('Decide what to focus on')
      }, Object(external_wp_element_["createElement"])(options["b" /* EnableFeature */], {
        featureName: "reducedUI",
        help: Object(external_wp_i18n_["__"])('Compacts options and outlines in the toolbar.'),
        label: Object(external_wp_i18n_["__"])('Reduce the interface')
      }), Object(external_wp_element_["createElement"])(options["b" /* EnableFeature */], {
        featureName: "focusMode",
        help: Object(external_wp_i18n_["__"])('Highlights the current block and fades other content.'),
        label: Object(external_wp_i18n_["__"])('Spotlight mode')
      }), showBlockBreadcrumbsOption && Object(external_wp_element_["createElement"])(options["b" /* EnableFeature */], {
        featureName: "showBlockBreadcrumbs",
        help: Object(external_wp_i18n_["__"])('Shows block breadcrumbs at the bottom of the editor.'),
        label: Object(external_wp_i18n_["__"])('Display block breadcrumbs')
      })))
    }, {
      name: 'appearance',
      tabLabel: Object(external_wp_i18n_["__"])('Appearance'),
      content: Object(external_wp_element_["createElement"])(preferences_modal_section, {
        title: Object(external_wp_i18n_["__"])('Choose the way it looks')
      }, Object(external_wp_element_["createElement"])(options["b" /* EnableFeature */], {
        featureName: "showIconLabels",
        help: Object(external_wp_i18n_["__"])('Shows text instead of icons in toolbar.'),
        label: Object(external_wp_i18n_["__"])('Display button labels')
      }), Object(external_wp_element_["createElement"])(options["b" /* EnableFeature */], {
        featureName: "themeStyles",
        help: Object(external_wp_i18n_["__"])('Make the editor look like your theme.'),
        label: Object(external_wp_i18n_["__"])('Use theme styles')
      }))
    }, {
      name: 'blocks',
      tabLabel: Object(external_wp_i18n_["__"])('Blocks'),
      content: Object(external_wp_element_["createElement"])(preferences_modal_section, {
        title: Object(external_wp_i18n_["__"])('Choose how you interact with blocks')
      }, Object(external_wp_element_["createElement"])(options["b" /* EnableFeature */], {
        featureName: "mostUsedBlocks",
        help: Object(external_wp_i18n_["__"])('Places the most frequent blocks in the block library.'),
        label: Object(external_wp_i18n_["__"])('Show most used blocks')
      }), Object(external_wp_element_["createElement"])(options["b" /* EnableFeature */], {
        featureName: "keepCaretInsideBlock",
        help: Object(external_wp_i18n_["__"])('Aids screen readers by stopping text caret from leaving blocks.'),
        label: Object(external_wp_i18n_["__"])('Contain text cursor inside block')
      }))
    }, {
      name: 'panels',
      tabLabel: Object(external_wp_i18n_["__"])('Panels'),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(preferences_modal_section, {
        title: Object(external_wp_i18n_["__"])('Document settings'),
        description: Object(external_wp_i18n_["__"])('Choose what displays in the panel.')
      }, Object(external_wp_element_["createElement"])(options["d" /* EnablePluginDocumentSettingPanelOption */].Slot, null), isViewable && Object(external_wp_element_["createElement"])(options["c" /* EnablePanelOption */], {
        label: Object(external_wp_i18n_["__"])('Permalink'),
        panelName: "post-link"
      }), Object(external_wp_element_["createElement"])(external_wp_editor_["PostTaxonomies"], {
        taxonomyWrapper: function taxonomyWrapper(content, taxonomy) {
          return Object(external_wp_element_["createElement"])(options["c" /* EnablePanelOption */], {
            label: Object(external_lodash_["get"])(taxonomy, ['labels', 'menu_name']),
            panelName: "taxonomy-panel-".concat(taxonomy.slug)
          });
        }
      }), Object(external_wp_element_["createElement"])(external_wp_editor_["PostFeaturedImageCheck"], null, Object(external_wp_element_["createElement"])(options["c" /* EnablePanelOption */], {
        label: Object(external_wp_i18n_["__"])('Featured image'),
        panelName: "featured-image"
      })), Object(external_wp_element_["createElement"])(external_wp_editor_["PostExcerptCheck"], null, Object(external_wp_element_["createElement"])(options["c" /* EnablePanelOption */], {
        label: Object(external_wp_i18n_["__"])('Excerpt'),
        panelName: "post-excerpt"
      })), Object(external_wp_element_["createElement"])(external_wp_editor_["PostTypeSupportCheck"], {
        supportKeys: ['comments', 'trackbacks']
      }, Object(external_wp_element_["createElement"])(options["c" /* EnablePanelOption */], {
        label: Object(external_wp_i18n_["__"])('Discussion'),
        panelName: "discussion-panel"
      })), Object(external_wp_element_["createElement"])(external_wp_editor_["PageAttributesCheck"], null, Object(external_wp_element_["createElement"])(options["c" /* EnablePanelOption */], {
        label: Object(external_wp_i18n_["__"])('Page attributes'),
        panelName: "page-attributes"
      }))), Object(external_wp_element_["createElement"])(preferences_modal_section, {
        title: Object(external_wp_i18n_["__"])('Additional'),
        description: Object(external_wp_i18n_["__"])('Add extra areas to the editor.')
      }, Object(external_wp_element_["createElement"])(meta_boxes_section, null)))
    }];
  }, [isViewable, isLargeViewport, showBlockBreadcrumbsOption]); // This is also used to sync the two different rendered components
  // between small and large viewports.

  var _useState = Object(external_wp_element_["useState"])(PREFERENCES_MENU),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      activeMenu = _useState2[0],
      setActiveMenu = _useState2[1];
  /**
   * Create helper objects from `sections` for easier data handling.
   * `tabs` is used for creating the `TabPanel` and `sectionsContentMap`
   * is used for easier access to active tab's content.
   */


  var _useMemo = Object(external_wp_element_["useMemo"])(function () {
    return sections.reduce(function (accumulator, _ref) {
      var name = _ref.name,
          title = _ref.tabLabel,
          content = _ref.content;
      accumulator.tabs.push({
        name: name,
        title: title
      });
      accumulator.sectionsContentMap[name] = content;
      return accumulator;
    }, {
      tabs: [],
      sectionsContentMap: {}
    });
  }, [sections]),
      tabs = _useMemo.tabs,
      sectionsContentMap = _useMemo.sectionsContentMap;

  var getCurrentTab = Object(external_wp_element_["useCallback"])(function (tab) {
    return sectionsContentMap[tab.name] || null;
  }, [sectionsContentMap]);

  if (!isModalActive) {
    return null;
  }

  var modalContent; // We render different components based on the viewport size.

  if (isLargeViewport) {
    modalContent = Object(external_wp_element_["createElement"])(external_wp_components_["TabPanel"], {
      className: "edit-post-preferences__tabs",
      tabs: tabs,
      initialTabName: activeMenu !== PREFERENCES_MENU ? activeMenu : undefined,
      onSelect: setActiveMenu,
      orientation: "vertical"
    }, getCurrentTab);
  } else {
    modalContent = Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalNavigation"], {
      activeMenu: activeMenu,
      onActivateMenu: setActiveMenu
    }, Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalNavigationMenu"], {
      menu: PREFERENCES_MENU
    }, tabs.map(function (tab) {
      return Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalNavigationItem"], {
        key: tab.name,
        title: tab.title,
        navigateToMenu: tab.name
      });
    })), sections.map(function (section) {
      return Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalNavigationMenu"], {
        key: "".concat(section.name, "-menu"),
        menu: section.name,
        title: section.tabLabel,
        parentMenu: PREFERENCES_MENU
      }, Object(external_wp_element_["createElement"])(external_wp_components_["__experimentalNavigationItem"], null, section.content));
    }));
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["Modal"], {
    className: "edit-post-preferences-modal",
    title: Object(external_wp_i18n_["__"])('Preferences'),
    closeLabel: Object(external_wp_i18n_["__"])('Close'),
    onRequestClose: closeModal
  }, modalContent);
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/browser-url/index.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */



/**
 * Returns the Post's Edit URL.
 *
 * @param {number} postId Post ID.
 *
 * @return {string} Post edit URL.
 */

function getPostEditURL(postId) {
  return Object(external_wp_url_["addQueryArgs"])('post.php', {
    post: postId,
    action: 'edit'
  });
}
/**
 * Returns the Post's Trashed URL.
 *
 * @param {number} postId    Post ID.
 * @param {string} postType Post Type.
 *
 * @return {string} Post trashed URL.
 */

function getPostTrashedURL(postId, postType) {
  return Object(external_wp_url_["addQueryArgs"])('edit.php', {
    trashed: 1,
    post_type: postType,
    ids: postId
  });
}
var browser_url_BrowserURL = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(BrowserURL, _Component);

  var _super = _createSuper(BrowserURL);

  function BrowserURL() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, BrowserURL);

    _this = _super.apply(this, arguments);
    _this.state = {
      historyId: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(BrowserURL, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          postId = _this$props.postId,
          postStatus = _this$props.postStatus,
          postType = _this$props.postType,
          isSavingPost = _this$props.isSavingPost;
      var historyId = this.state.historyId; // Posts are still dirty while saving so wait for saving to finish
      // to avoid the unsaved changes warning when trashing posts.

      if (postStatus === 'trash' && !isSavingPost) {
        this.setTrashURL(postId, postType);
        return;
      }

      if ((postId !== prevProps.postId || postId !== historyId) && postStatus !== 'auto-draft' && postId) {
        this.setBrowserURL(postId);
      }
    }
    /**
     * Navigates the browser to the post trashed URL to show a notice about the trashed post.
     *
     * @param {number} postId    Post ID.
     * @param {string} postType  Post Type.
     */

  }, {
    key: "setTrashURL",
    value: function setTrashURL(postId, postType) {
      window.location.href = getPostTrashedURL(postId, postType);
    }
    /**
     * Replaces the browser URL with a post editor link for the given post ID.
     *
     * Note it is important that, since this function may be called when the
     * editor first loads, the result generated `getPostEditURL` matches that
     * produced by the server. Otherwise, the URL will change unexpectedly.
     *
     * @param {number} postId Post ID for which to generate post editor URL.
     */

  }, {
    key: "setBrowserURL",
    value: function setBrowserURL(postId) {
      window.history.replaceState({
        id: postId
      }, 'Post ' + postId, getPostEditURL(postId));
      this.setState(function () {
        return {
          historyId: postId
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return BrowserURL;
}(external_wp_element_["Component"]);
/* harmony default export */ var browser_url = (Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getCurrentPost = _select.getCurrentPost,
      isSavingPost = _select.isSavingPost;

  var post = getCurrentPost();
  var id = post.id,
      status = post.status,
      type = post.type;
  var isTemplate = ['wp_template', 'wp_template_part'].includes(type);

  if (isTemplate) {
    id = post.wp_id;
  }

  return {
    postId: id,
    postStatus: status,
    postType: type,
    isSavingPost: isSavingPost()
  };
})(browser_url_BrowserURL));

// EXTERNAL MODULE: external ["wp","primitives"]
var external_wp_primitives_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/wordpress.js


/**
 * WordPress dependencies
 */

var wordpress = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-2 -2 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  d: "M20 10c0-5.51-4.49-10-10-10C4.48 0 0 4.49 0 10c0 5.52 4.48 10 10 10 5.51 0 10-4.48 10-10zM7.78 15.37L4.37 6.22c.55-.02 1.17-.08 1.17-.08.5-.06.44-1.13-.06-1.11 0 0-1.45.11-2.37.11-.18 0-.37 0-.58-.01C4.12 2.69 6.87 1.11 10 1.11c2.33 0 4.45.87 6.05 2.34-.68-.11-1.65.39-1.65 1.58 0 .74.45 1.36.9 2.1.35.61.55 1.36.55 2.46 0 1.49-1.4 5-1.4 5l-3.03-8.37c.54-.02.82-.17.82-.17.5-.05.44-1.25-.06-1.22 0 0-1.44.12-2.38.12-.87 0-2.33-.12-2.33-.12-.5-.03-.56 1.2-.06 1.22l.92.08 1.26 3.41zM17.41 10c.24-.64.74-1.87.43-4.25.7 1.29 1.05 2.71 1.05 4.25 0 3.29-1.73 6.24-4.4 7.78.97-2.59 1.94-5.2 2.92-7.78zM6.1 18.09C3.12 16.65 1.11 13.53 1.11 10c0-1.3.23-2.48.72-3.59C3.25 10.3 4.67 14.2 6.1 18.09zm4.03-6.63l2.58 6.98c-.86.29-1.76.45-2.71.45-.79 0-1.57-.11-2.29-.33.81-2.38 1.62-4.74 2.42-7.1z"
}));
/* harmony default export */ var library_wordpress = (wordpress);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/fullscreen-mode-close/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */



function FullscreenModeClose(_ref) {
  var showTooltip = _ref.showTooltip,
      icon = _ref.icon,
      href = _ref.href;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select('core/editor'),
        getCurrentPostType = _select.getCurrentPostType;

    var _select2 = select(store["a" /* store */]),
        isFeatureActive = _select2.isFeatureActive;

    var _select3 = select('core/data'),
        isResolving = _select3.isResolving;

    var _select4 = select('core'),
        getEntityRecord = _select4.getEntityRecord,
        getPostType = _select4.getPostType;

    var siteData = getEntityRecord('root', '__unstableBase', undefined) || {};
    return {
      isActive: isFeatureActive('fullscreenMode'),
      isRequestingSiteIcon: isResolving('core', 'getEntityRecord', ['root', '__unstableBase', undefined]),
      postType: getPostType(getCurrentPostType()),
      siteIconUrl: siteData.site_icon_url
    };
  }, []),
      isActive = _useSelect.isActive,
      isRequestingSiteIcon = _useSelect.isRequestingSiteIcon,
      postType = _useSelect.postType,
      siteIconUrl = _useSelect.siteIconUrl;

  if (!isActive || !postType) {
    return null;
  }

  var buttonIcon = Object(external_wp_element_["createElement"])(external_wp_components_["Icon"], {
    size: "36px",
    icon: library_wordpress
  });

  if (siteIconUrl) {
    buttonIcon = Object(external_wp_element_["createElement"])("img", {
      alt: Object(external_wp_i18n_["__"])('Site Icon'),
      className: "edit-post-fullscreen-mode-close_site-icon",
      src: siteIconUrl
    });
  }

  if (isRequestingSiteIcon) {
    buttonIcon = null;
  } // Override default icon if custom icon is provided via props.


  if (icon) {
    buttonIcon = Object(external_wp_element_["createElement"])(external_wp_components_["Icon"], {
      size: "36px",
      icon: icon
    });
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "edit-post-fullscreen-mode-close has-icon",
    href: href !== null && href !== void 0 ? href : Object(external_wp_url_["addQueryArgs"])('edit.php', {
      post_type: postType.slug
    }),
    label: Object(external_lodash_["get"])(postType, ['labels', 'view_items'], Object(external_wp_i18n_["__"])('Back')),
    showTooltip: showTooltip
  }, buttonIcon);
}

/* harmony default export */ var fullscreen_mode_close = (FullscreenModeClose);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/plus.js
var plus = __webpack_require__(214);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/template-title/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function TemplateTitle() {
  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(external_wp_editor_["store"]),
        getEditedPostAttribute = _select.getEditedPostAttribute;

    var _select2 = select(external_wp_coreData_["store"]),
        __experimentalGetTemplateForLink = _select2.__experimentalGetTemplateForLink;

    var _select3 = select(store["a" /* store */]),
        isEditingTemplate = _select3.isEditingTemplate;

    var link = getEditedPostAttribute('link');

    var _isEditing = isEditingTemplate();

    return {
      template: _isEditing ? __experimentalGetTemplateForLink(link) : null,
      isEditing: _isEditing
    };
  }, []),
      template = _useSelect.template,
      isEditing = _useSelect.isEditing;

  if (!isEditing || !template) {
    return null;
  }

  return Object(external_wp_element_["createElement"])("span", {
    className: "edit-post-template-title"
  },
  /* translators: 1: Template name. */
  Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('Editing template: %s'), template.slug));
}

/* harmony default export */ var template_title = (TemplateTitle);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/header-toolbar/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









/**
 * Internal dependencies
 */




function HeaderToolbar() {
  var inserterButton = Object(external_wp_element_["useRef"])();

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      setIsInserterOpened = _useDispatch.setIsInserterOpened;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select('core/block-editor'),
        hasInserterItems = _select.hasInserterItems,
        getBlockRootClientId = _select.getBlockRootClientId,
        getBlockSelectionEnd = _select.getBlockSelectionEnd;

    return {
      hasFixedToolbar: select(store["a" /* store */]).isFeatureActive('fixedToolbar'),
      // This setting (richEditingEnabled) should not live in the block editor's setting.
      isInserterEnabled: select(store["a" /* store */]).getEditorMode() === 'visual' && select('core/editor').getEditorSettings().richEditingEnabled && hasInserterItems(getBlockRootClientId(getBlockSelectionEnd())),
      isInserterOpened: select(store["a" /* store */]).isInserterOpened(),
      isTextModeEnabled: select(store["a" /* store */]).getEditorMode() === 'text',
      previewDeviceType: select(store["a" /* store */]).__experimentalGetPreviewDeviceType(),
      showIconLabels: select(store["a" /* store */]).isFeatureActive('showIconLabels'),
      isNavigationTool: select('core/block-editor').isNavigationMode(),
      isTemplateMode: select(store["a" /* store */]).isEditingTemplate()
    };
  }, []),
      hasFixedToolbar = _useSelect.hasFixedToolbar,
      isInserterEnabled = _useSelect.isInserterEnabled,
      isInserterOpened = _useSelect.isInserterOpened,
      isTextModeEnabled = _useSelect.isTextModeEnabled,
      previewDeviceType = _useSelect.previewDeviceType,
      showIconLabels = _useSelect.showIconLabels,
      isNavigationTool = _useSelect.isNavigationTool,
      isTemplateMode = _useSelect.isTemplateMode;

  var isLargeViewport = Object(external_wp_compose_["useViewportMatch"])('medium');
  var isWideViewport = Object(external_wp_compose_["useViewportMatch"])('wide');
  var isSmallViewport = Object(external_wp_compose_["useViewportMatch"])('small', '<');

  var _useDispatch2 = Object(external_wp_data_["useDispatch"])('core/block-editor'),
      setNavigationMode = _useDispatch2.setNavigationMode;

  var displayBlockToolbar = !isLargeViewport || previewDeviceType !== 'Desktop' || hasFixedToolbar;
  var toolbarAriaLabel = displayBlockToolbar ?
  /* translators: accessibility text for the editor toolbar when Top Toolbar is on */
  Object(external_wp_i18n_["__"])('Document and block tools') :
  /* translators: accessibility text for the editor toolbar when Top Toolbar is off */
  Object(external_wp_i18n_["__"])('Document tools');

  var onSwitchMode = function onSwitchMode(mode) {
    setNavigationMode(mode === 'edit' ? false : true);
  };

  var overflowItems = Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarItem"], {
    as: external_wp_editor_["TableOfContents"],
    hasOutlineItemsDisabled: isTextModeEnabled,
    repositionDropdown: showIconLabels && !isWideViewport,
    showTooltip: !showIconLabels,
    isTertiary: showIconLabels
  }), Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarItem"], {
    as: external_wp_blockEditor_["BlockNavigationDropdown"],
    isDisabled: isTextModeEnabled,
    showTooltip: !showIconLabels,
    isTertiary: showIconLabels
  }));
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["NavigableToolbar"], {
    className: "edit-post-header-toolbar",
    "aria-label": toolbarAriaLabel
  }, Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-header-toolbar__left"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarItem"], {
    ref: inserterButton,
    as: external_wp_components_["Button"],
    className: "edit-post-header-toolbar__inserter-toggle",
    isPrimary: true,
    isPressed: isInserterOpened,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
    },
    onClick: function onClick() {
      if (isInserterOpened) {
        // Focusing the inserter button closes the inserter popover
        inserterButton.current.focus();
      } else {
        setIsInserterOpened(true);
      }
    },
    disabled: !isInserterEnabled,
    icon: plus["a" /* default */]
    /* translators: button label text should, if possible, be under 16
    characters. */
    ,
    label: Object(external_wp_i18n_["_x"])('Add block', 'Generic label for block inserter button'),
    showTooltip: !showIconLabels
  }, showIconLabels && Object(external_wp_i18n_["__"])('Add')), (isWideViewport || !showIconLabels) && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, isLargeViewport && Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarItem"], {
    as: external_wp_blockEditor_["ToolSelector"],
    showTooltip: !showIconLabels,
    isTertiary: showIconLabels,
    disabled: isTextModeEnabled
  }), Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarItem"], {
    as: external_wp_editor_["EditorHistoryUndo"],
    showTooltip: !showIconLabels,
    isTertiary: showIconLabels
  }), Object(external_wp_element_["createElement"])(external_wp_components_["ToolbarItem"], {
    as: external_wp_editor_["EditorHistoryRedo"],
    showTooltip: !showIconLabels,
    isTertiary: showIconLabels
  }), overflowItems), !isWideViewport && !isSmallViewport && showIconLabels && Object(external_wp_element_["createElement"])(external_wp_components_["DropdownMenu"], {
    position: "bottom right",
    label:
    /* translators: button label text should, if possible, be under 16
    characters. */
    Object(external_wp_i18n_["__"])('Tools')
  }, function () {
    return Object(external_wp_element_["createElement"])("div", {
      className: "edit-post-header__dropdown"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
      label: Object(external_wp_i18n_["__"])('Modes')
    }, Object(external_wp_element_["createElement"])(external_wp_components_["MenuItemsChoice"], {
      value: isNavigationTool ? 'select' : 'edit',
      onSelect: onSwitchMode,
      choices: [{
        value: 'edit',
        label: Object(external_wp_i18n_["__"])('Edit')
      }, {
        value: 'select',
        label: Object(external_wp_i18n_["__"])('Select')
      }]
    })), Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
      label: Object(external_wp_i18n_["__"])('Edit')
    }, Object(external_wp_element_["createElement"])(external_wp_editor_["EditorHistoryUndo"], {
      showTooltip: !showIconLabels,
      isTertiary: showIconLabels
    }), Object(external_wp_element_["createElement"])(external_wp_editor_["EditorHistoryRedo"], {
      showTooltip: !showIconLabels,
      isTertiary: showIconLabels
    })), Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], null, overflowItems));
  })), Object(external_wp_element_["createElement"])(template_title, null), displayBlockToolbar && Object(external_wp_element_["createElement"])("div", {
    className: classnames_default()('edit-post-header-toolbar__block-toolbar', {
      'is-pushed-down': isTemplateMode
    })
  }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockToolbar"], {
    hideDragHandle: true
  })));
}

/* harmony default export */ var header_toolbar = (HeaderToolbar);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/more-vertical.js
var more_vertical = __webpack_require__(305);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/mode-switcher/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Set of available mode options.
 *
 * @type {Array}
 */

var MODES = [{
  value: 'visual',
  label: Object(external_wp_i18n_["__"])('Visual editor')
}, {
  value: 'text',
  label: Object(external_wp_i18n_["__"])('Code editor')
}];

function ModeSwitcher() {
  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      shortcut: select(external_wp_keyboardShortcuts_["store"]).getShortcutRepresentation('core/edit-post/toggle-mode'),
      isRichEditingEnabled: select('core/editor').getEditorSettings().richEditingEnabled,
      isCodeEditingEnabled: select('core/editor').getEditorSettings().codeEditingEnabled,
      mode: select(store["a" /* store */]).getEditorMode()
    };
  }, []),
      shortcut = _useSelect.shortcut,
      isRichEditingEnabled = _useSelect.isRichEditingEnabled,
      isCodeEditingEnabled = _useSelect.isCodeEditingEnabled,
      mode = _useSelect.mode;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      switchEditorMode = _useDispatch.switchEditorMode;

  if (!isRichEditingEnabled || !isCodeEditingEnabled) {
    return null;
  }

  var choices = MODES.map(function (choice) {
    if (choice.value !== mode) {
      return _objectSpread(_objectSpread({}, choice), {}, {
        shortcut: shortcut
      });
    }

    return choice;
  });
  return Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
    label: Object(external_wp_i18n_["__"])('Editor')
  }, Object(external_wp_element_["createElement"])(external_wp_components_["MenuItemsChoice"], {
    choices: choices,
    value: mode,
    onSelect: switchEditorMode
  }));
}

/* harmony default export */ var mode_switcher = (ModeSwitcher);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/preferences-menu-item/index.js


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function PreferencesMenuItem() {
  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      openModal = _useDispatch.openModal;

  return Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    onClick: function onClick() {
      openModal('edit-post/preferences');
    }
  }, Object(external_wp_i18n_["__"])('Preferences'));
}

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js
var check = __webpack_require__(161);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/feature-toggle/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function FeatureToggle(_ref) {
  var onToggle = _ref.onToggle,
      isActive = _ref.isActive,
      label = _ref.label,
      info = _ref.info,
      messageActivated = _ref.messageActivated,
      messageDeactivated = _ref.messageDeactivated,
      shortcut = _ref.shortcut;

  var speakMessage = function speakMessage() {
    if (isActive) {
      Object(external_wp_a11y_["speak"])(messageDeactivated || Object(external_wp_i18n_["__"])('Feature deactivated'));
    } else {
      Object(external_wp_a11y_["speak"])(messageActivated || Object(external_wp_i18n_["__"])('Feature activated'));
    }
  };

  return Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
    icon: isActive && check["a" /* default */],
    isSelected: isActive,
    onClick: Object(external_lodash_["flow"])(onToggle, speakMessage),
    role: "menuitemcheckbox",
    info: info,
    shortcut: shortcut
  }, label);
}

/* harmony default export */ var feature_toggle = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select, _ref2) {
  var feature = _ref2.feature;
  return {
    isActive: select(store["a" /* store */]).isFeatureActive(feature)
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch, ownProps) {
  return {
    onToggle: function onToggle() {
      dispatch(store["a" /* store */]).toggleFeature(ownProps.feature);
    }
  };
})])(FeatureToggle));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/writing-menu/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function WritingMenu() {
  var isLargeViewport = Object(external_wp_compose_["useViewportMatch"])('medium');

  if (!isLargeViewport) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], {
    label: Object(external_wp_i18n_["_x"])('View', 'noun')
  }, Object(external_wp_element_["createElement"])(feature_toggle, {
    feature: "fixedToolbar",
    label: Object(external_wp_i18n_["__"])('Top toolbar'),
    info: Object(external_wp_i18n_["__"])('Access all block and document tools in a single place'),
    messageActivated: Object(external_wp_i18n_["__"])('Top toolbar activated'),
    messageDeactivated: Object(external_wp_i18n_["__"])('Top toolbar deactivated')
  }), Object(external_wp_element_["createElement"])(feature_toggle, {
    feature: "focusMode",
    label: Object(external_wp_i18n_["__"])('Spotlight mode'),
    info: Object(external_wp_i18n_["__"])('Focus on one block at a time'),
    messageActivated: Object(external_wp_i18n_["__"])('Spotlight mode activated'),
    messageDeactivated: Object(external_wp_i18n_["__"])('Spotlight mode deactivated')
  }), Object(external_wp_element_["createElement"])(feature_toggle, {
    feature: "fullscreenMode",
    label: Object(external_wp_i18n_["__"])('Fullscreen mode'),
    info: Object(external_wp_i18n_["__"])('Work without distraction'),
    messageActivated: Object(external_wp_i18n_["__"])('Fullscreen mode activated'),
    messageDeactivated: Object(external_wp_i18n_["__"])('Fullscreen mode deactivated'),
    shortcut: external_wp_keycodes_["displayShortcut"].secondary('f')
  }));
}

/* harmony default export */ var writing_menu = (WritingMenu);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/more-menu/index.js



function more_menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function more_menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { more_menu_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { more_menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





var POPOVER_PROPS = {
  className: 'edit-post-more-menu__content',
  position: 'bottom left'
};
var TOGGLE_PROPS = {
  tooltipPosition: 'bottom'
};

var more_menu_MoreMenu = function MoreMenu(_ref) {
  var showIconLabels = _ref.showIconLabels;
  var isLargeViewport = Object(external_wp_compose_["useViewportMatch"])('large');
  return Object(external_wp_element_["createElement"])(external_wp_components_["DropdownMenu"], {
    className: "edit-post-more-menu",
    icon: more_vertical["a" /* default */]
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    label: Object(external_wp_i18n_["__"])('Options'),
    popoverProps: POPOVER_PROPS,
    toggleProps: more_menu_objectSpread({
      showTooltip: !showIconLabels,
      isTertiary: showIconLabels
    }, TOGGLE_PROPS)
  }, function (_ref2) {
    var onClose = _ref2.onClose;
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, showIconLabels && !isLargeViewport && Object(external_wp_element_["createElement"])(build_module["f" /* PinnedItems */].Slot, {
      className: showIconLabels && 'show-icon-labels',
      scope: "core/edit-post"
    }), Object(external_wp_element_["createElement"])(writing_menu, null), Object(external_wp_element_["createElement"])(mode_switcher, null), Object(external_wp_element_["createElement"])(build_module["a" /* ActionItem */].Slot, {
      name: "core/edit-post/plugin-more-menu",
      label: Object(external_wp_i18n_["__"])('Plugins'),
      as: [external_wp_components_["MenuGroup"], external_wp_components_["MenuItem"]],
      fillProps: {
        onClick: onClose
      }
    }), Object(external_wp_element_["createElement"])(tools_more_menu_group.Slot, {
      fillProps: {
        onClose: onClose
      }
    }), Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], null, Object(external_wp_element_["createElement"])(PreferencesMenuItem, null)));
  });
};

/* harmony default export */ var more_menu = (more_menu_MoreMenu);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/post-publish-button-or-toggle.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function PostPublishButtonOrToggle(_ref) {
  var forceIsDirty = _ref.forceIsDirty,
      forceIsSaving = _ref.forceIsSaving,
      hasPublishAction = _ref.hasPublishAction,
      isBeingScheduled = _ref.isBeingScheduled,
      isPending = _ref.isPending,
      isPublished = _ref.isPublished,
      isPublishSidebarEnabled = _ref.isPublishSidebarEnabled,
      isPublishSidebarOpened = _ref.isPublishSidebarOpened,
      isScheduled = _ref.isScheduled,
      togglePublishSidebar = _ref.togglePublishSidebar,
      setEntitiesSavedStatesCallback = _ref.setEntitiesSavedStatesCallback;
  var IS_TOGGLE = 'toggle';
  var IS_BUTTON = 'button';
  var isSmallerThanMediumViewport = Object(external_wp_compose_["useViewportMatch"])('medium', '<');
  var component;
  /**
   * Conditions to show a BUTTON (publish directly) or a TOGGLE (open publish sidebar):
   *
   * 1) We want to show a BUTTON when the post status is at the _final stage_
   * for a particular role (see https://wordpress.org/support/article/post-status/):
   *
   * - is published
   * - is scheduled to be published
   * - is pending and can't be published (but only for viewports >= medium).
   * 	 Originally, we considered showing a button for pending posts that couldn't be published
   * 	 (for example, for an author with the contributor role). Some languages can have
   * 	 long translations for "Submit for review", so given the lack of UI real estate available
   * 	 we decided to take into account the viewport in that case.
   *  	 See: https://github.com/WordPress/gutenberg/issues/10475
   *
   * 2) Then, in small viewports, we'll show a TOGGLE.
   *
   * 3) Finally, we'll use the publish sidebar status to decide:
   *
   * - if it is enabled, we show a TOGGLE
   * - if it is disabled, we show a BUTTON
   */

  if (isPublished || isScheduled && isBeingScheduled || isPending && !hasPublishAction && !isSmallerThanMediumViewport) {
    component = IS_BUTTON;
  } else if (isSmallerThanMediumViewport) {
    component = IS_TOGGLE;
  } else if (isPublishSidebarEnabled) {
    component = IS_TOGGLE;
  } else {
    component = IS_BUTTON;
  }

  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostPublishButton"], {
    forceIsDirty: forceIsDirty,
    forceIsSaving: forceIsSaving,
    isOpen: isPublishSidebarOpened,
    isToggle: component === IS_TOGGLE,
    onToggle: togglePublishSidebar,
    setEntitiesSavedStatesCallback: setEntitiesSavedStatesCallback
  });
}
/* harmony default export */ var post_publish_button_or_toggle = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  return {
    hasPublishAction: Object(external_lodash_["get"])(select('core/editor').getCurrentPost(), ['_links', 'wp:action-publish'], false),
    isBeingScheduled: select('core/editor').isEditedPostBeingScheduled(),
    isPending: select('core/editor').isCurrentPostPending(),
    isPublished: select('core/editor').isCurrentPostPublished(),
    isPublishSidebarEnabled: select('core/editor').isPublishSidebarEnabled(),
    isPublishSidebarOpened: select(store["a" /* store */]).isPublishSidebarOpened(),
    isScheduled: select('core/editor').isCurrentPostScheduled()
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(store["a" /* store */]),
      togglePublishSidebar = _dispatch.togglePublishSidebar;

  return {
    togglePublishSidebar: togglePublishSidebar
  };
}))(PostPublishButtonOrToggle));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/device-preview/index.js


/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


function DevicePreview() {
  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      hasActiveMetaboxes: select(store["a" /* store */]).hasMetaBoxes(),
      isSaving: select(store["a" /* store */]).isSavingMetaBoxes(),
      isPostSaveable: select('core/editor').isEditedPostSaveable(),
      deviceType: select(store["a" /* store */]).__experimentalGetPreviewDeviceType()
    };
  }, []),
      hasActiveMetaboxes = _useSelect.hasActiveMetaboxes,
      isPostSaveable = _useSelect.isPostSaveable,
      isSaving = _useSelect.isSaving,
      deviceType = _useSelect.deviceType;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      setPreviewDeviceType = _useDispatch.__experimentalSetPreviewDeviceType;

  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["__experimentalPreviewOptions"], {
    isEnabled: isPostSaveable,
    className: "edit-post-post-preview-dropdown",
    deviceType: deviceType,
    setDeviceType: setPreviewDeviceType
  }, Object(external_wp_element_["createElement"])(external_wp_components_["MenuGroup"], null, Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-header-preview__grouping-external"
  }, Object(external_wp_element_["createElement"])(external_wp_editor_["PostPreviewButton"], {
    className: 'edit-post-header-preview__button-external',
    role: "menuitem",
    forceIsAutosaveable: hasActiveMetaboxes,
    forcePreviewLink: isSaving ? null : undefined,
    textContent: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_i18n_["__"])('Preview in new tab'), Object(external_wp_element_["createElement"])(external_wp_components_["Icon"], {
      icon: external["a" /* default */]
    }))
  }))));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/main-dashboard-button/index.js


/**
 * WordPress dependencies
 */

var slotName = '__experimentalMainDashboardButton';

var main_dashboard_button_createSlotFill = Object(external_wp_components_["createSlotFill"])(slotName),
    Fill = main_dashboard_button_createSlotFill.Fill,
    MainDashboardButtonSlot = main_dashboard_button_createSlotFill.Slot;

var MainDashboardButton = Fill;

var main_dashboard_button_Slot = function Slot(_ref) {
  var children = _ref.children;
  var slot = Object(external_wp_components_["__experimentalUseSlot"])(slotName);
  var hasFills = Boolean(slot.fills && slot.fills.length);

  if (!hasFills) {
    return children;
  }

  return Object(external_wp_element_["createElement"])(MainDashboardButtonSlot, {
    bubblesVirtually: true
  });
};

MainDashboardButton.Slot = main_dashboard_button_Slot;
/* harmony default export */ var main_dashboard_button = (MainDashboardButton);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-post-publish-panel/index.js


/**
 * WordPress dependencies
 */




var plugin_post_publish_panel_createSlotFill = Object(external_wp_components_["createSlotFill"])('PluginPostPublishPanel'),
    plugin_post_publish_panel_Fill = plugin_post_publish_panel_createSlotFill.Fill,
    plugin_post_publish_panel_Slot = plugin_post_publish_panel_createSlotFill.Slot;

var plugin_post_publish_panel_PluginPostPublishPanelFill = function PluginPostPublishPanelFill(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      _ref$initialOpen = _ref.initialOpen,
      initialOpen = _ref$initialOpen === void 0 ? false : _ref$initialOpen,
      icon = _ref.icon;
  return Object(external_wp_element_["createElement"])(plugin_post_publish_panel_Fill, null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    className: className,
    initialOpen: initialOpen || !title,
    title: title,
    icon: icon
  }, children));
};
/**
 * Renders provided content to the post-publish panel in the publish flow
 * (side panel that opens after a user publishes the post).
 *
 * @param {Object} props Component properties.
 * @param {string} [props.className] An optional class name added to the panel.
 * @param {string} [props.title] Title displayed at the top of the panel.
 * @param {boolean} [props.initialOpen=false] Whether to have the panel initially opened. When no title is provided it is always opened.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 *
 * @example
 * <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginPostPublishPanel = wp.editPost.PluginPostPublishPanel;
 *
 * function MyPluginPostPublishPanel() {
 * 	return wp.element.createElement(
 * 		PluginPostPublishPanel,
 * 		{
 * 			className: 'my-plugin-post-publish-panel',
 * 			title: __( 'My panel title' ),
 * 			initialOpen: true,
 * 		},
 * 		__( 'My panel content' )
 * 	);
 * }
 * ```
 *
 * @example
 * <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginPostPublishPanel } from '@wordpress/edit-post';
 *
 * const MyPluginPostPublishPanel = () => (
 * 	<PluginPostPublishPanel
 * 		className="my-plugin-post-publish-panel"
 * 		title={ __( 'My panel title' ) }
 * 		initialOpen={ true }
 * 	>
 *         { __( 'My panel content' ) }
 * 	</PluginPostPublishPanel>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */


var PluginPostPublishPanel = Object(external_wp_compose_["compose"])(Object(external_wp_plugins_["withPluginContext"])(function (context, ownProps) {
  return {
    icon: ownProps.icon || context.icon
  };
}))(plugin_post_publish_panel_PluginPostPublishPanelFill);
PluginPostPublishPanel.Slot = plugin_post_publish_panel_Slot;
/* harmony default export */ var plugin_post_publish_panel = (PluginPostPublishPanel);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-pre-publish-panel/index.js


/**
 * WordPress dependencies
 */




var plugin_pre_publish_panel_createSlotFill = Object(external_wp_components_["createSlotFill"])('PluginPrePublishPanel'),
    plugin_pre_publish_panel_Fill = plugin_pre_publish_panel_createSlotFill.Fill,
    plugin_pre_publish_panel_Slot = plugin_pre_publish_panel_createSlotFill.Slot;

var plugin_pre_publish_panel_PluginPrePublishPanelFill = function PluginPrePublishPanelFill(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      _ref$initialOpen = _ref.initialOpen,
      initialOpen = _ref$initialOpen === void 0 ? false : _ref$initialOpen,
      icon = _ref.icon;
  return Object(external_wp_element_["createElement"])(plugin_pre_publish_panel_Fill, null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    className: className,
    initialOpen: initialOpen || !title,
    title: title,
    icon: icon
  }, children));
};
/**
 * Renders provided content to the pre-publish side panel in the publish flow
 * (side panel that opens when a user first pushes "Publish" from the main editor).
 *
 * @param {Object}                props                                 Component props.
 * @param {string}                [props.className]                     An optional class name added to the panel.
 * @param {string}                [props.title]                         Title displayed at the top of the panel.
 * @param {boolean}               [props.initialOpen=false]             Whether to have the panel initially opened.
 *                                                                      When no title is provided it is always opened.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/)
 *                                                                      icon slug string, or an SVG WP element, to be rendered when
 *                                                                      the sidebar is pinned to toolbar.
 *
 * @example
 * <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginPrePublishPanel = wp.editPost.PluginPrePublishPanel;
 *
 * function MyPluginPrePublishPanel() {
 * 	return wp.element.createElement(
 * 		PluginPrePublishPanel,
 * 		{
 * 			className: 'my-plugin-pre-publish-panel',
 * 			title: __( 'My panel title' ),
 * 			initialOpen: true,
 * 		},
 * 		__( 'My panel content' )
 * 	);
 * }
 * ```
 *
 * @example
 * <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginPrePublishPanel } from '@wordpress/edit-post';
 *
 * const MyPluginPrePublishPanel = () => (
 * 	<PluginPrePublishPanel
 * 		className="my-plugin-pre-publish-panel"
 * 		title={ __( 'My panel title' ) }
 * 		initialOpen={ true }
 * 	>
 * 	    { __( 'My panel content' ) }
 * 	</PluginPrePublishPanel>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */


var PluginPrePublishPanel = Object(external_wp_compose_["compose"])(Object(external_wp_plugins_["withPluginContext"])(function (context, ownProps) {
  return {
    icon: ownProps.icon || context.icon
  };
}))(plugin_pre_publish_panel_PluginPrePublishPanelFill);
PluginPrePublishPanel.Slot = plugin_pre_publish_panel_Slot;
/* harmony default export */ var plugin_pre_publish_panel = (PluginPrePublishPanel);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/layout/actions-panel.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





var actions_panel_createSlotFill = Object(external_wp_components_["createSlotFill"])('ActionsPanel'),
    actions_panel_Fill = actions_panel_createSlotFill.Fill,
    actions_panel_Slot = actions_panel_createSlotFill.Slot;

var ActionsPanelFill = actions_panel_Fill;
function ActionsPanel(_ref) {
  var setEntitiesSavedStatesCallback = _ref.setEntitiesSavedStatesCallback,
      closeEntitiesSavedStates = _ref.closeEntitiesSavedStates,
      isEntitiesSavedStatesOpen = _ref.isEntitiesSavedStatesOpen;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      closePublishSidebar = _useDispatch.closePublishSidebar,
      togglePublishSidebar = _useDispatch.togglePublishSidebar;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      publishSidebarOpened: select(store["a" /* store */]).isPublishSidebarOpened(),
      hasActiveMetaboxes: select(store["a" /* store */]).hasMetaBoxes(),
      isSavingMetaBoxes: select(store["a" /* store */]).isSavingMetaBoxes(),
      hasNonPostEntityChanges: select('core/editor').hasNonPostEntityChanges()
    };
  }, []),
      publishSidebarOpened = _useSelect.publishSidebarOpened,
      hasActiveMetaboxes = _useSelect.hasActiveMetaboxes,
      isSavingMetaBoxes = _useSelect.isSavingMetaBoxes,
      hasNonPostEntityChanges = _useSelect.hasNonPostEntityChanges;

  var openEntitiesSavedStates = Object(external_wp_element_["useCallback"])(function () {
    return setEntitiesSavedStatesCallback(true);
  }, []); // It is ok for these components to be unmounted when not in visual use.
  // We don't want more than one present at a time, decide which to render.

  var unmountableContent;

  if (publishSidebarOpened) {
    unmountableContent = Object(external_wp_element_["createElement"])(external_wp_editor_["PostPublishPanel"], {
      onClose: closePublishSidebar,
      forceIsDirty: hasActiveMetaboxes,
      forceIsSaving: isSavingMetaBoxes,
      PrePublishExtension: plugin_pre_publish_panel.Slot,
      PostPublishExtension: plugin_post_publish_panel.Slot
    });
  } else if (hasNonPostEntityChanges) {
    unmountableContent = Object(external_wp_element_["createElement"])("div", {
      className: "edit-post-layout__toggle-entities-saved-states-panel"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isSecondary: true,
      className: "edit-post-layout__toggle-entities-saved-states-panel-button",
      onClick: openEntitiesSavedStates,
      "aria-expanded": false
    }, Object(external_wp_i18n_["__"])('Open save panel')));
  } else {
    unmountableContent = Object(external_wp_element_["createElement"])("div", {
      className: "edit-post-layout__toggle-publish-panel"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isSecondary: true,
      className: "edit-post-layout__toggle-publish-panel-button",
      onClick: togglePublishSidebar,
      "aria-expanded": false
    }, Object(external_wp_i18n_["__"])('Open publish panel')));
  } // Since EntitiesSavedStates controls its own panel, we can keep it
  // always mounted to retain its own component state (such as checkboxes).


  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["EntitiesSavedStates"], {
    isOpen: isEntitiesSavedStatesOpen,
    close: closeEntitiesSavedStates
  }), Object(external_wp_element_["createElement"])(actions_panel_Slot, {
    bubblesVirtually: true
  }), !isEntitiesSavedStatesOpen && unmountableContent);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/template-save-button/index.js



/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */




function TemplateSaveButton() {
  var _useState = Object(external_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isEntitiesReviewPanelOpen = _useState2[0],
      setIsEntitiesReviewPanelOpen = _useState2[1];

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      setIsEditingTemplate = _useDispatch.setIsEditingTemplate;

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: function onClick() {
      return setIsEditingTemplate(false);
    },
    isTertiary: true
  }, Object(external_wp_i18n_["__"])('Cancel')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    isPrimary: true,
    onClick: function onClick() {
      return setIsEntitiesReviewPanelOpen(true);
    },
    "aria-expanded": isEntitiesReviewPanelOpen
  }, Object(external_wp_i18n_["__"])('Apply')), Object(external_wp_element_["createElement"])(ActionsPanelFill, null, Object(external_wp_element_["createElement"])(external_wp_editor_["EntitiesSavedStates"], {
    isOpen: isEntitiesReviewPanelOpen,
    close: function close(entities) {
      setIsEntitiesReviewPanelOpen(false);

      if (entities !== null && entities !== void 0 && entities.length) {
        setIsEditingTemplate(false);
      }
    }
  })));
}

/* harmony default export */ var template_save_button = (TemplateSaveButton);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */










function Header(_ref) {
  var setEntitiesSavedStatesCallback = _ref.setEntitiesSavedStatesCallback;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      hasActiveMetaboxes: select(store["a" /* store */]).hasMetaBoxes(),
      isPublishSidebarOpened: select(store["a" /* store */]).isPublishSidebarOpened(),
      isSaving: select(store["a" /* store */]).isSavingMetaBoxes(),
      showIconLabels: select(store["a" /* store */]).isFeatureActive('showIconLabels'),
      hasReducedUI: select(store["a" /* store */]).isFeatureActive('reducedUI'),
      isEditingTemplate: select(store["a" /* store */]).isEditingTemplate()
    };
  }, []),
      hasActiveMetaboxes = _useSelect.hasActiveMetaboxes,
      isPublishSidebarOpened = _useSelect.isPublishSidebarOpened,
      isSaving = _useSelect.isSaving,
      showIconLabels = _useSelect.showIconLabels,
      hasReducedUI = _useSelect.hasReducedUI,
      isEditingTemplate = _useSelect.isEditingTemplate;

  var isLargeViewport = Object(external_wp_compose_["useViewportMatch"])('large');
  var classes = classnames_default()('edit-post-header', {
    'has-reduced-ui': hasReducedUI
  });
  return Object(external_wp_element_["createElement"])("div", {
    className: classes
  }, Object(external_wp_element_["createElement"])(main_dashboard_button.Slot, null, Object(external_wp_element_["createElement"])(fullscreen_mode_close, null)), Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-header__toolbar"
  }, Object(external_wp_element_["createElement"])(header_toolbar, null)), Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-header__settings"
  }, !isEditingTemplate && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, !isPublishSidebarOpened && // This button isn't completely hidden by the publish sidebar.
  // We can't hide the whole toolbar when the publish sidebar is open because
  // we want to prevent mounting/unmounting the PostPublishButtonOrToggle DOM node.
  // We track that DOM node to return focus to the PostPublishButtonOrToggle
  // when the publish sidebar has been closed.
  Object(external_wp_element_["createElement"])(external_wp_editor_["PostSavedState"], {
    forceIsDirty: hasActiveMetaboxes,
    forceIsSaving: isSaving,
    showIconLabels: showIconLabels
  }), Object(external_wp_element_["createElement"])(DevicePreview, null), Object(external_wp_element_["createElement"])(external_wp_editor_["PostPreviewButton"], {
    forceIsAutosaveable: hasActiveMetaboxes,
    forcePreviewLink: isSaving ? null : undefined
  }), Object(external_wp_element_["createElement"])(post_publish_button_or_toggle, {
    forceIsDirty: hasActiveMetaboxes,
    forceIsSaving: isSaving,
    setEntitiesSavedStatesCallback: setEntitiesSavedStatesCallback
  })), isEditingTemplate && Object(external_wp_element_["createElement"])(template_save_button, null), (isLargeViewport || !showIconLabels) && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(build_module["f" /* PinnedItems */].Slot, {
    scope: "core/edit-post"
  }), Object(external_wp_element_["createElement"])(more_menu, {
    showIconLabels: showIconLabels
  })), showIconLabels && !isLargeViewport && Object(external_wp_element_["createElement"])(more_menu, {
    showIconLabels: showIconLabels
  })));
}

/* harmony default export */ var header = (Header);

// CONCATENATED MODULE: ./node_modules/@wordpress/icons/build-module/library/cog.js


/**
 * WordPress dependencies
 */

var cog = Object(external_wp_element_["createElement"])(external_wp_primitives_["SVG"], {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, Object(external_wp_element_["createElement"])(external_wp_primitives_["Path"], {
  fillRule: "evenodd",
  d: "M10.289 4.836A1 1 0 0111.275 4h1.306a1 1 0 01.987.836l.244 1.466c.787.26 1.503.679 2.108 1.218l1.393-.522a1 1 0 011.216.437l.653 1.13a1 1 0 01-.23 1.273l-1.148.944a6.025 6.025 0 010 2.435l1.149.946a1 1 0 01.23 1.272l-.653 1.13a1 1 0 01-1.216.437l-1.394-.522c-.605.54-1.32.958-2.108 1.218l-.244 1.466a1 1 0 01-.987.836h-1.306a1 1 0 01-.986-.836l-.244-1.466a5.995 5.995 0 01-2.108-1.218l-1.394.522a1 1 0 01-1.217-.436l-.653-1.131a1 1 0 01.23-1.272l1.149-.946a6.026 6.026 0 010-2.435l-1.148-.944a1 1 0 01-.23-1.272l.653-1.131a1 1 0 011.217-.437l1.393.522a5.994 5.994 0 012.108-1.218l.244-1.466zM14.929 12a3 3 0 11-6 0 3 3 0 016 0z",
  clipRule: "evenodd"
}));
/* harmony default export */ var library_cog = (cog);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/settings-header/index.js



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */



var settings_header_SettingsHeader = function SettingsHeader(_ref) {
  var sidebarName = _ref.sidebarName;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      openGeneralSidebar = _useDispatch.openGeneralSidebar;

  var openDocumentSettings = function openDocumentSettings() {
    return openGeneralSidebar('edit-post/document');
  };

  var openBlockSettings = function openBlockSettings() {
    return openGeneralSidebar('edit-post/block');
  };

  var documentLabel = Object(external_wp_data_["useSelect"])(function (select) {
    var _postType$labels$sing, _postType$labels;

    var currentPostType = select('core/editor').getCurrentPostType();
    var postType = select('core').getPostType(currentPostType);
    return (// Disable reason: Post type labels object is shaped like this.
      // eslint-disable-next-line camelcase
      (_postType$labels$sing = postType === null || postType === void 0 ? void 0 : (_postType$labels = postType.labels) === null || _postType$labels === void 0 ? void 0 : _postType$labels.singular_name) !== null && _postType$labels$sing !== void 0 ? _postType$labels$sing : // translators: Default label for the Document sidebar tab, not selected.
      Object(external_wp_i18n_["__"])('Document')
    );
  });

  var _ref2 = sidebarName === 'edit-post/document' ? // translators: ARIA label for the Document sidebar tab, selected. %s: Document label.
  [Object(external_wp_i18n_["sprintf"])(Object(external_wp_i18n_["__"])('%s (selected)'), documentLabel), 'is-active'] : [documentLabel, ''],
      _ref3 = Object(slicedToArray["a" /* default */])(_ref2, 2),
      documentAriaLabel = _ref3[0],
      documentActiveClass = _ref3[1];

  var _ref4 = sidebarName === 'edit-post/block' ? // translators: ARIA label for the Block Settings Sidebar tab, selected.
  [Object(external_wp_i18n_["__"])('Block (selected)'), 'is-active'] : // translators: ARIA label for the Block Settings Sidebar tab, not selected.
  [Object(external_wp_i18n_["__"])('Block'), ''],
      _ref5 = Object(slicedToArray["a" /* default */])(_ref4, 2),
      blockAriaLabel = _ref5[0],
      blockActiveClass = _ref5[1];
  /* Use a list so screen readers will announce how many tabs there are. */


  return Object(external_wp_element_["createElement"])("ul", null, Object(external_wp_element_["createElement"])("li", null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: openDocumentSettings,
    className: "edit-post-sidebar__panel-tab ".concat(documentActiveClass),
    "aria-label": documentAriaLabel,
    "data-label": documentLabel
  }, documentLabel)), Object(external_wp_element_["createElement"])("li", null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    onClick: openBlockSettings,
    className: "edit-post-sidebar__panel-tab ".concat(blockActiveClass),
    "aria-label": blockAriaLabel // translators: Data label for the Block Settings Sidebar tab.
    ,
    "data-label": Object(external_wp_i18n_["__"])('Block')
  }, // translators: Text label for the Block Settings Sidebar tab.
  Object(external_wp_i18n_["__"])('Block'))));
};

/* harmony default export */ var settings_header = (settings_header_SettingsHeader);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-visibility/index.js


/**
 * WordPress dependencies
 */



function PostVisibility() {
  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostVisibilityCheck"], {
    render: function render(_ref) {
      var canEdit = _ref.canEdit;
      return Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], {
        className: "edit-post-post-visibility"
      }, Object(external_wp_element_["createElement"])("span", null, Object(external_wp_i18n_["__"])('Visibility')), !canEdit && Object(external_wp_element_["createElement"])("span", null, Object(external_wp_element_["createElement"])(external_wp_editor_["PostVisibilityLabel"], null)), canEdit && Object(external_wp_element_["createElement"])(external_wp_components_["Dropdown"], {
        position: "bottom left",
        contentClassName: "edit-post-post-visibility__dialog",
        renderToggle: function renderToggle(_ref2) {
          var isOpen = _ref2.isOpen,
              onToggle = _ref2.onToggle;
          return Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
            "aria-expanded": isOpen,
            className: "edit-post-post-visibility__toggle",
            onClick: onToggle,
            isTertiary: true
          }, Object(external_wp_element_["createElement"])(external_wp_editor_["PostVisibilityLabel"], null));
        },
        renderContent: function renderContent() {
          return Object(external_wp_element_["createElement"])(external_wp_editor_["PostVisibility"], null);
        }
      }));
    }
  });
}
/* harmony default export */ var post_visibility = (PostVisibility);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-trash/index.js


/**
 * WordPress dependencies
 */


function PostTrash() {
  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostTrashCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["PostTrash"], null)));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-schedule/index.js


/**
 * WordPress dependencies
 */



function PostSchedule() {
  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostScheduleCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], {
    className: "edit-post-post-schedule"
  }, Object(external_wp_element_["createElement"])("span", null, Object(external_wp_i18n_["__"])('Publish')), Object(external_wp_element_["createElement"])(external_wp_components_["Dropdown"], {
    position: "bottom left",
    contentClassName: "edit-post-post-schedule__dialog",
    renderToggle: function renderToggle(_ref) {
      var onToggle = _ref.onToggle,
          isOpen = _ref.isOpen;
      return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
        className: "edit-post-post-schedule__toggle",
        onClick: onToggle,
        "aria-expanded": isOpen,
        isTertiary: true
      }, Object(external_wp_element_["createElement"])(external_wp_editor_["PostScheduleLabel"], null)));
    },
    renderContent: function renderContent() {
      return Object(external_wp_element_["createElement"])(external_wp_editor_["PostSchedule"], null);
    }
  })));
}
/* harmony default export */ var post_schedule = (PostSchedule);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-sticky/index.js


/**
 * WordPress dependencies
 */


function PostSticky() {
  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostStickyCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["PostSticky"], null)));
}
/* harmony default export */ var post_sticky = (PostSticky);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-author/index.js


/**
 * WordPress dependencies
 */


function PostAuthor() {
  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostAuthorCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["PostAuthor"], null)));
}
/* harmony default export */ var post_author = (PostAuthor);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-slug/index.js


/**
 * WordPress dependencies
 */


function PostSlug() {
  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostSlugCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["PostSlug"], null)));
}
/* harmony default export */ var post_slug = (PostSlug);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-format/index.js


/**
 * WordPress dependencies
 */


function PostFormat() {
  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostFormatCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["PostFormat"], null)));
}
/* harmony default export */ var post_format = (PostFormat);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-pending-status/index.js


/**
 * WordPress dependencies
 */


function PostPendingStatus() {
  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostPendingStatusCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["PostPendingStatus"], null)));
}
/* harmony default export */ var post_pending_status = (PostPendingStatus);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-post-status-info/index.js


/**
 * Defines as extensibility slot for the Status & visibility panel.
 */

/**
 * WordPress dependencies
 */


var plugin_post_status_info_createSlotFill = Object(external_wp_components_["createSlotFill"])('PluginPostStatusInfo'),
    plugin_post_status_info_Fill = plugin_post_status_info_createSlotFill.Fill,
    plugin_post_status_info_Slot = plugin_post_status_info_createSlotFill.Slot;
/**
 * Renders a row in the Status & visibility panel of the Document sidebar.
 * It should be noted that this is named and implemented around the function it serves
 * and not its location, which may change in future iterations.
 *
 * @param {Object}    props             Component properties.
 * @param {string}    [props.className] An optional class name added to the row.
 * @param {WPElement} props.children    Children to be rendered.
 *
 * @example
 * <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginPostStatusInfo = wp.editPost.PluginPostStatusInfo;
 *
 * function MyPluginPostStatusInfo() {
 * 	return wp.element.createElement(
 * 		PluginPostStatusInfo,
 * 		{
 * 			className: 'my-plugin-post-status-info',
 * 		},
 * 		__( 'My post status info' )
 * 	)
 * }
 * ```
 *
 * @example
 * <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginPostStatusInfo } from '@wordpress/edit-post';
 *
 * const MyPluginPostStatusInfo = () => (
 * 	<PluginPostStatusInfo
 * 		className="my-plugin-post-status-info"
 * 	>
 * 		{ __( 'My post status info' ) }
 * 	</PluginPostStatusInfo>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */




var plugin_post_status_info_PluginPostStatusInfo = function PluginPostStatusInfo(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return Object(external_wp_element_["createElement"])(plugin_post_status_info_Fill, null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], {
    className: className
  }, children));
};

plugin_post_status_info_PluginPostStatusInfo.Slot = plugin_post_status_info_Slot;
/* harmony default export */ var plugin_post_status_info = (plugin_post_status_info_PluginPostStatusInfo);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-template/index.js


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



function PostTemplate() {
  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _getPostType$viewable, _getPostType;

    var _select = select(external_wp_editor_["store"]),
        getEditedPostAttribute = _select.getEditedPostAttribute,
        getCurrentPostType = _select.getCurrentPostType,
        getCurrentPost = _select.getCurrentPost;

    var _select2 = select(external_wp_coreData_["store"]),
        __experimentalGetTemplateForLink = _select2.__experimentalGetTemplateForLink,
        getPostType = _select2.getPostType;

    var _select3 = select(store["a" /* store */]),
        isEditingTemplate = _select3.isEditingTemplate;

    var link = getEditedPostAttribute('link');
    var isFSEEnabled = select(external_wp_editor_["store"]).getEditorSettings().isFSETheme;
    var isViewable = (_getPostType$viewable = (_getPostType = getPostType(getCurrentPostType())) === null || _getPostType === void 0 ? void 0 : _getPostType.viewable) !== null && _getPostType$viewable !== void 0 ? _getPostType$viewable : false;
    return {
      template: isFSEEnabled && isViewable && link && getCurrentPost().status !== 'auto-draft' ? __experimentalGetTemplateForLink(link) : null,
      isEditing: isEditingTemplate(),
      isFSETheme: isFSEEnabled
    };
  }, []),
      template = _useSelect.template,
      isEditing = _useSelect.isEditing,
      isFSETheme = _useSelect.isFSETheme;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      setIsEditingTemplate = _useDispatch.setIsEditingTemplate;

  var _useDispatch2 = Object(external_wp_data_["useDispatch"])(external_wp_notices_["store"]),
      createSuccessNotice = _useDispatch2.createSuccessNotice;

  if (!isFSETheme || !template) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], {
    className: "edit-post-post-template"
  }, Object(external_wp_element_["createElement"])("span", null, Object(external_wp_i18n_["__"])('Template')), !isEditing && Object(external_wp_element_["createElement"])("span", {
    className: "edit-post-post-template__value"
  }, Object(external_wp_element_["createInterpolateElement"])(Object(external_wp_i18n_["sprintf"])(
  /* translators: 1: Template name. */
  Object(external_wp_i18n_["__"])('%s (<a>Edit</a>)'), template.slug), {
    a: Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isLink: true,
      onClick: function onClick() {
        setIsEditingTemplate(true);
        createSuccessNotice(Object(external_wp_i18n_["__"])('Editing template. Changes made here affect all posts and pages that use the template.'), {
          type: 'snackbar'
        });
      }
    }, Object(external_wp_i18n_["__"])('Edit'))
  })), isEditing && Object(external_wp_element_["createElement"])("span", {
    className: "edit-post-post-template__value"
  }, template.slug));
}

/* harmony default export */ var post_template = (PostTemplate);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-status/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */












/**
 * Module Constants
 */

var PANEL_NAME = 'post-status';

function PostStatus(_ref) {
  var isOpened = _ref.isOpened,
      onTogglePanel = _ref.onTogglePanel;
  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    className: "edit-post-post-status",
    title: Object(external_wp_i18n_["__"])('Status & visibility'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, Object(external_wp_element_["createElement"])(plugin_post_status_info.Slot, null, function (fills) {
    return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(post_template, null), Object(external_wp_element_["createElement"])(post_visibility, null), Object(external_wp_element_["createElement"])(post_schedule, null), Object(external_wp_element_["createElement"])(post_format, null), Object(external_wp_element_["createElement"])(post_sticky, null), Object(external_wp_element_["createElement"])(post_pending_status, null), Object(external_wp_element_["createElement"])(post_slug, null), Object(external_wp_element_["createElement"])(post_author, null), fills, Object(external_wp_element_["createElement"])(PostTrash, null));
  }));
}

/* harmony default export */ var post_status = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  // We use isEditorPanelRemoved to hide the panel if it was programatically removed. We do
  // not use isEditorPanelEnabled since this panel should not be disabled through the UI.
  var _select = select(store["a" /* store */]),
      isEditorPanelRemoved = _select.isEditorPanelRemoved,
      isEditorPanelOpened = _select.isEditorPanelOpened;

  return {
    isRemoved: isEditorPanelRemoved(PANEL_NAME),
    isOpened: isEditorPanelOpened(PANEL_NAME)
  };
}), Object(external_wp_compose_["ifCondition"])(function (_ref2) {
  var isRemoved = _ref2.isRemoved;
  return !isRemoved;
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onTogglePanel: function onTogglePanel() {
      return dispatch(store["a" /* store */]).toggleEditorPanelOpened(PANEL_NAME);
    }
  };
})])(PostStatus));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/last-revision/index.js


/**
 * WordPress dependencies
 */



function LastRevision() {
  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostLastRevisionCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    className: "edit-post-last-revision__panel"
  }, Object(external_wp_element_["createElement"])(external_wp_editor_["PostLastRevision"], null)));
}

/* harmony default export */ var last_revision = (LastRevision);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-taxonomies/taxonomy-panel.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function TaxonomyPanel(_ref) {
  var isEnabled = _ref.isEnabled,
      taxonomy = _ref.taxonomy,
      isOpened = _ref.isOpened,
      onTogglePanel = _ref.onTogglePanel,
      children = _ref.children;

  if (!isEnabled) {
    return null;
  }

  var taxonomyMenuName = Object(external_lodash_["get"])(taxonomy, ['labels', 'menu_name']);

  if (!taxonomyMenuName) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    title: taxonomyMenuName,
    opened: isOpened,
    onToggle: onTogglePanel
  }, children);
}

/* harmony default export */ var taxonomy_panel = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select, ownProps) {
  var slug = Object(external_lodash_["get"])(ownProps.taxonomy, ['slug']);
  var panelName = slug ? "taxonomy-panel-".concat(slug) : '';
  return {
    panelName: panelName,
    isEnabled: slug ? select(store["a" /* store */]).isEditorPanelEnabled(panelName) : false,
    isOpened: slug ? select(store["a" /* store */]).isEditorPanelOpened(panelName) : false
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch, ownProps) {
  return {
    onTogglePanel: function onTogglePanel() {
      dispatch(store["a" /* store */]).toggleEditorPanelOpened(ownProps.panelName);
    }
  };
}))(TaxonomyPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-taxonomies/index.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function PostTaxonomies() {
  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostTaxonomiesCheck"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["PostTaxonomies"], {
    taxonomyWrapper: function taxonomyWrapper(content, taxonomy) {
      return Object(external_wp_element_["createElement"])(taxonomy_panel, {
        taxonomy: taxonomy
      }, content);
    }
  }));
}

/* harmony default export */ var post_taxonomies = (PostTaxonomies);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/featured-image/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

var featured_image_PANEL_NAME = 'featured-image';

function FeaturedImage(_ref) {
  var isEnabled = _ref.isEnabled,
      isOpened = _ref.isOpened,
      postType = _ref.postType,
      onTogglePanel = _ref.onTogglePanel;

  if (!isEnabled) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostFeaturedImageCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    title: Object(external_lodash_["get"])(postType, ['labels', 'featured_image'], Object(external_wp_i18n_["__"])('Featured image')),
    opened: isOpened,
    onToggle: onTogglePanel
  }, Object(external_wp_element_["createElement"])(external_wp_editor_["PostFeaturedImage"], null)));
}

var applyWithSelect = Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _select2 = select('core'),
      getPostType = _select2.getPostType;

  var _select3 = select(store["a" /* store */]),
      isEditorPanelEnabled = _select3.isEditorPanelEnabled,
      isEditorPanelOpened = _select3.isEditorPanelOpened;

  return {
    postType: getPostType(getEditedPostAttribute('type')),
    isEnabled: isEditorPanelEnabled(featured_image_PANEL_NAME),
    isOpened: isEditorPanelOpened(featured_image_PANEL_NAME)
  };
});
var applyWithDispatch = Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(store["a" /* store */]),
      toggleEditorPanelOpened = _dispatch.toggleEditorPanelOpened;

  return {
    onTogglePanel: Object(external_lodash_["partial"])(toggleEditorPanelOpened, featured_image_PANEL_NAME)
  };
});
/* harmony default export */ var featured_image = (Object(external_wp_compose_["compose"])(applyWithSelect, applyWithDispatch)(FeaturedImage));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-excerpt/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

var post_excerpt_PANEL_NAME = 'post-excerpt';

function PostExcerpt(_ref) {
  var isEnabled = _ref.isEnabled,
      isOpened = _ref.isOpened,
      onTogglePanel = _ref.onTogglePanel;

  if (!isEnabled) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostExcerptCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    title: Object(external_wp_i18n_["__"])('Excerpt'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, Object(external_wp_element_["createElement"])(external_wp_editor_["PostExcerpt"], null)));
}

/* harmony default export */ var post_excerpt = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    isEnabled: select(store["a" /* store */]).isEditorPanelEnabled(post_excerpt_PANEL_NAME),
    isOpened: select(store["a" /* store */]).isEditorPanelOpened(post_excerpt_PANEL_NAME)
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onTogglePanel: function onTogglePanel() {
      return dispatch(store["a" /* store */]).toggleEditorPanelOpened(post_excerpt_PANEL_NAME);
    }
  };
})])(PostExcerpt));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/post-link/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

var post_link_PANEL_NAME = 'post-link';

function PostLink(_ref) {
  var isOpened = _ref.isOpened,
      onTogglePanel = _ref.onTogglePanel,
      isEditable = _ref.isEditable,
      postLink = _ref.postLink,
      permalinkPrefix = _ref.permalinkPrefix,
      permalinkSuffix = _ref.permalinkSuffix,
      editPermalink = _ref.editPermalink,
      forceEmptyField = _ref.forceEmptyField,
      setState = _ref.setState,
      postSlug = _ref.postSlug,
      postTypeLabel = _ref.postTypeLabel;
  var prefixElement, postNameElement, suffixElement;

  if (isEditable) {
    prefixElement = permalinkPrefix && Object(external_wp_element_["createElement"])("span", {
      className: "edit-post-post-link__link-prefix"
    }, permalinkPrefix);
    postNameElement = postSlug && Object(external_wp_element_["createElement"])("span", {
      className: "edit-post-post-link__link-post-name"
    }, postSlug);
    suffixElement = permalinkSuffix && Object(external_wp_element_["createElement"])("span", {
      className: "edit-post-post-link__link-suffix"
    }, permalinkSuffix);
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    title: Object(external_wp_i18n_["__"])('Permalink'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, isEditable && Object(external_wp_element_["createElement"])("div", {
    className: "editor-post-link"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["TextControl"], {
    label: Object(external_wp_i18n_["__"])('URL Slug'),
    value: forceEmptyField ? '' : postSlug,
    onChange: function onChange(newValue) {
      editPermalink(newValue); // When we delete the field the permalink gets
      // reverted to the original value.
      // The forceEmptyField logic allows the user to have
      // the field temporarily empty while typing.

      if (!newValue) {
        if (!forceEmptyField) {
          setState({
            forceEmptyField: true
          });
        }

        return;
      }

      if (forceEmptyField) {
        setState({
          forceEmptyField: false
        });
      }
    },
    onBlur: function onBlur(event) {
      editPermalink(Object(external_wp_editor_["cleanForSlug"])(event.target.value));

      if (forceEmptyField) {
        setState({
          forceEmptyField: false
        });
      }
    }
  }), Object(external_wp_element_["createElement"])("p", null, Object(external_wp_i18n_["__"])('The last part of the URL.'), ' ', Object(external_wp_element_["createElement"])(external_wp_components_["ExternalLink"], {
    href: "https://wordpress.org/support/article/writing-posts/#post-field-descriptions"
  }, Object(external_wp_i18n_["__"])('Read about permalinks')))), Object(external_wp_element_["createElement"])("h3", {
    className: "edit-post-post-link__preview-label"
  }, postTypeLabel || Object(external_wp_i18n_["__"])('View post')), Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-post-link__preview-link-container"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["ExternalLink"], {
    className: "edit-post-post-link__link",
    href: postLink,
    target: "_blank"
  }, isEditable ? Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, prefixElement, postNameElement, suffixElement) : postLink)));
}

/* harmony default export */ var post_link = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      isPermalinkEditable = _select.isPermalinkEditable,
      getCurrentPost = _select.getCurrentPost,
      isCurrentPostPublished = _select.isCurrentPostPublished,
      getPermalinkParts = _select.getPermalinkParts,
      getEditedPostAttribute = _select.getEditedPostAttribute,
      getEditedPostSlug = _select.getEditedPostSlug;

  var _select2 = select(store["a" /* store */]),
      isEditorPanelEnabled = _select2.isEditorPanelEnabled,
      isEditorPanelOpened = _select2.isEditorPanelOpened;

  var _select3 = select('core'),
      getPostType = _select3.getPostType;

  var _getCurrentPost = getCurrentPost(),
      link = _getCurrentPost.link;

  var postTypeName = getEditedPostAttribute('type');
  var postType = getPostType(postTypeName);
  var permalinkParts = getPermalinkParts();
  return {
    postLink: link,
    isEditable: isPermalinkEditable(),
    isPublished: isCurrentPostPublished(),
    isOpened: isEditorPanelOpened(post_link_PANEL_NAME),
    isEnabled: isEditorPanelEnabled(post_link_PANEL_NAME),
    isViewable: Object(external_lodash_["get"])(postType, ['viewable'], false),
    postSlug: Object(external_wp_url_["safeDecodeURIComponent"])(getEditedPostSlug()),
    postTypeLabel: Object(external_lodash_["get"])(postType, ['labels', 'view_item']),
    hasPermalinkParts: !!permalinkParts,
    permalinkPrefix: permalinkParts === null || permalinkParts === void 0 ? void 0 : permalinkParts.prefix,
    permalinkSuffix: permalinkParts === null || permalinkParts === void 0 ? void 0 : permalinkParts.suffix
  };
}), Object(external_wp_compose_["ifCondition"])(function (_ref2) {
  var isEnabled = _ref2.isEnabled,
      postLink = _ref2.postLink,
      isViewable = _ref2.isViewable,
      hasPermalinkParts = _ref2.hasPermalinkParts;
  return isEnabled && postLink && isViewable && hasPermalinkParts;
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(store["a" /* store */]),
      toggleEditorPanelOpened = _dispatch.toggleEditorPanelOpened;

  var _dispatch2 = dispatch('core/editor'),
      editPost = _dispatch2.editPost;

  return {
    onTogglePanel: function onTogglePanel() {
      return toggleEditorPanelOpened(post_link_PANEL_NAME);
    },
    editPermalink: function editPermalink(newSlug) {
      editPost({
        slug: newSlug
      });
    }
  };
}), Object(external_wp_compose_["withState"])({
  forceEmptyField: false
})])(PostLink));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/discussion-panel/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

var discussion_panel_PANEL_NAME = 'discussion-panel';

function DiscussionPanel(_ref) {
  var isEnabled = _ref.isEnabled,
      isOpened = _ref.isOpened,
      onTogglePanel = _ref.onTogglePanel;

  if (!isEnabled) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_editor_["PostTypeSupportCheck"], {
    supportKeys: ['comments', 'trackbacks']
  }, Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    title: Object(external_wp_i18n_["__"])('Discussion'),
    opened: isOpened,
    onToggle: onTogglePanel
  }, Object(external_wp_element_["createElement"])(external_wp_editor_["PostTypeSupportCheck"], {
    supportKeys: "comments"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["PostComments"], null))), Object(external_wp_element_["createElement"])(external_wp_editor_["PostTypeSupportCheck"], {
    supportKeys: "trackbacks"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["PostPingbacks"], null)))));
}

/* harmony default export */ var discussion_panel = (Object(external_wp_compose_["compose"])([Object(external_wp_data_["withSelect"])(function (select) {
  return {
    isEnabled: select(store["a" /* store */]).isEditorPanelEnabled(discussion_panel_PANEL_NAME),
    isOpened: select(store["a" /* store */]).isEditorPanelOpened(discussion_panel_PANEL_NAME)
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  return {
    onTogglePanel: function onTogglePanel() {
      return dispatch(store["a" /* store */]).toggleEditorPanelOpened(discussion_panel_PANEL_NAME);
    }
  };
})])(DiscussionPanel));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/page-attributes/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

var page_attributes_PANEL_NAME = 'page-attributes';
function PageAttributes(_ref) {
  var isEnabled = _ref.isEnabled,
      isOpened = _ref.isOpened,
      onTogglePanel = _ref.onTogglePanel,
      postType = _ref.postType;

  if (!isEnabled || !postType) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_editor_["PageAttributesCheck"], null, Object(external_wp_element_["createElement"])(external_wp_components_["PanelBody"], {
    title: Object(external_lodash_["get"])(postType, ['labels', 'attributes'], Object(external_wp_i18n_["__"])('Page attributes')),
    opened: isOpened,
    onToggle: onTogglePanel
  }, Object(external_wp_element_["createElement"])(external_wp_editor_["PageTemplate"], null), Object(external_wp_element_["createElement"])(external_wp_editor_["PageAttributesParent"], null), Object(external_wp_element_["createElement"])(external_wp_components_["PanelRow"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["PageAttributesOrder"], null))));
}
var page_attributes_applyWithSelect = Object(external_wp_data_["withSelect"])(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _select2 = select(store["a" /* store */]),
      isEditorPanelEnabled = _select2.isEditorPanelEnabled,
      isEditorPanelOpened = _select2.isEditorPanelOpened;

  var _select3 = select('core'),
      getPostType = _select3.getPostType;

  return {
    isEnabled: isEditorPanelEnabled(page_attributes_PANEL_NAME),
    isOpened: isEditorPanelOpened(page_attributes_PANEL_NAME),
    postType: getPostType(getEditedPostAttribute('type'))
  };
});
var page_attributes_applyWithDispatch = Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch(store["a" /* store */]),
      toggleEditorPanelOpened = _dispatch.toggleEditorPanelOpened;

  return {
    onTogglePanel: Object(external_lodash_["partial"])(toggleEditorPanelOpened, page_attributes_PANEL_NAME)
  };
});
/* harmony default export */ var page_attributes = (Object(external_wp_compose_["compose"])(page_attributes_applyWithSelect, page_attributes_applyWithDispatch)(PageAttributes));

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-boxes-area/index.js








function meta_boxes_area_createSuper(Derived) { var hasNativeReflectConstruct = meta_boxes_area_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function meta_boxes_area_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



var meta_boxes_area_MetaBoxesArea = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(MetaBoxesArea, _Component);

  var _super = meta_boxes_area_createSuper(MetaBoxesArea);

  /**
   * @inheritdoc
   */
  function MetaBoxesArea() {
    var _this;

    Object(classCallCheck["a" /* default */])(this, MetaBoxesArea);

    _this = _super.apply(this, arguments);
    _this.bindContainerNode = _this.bindContainerNode.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }
  /**
   * @inheritdoc
   */


  Object(createClass["a" /* default */])(MetaBoxesArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.form = document.querySelector('.metabox-location-' + this.props.location);

      if (this.form) {
        this.container.appendChild(this.form);
      }
    }
    /**
     * Get the meta box location form from the original location.
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.form) {
        document.querySelector('#metaboxes').appendChild(this.form);
      }
    }
    /**
     * Binds the metabox area container node.
     *
     * @param {Element} node DOM Node.
     */

  }, {
    key: "bindContainerNode",
    value: function bindContainerNode(node) {
      this.container = node;
    }
    /**
     * @inheritdoc
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          location = _this$props.location,
          isSaving = _this$props.isSaving;
      var classes = classnames_default()('edit-post-meta-boxes-area', "is-".concat(location), {
        'is-loading': isSaving
      });
      return Object(external_wp_element_["createElement"])("div", {
        className: classes
      }, isSaving && Object(external_wp_element_["createElement"])(external_wp_components_["Spinner"], null), Object(external_wp_element_["createElement"])("div", {
        className: "edit-post-meta-boxes-area__container",
        ref: this.bindContainerNode
      }), Object(external_wp_element_["createElement"])("div", {
        className: "edit-post-meta-boxes-area__clear"
      }));
    }
  }]);

  return MetaBoxesArea;
}(external_wp_element_["Component"]);

/* harmony default export */ var meta_boxes_area = (Object(external_wp_data_["withSelect"])(function (select) {
  return {
    isSaving: select(store["a" /* store */]).isSavingMetaBoxes()
  };
})(meta_boxes_area_MetaBoxesArea));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/meta-box-visibility.js






function meta_box_visibility_createSuper(Derived) { var hasNativeReflectConstruct = meta_box_visibility_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function meta_box_visibility_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var meta_box_visibility_MetaBoxVisibility = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(MetaBoxVisibility, _Component);

  var _super = meta_box_visibility_createSuper(MetaBoxVisibility);

  function MetaBoxVisibility() {
    Object(classCallCheck["a" /* default */])(this, MetaBoxVisibility);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(MetaBoxVisibility, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateDOM();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isVisible !== prevProps.isVisible) {
        this.updateDOM();
      }
    }
  }, {
    key: "updateDOM",
    value: function updateDOM() {
      var _this$props = this.props,
          id = _this$props.id,
          isVisible = _this$props.isVisible;
      var element = document.getElementById(id);

      if (!element) {
        return;
      }

      if (isVisible) {
        element.classList.remove('is-hidden');
      } else {
        element.classList.add('is-hidden');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return MetaBoxVisibility;
}(external_wp_element_["Component"]);

/* harmony default export */ var meta_box_visibility = (Object(external_wp_data_["withSelect"])(function (select, _ref) {
  var id = _ref.id;
  return {
    isVisible: select(store["a" /* store */]).isEditorPanelEnabled("meta-box-".concat(id))
  };
})(meta_box_visibility_MetaBoxVisibility));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/meta-boxes/index.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function MetaBoxes(_ref) {
  var location = _ref.location,
      isVisible = _ref.isVisible,
      metaBoxes = _ref.metaBoxes;
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_lodash_["map"])(metaBoxes, function (_ref2) {
    var id = _ref2.id;
    return Object(external_wp_element_["createElement"])(meta_box_visibility, {
      key: id,
      id: id
    });
  }), isVisible && Object(external_wp_element_["createElement"])(meta_boxes_area, {
    location: location
  }));
}

/* harmony default export */ var meta_boxes = (Object(external_wp_data_["withSelect"])(function (select, _ref3) {
  var location = _ref3.location;

  var _select = select(store["a" /* store */]),
      isMetaBoxLocationVisible = _select.isMetaBoxLocationVisible,
      getMetaBoxesPerLocation = _select.getMetaBoxesPerLocation;

  return {
    metaBoxes: getMetaBoxesPerLocation(location),
    isVisible: isMetaBoxLocationVisible(location)
  };
})(MetaBoxes));

// EXTERNAL MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-document-setting-panel/index.js
var plugin_document_setting_panel = __webpack_require__(173);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/plugin-sidebar/index.js




/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


/**
 * Renders a sidebar when activated. The contents within the `PluginSidebar` will appear as content within the sidebar.
 * If you wish to display the sidebar, you can with use the `PluginSidebarMoreMenuItem` component or the `wp.data.dispatch` API:
 *
 * ```js
 * wp.data.dispatch( 'core/edit-post' ).openGeneralSidebar( 'plugin-name/sidebar-name' );
 * ```
 *
 * @see PluginSidebarMoreMenuItem
 *
 * @param {Object} props Element props.
 * @param {string} props.name A string identifying the sidebar. Must be unique for every sidebar registered within the scope of your plugin.
 * @param {string} [props.className] An optional class name added to the sidebar body.
 * @param {string} props.title Title displayed at the top of the sidebar.
 * @param {boolean} [props.isPinnable=true] Whether to allow to pin sidebar to toolbar.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered when the sidebar is pinned to toolbar.
 *
 * @example
 * <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var el = wp.element.createElement;
 * var PanelBody = wp.components.PanelBody;
 * var PluginSidebar = wp.editPost.PluginSidebar;
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
 *
 * function MyPluginSidebar() {
 * 	return el(
 * 			PluginSidebar,
 * 			{
 * 				name: 'my-sidebar',
 * 				title: 'My sidebar title',
 * 				icon: moreIcon,
 * 			},
 * 			el(
 * 				PanelBody,
 * 				{},
 * 				__( 'My sidebar content' )
 * 			)
 * 	);
 * }
 * ```
 *
 * @example
 * <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PanelBody } from '@wordpress/components';
 * import { PluginSidebar } from '@wordpress/edit-post';
 * import { more } from '@wordpress/icons';
 *
 * const MyPluginSidebar = () => (
 * 	<PluginSidebar
 * 		name="my-sidebar"
 * 		title="My sidebar title"
 * 		icon={ more }
 * 	>
 * 		<PanelBody>
 * 			{ __( 'My sidebar content' ) }
 * 		</PanelBody>
 * 	</PluginSidebar>
 * );
 * ```
 */

function PluginSidebarEditPost(_ref) {
  var className = _ref.className,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["className"]);

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      postTitle: select('core/editor').getEditedPostAttribute('title'),
      shortcut: select(external_wp_keyboardShortcuts_["store"]).getShortcutRepresentation('core/edit-post/toggle-sidebar'),
      showIconLabels: select(store["a" /* store */]).isFeatureActive('showIconLabels')
    };
  }),
      postTitle = _useSelect.postTitle,
      shortcut = _useSelect.shortcut,
      showIconLabels = _useSelect.showIconLabels;

  return Object(external_wp_element_["createElement"])(build_module["b" /* ComplementaryArea */], Object(esm_extends["a" /* default */])({
    panelClassName: className,
    className: "edit-post-sidebar",
    smallScreenTitle: postTitle || Object(external_wp_i18n_["__"])('(no title)'),
    scope: "core/edit-post",
    toggleShortcut: shortcut,
    showIconLabels: showIconLabels
  }, props));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/sidebar/settings-sidebar/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */
















var SIDEBAR_ACTIVE_BY_DEFAULT = external_wp_element_["Platform"].select({
  web: true,
  native: false
});

var settings_sidebar_SettingsSidebar = function SettingsSidebar() {
  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    // The settings sidebar is used by the edit-post/document and edit-post/block sidebars.
    // sidebarName represents the sidebar that is active or that should be active when the SettingsSidebar toggle button is pressed.
    // If one of the two sidebars is active the component will contain the content of that sidebar.
    // When neither of the the two sidebars is active we can not simply return null, because the PluginSidebarEditPost
    // component, besides being used to render the sidebar, also renders the toggle button. In that case sidebarName
    // should contain the sidebar that will be active when the toggle button is pressed. If a block
    // is selected, that should be edit-post/block otherwise it's edit-post/document.
    var sidebar = select(build_module["g" /* store */]).getActiveComplementaryArea(store["a" /* store */].name);

    if (!['edit-post/document', 'edit-post/block'].includes(sidebar)) {
      if (select('core/block-editor').getBlockSelectionStart()) {
        sidebar = 'edit-post/block';
      }

      sidebar = 'edit-post/document';
    }

    var shortcut = select(external_wp_keyboardShortcuts_["store"]).getShortcutRepresentation('core/edit-post/toggle-sidebar');
    return {
      sidebarName: sidebar,
      keyboardShortcut: shortcut
    };
  }, []),
      sidebarName = _useSelect.sidebarName,
      keyboardShortcut = _useSelect.keyboardShortcut;

  return Object(external_wp_element_["createElement"])(PluginSidebarEditPost, {
    identifier: sidebarName,
    header: Object(external_wp_element_["createElement"])(settings_header, {
      sidebarName: sidebarName
    }),
    closeLabel: Object(external_wp_i18n_["__"])('Close settings'),
    headerClassName: "edit-post-sidebar__panel-tabs"
    /* translators: button label text should, if possible, be under 16 characters. */
    ,
    title: Object(external_wp_i18n_["__"])('Settings'),
    toggleShortcut: keyboardShortcut,
    icon: library_cog,
    isActiveByDefault: SIDEBAR_ACTIVE_BY_DEFAULT
  }, sidebarName === 'edit-post/document' && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(post_status, null), Object(external_wp_element_["createElement"])(plugin_document_setting_panel["a" /* default */].Slot, null), Object(external_wp_element_["createElement"])(last_revision, null), Object(external_wp_element_["createElement"])(post_link, null), Object(external_wp_element_["createElement"])(post_taxonomies, null), Object(external_wp_element_["createElement"])(featured_image, null), Object(external_wp_element_["createElement"])(post_excerpt, null), Object(external_wp_element_["createElement"])(discussion_panel, null), Object(external_wp_element_["createElement"])(page_attributes, null), Object(external_wp_element_["createElement"])(meta_boxes, {
    location: "side"
  })), sidebarName === 'edit-post/block' && Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockInspector"], null));
};

/* harmony default export */ var settings_sidebar = (settings_sidebar_SettingsSidebar);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/images.js



/**
 * WordPress dependencies
 */

var images_CanvasImage = function CanvasImage(props) {
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("img", Object(esm_extends["a" /* default */])({
    className: "edit-post-welcome-guide__image edit-post-welcome-guide__image__prm-np",
    alt: "",
    src: "data:image/gif;base64,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Y8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimqOKKLLbo4oswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnk/5JMNunkk1BGKeWUVFZp5ZVYZqnlllx26eWXYIYp5phklmnmmWimqeaabLbp5ptwxinnnHTWaeedeOap55589unnn4AGKuighBZq6KGIJqrooow26uijkEYq6aSUVmrppZhmqummnHbq6aeghirqqKSWauqpqKaq6qqsturqq7DGKuustNZq66245qrrrrz26uuvwAYr7LDEFmvsscgmq+yyzDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGK+645JZr7rnopqvuuuy26+678MYr77z01mvvvfjmq+++/Pbr778AByzwwAQXbPDBCCes8MIMN+zwwxBHLPHEFFds8Y3FGGes8cYcd+zxxyCHLPLIJJds8skop6zyyiy37PLLMMcs88w012zzzTjnrPPOPPfs889ABy300EQXbfTRSCet9NJMN+3001BHLfXUVFdt9dVYZ6311lx37fXXYIct9thkl2322WinrfbabLft9ttwxy333HTXbffdeOet99589+3334AHLvjghBceXyAAIfkEBQQAAAAs7QBXAZYAiQAAB/+AAII1hIWGh4iJiouMjY6PkJGSioKDNS6YmZqbnJ2en6ChoqOkpaaeNZU1OSs+KK+wsbKztLW2t7i5uru8vbE+KzmqKzc2PMfIycrLzM3Oz9DR0tPU1ck2NyupADU+NjgsPeLj5OXm5+jp6uvs7e7v8OIsODYoqZcoPOE6/P3+/wADChxIsKDBgwgTKuTXgwUPe9xc5Ouho4PFixgzatzIsaPHjyBDihxJ0qKOHjx23JPIg2LJlzBjypwp8+RDF4RYuqTJs6fPnyBtosCJr2VFoEiTKoUplKjOo0ujSp1qEuXQnBOhUt3KlWdTrEa7ih378mvRnWTTqt1o9unat3D/22aFSzet3LB183K9i1av36V8tf4d/DMw4cOFrTqdi7jxTMOOI5dVDLav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2gkcSFCWkhRzbLh5w7Chw4cQI0qcSLEiRTc24vhQUqmgx48gMwl5woVOm5MoU6pcyZJlnZUvW8qcyZKOlBRCQurcyRPRSC5wzBwYSrSo0aNIkypdylSpGTNwpOzI2bOq1Y8/gzbdyrWrV6NPo069SrbsuqxCv3odYMGDWw8W/wao7RpWKlWzePMCQzvXa4UJgCdU6Mu17li9iBPj4ku46YC/gQc3Zmr4ruLLmFcxnrz0rwYNgjkvrZy5tOlRm0UjraBBhAgNklUfJX26tm1LWWUrLXBh6IUCumdDvalkUKvbyJMXyh28ude6KYoLOq68+m3mzrNTHr5DuvXvyH+apEm+fJ2Y5dPPpCMHhXfw8BWnEnQwocX7+PPrj4hRI8f4ACI2HwDvxNPPgQgmqGA+/wQU4IOJqZBDNuVUaOGFGIazghLpQOihXtCEKOKIJDLz4Ykopqjiiiy26OKLMMYo44w01mjjjTjmqOOOPPbo449ABinkKTkoYeSRSCap5P+STDbp5JNQRinllFRWaeWVWGap5ZZcdunllB2KUoMK2GiT4Zlopqnmmmy26eabcMYp55x0+nCOEip09EmRPnjxBRSABirooIQWauihiCaq6KKMNuroo5BGKumklFZq6aWYLvqFFxuFmUkNQuwgRxNHlGrqqaimquqqrLbq6quwxirrrLTWauutuOaq66689iprE3JMpScmNayQRBMsMNHBsh3ooAOz0EYr7bTUVmvttdhmq+223Hbr7bfghivuuOSWa661TLDQRBIrDGtJDS74YAQOPZxr77345qvvvvz26++/2vaAgxE+uOBuJPD6cAUL9QLs8MMQRyzxxBTvqwP/C1cUfDAk8KJgBcMVhyzyyCSXbPK4PbBgBQoGf+qCxyCfLPPMNNdss74pr9wysS9/3PDNQAct9NA358zyxqj0HDPRTDft9NP8Gr3zJR37DPXVWGet9bVSI+1I1UtvLfbYZAfdtcsw/1z22my3TfHZPKft9tx0142zykejbbXdfPft97ZwU6202n8Xbrjfgb87+OGMN053yhlPrbjcjldu+daQa6x32Jd37rnQiUsCNuGfl266yaEjvPjprLcecuocr+767LT/C3vSlNeu++723v617LwHL7y3vjcy+vDIJ49t8Ywcr/zz0C/L/CLOR2/98NMrUv313OuefSLbdy9+/+uZSy46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u76/wMHCw8QGvYmyvbHFzM3Oz5OystCzyQZK2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy6NLThYeCSlVn/P3+/wADChxIsKDBgwgTKlzIsKHDhxAjSpxIsaJFhVWUTDtm7JCSM0C+7BlJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs2fML0B8KOmoyMeQJjhatKDCtKnTp1CjSp1KlanSq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq1bpVT/W+BoMqQKoxw/mrDogEWAACyAAwseTLiw4cOIEytezLix48eQI0ueTLmy5cuYM2tG7FdABxZNfuRQlENIFxw6BDDpzLq169ewY8ueTbu27du4c+vezbu379/AgwsfTny3DhxfhIxGpGSFHCpMovvtQL269evYs2vfzr279+/gw4sfT768+fPo06tfz769++9/qchZMZS5j+dM3uvfz7+///8ABijggARu55d8QiWixH3QFejggxBGKOGEFFZI3oFyJGjfc31Z6OGHIIYo4ogexpdhfYQsyKFnJLbo4oswxihjByZqmCKDHc6o44489ugjejWiOIiKVOT445FIJqnk/4tBKogji0tGKeWUVP7X5IZFQlnlllx26aWBWCAoZD5PfmnmmWhGeeWNK6bp5ptwMhnmiU62GeedeOb54JpDlqnnn4AG2h6GNvb5nJaCJqrootwJIGadVCAK4QYJJADApZheWummnHbq6aeghirqqKSWauqpqKaq6qqsturqq7CWCsAGFjpKJ5Yd6qBDhBscoMABwAYr7LDEFmvsscgmq+yyzDbr7LPQRivttNRWa+20ElRI6JjXlKkrrwNcK+645JZr7rnopqvuuNlSyCeZ+FXY67r01mvvvfjmqy+z7UKYH3VMPIrlvxPOu+/BCCes8MIL9/sgwQHfymaWFBrM8P/FGGes8cbJOhzhu93aKaHFHJds8skoq+sxhCATaWSEEqQs88w017zsynvOWSi8FE8Ys81ABy10yTg72LKfEv489NJMN31v0QUeLTLMTldt9dXXQk2g1D2PjPXXYId9rNYDcv3ypGKnrTbWZAtotqQOkrz23HTT3HaAb1dc9958o3w3gHkX3PfM4Q7+9d9W6syty3AXKLfhVStQOOQbI+5f4F5TXrICInzg+eegh/65CJoTra3ikJ794ON7T57xAAtM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a9uktDFL7bbcdiuqqd6GKy6m1taG7Wzajqvuuuy2666s5dJ2rmzpvqsuuPbmq++78c4277L7BizwwAQL269s/5pWb8Hb4svwwxDrerCMthaorP/CEWes8cYDT2xawqUtzPHIJJc8rcelgUyayCa37PLLEh+744W2sQzzzTjn/CnKpKk8ms06By00zDznV3GyNQtt6dBMEy3zrSZm2/TUVI9ctGg+iwZ01Vx3ze/TFift9dhku3t1aFmHtnXZHMMAA9sdg410rnAHXEADeOet9957f1D3vmeDljZoa/8tLgMTJK744owzvoDh+QYe3dE00w05qewu0PjmmzNw+dfXUo6r1J+PuvSzmnOueuKel86u5J4N/lnhrk+b+uqct177uLB3JrtntO8O7e24N6678N72ztnvnQWPfLPEF7/48c9vq/xmzHPmfPXCRi8969x3e33/haJHjW743Xr/PfXoQzt+Ztlvtn37vaovPfv0N/s+ZvFrNn/+urJf8fAHQIPJrXKkKyDqvmc8BT5rf5fpX2b+50BXCRB3BKxgryCYI2Qh8HwaJNYFV5fBEMYsdB4cHQhNGKwRqq6ELIQVBysjQcxQMIancmHucPirGVKmhpe5IQ9DJUAPeOCFQ9zgAVVIryTWL3cQiADiOufEXflwMkC0jBCryCn1NQBcDmgAFbkYqytKJouV2SIZM+W9ApzuAAooQAPX+CozRgaNlFEjHQ+wAAD40Y8huNQbFRACDUxvj66yI2TwOBk90vF2CwjApwJwOxgicmdLNF8TL8mq1DHg/wGhesAULclJTimyPeXrEcBKqSrNWcBUDtsULC0wgcexElWndAwjJePINTJABKoSAQPeeEtQ5bIxu4xML8kYAVY1s5jFyqQqMQbNaiZPmhcLmTW3aT1sio2b4HygNy0XznIaEIUzY+IqzcnOHo4zge2M5wnNlcpsrkye+ITXO1eYz36u6piMSSZklulPcwK0AwJ9DEELGs6DJtQxC2UoNx1az29K9KKeomgKNblOjHpUUxpNJ0ep+dGSXiqkUJumNk1qUpSGjZwsxahL5wbPmF50ph/cpE1luk/ZEClRafoSUA9VpzgFik5FJZRQldqnOBHqUUjV05qmylQvramqQv+tE1LTtKenWrVRigLqV6Ua1TmpCU9uMupWg7olsSLqUFliVJkOJYGeAumueD3RQ/PK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s+qVFibInk27tu0JFl7rZP3OtW6BsW8Lt537d03e4HwvXsoy+PDnuI0fR5wKYeHr2LNbdA5deHHpLZHzA/+Se3fi5MNTR6U8fT3z52l/d491/an29OXBjy97fv5/4jGD33/q7MeffwTeE+BBCQZkYHwINkjPgsropd2FGGL44HkRSigPhapYmOGIJAa2YXcdergOiNWpiM+J0KXoIjossjejPTA+J+ON49R4H4/05DjcjkBa46MhAxYZjf+Q3im5on0+OVkgf7cRKeVTUBYC2ZXcWNCRlVwec6SWYZ7jJUdglknMmIRsqeY0ZzoUQCsBQJTmm8GwOUiSeP4SJ0MPvPLAQ3f26YueUhlazZ8ZFaroLoh24OajxTAqQi0iMOQopbhEOimnwvx5wSsKyHLBQpuCWounqj7DaEUL9FfirLSKdFiWg3zaqi9nMleLAwmlumssrA5LTJwDNGrsMMUuG0ygwEDr7C/NTmutergKouu13CqYbaLdhhtQpHyKa66R38Zz7roTplsuu/AaQ2689NLobr345pPutvn2K8y8/gaM1r0CF7zmvgYnnCfCCjfMS7UOR7wqwxJXPAv/xBZnfGu272qML8YeSwxwyBlHiogoKKes8sost+zyyzDHjHKk6dZs880456zzzjz37PPPQAct9NBEF2300UgnrfTSTDft9NNQRy311FRXbfXVWGet9dZcd+3112CHLfbYZJdt9tlop6322my37fbbcMct99x012333XjnrffefPft99+ABy744IQXbvjhiCeu+OKMN+7443aDIPnklFdu+eWYZ6755px37vnnoIcu+uikl2766ainrvrqrHOeQAawxy777LTXbvvtuOeu++689+7778AHL/zwxBdv/PHIJ6/88swjjwEGzUcv/e7Qz1798NfD/vz0sm+vu/fch+88//PZi2/++d2nj/76sUNfvvrsZ/C+9PPHX7v78Nuv//78r1999vUjXgD7F7vXFW+ABLRe7hDYO/wl8IHYax8EgTc/B1JwgrRjIAYjuMEOnk+D4gOhB6MnwgaO0HzlK6H8mqfCE+aPfi7cYAtxN8MYHvB3NbRh8nLIwdttL4cW1KEPxyfEEQYQfL7joQeVyMIiho+JTHxgEIMXxe850YoA1N4OaUi+K0rweFVUoBWFF0YvmjGD3ENgGc84vTKWcIZrZKP+wpjFFZqw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zhzzzjxvKWcCRBc9ZQZJGx1kCYEAACH5BAUEAAAALAgAGABgAsgBAAf/gACCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKJKqUqo6ipqqusra6vsLGys7SXpqe1ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAwocSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdqrQU06dQGTmNSrWq1atYs2qNtGKrV6Movor9yWKs2bNo025Mobat27dw/+PKnUu3rt27ePPq3cu3r9+/gAMLHky4sOHDiBMrXsy454HGCAccmEy5suXLmDNr3mx5AOTPoENrlMy5tOnTmT2LXs26tevXsAs9jk27tu1os2/rpqp6t1jUwIMLH058eG/fyJMrX868uXO8x59LnxV9utHc1rNr3869+1zS1b2LH88yPPnz6NPTIl28vfv3mtXLD4V9vv37+PPr38+/f2zz/qkHYIAEFmjggQgmqNiACnLHYIMQRijhhBRWaOGFGFr1YIbh1GfThhyGKCItHo6IXokmCoaiJA00BF6K96wIgIwwdnfAAzXmqOOOPPbo449AZndLkLUNSeSRSCap5P+STDbp5JNQhgRilINNSeWVWGap5ZZcdunll2CGKeaYZJZp5plopqnmmmy26eabcMYp55x01mnnnXjmqac9GGTg55+ABipoBn0OauihiCaq6KKMLlpooI8+2uiklFaKaJ+SWqrpppxymqminx4KV6idlmrqqaj+Saqgq6raaqqwxgpqrJli8CqqtjqKQV+h3nqprMDO6muwvxJr7LG4EnrosLBiqquqmu7qlbOQImsos9bSmu223FqKLaPfdnuqtE95mm2t4qabwSzDhrusuqz6SS280OKa1byzyisus+6W2i69lZLaL8CyDkwsup5edQKgtyLs6KbOGkzwoBIj+6//o2lWPHG16mq8cbP72jowvh9729qnHtdrMcn6yutuyh/DXPLMjZJbG7+JyiyssoZmQvO18f4sNKUyC7ztCT8FzDPHqeoMsNPBojz01D9DDelQIKsc9MMT90p1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"
  }, props)), Object(external_wp_element_["createElement"])("img", Object(esm_extends["a" /* default */])({
    className: "edit-post-welcome-guide__image edit-post-welcome-guide__image__prm-r",
    alt: "",
    src: "data:image/svg+xml,%3Csvg fill='none' height='240' viewBox='0 0 312 240' width='312' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0h312v240h-312z' fill='%2300a0d2'/%3E%3Cpath d='m48 32c0-1.1046.8954-2 2-2h212c1.105 0 2 .8954 2 2v208h-216z' fill='%23fff'/%3E%3Cpath d='m60 38h191.455v34h-191.455z' fill='%23ddd'/%3E%3Cpath d='m151 49v11l5-4.125 5 4.125v-11h-5z' fill='%23000' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='m48 80h216v74h-216z' fill='%23e3e3e3'/%3E%3Crect height='16.5' rx='1.53571' stroke='%23000' stroke-width='1.5' width='16.5' x='147.75' y='108.75'/%3E%3Cpath d='m154 120v-6l5 3z' fill='%23000'/%3E%3Cpath d='m60 163h91.4727v49h-91.4727z' fill='%23ddd'/%3E%3Cpath d='m159.982 163h91.4727v49h-91.4727z' fill='%23ddd'/%3E%3Cg stroke='%23000' stroke-width='1.5'%3E%3Crect height='16.5' rx='1.25' width='16.5' x='97.75' y='179.75'/%3E%3Cpath d='m98 192 4.571-3.333 3.429 2.222 4-3.889 4 3.889' stroke-linejoin='round'/%3E%3Cpath d='m208.917 196v-15.111'/%3E%3Cpath d='m204.472 196v-15.111'/%3E%3Cpath d='m212.333 180.75h-8.889'/%3E%3Cpath d='m203.139 184.889v4.071c-1.928-.353-3.389-2.041-3.389-4.071s1.461-3.718 3.389-4.071z' fill='%23000'/%3E%3C/g%3E%3Cpath d='m60 220h191v20h-191z' fill='%23ddd'/%3E%3C/svg%3E"
  }, props)));
};
var images_EditorImage = function EditorImage(props) {
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("img", Object(esm_extends["a" /* default */])({
    className: "edit-post-welcome-guide__image edit-post-welcome-guide__image__prm-np",
    alt: "",
    src: "data:image/gif;base64,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Y8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimqOKKLLbo4oswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnk/5JMNunkk1BGKeWUVFZp5ZVYZqnlllx26eWXYIYp5phklmnmmWimqeaabLbp5ptwxinnnHTWaeedeOap55589unnn4AGKuighBZq6KGIJqrooow26uijkEYq6aSUVmrppZhmqummnHbq6aeghirqqKSWauqpqKaq6qqsturqq7DGKuustNZq66245qrrrrz26uuvwAYr7LDEFmvsscgmq+yyzDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGK+645JZr7rnopqvuuuy26+678MYr77z01mvvvfjmq+++/Pbr778AByzwwAQXbPDBCCes8MIMN+zwwxBHLPHEFFds8Y3FGGes8cYcd+zxxyCHLPLIJJds8skop6zyyiy37PLLMMcs88w012zzzTjnrPPOPPfs889ABy300EQXbfTRSCet9NJMN+3001BHLfXUVFdt9dVYZ6311lx37fXXYIct9thkl2322WinrfbabLft9ttwxy333HTXbffdeOet99589+3334AHLvjghBceXyAAIfkEBQQAAAAsMAEIARAAEAAAB0aAAIIACAiDhIaHg4WHjIqPkJGSjgyPlYiOhBObE4mIihMVohUTkgChFBSkpqiqpZITEqISr5GFm5mWuqa8vYK5toWekwiBACH5BAUEAAEALDABCAEQABAAAAdWgACCg4SFhoeIiYqLhgsLixI1Hx81EgiHCAhqbpxuahOXhQgTVlBeXlBWoIUXo1ZLp0uqoYMHozV0c3N0n7SECBIuNWouloiOghcHAI+JyIzMzdDTi4EAIfkEBQQAAQAsMAELAQ8ACwAAB2GAAIIACIWGhYODCBOMjRITCIoIflaVlpV+kYsTVkowMElJn0pWkIsSayt8HCMFfHwra5CEnCt9fH23fbGQDIudoKGipLOEFSxIyUgYSCwVkYMMF9PU0wyJggza29rY3t+BACH5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uRXq3s0rubPnz6BDix5NurRpwJQtY9aM97Tr17Bjy55NW3Lqy3Tttq7Nu7fv38CDF769Wjdn4ciTK1/OvDHx3JubS59OvTrw55mNW9/Ovbv3yS0q484e/bv58+jRY2d9PL379/CRr9euGKZf+3vx4ye9X0B/wfpphVp79QlYWn9XIfbfYAs61uBkBP5GwBXhATFDceUltiCCnD3oGYeGBZjVgA4ayF97CR7m4V8rFihai7PBVOGF0O0W34045ujafBnq6OOPQDpX4XjsBWnkkUiiNiT/hjYm6eSTOvLYJJRUVnmelBFaqeWW0mHJ5ZdgLudlmGSWyduYZqappmlorunmm7YtWWOWcNZp53BykjflnXz2eV+eRfop6KD+AUofoYja2WaijKq5aKOQhvlopJRqOWmlmD55aaacGrlpp6BGaWiPoZbq46empqreqHuq6uqq4jFJ56u0codqrbg2d2uuvMrH6qy9BivcrsIWSxuxxib7GrLKNsvfr85GWxuz0lYLXqxzWqvtadRu662C0H4r7ofhjmvuY92eq25+5a7rbojtvitvYOnOK2699nqLb77a7stvtf7+G23AAjdLcMHJHoxwsQovHGzDDvMKccS4Tkwx/60WX+xqxhqnynHHpX4MMqgij8xpySZjinLKlK7MMqQuv8xozDIjSnOlBWzgwM489+yzAxsAO3C83xKgwgMaDKD00kw3PYAD594MKQpJO2310gZAba7UjFpggNURpLCXAwNogMK7XCNaQARXhz122We7mzahG1TttNt6kW022kRrS3bbYucNN9/Y6il0pmig4ZcNLBX2wNUD4C2A3nGvO3eViS/eOGGPA/723nL3bW3nYAc++eChFx6ouH+X/nnl6l4uaAZfuy446JaLXm0AbNt+Ou6x614t1b5TTrhq2Z6bgd1LS2586sgbrm4AG/TevOnP5676oeZ2kQIKD0Dwtf/zqGsf/erujsA2+cBHLfy36keOffnBb0+quvGzD7v79rdqbv7za9/W3oc4xfWFcYJhnAI3pxcAvu54ROJeqjJ3QAZqboF9ceDt9jfA/h1uWxr8HQfHJbtG5Y8UIoSgrOYVwuzV73wSxF8EDPAA0wnBABAY4b0IWDNhlbCHb/ohENckxCGmqYhGLBMSkygpHjIRY0584saiKEWPUbGKIbsiFkmmxS2erIteVBkYw9iyMZIRZmY848zSqEabsbGNg1oiHI8kxzkGqY52/BEe8ygqD/JRVXv8440CKUj4ELKQ7jkkImEFw/stsox+fOQXIylJMVKykpBspP8w6cZLcrL/UYr8pHVCKUrqkLKUXXojKrl0ylWKSZWutFIrY+krT9KST7O85XVgqUsn5bKXvfklMKfFy2F6qpjGBJIwkxmbZTJzWch8Zo6cKU02RbOa8aEmNkdDHAZIb5tHvCY406PNcX6mnObsDDrTeS1NfpCdSFonPB0kznnaqp72HCU+82nKffIzlbb8Z5LkKVAV+bOgyiEoQgmj0IUCaEneZM0VHOrLUcGIotm06Dsxmsg8sYAqCeDoQOHCggp48wNciAJLyJKAlibALTBFS0th4lKXfmWmLH0pAXCaFp7GVCs6XUtQbzpUmhaVLT4laliSOpalxIALH5jLFyqwhiVQwQZX/8iqVrfK1axy4Ksc6KpYx0rWrbrErC0oq1rXeoWvehWsblVrXNmq1bjOlUIyoetb9UrWs1KorGHlK1796lW93tUlcSWsYLv6VcUqdqt3zepj28oBx6ZVrQSwARWWsIYKfGEQE1ADE4oQgygkIQlRSK1qV8va1qYWta6NrWthK1vTnva2uH2tbVVL29qalrWnfW1vfWvb4BL3uMJFrnBzC1zYGne1qH2ub287294aV7rBjS5upatc2V53u9wF7m55O1zeKhe7zo1BEZighlEMQgI1YIEJFIABDCjgvvjNb37ZwF823DcEIdCvgAdM4ALjt74ITrB9FQDg+t7XwQYuMP+EIRzhCls4vwC+rwlCQOEL0xfBBu7wfwOs3wwPOMEC7vCEMWBiFYPYwxdesYIXTGAUH5jGMNavix8cghnU4LOkAMABLkDkBhS5AUhOspKXzOQmO/nJTD4ykolM5SpTWclEBgEIpAzlJh+Zy1i+wJTF3OUyQxnMZq7ymKNMZjM/Wc1L5vKX22xkOsPZzW6es5WvnGQ925nOeK7zmvtM5iozIMiCOAADFs3oRjv60ZCOtKQnTelKM5rIls60pA+gaAZwWtOgDnWlPy3qUpv61KhOtapFzWlEu/rVsI61rGdN61rDutW2zrWr3eteXfv616/uNbCHTexiG/vYyC72AhZykOxmO/vZQV72sl09bWhbe9cIuLa2X11tW3e71t+mdbhjLW1m/3rc2063uklRbmqbe93PFja8oY1ucr8b3PcWd77tXe95+/vfAA+4wAdO8IIb/OAIT7jCF87whjv84b7mdbYhTvGKW/ziDpc4xjdu7UAAACH5BAUEAAAALHEApwCPAcoAAAf/gACCggcMhoeIiYqLjI2Oj5CRkpOUlZaXmJmOB5ydnIaCoACapJOhpaiVB4OsgwwXsLGys7S1tre4ubq7vL2+v8DBwsPDhrDGxMm8yMrNvwytgggVFR8s19jZ2tvc3d7f4OHi4+Tl5ufo6erfM+3u7evx8vP05h8VEgut1VZcRP8AAwocSLCgwYMIEypcyLChw4cQI0qcSLGixYsYCT7hYqWGBFYHXFhJo2SFEyooU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59Ag6p04iRGGisuVo26kONJkiFGokqdSrWq1atYs2rdyrWr169gw4odS7as2bNo06q9OiTJkw8X/w4geGXCixEbAvLq3cu3r9+/gAMLHky4sOHDiBMrXsx4b4IEjSNLnky5sgDINryYiDv3QogYBAjgtUy6tOnTqFOrXs26NePQMUJcAND5MwEBo13r3s27t+/fwHsTaBF7dm3QuIMrX868ufPnqocXp/3KdnLo2LNr3879t3TZ1D0jz929vPnz6NP7/W68+nj18OPLn++dOPjjt8nT38+/v//D7IVnnX7/FWjggfMFiN91CDbo4IPaKehefhBWaOGFwtnXnngUYujhhyBSJiGHDIZo4oko/jXigCm26OKJK7734ow0QhhjhzXmqGN/N5a4449AntcjgUEWaaRzQx6p5P+SyyXJ5JNQuuZklFRWSdqUgIXWl5Z6ccllal8KEGZpYyIW2plnrhYmmgDeZliZjcE5mZzAEXDFbliq6OZea7pJZ2V9grmnYmiyGd2ghhb255aDSrboa402GWl0Ggooo5WYZrpYnpp26qmKlS5I5KekdhpaqBP6WOqqmnLK6qtU9gjrrJi6SuutRdqK66466srrry/6CuywJp46najEJjujsMo2WyGzzkaLILTSVusftdZmmyCqJI6q7bf7YQvuuOWJS+652ZmL7rrNqcvuu3VyyyK89HLnbr34snZvvvyetm+/AAMq76UBF4znwDgarLC+CKu68MNkNuwtxBRH9m//xRhvKXHGHDu6cccgE/pxyCQrOnLJKGd5csos87lyyy1fDHPBMs8McM0284tzzvju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CBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEkymSBWJVOqBHnS1cqXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjt3QhXcp0mdKmUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cP/jyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7dvhS1/C38UfLjx48iTK1/OvLnz59CjS//3dHru6taza9/Ovbv37+DDix9Pvrz58+jTq1/Pvr379/Djy59Pv779VAwYfCx+X9+ECi64UMEEHvHXHz4VYIDHDW+4cKBlDNQwhwce3FDDg5ORcgELO5Swgxs16IchZKQ0oEAJBtBgxwcijvgYAyaWoIESK7boYmMwnjhjjTe+GOOOLI6GnXg5okhjkKINGV7/kUDa2KNiTB7p5JOIRckjlYtZiSSWiWk5JZeEeQlmlz9KOWaVZV55ZmFFGmDmmmymuSWcgrX5Jp11xuimmngCZiefffolZqB+yvkloXkNimhfii66V6OOJmpopHxBSqldll5KV6aaysVpp3B9Cqpboo7KVqmmqoVqqmityqpZrr5KVqyyikVrrWDdiqtXbao4566qXjBDhzsACmxaEU5Y4QcHoHRsWgni8YKFzbr0LFr/uVCDCwRe2xYADFxwwaHennXAAeWmq+667LbrbmwAvJtKvEGBS4i48nKCbwAM0BsUCwFggEG+mwgcAMBAxYswwaYA7C9QVzC8ScRUSFxW/8UWOwrAwxcMnHEpGFxw08aIdPwxyCLzZGIAHCRwsiYJcADUyi2/nEnMNues88489+zzz0AHLfTQRBdt9NFIJ6300rgZyPRPTj8t9dRUyySAAIpcjYjWAXCtitddY50K2JZcbbbZsIB9NiVkP9K2Jm93Encvc4PWttpi1+0J3l+LjcnZa7+Ct96JEL6133IjDorhtTBe9eOQRy755JRXbvnlmGeu+eacd+7556CHLvropJdu+umop6766qy37vrrsMcu++y012777bjnrvvuvPfu++/ABy/88MQXb/zxyCev/PLMN+/889BHL/301Fdv/fXYZ6/99tx3b5ji3ocv/v/45KNOACN+n1++JHeDv7417b8vf1nuz2///fjnn7HYBujv//8AnE79AjiNB0xHSYOJ340QKBgFEvAfA3ygBCdIwdMALoIVJMYFM8jBDnrwgyAMoQhHSMISvgOD3ImaCX2hwhW68IUwjKEMZ0jDGtrwhjjMoQ53yMMe+vCHQAyiEIdIxCIa8YhITKISl8jEJjrxiVCMohSnSMUqWvGKWMyiFrfIxS568YtgDKMYx0jGMprxjGhMoxrXyMY2uvGNcIyjHOdIxzra8Y54zKMe98jHPlpEFIRYWdLapoAG5ASQARAk0ghpSJs4y2RcdFbApuayQI7sYZcjGUw0mQiM+SzVAZVEBCghwUmakEtnHJBZIlJJiAR48pROGcX/ZnANBqYDYAZL2oXqlZ8AgAAEYCTZvgjRSy2S4lyIKKUfl8nM+CjTi89spjSnSc1qWvOaqGthFrWJzW5685vgDGfybIlFcorznOhMpzrXyc52uvOd8IynPOdJz3ra8574zKc+98nPfvrznwANqEAHStCCGvSgCE2oQhfK0IY69KEQjahEJ0rRilr0ohjNqEY3ytGOevSjIA2pSEdKD25esSUbS6lKV8rSlrr0pTCNqUxnStOa2vSmKg0EACH5BAUEAAEALF8AZwCxARUBAAf/gAGCDISFgoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+gmQwXDaUNFwyhqqusra6vsLGys7SPNSwKuSYfFbW+v8DBwsPExZcKczslyyU7MwjG0dLT1NXW1Bok2gYlOhPQ1+Hi4+Tl5jMBGhEWIh0dMXcVE+b09fb3+KokFjYCBC0w4s3LR7CgwYP3SIgQ4K9FkjsuBiKcSLGixVokRjD89zAiuIsgQ4ocOUnhRoAQJZJcybKlRZMNA0Z0SbOmzXow/8lUebOnz5/BcqKcCbSo0aOsMp7cibSp06eVhDKFSrWqVakprWrdehQrUa5gw7r0ylOs2bMUyaJdy9ag2rZw/+OWeyu3rl1pdO/q3esrL9+/gJNqjJk1sOHDnvwiXsw4kuLGkCMfeiy58mLKljMDxqy5813OnkPDBS269FnSplNzRa26NVWlhL+6ng2WNe3bQG3j3m1TN+/fLH0DHx5SOPHjaRfGLou8OUnjzqMnXJggAQemBw5I337RZPXrWbNzHz9x31KB5NMjVGchQQvwstXLv5dNG4kSLzwKEj+//7hkzJTgwQvyHMKffwhW84EJuSiAwQwuSHBgghROg4B2plxwwQEXalfhh9MUYgiIJJZo4okopqjiiiy2KAwCH7koYysTzmgjKBreqKMrNezooyfo/CjkkEQWaeSRSCap5P+STDbp5JNQRinllFRWaeWVWGap5ZZcdunll2CGKeaYZJZp5plopqnmmmy26eabcMYp55x01mnnnXjmqeeefPbp55+ABirooIQWauihiCaq6KKMNuroo5BGKumklFZq6aWYZqrpppx26umnoIYq6qiklmrqqaimquqqrLbq6quwxirrrLTWauutuOaq66689urrr8AGK+ywxBZr7LHIJqvsssw26+yz0EYr7bTUVmvttdhmq+223Hbr7bfghivuuOSWa+656Kar7rrstuvuu/DGK++89NZr77345qvvvvz26++/AAcs8MAEF2zwwQgnrPDCDDfs8MMQRyzxxBRXbPFUxRhnrPHGHHfs8ccghyzyyCSXbPLJKKes8sost+zyyzDHLPPMNNds880456zzzjz37PPPQAct9NBEF2300UgnrfTSTDft9NNQR53yBSSnMjIAIQcCACH5BAUEAAEALGAAZwAYADIAAAf/gAGCg4IMhoeGhIqDFxcBDZCRkBcMi4oYGAqam5ssFRMIl4slpKWkHj+flQEHB4sksLGxJS81EoOtiiK7I7u+Ij1AMxWWAQI2NgLKy8swPiHExcbM1M4KFQy5C4rUzATWxNrc3QIELSs+16yu24Tk5efp4ezj3ebo6uLu5Pfy6wHtRAh61y8fvX324hkEKGjEQH4K5zFESK2gxHaDCEb8h/FhQnwX61XcqC8jRJAcRXojedDkR3/6BE57ubCdw5kjUZb0mNOfNI0of570WQwoUUtG1QmlGa3oUKVOmVqSmbQpoZtVpeFcGTRqT6hIn1pdlHXp17Eql1k0a88ZBrQBSRy+a+bjbTECW6vBdKWIAIEEgAMH1snXkixZJXaADaBglKlSHnZ8qBCKUA0WgzhpZuFCQuV1AFYJkkS6keh/lhAhOgCgtWsAgQAAIfkEBQQAAAAsYgBnAB8AOQAAB/+ADIKDhIWGhwCJiouMAA0NII+Skw0XFwyNmYkKCkidnKCgIR8VmpklqKmqqjsspo0ksbKzsgYlPwsIjSK8vb6/vh0dSkcVE6+KAsrLyzY2AgQtScXHyADM2MvRMNTW2d/b1CPf5OXR08bI5djn3a/rzO3p7/DK8tWm9fbS7vn69yL0wbs3TqA5fvP81bun7h9CfJoEMqS38GHDeOQsUmQWIIXHFAGgaVTITEWGkxlUiEQ3IaBEAio2oFRBgKBBAgJMzqw5MmI2nSdVTiS5rOPHkEN9QluXNJPEnk4dsrw4EGqjp1M3Mn3o0iC4hwW9Zmt6VWo/pdpqsrPKCBzOeGxpF2E9G3Xs2qxaa77VFrdtvL378Gr9yi3hqwSIE/NIjLgFh8IQTdGaLKvEDcOmVmlO5UEHZk2hQmPAwAlDjgoIdFmrZOnCJEuPQFyyxuhAokODaC9KnVq379/AgwsfTpy2peKZRodezikQACH5BAUEAAEALGQAZwCoARUBAAf/gAGCg4SFhoUMiYqLjI2Kh5CRkpOUlZaXmJmam5ydnp+goaKjpIINkg0NIKmsra6vDRcXDKW1tre4ubq7vL2+lAoBwYcKxcbHyMnGIR8VCL/Q0dLT1NXW1wEl2tvc3d7bHiYTz9jl5ufo6eq1JO3u7/Dx7gYlLxUT6/n6+/z90iIAAwocCBCCARQjAnboEOOECwn+IkqcSLEiIQECAmDcyLHjRoMqOBJoAYPCQ4soU6pcOc2jS44gRZI0CZGlzZs4c2p6yTPmxpElT+ocSrToTZ4vfWIEStOo06dQ+SF1qVQAU6FRs2rdGm2qx6pXa3IdS7asKK8dwc7Earat27eR/9DCNBDy51qxcPPqNSv3I12ZQfHuHUz4qUcCSNUGLsy48dC+GBU3dUy5MkrIAiSztcy5cz7MmgV7Hk3aGui/dheXXs0a14YMsGPD3gA5dOvbuEGliMC7t+8UfW3nHk7ckgXfyCNYEJkY9dK7xaNLN3Q8ee/lcoVP3168unXlwZ1bhc69fG7v1rGj1W6+fWn0ydV7Ze++Pmf4yOVPpW+/P2MBu30XAXDZiReWfwhS9ppssdEWXl3PqZbghJydBuF4ElKoYWMWAjbZhiAS1mFqH4ZoIlwjRljiiSyWlSKGK7Yoo1YvHjjjjTTWZiB5OPZ4FEaF1Mijj0SqBORFOl5oY/+RTP74oIebNSmlPxkh+SSJUU6pZURCZrjll/10GSOYZKojZpZlpllOAmyy2UILbcbZJkhxtsDBCmOqqec18vTpZz1o7imoNN8UaqgHL7iAz6CMQlOMIMpEKikGLLiAADmNZrpLKqbA4umns2gqajSOlGrqqKimquqqrLbq6quwxirrrLTWyhmntuZay6O69urrr8AGK+ywxBZr7LHIJqvsssw26+yz0EYr7bTUVmvttdhmq+223Hbr7bfghivuuOSWa+656Kar7rrstuvuu/DGK++89NZr77345qvvvvz26++/AAcs8MAEF2zwwQgnrPDCDDfs8MMQRyzxxBRXbPH/xRhnrPHGHHfs8ccghyzyyCSXbPLJKKes8sost+zyyzDHLPPMNNds880456zzzjz37PPPQAct9NBEF2300UgnrfTSTDft9NNQRy311FRXbfXVWGet9dZcd+3112CHLfbYZJdt9tlop6322my37fbbcMct99x012333XjnrffefPft99+ABy744IQXbvjhiCeu+OKMN+7445BHLvnklFdu+eWYZ6755px37vnnoIcu+uikl2766ainrvrqrLfu+uuwxy777LTXbvvtuOeu++689+7778AHL/zwxBdv/PHIJ6/88sw37zyRsnSeSOcAVG/99dhnr/323Hfv/ffghy/+E/jkl2/++einr/767Lfv/vvlBwIAIfkEBQQAAAAsYgBnAG4AMwAAB/+ADIKDhIWGh4iJiouMjYsHBwCSk5SVlpeYmZoADZ2en6ChoqOkoRenkZuqq6yUCq+wsbKztLW2CiGxJjk1Eq2/wJglw8TFxsfIycrHHjcuDMHRwCTU1dbX2Nna29gGJTsf0NLjmyIdHSIjIusj5+nq6/Hy8/T19SPqOD1ELBcMqeQCTrIhgAABAQgFEDSYsKHDhxAjRrQxpEi/fwIzShKQIMHDjhJDihRJscgMfxo1cvToEOTIlzAVVjwpLmXAmDhzNix50aZAnUBj8kTpk1zQoyQr9iw6DqlTiENrMg32tGrCqMEITAVg1SrWrVS7Pv0K9pfYsUqJlm111inZtav/2iJ9u2rDgLt4897NoDWa3KN0VUHQS3gAhKZ/gQbeNLhw3sPSEitOK3VVY8d3IfuVnHOxpsuYNYflLJQyMNCORQMjjZOsiJeoC6s2yxom2RGwMeOdzbb2S8+ZYhPmzcr3b9O/hOslHtd4UotqWSl/jNi5ROCYMui+u6G6dajI4Tb/Dh565YB9vZPfGV78pvXll7p/D9+ha5jpi9a3H37EfEz7sWfef/QFKNOABGZiIELYEbjggfJlpd+CDf7XkEEYflcSTQkqeGGG1m0YXYeUPCgiNJCQSElHLCbAQ4sttiDjjDDWaKONL7LYgg1GmIRSiipSws2QRBZpjQEaeGDCRI8ABQnAMlBGKeUx4DDppCS1hKBlLrd06WUsWprQS5NOnnJKKCCkCUIpbLYJSpqnnBckJJA4Yuedh1xZCQJ8IqAnJoEAACH5BAUEAAEALGIAYACrADoAAAf/gAGCg4SFhoeIiYqLjI2Oj4gIkgiQlZaXmJmam4uTlJygoaKjpKWmp6ipqqusra6vsLGys7S1tre4tQy7vL2+v8DBwsPDB7nHgw3Ky8zNzs/Q0dLRF9UMyLUKhArc3d7f4OHi4+TjGBg5FZ/YtyXu7/Dx8vP09fb2OyYT6+yzJP8AAwocSLCgwYMHDZTQUWGCrRGCRIjo0CEARIkjKIoYAbEUR4kBJIocSbKkyZMoN6pMSZJijBMuJNwSEMCGAAIEBNG0idOVgJ9AgwodSrSo0aNGCbSAQaGGTFw/EyQgFHVqK6RYs2rVqpRpzFxVqQqQ6nOr2bNbu1KIKaIfLbRw/+MSVfvV7Sy5eOXSfWo3Vt6/Z/f2lQW4cFbBjXIODmW4cdKla/kyormYk+PLQhFXvoq58962nBRvVtTZM+S6iUdrKo1ZsyIVEAzInk1bNgQVqhGxvuw6UYQBjAZEyH1ot+PeiCAAXzQAAnFDxhsjP6Q8uPPnYqMDnm6oOvPr2HVq335aciLvipqHHzSevFfzyZenBx++/V/uhdAnUr8+gP28nzGiHyL8rfcfXvgRMuAhBdZ3YFwJDrKgIQ1i9yCE5TUyYSEVPnchXBEK8ltww/X3IVp7dfRabLW1eFt//p1oVoiNUAZjjDJyVZ6KmohmYo46vnfjKEAGGdkjNg6pW8ORWAXIiI9KFsckUjRGOdmUR1VpJWlYPibklqt1WZSW7IHJnphzZYgMTUnCgmaaX67Z5itvDkWmmYXUmZma2CTAwyFkicKDVYO0MKhUUrVgKKKJLsqooociCimjCShK6aWYUtoCByscieclCIUq6qikklDCC059msk9rLbqqqsevOCCQ3ZxEws4IYSAq67f5Lrrr+UEiwELDfEzizKIIAuLMyCAwKyzzTT77LTTVNvABdfgsgs7xHTr7bffHgMAAKq2EggAIfkEBQQAAAAsYgBnAKgBCwEAB/+AAIKDhIWGh4iJiouMjY6PkJGODJSVlpeYmZUHkp2en6ChoqOkpaanqKmqjw2trq+wsa0XF7K0nAAICKu8vb6/wMHCw8SKCsfIycrLxxgYzDMfLhO5u8XX2Nna29zdjiXg4eLj5OXhO20u3uvs7e7v8Isk8/T19vf49BoeNzXx/wADChw4SoTBgwgTKjTYAYUBCAl7KDnzgQHBixgzaoQnoKPHjyBDdiSg4iHIIUkoWtzIsqXLl6lEypRJ0uTHIVFUwtzJs6fPQzODfqwJ4WTOij+TKl16UahTASUhELh5dCXTq1izansqNKpRnVrDih2rimtQr1TBkl3Ltu0jszP/0XrEqdatXVMj7maEK1NuR7pI9QoWlXfwQL4i/QoAbNWw48c+EYdUzBiy5csuJYOkXBWzZ08qhIgeTZq0is+lNH/kXBe160QWBsieTbv2AAuvQ6n2yDpw7t+FMgxwNCADcE+7O/ZufPy3cOLGm0dKDtXm3M7SgT9vVDw7JOrLvTsfzj26eEbgrf/Ffh71dkbd2y9KXzStb/mY3y+Kjx8R/a/39QeZforwJ2Ah/92UUoAHGkZgIgY2KEiCcy3InISCPYhIhBJS+JeFGD6m4SEcNujhYiCGKFZhiYxoSIkHnohSayra5WIhMAooY4o16hWbbUDKhluNO9LYY1uhlaak/2in9Vgkg0cmJcIoAkQJwJMXWqklZFhu6eVlXX7JVpViGhJmmWjadWaabJK1ZptwZvVmnHQqNWedePJUZA559vnTnn4GupOM7AlqaEYJJKrooow2qmhUjBrB46GUXpTPpZjSY0AJO+SQZaWgwmPOqKSK48ELNXwa6qreMOPqq8yYkEMNErBqKzyy5KprLLQwkMWtwLajybDEWhLsscgmq+yyzDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGK+645JZr7rnopqvuuuy26+678MYr77z01mvvvfjmq+++/Pbr778AByzwwAQXbPDBCCes8MIMN+zwwxBHLPHEFFds8f/FGGes8cYcd+zxxyCHLPLIJJds8skop6zyyiy37PLLMMcs88w012zzzTjnrPPOPPfs889ABy300EQXbfTRSCet9NJMN+3001BHLfXUVFdt9dVYZ6311lx37fXXYIct9thkl2322WinrfbabLft9ttwxy333HTXbffdeOet99589+3334AHLvjghBdu+OGIJ6744ow37vjjkEcu+eSU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qqy26uqrsMYq66y01mrrrbjmquuuvPbq66/ABivssMQWa+yxyCar7LLMNuvss9BGK+201FZr7bXYZqvtttx26+234IYr7rjklmvuueimq+667Lbr7rvwxivvvPTWa++9+Oar77789uvvvwAHLPDABBds8MEIJ6zwwgw37PDDEEcs8cQUV2zxUcUYZ6zxxhx37PHHIIcs8sgkl2zyySinrPLKLLfs8sswxyzzzDTXbPPNOOes88489+zzz0AHLfTQRBdt9NFIJ6300kw37fTTnzhRMgsiu1BBIAAh+QQFBAAAACxYAGcA9wAZAQAH/4AAgoOEhYaHiImKi4yNjo+QkZKTlJWKDJaZmpucnZ6foIoNDQCYoaeoqaqrrIQKCiw1FROttba3uLglO3MYFbnAwcLDkCQkGh5zNabEzc7PtiIAERo7MxfMiQIC0N3e34vbFiQlCg3Z4Onq64XbPOTm6Ozz9M/bCfDn9fv8w/f58voJHHjqXzl9BBMq9GQw3sKHECk1RBixokVtAvAdDHixY8SJHD2KTAhypEmIJU+qJJhypct9LV/KXBdzpk1vNW/qbJZzp09gPX8KhUSgCwFBXboIKqpUUdChUBdtEIICgAghQqShELIhXEaAUcM+mlr1alYAW7s6/bpRrNtFI/9SjADQJUUKpXHnrtXo8K1fR0cbPf1LONLgwogZHU7M+NDixpAFPY7ceDLlxJYvF86s+e82AmA7iwbwOfRozaXbnkYtALTq1ZQ5w4Yqe7bQ2rZ94s6tU5xp3mJbtDhEzRo24JCRKQuJ3K8cX80hx5oVvbr169iza9/Ovbv37+AVXbgQPiwGDOVtIUAgaH16n+4BxH8v9AD9+/jz69/Pv7///wAGKOCABBZo4IEIJqjgggw26OCDEEYo4YQUVmjhhRhmqOGGHHbo4YcghijiiCSWaOKJKKao4oostujiizDGKOOMNNZo44045qjjjjz26OOPQAYp5JBEFmnkkUgmqeSokkw26eSTUEYp5ZRUVmnllVhmqeWWXHbp5ZdghinmmGSWaeaZaKap5ppstunmm3DGKeecdNZp55145qnnnnz26eefgAYq6KCEFmrooYgmquiijDbq6KOQRirppJRWaumlmGaq6aacdurpp6CGKuqopJZq6qmopqrqqqy26uqrsMYq66y01mrrrbjmquuuvPbq66/ABivssMQWa+yxyCarLJXzMcsek4EAACH5BAUEAAAALC4BcAAcACAAAAdngACCg4SFhoY8h4qLjI2Oj5CRkpOUlZaXmJmam5ydhygZGRYCACqhKgACFqEoBI0OEREbpBmxGQAEG7EOjrCytLapuhG8jRtCQiqkKMgoqSrIG5ikrp7W19jZ2tuWCZ3e3OGN1ZsEgQAh+QQFBAAAACwtAXAAHQAgAAAHY4AAgoOEhYaHCYeKi4yNjo+QkZKTlJWWl5iZmpucnZYPEREOAoKgEQ+CAg6hqIwQAwMQpACvsQACArUQjbqzuqm/jA8QEA+zw8WpyK2Ys57P0NHS04MEntad2Jza1N2QiZ0JgQAh+QQFBAABACxkAGgA5gASAQAH/4ANDQGEhYaHiImKi4yNjo+QkZKTlJWWlAoKl5ucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq3Bka7huFEO4QhRvuGhnr+ocZA4T5hAwELARwAMB9+/r9KyQwQMMABQ8iXJfBgEV4hCBYpEdog0UDEieKHEmypMmTKFOqXMmypctWCV6SjCmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqDSBoaTYGDJxiAwBAqtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOvjyp1Lt67du3jz6t3Lt6/fv4ADCx5MuLDhw4gTK17MuLHjx5AjS55MubLly5gza97MubPnz6BDix5NurTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvLjx48iTK1/OvLnz59CjS59Ovbr169iza9/Ovbv37+DDix9Pvrz58+jTq1/Pvr379/Djy59Pv779+/jz69/Pv7///wAGKOCABBZo4IEIJqjgggw26OCDEEYo4YQUVmjhhRhmqOGGHHbo4YcghiiiLZmcJsiJKKao4oostujiizDGKOOMNNZo44045hgIACH5BAUEAAAALHQAfQDOAB0AAAesgACCg4SFhoeIiYqLjI2Oj5CRkpONBJSXmJmam5ybEQOgFoMGoAaDFqADEZ2sra6vsIkQqaKCqQOnqRCxvL2+v4uzoYO3uaC7wMnKy52fw4KkA6aCqKCrzNjZ2q6W297f4OHi4+Tl5ufo6erp3evu7/Dx8vP09fb3+Pn6+/z9/v8AAwocSLCgwYMIEypcyLChw4cQI0qcSLEiNgwYLlywaFHjgQMcOSJAENJiIAAh+QQFBAAAACwiAX0AHgAQAAAHRIACgoOEhYaHiIQGA4wFg4yMgwGQBokCkAOOgpiSnImYAY+QnaOJi4yhm6UCk4yVlrCxsrO0tba3uLm6u7y9vrkEv4KBACH5BAUEAAEALHAAfgDYACIAAAeqgAGCg4SFhoeIiYqLjI2Oj5CRkpEDlQMCigKWA5Odnp+goaKjnZiJpqSpqqusraKoh7Cus7S1tp6bsoWalre+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+TGuuXo6err7O3u7/Dx8vP09fb33wn6+/r4/v8AAwq01qBgg4EIEzFgkLDhIQAAFixwSLGixYsYM2rc+K8gR4EKFHz8FwgAOw=="
  }, props)), Object(external_wp_element_["createElement"])("img", Object(esm_extends["a" /* default */])({
    className: "edit-post-welcome-guide__image edit-post-welcome-guide__image__prm-r",
    alt: "",
    src: "data:image/svg+xml,%3Csvg fill='none' height='240' viewBox='0 0 312 240' width='312' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0h312v240h-312z' fill='%2300a0d2'/%3E%3Crect fill='%23fff' height='108' rx='2' width='216' x='48' y='80'/%3E%3Cg stroke='%23000' stroke-width='1.5'%3E%3Cpath d='m158.917 142v-15.111'/%3E%3Cpath d='m154.472 142v-15.111'/%3E%3Cpath d='m162.333 126.75h-8.889'/%3E%3Cpath d='m153.139 130.889v4.071c-1.928-.353-3.389-2.041-3.389-4.071s1.461-3.718 3.389-4.071z' fill='%23000'/%3E%3C/g%3E%3Crect fill='%23fff' height='21' rx='1.5' stroke='%231e1e1e' width='117' x='48.5' y='53.5'/%3E%3Cpath d='m70.592 53v22' stroke='%231e1e1e'/%3E%3Cpath d='m144.432 53v22' stroke='%231e1e1e'/%3E%3Crect fill='%23333' height='8' rx='1' width='9' x='55' y='60'/%3E%3Cpath d='m150 63h2v2h-2z' fill='%23333'/%3E%3Cpath d='m154 63h2v2h-2z' fill='%23333'/%3E%3Cpath d='m158 63h2v2h-2z' fill='%23333'/%3E%3C/svg%3E"
  }, props)));
};
var images_BlockLibraryImage = function BlockLibraryImage(props) {
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("img", Object(esm_extends["a" /* default */])({
    className: "edit-post-welcome-guide__image edit-post-welcome-guide__image__prm-np",
    alt: "",
    src: "data:image/gif;base64,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Y8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimqOKKLLbo4oswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnk/5JMNunkk1BGKeWUVFZp5ZVYZqnlllx26eWXYIYp5phklmnmmWimqeaabLbp5ptwxinnnHTWaeedeOap55589unnn4AGKuighBZq6KGIJqrooow26uijkEYq6aSUVmrppZhmqummnHbq6aeghirqqKSWauqpqKaq6qqsturqq7DGKuustNZq66245qrrrrz26uuvwAYr7LDEFmvsscgmq+yyzDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGK+645JZr7rnopqvuuuy26+678MYr77z01mvvvfjmq+++/Pbr778AByzwwAQXbPDBCCes8MIMN+zwwxBHLPHEFFds8Y3FGGes8cYcd+zxxyCHLPLIJJds8skop6zyyiy37PLLMMcs88w012zzzTjnrPPOPPfs889ABy300EQXbfTRSCet9NJMN+3001BHLfXUVFdt9dVYZ6311lx37fXXYIct9thkl2322WinrfbabLft9ttwxy333HTXbffdeOet99589+3334AHLvjghBceXyAAIfkEBQQAAAAsdQA4ADMAMQAAB/+AAIKDhIWGh4iHD4sPCgqLiZGSk4WOkIQJmQmUnIeam4eOCAgcpaanqKmqq6UICoYJpA1ucLW2t7i5urtwbg0Im5uOCgizcG/IycrLzM3Ob70cg8SuHLTHz9nazb2uotXY2+Li0QrCrxzh4+vO0QiF6ezy3G4c74Tx8/rI7vDq++z64fsHcJzAQfkKBqx3DyFBcT4izjsoKOE6CxF9TGTobx7GiBbkUQRgcdxHHyEX2uso7+TGlQM9ZnzZsOJDbSeNiOQYs2VGnSprkryJzIIFI0iB5kz5Jmm2kSWVZZxKterUZ1CJWt1qFStPh8+4ip3Z7qvNZ0bTqj25Vq1XmGCTfUrcCfesXJR0hUbdxjYvS3Z9g/69mJGpQbNDZUYEui6rYh+MD9dNfDcy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/P3+/wADChxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKhPRkb3NVqK9FGCUI6YSp1KtarVq1YFYd3KtavXr2DDih0bVitZq6LSQp1KiBGCBgX/4sqdS7eu3bt48+otwITJ3L57AwseTLiw4cOIEwcGLJex4sENOCBQELWRggY+sNDYzLmz58+gQ4seTbq06dOoU6tezbq169ewYWMx0GAyAMsNxiTx4oKE79/AgwsfTry48ePIkytfzry58+fQo0ufHt0FiiAmGijQCoCDgSFeVHTpokL8+PHl06svTx79evXu38tPH1/8fPrr3aMnf998f//+8ffffwLuN+B8Bh6YIHvtHeggfg9GKCGC51V4XgsoYFFAUwA0MEASLRwgIgwwiDgiiSimiGIKKrbo4oswxijjiSfKaGOJB5BY44087shjij7OmKOKQf5o5JFIImni/5JLdkHCEUw8sZSHIBLA5JVYZqnlllx26eWXYIYp5phklmnmmWimeSWJK3TRApSVJUBlCyuoaeedeOap55589unnkG2+yYQjg8x5wAp1/qnoomoSYCWTjvoZKaOUUuomlFIW+mGIKwAh5qOVhtrnpEuSuqepoqaK56VREtrhpqrGKmusoM665aQ6nlprlrmayCqHhtoq7LDEhupopL3miSqWyR7AaqaCGNpssdRWS+upYe7apbYmTuuroNC+CuKQ1pZr7rnokpvls64Gq+Wysh7Lbbr0pjlvvSY6iigBKYDbLqy3WglDCgKm18LBCCes8MIMN3zwfA5H7HB5Elds8f/FGGes8cYRU8zxxxfThyOW+q7Ar7+ajpslqSmoQIIXKMQs88w012zzzTjnrPPOPPfs889ABy300EQXvbMXJHRxb5MoRwswyY+6jAQYZIBg9dVYZ6311lx37fXXYIct9thkl2322WinrTbYImQxQgtKc8luyiHe2oUXWYBwAxhl9O3334AHLvjghBdu+OGIJ6744ow37vjjkEd+uBR6b9GCwDBeWkC47q7cAg052LAbdaSXbvrpqKeu+urIueDFFjfcMEIXMmrO+dNXCkKAFzfgEJ55FgYv/PDEF2/88cgnr/zyzDfv/PPQR+98eSRsAUIZSW85t9Mq89pFDDmcQOf/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"
  }, props)), Object(external_wp_element_["createElement"])("img", Object(esm_extends["a" /* default */])({
    className: "edit-post-welcome-guide__image edit-post-welcome-guide__image__prm-r",
    alt: "",
    src: "data:image/svg+xml,%3Csvg fill='none' height='240' viewBox='0 0 312 240' width='312' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0h312v240h-312z' fill='%2300a0d2'/%3E%3Crect fill='%231e1e1e' height='21.3714' rx='2' width='21.3714' x='61' y='30'/%3E%3Cpath d='m71.75 35v11m-5.75-5.75h11' stroke='%23fff' stroke-width='1.5'/%3E%3Crect fill='%23fff' height='154' rx='2' width='210' x='51' y='57'/%3E%3Cg stroke-width='1.5'%3E%3Cpath d='m217 167v11l5-4.125 5 4.125v-11h-5z' fill='%23000' stroke='%23000'/%3E%3Cpath d='m165 169v11c0 1.105-.894 2-1.999 2-3.104 0-9.127 0-13.001 0' stroke='%23000'/%3E%3Crect height='13.5' rx='.875' stroke='%23000' width='13.5' x='147.75' y='164.75'/%3E%3Cpath d='m148 175 3.714-2 2.786 1.333 3.25-2.333 3.25 2.333' stroke='%23000' stroke-linejoin='round'/%3E%3Crect height='16.5' rx='1.25' stroke='%23000' width='16.5' x='82.75' y='164.75'/%3E%3Cpath d='m83 177 4.5714-3.333 3.4286 2.222 4-3.889 4 3.889' stroke='%23000' stroke-linejoin='round'/%3E%3C/g%3E%3Cpath clip-rule='evenodd' d='m164 117.5h-16v-1.5h16z' fill='%23000' fill-rule='evenodd'/%3E%3Cpath clip-rule='evenodd' d='m164 124.5h-8v-1.5h8z' fill='%23000' fill-rule='evenodd'/%3E%3Cpath clip-rule='evenodd' d='m164 132h-16v-1.5h16z' fill='%23000' fill-rule='evenodd'/%3E%3Ccircle cx='150' cy='124' fill='%23000' r='2'/%3E%3Cpath d='m223 116h6v6h-6z' fill='%23000'/%3E%3Cpath d='m214 116h6v6h-6z' fill='%23000'/%3E%3Cpath d='m229 116v9.999c0 3.199-2.5 2.998-4 2.999' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='m220 116v9.999c0 3.199-2.5 2.998-4 2.999' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='m93.9167 131v-15.111' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='m89.4722 131v-15.111' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='m97.3333 115.75h-8.8889' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='m88.1389 119.889v4.071c-1.9278-.353-3.3889-2.041-3.3889-4.071s1.4611-3.718 3.3889-4.071z' fill='%23000' stroke='%23000' stroke-width='1.5'/%3E%3Crect height='25' rx='3.5' stroke='%23007ca8' width='189' x='61.5' y='67.5'/%3E%3C/svg%3E"
  }, props)));
};
var images_DocumentationImage = function DocumentationImage(props) {
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("img", Object(esm_extends["a" /* default */])({
    className: "edit-post-welcome-guide__image edit-post-welcome-guide__image__prm-np",
    alt: "",
    src: "data:image/gif;base64,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Y8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimqOKKLLbo4oswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnk/5JMNunkk1BGKeWUVFZp5ZVYZqnlllx26eWXYIYp5phklmnmmWimqeaabLbp5ptwxinnnHTWaeedeOap55589unnn4AGKuighBZq6KGIJqrooow26uijkEYq6aSUVmrppZhmqummnHbq6aeghirqqKSWauqpqKaq6qqsturqq7DGKuustNZq66245qrrrrz26uuvwAYr7LDEFmvsscgmq+yyzDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGK+645JZr7rnopqvuuuy26+678MYr77z01mvvvfjmq+++/Pbr778AByzwwAQXbPDBCCes8MIMN+zwwxBHLPHEFFds8Y3FGGes8cYcd+zxxyCHLPLIJJds8skop6zyyiy37PLLMMcs88w012zzzTjnrPPOPPfs889ABy300EQXbfTRSCet9NJMN+3001BHLfXUVFdt9dVYZ6311lx37fXXYIct9thkl2322WinrfbabLft9ttwxy333HTXbffdeOet99589+3334AHLvjghBceXyAAIfkEBQQAAAAsYAA4ACgAYAAAB/+AAIKDgiYmhIiJiouJHh6GjJGSghcAjjExjoIlnCWTnwAXnEISEkKcAJ2eoJMdb0kgIElvHauQrJIlHDNKSjMcQ7aHuIqQJh4sLi4sj8STkI4sHx8zmasXlc6LHjQzHy1LHtqg3DMt4OLjk+Xn4err3e3p74zs6PSR9u742/H3/Ir0zQNISCDBRv72HRxkcCHDhAMXNnRoCSJFQRMdZpRo8eLGgx8JhgQ4kl9JfCfppXy3Ul3LcS+1eThi7h/FmM5wEtOJiycrn+Q63hSqkSjHmgqLIo0I0mjTpRcrQvXoVGRVkldNZkW5VWVXll9dhoU5VmbZnGd3pu259mfboFNoh8ZVKi8q0E934c09Wpfq3qd95cq7xRcdYcCGhxUOd9jq0sZYHytGzHiy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bwAFbNq4jVzJslDIljBF2bMw6FjMmw9LosPJs9HHCBlaROFgs6fRfx/HHV0qTxfQjCqZSu32cqpVQdAwDtV4tauyXR+rel25UxAGoRw6jF3bC+wAsML/2N7cVSit3Lu/BqbCO1JcNGxb+QomlVRXgQCDRd669TRw4seQB/vVajey5ctj37691Lgy5s+gr1pAqza06dNzr5FGzbr1yJMfHLueTRseOmedS9fezRse2qK9gwuf9tvV8OPIY5WkgEGQkOTQo5sSK726dZ+KOpSIer2790FgCWnn/r18d+rm00MvOwiM+vfRB0YQBEY7/PvRKdC3j79/7YH6DRIEACYY59+BrRVASH0DFojgg5/lwgkF/YAhRAkGQqhhZC+1YCGGG4Zo2S4UflBfCSKmKBhihQR4ooowyrVLAJeU+GKMOHp12wDzGXBjjkBOdRs/JvIX5JFLbWKj/5FINmlUAC52MKCTVLYUXntSklfllhRtpkkEGBSJIpdkVrSYQiGIWeaaDmkSACZEfsjmnBSBqSadeN6DSpzj5emnOQqCx+d2fxZqDpxp/mjoossEOsg+iTLJ6KTI6DMopZjmhUoBS46Z6aezFATpB16MB4CWoKZaSUn7hFnqdqeqKmsom47qBaGz5lpJrUR6EauuwHpUUo++ohrssYns6eqvyDaryG0lFuvstIcMm6a01GbrUiFeeGCstsgOI4gGH4ThLbja7nmtCd+iG6wm0bLrLrhoknruvNNu0uu9+Dar77X89gvspvu2K3CmvAJs8MEI/1tuwAzn6nC3C0e8aP9CtkJssaxfKrwxskSaW/HHfmLcq7wkz9oxqSin/CnBaYbRMiI9ujynXj3KbGwNVCjg889ABy300EQXbfTRSCet9NJMN+3001BHLfXUVFdt9dVYGz1FGU2EwWwhPEshRdZkl2322WinrfbabLft9tZdf01I2GO7bffdeOet995899003CIjQrffhBdu+OGIJ0444BoLMrjikEcu+eSUV874zlSIXfnmnHfu+edXXy545nWDbvrpqKduOdciezo36arHLvvstLd9ueuDIAF77bz37vvvSYt+iO6aA2/88cjLLrwhjyfv/PPQR7482LtHb/312N89/evFZ+/99+Bbvf3/IM2Hb/756Bc9viDEl57++/CHv74B7cdv//3Xz18+/vz33zvggjgVefbnvwIa8HQANIAABeiBGNTvgBCMYOcut8BTNfCBEsygBhM3vzRUb4MgDKHe9PdBEZrwhGkjYfdQyMIWho51jTMAAV1IwxoubX4zaIMNd8hDpcFNDIqYARt6SMQiBg1uM2CEEZdIRCQqkYlQrCHc0hDEIUbxiixEIg0SIUQsetGEWjSECWIgCCt+8YwZDGMhxlhGNLoxgmpEhBnfSEf+xfEQc6yjHuF3R0PkcY+ANJ8TFVGHQBryfINMBBtsNqlEypGRjHIkHiG5KEn6kZKGghsLFlEHTBaq/4+F6KQn/QRKQixylHmyZCFOiUo6qdKUrcRTKQfByliuaZZltCWbFIBLA9RSl1viJddmsEVFHvKY32uAE5pATEX8EZnQTJ4ymVnMQ7DgmdHM5u8aMIUsNBMR19SmOI/HzS58kxBs9OU41+m7clJRjGRUJzvnObtyJjER12wAPfeZOnsqIp/8DCjo/IlPUQKTTAQFp0EPuqWEWpMNUxCoRDnnUENcM6ITzajkyrlJZ+pToyBNXEX9+NGQmpRwIyUEQE/KUr6ldBArbalM7/ZSWs70pnbj6CKwaboN+PSnQA2qUIf6UwfgVII6dSbtBMDUpjr1qVCNalM3cNQIJtWYCv+YilSlStWqHvCqcvSZVrcK1a56tYBgxeNSycrWpxJgqmc1YFoFkU6Izo6oeM0rUI0aV/81oAFd6Oga41kHjPb1sFJzAmAF+9CSIvaxTZurStngWMhaFmmShelCGUoljsbAAwrlLJc8C1pDxOCil00tZhc7CLmhVrWwHdpf68BYi9o1trgFWgPYMIPPCrAQMc1tbuvQW29VsIHhFK5wd8sC3x73tDxVLmSZ69wFIje60n0sG5prXOtCN7u53W51Gfhd8MZWvN0lb3LNq1r0VhAA12UvbN373PXK17L0FeAYoVvZ+/ZVCmyowXgJFIPT1qG//j0rgAWcXgvyN8GQza//eikLYe1y973XnQKCK4xTCTv4ohvm8Ew9DF/oGlbEVV3wgEscXBTjVMUNLnENdOjis5K4gTXAbo1NeuMH7/ioPW7xj1saZAoP+aZFDvGRNVrkJc9UCm1gMIbL62SWSoEKUq6vjqu8T7FhecXx5bJJvZxl7wpZzAIlM5h9jOaMqjnG11Vym9n55imfec70rLOW8ezmK5d5wnyeqJ7NvOVAR3PQgDZ0QBH94UIr+piMZrGjH23ISIeZ0vO0NJUxvU5N25fT4vT0pEFdR1GTutN+XvOnTw1NU7M61FRAgqpHPTkH2NrWDHg18K4sazhvWnW3xrWufefqYSOz2MaG9Jd9/33nZJd62VOewYHl7OwvSsEM0H7uDLqg4WoH8tpr+POHuU1tb18R3OJmMbnNvUd0H8HX2+42u0tthnCvOd7lnvcS0a3qdev7jfxmtr//jcaA23ngBLd2vaVcAlipW94JV7i9vdVw9XbhrxE/o8Hre/F8Z9yGGzczwj8OxZBbHOIkL/nC+43xlEfR5OP+q8xnTvOa2/zmOM+5znfO8577/OdAD7rQh070ohv96EhPutKXrnMFrBzONJhBFtDghClY/epYz7rWt871rnv962APu9jHTvaym/3saE+72tfO9ra7/e1w53oDpDBxDHtABlh4gt73zve++/3vgA+84AdP+P/CG/7wiE+84hfP+MY7/vGQj7zkJ095wTchC1WQwYrhK4E52OHzoA+96EdP+tKb/vSoT73qV8/61rv+9bCPvexnT/va2/72uM996qMggRgLsAMSCL7wh0/84hv/+MhPvvKXbwQjLP/50I++9KdP/epb//rYz772t8/97nt/G++teAk6IITym//86E+/+tfP/va73/0c4MD750//+tv//vjPv/73z//++///ABiAAWgqFVRx73WACJiACriADNiAAkQHUOCAEjiBFFiBFniBGJiBGriBHNiBHviBIHgqF3ABCzSCIXiCDlgCdDAEDoeCLviCMBiDMjiDNKiADXeDNxgwgwZoggLEgzXogiUwBCz4g0RYhEZ4hEiogziYgzBogEkog074hFI4hVRYhVZYg4EAACH5BAUEAAQALGAAQACwASoBAAf/gASCg4SFhoMDh4qLjI2OiYyQjpMEkpSGlo+Xm5ydnp+EkJmgjZKjnKekl6meiaKDH4IdAJ2WrKyqm7i5vL27vcDBub+Lr8XDwrzEoQPNlYKxBLOgxsm+1oKm2di13N7f2KbLkeCKy+PMBAWCFi2CQybl8vOp6OD28/n6z/v5+OvqBAF0RwBesmr9EvoT5cqZwoeHcDkkhU9VRYgBn1HIEO1axHAYC2njBzKkSYrIjp1MKKpAs40dUYZaKVKlxZk0c/arRw2nz08XcxrDQDAlppVBS/3ciUgnS3okhSV9NJURwEQFIoQo6nGk0G3BbCms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urTp06hTq17NurXr17Bjy55Nu7bt27hz697Nu7fv38CDCx9OvPhKBYMa3D7AvLnz59CjS59Ovbr169iza9/Ovbt2450I2BVAXgD4TeLHlz8vubx59pDdw4+/fr5j+fYb48+/eD//xP79d1iAAhZGoGzIgXZgbAl+tiBsDXr24GsRdjahaxVydmFrGW62IWsdavbhaiFmNqJqJWJ2YmopXrYiai1a9uJpMVY2o2k1UnZjaTlOtiNpPbZXn21BRvZjgXQdiaT/XEouCVeToXkn5ZRUVmnllVhy5+SWXHbp5ZdghinmmGSWaeaZaKap5ppstunmm3DGKeecdNZp55145qnnnnz26eefgAYq6KCEFmrooYgmquiihm3g6KOQRirppJRWaumlmGaq6aacdurpp6CG6oCD7pVq6qmopqrqqqy26uqrsMYq66y01lrqBowGJSuuufa0a6++xsorsDb9Smyxwh6LLKzDKtuSsc4+m2y00jJLbbWvNmthatBuy+20Ftoq7rjklmvuueiWq61mobbr7rvwxivvvPRKOuq1TCmH77789uvvvwAHLPDABBds8MGmPKDwwgw37PDDEEcs8cQUV2zx/8UYZ6zxxhwrvMC9r6Ur8sgkl2zyqwSQhwDC4qSbsgArswwOyTHL7M3IBNRsszU073zzyDr7PE3PQldDdNFDA400NUcvDU3TrZ0s9dRUVy0uAvq6tsDWXHft9ddghy322GSXbfbZaHfd8dpssx200w5lDffcdNdt991456333nz37fffgKPWQMULWJz24YgnrvjijCfOQIEMWC355JSr+riAkVeu+eZWX/6f50lx/iro+ZE+lOiumj6f6rqizirr7MEerOuqgsyf7DzRvqrtpTOle+2Q/y788K/ybl/mxCevvHvGzzf4xGlTXPgDh1M/PfSNZ7/w9RFXT730YOMeuP83co9v/vnop6/++uy37/778Mcv//z012//Y9nnr//+ZyfQPLHLI97/gBXA4Q2Qfcs74PoSiK8CCk+BjHLg7yC4KP5Z8IIXpOD9bFG+DXrwgyAMoQhHSMISmvCEKEyhClfIwha68IUgbFCRYCiJGdLQER284SkcgB0N6tAQCDiAAKzjwx8GQG45NKISqWHDJTrxiVCMohSnSMUqWvGKWMyiFrfIxS568YtgDKMYx0jGMprxjGhMoxrXyMY2uvGN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uRHQTeVCxA0HeMHRvcuE+0PL3SQDw6exT4gFhFXIFve+ATAHESUwAfiw98RJXYsnWlwhGVn4OQG2Z3bb4qJcDqgLBRIijI0qIf8maJUJku5DV3zdzfiowl3RS30Nax65GnSiAlAvRjos5N9GNUkHjktGVawkVswXxyYCRf+RTPyG9AjxxTDhMHSXTOKjLKQpddXrKxls150KUcqiSLGNr4whLmlnxNOs8ZS7hJakXmQWUKISGF+c3+WWycxmOvOZ0IymNKdJzWpa85rYzKY2t8nNbnrzm+AMpzjHSc5ymvOc6EynOtfJzna6853wjKc850nPetrznvjMpz73yc9++vOfAA2oQAdK0IIa9KAITahCF8rQhjr0oRCNqEQnStGKWvSiGM2oRjfK0Y569KMgDalIR0rSkpr0pChNqUpXytKWuvSlMI2pTGdKCQUYoAEKFYBOd8rTnvr0p0ANqlCHStSiGvWoSE2qUpea1ATQlBACeKYAFvDUqEqVqk//heZUs6pVrHK1mVv9Kli9KtbLhbWsZiUrWgd31rWyVa1uRVtb4ypXuNLVaXO9K17tqled5bWvfuUrYBX218ESVrCG1VdhE6tYxDIWXYt9LGQdK9lvRbaylqUsZpV12c1yVrOerVVnQyta0JI2VaM9LWpN20+muva1sI2tbGdL26WyVrW4za1ud8vb3vr2t8ANrnCHS9ziGve4yE2ucpfL3OY697nQja50p0vd6lr3utjNrna3u9YplIG79fEueMdL3vKad28JSK9618ve9rp3AfCNr3znuwD32jcB9M1vfO/L3/7697/31a+ABzxfABv4wAi273nZMtQFj6XBFiVA/zkh7OCqDBWnFZYKhTN8lA1zWCce/vBNQixilpC4xCI5MYohouIVn4MAEk5Ei138jxnTeB829maCd8zjHvv4x0AOspCHjOAbs8Smi8CwkZfM5CY7+clQjrKUp0xla27gyljOspa3zOUue/nLYA6zmMdM5jKb+cxoTrOaHUDP2rr5zXCOs5znbNQNVNkZVlWqne+sihgrIs9GJYBO98znZui50IY+NKKFoehF+6LRjlaEn0sB6Ui/otKWbgWmM72KTXM6FZ4+b4wnfY9Qr5POqE61qlfNap8SOp5qjrWsZ03rWtv61rjeMps/zete+/rXwA62sIdN7GIb+9iqaMADlv/N7GYzewHO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uMdN7nKb+9zoTre6183udrv73fCOt7znTe962/ve+M63vvfN7377+98AD7jAB07wghv84AhPuMIXzvCGO/zhEI+4xCdO8Ypb/OIYz7jGN87xjnv84yAPuchHTvKSm/zkKE+5ylfO8pa7/OUwj7nMZ07zmtv85jjPuc53zvOe+/znQA+60IdO9KIb/ehIT7rSl870pjv96VCPutSnTvWqW/3qWM+61rfO9a57/etgD7vYx072WAmhBGWfxdnTzva2e4NJbn8F3ONO97rb/e54z7ve9z4MAfDdFH7/OykCL3j/URC+8KA4POINoHjEN77wjxd85P8+eb5Xfu+X13vm8755vHf+7p9fvOhHT/rSm/70qE+96u2sgAe4/vWwf/0BDhD72rt+9rO/Pe5zT3vaPyD3tg/+73t/e+Hzvviw9/3vZb985jdf+A9gwL8bIIDqW//62M++9rfP/e57//vgD7/4ry99f1N//OhPv/rXz/7vl7/f52+//OdP//pX//38jr/998///msf//umf/43gAQ4fwCobwJYgAq4gOF3gPmWgAwYgRJIftM3gRZ4gQLggPgGgRjYgf2ngffGgR44gvQHgvYmgiSYgutngvWGgir4guLHgvTmgjBYg90ng/NG/4M2uIPYh4Py1gDJN3zLh3vJp3yyt3tGCH3QB3xK2IRLmITNp3y8B4Wx54N31wAK0ACjh4VaKHpcuIVZuHpiOIZkWIZmeIZomIZquIZs2IZu+IZwGIdyOId0WId2eId4mId6uId8aGoI8IeAGIiCOIiEWIiGeIiImIiKuIiM2IiO+IiQOIi5Jn4EwIOWeInf14W2homc2InqZ4U794KgqHOiiGueeIqoeINKV4pJx4pI54pHB4tGJ4uzlorpV4m2SIKjeGoCgIu5SH+++IvoF4zbt4t+GInImIzKuIzM2IzOSIia6IV9OI3UWI3WeI3YmI3auI2ZdnYlgHaL543gyJaN1egAC3CO6JiO6riO7NiOCXCO79iO8jiP9FiP9liPCUBwWKgADiCMKqgAYThw/eiPJChrFRQoA0mQHmiQCoSQCjmCB5eQD3mBEdmLE0mRBucACbCRHNmRHvmRIBmSIXmPJFmSJhmP7bh30UiOLNmSLvmSMBmTMjmTNFmTNnmTOJmTOrmTPJlrG/CTQIkAhQeUQUlygQAAIfkEBQQAAAAskABAAAIBmQEAB/+AAIKDhIWGh4iJiouMjY6PkJGSk5SVAwAFlZqbnJ2en6Chn5eZhpeiqKmqq6yti6WHpK6ztLW2t5Oyp7i8vb6/kqSyAMPAxsfIvbqYyc3Oz62wg8XQ1dbXjwMF0tjd3t+J2tzT4OXmyMKY1Ofs7a6ZBcLb4u719qvrpvf7/Jr5+f0CCoQEcKDBgwUF7TrIMOC4YvQaSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjSp1KtarVq1izat3KtavXr2DDih1LtqzZs2jTql3Ltq3bt9X/5jHLpA0uP3jx7JajO4iuX73m/tYdDBgcX0GHmRXGdphv4sXfBBcaB9ma5MeVnUnuSyyz4byNPV+Ti7izYtHNljHbhRn1s23kXENzbLr0Qtm/8nJe2Bo3L96J//oeTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimqOKKLLbo4oswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnk/5JMNunkk1BGKeWUVFZp5ZVYZqnlllx26eWXYIYp5phklmnmmWimqeaabLbp5ptwxinnnHTWaeedeOap55589unnn4AGKuighBYKUgMCJKrooow26uijkEYq6aSUVmopowYExYBOAmQK1KY5daopp57+BCpOon5K6qihlurTqTelauqqqrbKKqoGNFArrrfG6mpPsIZEACWyvkqrqZcmq+yyzDZb6a/8KQCAtP9JS61/1gKYraHcduvtt+CGK+645JZr7rnopqvuuuwix8C78MYr77z01mvvvfjmq+++/Pbr778AB4yvrqw4a/DBCCes8MIMJ7sAMgLohfDD6E2cnv/FzQ3bCcbncWyex+WBTJ7I45EsnsksRbyKxvygDIrKGcEskcyIuOxJwzjnrPPOPCdM8SoCBy300ETD20DRSCctMMHtNu3001BHLTWBDCxg9dVYZ6311lx37fXXYIfNdQJil2322WgHWw8DPbft9tsNq+0O23DXbffdlMpt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TnfK05769KdADapQh0rUohr1qEhNqlKXytSmTk4QTo3qT6Eq1arqlKpW/81qTbGq1a569atgDatYx0rWspr1rGhNq1rXyta2uvWtcI2rXOdK17ra9a54zate98rXvvr1r4ANrGAHS9jCGvawiE2sYhfL2MY69rGQjaxkJ0vZylr2spjNrGY3y9nOevazoA2taEdL2tKa9rSoTa1qV8va1rr2tbCNrWxnS9va2va2uM2tbnfL29769rfADa5wh0vc4hr3uMhNrnKXy9zmOve50I2udKdL3epa97rYza52t8vd7nr3u+ANr3jHS97ymve86E2vetfL3va6973wja9850vf+tr3vvjNr373y9/++ve/AA6wgAdM4AIb+MAITrCCF8zgBjv4wRCOsP+EJ0zhClv4whjOsIY3zOEOe/jDIA6xiEdM4hKb+MQoTrGKV8ziFrv4xTCOsYxnTOMa2/jGOM6xjnfM4x77+MdADrKQh0zkIhv5yEhOspKXzOQmO/nJUI6ylKdM5Spb+cpYzrKWt8zlLhfQCRH1hZdTAeZRSHTMrDCBCdD8CjWz+c1wjrOc50znOtv5znjOs573zOc++/nPgA60oAdN6EIb+tCITrSiF83oRjv60ZCOtKQnTelKW/rSmM60pjfN6U57+tOgDrWoR03qUpv61KhOtapXzepWu/rVsI61rGdN61rb+ta4zrWudx3UA/j618AOtrCHTexiG/vYyE62spf/zexmO/vZ0I62sw3AYwFY+9rYzra2t83tbm+bAAnIM7bBjVhvm/vc6E63utfN7na7+93wjre8BUBuPGeb2vbGdrjzfe193/ne4tZ3wPs9cGv7287ZPjh0583whjv84Q7H97+xLXGEUxyv0s64xjfO8Y57/OMgX3bFeU3ykpv85JX9RAnWrGeVsxzlI36Cn2WeqgTY/OY4z7nOd87znvv850APutCHTvSiG/3oSE/6z//aAIg7/elQj7rUp35uAlj96kynuta3zvWue93caQMAn5r+9bKb/exoh3fYx572trv97W3POtznTve6P13uds+73veebrzz/e+A57vfA0/4rMK7ffCGT7ziuY74xTv+8RBvPOQnT3l3S77ymM98ty+v+c53ns7ZvjrW/aoApZv+9KhPvepXz/rW8xzmsI+97GdP+9rb/vbraADulbuA3vv+98APvvCHv4AEEP/4vid68Zc//AQw4MJUJwDdHQD9rUvf7dTXcd2zX+23c9/JUP++jq/fdvEvOermP//T0w9hz5ub/Q92v7fh72Dk2//++M+//pv//N2TWPfBFQgAIfkEBQQAAAAssABAAFABoAEAB/+AAIKDAAWEhQOEiQCLg42HkJGSk5SVlpeYmZqbnJ2en6ChooQFpYKGjYaQj6qPgqyuo7KztLW2t7i5o6qkjLyOiQOJv5aNsbrIycrLzM2yv7GLw76Ux4jO2Nna29y3jwOovOKDxJrS3ejp6uvoqrzWr8Wr7PT19vez5Y6M8YWR0YcKwMNHsKBBesbCnVo4Sd+8gxAjStSGyp/Fi/sGPhQ4saPHj7Uq9psETtGhYa6EgVzJsiWmViJNUotXjqPLmzhzktvpzxXHXzZV7tNJtGjEYEIDMmIl0921k0ajSq1naiRUSA6NTd3KlRsxkSVP+Xz4z2rXs2i9MXy3cBE0hvL/0sqd28ltQ7p48+rdy7ev37+AAwseTLiw4cOIEytezLix48eQI0ueTLmy5cuYM2vezLmz58+gQ4seTbq06dOoU6tezbq169ewY8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26OGHIIYo4ogklmjiiSimqOKKLLbo4oswxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnk/5JMNunkk1BGKeWUVFZp5ZVYZqnlllx26eWXYIYp5phklmnmmWimqeaabLbp5ptwxinnnHTWaeedeOap55589unnn4AGKuighBZq6KGIJqrooow26uijkEYq6aSUVmrppZhmqummnHbq6aeghirqqKSWauqpqKaq6qqsturqq7DGKuustNZq66245qrrrrz26uuvwAYr7LDEFmvsscgmq+yyzDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGK+645JZr7rnopqvuuuy26+678MYr77z01mvvvfjmq+++Sgrg778AByzwwAQXbPDBCCes8MIMN+zwwxBHDPECZ/5Lsf+ZFlfs78UYC8BxmRujGbLGH5M5csclj3kyyB6L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uMdN7nKb+9zoTre6183udrv73fCOt7znTe962/ve+M63vvfN7377+98AD7jAB07wghv84AhPuMIXzvCGO/zhEI+4xCdO8Ypb/OIYz7jGN87xjnv84yAPuchHTvKSm/zkKE+5ylfO8pa7/OUwj7nMZ07zmtv85jjPuc53zvOe+/znQA+60IdO9KIb/ehIT7rSl870pjv96VCPutSnTvWqW/3qWM+61rfO9a57/etgD7vYx072spv97GhPu9rXzva2u/3tcI+73OdO97rb/e54z7ve9873vvv974APvOAHT/j/whv+8IhPvOIXz/jGO/7xkI+85CdP+cov23uWfwTmM8/5znv+86AP0gUcHfrSm/70qE+96lfP+ta7/vWwj73sZ0/72tv+9rjPve53z/ve+/73wA++8IdP/OIb//jIT77yl8/85jv/+dCPvvSnT/3qW//62M++9rfP/e57//vgD7/4x0/+8pv//OhPv/rXz/72u//98I+//OdP//rb//74z7/+98///vv//wAYgAI4gARIaArgegJAKcwDAM1TdAlYKAvYgET3gKxHgatngaqHgamngUayeUbHgUHigQ6IgCTYeiBoeidYeikYeisIei34eQdYgDI4gzRYgzZ4g46XZwA6uIM82IM++INAGIRCOIREWIRGeIQJsIECsIRLOHUP+IJLwYRMaHQEUChS2ISod4VQSHlaqIRS6IVTmIVX6ISCsIU30YVi+IVpGIZ8V4WkgIanB4coOIYuh4R2eId4mId6KITiFggAIfkEBQQAAAAsYgBAAK4BoAEAB/+AAIKDhIWGh4iJiouMAAWPkJGSk5SNlpeYjpCZhJSRnKCJnqOkpaanh5uhq4OnqpmuBayztLWpsaS2oLi8qLqLvL+zsq29lAGSworJqaLKz7TEhtKCxrjQmNam2MqfwtqP2cHD4Nvc57De0+XG6IjMq5PuxdbR7Pe5ofjl8/23+9r8UbM10N87gAjxuUsIzqBBhg3PQQzn8FlBgQmxXexUi6KgDBUdTvRUaGNHcydDqlw30te3lpVWyrQnbyXMUTMX3nQZT+K4nLp2/py3E+hBkpxMivNoUyhOo02dSoXJTSnUfxFFCr36EKLKmKxc9bPKNV07m8B4ltU4Mic8ckz/v06dOpOspVJrMcbKu6wtX6HIsq41eZav2ZZ/6aKzq9PcPrdpr62LYPglw7yM31UWNfcm3M41N1umWpG0z3sWO4FevRGvaKOsY4u1KLve6NqoXxO93FHfY624g9dWXVi38ZPCkyv3LJGRYJDHBz+tnBm28F/VL90LEBhp9O8lQwMlO7zR8leazr/VXhz87vYyBTdWDzqkQkOU3cNOHLAu/fpV/abfd//tNVaBCEo14HFxgZdgRnc9SN+C8XhlH3HZlZUhbckldUp3s1EoojAg5hYZWHLBF6CF/nDH24hhTdQTAAGcqCCMBDnlTon34VjhcrdJKORQD4X3YiJDmOBj/zbjHWjbYkOW4iKQRgpGzEBJLnmaOr1xSKSTMlaj3nsCcqRlhEUdNiaZVIop3zJQopdef2eC2UtQZwqZY4F1dhXll7u496eEnBWQX59oDrrhnHJGR42ii+7iF6J+QuocpWpCGiamhWoKaGmATelpiIYdyimjo7JDXaqsGjgIdKeiOpeXrlHaqqex9vUgPW+ydeuvLOZqHqF5/skSsdzAimikknYIS4rA8imsfzEm2KSPUfIIkKnTlhSUs906t+tRAIa7lFrdsIZptNNtmY+5m6FkHLOJKuoTe2XC6yZC+laJYpzsireSsgCUUEK/85IqHUA/BrzVIgYjPI1GErvrMP+4FZ/7sMQXu+prr/rSuyKXGfPqsawdb1qyMyvPO2zKO3Fbsl0ip8YpvxjCrGrLPDuos8rR9PyX0Ilwp+vPdBJto9JQSZlhsNYhNojMGT/9IdMeIo0g1tgVUGO97SqtdZpcX1VzneqJCrNmPctbtp1zqT22NGfDKBlyd16oW83WfP3Z3UfPRbXQDTYMeHOOyub3njcS9PbjcKu779zrEV04UTOvmfV/Pr+bM8NJAUy5otpqruW/zQDT6ayGjz5k6XyzLqixUZsYuOtav6bi7Thr9zFzmTp2q42c65fv5zuzuTXYHeOLbOJuawx0uqhvjrt315O8t3fiHj75k0GbLPD/99nbG7zn/7x8MnCmVdtol8wjLX35isWnZ5HI01/u/LKhPSH+/tqd+PQHDtjpiEl3IVDl8rcxEqmOgQRUGMoiWL2FTW+AyYtc78iVPQ5qakTjOxb4uqY9mizwdt76lqUCeCSs4MZ4UcJT/A4owk+JbjUztBZmGojBWrFtZOfp3gWtF5uqhK9zajkeAudDwVHVkHaQi6IUp0jFKlrxiljMoha3yMUuevGLYAyjGMdIxjKa8YxoTKMa18jGNrrxjXCMoxznSMc62vGOeMyjHvfIxz768Y+ADKQgB0nIQhrykIhMpCIXychGOvKRkIykJCdJyUpa8pKYzKQmN8nJTnry/5OgDKUoR0nKUprylKhMpSpXycpWuvKVsIylLGdJy1ra8pa4zKUud8nLXvryl8AMpjCHScxiGvOYyEymMpfJzGY685nQjKY0p0nNalrzmtjMpja3yc1uevOb4AynOMdJznKa85zoTKc618nOdrrznfCMpzznSc962vOe+MynPvfJz376858ADahAB0rQghr0oAhNqEIXytCGOvShEI2oRCdK0Ypa9KIYzahGN8rRjnr0oyANqUhHStKSmvSkKE2pSlfKTiEcjKWncilMZ0rTmtr0pjjNqU53ytOe+vSnQA2qUIdK1KIa9ahITapSl8rUpjr1qVCNqlSnStWqWvWqWP/Nqla3ytWuevWrYA2rWMdK1rKa9axoTata18rWtrr1rXCNq1znSte62vWueM2rXvfK17769a+ADaxgB0vYwhr2sIhNrGIXy9jGOvaxkI2sZCdL2cpa9rKYzaxmN8vZznr2s6ANrWhHS9rSmva0qE2talfL2ta69rWwja1sZ0vb2tr2trjNrW53y9ve+va3wA2ucIdL3OIa97gdzZJilYvc5jr3udC9YgmUpNjpRve62M2udrfL3e5697vgDa94x0ve8pr3vOhNr3rXy972uve98I2vfOdL3/ra9774za9+98vf/vp3RA8IsIAHTGACH6DAAj7AgRHM4AY7+AEKVvBxgydMYQNDOMILDjADEiuADm8YsR0WwIdBGuISm/jEKE6xilfM4ha72MUjNmyIY1zYGXPYwzcWcY5pTFgbgxjHP9axV19M5CLzeLA+PmySEepgCVf4yQF28oAXfGAJY1jKDM4wgqk84SpD+MsTPrIsAwEAIfkEBQQAAAAscABAAMIAoAEAB/+ABYIFA4KFg4QAiouMjY6PkJGSk5SVlpeYmZqSh4iDnQWboqOkpaanqIuEnocDqa+wsbKzjau2n7S5uru8k4aCvcHCw6+tuMTIycqVnp7Lz9DEtqCJ0dbXr4idAdXY3t+kxoIB5KHg5+iXzens7ZOgna7u8+7wzvT4583H+f3X1Ib8CVy2j9/AgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJ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sitbosTkeoRpRvhEchiClOOKrpHNJSUpL358xORe+KozhohQMnGf/oyZMGVucE17fOV8EJOrWgouEgS8HimL0shoCstM7sASGIEzK52R6ZZtvCJlJDlNYg60fVakqCojei8z1Sqe5IoiU44oTWt2jFJuslNPqMmRjymsmZTzyUX1WR32kW6YJt1oUiBaSnOCD2P2zJxEkfZMR86UnSSUaG/Os9JYJpKL9juqJf+EwioilYUw/6WPVKn6vPpMVH/ozBRPLfLPe+ZUn5V8SC3zJdV0fWmLnKoXS3GJUHJeFYOerAd1zNpMl7Z0kmHkXyq1eMh9afI71JMmL/O6pUlNVZl5miFFfPlObXqzbwUNZIm2KNhhTvY9W+2jXUtX15e6KKim/KrFUFnMkixSqGiVyOPoWdizivG2uM2tbnfL29769rfADa5wh0vc4hr3uMhNrnKXy9zmOve50I2udKdL3epa97rYza52t8vd7nr3u+ANr3jHS97ymve86E2vetfL3va6973wja9850vf+tr3vvjNr373y9/++ve/AA6wgAdM4AIb+MAITrCCF8zgBjv4wRCOsP+EJ0zhClv4whjOsIY3zOEOe/jDIA6xiEdM4hKb+MQoTrGKV8ziFrv4xTCOsYxnTOMa2/jGOM6xjnfM4x77+MdADrKQh0zkIhv5yEhOspKXzOQmO/nJUI6ylKdM5Spb+cpYzrKWt8zlLnv5y2AOs5jHTOYym/nMaE6zmtfM5ja7+c1wjrOc50znOtv5znjOs573zOc++/nPgA60oAdN6EIb+tCITrSiF83oRjv60ZCOtKQnTelKW/rSmM60pjfN6U57+tOgDrWoR03qUpv61KhOtapXzepWu/rVsI61rGdN61rb+ta4zrWud83rXvv618AOtrCHTexiG/vYyE62spf/zexmO/vZ0I62tKdN7Wpb+9rYzra2t81tQWyv25n4NrgnIe5xR6Lc5n7EBS6Q7na7+93wjre8503vetv73vjOt773ze9++/vfAA+4wAdO8IIb/OAIT7jCF87whjv84RCPuMQnTvGKW/ziGM+4xjfO8Y57/OMgD7nIR07ykpv85ChPucpXzvKWu/zlMI+5zGdO85rb/OY4z7nOd87znvv850APutCHTvSiG/3oSE+60oGL7ng3felQj7rUp071qlv96ljPuta3zvWue/3rYA+72MdO9rKbHWICsLcA0q72e7O93m+nd9znPXd51z3ed4d33t+9d3f3vd1/T3fgzT34BnEXvsGBAAA7"
  }, props)), Object(external_wp_element_["createElement"])("img", Object(esm_extends["a" /* default */])({
    className: "edit-post-welcome-guide__image edit-post-welcome-guide__image__prm-r",
    alt: "",
    src: "data:image/svg+xml,%3Csvg fill='none' height='240' viewBox='0 0 312 240' width='312' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0h312v240h-312z' fill='%2300a0d2'/%3E%3Cpath d='m51 32c0-1.1046.8954-2 2-2h206c1.105 0 2 .8954 2 2v208h-210z' fill='%23fff'/%3E%3Cpath d='m51 32c0-1.1046.8954-2 2-2h206c1.105 0 2 .8954 2 2v40h-210z' fill='%231e1e1e'/%3E%3Cg fill='%23ddd'%3E%3Cpath d='m90 98h104v16h-104z'/%3E%3Cpath d='m90 130h126v8h-126z'/%3E%3Cpath d='m90 143h126v8h-126z'/%3E%3Cpath d='m90 156h126v8h-126z'/%3E%3Cpath d='m90 206h126v8h-126z'/%3E%3Cpath d='m90 169h126v8h-126z'/%3E%3Cpath d='m90 219h126v8h-126z'/%3E%3Cpath d='m90 182h63v8h-63z'/%3E%3Cpath d='m90 232h63v8h-63z'/%3E%3C/g%3E%3Cpath d='m82.6667 51c0-6.4284-5.2384-11.6667-11.6667-11.6667-6.44 0-11.6667 5.2383-11.6667 11.6667 0 6.44 5.2267 11.6667 11.6667 11.6667 6.4283 0 11.6667-5.2267 11.6667-11.6667zm-14.2567 6.265-3.9784-10.675c.6417-.0234 1.365-.0934 1.365-.0934.5834-.07.5134-1.3183-.07-1.295 0 0-1.6916.1284-2.765.1284-.21 0-.4316 0-.6766-.0117 1.855-2.8467 5.0633-4.69 8.715-4.69 2.7183 0 5.1916 1.015 7.0583 2.73-.7933-.1283-1.925.455-1.925 1.8433 0 .8634.525 1.5867 1.05 2.45.4084.7117.6417 1.5867.6417 2.87 0 1.7384-1.6334 5.8334-1.6334 5.8334l-3.535-9.765c.63-.0234.9567-.1984.9567-.1984.5833-.0583.5133-1.4583-.07-1.4233 0 0-1.68.14-2.7767.14-1.015 0-2.7183-.14-2.7183-.14-.5833-.035-.6533 1.4-.07 1.4233l1.0733.0934 1.47 3.9783zm11.235-6.265c.28-.7467.8633-2.1817.5017-4.9584.8166 1.505 1.2249 3.1617 1.2249 4.9584 0 3.8383-2.0183 7.28-5.1333 9.0767 1.1317-3.0217 2.2633-6.0667 3.4067-9.0767zm-13.195 9.4383c-3.4767-1.68-5.8217-5.32-5.8217-9.4383 0-1.5167.2683-2.8934.84-4.1884 1.6567 4.5384 3.3133 9.0884 4.9817 13.6267zm4.7016-7.735 3.01 8.1434c-1.0033.3383-2.0533.5249-3.1616.5249-.9217 0-1.8317-.1283-2.6717-.385.945-2.7766 1.89-5.53 2.8233-8.2833z' fill='%23fff'/%3E%3C/svg%3E"
  }, props)));
};
var images_InserterIconImage = function InserterIconImage(props) {
  return Object(external_wp_element_["createElement"])("img", Object(esm_extends["a" /* default */])({
    alt: Object(external_wp_i18n_["__"])('inserter'),
    src: "data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='18' height='18' rx='2' fill='%231E1E1E'/%3E%3Cpath d='M9.22727 4V14M4 8.77273H14' stroke='white' stroke-width='1.5'/%3E%3C/svg%3E%0A"
  }, props));
};

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/welcome-guide/index.js


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



function WelcomeGuide() {
  var isActive = Object(external_wp_data_["useSelect"])(function (select) {
    return select(store["a" /* store */]).isFeatureActive('welcomeGuide');
  }, []);

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      toggleFeature = _useDispatch.toggleFeature;

  if (!isActive) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_components_["Guide"], {
    className: "edit-post-welcome-guide",
    contentLabel: Object(external_wp_i18n_["__"])('Welcome to the block editor'),
    finishButtonText: Object(external_wp_i18n_["__"])('Get started'),
    onFinish: function onFinish() {
      return toggleFeature('welcomeGuide');
    },
    pages: [{
      image: Object(external_wp_element_["createElement"])(images_CanvasImage, null),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("h1", {
        className: "edit-post-welcome-guide__heading"
      }, Object(external_wp_i18n_["__"])('Welcome to the block editor')), Object(external_wp_element_["createElement"])("p", {
        className: "edit-post-welcome-guide__text"
      }, Object(external_wp_i18n_["__"])('In the WordPress editor, each paragraph, image, or video is presented as a distinct “block” of content.')))
    }, {
      image: Object(external_wp_element_["createElement"])(images_EditorImage, null),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("h1", {
        className: "edit-post-welcome-guide__heading"
      }, Object(external_wp_i18n_["__"])('Make each block your own')), Object(external_wp_element_["createElement"])("p", {
        className: "edit-post-welcome-guide__text"
      }, Object(external_wp_i18n_["__"])('Each block comes with its own set of controls for changing things like color, width, and alignment. These will show and hide automatically when you have a block selected.')))
    }, {
      image: Object(external_wp_element_["createElement"])(images_BlockLibraryImage, null),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("h1", {
        className: "edit-post-welcome-guide__heading"
      }, Object(external_wp_i18n_["__"])('Get to know the block library')), Object(external_wp_element_["createElement"])("p", {
        className: "edit-post-welcome-guide__text"
      }, Object(external_wp_element_["createInterpolateElement"])(Object(external_wp_i18n_["__"])('All of the blocks available to you live in the block library. You’ll find it wherever you see the <InserterIconImage /> icon.'), {
        InserterIconImage: Object(external_wp_element_["createElement"])(images_InserterIconImage, {
          className: "edit-post-welcome-guide__inserter-icon"
        })
      })))
    }, {
      image: Object(external_wp_element_["createElement"])(images_DocumentationImage, null),
      content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("h1", {
        className: "edit-post-welcome-guide__heading"
      }, Object(external_wp_i18n_["__"])('Learn how to use the block editor')), Object(external_wp_element_["createElement"])("p", {
        className: "edit-post-welcome-guide__text"
      }, Object(external_wp_i18n_["__"])('New to the block editor? Want to learn more about using it? '), Object(external_wp_element_["createElement"])(external_wp_components_["ExternalLink"], {
        href: Object(external_wp_i18n_["__"])('https://wordpress.org/support/article/wordpress-editor/')
      }, Object(external_wp_i18n_["__"])("Here's a detailed guide."))))
    }]
  });
}

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/layout/index.js




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */












/**
 * Internal dependencies
 */














var interfaceLabels = {
  secondarySidebar: Object(external_wp_i18n_["__"])('Block library'),

  /* translators: accessibility text for the editor top bar landmark region. */
  header: Object(external_wp_i18n_["__"])('Editor top bar'),

  /* translators: accessibility text for the editor content landmark region. */
  body: Object(external_wp_i18n_["__"])('Editor content'),

  /* translators: accessibility text for the editor settings landmark region. */
  sidebar: Object(external_wp_i18n_["__"])('Editor settings'),

  /* translators: accessibility text for the editor publish landmark region. */
  actions: Object(external_wp_i18n_["__"])('Editor publish'),

  /* translators: accessibility text for the editor footer landmark region. */
  footer: Object(external_wp_i18n_["__"])('Editor footer')
};

function Layout(_ref) {
  var styles = _ref.styles;
  var isMobileViewport = Object(external_wp_compose_["useViewportMatch"])('medium', '<');
  var isHugeViewport = Object(external_wp_compose_["useViewportMatch"])('huge', '>=');

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      openGeneralSidebar = _useDispatch.openGeneralSidebar,
      closeGeneralSidebar = _useDispatch.closeGeneralSidebar,
      setIsInserterOpened = _useDispatch.setIsInserterOpened;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      hasFixedToolbar: select(store["a" /* store */]).isFeatureActive('fixedToolbar'),
      sidebarIsOpened: !!(select(build_module["g" /* store */]).getActiveComplementaryArea(store["a" /* store */].name) || select(store["a" /* store */]).isPublishSidebarOpened()),
      isFullscreenActive: select(store["a" /* store */]).isFeatureActive('fullscreenMode'),
      showMostUsedBlocks: select(store["a" /* store */]).isFeatureActive('mostUsedBlocks'),
      isInserterOpened: select(store["a" /* store */]).isInserterOpened(),
      mode: select(store["a" /* store */]).getEditorMode(),
      isRichEditingEnabled: select('core/editor').getEditorSettings().richEditingEnabled,
      hasActiveMetaboxes: select(store["a" /* store */]).hasMetaBoxes(),
      previousShortcut: select(external_wp_keyboardShortcuts_["store"]).getAllShortcutRawKeyCombinations('core/edit-post/previous-region'),
      nextShortcut: select(external_wp_keyboardShortcuts_["store"]).getAllShortcutRawKeyCombinations('core/edit-post/next-region'),
      showIconLabels: select(store["a" /* store */]).isFeatureActive('showIconLabels'),
      hasReducedUI: select(store["a" /* store */]).isFeatureActive('reducedUI'),
      showBlockBreadcrumbs: select(store["a" /* store */]).isFeatureActive('showBlockBreadcrumbs')
    };
  }, []),
      mode = _useSelect.mode,
      isFullscreenActive = _useSelect.isFullscreenActive,
      isRichEditingEnabled = _useSelect.isRichEditingEnabled,
      sidebarIsOpened = _useSelect.sidebarIsOpened,
      hasActiveMetaboxes = _useSelect.hasActiveMetaboxes,
      hasFixedToolbar = _useSelect.hasFixedToolbar,
      previousShortcut = _useSelect.previousShortcut,
      nextShortcut = _useSelect.nextShortcut,
      hasBlockSelected = _useSelect.hasBlockSelected,
      showMostUsedBlocks = _useSelect.showMostUsedBlocks,
      isInserterOpened = _useSelect.isInserterOpened,
      showIconLabels = _useSelect.showIconLabels,
      hasReducedUI = _useSelect.hasReducedUI,
      showBlockBreadcrumbs = _useSelect.showBlockBreadcrumbs;

  var className = classnames_default()('edit-post-layout', 'is-mode-' + mode, {
    'is-sidebar-opened': sidebarIsOpened,
    'has-fixed-toolbar': hasFixedToolbar,
    'has-metaboxes': hasActiveMetaboxes,
    'show-icon-labels': showIconLabels
  });

  var openSidebarPanel = function openSidebarPanel() {
    return openGeneralSidebar(hasBlockSelected ? 'edit-post/block' : 'edit-post/document');
  }; // Inserter and Sidebars are mutually exclusive


  Object(external_wp_element_["useEffect"])(function () {
    if (sidebarIsOpened && !isHugeViewport) {
      setIsInserterOpened(false);
    }
  }, [sidebarIsOpened, isHugeViewport]);
  Object(external_wp_element_["useEffect"])(function () {
    if (isInserterOpened && !isHugeViewport) {
      closeGeneralSidebar();
    }
  }, [isInserterOpened, isHugeViewport]); // Local state for save panel.
  // Note 'truthy' callback implies an open panel.

  var _useState = Object(external_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      entitiesSavedStatesCallback = _useState2[0],
      setEntitiesSavedStatesCallback = _useState2[1];

  var closeEntitiesSavedStates = Object(external_wp_element_["useCallback"])(function (arg) {
    if (typeof entitiesSavedStatesCallback === 'function') {
      entitiesSavedStatesCallback(arg);
    }

    setEntitiesSavedStatesCallback(false);
  }, [entitiesSavedStatesCallback]);
  var ref = Object(external_wp_components_["__unstableUseDrop"])(ref);

  var _useDialog = Object(external_wp_compose_["__experimentalUseDialog"])({
    onClose: function onClose() {
      return setIsInserterOpened(false);
    }
  }),
      _useDialog2 = Object(slicedToArray["a" /* default */])(_useDialog, 2),
      inserterDialogRef = _useDialog2[0],
      inserterDialogProps = _useDialog2[1];

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(build_module["d" /* FullscreenMode */], {
    isActive: isFullscreenActive
  }), Object(external_wp_element_["createElement"])(browser_url, null), Object(external_wp_element_["createElement"])(external_wp_editor_["UnsavedChangesWarning"], null), Object(external_wp_element_["createElement"])(external_wp_editor_["AutosaveMonitor"], null), Object(external_wp_element_["createElement"])(external_wp_editor_["LocalAutosaveMonitor"], null), Object(external_wp_element_["createElement"])(keyboard_shortcuts, null), Object(external_wp_element_["createElement"])(external_wp_editor_["EditorKeyboardShortcutsRegister"], null), Object(external_wp_element_["createElement"])(settings_sidebar, null), Object(external_wp_element_["createElement"])(build_module["e" /* InterfaceSkeleton */], {
    ref: ref,
    className: className,
    labels: interfaceLabels,
    header: Object(external_wp_element_["createElement"])(header, {
      setEntitiesSavedStatesCallback: setEntitiesSavedStatesCallback
    }),
    secondarySidebar: mode === 'visual' && isInserterOpened && Object(external_wp_element_["createElement"])("div", Object(esm_extends["a" /* default */])({
      ref: inserterDialogRef
    }, inserterDialogProps, {
      className: "edit-post-layout__inserter-panel"
    }), Object(external_wp_element_["createElement"])("div", {
      className: "edit-post-layout__inserter-panel-header"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      icon: library_close["a" /* default */],
      onClick: function onClick() {
        return setIsInserterOpened(false);
      }
    })), Object(external_wp_element_["createElement"])("div", {
      className: "edit-post-layout__inserter-panel-content"
    }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["__experimentalLibrary"], {
      showMostUsedBlocks: showMostUsedBlocks,
      showInserterHelpPanel: true,
      onSelect: function onSelect() {
        if (isMobileViewport) {
          setIsInserterOpened(false);
        }
      }
    }))),
    sidebar: (!isMobileViewport || sidebarIsOpened) && Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, !isMobileViewport && !sidebarIsOpened && Object(external_wp_element_["createElement"])("div", {
      className: "edit-post-layout__toogle-sidebar-panel"
    }, Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
      isSecondary: true,
      className: "edit-post-layout__toogle-sidebar-panel-button",
      onClick: openSidebarPanel,
      "aria-expanded": false
    }, hasBlockSelected ? Object(external_wp_i18n_["__"])('Open block settings') : Object(external_wp_i18n_["__"])('Open document settings'))), Object(external_wp_element_["createElement"])(build_module["b" /* ComplementaryArea */].Slot, {
      scope: "core/edit-post"
    })),
    content: Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["EditorNotices"], null), (mode === 'text' || !isRichEditingEnabled) && Object(external_wp_element_["createElement"])(text_editor, null), isRichEditingEnabled && mode === 'visual' && Object(external_wp_element_["createElement"])(VisualEditor, {
      styles: styles
    }), Object(external_wp_element_["createElement"])("div", {
      className: "edit-post-layout__metaboxes"
    }, Object(external_wp_element_["createElement"])(meta_boxes, {
      location: "normal"
    }), Object(external_wp_element_["createElement"])(meta_boxes, {
      location: "advanced"
    })), isMobileViewport && sidebarIsOpened && Object(external_wp_element_["createElement"])(external_wp_components_["ScrollLock"], null)),
    footer: !hasReducedUI && showBlockBreadcrumbs && !isMobileViewport && isRichEditingEnabled && mode === 'visual' && Object(external_wp_element_["createElement"])("div", {
      className: "edit-post-layout__footer"
    }, Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockBreadcrumb"], null)),
    actions: Object(external_wp_element_["createElement"])(ActionsPanel, {
      closeEntitiesSavedStates: closeEntitiesSavedStates,
      isEntitiesSavedStatesOpen: entitiesSavedStatesCallback,
      setEntitiesSavedStatesCallback: setEntitiesSavedStatesCallback
    }),
    shortcuts: {
      previous: previousShortcut,
      next: nextShortcut
    }
  }), Object(external_wp_element_["createElement"])(manage_blocks_modal, null), Object(external_wp_element_["createElement"])(PreferencesModal, null), Object(external_wp_element_["createElement"])(keyboard_shortcut_help_modal, null), Object(external_wp_element_["createElement"])(WelcomeGuide, null), Object(external_wp_element_["createElement"])(external_wp_components_["Popover"].Slot, null), Object(external_wp_element_["createElement"])(external_wp_plugins_["PluginArea"], null));
}

/* harmony default export */ var layout = (Layout);

// EXTERNAL MODULE: ./node_modules/@wordpress/edit-post/build-module/store/constants.js
var constants = __webpack_require__(118);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/listener-hooks.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/**
 * This listener hook monitors for block selection and triggers the appropriate
 * sidebar state.
 *
 * @param {number} postId  The current post id.
 */

var listener_hooks_useBlockSelectionListener = function useBlockSelectionListener(postId) {
  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      hasBlockSelection: !!select('core/block-editor').getBlockSelectionStart(),
      isEditorSidebarOpened: select(constants["a" /* STORE_NAME */]).isEditorSidebarOpened()
    };
  }, [postId]),
      hasBlockSelection = _useSelect.hasBlockSelection,
      isEditorSidebarOpened = _useSelect.isEditorSidebarOpened;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(constants["a" /* STORE_NAME */]),
      openGeneralSidebar = _useDispatch.openGeneralSidebar;

  Object(external_wp_element_["useEffect"])(function () {
    if (!isEditorSidebarOpened) {
      return;
    }

    if (hasBlockSelection) {
      openGeneralSidebar('edit-post/block');
    } else {
      openGeneralSidebar('edit-post/document');
    }
  }, [hasBlockSelection, isEditorSidebarOpened]);
};
/**
 * This listener hook monitors any change in permalink and updates the view
 * post link in the admin bar.
 *
 * @param {number} postId
 */

var listener_hooks_useUpdatePostLinkListener = function useUpdatePostLinkListener(postId) {
  var _useSelect2 = Object(external_wp_data_["useSelect"])(function (select) {
    return {
      newPermalink: select('core/editor').getCurrentPost().link
    };
  }, [postId]),
      newPermalink = _useSelect2.newPermalink;

  var nodeToUpdate = Object(external_wp_element_["useRef"])();
  Object(external_wp_element_["useEffect"])(function () {
    nodeToUpdate.current = document.querySelector(constants["c" /* VIEW_AS_PREVIEW_LINK_SELECTOR */]) || document.querySelector(constants["b" /* VIEW_AS_LINK_SELECTOR */]);
  }, [postId]);
  Object(external_wp_element_["useEffect"])(function () {
    if (!newPermalink || !nodeToUpdate.current) {
      return;
    }

    nodeToUpdate.current.setAttribute('href', newPermalink);
  }, [newPermalink]);
};

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/editor-initialization/index.js
/**
 * Internal dependencies
 */

/**
 * Data component used for initializing the editor and re-initializes
 * when postId changes or on unmount.
 *
 * @param {number} postId  The id of the post.
 * @return {null} This is a data component so does not render any ui.
 */

function EditorInitialization(_ref) {
  var postId = _ref.postId;
  listener_hooks_useBlockSelectionListener(postId);
  listener_hooks_useUpdatePostLinkListener(postId);
  return null;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/editor.js






function editor_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function editor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { editor_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { editor_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */






/**
 * Internal dependencies
 */







function Editor(_ref) {
  var postId = _ref.postId,
      postType = _ref.postType,
      settings = _ref.settings,
      initialEdits = _ref.initialEdits,
      onError = _ref.onError,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["postId", "postType", "settings", "initialEdits", "onError"]);

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _getPostType$viewable, _getPostType;

    var _select = select(store["a" /* store */]),
        isFeatureActive = _select.isFeatureActive,
        getPreference = _select.getPreference,
        __experimentalGetPreviewDeviceType = _select.__experimentalGetPreviewDeviceType,
        isEditingTemplate = _select.isEditingTemplate;

    var _select2 = select('core'),
        getEntityRecord = _select2.getEntityRecord,
        __experimentalGetTemplateForLink = _select2.__experimentalGetTemplateForLink,
        getPostType = _select2.getPostType,
        getEntityRecords = _select2.getEntityRecords;

    var _select3 = select('core/editor'),
        getEditorSettings = _select3.getEditorSettings,
        getCurrentPost = _select3.getCurrentPost;

    var _select4 = select(external_wp_blocks_["store"]),
        getBlockTypes = _select4.getBlockTypes;

    var isTemplate = ['wp_template', 'wp_template_part'].includes(postType); // Ideally the initializeEditor function should be called using the ID of the REST endpoint.
    // to avoid the special case.

    var postObject;

    if (isTemplate) {
      var posts = getEntityRecords('postType', postType, {
        wp_id: postId
      });
      postObject = posts === null || posts === void 0 ? void 0 : posts[0];
    } else {
      postObject = getEntityRecord('postType', postType, postId);
    }

    var isFSETheme = getEditorSettings().isFSETheme;
    var isViewable = (_getPostType$viewable = (_getPostType = getPostType(postType)) === null || _getPostType === void 0 ? void 0 : _getPostType.viewable) !== null && _getPostType$viewable !== void 0 ? _getPostType$viewable : false;
    return {
      hasFixedToolbar: isFeatureActive('fixedToolbar') || __experimentalGetPreviewDeviceType() !== 'Desktop',
      focusMode: isFeatureActive('focusMode'),
      hasReducedUI: isFeatureActive('reducedUI'),
      hasThemeStyles: isFeatureActive('themeStyles'),
      preferredStyleVariations: getPreference('preferredStyleVariations'),
      hiddenBlockTypes: getPreference('hiddenBlockTypes'),
      blockTypes: getBlockTypes(),
      __experimentalLocalAutosaveInterval: getPreference('localAutosaveInterval'),
      keepCaretInsideBlock: isFeatureActive('keepCaretInsideBlock'),
      isTemplateMode: isEditingTemplate(),
      template: isFSETheme && isViewable && postObject && getCurrentPost().status !== 'auto-draft' ? __experimentalGetTemplateForLink(postObject.link) : null,
      post: postObject
    };
  }),
      hasFixedToolbar = _useSelect.hasFixedToolbar,
      focusMode = _useSelect.focusMode,
      hasReducedUI = _useSelect.hasReducedUI,
      hasThemeStyles = _useSelect.hasThemeStyles,
      post = _useSelect.post,
      preferredStyleVariations = _useSelect.preferredStyleVariations,
      hiddenBlockTypes = _useSelect.hiddenBlockTypes,
      blockTypes = _useSelect.blockTypes,
      __experimentalLocalAutosaveInterval = _useSelect.__experimentalLocalAutosaveInterval,
      keepCaretInsideBlock = _useSelect.keepCaretInsideBlock,
      isTemplateMode = _useSelect.isTemplateMode,
      template = _useSelect.template;

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store["a" /* store */]),
      updatePreferredStyleVariations = _useDispatch.updatePreferredStyleVariations,
      setIsInserterOpened = _useDispatch.setIsInserterOpened;

  var editorSettings = Object(external_wp_element_["useMemo"])(function () {
    var result = editor_objectSpread(editor_objectSpread({}, Object(external_lodash_["omit"])(settings, ['defaultEditorStyles', 'styles'])), {}, {
      __experimentalPreferredStyleVariations: {
        value: preferredStyleVariations,
        onChange: updatePreferredStyleVariations
      },
      hasFixedToolbar: hasFixedToolbar,
      focusMode: focusMode,
      hasReducedUI: hasReducedUI,
      __experimentalLocalAutosaveInterval: __experimentalLocalAutosaveInterval,
      // This is marked as experimental to give time for the quick inserter to mature.
      __experimentalSetIsInserterOpened: setIsInserterOpened,
      keepCaretInsideBlock: keepCaretInsideBlock
    }); // Omit hidden block types if exists and non-empty.


    if (Object(external_lodash_["size"])(hiddenBlockTypes) > 0) {
      // Defer to passed setting for `allowedBlockTypes` if provided as
      // anything other than `true` (where `true` is equivalent to allow
      // all block types).
      var defaultAllowedBlockTypes = true === settings.allowedBlockTypes ? Object(external_lodash_["map"])(blockTypes, 'name') : settings.allowedBlockTypes || [];
      result.allowedBlockTypes = external_lodash_["without"].apply(void 0, [defaultAllowedBlockTypes].concat(Object(toConsumableArray["a" /* default */])(hiddenBlockTypes)));
    }

    return result;
  }, [settings, hasFixedToolbar, focusMode, hasReducedUI, hiddenBlockTypes, blockTypes, preferredStyleVariations, __experimentalLocalAutosaveInterval, setIsInserterOpened, updatePreferredStyleVariations, keepCaretInsideBlock]);
  var styles = Object(external_wp_element_["useMemo"])(function () {
    return hasThemeStyles ? settings.styles : settings.defaultEditorStyles;
  }, [settings, hasThemeStyles]);

  if (!post) {
    return null;
  }

  return Object(external_wp_element_["createElement"])(external_wp_element_["StrictMode"], null, Object(external_wp_element_["createElement"])(edit_post_settings.Provider, {
    value: settings
  }, Object(external_wp_element_["createElement"])(external_wp_components_["SlotFillProvider"], null, Object(external_wp_element_["createElement"])(external_wp_components_["__unstableDropZoneContextProvider"], null, Object(external_wp_element_["createElement"])(external_wp_editor_["EditorProvider"], Object(esm_extends["a" /* default */])({
    settings: editorSettings,
    post: post,
    initialEdits: initialEdits,
    useSubRegistry: false,
    __unstableTemplate: isTemplateMode ? template : undefined
  }, props), Object(external_wp_element_["createElement"])(external_wp_editor_["ErrorBoundary"], {
    onError: onError
  }, Object(external_wp_element_["createElement"])(EditorInitialization, {
    postId: postId
  }), Object(external_wp_element_["createElement"])(layout, {
    styles: styles
  }), Object(external_wp_element_["createElement"])(external_wp_components_["KeyboardShortcuts"], {
    shortcuts: prevent_event_discovery
  })), Object(external_wp_element_["createElement"])(external_wp_editor_["PostLockedModal"], null))))));
}

/* harmony default export */ var editor = (Editor);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/block-settings-menu/plugin-block-settings-menu-item.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */





var plugin_block_settings_menu_item_isEverySelectedBlockAllowed = function isEverySelectedBlockAllowed(selected, allowed) {
  return Object(external_lodash_["difference"])(selected, allowed).length === 0;
};
/**
 * Plugins may want to add an item to the menu either for every block
 * or only for the specific ones provided in the `allowedBlocks` component property.
 *
 * If there are multiple blocks selected the item will be rendered if every block
 * is of one allowed type (not necessarily the same).
 *
 * @param {string[]} selectedBlocks Array containing the names of the blocks selected
 * @param {string[]} allowedBlocks Array containing the names of the blocks allowed
 * @return {boolean} Whether the item will be rendered or not.
 */


var shouldRenderItem = function shouldRenderItem(selectedBlocks, allowedBlocks) {
  return !Array.isArray(allowedBlocks) || plugin_block_settings_menu_item_isEverySelectedBlockAllowed(selectedBlocks, allowedBlocks);
};
/**
 * Renders a new item in the block settings menu.
 *
 * @param {Object}                props                 Component props.
 * @param {Array}                 [props.allowedBlocks] An array containing a list of block names for which the item should be shown. If not present, it'll be rendered for any block. If multiple blocks are selected, it'll be shown if and only if all of them are in the allowed list.
 * @param {WPBlockTypeIconRender} [props.icon]          The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element.
 * @param {string}                props.label           The menu item text.
 * @param {Function}              props.onClick         Callback function to be executed when the user click the menu item.
 * @param {boolean}               [props.small]         Whether to render the label or not.
 * @param {string}                [props.role]          The ARIA role for the menu item.
 *
 * @example
 * <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginBlockSettingsMenuItem = wp.editPost.PluginBlockSettingsMenuItem;
 *
 * function doOnClick(){
 * 	// To be called when the user clicks the menu item.
 * }
 *
 * function MyPluginBlockSettingsMenuItem() {
 * 	return wp.element.createElement(
 * 		PluginBlockSettingsMenuItem,
 * 		{
 * 			allowedBlocks: [ 'core/paragraph' ],
 * 			icon: 'dashicon-name',
 * 			label: __( 'Menu item text' ),
 * 			onClick: doOnClick,
 * 		}
 * 	);
 * }
 * ```
 *
 * @example
 * <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginBlockSettingsMenuItem } from '@wordpress/edit-post';
 *
 * const doOnClick = ( ) => {
 *     // To be called when the user clicks the menu item.
 * };
 *
 * const MyPluginBlockSettingsMenuItem = () => (
 *     <PluginBlockSettingsMenuItem
 * 		allowedBlocks={ [ 'core/paragraph' ] }
 * 		icon='dashicon-name'
 * 		label={ __( 'Menu item text' ) }
 * 		onClick={ doOnClick } />
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */


var plugin_block_settings_menu_item_PluginBlockSettingsMenuItem = function PluginBlockSettingsMenuItem(_ref) {
  var allowedBlocks = _ref.allowedBlocks,
      icon = _ref.icon,
      label = _ref.label,
      onClick = _ref.onClick,
      small = _ref.small,
      role = _ref.role;
  return Object(external_wp_element_["createElement"])(external_wp_blockEditor_["BlockSettingsMenuControls"], null, function (_ref2) {
    var selectedBlocks = _ref2.selectedBlocks,
        onClose = _ref2.onClose;

    if (!shouldRenderItem(selectedBlocks, allowedBlocks)) {
      return null;
    }

    return Object(external_wp_element_["createElement"])(external_wp_components_["MenuItem"], {
      onClick: Object(external_wp_compose_["compose"])(onClick, onClose),
      icon: icon,
      label: small ? label : undefined,
      role: role
    }, !small && label);
  });
};

/* harmony default export */ var plugin_block_settings_menu_item = (plugin_block_settings_menu_item_PluginBlockSettingsMenuItem);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/plugin-more-menu-item/index.js
/**
 * WordPress dependencies
 */



/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down, and can be used to as a button or link depending on the props provided.
 * The text within the component appears as the menu item label.
 *
 * @param {Object} props Component properties.
 * @param {string} [props.href] When `href` is provided then the menu item is represented as an anchor rather than button. It corresponds to the `href` attribute of the anchor.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered to the left of the menu item label.
 * @param {Function} [props.onClick=noop] The callback function to be executed when the user clicks the menu item.
 * @param {...*} [props.other] Any additional props are passed through to the underlying [MenuItem](/packages/components/src/menu-item/README.md) component.
 *
 * @example
 * <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginMoreMenuItem = wp.editPost.PluginMoreMenuItem;
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
 *
 * function onButtonClick() {
 * 	alert( 'Button clicked.' );
 * }
 *
 * function MyButtonMoreMenuItem() {
 * 	return wp.element.createElement(
 * 		PluginMoreMenuItem,
 * 		{
 * 			icon: moreIcon,
 * 			onClick: onButtonClick,
 * 		},
 * 		__( 'My button title' )
 * 	);
 * }
 * ```
 *
 * @example
 * <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginMoreMenuItem } from '@wordpress/edit-post';
 * import { more } from '@wordpress/icons';
 *
 * function onButtonClick() {
 * 	alert( 'Button clicked.' );
 * }
 *
 * const MyButtonMoreMenuItem = () => (
 * 	<PluginMoreMenuItem
 * 		icon={ more }
 * 		onClick={ onButtonClick }
 * 	>
 * 		{ __( 'My button title' ) }
 * 	</PluginMoreMenuItem>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */

/* harmony default export */ var plugin_more_menu_item = (Object(external_wp_compose_["compose"])(Object(external_wp_plugins_["withPluginContext"])(function (context, ownProps) {
  return {
    icon: ownProps.icon || context.icon,
    name: 'core/edit-post/plugin-more-menu'
  };
}))(build_module["a" /* ActionItem */]));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/header/plugin-sidebar-more-menu-item/index.js



/**
 * WordPress dependencies
 */

/**
 * Renders a menu item in `Plugins` group in `More Menu` drop down,
 * and can be used to activate the corresponding `PluginSidebar` component.
 * The text within the component appears as the menu item label.
 *
 * @param {Object} props Component props.
 * @param {string} props.target A string identifying the target sidebar you wish to be activated by this menu item. Must be the same as the `name` prop you have given to that sidebar.
 * @param {WPBlockTypeIconRender} [props.icon=inherits from the plugin] The [Dashicon](https://developer.wordpress.org/resource/dashicons/) icon slug string, or an SVG WP element, to be rendered to the left of the menu item label.
 *
 * @example
 * <caption>ES5</caption>
 * ```js
 * // Using ES5 syntax
 * var __ = wp.i18n.__;
 * var PluginSidebarMoreMenuItem = wp.editPost.PluginSidebarMoreMenuItem;
 * var moreIcon = wp.element.createElement( 'svg' ); //... svg element.
 *
 * function MySidebarMoreMenuItem() {
 * 	return wp.element.createElement(
 * 		PluginSidebarMoreMenuItem,
 * 		{
 * 			target: 'my-sidebar',
 * 			icon: moreIcon,
 * 		},
 * 		__( 'My sidebar title' )
 * 	)
 * }
 * ```
 *
 * @example
 * <caption>ESNext</caption>
 * ```jsx
 * // Using ESNext syntax
 * import { __ } from '@wordpress/i18n';
 * import { PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
 * import { more } from '@wordpress/icons';
 *
 * const MySidebarMoreMenuItem = () => (
 * 	<PluginSidebarMoreMenuItem
 * 		target="my-sidebar"
 * 		icon={ more }
 * 	>
 * 		{ __( 'My sidebar title' ) }
 * 	</PluginSidebarMoreMenuItem>
 * );
 * ```
 *
 * @return {WPComponent} The component to be rendered.
 */

function PluginSidebarMoreMenuItem(props) {
  return Object(external_wp_element_["createElement"])(build_module["c" /* ComplementaryAreaMoreMenuItem */], Object(esm_extends["a" /* default */])({
    scope: "core/edit-post"
  }, props));
}

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/index.js


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */





/**
 * Reinitializes the editor after the user chooses to reboot the editor after
 * an unhandled error occurs, replacing previously mounted editor element using
 * an initial state from prior to the crash.
 *
 * @param {Object}  postType     Post type of the post to edit.
 * @param {Object}  postId       ID of the post to edit.
 * @param {Element} target       DOM node in which editor is rendered.
 * @param {?Object} settings     Editor settings object.
 * @param {Object}  initialEdits Programmatic edits to apply initially, to be
 *                               considered as non-user-initiated (bypass for
 *                               unsaved changes prompt).
 */

function reinitializeEditor(postType, postId, target, settings, initialEdits) {
  Object(external_wp_element_["unmountComponentAtNode"])(target);
  var reboot = reinitializeEditor.bind(null, postType, postId, target, settings, initialEdits);
  Object(external_wp_element_["render"])(Object(external_wp_element_["createElement"])(editor, {
    settings: settings,
    onError: reboot,
    postId: postId,
    postType: postType,
    initialEdits: initialEdits,
    recovery: true
  }), target);
}
/**
 * Initializes and returns an instance of Editor.
 *
 * The return value of this function is not necessary if we change where we
 * call initializeEditor(). This is due to metaBox timing.
 *
 * @param {string}  id           Unique identifier for editor instance.
 * @param {Object}  postType     Post type of the post to edit.
 * @param {Object}  postId       ID of the post to edit.
 * @param {?Object} settings     Editor settings object.
 * @param {Object}  initialEdits Programmatic edits to apply initially, to be
 *                               considered as non-user-initiated (bypass for
 *                               unsaved changes prompt).
 */

function initializeEditor(id, postType, postId, settings, initialEdits) {
  var target = document.getElementById(id);
  var reboot = reinitializeEditor.bind(null, postType, postId, target, settings, initialEdits);
  Object(external_wp_blockLibrary_["registerCoreBlocks"])();

  if (false) {} // Show a console log warning if the browser is not in Standards rendering mode.


  var documentMode = document.compatMode === 'CSS1Compat' ? 'Standards' : 'Quirks';

  if (documentMode !== 'Standards') {
    // eslint-disable-next-line no-console
    console.warn("Your browser is using Quirks Mode. \nThis can cause rendering issues such as blocks overlaying meta boxes in the editor. Quirks Mode can be triggered by PHP errors or HTML code appearing before the opening <!DOCTYPE html>. Try checking the raw page source or your site's PHP error log and resolving errors there, removing any HTML before the doctype, or disabling plugins.");
  } // This is a temporary fix for a couple of issues specific to Webkit on iOS.
  // Without this hack the browser scrolls the mobile toolbar off-screen.
  // Once supported in Safari we can replace this in favor of preventScroll.
  // For details see issue #18632 and PR #18686
  // Specifically, we scroll `interface-interface-skeleton__body` to enable a fixed top toolbar.
  // But Mobile Safari forces the `html` element to scroll upwards, hiding the toolbar.


  var isIphone = window.navigator.userAgent.indexOf('iPhone') !== -1;

  if (isIphone) {
    window.addEventListener('scroll', function (event) {
      var editorScrollContainer = document.getElementsByClassName('interface-interface-skeleton__body')[0];

      if (event.target === document) {
        // Scroll element into view by scrolling the editor container by the same amount
        // that Mobile Safari tried to scroll the html element upwards.
        if (window.scrollY > 100) {
          editorScrollContainer.scrollTop = editorScrollContainer.scrollTop + window.scrollY;
        } // Undo unwanted scroll on html element, but only in the visual editor.


        if (document.getElementsByClassName('is-mode-visual')[0]) {
          window.scrollTo(0, 0);
        }
      }
    });
  }

  Object(external_wp_element_["render"])(Object(external_wp_element_["createElement"])(editor, {
    settings: settings,
    onError: reboot,
    postId: postId,
    postType: postType,
    initialEdits: initialEdits
  }), target);
}












/***/ }),

/***/ 46:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["keyboardShortcuts"]; }());

/***/ }),

/***/ 48:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["a11y"]; }());

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["dataControls"]; }());

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["notices"]; }());

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ store; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ complementary_area; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ ComplementaryAreaMoreMenuItem; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ fullscreen_mode; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ interface_skeleton; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ pinned_items; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ action_item; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/interface/build-module/store/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "enableComplementaryArea", function() { return actions_enableComplementaryArea; });
__webpack_require__.d(actions_namespaceObject, "disableComplementaryArea", function() { return actions_disableComplementaryArea; });
__webpack_require__.d(actions_namespaceObject, "pinItem", function() { return actions_pinItem; });
__webpack_require__.d(actions_namespaceObject, "unpinItem", function() { return actions_unpinItem; });

// NAMESPACE OBJECT: ./node_modules/@wordpress/interface/build-module/store/selectors.js
var selectors_namespaceObject = {};
__webpack_require__.r(selectors_namespaceObject);
__webpack_require__.d(selectors_namespaceObject, "getActiveComplementaryArea", function() { return selectors_getActiveComplementaryArea; });
__webpack_require__.d(selectors_namespaceObject, "isItemPinned", function() { return selectors_isItemPinned; });

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(5);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/reducer.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Reducer to keep tract of the active area per scope.
 *
 * @param {boolean} state           Previous state.
 * @param {Object}  action          Action object.
 * @param {string}  action.type     Action type.
 * @param {string}  action.itemType Type of item.
 * @param {string}  action.scope    Item scope.
 * @param {string}  action.item     Item name.
 *
 * @return {Object} Updated state.
 */

function singleEnableItems() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      itemType = _ref.itemType,
      scope = _ref.scope,
      item = _ref.item;

  if (type !== 'SET_SINGLE_ENABLE_ITEM' || !itemType || !scope) {
    return state;
  }

  return _objectSpread(_objectSpread({}, state), {}, Object(defineProperty["a" /* default */])({}, itemType, _objectSpread(_objectSpread({}, state[itemType]), {}, Object(defineProperty["a" /* default */])({}, scope, item || null))));
}
/**
 * Reducer keeping track of the "pinned" items per scope.
 *
 * @param {boolean} state           Previous state.
 * @param {Object}  action          Action object.
 * @param {string}  action.type     Action type.
 * @param {string}  action.itemType Type of item.
 * @param {string}  action.scope    Item scope.
 * @param {string}  action.item     Item name.
 * @param {boolean} action.isEnable Whether the item is pinned.
 *
 * @return {Object} Updated state.
 */

function multipleEnableItems() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref2 = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref2.type,
      itemType = _ref2.itemType,
      scope = _ref2.scope,
      item = _ref2.item,
      isEnable = _ref2.isEnable;

  if (type !== 'SET_MULTIPLE_ENABLE_ITEM' || !itemType || !scope || !item || Object(external_lodash_["get"])(state, [itemType, scope, item]) === isEnable) {
    return state;
  }

  var currentTypeState = state[itemType] || {};
  var currentScopeState = currentTypeState[scope] || {};
  return _objectSpread(_objectSpread({}, state), {}, Object(defineProperty["a" /* default */])({}, itemType, _objectSpread(_objectSpread({}, currentTypeState), {}, Object(defineProperty["a" /* default */])({}, scope, _objectSpread(_objectSpread({}, currentScopeState), {}, Object(defineProperty["a" /* default */])({}, item, isEnable || false))))));
}
var enableItems = Object(external_wp_data_["combineReducers"])({
  singleEnableItems: singleEnableItems,
  multipleEnableItems: multipleEnableItems
});
/* harmony default export */ var reducer = (Object(external_wp_data_["combineReducers"])({
  enableItems: enableItems
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/actions.js
/**
 * Returns an action object used in signalling that an active area should be changed.
 *
 * @param {string} itemType Type of item.
 * @param {string} scope    Item scope.
 * @param {string} item     Item identifier.
 *
 * @return {Object} Action object.
 */
function setSingleEnableItem(itemType, scope, item) {
  return {
    type: 'SET_SINGLE_ENABLE_ITEM',
    itemType: itemType,
    scope: scope,
    item: item
  };
}
/**
 * Returns an action object used in signalling that a complementary item should be enabled.
 *
 * @param {string} scope Complementary area scope.
 * @param {string} area  Area identifier.
 *
 * @return {Object} Action object.
 */


function actions_enableComplementaryArea(scope, area) {
  return setSingleEnableItem('complementaryArea', scope, area);
}
/**
 * Returns an action object used in signalling that the complementary area of a given scope should be disabled.
 *
 * @param {string} scope Complementary area scope.
 *
 * @return {Object} Action object.
 */

function actions_disableComplementaryArea(scope) {
  return setSingleEnableItem('complementaryArea', scope, undefined);
}
/**
 * Returns an action object to make an area enabled/disabled.
 *
 * @param {string}  itemType Type of item.
 * @param {string}  scope    Item scope.
 * @param {string}  item     Item identifier.
 * @param {boolean} isEnable Boolean indicating if an area should be pinned or not.
 *
 * @return {Object} Action object.
 */

function setMultipleEnableItem(itemType, scope, item, isEnable) {
  return {
    type: 'SET_MULTIPLE_ENABLE_ITEM',
    itemType: itemType,
    scope: scope,
    item: item,
    isEnable: isEnable
  };
}
/**
 * Returns an action object used in signalling that an item should be pinned.
 *
 * @param {string} scope  Item scope.
 * @param {string} itemId Item identifier.
 *
 * @return {Object} Action object.
 */


function actions_pinItem(scope, itemId) {
  return setMultipleEnableItem('pinnedItems', scope, itemId, true);
}
/**
 * Returns an action object used in signalling that an item should be unpinned.
 *
 * @param {string} scope  Item scope.
 * @param {string} itemId Item identifier.
 *
 * @return {Object} Action object.
 */

function actions_unpinItem(scope, itemId) {
  return setMultipleEnableItem('pinnedItems', scope, itemId, false);
}

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/selectors.js
/**
 * External dependencies
 */

/**
 * Returns the item that is enabled in a given scope.
 *
 * @param {Object} state    Global application state.
 * @param {string} itemType Type of item.
 * @param {string} scope    Item scope.
 *
 * @return {?string|null} The item that is enabled in the passed scope and type.
 */

function getSingleEnableItem(state, itemType, scope) {
  return Object(external_lodash_["get"])(state.enableItems.singleEnableItems, [itemType, scope]);
}
/**
 * Returns the complementary area that is active in a given scope.
 *
 * @param {Object} state    Global application state.
 * @param {string} scope    Item scope.
 *
 * @return {string} The complementary area that is active in the given scope.
 */


function selectors_getActiveComplementaryArea(state, scope) {
  return getSingleEnableItem(state, 'complementaryArea', scope);
}
/**
 * Returns a boolean indicating if an item is enabled or not in a given scope.
 *
 * @param {Object} state    Global application state.
 * @param {string} itemType Type of item.
 * @param {string} scope    Scope.
 * @param {string} item     Item to check.
 *
 * @return {boolean|undefined} True if the item is enabled, false otherwise if the item is explicitly disabled, and undefined if there is no information for that item.
 */

function isMultipleEnabledItemEnabled(state, itemType, scope, item) {
  return Object(external_lodash_["get"])(state.enableItems.multipleEnableItems, [itemType, scope, item]);
}
/**
 * Returns a boolean indicating if an item is pinned or not.
 *
 * @param {Object} state    Global application state.
 * @param {string} scope    Scope.
 * @param {string} item     Item to check.
 *
 * @return {boolean} True if the item is pinned and false otherwise.
 */


function selectors_isItemPinned(state, scope, item) {
  return isMultipleEnabledItemEnabled(state, 'pinnedItems', scope, item) !== false;
}

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/constants.js
/**
 * The identifier for the data store.
 *
 * @type {string}
 */
var STORE_NAME = 'core/interface';

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/store/index.js
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */





/**
 * Store definition for the interface namespace.
 *
 * @see https://github.com/WordPress/gutenberg/blob/HEAD/packages/data/README.md#createReduxStore
 *
 * @type {Object}
 */

var store = Object(external_wp_data_["createReduxStore"])(STORE_NAME, {
  reducer: reducer,
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject,
  persist: ['enableItems']
}); // Once we build a more generic persistence plugin that works across types of stores
// we'd be able to replace this with a register call.

Object(external_wp_data_["registerStore"])(STORE_NAME, {
  reducer: reducer,
  actions: actions_namespaceObject,
  selectors: selectors_namespaceObject,
  persist: ['enableItems']
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(13);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(10);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/check.js
var check = __webpack_require__(161);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-filled.js
var star_filled = __webpack_require__(297);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/star-empty.js
var star_empty = __webpack_require__(298);

// EXTERNAL MODULE: external ["wp","viewport"]
var external_wp_viewport_ = __webpack_require__(114);

// EXTERNAL MODULE: ./node_modules/@wordpress/icons/build-module/library/close-small.js
var close_small = __webpack_require__(159);

// EXTERNAL MODULE: external ["wp","plugins"]
var external_wp_plugins_ = __webpack_require__(73);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-context/index.js
/**
 * WordPress dependencies
 */

/* harmony default export */ var complementary_area_context = (Object(external_wp_plugins_["withPluginContext"])(function (context, ownProps) {
  return {
    icon: ownProps.icon || context.icon,
    identifier: ownProps.identifier || "".concat(context.name, "/").concat(ownProps.name)
  };
}));

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-toggle/index.js




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




function ComplementaryAreaToggle(_ref) {
  var _ref$as = _ref.as,
      as = _ref$as === void 0 ? external_wp_components_["Button"] : _ref$as,
      scope = _ref.scope,
      identifier = _ref.identifier,
      icon = _ref.icon,
      selectedIcon = _ref.selectedIcon,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["as", "scope", "identifier", "icon", "selectedIcon"]);

  var ComponentToUse = as;
  var isSelected = Object(external_wp_data_["useSelect"])(function (select) {
    return select(store).getActiveComplementaryArea(scope) === identifier;
  }, [identifier]);

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store),
      enableComplementaryArea = _useDispatch.enableComplementaryArea,
      disableComplementaryArea = _useDispatch.disableComplementaryArea;

  return Object(external_wp_element_["createElement"])(ComponentToUse, Object(esm_extends["a" /* default */])({
    icon: selectedIcon && isSelected ? selectedIcon : icon,
    onClick: function onClick() {
      if (isSelected) {
        disableComplementaryArea(scope);
      } else {
        enableComplementaryArea(scope, identifier);
      }
    }
  }, Object(external_lodash_["omit"])(props, ['name'])));
}

/* harmony default export */ var complementary_area_toggle = (complementary_area_context(ComplementaryAreaToggle));

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-header/index.js



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



var complementary_area_header_ComplementaryAreaHeader = function ComplementaryAreaHeader(_ref) {
  var smallScreenTitle = _ref.smallScreenTitle,
      children = _ref.children,
      className = _ref.className,
      toggleButtonProps = _ref.toggleButtonProps;
  var toggleButton = Object(external_wp_element_["createElement"])(complementary_area_toggle, Object(esm_extends["a" /* default */])({
    icon: close_small["a" /* default */]
  }, toggleButtonProps));
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("div", {
    className: "components-panel__header interface-complementary-area-header__small"
  }, smallScreenTitle && Object(external_wp_element_["createElement"])("span", {
    className: "interface-complementary-area-header__small-title"
  }, smallScreenTitle), toggleButton), Object(external_wp_element_["createElement"])("div", {
    className: classnames_default()('components-panel__header', 'interface-complementary-area-header', className),
    tabIndex: -1
  }, children, toggleButton));
};

/* harmony default export */ var complementary_area_header = (complementary_area_header_ComplementaryAreaHeader);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/pinned-items/index.js




/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



function PinnedItems(_ref) {
  var scope = _ref.scope,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["scope"]);

  return Object(external_wp_element_["createElement"])(external_wp_components_["Fill"], Object(esm_extends["a" /* default */])({
    name: "PinnedItems/".concat(scope)
  }, props));
}

function PinnedItemsSlot(_ref2) {
  var scope = _ref2.scope,
      className = _ref2.className,
      props = Object(objectWithoutProperties["a" /* default */])(_ref2, ["scope", "className"]);

  return Object(external_wp_element_["createElement"])(external_wp_components_["Slot"], Object(esm_extends["a" /* default */])({
    name: "PinnedItems/".concat(scope)
  }, props), function (fills) {
    return !Object(external_lodash_["isEmpty"])(fills) && Object(external_wp_element_["createElement"])("div", {
      className: classnames_default()(className, 'interface-pinned-items')
    }, fills);
  });
}

PinnedItems.Slot = PinnedItemsSlot;
/* harmony default export */ var pinned_items = (PinnedItems);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area/index.js




/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */







function ComplementaryAreaSlot(_ref) {
  var scope = _ref.scope,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["scope"]);

  return Object(external_wp_element_["createElement"])(external_wp_components_["Slot"], Object(esm_extends["a" /* default */])({
    name: "ComplementaryArea/".concat(scope)
  }, props));
}

function ComplementaryAreaFill(_ref2) {
  var scope = _ref2.scope,
      children = _ref2.children,
      className = _ref2.className;
  return Object(external_wp_element_["createElement"])(external_wp_components_["Fill"], {
    name: "ComplementaryArea/".concat(scope)
  }, Object(external_wp_element_["createElement"])("div", {
    className: className
  }, children));
}

function useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall) {
  var previousIsSmall = Object(external_wp_element_["useRef"])(false);
  var shouldOpenWhenNotSmall = Object(external_wp_element_["useRef"])(false);

  var _useDispatch = Object(external_wp_data_["useDispatch"])(store),
      enableComplementaryArea = _useDispatch.enableComplementaryArea,
      disableComplementaryArea = _useDispatch.disableComplementaryArea;

  Object(external_wp_element_["useEffect"])(function () {
    // If the complementary area is active and the editor is switching from a big to a small window size.
    if (isActive && isSmall && !previousIsSmall.current) {
      // Disable the complementary area.
      disableComplementaryArea(scope); // Flag the complementary area to be reopened when the window size goes from small to big.

      shouldOpenWhenNotSmall.current = true;
    } else if ( // If there is a flag indicating the complementary area should be enabled when we go from small to big window size
    // and we are going from a small to big window size.
    shouldOpenWhenNotSmall.current && !isSmall && previousIsSmall.current) {
      // Remove the flag indicating the complementary area should be enabled.
      shouldOpenWhenNotSmall.current = false; // Enable the complementary area.

      enableComplementaryArea(scope, identifier);
    } else if ( // If the flag is indicating the current complementary should be reopened but another complementary area becomes active,
    // remove the flag.
    shouldOpenWhenNotSmall.current && activeArea && activeArea !== identifier) {
      shouldOpenWhenNotSmall.current = false;
    }

    if (isSmall !== previousIsSmall.current) {
      previousIsSmall.current = isSmall;
    }
  }, [isActive, isSmall, scope, identifier, activeArea]);
}

function ComplementaryArea(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      _ref3$closeLabel = _ref3.closeLabel,
      closeLabel = _ref3$closeLabel === void 0 ? Object(external_wp_i18n_["__"])('Close plugin') : _ref3$closeLabel,
      identifier = _ref3.identifier,
      header = _ref3.header,
      headerClassName = _ref3.headerClassName,
      icon = _ref3.icon,
      _ref3$isPinnable = _ref3.isPinnable,
      isPinnable = _ref3$isPinnable === void 0 ? true : _ref3$isPinnable,
      panelClassName = _ref3.panelClassName,
      scope = _ref3.scope,
      smallScreenTitle = _ref3.smallScreenTitle,
      title = _ref3.title,
      toggleShortcut = _ref3.toggleShortcut,
      isActiveByDefault = _ref3.isActiveByDefault,
      _ref3$showIconLabels = _ref3.showIconLabels,
      showIconLabels = _ref3$showIconLabels === void 0 ? false : _ref3$showIconLabels;

  var _useSelect = Object(external_wp_data_["useSelect"])(function (select) {
    var _select = select(store),
        getActiveComplementaryArea = _select.getActiveComplementaryArea,
        isItemPinned = _select.isItemPinned;

    var _activeArea = getActiveComplementaryArea(scope);

    return {
      isActive: _activeArea === identifier,
      isPinned: isItemPinned(scope, identifier),
      activeArea: _activeArea,
      isSmall: select(external_wp_viewport_["store"]).isViewportMatch('< medium'),
      isLarge: select(external_wp_viewport_["store"]).isViewportMatch('large')
    };
  }, [identifier, scope]),
      isActive = _useSelect.isActive,
      isPinned = _useSelect.isPinned,
      activeArea = _useSelect.activeArea,
      isSmall = _useSelect.isSmall,
      isLarge = _useSelect.isLarge;

  useAdjustComplementaryListener(scope, identifier, activeArea, isActive, isSmall);

  var _useDispatch2 = Object(external_wp_data_["useDispatch"])(store),
      enableComplementaryArea = _useDispatch2.enableComplementaryArea,
      disableComplementaryArea = _useDispatch2.disableComplementaryArea,
      pinItem = _useDispatch2.pinItem,
      unpinItem = _useDispatch2.unpinItem;

  Object(external_wp_element_["useEffect"])(function () {
    if (isActiveByDefault && activeArea === undefined && !isSmall) {
      enableComplementaryArea(scope, identifier);
    }
  }, [activeArea, isActiveByDefault, scope, identifier, isSmall]);
  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, isPinned && isPinnable && Object(external_wp_element_["createElement"])(pinned_items, {
    scope: scope
  }, Object(external_wp_element_["createElement"])(complementary_area_toggle, {
    scope: scope,
    identifier: identifier,
    isPressed: isActive && (!showIconLabels || isLarge),
    "aria-expanded": isActive,
    label: title,
    icon: showIconLabels ? check["a" /* default */] : icon,
    showTooltip: !showIconLabels,
    isTertiary: showIconLabels
  })), isActive && Object(external_wp_element_["createElement"])(ComplementaryAreaFill, {
    className: classnames_default()('interface-complementary-area', className),
    scope: scope
  }, Object(external_wp_element_["createElement"])(complementary_area_header, {
    className: headerClassName,
    closeLabel: closeLabel,
    onClose: function onClose() {
      return disableComplementaryArea(scope);
    },
    smallScreenTitle: smallScreenTitle,
    toggleButtonProps: {
      label: closeLabel,
      shortcut: toggleShortcut,
      scope: scope,
      identifier: identifier
    }
  }, header || Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("strong", null, title), isPinnable && Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "interface-complementary-area__pin-unpin-item",
    icon: isPinned ? star_filled["a" /* default */] : star_empty["a" /* default */],
    label: isPinned ? Object(external_wp_i18n_["__"])('Unpin from toolbar') : Object(external_wp_i18n_["__"])('Pin to toolbar'),
    onClick: function onClick() {
      return (isPinned ? unpinItem : pinItem)(scope, identifier);
    },
    isPressed: isPinned,
    "aria-expanded": isPinned
  }))), Object(external_wp_element_["createElement"])(external_wp_components_["Panel"], {
    className: panelClassName
  }, children)));
}

var ComplementaryAreaWrapped = complementary_area_context(ComplementaryArea);
ComplementaryAreaWrapped.Slot = ComplementaryAreaSlot;
/* harmony default export */ var complementary_area = (ComplementaryAreaWrapped);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(11);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/action-item/index.js






function action_item_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function action_item_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { action_item_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { action_item_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



function ActionItemSlot(_ref) {
  var name = _ref.name,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? [external_wp_components_["ButtonGroup"], external_wp_components_["Button"]] : _ref$as,
      _ref$fillProps = _ref.fillProps,
      fillProps = _ref$fillProps === void 0 ? {} : _ref$fillProps,
      bubblesVirtually = _ref.bubblesVirtually,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["name", "as", "fillProps", "bubblesVirtually"]);

  var _as = Object(slicedToArray["a" /* default */])(as, 2),
      Container = _as[0],
      Item = _as[1];

  return Object(external_wp_element_["createElement"])(external_wp_components_["Slot"], {
    name: name,
    bubblesVirtually: bubblesVirtually,
    fillProps: action_item_objectSpread({
      as: Item
    }, fillProps)
  }, function (fills) {
    return !Object(external_lodash_["isEmpty"])(fills) && Object(external_wp_element_["createElement"])(Container, props, fills);
  });
}

function ActionItem(_ref2) {
  var name = _ref2.name,
      as = _ref2.as,
      onClick = _ref2.onClick,
      props = Object(objectWithoutProperties["a" /* default */])(_ref2, ["name", "as", "onClick"]);

  return Object(external_wp_element_["createElement"])(external_wp_components_["Fill"], {
    name: name
  }, function (fillProps) {
    var fpOnClick = fillProps.onClick,
        fpAs = fillProps.as;
    var Item = as || fpAs || external_wp_components_["Button"];
    return Object(external_wp_element_["createElement"])(Item, Object(esm_extends["a" /* default */])({
      onClick: onClick || fpOnClick ? function () {
        (onClick || external_lodash_["noop"]).apply(void 0, arguments);
        (fpOnClick || external_lodash_["noop"]).apply(void 0, arguments);
      } : undefined
    }, props));
  });
}

ActionItem.Slot = ActionItemSlot;
/* harmony default export */ var action_item = (ActionItem);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/complementary-area-more-menu-item/index.js




/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



function ComplementaryAreaMoreMenuItem(_ref) {
  var scope = _ref.scope,
      target = _ref.target,
      props = Object(objectWithoutProperties["a" /* default */])(_ref, ["scope", "target"]);

  return Object(external_wp_element_["createElement"])(complementary_area_toggle, Object(esm_extends["a" /* default */])({
    as: function as(toggleProps) {
      return Object(external_wp_element_["createElement"])(action_item, Object(esm_extends["a" /* default */])({
        name: "".concat(scope, "/plugin-more-menu")
      }, toggleProps));
    },
    role: "menuitemcheckbox",
    selectedIcon: check["a" /* default */],
    name: target,
    scope: scope
  }, props));
}

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/fullscreen-mode/index.js






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(getPrototypeOf["a" /* default */])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(getPrototypeOf["a" /* default */])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(possibleConstructorReturn["a" /* default */])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * WordPress dependencies
 */

var fullscreen_mode_FullscreenMode = /*#__PURE__*/function (_Component) {
  Object(inherits["a" /* default */])(FullscreenMode, _Component);

  var _super = _createSuper(FullscreenMode);

  function FullscreenMode() {
    Object(classCallCheck["a" /* default */])(this, FullscreenMode);

    return _super.apply(this, arguments);
  }

  Object(createClass["a" /* default */])(FullscreenMode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.isSticky = false;
      this.sync(); // `is-fullscreen-mode` is set in PHP as a body class by Gutenberg, and this causes
      // `sticky-menu` to be applied by WordPress and prevents the admin menu being scrolled
      // even if `is-fullscreen-mode` is then removed. Let's remove `sticky-menu` here as
      // a consequence of the FullscreenMode setup

      if (document.body.classList.contains('sticky-menu')) {
        this.isSticky = true;
        document.body.classList.remove('sticky-menu');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.isSticky) {
        document.body.classList.add('sticky-menu');
      }

      if (this.props.isActive) {
        document.body.classList.remove('is-fullscreen-mode');
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isActive !== prevProps.isActive) {
        this.sync();
      }
    }
  }, {
    key: "sync",
    value: function sync() {
      var isActive = this.props.isActive;

      if (isActive) {
        document.body.classList.add('is-fullscreen-mode');
      } else {
        document.body.classList.remove('is-fullscreen-mode');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return FullscreenMode;
}(external_wp_element_["Component"]);
/* harmony default export */ var fullscreen_mode = (fullscreen_mode_FullscreenMode);

// EXTERNAL MODULE: ./node_modules/react-merge-refs/dist/react-merge-refs.esm.js
var react_merge_refs_esm = __webpack_require__(72);

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/interface-skeleton/index.js



function interface_skeleton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function interface_skeleton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { interface_skeleton_ownKeys(Object(source), true).forEach(function (key) { Object(defineProperty["a" /* default */])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { interface_skeleton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */





function useHTMLClass(className) {
  Object(external_wp_element_["useEffect"])(function () {
    var element = document && document.querySelector("html:not(.".concat(className, ")"));

    if (!element) {
      return;
    }

    element.classList.toggle(className);
    return function () {
      element.classList.toggle(className);
    };
  }, [className]);
}

function InterfaceSkeleton(_ref, ref) {
  var footer = _ref.footer,
      header = _ref.header,
      sidebar = _ref.sidebar,
      secondarySidebar = _ref.secondarySidebar,
      content = _ref.content,
      drawer = _ref.drawer,
      actions = _ref.actions,
      labels = _ref.labels,
      className = _ref.className,
      shortcuts = _ref.shortcuts;
  var fallbackRef = Object(external_wp_element_["useRef"])();
  var regionsClassName = Object(external_wp_components_["__unstableUseNavigateRegions"])(fallbackRef, shortcuts);
  useHTMLClass('interface-interface-skeleton__html-container');
  var defaultLabels = {
    /* translators: accessibility text for the nav bar landmark region. */
    drawer: Object(external_wp_i18n_["__"])('Drawer'),

    /* translators: accessibility text for the top bar landmark region. */
    header: Object(external_wp_i18n_["__"])('Header'),

    /* translators: accessibility text for the content landmark region. */
    body: Object(external_wp_i18n_["__"])('Content'),

    /* translators: accessibility text for the secondary sidebar landmark region. */
    secondarySidebar: Object(external_wp_i18n_["__"])('Block Library'),

    /* translators: accessibility text for the settings landmark region. */
    sidebar: Object(external_wp_i18n_["__"])('Settings'),

    /* translators: accessibility text for the publish landmark region. */
    actions: Object(external_wp_i18n_["__"])('Publish'),

    /* translators: accessibility text for the footer landmark region. */
    footer: Object(external_wp_i18n_["__"])('Footer')
  };

  var mergedLabels = interface_skeleton_objectSpread(interface_skeleton_objectSpread({}, defaultLabels), labels);

  return Object(external_wp_element_["createElement"])("div", {
    ref: Object(external_wp_element_["useCallback"])(Object(react_merge_refs_esm["a" /* default */])([ref, fallbackRef]), [ref, fallbackRef]),
    className: classnames_default()(className, 'interface-interface-skeleton', regionsClassName, !!footer && 'has-footer')
  }, !!drawer && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__drawer",
    role: "region",
    "aria-label": mergedLabels.drawer
  }, drawer), Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__editor"
  }, !!header && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__header",
    role: "region",
    "aria-label": mergedLabels.header,
    tabIndex: "-1"
  }, header), Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__body"
  }, !!secondarySidebar && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__secondary-sidebar",
    role: "region",
    "aria-label": mergedLabels.secondarySidebar,
    tabIndex: "-1"
  }, secondarySidebar), Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__content",
    role: "region",
    "aria-label": mergedLabels.body,
    tabIndex: "-1"
  }, content), !!sidebar && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__sidebar",
    role: "region",
    "aria-label": mergedLabels.sidebar,
    tabIndex: "-1"
  }, sidebar), !!actions && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__actions",
    role: "region",
    "aria-label": mergedLabels.actions,
    tabIndex: "-1"
  }, actions))), !!footer && Object(external_wp_element_["createElement"])("div", {
    className: "interface-interface-skeleton__footer",
    role: "region",
    "aria-label": mergedLabels.footer,
    tabIndex: "-1"
  }, footer));
}

/* harmony default export */ var interface_skeleton = (Object(external_wp_element_["forwardRef"])(InterfaceSkeleton));

// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/components/index.js







// CONCATENATED MODULE: ./node_modules/@wordpress/interface/build-module/index.js




/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ enable_custom_fields; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ enable_panel; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ enable_plugin_document_setting_panel; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ enable_publish_sidebar; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ enable_feature; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(11);

// EXTERNAL MODULE: external ["wp","element"]
var external_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: external ["wp","i18n"]
var external_wp_i18n_ = __webpack_require__(1);

// EXTERNAL MODULE: external ["wp","components"]
var external_wp_components_ = __webpack_require__(3);

// EXTERNAL MODULE: external ["wp","data"]
var external_wp_data_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/base.js


/**
 * WordPress dependencies
 */


function BaseOption(_ref) {
  var help = _ref.help,
      label = _ref.label,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      children = _ref.children;
  return Object(external_wp_element_["createElement"])("div", {
    className: "edit-post-preferences-modal__option"
  }, Object(external_wp_element_["createElement"])(external_wp_components_["ToggleControl"], {
    help: help,
    label: label,
    checked: isChecked,
    onChange: onChange
  }), children);
}

/* harmony default export */ var base = (BaseOption);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-custom-fields.js



/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


function CustomFieldsConfirmation(_ref) {
  var willEnable = _ref.willEnable;

  var _useState = Object(external_wp_element_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      isReloading = _useState2[0],
      setIsReloading = _useState2[1];

  return Object(external_wp_element_["createElement"])(external_wp_element_["Fragment"], null, Object(external_wp_element_["createElement"])("p", {
    className: "edit-post-preferences-modal__custom-fields-confirmation-message"
  }, Object(external_wp_i18n_["__"])('A page reload is required for this change. Make sure your content is saved before reloading.')), Object(external_wp_element_["createElement"])(external_wp_components_["Button"], {
    className: "edit-post-preferences-modal__custom-fields-confirmation-button",
    isSecondary: true,
    isBusy: isReloading,
    disabled: isReloading,
    onClick: function onClick() {
      setIsReloading(true);
      document.getElementById('toggle-custom-fields-form').submit();
    }
  }, willEnable ? Object(external_wp_i18n_["__"])('Enable & Reload') : Object(external_wp_i18n_["__"])('Disable & Reload')));
}
function EnableCustomFieldsOption(_ref2) {
  var label = _ref2.label,
      areCustomFieldsEnabled = _ref2.areCustomFieldsEnabled;

  var _useState3 = Object(external_wp_element_["useState"])(areCustomFieldsEnabled),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      isChecked = _useState4[0],
      setIsChecked = _useState4[1];

  return Object(external_wp_element_["createElement"])(base, {
    label: label,
    isChecked: isChecked,
    onChange: setIsChecked
  }, isChecked !== areCustomFieldsEnabled && Object(external_wp_element_["createElement"])(CustomFieldsConfirmation, {
    willEnable: isChecked
  }));
}
/* harmony default export */ var enable_custom_fields = (Object(external_wp_data_["withSelect"])(function (select) {
  return {
    areCustomFieldsEnabled: !!select('core/editor').getEditorSettings().enableCustomFields
  };
})(EnableCustomFieldsOption));

// EXTERNAL MODULE: external ["wp","compose"]
var external_wp_compose_ = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/@wordpress/edit-post/build-module/store/index.js + 5 modules
var store = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-panel.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/* harmony default export */ var enable_panel = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select, _ref) {
  var panelName = _ref.panelName;

  var _select = select(store["a" /* store */]),
      isEditorPanelEnabled = _select.isEditorPanelEnabled,
      isEditorPanelRemoved = _select.isEditorPanelRemoved;

  return {
    isRemoved: isEditorPanelRemoved(panelName),
    isChecked: isEditorPanelEnabled(panelName)
  };
}), Object(external_wp_compose_["ifCondition"])(function (_ref2) {
  var isRemoved = _ref2.isRemoved;
  return !isRemoved;
}), Object(external_wp_data_["withDispatch"])(function (dispatch, _ref3) {
  var panelName = _ref3.panelName;
  return {
    onChange: function onChange() {
      return dispatch(store["a" /* store */]).toggleEditorPanelEnabled(panelName);
    }
  };
}))(base));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-plugin-document-setting-panel.js


/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



var _createSlotFill = Object(external_wp_components_["createSlotFill"])('EnablePluginDocumentSettingPanelOption'),
    Fill = _createSlotFill.Fill,
    Slot = _createSlotFill.Slot;

var enable_plugin_document_setting_panel_EnablePluginDocumentSettingPanelOption = function EnablePluginDocumentSettingPanelOption(_ref) {
  var label = _ref.label,
      panelName = _ref.panelName;
  return Object(external_wp_element_["createElement"])(Fill, null, Object(external_wp_element_["createElement"])(enable_panel, {
    label: label,
    panelName: panelName
  }));
};

enable_plugin_document_setting_panel_EnablePluginDocumentSettingPanelOption.Slot = Slot;
/* harmony default export */ var enable_plugin_document_setting_panel = (enable_plugin_document_setting_panel_EnablePluginDocumentSettingPanelOption);

// EXTERNAL MODULE: external ["wp","viewport"]
var external_wp_viewport_ = __webpack_require__(114);

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-publish-sidebar.js
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/* harmony default export */ var enable_publish_sidebar = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select) {
  return {
    isChecked: select('core/editor').isPublishSidebarEnabled()
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      enablePublishSidebar = _dispatch.enablePublishSidebar,
      disablePublishSidebar = _dispatch.disablePublishSidebar;

  return {
    onChange: function onChange(isEnabled) {
      return isEnabled ? enablePublishSidebar() : disablePublishSidebar();
    }
  };
}), // In < medium viewports we override this option and always show the publish sidebar.
// See the edit-post's header component for the specific logic.
Object(external_wp_viewport_["ifViewportMatches"])('medium'))(base));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/enable-feature.js
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



/* harmony default export */ var enable_feature = (Object(external_wp_compose_["compose"])(Object(external_wp_data_["withSelect"])(function (select, _ref) {
  var featureName = _ref.featureName;

  var _select = select(store["a" /* store */]),
      isFeatureActive = _select.isFeatureActive;

  return {
    isChecked: isFeatureActive(featureName)
  };
}), Object(external_wp_data_["withDispatch"])(function (dispatch, _ref2) {
  var featureName = _ref2.featureName;
  return {
    onChange: function onChange() {
      return dispatch(store["a" /* store */]).toggleFeature(featureName);
    }
  };
}))(base));

// CONCATENATED MODULE: ./node_modules/@wordpress/edit-post/build-module/components/preferences-modal/options/index.js







/***/ }),

/***/ 7:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function mergeRefs(refs) {
  return function (value) {
    refs.forEach(function (ref) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

/* harmony default export */ __webpack_exports__["a"] = (mergeRefs);


/***/ }),

/***/ 73:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["plugins"]; }());

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ })

/******/ });