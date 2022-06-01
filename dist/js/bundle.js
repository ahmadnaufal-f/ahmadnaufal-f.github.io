/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/component/component.js":
/*!************************************!*\
  !*** ./src/component/component.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component),\n/* harmony export */   \"toComponent\": () => (/* binding */ toComponent),\n/* harmony export */   \"toElement\": () => (/* binding */ toElement)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Component = /*#__PURE__*/function () {\n  function Component(element) {\n    _classCallCheck(this, Component);\n\n    if (element) {\n      if (element instanceof Component) {\n        return element;\n      }\n\n      if (element === 'body') {\n        element = document.body;\n      } else if (typeof element === 'string') {\n        element = document.getElementById(element);\n\n        if (!element) {\n          return undefined;\n        }\n      }\n    }\n\n    this._ele = element;\n  }\n\n  _createClass(Component, [{\n    key: \"ele\",\n    get: function get() {\n      return this._ele;\n    }\n  }, {\n    key: \"html\",\n    get: function get() {\n      return this.ele.innerHTML;\n    },\n    set: function set(value) {\n      this.ele.innerHTML = value !== null && value !== void 0 ? value : '';\n    }\n  }, {\n    key: \"appendTo\",\n    value: function appendTo(obj) {\n      obj = Component.toElement(obj);\n\n      if (!obj) {\n        return this;\n      }\n\n      obj.appendChild(this.ele);\n      return this;\n    }\n  }, {\n    key: \"removeChild\",\n    value: function removeChild(obj) {\n      obj = Component.toElement(obj);\n\n      if (!obj) {\n        return this;\n      }\n\n      this.ele.removeChild(obj);\n      return this;\n    }\n  }], [{\n    key: \"toElement\",\n    value: function toElement(obj) {\n      if (obj) {\n        if (Component.isElement(obj)) {\n          return obj;\n        } else if (obj instanceof Component || Component.isElement(obj.ele)) {\n          return obj.ele;\n        }\n      }\n\n      return undefined;\n    }\n  }, {\n    key: \"isElement\",\n    value: function isElement(obj) {\n      return (typeof HTMLElement === \"undefined\" ? \"undefined\" : _typeof(HTMLElement)) === 'object';\n    }\n  }]);\n\n  return Component;\n}();\nfunction toComponent(element) {\n  return new Component(element);\n}\nfunction toElement(component) {\n  return new Component(component).ele;\n}\n\n//# sourceURL=webpack://profile-website/./src/component/component.js?");

/***/ }),

/***/ "./src/component/dom.js":
/*!******************************!*\
  !*** ./src/component/dom.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Dom\": () => (/* binding */ Dom),\n/* harmony export */   \"a\": () => (/* binding */ a),\n/* harmony export */   \"div\": () => (/* binding */ div),\n/* harmony export */   \"li\": () => (/* binding */ li),\n/* harmony export */   \"p\": () => (/* binding */ p),\n/* harmony export */   \"span\": () => (/* binding */ span),\n/* harmony export */   \"ul\": () => (/* binding */ ul)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/component/component.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\nfunction createEle(type, attribute) {\n  if (typeof type === \"undefined\") {\n    return false;\n  }\n\n  var el = document.createElement(type);\n\n  if (_typeof(attribute) === 'object') {\n    for (var key in attribute) {\n      el.setAttribute(key, attribute[key]);\n    }\n  }\n\n  return new _component__WEBPACK_IMPORTED_MODULE_0__.Component(el);\n}\n\nfunction div() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  return createEle.apply(void 0, ['div'].concat(args));\n}\nfunction p() {\n  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    args[_key2] = arguments[_key2];\n  }\n\n  return createEle.apply(void 0, ['p'].concat(args));\n}\nfunction a() {\n  for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n    args[_key3] = arguments[_key3];\n  }\n\n  return createEle.apply(void 0, ['a'].concat(args));\n}\nfunction span() {\n  for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n    args[_key4] = arguments[_key4];\n  }\n\n  return createEle.apply(void 0, ['span'].concat(args));\n}\nfunction ul() {\n  for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n    args[_key5] = arguments[_key5];\n  }\n\n  return createEle.apply(void 0, ['ul'].concat(args));\n}\nfunction li() {\n  for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {\n    args[_key6] = arguments[_key6];\n  }\n\n  return createEle.apply(void 0, ['li'].concat(args));\n}\nvar Dom = {\n  div: div,\n  p: p,\n  a: a,\n  span: span,\n  ul: ul,\n  li: li\n};\n\n//# sourceURL=webpack://profile-website/./src/component/dom.js?");

/***/ }),

/***/ "./src/component/index.js":
/*!********************************!*\
  !*** ./src/component/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.Component),\n/* harmony export */   \"Dom\": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_1__.Dom),\n/* harmony export */   \"a\": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_1__.a),\n/* harmony export */   \"div\": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_1__.div),\n/* harmony export */   \"li\": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_1__.li),\n/* harmony export */   \"p\": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_1__.p),\n/* harmony export */   \"span\": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_1__.span),\n/* harmony export */   \"toComponent\": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.toComponent),\n/* harmony export */   \"toElement\": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.toElement),\n/* harmony export */   \"ul\": () => (/* reexport safe */ _dom__WEBPACK_IMPORTED_MODULE_1__.ul)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/component/component.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/component/dom.js\");\n\n\n\n//# sourceURL=webpack://profile-website/./src/component/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/component/index.js\");\n\nvar p = _component__WEBPACK_IMPORTED_MODULE_0__.Dom.p({\n  id: 'test-title',\n  \"class\": 'cx-title'\n});\np.html = \"percobaan\";\nvar body = new _component__WEBPACK_IMPORTED_MODULE_0__.Component('body');\np.appendTo(body);\n\n//# sourceURL=webpack://profile-website/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;