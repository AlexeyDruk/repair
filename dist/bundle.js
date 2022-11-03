/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n\n\nvar getswitch = document.getElementById('clickMe');\ngetswitch === null || getswitch === void 0 ? void 0 : getswitch.addEventListener(\"click\", switchONOf);\nfunction switchONOf(el) {\n  if (el.target.tagName === 'H2') {\n    if (el.target.nextElementSibling.classList.contains(\"visible\")) {\n      el.target.nextElementSibling.classList.remove('visible');\n    } else {\n      el.target.nextElementSibling.classList.add('visible');\n    }\n  }\n}\nvar getBurger = document.getElementById('clickBurger');\ngetBurger === null || getBurger === void 0 ? void 0 : getBurger.addEventListener(\"click\", menuOnOf);\nvar check = false;\nfunction menuOnOf() {\n  if (check === false) {\n    var _document$querySelect, _document$querySelect2, _document$querySelect3;\n    (_document$querySelect = document.querySelector(\"body > div.main_div > nav > div.burger > span\")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.setAttribute('style', 'transform: rotate(90deg);');\n    (_document$querySelect2 = document.querySelector(\"body > div.main_div > nav > div.bread_crumbs\")) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.setAttribute('style', 'top: 0px;');\n    (_document$querySelect3 = document.querySelector(\"html\")) === null || _document$querySelect3 === void 0 ? void 0 : _document$querySelect3.setAttribute('style', 'overflow: hidden');\n    check = true;\n  } else {\n    var _document$querySelect4, _document$querySelect5, _document$querySelect6;\n    (_document$querySelect4 = document.querySelector(\"body > div.main_div > nav > div.burger > span\")) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.removeAttribute('style');\n    (_document$querySelect5 = document.querySelector(\"body > div.main_div > nav > div.bread_crumbs\")) === null || _document$querySelect5 === void 0 ? void 0 : _document$querySelect5.removeAttribute('style');\n    (_document$querySelect6 = document.querySelector(\"html\")) === null || _document$querySelect6 === void 0 ? void 0 : _document$querySelect6.removeAttribute('style');\n    check = false;\n  }\n  console.log('safasf');\n}\nvar getBreadСrumbs = document.querySelector(\"body > div.main_div > nav > div.bread_crumbs\");\ngetBreadСrumbs === null || getBreadСrumbs === void 0 ? void 0 : getBreadСrumbs.addEventListener(\"click\", hiddenVisible);\nfunction hiddenVisible(el) {\n  console.log(el.target.tagName);\n  if (el.target.tagName === 'A') {\n    check = true;\n    menuOnOf();\n  }\n}\n\n//# sourceURL=webpack://refrigerator-repair/./src/index.ts?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://refrigerator-repair/./src/styles/style.scss?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://refrigerator-repair/./src/styles/style.css?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;