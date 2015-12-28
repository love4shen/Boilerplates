/******/ (function(modules) { // webpackBootstrap
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

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(5);
	
	__webpack_require__(7);
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _App = __webpack_require__(11);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../css-loader/index.js!./medium-editor.css", function() {
				var newContent = require("!!./../../../css-loader/index.js!./medium-editor.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "@-webkit-keyframes medium-editor-image-loading {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes medium-editor-image-loading {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes medium-editor-pop-upwards {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(0.97, 0, 0, 1, 0, 12);\n            transform: matrix(0.97, 0, 0, 1, 0, 12); }\n  20% {\n    opacity: .7;\n    -webkit-transform: matrix(0.99, 0, 0, 1, 0, 2);\n            transform: matrix(0.99, 0, 0, 1, 0, 2); }\n  40% {\n    opacity: 1;\n    -webkit-transform: matrix(1, 0, 0, 1, 0, -1);\n            transform: matrix(1, 0, 0, 1, 0, -1); }\n  100% {\n    -webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n            transform: matrix(1, 0, 0, 1, 0, 0); } }\n\n@keyframes medium-editor-pop-upwards {\n  0% {\n    opacity: 0;\n    -webkit-transform: matrix(0.97, 0, 0, 1, 0, 12);\n            transform: matrix(0.97, 0, 0, 1, 0, 12); }\n  20% {\n    opacity: .7;\n    -webkit-transform: matrix(0.99, 0, 0, 1, 0, 2);\n            transform: matrix(0.99, 0, 0, 1, 0, 2); }\n  40% {\n    opacity: 1;\n    -webkit-transform: matrix(1, 0, 0, 1, 0, -1);\n            transform: matrix(1, 0, 0, 1, 0, -1); }\n  100% {\n    -webkit-transform: matrix(1, 0, 0, 1, 0, 0);\n            transform: matrix(1, 0, 0, 1, 0, 0); } }\n\n.medium-editor-anchor-preview {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  left: 0;\n  line-height: 1.4;\n  max-width: 280px;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  word-break: break-all;\n  word-wrap: break-word;\n  visibility: hidden;\n  z-index: 2000; }\n  .medium-editor-anchor-preview a {\n    color: #fff;\n    display: inline-block;\n    margin: 5px 5px 10px; }\n\n.medium-editor-anchor-preview-active {\n  visibility: visible; }\n\n.medium-editor-dragover {\n  background: #ddd; }\n\n.medium-editor-image-loading {\n  -webkit-animation: medium-editor-image-loading 1s infinite ease-in-out;\n          animation: medium-editor-image-loading 1s infinite ease-in-out;\n  background-color: #333;\n  border-radius: 100%;\n  display: inline-block;\n  height: 40px;\n  width: 40px; }\n\n.medium-editor-placeholder {\n  position: relative; }\n  .medium-editor-placeholder:after {\n    content: attr(data-placeholder) !important;\n    font-style: italic;\n    left: 0;\n    position: absolute;\n    top: 0;\n    white-space: pre;\n    padding: inherit;\n    margin: inherit; }\n\n.medium-toolbar-arrow-under:after, .medium-toolbar-arrow-over:before {\n  border-style: solid;\n  content: '';\n  display: block;\n  height: 0;\n  left: 50%;\n  margin-left: -8px;\n  position: absolute;\n  width: 0; }\n\n.medium-toolbar-arrow-under:after {\n  border-width: 8px 8px 0 8px; }\n\n.medium-toolbar-arrow-over:before {\n  border-width: 0 8px 8px 8px;\n  top: -8px; }\n\n.medium-editor-toolbar {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  visibility: hidden;\n  z-index: 2000; }\n  .medium-editor-toolbar ul {\n    margin: 0;\n    padding: 0; }\n  .medium-editor-toolbar li {\n    float: left;\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n    .medium-editor-toolbar li button {\n      box-sizing: border-box;\n      cursor: pointer;\n      display: block;\n      font-size: 14px;\n      line-height: 1.33;\n      margin: 0;\n      padding: 15px;\n      text-decoration: none; }\n      .medium-editor-toolbar li button:focus {\n        outline: none; }\n    .medium-editor-toolbar li .medium-editor-action-underline {\n      text-decoration: underline; }\n    .medium-editor-toolbar li .medium-editor-action-pre {\n      font-family: Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\n      font-size: 12px;\n      font-weight: 100;\n      padding: 15px 0; }\n\n.medium-editor-toolbar-active {\n  visibility: visible; }\n\n.medium-editor-sticky-toolbar {\n  position: fixed;\n  top: 1px; }\n\n.medium-editor-relative-toolbar {\n  position: relative; }\n\n.medium-editor-toolbar-active.medium-editor-stalker-toolbar {\n  -webkit-animation: medium-editor-pop-upwards 160ms forwards linear;\n          animation: medium-editor-pop-upwards 160ms forwards linear; }\n\n.medium-editor-action-bold {\n  font-weight: bolder; }\n\n.medium-editor-action-italic {\n  font-style: italic; }\n\n.medium-editor-toolbar-form {\n  display: none; }\n  .medium-editor-toolbar-form input,\n  .medium-editor-toolbar-form a {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n  .medium-editor-toolbar-form .medium-editor-toolbar-form-row {\n    line-height: 14px;\n    margin-left: 5px;\n    padding-bottom: 5px; }\n  .medium-editor-toolbar-form .medium-editor-toolbar-input,\n  .medium-editor-toolbar-form label {\n    border: none;\n    box-sizing: border-box;\n    font-size: 14px;\n    margin: 0;\n    padding: 6px;\n    width: 316px;\n    display: inline-block; }\n    .medium-editor-toolbar-form .medium-editor-toolbar-input:focus,\n    .medium-editor-toolbar-form label:focus {\n      -webkit-appearance: none;\n         -moz-appearance: none;\n              appearance: none;\n      border: none;\n      box-shadow: none;\n      outline: 0; }\n  .medium-editor-toolbar-form a {\n    display: inline-block;\n    font-size: 24px;\n    font-weight: bolder;\n    margin: 0 10px;\n    text-decoration: none; }\n\n.medium-editor-toolbar-actions:after {\n  clear: both;\n  content: \"\";\n  display: table; }\n\n[data-medium-editor-element] img {\n  max-width: 100%; }\n\n[data-medium-editor-element] sub {\n  vertical-align: sub; }\n\n[data-medium-editor-element] sup {\n  vertical-align: super; }\n\n.medium-editor-hidden {\n  display: none; }\n", ""]);
	
	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./default.css", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./default.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".medium-toolbar-arrow-under:after {\n  border-color: #242424 transparent transparent transparent;\n  top: 50px; }\n\n.medium-toolbar-arrow-over:before {\n  border-color: transparent transparent #242424 transparent;\n  top: -8px; }\n\n.medium-editor-toolbar {\n  background-color: #242424;\n  background: -webkit-linear-gradient(top, #242424, rgba(36, 36, 36, 0.75));\n  background: linear-gradient(to bottom, #242424, rgba(36, 36, 36, 0.75));\n  border: 1px solid #000;\n  border-radius: 5px;\n  box-shadow: 0 0 3px #000; }\n  .medium-editor-toolbar li button {\n    background-color: #242424;\n    background: -webkit-linear-gradient(top, #242424, rgba(36, 36, 36, 0.89));\n    background: linear-gradient(to bottom, #242424, rgba(36, 36, 36, 0.89));\n    border: 0;\n    border-right: 1px solid #000;\n    border-left: 1px solid #333;\n    border-left: 1px solid rgba(255, 255, 255, 0.1);\n    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);\n    color: #fff;\n    height: 50px;\n    min-width: 50px;\n    -webkit-transition: background-color .2s ease-in;\n            transition: background-color .2s ease-in; }\n    .medium-editor-toolbar li button:hover {\n      background-color: #000;\n      color: yellow; }\n  .medium-editor-toolbar li .medium-editor-button-first {\n    border-bottom-left-radius: 5px;\n    border-top-left-radius: 5px; }\n  .medium-editor-toolbar li .medium-editor-button-last {\n    border-bottom-right-radius: 5px;\n    border-top-right-radius: 5px; }\n  .medium-editor-toolbar li .medium-editor-button-active {\n    background-color: #000;\n    background: -webkit-linear-gradient(top, #242424, rgba(0, 0, 0, 0.89));\n    background: linear-gradient(to bottom, #242424, rgba(0, 0, 0, 0.89));\n    color: #fff; }\n\n.medium-editor-toolbar-form {\n  background: #242424;\n  border-radius: 5px;\n  color: #999; }\n  .medium-editor-toolbar-form .medium-editor-toolbar-input {\n    background: #242424;\n    box-sizing: border-box;\n    color: #ccc;\n    height: 50px; }\n  .medium-editor-toolbar-form a {\n    color: #fff; }\n\n.medium-editor-toolbar-anchor-preview {\n  background: #242424;\n  border-radius: 5px;\n  color: #fff; }\n\n.medium-editor-placeholder:after {\n  color: #b3b3b1; }\n", ""]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./app.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./app.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "* {\n  box-sizing: border-box;  \n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.app {\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n*[contenteditable=true] {\n  padding: 5px 9px;\n  background-color: #eaeaea;\n  border-radius: 4px;\n  outline: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(9);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(10);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = (function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'app' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'react-medium-editor'
	        ),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Html content'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          this.state.text
	        )
	      );
	    }
	  }]);
	
	  return App;
	})(_react2.default.Component);
	
	exports.default = App;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map