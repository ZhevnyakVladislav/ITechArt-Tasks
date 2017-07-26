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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Promise__ = __webpack_require__(7);


(function () {
  window.getAsync = __WEBPACK_IMPORTED_MODULE_0__Promise__["a" /* default */].getAsync;
  window.setAsync = __WEBPACK_IMPORTED_MODULE_0__Promise__["a" /* default */].setAsync;
})();


/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const getValue = (key, callback) => {
    const rand = Math.random();
    if (rand > 0.5) {
      const value = localStorage.getItem(key);
      callback(value);
    } else {
      setTimeout(() => {
        const value = localStorage.getItem(key);
        callback(value);
      }, Math.random() * 1000);
    }
  };

const setValue = (key, value, callback) => {
    const rand = Math.random();
    if (rand > 0.5) {
      localStorage.setItem(key, value);
      callback();
    } else {
      setTimeout(() => {
        localStorage.setItem(key, value);
        callback();
      }, Math.random() * 1000);
    }
  };

const setAsync = (key, value) => new Promise(function (resolve, reject) {
    setValue(key, value, function () {
      return resolve('The value is set');
    });
  });

const getAsync = (key) => new Promise(function (resolve, reject) {
    getValue(key, function (value) {
      return resolve(value);
    });
  });

/* harmony default export */ __webpack_exports__["a"] = ({
      getAsync,
      setAsync,
    });



/***/ })

/******/ });