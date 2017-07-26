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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _BinaryConverter = __webpack_require__(1);

var _BinaryConverter2 = _interopRequireDefault(_BinaryConverter);

var _CachingCalculator = __webpack_require__(2);

var _CachingCalculator2 = _interopRequireDefault(_CachingCalculator);

var _PartialApplication = __webpack_require__(3);

var _PartialApplication2 = _interopRequireDefault(_PartialApplication);

var _LazyEvaluation = __webpack_require__(4);

var _LazyEvaluation2 = _interopRequireDefault(_LazyEvaluation);

var _LinearFold = __webpack_require__(5);

var _LinearFold2 = _interopRequireDefault(_LinearFold);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    window.lazyEvaluation = _LazyEvaluation2.default;
    window.linearFold = _LinearFold2.default;
    window.partialApplication = _PartialApplication2.default;
    window.cachingCalculator = _CachingCalculator2.default;
    window.BinaryConverter = _BinaryConverter2.default;
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// no need to use class here
var BinaryConverter = function () {
  function BinaryConverter() {
    _classCallCheck(this, BinaryConverter);

    // use standard paddings
    var convertToNumber = function convertToNumber(value, from) {
      var result = 0;
      for (var i = 0; i < value.length; i++) {
        result += value[i] * Math.pow(from, i);
      }

      return result;
    };

    var convertToEnd = function convertToEnd(value, to) {
      // I prefer to use 'const' instead of 'let' if we don't reassign variable
      var array = [];
      while (value >= to) {
        var a = value % to;
        array.push(a);
        value = Math.floor(value / to);
      }

      array.push(value);
      return array;
    };
  }

  _createClass(BinaryConverter, [{
    key: "convert",
    value: function convert(value, from, to) {
      // it will not work, you don't define convertToEnd and convertToNumber as class methods
      return this.convertToEnd(this.convertToNumber(value, from), to);
    }
  }]);

  return BinaryConverter;
}();

exports.default = BinaryConverter;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cachingCalculator;
function cachingCalculator(fucnt) {
  // const
  var cache = [];
  // use standard paddings
  return function (a, b) {
    var value = cache.find(function (obj) {
      return obj.firstVar == a && obj.secondVar == b;
    });
    if (value) {
      return value.value;
    };

    value = fucnt(a, b);
    cache.push({ firstVar: a, secondVar: b, value: value });
    return value;
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = partialApplication;
function partialApplication() {
  var _arguments = arguments;

  // you don't need to save context, arrow functions do all the work for you
  var _this = this;
  // can be done with spread operator
  var params = Array.prototype.slice.call(arguments);
  var funct = params.pop();
  // paddings
  return function () {
    // can be done with spread operator, it will be more explicit
    var childParams = Array.prototype.slice.call(_arguments);
    var newParams = params.concat(childParams);
    return funct.apply(_this, newParams);
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lazyEvaluation;
function lazyEvaluation(funct) {
  var _this = this;

  // this can be done with spread operator
  var params = Array.prototype.slice.call(arguments, 1);
  return function () {
    return funct.apply(_this, params);
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = linearFold;
// typo 'initialVAlue'
function linearFold(array, funct, initialVlue) {
  if (Array.isArray(array) && typeof funct != 'function') {
    throw 'error parameters';
  }

  var previousValue = initialVlue;
  var start = 0;
  // use === to let it work with null initial value
  if (initialVlue == undefined) {
    start = 1;
    previousValue = array[0];
  }

  for (var i = start; i < array.length; i++) {
    previousValue = funct(previousValue, array[i], i, array);
  }

  return previousValue;
}

/***/ })
/******/ ]);