this["wp"] = this["wp"] || {}; this["wp"]["notices"] =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 279);
/******/ })
/************************************************************************/
/******/ ({

/***/ 122:
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_STATUS = exports.DEFAULT_CONTEXT = void 0;

/**
 * Default context to use for notice grouping when not otherwise specified. Its
 * specific value doesn't hold much meaning, but it must be reasonably unique
 * and, more importantly, referenced consistently in the store implementation.
 *
 * @type {string}
 */
var DEFAULT_CONTEXT = 'global';
/**
 * Default notice status.
 *
 * @type {string}
 */

exports.DEFAULT_CONTEXT = DEFAULT_CONTEXT;
var DEFAULT_STATUS = 'info';
exports.DEFAULT_STATUS = DEFAULT_STATUS;


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(280);


/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(281);

var _interopRequireDefault = __webpack_require__(122);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _data = __webpack_require__(5);

var _reducer = _interopRequireDefault(__webpack_require__(282));

var actions = _interopRequireWildcard(__webpack_require__(289));

var selectors = _interopRequireWildcard(__webpack_require__(290));

var _controls = _interopRequireDefault(__webpack_require__(291));

/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */
var _default = (0, _data.registerStore)('core/notices', {
  reducer: _reducer.default,
  actions: actions,
  selectors: selectors,
  controls: _controls.default
});

exports.default = _default;


/***/ }),

/***/ 281:
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(122);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(283));

var _lodash = __webpack_require__(2);

var _onSubKey = _interopRequireDefault(__webpack_require__(287));

/**
 * External dependencies
 */

/**
 * Internal dependencies
 */

/**
 * Reducer returning the next notices state. The notices state is an object
 * where each key is a context, its value an array of notice objects.
 *
 * @param {Object} state  Current state.
 * @param {Object} action Dispatched action.
 *
 * @return {Object} Updated state.
 */
var notices = (0, _onSubKey.default)('context')(function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'CREATE_NOTICE':
      // Avoid duplicates on ID.
      return (0, _toConsumableArray2.default)((0, _lodash.reject)(state, {
        id: action.notice.id
      })).concat([action.notice]);

    case 'REMOVE_NOTICE':
      return (0, _lodash.reject)(state, {
        id: action.id
      });
  }

  return state;
});
var _default = notices;
exports.default = _default;


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(284);

var iterableToArray = __webpack_require__(285);

var nonIterableSpread = __webpack_require__(286);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 285:
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(122);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.onSubKey = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(175));

var _objectSpread3 = _interopRequireDefault(__webpack_require__(288));

/**
 * Higher-order reducer creator which creates a combined reducer object, keyed
 * by a property on the action object.
 *
 * @param {string} actionProperty Action property by which to key object.
 *
 * @return {Function} Higher-order reducer.
 */
var onSubKey = function onSubKey(actionProperty) {
  return function (reducer) {
    return function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 ? arguments[1] : undefined;
      // Retrieve subkey from action. Do not track if undefined; useful for cases
      // where reducer is scoped by action shape.
      var key = action[actionProperty];

      if (key === undefined) {
        return state;
      } // Avoid updating state if unchanged. Note that this also accounts for a
      // reducer which returns undefined on a key which is not yet tracked.


      var nextKeyState = reducer(state[key], action);

      if (nextKeyState === state[key]) {
        return state;
      }

      return (0, _objectSpread3.default)({}, state, (0, _defineProperty2.default)({}, key, nextKeyState));
    };
  };
};

exports.onSubKey = onSubKey;
var _default = onSubKey;
exports.default = _default;


/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(175);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNotice = createNotice;
exports.createSuccessNotice = createSuccessNotice;
exports.createInfoNotice = createInfoNotice;
exports.createErrorNotice = createErrorNotice;
exports.createWarningNotice = createWarningNotice;
exports.removeNotice = removeNotice;

var _lodash = __webpack_require__(2);

var _constants = __webpack_require__(176);

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(createNotice);

/**
 * Yields action objects used in signalling that a notice is to be created.
 *
 * @param {?string}                status                Notice status.
 *                                                       Defaults to `info`.
 * @param {string}                 content               Notice message.
 * @param {?Object}                options               Notice options.
 * @param {?string}                options.context       Context under which to
 *                                                       group notice.
 * @param {?string}                options.id            Identifier for notice.
 *                                                       Automatically assigned
 *                                                       if not specified.
 * @param {?boolean}               options.isDismissible Whether the notice can
 *                                                       be dismissed by user.
 *                                                       Defaults to `true`.
 * @param {?boolean}               options.speak         Whether the notice
 *                                                       content should be
 *                                                       announced to screen
 *                                                       readers. Defaults to
 *                                                       `true`.
 * @param {?Array<WPNoticeAction>} options.actions       User actions to be
 *                                                       presented with notice.
 */
function createNotice() {
  var status,
      content,
      options,
      _options$speak,
      speak,
      _options$isDismissibl,
      isDismissible,
      _options$context,
      context,
      _options$id,
      id,
      _options$actions,
      actions,
      __unstableHTML,
      _args = arguments;

  return regeneratorRuntime.wrap(function createNotice$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          status = _args.length > 0 && _args[0] !== undefined ? _args[0] : _constants.DEFAULT_STATUS;
          content = _args.length > 1 ? _args[1] : undefined;
          options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
          _options$speak = options.speak, speak = _options$speak === void 0 ? true : _options$speak, _options$isDismissibl = options.isDismissible, isDismissible = _options$isDismissibl === void 0 ? true : _options$isDismissibl, _options$context = options.context, context = _options$context === void 0 ? _constants.DEFAULT_CONTEXT : _options$context, _options$id = options.id, id = _options$id === void 0 ? (0, _lodash.uniqueId)(context) : _options$id, _options$actions = options.actions, actions = _options$actions === void 0 ? [] : _options$actions, __unstableHTML = options.__unstableHTML; // The supported value shape of content is currently limited to plain text
          // strings. To avoid setting expectation that e.g. a WPElement could be
          // supported, cast to a string.

          content = String(content);

          if (!speak) {
            _context.next = 8;
            break;
          }

          _context.next = 8;
          return {
            type: 'SPEAK',
            message: content
          };

        case 8:
          _context.next = 10;
          return {
            type: 'CREATE_NOTICE',
            context: context,
            notice: {
              id: id,
              status: status,
              content: content,
              __unstableHTML: __unstableHTML,
              isDismissible: isDismissible,
              actions: actions
            }
          };

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
/**
 * Returns an action object used in signalling that a success notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string}  content Notice message.
 * @param {?Object} options Optional notice options.
 *
 * @return {Object} Action object.
 */


function createSuccessNotice(content, options) {
  return createNotice('success', content, options);
}
/**
 * Returns an action object used in signalling that an info notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string}  content Notice message.
 * @param {?Object} options Optional notice options.
 *
 * @return {Object} Action object.
 */


function createInfoNotice(content, options) {
  return createNotice('info', content, options);
}
/**
 * Returns an action object used in signalling that an error notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string}  content Notice message.
 * @param {?Object} options Optional notice options.
 *
 * @return {Object} Action object.
 */


function createErrorNotice(content, options) {
  return createNotice('error', content, options);
}
/**
 * Returns an action object used in signalling that a warning notice is to be
 * created. Refer to `createNotice` for options documentation.
 *
 * @see createNotice
 *
 * @param {string}  content Notice message.
 * @param {?Object} options Optional notice options.
 *
 * @return {Object} Action object.
 */


function createWarningNotice(content, options) {
  return createNotice('warning', content, options);
}
/**
 * Returns an action object used in signalling that a notice is to be removed.
 *
 * @param {string}  id      Notice unique identifier.
 * @param {?string} context Optional context (grouping) in which the notice is
 *                          intended to appear. Defaults to default context.
 *
 * @return {Object} Action object.
 */


function removeNotice(id) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.DEFAULT_CONTEXT;
  return {
    type: 'REMOVE_NOTICE',
    id: id,
    context: context
  };
}


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNotices = getNotices;

var _constants = __webpack_require__(176);

/**
 * Internal dependencies
 */

/**
 * The default empty set of notices to return when there are no notices
 * assigned for a given notices context. This can occur if the getNotices
 * selector is called without a notice ever having been created for the
 * context. A shared value is used to ensure referential equality between
 * sequential selector calls, since otherwise `[] !== []`.
 *
 * @type {Array}
 */
var DEFAULT_NOTICES = [];
/**
 * Notice object.
 *
 * @property {string}  id               Unique identifier of notice.
 * @property {string}  status           Status of notice, one of `success`,
 *                                      `info`, `error`, or `warning`. Defaults
 *                                      to `info`.
 * @property {string}  content          Notice message.
 * @property {string}  __unstableHTML   Notice message as raw HTML. Intended to
 *                                      serve primarily for compatibility of
 *                                      server-rendered notices, and SHOULD NOT
 *                                      be used for notices. It is subject to
 *                                      removal without notice.
 * @property {boolean} isDismissible    Whether the notice can be dismissed by
 *                                      user. Defaults to `true`.
 * @property {WPNoticeAction[]} actions User actions to present with notice.
 *
 * @typedef {WPNotice}
 */

/**
 * Object describing a user action option associated with a notice.
 *
 * @property {string}    label    Message to use as action label.
 * @property {?string}   url      Optional URL of resource if action incurs
 *                                browser navigation.
 * @property {?Function} callback Optional function to invoke when action is
 *                                triggered by user.
 *
 * @typedef {WPNoticeAction}
 */

/**
 * Returns all notices as an array, optionally for a given context. Defaults to
 * the global context.
 *
 * @param {Object}  state   Notices state.
 * @param {?string} context Optional grouping context.
 *
 * @return {WPNotice[]} Array of notices.
 */

function getNotices(state) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _constants.DEFAULT_CONTEXT;
  return state[context] || DEFAULT_NOTICES;
}


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _a11y = __webpack_require__(44);

/**
 * WordPress dependencies
 */
var _default = {
  SPEAK: function SPEAK(action) {
    (0, _a11y.speak)(action.message, 'assertive');
  }
};
exports.default = _default;


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["a11y"]; }());

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ })

/******/ });