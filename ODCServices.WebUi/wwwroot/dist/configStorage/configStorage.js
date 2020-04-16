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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/configStorage/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/icons/download.svg":
/*!********************************!*\
  !*** ./src/icons/download.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-download'%3E%3Cpath d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'%3E%3C/path%3E%3Cpolyline points='7 10 12 15 17 10'%3E%3C/polyline%3E%3Cline x1='12' y1='15' x2='12' y2='3'%3E%3C/line%3E%3C/svg%3E\"\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvZG93bmxvYWQuc3ZnPzk4NmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9zcmMvaWNvbnMvZG93bmxvYWQuc3ZnLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgZmlsbD0nbm9uZScgc3Ryb2tlPSdjdXJyZW50Q29sb3InIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbGluZWpvaW49J3JvdW5kJyBjbGFzcz0nZmVhdGhlciBmZWF0aGVyLWRvd25sb2FkJyUzRSUzQ3BhdGggZD0nTTIxIDE1djRhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ2LTQnJTNFJTNDL3BhdGglM0UlM0Nwb2x5bGluZSBwb2ludHM9JzcgMTAgMTIgMTUgMTcgMTAnJTNFJTNDL3BvbHlsaW5lJTNFJTNDbGluZSB4MT0nMTInIHkxPScxNScgeDI9JzEyJyB5Mj0nMyclM0UlM0MvbGluZSUzRSUzQy9zdmclM0VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/download.svg\n");

/***/ }),

/***/ "./src/icons/edit.svg":
/*!****************************!*\
  !*** ./src/icons/edit.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-edit'%3E%3Cpath d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'%3E%3C/path%3E%3Cpath d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'%3E%3C/path%3E%3C/svg%3E\"\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaWNvbnMvZWRpdC5zdmc/Y2Q4MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3NyYy9pY29ucy9lZGl0LnN2Zy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIGZpbGw9J25vbmUnIHN0cm9rZT0nY3VycmVudENvbG9yJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLWxpbmVqb2luPSdyb3VuZCcgY2xhc3M9J2ZlYXRoZXIgZmVhdGhlci1lZGl0JyUzRSUzQ3BhdGggZD0nTTExIDRINGEyIDIgMCAwIDAtMiAydjE0YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMnYtNyclM0UlM0MvcGF0aCUzRSUzQ3BhdGggZD0nTTE4LjUgMi41YTIuMTIxIDIuMTIxIDAgMCAxIDMgM0wxMiAxNWwtNCAxIDEtNCA5LjUtOS41eiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/icons/edit.svg\n");

/***/ }),

/***/ "./src/scripts/configStorage/configStoragePage.jsx":
/*!*********************************************************!*\
  !*** ./src/scripts/configStorage/configStoragePage.jsx ***!
  \*********************************************************/
/*! exports provided: ConfigStoragePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfigStoragePage\", function() { return ConfigStoragePage; });\n/* harmony import */ var _configTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configTable */ \"./src/scripts/configStorage/configTable.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\nvar ConfigStoragePage = /*#__PURE__*/function (_React$Component) {\n  _inherits(ConfigStoragePage, _React$Component);\n\n  var _super = _createSuper(ConfigStoragePage);\n\n  function ConfigStoragePage(props) {\n    var _this;\n\n    _classCallCheck(this, ConfigStoragePage);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      configs: []\n    };\n    return _this;\n  }\n\n  _createClass(ConfigStoragePage, [{\n    key: \"loadData\",\n    value: function loadData() {\n      var xhr = new XMLHttpRequest();\n      var getAllUrl = this.props.getAllUrl;\n      xhr.open(\"get\", getAllUrl, true);\n\n      xhr.onload = function () {\n        var data = JSON.parse(xhr.responseText);\n        this.setState({\n          configs: data\n        });\n      }.bind(this);\n\n      xhr.send();\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadData();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"text-center\"\n      }, /*#__PURE__*/React.createElement(\"h1\", {\n        className: \"display-4\"\n      }, \"Config Storage \")), /*#__PURE__*/React.createElement(_configTable__WEBPACK_IMPORTED_MODULE_0__[\"ConfigTable\"], {\n        configs: this.state.configs,\n        downloadUrl: this.props.downloadUrl\n      }));\n    }\n  }]);\n\n  return ConfigStoragePage;\n}(React.Component);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb25maWdTdG9yYWdlL2NvbmZpZ1N0b3JhZ2VQYWdlLmpzeD80YjEwIl0sIm5hbWVzIjpbIkNvbmZpZ1N0b3JhZ2VQYWdlIiwicHJvcHMiLCJzdGF0ZSIsImNvbmZpZ3MiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImdldEFsbFVybCIsIm9wZW4iLCJvbmxvYWQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwic2V0U3RhdGUiLCJiaW5kIiwic2VuZCIsImxvYWREYXRhIiwiZG93bmxvYWRVcmwiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsaUJBQWI7QUFBQTs7QUFBQTs7QUFDQyw2QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFiO0FBRmtCO0FBR2xCOztBQUpGO0FBQUE7QUFBQSwrQkFNWTtBQUNWLFVBQUlDLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVY7QUFDQSxVQUFJQyxTQUFTLEdBQUcsS0FBS0wsS0FBTCxDQUFXSyxTQUEzQjtBQUVBRixTQUFHLENBQUNHLElBQUosQ0FBUyxLQUFULEVBQWdCRCxTQUFoQixFQUEyQixJQUEzQjs7QUFDQUYsU0FBRyxDQUFDSSxNQUFKLEdBQWEsWUFBWTtBQUN4QixZQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxHQUFHLENBQUNRLFlBQWYsQ0FBWDtBQUNBLGFBQUtDLFFBQUwsQ0FBYztBQUFFVixpQkFBTyxFQUFFTTtBQUFYLFNBQWQ7QUFDQSxPQUhZLENBR1hLLElBSFcsQ0FHTixJQUhNLENBQWI7O0FBSUFWLFNBQUcsQ0FBQ1csSUFBSjtBQUNBO0FBaEJGO0FBQUE7QUFBQSx3Q0FrQnFCO0FBQ25CLFdBQUtDLFFBQUw7QUFDQTtBQXBCRjtBQUFBO0FBQUEsNkJBc0JVO0FBQ1IsMEJBQU8sOENBQ047QUFBSyxpQkFBUyxFQUFDO0FBQWYsc0JBQ0M7QUFBSSxpQkFBUyxFQUFDO0FBQWQsMkJBREQsQ0FETSxlQUlOLG9CQUFDLHdEQUFEO0FBQWEsZUFBTyxFQUFFLEtBQUtkLEtBQUwsQ0FBV0MsT0FBakM7QUFBMEMsbUJBQVcsRUFBRSxLQUFLRixLQUFMLENBQVdnQjtBQUFsRSxRQUpNLENBQVA7QUFNQTtBQTdCRjs7QUFBQTtBQUFBLEVBQXVDQyxLQUFLLENBQUNDLFNBQTdDIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvY29uZmlnU3RvcmFnZS9jb25maWdTdG9yYWdlUGFnZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWdUYWJsZSB9IGZyb20gXCIuL2NvbmZpZ1RhYmxlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU3RvcmFnZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0geyBjb25maWdzOiBbXSB9O1xyXG5cdH1cclxuXHJcblx0bG9hZERhdGEoKSB7XHJcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblx0XHR2YXIgZ2V0QWxsVXJsID0gdGhpcy5wcm9wcy5nZXRBbGxVcmw7XHJcblxyXG5cdFx0eGhyLm9wZW4oXCJnZXRcIiwgZ2V0QWxsVXJsLCB0cnVlKTtcclxuXHRcdHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHZhciBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGNvbmZpZ3M6IGRhdGEgfSk7XHJcblx0XHR9LmJpbmQodGhpcyk7XHJcblx0XHR4aHIuc2VuZCgpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHR0aGlzLmxvYWREYXRhKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gPGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5Db25maWcgU3RvcmFnZSA8L2gxPlx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8Q29uZmlnVGFibGUgY29uZmlncz17dGhpcy5zdGF0ZS5jb25maWdzfSBkb3dubG9hZFVybD17dGhpcy5wcm9wcy5kb3dubG9hZFVybH0vPlxyXG5cdFx0PC9kaXY+O1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/configStorage/configStoragePage.jsx\n");

/***/ }),

/***/ "./src/scripts/configStorage/configTable.jsx":
/*!***************************************************!*\
  !*** ./src/scripts/configStorage/configTable.jsx ***!
  \***************************************************/
/*! exports provided: ConfigTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfigTable\", function() { return ConfigTable; });\n/* harmony import */ var _icons_download_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icons/download.svg */ \"./src/icons/download.svg\");\n/* harmony import */ var _icons_download_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icons_download_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/edit.svg */ \"./src/icons/edit.svg\");\n/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar ConfigTable = /*#__PURE__*/function (_React$Component) {\n  _inherits(ConfigTable, _React$Component);\n\n  var _super = _createSuper(ConfigTable);\n\n  function ConfigTable(props) {\n    _classCallCheck(this, ConfigTable);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(ConfigTable, [{\n    key: \"downloadOnClick\",\n    value: function downloadOnClick(id) {\n      var downloadUrl = this.props.downloadUrl + \"?configId=\" + id;\n      this.getData(downloadUrl);\n    }\n  }, {\n    key: \"editOnClick\",\n    value: function editOnClick(id) {}\n  }, {\n    key: \"getData\",\n    value: function getData(downloadUrl) {\n      var xhr = new XMLHttpRequest();\n      xhr.open(\"get\", downloadUrl, true);\n\n      xhr.onload = function () {\n        var data = JSON.parse(xhr.responseText);\n        alert(data.result.name);\n      }.bind(this);\n\n      xhr.send();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return /*#__PURE__*/React.createElement(\"table\", {\n        className: \"table table-hover table-sm\"\n      }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", {\n        scope: \"col\"\n      }, \"Name\"), /*#__PURE__*/React.createElement(\"th\", {\n        scope: \"col\"\n      }, \"Version\"), /*#__PURE__*/React.createElement(\"th\", {\n        scope: \"col\"\n      }, \"Created\"), /*#__PURE__*/React.createElement(\"th\", {\n        scope: \"col\"\n      }, \"Action\"))), /*#__PURE__*/React.createElement(\"tbody\", null, this.props.configs.map(function (config, index) {\n        return /*#__PURE__*/React.createElement(\"tr\", {\n          key: index\n        }, /*#__PURE__*/React.createElement(\"th\", {\n          scope: \"row\"\n        }, config.name), /*#__PURE__*/React.createElement(\"td\", null, config.version), /*#__PURE__*/React.createElement(\"td\", null, config.created), /*#__PURE__*/React.createElement(\"td\", null, /*#__PURE__*/React.createElement(\"button\", {\n          type: \"button\",\n          className: \"btn btn-link btn-sm\",\n          onClick: function onClick() {\n            return _this.downloadOnClick(config.id);\n          }\n        }, /*#__PURE__*/React.createElement(\"img\", {\n          src: _icons_download_svg__WEBPACK_IMPORTED_MODULE_0___default.a\n        })), /*#__PURE__*/React.createElement(\"button\", {\n          type: \"button\",\n          className: \"btn btn-link btn-sm\",\n          onClick: function onClick() {\n            return _this.editOnClick(config.id);\n          }\n        }, /*#__PURE__*/React.createElement(\"img\", {\n          src: _icons_edit_svg__WEBPACK_IMPORTED_MODULE_1___default.a\n        }))));\n      })));\n    }\n  }]);\n\n  return ConfigTable;\n}(React.Component);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb25maWdTdG9yYWdlL2NvbmZpZ1RhYmxlLmpzeD9iMjI3Il0sIm5hbWVzIjpbIkNvbmZpZ1RhYmxlIiwicHJvcHMiLCJpZCIsImRvd25sb2FkVXJsIiwiZ2V0RGF0YSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIm9ubG9hZCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJhbGVydCIsInJlc3VsdCIsIm5hbWUiLCJiaW5kIiwic2VuZCIsImNvbmZpZ3MiLCJtYXAiLCJjb25maWciLCJpbmRleCIsInZlcnNpb24iLCJjcmVhdGVkIiwiZG93bmxvYWRPbkNsaWNrIiwiaW1nX2Rvd25sb2FkIiwiZWRpdE9uQ2xpY2siLCJpbWdfZWRpdCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdPLElBQU1BLFdBQWI7QUFBQTs7QUFBQTs7QUFDQyx1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNaQSxLQURZO0FBRWxCOztBQUhGO0FBQUE7QUFBQSxvQ0FLaUJDLEVBTGpCLEVBS3FCO0FBQ25CLFVBQUlDLFdBQVcsR0FBRyxLQUFLRixLQUFMLENBQVdFLFdBQVgsR0FBeUIsWUFBekIsR0FBd0NELEVBQTFEO0FBQ0EsV0FBS0UsT0FBTCxDQUFhRCxXQUFiO0FBQ0E7QUFSRjtBQUFBO0FBQUEsZ0NBVWFELEVBVmIsRUFVaUIsQ0FFZjtBQVpGO0FBQUE7QUFBQSw0QkFjU0MsV0FkVCxFQWNzQjtBQUNwQixVQUFJRSxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFWO0FBRUFELFNBQUcsQ0FBQ0UsSUFBSixDQUFTLEtBQVQsRUFBZ0JKLFdBQWhCLEVBQTZCLElBQTdCOztBQUNBRSxTQUFHLENBQUNHLE1BQUosR0FBYSxZQUFZO0FBQ3hCLFlBQUlDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdOLEdBQUcsQ0FBQ08sWUFBZixDQUFYO0FBQ0FDLGFBQUssQ0FBQ0osSUFBSSxDQUFDSyxNQUFMLENBQVlDLElBQWIsQ0FBTDtBQUNBLE9BSFksQ0FHWEMsSUFIVyxDQUdOLElBSE0sQ0FBYjs7QUFJQVgsU0FBRyxDQUFDWSxJQUFKO0FBQ0E7QUF2QkY7QUFBQTtBQUFBLDZCQXlCVTtBQUFBOztBQUNSLDBCQUFPO0FBQU8saUJBQVMsRUFBQztBQUFqQixzQkFDTixnREFDQyw2Q0FDQztBQUFJLGFBQUssRUFBQztBQUFWLGdCQURELGVBRUM7QUFBSSxhQUFLLEVBQUM7QUFBVixtQkFGRCxlQUdDO0FBQUksYUFBSyxFQUFDO0FBQVYsbUJBSEQsZUFJQztBQUFJLGFBQUssRUFBQztBQUFWLGtCQUpELENBREQsQ0FETSxlQVNOLG1DQUNDLEtBQUtoQixLQUFMLENBQVdpQixPQUFYLENBQW1CQyxHQUFuQixDQUF1QixVQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDekMsNEJBQU87QUFBSSxhQUFHLEVBQUVBO0FBQVQsd0JBQ047QUFBSSxlQUFLLEVBQUM7QUFBVixXQUFpQkQsTUFBTSxDQUFDTCxJQUF4QixDQURNLGVBRU4sZ0NBQUtLLE1BQU0sQ0FBQ0UsT0FBWixDQUZNLGVBR04sZ0NBQUtGLE1BQU0sQ0FBQ0csT0FBWixDQUhNLGVBSU4sNkNBQ0M7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDLHFCQUFoQztBQUFzRCxpQkFBTyxFQUFFO0FBQUEsbUJBQU0sS0FBSSxDQUFDQyxlQUFMLENBQXFCSixNQUFNLENBQUNsQixFQUE1QixDQUFOO0FBQUE7QUFBL0Qsd0JBQXNHO0FBQUssYUFBRyxFQUFFdUIsMERBQVlBO0FBQXRCLFVBQXRHLENBREQsZUFFQztBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMscUJBQWhDO0FBQXNELGlCQUFPLEVBQUU7QUFBQSxtQkFBTSxLQUFJLENBQUNDLFdBQUwsQ0FBaUJOLE1BQU0sQ0FBQ2xCLEVBQXhCLENBQU47QUFBQTtBQUEvRCx3QkFBa0c7QUFBSyxhQUFHLEVBQUV5QixzREFBUUE7QUFBbEIsVUFBbEcsQ0FGRCxDQUpNLENBQVA7QUFVQSxPQVhELENBREQsQ0FUTSxDQUFQO0FBeUJBO0FBbkRGOztBQUFBO0FBQUEsRUFBaUNDLEtBQUssQ0FBQ0MsU0FBdkMiLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jb25maWdTdG9yYWdlL2NvbmZpZ1RhYmxlLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpbWdfZG93bmxvYWQgZnJvbSAnLi4vLi4vaWNvbnMvZG93bmxvYWQuc3ZnJztcclxuaW1wb3J0IGltZ19lZGl0IGZyb20gJy4uLy4uL2ljb25zL2VkaXQuc3ZnJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0fVxyXG5cclxuXHRkb3dubG9hZE9uQ2xpY2soaWQpIHtcclxuXHRcdHZhciBkb3dubG9hZFVybCA9IHRoaXMucHJvcHMuZG93bmxvYWRVcmwgKyBcIj9jb25maWdJZD1cIiArIGlkO1xyXG5cdFx0dGhpcy5nZXREYXRhKGRvd25sb2FkVXJsKTtcclxuXHR9XHJcblxyXG5cdGVkaXRPbkNsaWNrKGlkKSB7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdGdldERhdGEoZG93bmxvYWRVcmwpIHtcclxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdFxyXG5cdFx0eGhyLm9wZW4oXCJnZXRcIiwgZG93bmxvYWRVcmwsIHRydWUpO1xyXG5cdFx0eGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHRhbGVydChkYXRhLnJlc3VsdC5uYW1lKTtcclxuXHRcdH0uYmluZCh0aGlzKTtcclxuXHRcdHhoci5zZW5kKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXNtXCI+XHJcblx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0IDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxyXG5cdFx0XHRcdCA8dGggc2NvcGU9XCJjb2xcIj5WZXJzaW9uPC90aD5cclxuXHRcdFx0XHQgPHRoIHNjb3BlPVwiY29sXCI+Q3JlYXRlZDwvdGg+XHJcblx0XHRcdFx0XHQ8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdDwvdGhlYWQgPlxyXG5cdFx0XHQ8dGJvZHk+e1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuY29uZmlncy5tYXAoKGNvbmZpZywgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiA8dHIga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdDx0aCBzY29wZT1cInJvd1wiPntjb25maWcubmFtZX08L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e2NvbmZpZy52ZXJzaW9ufTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD57Y29uZmlnLmNyZWF0ZWR9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBidG4tc21cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmRvd25sb2FkT25DbGljayhjb25maWcuaWQpfT48aW1nIHNyYz17aW1nX2Rvd25sb2FkfSAvPjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBidG4tc21cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmVkaXRPbkNsaWNrKGNvbmZpZy5pZCl9PjxpbWcgc3JjPXtpbWdfZWRpdH0gLz48L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L3RyPjtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHRcdDwvdGJvZHk+XHJcblx0XHQ8L3RhYmxlPjtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/configStorage/configTable.jsx\n");

/***/ }),

/***/ "./src/scripts/configStorage/index.jsx":
/*!*********************************************!*\
  !*** ./src/scripts/configStorage/index.jsx ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _configStoragePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configStoragePage */ \"./src/scripts/configStorage/configStoragePage.jsx\");\n\nvar getAllUrl = \"ConfigStorage/GetAll\";\nvar downloadUrl = \"ConfigStorage/Download\";\nReactDOM.render( /*#__PURE__*/React.createElement(_configStoragePage__WEBPACK_IMPORTED_MODULE_0__[\"ConfigStoragePage\"], {\n  getAllUrl: getAllUrl,\n  downloadUrl: downloadUrl\n}), document.getElementById(\"configStorageAppContainer\"));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb25maWdTdG9yYWdlL2luZGV4LmpzeD8wN2VjIl0sIm5hbWVzIjpbImdldEFsbFVybCIsImRvd25sb2FkVXJsIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFJQSxTQUFTLEdBQUcsc0JBQWhCO0FBQ0EsSUFBSUMsV0FBVyxHQUFHLHdCQUFsQjtBQUVBQyxRQUFRLENBQUNDLE1BQVQsZUFDQyxvQkFBQyxvRUFBRDtBQUNDLFdBQVMsRUFBRUgsU0FEWjtBQUVDLGFBQVcsRUFBRUM7QUFGZCxFQURELEVBS0NHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QiwyQkFBeEIsQ0FMRCIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL2NvbmZpZ1N0b3JhZ2UvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlnU3RvcmFnZVBhZ2UgfSBmcm9tIFwiLi9jb25maWdTdG9yYWdlUGFnZVwiO1xyXG52YXIgZ2V0QWxsVXJsID0gXCJDb25maWdTdG9yYWdlL0dldEFsbFwiO1xyXG52YXIgZG93bmxvYWRVcmwgPSBcIkNvbmZpZ1N0b3JhZ2UvRG93bmxvYWRcIjtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHQ8Q29uZmlnU3RvcmFnZVBhZ2VcclxuXHRcdGdldEFsbFVybD17Z2V0QWxsVXJsfVxyXG5cdFx0ZG93bmxvYWRVcmw9e2Rvd25sb2FkVXJsfSAvPixcclxuXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25maWdTdG9yYWdlQXBwQ29udGFpbmVyXCIpXHJcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/configStorage/index.jsx\n");

/***/ })

/******/ });