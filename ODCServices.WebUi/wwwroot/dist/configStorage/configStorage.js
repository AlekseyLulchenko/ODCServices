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

/***/ "./src/scripts/configStorage/configTable.jsx":
/*!***************************************************!*\
  !*** ./src/scripts/configStorage/configTable.jsx ***!
  \***************************************************/
/*! exports provided: ConfigTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ConfigTable\", function() { return ConfigTable; });\n/* harmony import */ var _icons_download_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../icons/download.svg */ \"./src/icons/download.svg\");\n/* harmony import */ var _icons_download_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icons_download_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/edit.svg */ \"./src/icons/edit.svg\");\n/* harmony import */ var _icons_edit_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icons_edit_svg__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar ConfigTable = /*#__PURE__*/function (_React$Component) {\n  _inherits(ConfigTable, _React$Component);\n\n  var _super = _createSuper(ConfigTable);\n\n  function ConfigTable(props) {\n    _classCallCheck(this, ConfigTable);\n\n    return _super.call(this, props);\n  }\n\n  _createClass(ConfigTable, [{\n    key: \"downloadOnClick\",\n    value: function downloadOnClick(event) {\n      alert(event);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      return /*#__PURE__*/React.createElement(\"table\", {\n        className: \"table table-hover table-sm\"\n      }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", {\n        scope: \"col\"\n      }, \"Name\"), /*#__PURE__*/React.createElement(\"th\", {\n        scope: \"col\"\n      }, \"Version\"), /*#__PURE__*/React.createElement(\"th\", {\n        scope: \"col\"\n      }, \"Created\"), /*#__PURE__*/React.createElement(\"th\", {\n        scope: \"col\"\n      }, \"Action\"), /*#__PURE__*/React.createElement(\"button\", {\n        type: \"button\",\n        className: \"btn btn-link btn-sm\",\n        onClick: this.downloadOnClick\n      }, /*#__PURE__*/React.createElement(\"img\", {\n        src: _icons_download_svg__WEBPACK_IMPORTED_MODULE_0___default.a\n      })))), /*#__PURE__*/React.createElement(\"tbody\", null, this.props.configs.map(function (config, index) {\n        return /*#__PURE__*/React.createElement(\"tr\", {\n          key: index\n        }, /*#__PURE__*/React.createElement(\"th\", {\n          scope: \"row\"\n        }, config.name), /*#__PURE__*/React.createElement(\"td\", null, config.version), /*#__PURE__*/React.createElement(\"td\", null, config.created), /*#__PURE__*/React.createElement(\"td\", null, /*#__PURE__*/React.createElement(\"button\", {\n          type: \"button\",\n          className: \"btn btn-link btn-sm\",\n          onClick: _this.downloadOnClick\n        }, /*#__PURE__*/React.createElement(\"img\", {\n          src: _icons_download_svg__WEBPACK_IMPORTED_MODULE_0___default.a\n        })), /*#__PURE__*/React.createElement(\"button\", {\n          type: \"button\",\n          className: \"btn btn-link btn-sm\"\n        }, /*#__PURE__*/React.createElement(\"img\", {\n          src: _icons_edit_svg__WEBPACK_IMPORTED_MODULE_1___default.a\n        }))));\n      })));\n    }\n  }]);\n\n  return ConfigTable;\n}(React.Component);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb25maWdTdG9yYWdlL2NvbmZpZ1RhYmxlLmpzeD9iMjI3Il0sIm5hbWVzIjpbIkNvbmZpZ1RhYmxlIiwicHJvcHMiLCJldmVudCIsImFsZXJ0IiwiZG93bmxvYWRPbkNsaWNrIiwiaW1nX2Rvd25sb2FkIiwiY29uZmlncyIsIm1hcCIsImNvbmZpZyIsImluZGV4IiwibmFtZSIsInZlcnNpb24iLCJjcmVhdGVkIiwiaW1nX2VkaXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxJQUFNQSxXQUFiO0FBQUE7O0FBQUE7O0FBQ0MsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWkEsS0FEWTtBQUVsQjs7QUFIRjtBQUFBO0FBQUEsb0NBS2lCQyxLQUxqQixFQUt3QjtBQUN0QkMsV0FBSyxDQUFDRCxLQUFELENBQUw7QUFDQTtBQVBGO0FBQUE7QUFBQSw2QkFTVTtBQUFBOztBQUNSLDBCQUFPO0FBQU8saUJBQVMsRUFBQztBQUFqQixzQkFDTixnREFDQyw2Q0FDQztBQUFJLGFBQUssRUFBQztBQUFWLGdCQURELGVBRUM7QUFBSSxhQUFLLEVBQUM7QUFBVixtQkFGRCxlQUdDO0FBQUksYUFBSyxFQUFDO0FBQVYsbUJBSEQsZUFJQztBQUFJLGFBQUssRUFBQztBQUFWLGtCQUpELGVBS0M7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBUyxFQUFDLHFCQUFoQztBQUFzRCxlQUFPLEVBQUUsS0FBS0U7QUFBcEUsc0JBQXFGO0FBQUssV0FBRyxFQUFFQywwREFBWUE7QUFBdEIsUUFBckYsQ0FMRCxDQURELENBRE0sZUFVTixtQ0FDQyxLQUFLSixLQUFMLENBQVdLLE9BQVgsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUN6Qyw0QkFBTztBQUFJLGFBQUcsRUFBRUE7QUFBVCx3QkFDTjtBQUFJLGVBQUssRUFBQztBQUFWLFdBQWlCRCxNQUFNLENBQUNFLElBQXhCLENBRE0sZUFFTixnQ0FBS0YsTUFBTSxDQUFDRyxPQUFaLENBRk0sZUFHTixnQ0FBS0gsTUFBTSxDQUFDSSxPQUFaLENBSE0sZUFJTiw2Q0FDQztBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMscUJBQWhDO0FBQXNELGlCQUFPLEVBQUUsS0FBSSxDQUFDUjtBQUFwRSx3QkFBcUY7QUFBSyxhQUFHLEVBQUVDLDBEQUFZQTtBQUF0QixVQUFyRixDQURELGVBRUM7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixtQkFBUyxFQUFDO0FBQWhDLHdCQUFzRDtBQUFLLGFBQUcsRUFBRVEsc0RBQVFBO0FBQWxCLFVBQXRELENBRkQsQ0FKTSxDQUFQO0FBVUEsT0FYRCxDQURELENBVk0sQ0FBUDtBQTBCQTtBQXBDRjs7QUFBQTtBQUFBLEVBQWlDQyxLQUFLLENBQUNDLFNBQXZDIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvY29uZmlnU3RvcmFnZS9jb25maWdUYWJsZS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW1nX2Rvd25sb2FkIGZyb20gJy4uLy4uL2ljb25zL2Rvd25sb2FkLnN2Zyc7XHJcbmltcG9ydCBpbWdfZWRpdCBmcm9tICcuLi8uLi9pY29ucy9lZGl0LnN2Zyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdH1cclxuXHJcblx0ZG93bmxvYWRPbkNsaWNrKGV2ZW50KSB7XHJcblx0XHRhbGVydChldmVudCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXNtXCI+XHJcblx0XHRcdDx0aGVhZD5cclxuXHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0IDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxyXG5cdFx0XHRcdCA8dGggc2NvcGU9XCJjb2xcIj5WZXJzaW9uPC90aD5cclxuXHRcdFx0XHQgPHRoIHNjb3BlPVwiY29sXCI+Q3JlYXRlZDwvdGg+XHJcblx0XHRcdFx0XHQ8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiIG9uQ2xpY2s9e3RoaXMuZG93bmxvYWRPbkNsaWNrfT48aW1nIHNyYz17aW1nX2Rvd25sb2FkfSAvPjwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvdHI+XHJcblx0XHRcdDwvdGhlYWQgPlxyXG5cdFx0XHQ8dGJvZHk+e1xyXG5cdFx0XHRcdHRoaXMucHJvcHMuY29uZmlncy5tYXAoKGNvbmZpZywgaW5kZXgpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiA8dHIga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdDx0aCBzY29wZT1cInJvd1wiPntjb25maWcubmFtZX08L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGQ+e2NvbmZpZy52ZXJzaW9ufTwvdGQ+XHJcblx0XHRcdFx0XHRcdDx0ZD57Y29uZmlnLmNyZWF0ZWR9PC90ZD5cclxuXHRcdFx0XHRcdFx0PHRkPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBidG4tc21cIiBvbkNsaWNrPXt0aGlzLmRvd25sb2FkT25DbGlja30+PGltZyBzcmM9e2ltZ19kb3dubG9hZH0gLz48L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgYnRuLXNtXCI+PGltZyBzcmM9e2ltZ19lZGl0fSAvPjwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwvdHI+O1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdFx0PC90Ym9keT5cclxuXHRcdDwvdGFibGU+O1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/configStorage/configTable.jsx\n");

/***/ }),

/***/ "./src/scripts/configStorage/index.jsx":
/*!*********************************************!*\
  !*** ./src/scripts/configStorage/index.jsx ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _configTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configTable */ \"./src/scripts/configStorage/configTable.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\nvar ConfigList = /*#__PURE__*/function (_React$Component) {\n  _inherits(ConfigList, _React$Component);\n\n  var _super = _createSuper(ConfigList);\n\n  function ConfigList(props) {\n    var _this;\n\n    _classCallCheck(this, ConfigList);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      configs: []\n    };\n    return _this;\n  }\n\n  _createClass(ConfigList, [{\n    key: \"loadData\",\n    value: function loadData() {\n      var xhr = new XMLHttpRequest();\n      xhr.open(\"get\", this.props.GetAllUrl, true);\n\n      xhr.onload = function () {\n        var data = JSON.parse(xhr.responseText);\n        this.setState({\n          configs: data\n        });\n      }.bind(this);\n\n      xhr.send();\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadData();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"text-center\"\n      }, /*#__PURE__*/React.createElement(\"h1\", {\n        className: \"display-4\"\n      }, \"Config Storage \")), /*#__PURE__*/React.createElement(_configTable__WEBPACK_IMPORTED_MODULE_0__[\"ConfigTable\"], {\n        configs: this.state.configs\n      }));\n    }\n  }]);\n\n  return ConfigList;\n}(React.Component);\n\nReactDOM.render( /*#__PURE__*/React.createElement(ConfigList, {\n  GetAllUrl: \"ConfigStorage/GetAll\"\n}), document.getElementById(\"configStorageAppContainer\"));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb25maWdTdG9yYWdlL2luZGV4LmpzeD8wN2VjIl0sIm5hbWVzIjpbIkNvbmZpZ0xpc3QiLCJwcm9wcyIsInN0YXRlIiwiY29uZmlncyIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsIkdldEFsbFVybCIsIm9ubG9hZCIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJzZXRTdGF0ZSIsImJpbmQiLCJzZW5kIiwibG9hZERhdGEiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLFU7Ozs7O0FBQ0wsc0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLEtBQU47QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBYjtBQUZrQjtBQUdsQjs7OzsrQkFFVTtBQUNWLFVBQUlDLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsU0FBRyxDQUFDRSxJQUFKLENBQVMsS0FBVCxFQUFnQixLQUFLTCxLQUFMLENBQVdNLFNBQTNCLEVBQXNDLElBQXRDOztBQUNBSCxTQUFHLENBQUNJLE1BQUosR0FBYSxZQUFZO0FBQ3hCLFlBQUlDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdQLEdBQUcsQ0FBQ1EsWUFBZixDQUFYO0FBQ0EsYUFBS0MsUUFBTCxDQUFjO0FBQUVWLGlCQUFPLEVBQUVNO0FBQVgsU0FBZDtBQUNBLE9BSFksQ0FHWEssSUFIVyxDQUdOLElBSE0sQ0FBYjs7QUFJQVYsU0FBRyxDQUFDVyxJQUFKO0FBQ0E7Ozt3Q0FFbUI7QUFDbkIsV0FBS0MsUUFBTDtBQUNBOzs7NkJBRVE7QUFDUiwwQkFBTyw4Q0FDTjtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDQztBQUFJLGlCQUFTLEVBQUM7QUFBZCwyQkFERCxDQURNLGVBSU4sb0JBQUMsd0RBQUQ7QUFBYSxlQUFPLEVBQUUsS0FBS2QsS0FBTCxDQUFXQztBQUFqQyxRQUpNLENBQVA7QUFNQTs7OztFQTNCdUJjLEtBQUssQ0FBQ0MsUzs7QUE4Qi9CQyxRQUFRLENBQUNDLE1BQVQsZUFDQyxvQkFBQyxVQUFEO0FBQVksV0FBUyxFQUFDO0FBQXRCLEVBREQsRUFFQ0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLDJCQUF4QixDQUZEIiwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvY29uZmlnU3RvcmFnZS9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWdUYWJsZSB9IGZyb20gXCIuL2NvbmZpZ1RhYmxlXCI7XHJcblxyXG5jbGFzcyBDb25maWdMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHsgY29uZmlnczogW10gfTtcclxuXHR9XHJcblxyXG5cdGxvYWREYXRhKCkge1xyXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm9wZW4oXCJnZXRcIiwgdGhpcy5wcm9wcy5HZXRBbGxVcmwsIHRydWUpO1xyXG5cdFx0eGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyIGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgY29uZmlnczogZGF0YSB9KTtcclxuXHRcdH0uYmluZCh0aGlzKTtcclxuXHRcdHhoci5zZW5kKCk7XHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiA8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNFwiPkNvbmZpZyBTdG9yYWdlIDwvaDE+XHRcclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxDb25maWdUYWJsZSBjb25maWdzPXt0aGlzLnN0YXRlLmNvbmZpZ3N9Lz5cclxuXHRcdDwvZGl2PjtcclxuXHR9XHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuXHQ8Q29uZmlnTGlzdCBHZXRBbGxVcmw9XCJDb25maWdTdG9yYWdlL0dldEFsbFwiLz4sXHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb25maWdTdG9yYWdlQXBwQ29udGFpbmVyXCIpXHJcbik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/configStorage/index.jsx\n");

/***/ })

/******/ });