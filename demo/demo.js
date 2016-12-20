(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-tisch"), require("react-bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-tisch", "react-bootstrap"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom"), require("react-tisch"), require("react-bootstrap")) : factory(root["React"], root["ReactDOM"], root["ReactTisch"], root["ReactBootstrap"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Sample = __webpack_require__(3);
	
	var _Sample2 = _interopRequireDefault(_Sample);
	
	var _Sample3 = __webpack_require__(8);
	
	var _Sample4 = _interopRequireDefault(_Sample3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Samples = { Sample1: _Sample2.default, Sample2: _Sample4.default };
	
	var sampleList = Object.keys(Samples).map(function (sampleName, i) {
	    var Sample = Samples[sampleName];
	    return _react2.default.createElement(
	        "div",
	        { key: i },
	        _react2.default.createElement(
	            "h2",
	            null,
	            _react2.default.createElement(
	                "a",
	                { href: '#' + sampleName },
	                sampleName
	            )
	        ),
	        _react2.default.createElement(Sample, null)
	    );
	});
	
	var SamplePage = function (_React$Component) {
	    _inherits(SamplePage, _React$Component);
	
	    function SamplePage() {
	        _classCallCheck(this, SamplePage);
	
	        return _possibleConstructorReturn(this, (SamplePage.__proto__ || Object.getPrototypeOf(SamplePage)).apply(this, arguments));
	    }
	
	    _createClass(SamplePage, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var _this2 = this;
	
	            window.onhashchange = function () {
	                return _this2.forceUpdate();
	            };
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var hash = window.location.hash.slice(1);
	
	            if (hash === '') {
	                return _react2.default.createElement(
	                    "div",
	                    null,
	                    sampleList
	                );
	            } else if (!Samples[hash]) {
	                return _react2.default.createElement(
	                    "div",
	                    null,
	                    "Sample \"" + hash + "\" doesn't exist"
	                );
	            } else {
	                return _react2.default.createElement(Samples[hash]);
	            }
	        }
	    }]);
	
	    return SamplePage;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(SamplePage, null), document.getElementById('examples-container'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactTisch = __webpack_require__(4);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _sample_data = __webpack_require__(6);
	
	var _sample_data2 = _interopRequireDefault(_sample_data);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var EyeColor = function EyeColor(_ref) {
	    var eyeColor = _ref.eyeColor;
	
	    return _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: "eye-open", style: { color: eyeColor } });
	};
	
	var Tags = function Tags(_ref2) {
	    var tags = _ref2.tags;
	
	    return _react2.default.createElement(
	        "div",
	        null,
	        tags.map(function (tag, i) {
	            return _react2.default.createElement(
	                _reactBootstrap.Label,
	                { bsStyle: "default", key: i },
	                tag
	            );
	        })
	    );
	};
	
	var Sample1 = function Sample1() {
	    return _react2.default.createElement(
	        _reactTisch.Table,
	        { data: _sample_data2.default },
	        _react2.default.createElement(
	            _reactTisch.Column,
	            { value: function value(row) {
	                    return row.name;
	                } },
	            "Name"
	        ),
	        _react2.default.createElement(
	            _reactTisch.Column,
	            { filter: true, value: EyeColor, rawValue: function rawValue(row) {
	                    return row.eyeColor;
	                } },
	            "Eye color"
	        ),
	        _react2.default.createElement(
	            _reactTisch.Column,
	            { value: Tags },
	            "Tags"
	        )
	    );
	};
	
	exports.default = Sample1;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var sampleData = [{
	  "name": "Ida Roach",
	  "gender": "female",
	  "age": 31,
	  "eyeColor": "blue",
	  "balance": 2382.37,
	  "registered": "2015-08-01T10:02:03 -02:00",
	  "tags": ["magna", "in", "labore", "aliqua", "veniam"]
	}, {
	  "name": "Dillon Andrews",
	  "gender": "male",
	  "age": 33,
	  "eyeColor": "brown",
	  "balance": 2309.08,
	  "registered": "2014-07-04T09:26:59 -02:00",
	  "tags": ["aliqua", "velit", "quis", "proident"]
	}, {
	  "name": "Bradshaw Mason",
	  "gender": "male",
	  "age": 22,
	  "eyeColor": "green",
	  "balance": 1358.4,
	  "registered": "2015-10-15T08:22:22 -02:00",
	  "tags": ["reprehenderit", "et"]
	}, {
	  "name": "Mcneil Jimenez",
	  "gender": "male",
	  "age": 26,
	  "eyeColor": "blue",
	  "balance": 3176.78,
	  "registered": "2016-06-11T04:23:49 -02:00",
	  "tags": ["esse", "nostrud", "irure"]
	}, {
	  "name": "Shaffer Fox",
	  "gender": "male",
	  "age": 27,
	  "eyeColor": "brown",
	  "balance": 3071.8,
	  "registered": "2015-08-29T03:03:47 -02:00",
	  "tags": ["dolor", "consequat", "nisi", "tempor", "exercitation"]
	}, {
	  "name": "Carly Rollins",
	  "gender": "female",
	  "age": 26,
	  "eyeColor": "brown",
	  "balance": 2566.7,
	  "registered": "2016-03-10T03:39:59 -01:00",
	  "tags": ["commodo", "mollit", "eu", "quis", "esse"]
	}, {
	  "name": "Mcdowell Love",
	  "gender": "male",
	  "age": 28,
	  "eyeColor": "green",
	  "balance": 1336.69,
	  "registered": "2014-08-30T12:23:44 -02:00",
	  "tags": ["ipsum", "non"]
	}, {
	  "name": "Olivia Humphrey",
	  "gender": "female",
	  "age": 31,
	  "eyeColor": "green",
	  "balance": 2187.47,
	  "registered": "2015-08-11T05:57:47 -02:00",
	  "tags": ["reprehenderit", "proident", "ea"]
	}, {
	  "name": "Verna Taylor",
	  "gender": "female",
	  "age": 37,
	  "eyeColor": "brown",
	  "balance": 2317.47,
	  "registered": "2016-03-09T10:00:23 -01:00",
	  "tags": ["cillum", "esse"]
	}, {
	  "name": "Annabelle Salas",
	  "gender": "female",
	  "age": 31,
	  "eyeColor": "green",
	  "balance": 1804.75,
	  "registered": "2015-04-24T09:01:28 -02:00",
	  "tags": ["esse", "fugiat", "in"]
	}, {
	  "name": "Karen Hammond",
	  "gender": "female",
	  "age": 34,
	  "eyeColor": "brown",
	  "balance": 2337.8,
	  "registered": "2014-12-18T10:44:54 -01:00",
	  "tags": ["sint", "est"]
	}, {
	  "name": "Hood Guy",
	  "gender": "male",
	  "age": 33,
	  "eyeColor": "blue",
	  "balance": 1896.94,
	  "registered": "2015-11-29T04:58:55 -01:00",
	  "tags": ["magna", "dolore", "consequat"]
	}, {
	  "name": "Holloway Romero",
	  "gender": "male",
	  "age": 23,
	  "eyeColor": "brown",
	  "balance": 2984.56,
	  "registered": "2014-07-14T02:27:11 -02:00",
	  "tags": ["veniam", "fugiat", "velit"]
	}, {
	  "name": "Strong Barber",
	  "gender": "male",
	  "age": 38,
	  "eyeColor": "blue",
	  "balance": 1250.71,
	  "registered": "2015-02-22T01:56:55 -01:00",
	  "tags": ["aute", "ad"]
	}, {
	  "name": "Downs Farrell",
	  "gender": "male",
	  "age": 37,
	  "eyeColor": "blue",
	  "balance": 1494.11,
	  "registered": "2016-03-24T04:47:17 -01:00",
	  "tags": ["deserunt", "fugiat", "velit"]
	}, {
	  "name": "Gomez Chambers",
	  "gender": "male",
	  "age": 28,
	  "eyeColor": "green",
	  "balance": 2696.13,
	  "registered": "2015-07-12T03:13:17 -02:00",
	  "tags": ["quis", "dolore", "cupidatat", "non", "pariatur"]
	}, {
	  "name": "Avery Battle",
	  "gender": "male",
	  "age": 22,
	  "eyeColor": "blue",
	  "balance": 2194.18,
	  "registered": "2014-09-13T01:14:38 -02:00",
	  "tags": ["excepteur", "ipsum"]
	}, {
	  "name": "Hawkins Bass",
	  "gender": "male",
	  "age": 28,
	  "eyeColor": "green",
	  "balance": 2534.65,
	  "registered": "2016-01-20T05:09:43 -01:00",
	  "tags": ["esse", "duis"]
	}, {
	  "name": "Phyllis Hensley",
	  "gender": "female",
	  "age": 25,
	  "eyeColor": "blue",
	  "balance": 3327.13,
	  "registered": "2015-04-01T11:04:39 -02:00",
	  "tags": ["do", "occaecat", "adipisicing", "nulla", "duis"]
	}, {
	  "name": "Blanca Mccall",
	  "gender": "female",
	  "age": 28,
	  "eyeColor": "blue",
	  "balance": 1198.15,
	  "registered": "2015-04-14T08:35:50 -02:00",
	  "tags": ["consequat", "laboris", "nisi", "ex", "duis"]
	}, {
	  "name": "Katelyn Mclaughlin",
	  "gender": "female",
	  "age": 26,
	  "eyeColor": "blue",
	  "balance": 1375.62,
	  "registered": "2015-09-25T09:11:21 -02:00",
	  "tags": ["ipsum", "veniam"]
	}, {
	  "name": "Holt Wolf",
	  "gender": "male",
	  "age": 40,
	  "eyeColor": "blue",
	  "balance": 2313.68,
	  "registered": "2016-02-25T04:50:36 -01:00",
	  "tags": ["do", "id"]
	}, {
	  "name": "Norris Bonner",
	  "gender": "male",
	  "age": 26,
	  "eyeColor": "brown",
	  "balance": 3912.72,
	  "registered": "2014-11-16T06:49:25 -01:00",
	  "tags": ["reprehenderit", "cupidatat", "in"]
	}, {
	  "name": "Ford Stephens",
	  "gender": "male",
	  "age": 36,
	  "eyeColor": "green",
	  "balance": 2067.35,
	  "registered": "2016-02-11T03:17:03 -01:00",
	  "tags": ["adipisicing", "in"]
	}, {
	  "name": "Amalia Flynn",
	  "gender": "female",
	  "age": 35,
	  "eyeColor": "blue",
	  "balance": 1772.68,
	  "registered": "2014-04-28T05:58:22 -02:00",
	  "tags": ["labore", "qui"]
	}, {
	  "name": "Newton Pacheco",
	  "gender": "male",
	  "age": 24,
	  "eyeColor": "green",
	  "balance": 1606.98,
	  "registered": "2014-03-30T07:39:38 -02:00",
	  "tags": ["sint", "nulla"]
	}, {
	  "name": "Mamie Cannon",
	  "gender": "female",
	  "age": 39,
	  "eyeColor": "brown",
	  "balance": 1683.77,
	  "registered": "2015-07-07T01:10:10 -02:00",
	  "tags": ["laborum", "adipisicing"]
	}, {
	  "name": "Lara Blevins",
	  "gender": "male",
	  "age": 37,
	  "eyeColor": "blue",
	  "balance": 2502.74,
	  "registered": "2015-07-18T09:58:27 -02:00",
	  "tags": ["magna", "adipisicing", "laboris", "dolore"]
	}, {
	  "name": "Betsy Gilliam",
	  "gender": "female",
	  "age": 27,
	  "eyeColor": "brown",
	  "balance": 1959.25,
	  "registered": "2015-06-06T03:53:22 -02:00",
	  "tags": ["ea", "non"]
	}, {
	  "name": "Acosta Gutierrez",
	  "gender": "male",
	  "age": 27,
	  "eyeColor": "green",
	  "balance": 2956,
	  "registered": "2014-11-24T07:57:29 -01:00",
	  "tags": ["voluptate", "amet", "pariatur", "consequat"]
	}, {
	  "name": "Marina Randall",
	  "gender": "female",
	  "age": 28,
	  "eyeColor": "blue",
	  "balance": 3548.93,
	  "registered": "2014-09-30T07:08:55 -02:00",
	  "tags": ["Lorem", "nulla", "quis", "nisi", "exercitation"]
	}, {
	  "name": "Mercedes Gilbert",
	  "gender": "female",
	  "age": 23,
	  "eyeColor": "green",
	  "balance": 3391.37,
	  "registered": "2016-06-21T08:44:42 -02:00",
	  "tags": ["velit", "enim"]
	}, {
	  "name": "Eve Green",
	  "gender": "female",
	  "age": 22,
	  "eyeColor": "brown",
	  "balance": 1786.91,
	  "registered": "2015-04-08T06:42:05 -02:00",
	  "tags": ["enim", "dolor"]
	}, {
	  "name": "Wagner Wilder",
	  "gender": "male",
	  "age": 32,
	  "eyeColor": "blue",
	  "balance": 3575.89,
	  "registered": "2014-05-06T12:47:26 -02:00",
	  "tags": ["aute", "reprehenderit", "irure", "aliquip", "cillum"]
	}, {
	  "name": "Boyd Walter",
	  "gender": "male",
	  "age": 32,
	  "eyeColor": "brown",
	  "balance": 1909.52,
	  "registered": "2014-04-20T11:31:29 -02:00",
	  "tags": ["minim", "adipisicing"]
	}, {
	  "name": "Bishop Heath",
	  "gender": "male",
	  "age": 32,
	  "eyeColor": "green",
	  "balance": 3024.8,
	  "registered": "2015-05-25T01:43:34 -02:00",
	  "tags": ["et", "et"]
	}, {
	  "name": "Ball Miller",
	  "gender": "male",
	  "age": 22,
	  "eyeColor": "brown",
	  "balance": 1386.7,
	  "registered": "2015-02-16T02:07:19 -01:00",
	  "tags": ["quis", "veniam"]
	}, {
	  "name": "Becky Solis",
	  "gender": "female",
	  "age": 29,
	  "eyeColor": "brown",
	  "balance": 2934.97,
	  "registered": "2015-09-09T11:44:30 -02:00",
	  "tags": ["proident", "anim"]
	}, {
	  "name": "Alexandria Greene",
	  "gender": "female",
	  "age": 22,
	  "eyeColor": "brown",
	  "balance": 2261.71,
	  "registered": "2015-11-11T08:19:04 -01:00",
	  "tags": ["qui", "irure", "aliqua", "amet", "ex"]
	}, {
	  "name": "Schroeder Wilkinson",
	  "gender": "male",
	  "age": 24,
	  "eyeColor": "brown",
	  "balance": 1197.28,
	  "registered": "2016-01-30T08:10:11 -01:00",
	  "tags": ["esse", "nulla", "incididunt"]
	}, {
	  "name": "Stanton Moreno",
	  "gender": "male",
	  "age": 30,
	  "eyeColor": "blue",
	  "balance": 1305.34,
	  "registered": "2015-07-11T03:39:26 -02:00",
	  "tags": ["ipsum", "deserunt", "est"]
	}, {
	  "name": "Gibbs Mckinney",
	  "gender": "male",
	  "age": 30,
	  "eyeColor": "green",
	  "balance": 3104.21,
	  "registered": "2015-09-25T01:00:50 -02:00",
	  "tags": ["aute", "nisi", "amet", "excepteur", "eiusmod"]
	}, {
	  "name": "Juarez Stein",
	  "gender": "male",
	  "age": 39,
	  "eyeColor": "green",
	  "balance": 1339.16,
	  "registered": "2016-06-24T05:38:30 -02:00",
	  "tags": ["labore", "sit", "aliquip"]
	}, {
	  "name": "Joann Kelley",
	  "gender": "female",
	  "age": 36,
	  "eyeColor": "brown",
	  "balance": 3269.84,
	  "registered": "2015-03-07T12:09:23 -01:00",
	  "tags": ["voluptate", "ullamco", "nisi", "exercitation", "cupidatat"]
	}, {
	  "name": "Harmon Melton",
	  "gender": "male",
	  "age": 30,
	  "eyeColor": "brown",
	  "balance": 3012.49,
	  "registered": "2015-11-08T07:11:00 -01:00",
	  "tags": ["qui", "sint"]
	}, {
	  "name": "Moses Sharp",
	  "gender": "male",
	  "age": 29,
	  "eyeColor": "green",
	  "balance": 1701.16,
	  "registered": "2015-03-13T01:24:56 -01:00",
	  "tags": ["ea", "cillum"]
	}, {
	  "name": "Dotson Raymond",
	  "gender": "male",
	  "age": 35,
	  "eyeColor": "green",
	  "balance": 3054.87,
	  "registered": "2015-01-09T12:52:12 -01:00",
	  "tags": ["dolor", "est", "exercitation"]
	}, {
	  "name": "Moore Summers",
	  "gender": "male",
	  "age": 22,
	  "eyeColor": "brown",
	  "balance": 3570.52,
	  "registered": "2015-11-12T03:09:10 -01:00",
	  "tags": ["adipisicing", "amet"]
	}, {
	  "name": "Lorrie Yang",
	  "gender": "female",
	  "age": 35,
	  "eyeColor": "blue",
	  "balance": 1414.77,
	  "registered": "2015-12-06T06:21:39 -01:00",
	  "tags": ["aute", "sunt", "aliquip", "eu"]
	}, {
	  "name": "Taylor Noble",
	  "gender": "female",
	  "age": 29,
	  "eyeColor": "blue",
	  "balance": 1787.91,
	  "registered": "2014-06-21T10:34:20 -02:00",
	  "tags": ["labore", "voluptate"]
	}, {
	  "name": "England Rodgers",
	  "gender": "male",
	  "age": 30,
	  "eyeColor": "green",
	  "balance": 1409.4,
	  "registered": "2015-06-05T05:11:32 -02:00",
	  "tags": ["qui", "ea", "excepteur"]
	}, {
	  "name": "Selena Lane",
	  "gender": "female",
	  "age": 30,
	  "eyeColor": "blue",
	  "balance": 1292.77,
	  "registered": "2016-03-21T06:02:52 -01:00",
	  "tags": ["sunt", "non"]
	}, {
	  "name": "Crystal Luna",
	  "gender": "female",
	  "age": 24,
	  "eyeColor": "blue",
	  "balance": 3516.17,
	  "registered": "2015-09-23T09:21:53 -02:00",
	  "tags": ["ullamco", "minim", "consectetur", "enim"]
	}, {
	  "name": "Bray Bauer",
	  "gender": "male",
	  "age": 23,
	  "eyeColor": "brown",
	  "balance": 2429.08,
	  "registered": "2015-10-12T08:02:20 -02:00",
	  "tags": ["sint", "pariatur", "quis"]
	}, {
	  "name": "Baxter Salazar",
	  "gender": "male",
	  "age": 22,
	  "eyeColor": "green",
	  "balance": 1217.5,
	  "registered": "2014-11-14T01:46:54 -01:00",
	  "tags": ["ut", "aute", "exercitation", "ex", "id"]
	}, {
	  "name": "Gallegos Kennedy",
	  "gender": "male",
	  "age": 34,
	  "eyeColor": "blue",
	  "balance": 3734.49,
	  "registered": "2015-01-22T05:34:23 -01:00",
	  "tags": ["incididunt", "esse"]
	}, {
	  "name": "Addie Carlson",
	  "gender": "female",
	  "age": 22,
	  "eyeColor": "brown",
	  "balance": 3586.16,
	  "registered": "2015-05-10T01:51:07 -02:00",
	  "tags": ["est", "non"]
	}, {
	  "name": "Shanna Cobb",
	  "gender": "female",
	  "age": 22,
	  "eyeColor": "blue",
	  "balance": 2117.82,
	  "registered": "2016-06-26T11:51:12 -02:00",
	  "tags": ["ad", "cupidatat"]
	}, {
	  "name": "Kathrine Ayers",
	  "gender": "female",
	  "age": 20,
	  "eyeColor": "brown",
	  "balance": 1567.86,
	  "registered": "2014-12-27T09:53:33 -01:00",
	  "tags": ["Lorem", "do", "occaecat"]
	}, {
	  "name": "Felecia Ballard",
	  "gender": "female",
	  "age": 30,
	  "eyeColor": "green",
	  "balance": 3063.6,
	  "registered": "2014-04-30T02:41:39 -02:00",
	  "tags": ["in", "sint", "adipisicing"]
	}, {
	  "name": "Rhonda Hancock",
	  "gender": "female",
	  "age": 30,
	  "eyeColor": "blue",
	  "balance": 2191.32,
	  "registered": "2015-02-25T10:41:58 -01:00",
	  "tags": ["quis", "eu", "aute"]
	}, {
	  "name": "Lillian Callahan",
	  "gender": "female",
	  "age": 27,
	  "eyeColor": "blue",
	  "balance": 1459.88,
	  "registered": "2015-10-15T07:55:08 -02:00",
	  "tags": ["dolore", "sunt", "eu", "et"]
	}, {
	  "name": "Sondra Dejesus",
	  "gender": "female",
	  "age": 30,
	  "eyeColor": "brown",
	  "balance": 1546.98,
	  "registered": "2015-12-21T09:02:33 -01:00",
	  "tags": ["excepteur", "aliqua", "do", "nisi", "elit"]
	}, {
	  "name": "Eloise Patton",
	  "gender": "female",
	  "age": 28,
	  "eyeColor": "green",
	  "balance": 2049.5,
	  "registered": "2015-05-28T03:32:48 -02:00",
	  "tags": ["dolore", "ea", "tempor"]
	}, {
	  "name": "Bernadine Burnett",
	  "gender": "female",
	  "age": 37,
	  "eyeColor": "brown",
	  "balance": 3519.19,
	  "registered": "2015-09-07T05:18:41 -02:00",
	  "tags": ["laboris", "Lorem", "ipsum", "fugiat"]
	}, {
	  "name": "Shelley Tanner",
	  "gender": "female",
	  "age": 21,
	  "eyeColor": "blue",
	  "balance": 3063.33,
	  "registered": "2015-12-06T10:43:45 -01:00",
	  "tags": ["dolor", "laborum", "elit", "do", "elit"]
	}, {
	  "name": "Opal Ward",
	  "gender": "female",
	  "age": 36,
	  "eyeColor": "green",
	  "balance": 1920.52,
	  "registered": "2015-01-16T10:19:08 -01:00",
	  "tags": ["minim", "esse", "consequat"]
	}, {
	  "name": "Frazier Gillespie",
	  "gender": "male",
	  "age": 37,
	  "eyeColor": "green",
	  "balance": 2529.65,
	  "registered": "2016-07-23T07:26:34 -02:00",
	  "tags": ["magna", "in"]
	}, {
	  "name": "Chase Barrera",
	  "gender": "male",
	  "age": 22,
	  "eyeColor": "blue",
	  "balance": 3008.39,
	  "registered": "2014-08-17T11:06:04 -02:00",
	  "tags": ["in", "cupidatat", "magna", "laboris", "laboris"]
	}, {
	  "name": "Rodriquez Davenport",
	  "gender": "male",
	  "age": 27,
	  "eyeColor": "brown",
	  "balance": 3322.47,
	  "registered": "2014-09-26T03:45:31 -02:00",
	  "tags": ["commodo", "pariatur", "sint", "excepteur"]
	}, {
	  "name": "Jasmine Mcneil",
	  "gender": "female",
	  "age": 34,
	  "eyeColor": "green",
	  "balance": 1197.96,
	  "registered": "2014-08-02T03:57:08 -02:00",
	  "tags": ["laboris", "duis", "Lorem", "voluptate", "consequat"]
	}, {
	  "name": "English Abbott",
	  "gender": "male",
	  "age": 38,
	  "eyeColor": "brown",
	  "balance": 1886.73,
	  "registered": "2015-02-08T07:31:13 -01:00",
	  "tags": ["dolor", "mollit", "pariatur", "velit"]
	}, {
	  "name": "Noel King",
	  "gender": "male",
	  "age": 35,
	  "eyeColor": "green",
	  "balance": 1922.51,
	  "registered": "2014-03-22T11:37:51 -01:00",
	  "tags": ["consequat", "laborum", "ut", "qui", "ea"]
	}, {
	  "name": "Priscilla Hendrix",
	  "gender": "female",
	  "age": 24,
	  "eyeColor": "brown",
	  "balance": 2671.62,
	  "registered": "2015-04-24T06:55:39 -02:00",
	  "tags": ["est", "laborum", "tempor", "duis"]
	}, {
	  "name": "Ferrell Jensen",
	  "gender": "male",
	  "age": 39,
	  "eyeColor": "blue",
	  "balance": 2937.75,
	  "registered": "2014-06-20T09:07:23 -02:00",
	  "tags": ["proident", "veniam", "proident", "do"]
	}, {
	  "name": "Joanna Logan",
	  "gender": "female",
	  "age": 39,
	  "eyeColor": "blue",
	  "balance": 1779.05,
	  "registered": "2016-01-15T10:32:35 -01:00",
	  "tags": ["excepteur", "cillum", "deserunt", "incididunt"]
	}, {
	  "name": "Chasity Foreman",
	  "gender": "female",
	  "age": 39,
	  "eyeColor": "blue",
	  "balance": 2734.62,
	  "registered": "2016-02-24T06:52:34 -01:00",
	  "tags": ["adipisicing", "nulla", "pariatur", "adipisicing", "magna"]
	}, {
	  "name": "Justice Mayer",
	  "gender": "male",
	  "age": 36,
	  "eyeColor": "blue",
	  "balance": 3656.19,
	  "registered": "2015-10-03T06:49:48 -02:00",
	  "tags": ["culpa", "est", "anim", "nulla", "ut"]
	}, {
	  "name": "Powell Alexander",
	  "gender": "male",
	  "age": 35,
	  "eyeColor": "brown",
	  "balance": 2197.99,
	  "registered": "2016-02-27T02:50:43 -01:00",
	  "tags": ["anim", "id", "nostrud", "ut", "deserunt"]
	}, {
	  "name": "Thelma Mckenzie",
	  "gender": "female",
	  "age": 31,
	  "eyeColor": "blue",
	  "balance": 1083.18,
	  "registered": "2015-11-12T08:49:34 -01:00",
	  "tags": ["aliqua", "incididunt", "id"]
	}, {
	  "name": "Adeline Allison",
	  "gender": "female",
	  "age": 27,
	  "eyeColor": "brown",
	  "balance": 3181.04,
	  "registered": "2014-05-14T06:49:33 -02:00",
	  "tags": ["quis", "culpa", "voluptate", "aliquip", "et"]
	}, {
	  "name": "Josefa Garner",
	  "gender": "female",
	  "age": 34,
	  "eyeColor": "green",
	  "balance": 2030.68,
	  "registered": "2014-07-07T05:27:49 -02:00",
	  "tags": ["aute", "do", "id"]
	}, {
	  "name": "Ginger Chaney",
	  "gender": "female",
	  "age": 33,
	  "eyeColor": "brown",
	  "balance": 3055.6,
	  "registered": "2014-08-12T03:49:19 -02:00",
	  "tags": ["excepteur", "cillum"]
	}, {
	  "name": "Orr Nicholson",
	  "gender": "male",
	  "age": 28,
	  "eyeColor": "blue",
	  "balance": 3633.42,
	  "registered": "2016-02-12T06:53:34 -01:00",
	  "tags": ["tempor", "aute"]
	}, {
	  "name": "Cohen Wells",
	  "gender": "male",
	  "age": 31,
	  "eyeColor": "green",
	  "balance": 3195.99,
	  "registered": "2014-11-01T02:59:36 -01:00",
	  "tags": ["labore", "consectetur", "aute", "ex", "reprehenderit"]
	}, {
	  "name": "Galloway Tate",
	  "gender": "male",
	  "age": 33,
	  "eyeColor": "blue",
	  "balance": 1906.18,
	  "registered": "2014-03-03T08:07:24 -01:00",
	  "tags": ["labore", "aliquip"]
	}, {
	  "name": "Kristina Mcclain",
	  "gender": "female",
	  "age": 32,
	  "eyeColor": "green",
	  "balance": 2932.93,
	  "registered": "2014-11-30T11:26:39 -01:00",
	  "tags": ["amet", "sint", "laboris"]
	}, {
	  "name": "Lawrence Strong",
	  "gender": "male",
	  "age": 23,
	  "eyeColor": "blue",
	  "balance": 1327.6,
	  "registered": "2015-10-21T09:48:44 -02:00",
	  "tags": ["sit", "culpa", "pariatur", "irure", "excepteur"]
	}, {
	  "name": "Marissa Harvey",
	  "gender": "female",
	  "age": 38,
	  "eyeColor": "brown",
	  "balance": 3281.83,
	  "registered": "2014-01-03T08:45:30 -01:00",
	  "tags": ["dolore", "elit", "ullamco", "deserunt"]
	}, {
	  "name": "Lang Drake",
	  "gender": "male",
	  "age": 30,
	  "eyeColor": "blue",
	  "balance": 2802.8,
	  "registered": "2015-05-21T09:43:06 -02:00",
	  "tags": ["cupidatat", "veniam", "fugiat", "ex"]
	}, {
	  "name": "Janet Hogan",
	  "gender": "female",
	  "age": 24,
	  "eyeColor": "green",
	  "balance": 3030.1,
	  "registered": "2015-03-21T07:05:45 -01:00",
	  "tags": ["cupidatat", "Lorem", "et", "velit", "qui"]
	}, {
	  "name": "Stephanie Maddox",
	  "gender": "female",
	  "age": 35,
	  "eyeColor": "green",
	  "balance": 3342.39,
	  "registered": "2016-01-07T06:08:53 -01:00",
	  "tags": ["laborum", "incididunt"]
	}, {
	  "name": "Anne Stanton",
	  "gender": "female",
	  "age": 20,
	  "eyeColor": "blue",
	  "balance": 1128.54,
	  "registered": "2014-08-27T07:13:35 -02:00",
	  "tags": ["consequat", "non", "fugiat"]
	}, {
	  "name": "Connie Knight",
	  "gender": "female",
	  "age": 26,
	  "eyeColor": "brown",
	  "balance": 2539.28,
	  "registered": "2015-08-07T09:16:55 -02:00",
	  "tags": ["nisi", "occaecat"]
	}, {
	  "name": "Bertie Reynolds",
	  "gender": "female",
	  "age": 22,
	  "eyeColor": "brown",
	  "balance": 2451.89,
	  "registered": "2015-03-04T10:01:05 -01:00",
	  "tags": ["aliqua", "tempor"]
	}, {
	  "name": "Howe Pierce",
	  "gender": "male",
	  "age": 23,
	  "eyeColor": "blue",
	  "balance": 2820.33,
	  "registered": "2016-06-24T01:33:42 -02:00",
	  "tags": ["aliquip", "ex", "ut"]
	}, {
	  "name": "Cobb Duffy",
	  "gender": "male",
	  "age": 25,
	  "eyeColor": "brown",
	  "balance": 1418.04,
	  "registered": "2015-04-24T08:39:29 -02:00",
	  "tags": ["occaecat", "et", "esse", "laboris", "labore"]
	}, {
	  "name": "Bright Best",
	  "gender": "male",
	  "age": 34,
	  "eyeColor": "blue",
	  "balance": 2059.99,
	  "registered": "2015-05-18T02:56:14 -02:00",
	  "tags": ["minim", "mollit", "dolor", "excepteur", "mollit"]
	}, {
	  "name": "Douglas Martin",
	  "gender": "male",
	  "age": 23,
	  "eyeColor": "brown",
	  "balance": 1190.76,
	  "registered": "2015-02-28T04:42:26 -01:00",
	  "tags": ["exercitation", "excepteur"]
	}, {
	  "name": "Juliet Gaines",
	  "gender": "female",
	  "age": 32,
	  "eyeColor": "blue",
	  "balance": 2920.75,
	  "registered": "2014-03-01T10:56:08 -01:00",
	  "tags": ["sit", "Lorem", "duis"]
	}, {
	  "name": "Hoover Newman",
	  "gender": "male",
	  "age": 37,
	  "eyeColor": "green",
	  "balance": 1109.9,
	  "registered": "2015-04-10T05:45:10 -02:00",
	  "tags": ["amet", "cillum", "anim"]
	}, {
	  "name": "Austin Hyde",
	  "gender": "male",
	  "age": 25,
	  "eyeColor": "green",
	  "balance": 2606.43,
	  "registered": "2015-05-11T09:58:57 -02:00",
	  "tags": ["laboris", "quis", "cillum", "fugiat"]
	}, {
	  "name": "Hubbard Ware",
	  "gender": "male",
	  "age": 27,
	  "eyeColor": "blue",
	  "balance": 2009.03,
	  "registered": "2016-01-08T08:29:19 -01:00",
	  "tags": ["elit", "ipsum", "nisi", "cillum", "do"]
	}, {
	  "name": "Paige Durham",
	  "gender": "female",
	  "age": 24,
	  "eyeColor": "brown",
	  "balance": 2802.41,
	  "registered": "2016-05-26T05:20:45 -02:00",
	  "tags": ["consequat", "laboris", "cillum", "id", "voluptate"]
	}, {
	  "name": "Robert Watkins",
	  "gender": "female",
	  "age": 31,
	  "eyeColor": "brown",
	  "balance": 1316.38,
	  "registered": "2014-11-23T08:28:52 -01:00",
	  "tags": ["elit", "quis", "nisi", "non"]
	}, {
	  "name": "Jeanne Bradford",
	  "gender": "female",
	  "age": 27,
	  "eyeColor": "blue",
	  "balance": 2378.7,
	  "registered": "2015-08-08T08:32:30 -02:00",
	  "tags": ["veniam", "in", "est"]
	}, {
	  "name": "Annmarie Olsen",
	  "gender": "female",
	  "age": 33,
	  "eyeColor": "green",
	  "balance": 2784.09,
	  "registered": "2016-05-28T06:22:14 -02:00",
	  "tags": ["aliqua", "ex", "in", "eu"]
	}, {
	  "name": "Angela Mcmahon",
	  "gender": "female",
	  "age": 36,
	  "eyeColor": "brown",
	  "balance": 3300.23,
	  "registered": "2016-03-18T09:03:51 -01:00",
	  "tags": ["nisi", "nostrud", "mollit", "deserunt", "quis"]
	}, {
	  "name": "Imelda Schneider",
	  "gender": "female",
	  "age": 35,
	  "eyeColor": "blue",
	  "balance": 1925.3,
	  "registered": "2015-09-16T04:22:38 -02:00",
	  "tags": ["ipsum", "nisi", "enim", "est", "aute"]
	}, {
	  "name": "Angelina Goff",
	  "gender": "female",
	  "age": 40,
	  "eyeColor": "green",
	  "balance": 2787.7,
	  "registered": "2016-01-19T10:57:46 -01:00",
	  "tags": ["reprehenderit", "ipsum", "ullamco", "ullamco"]
	}, {
	  "name": "Hunt Jefferson",
	  "gender": "male",
	  "age": 37,
	  "eyeColor": "green",
	  "balance": 1609.18,
	  "registered": "2015-07-07T04:06:04 -02:00",
	  "tags": ["ut", "commodo", "esse"]
	}, {
	  "name": "Tonia Dawson",
	  "gender": "female",
	  "age": 28,
	  "eyeColor": "brown",
	  "balance": 2243.66,
	  "registered": "2014-10-27T07:16:13 -01:00",
	  "tags": ["labore", "officia"]
	}, {
	  "name": "Kellie Clemons",
	  "gender": "female",
	  "age": 20,
	  "eyeColor": "brown",
	  "balance": 2998.82,
	  "registered": "2016-08-06T03:53:11 -02:00",
	  "tags": ["in", "est", "amet"]
	}, {
	  "name": "Nelda Suarez",
	  "gender": "female",
	  "age": 38,
	  "eyeColor": "blue",
	  "balance": 2846.56,
	  "registered": "2015-09-25T12:54:54 -02:00",
	  "tags": ["cillum", "et", "sit"]
	}, {
	  "name": "Frank Reyes",
	  "gender": "male",
	  "age": 38,
	  "eyeColor": "blue",
	  "balance": 2634.48,
	  "registered": "2014-04-11T09:21:56 -02:00",
	  "tags": ["aliqua", "est"]
	}, {
	  "name": "Chandler Burch",
	  "gender": "male",
	  "age": 38,
	  "eyeColor": "blue",
	  "balance": 1182.59,
	  "registered": "2014-08-09T01:05:53 -02:00",
	  "tags": ["ullamco", "sit", "qui"]
	}, {
	  "name": "Jacklyn Terrell",
	  "gender": "female",
	  "age": 22,
	  "eyeColor": "brown",
	  "balance": 2210.82,
	  "registered": "2016-06-03T08:53:51 -02:00",
	  "tags": ["officia", "ea"]
	}, {
	  "name": "Villarreal Skinner",
	  "gender": "male",
	  "age": 37,
	  "eyeColor": "green",
	  "balance": 2436.27,
	  "registered": "2015-12-01T08:18:51 -01:00",
	  "tags": ["adipisicing", "non", "nisi", "sint", "sint"]
	}, {
	  "name": "Hutchinson Scott",
	  "gender": "male",
	  "age": 36,
	  "eyeColor": "green",
	  "balance": 2748.41,
	  "registered": "2014-09-19T07:02:57 -02:00",
	  "tags": ["labore", "cupidatat", "ipsum", "sint"]
	}, {
	  "name": "Loraine Ayala",
	  "gender": "female",
	  "age": 20,
	  "eyeColor": "green",
	  "balance": 1879.49,
	  "registered": "2015-12-28T03:43:07 -01:00",
	  "tags": ["eiusmod", "sint", "eu"]
	}, {
	  "name": "Bobbi Pratt",
	  "gender": "female",
	  "age": 34,
	  "eyeColor": "brown",
	  "balance": 3883.19,
	  "registered": "2015-07-18T01:18:00 -02:00",
	  "tags": ["et", "veniam", "voluptate"]
	}, {
	  "name": "Pickett Rice",
	  "gender": "male",
	  "age": 20,
	  "eyeColor": "brown",
	  "balance": 1677.14,
	  "registered": "2015-09-22T04:55:06 -02:00",
	  "tags": ["cillum", "nisi"]
	}, {
	  "name": "Christy Warren",
	  "gender": "female",
	  "age": 33,
	  "eyeColor": "green",
	  "balance": 2303.43,
	  "registered": "2014-08-14T01:10:58 -02:00",
	  "tags": ["qui", "fugiat", "eu"]
	}, {
	  "name": "Velma Foley",
	  "gender": "female",
	  "age": 38,
	  "eyeColor": "brown",
	  "balance": 2866.42,
	  "registered": "2014-12-19T08:02:14 -01:00",
	  "tags": ["exercitation", "ex", "dolor", "consectetur"]
	}, {
	  "name": "Kristine Holder",
	  "gender": "female",
	  "age": 27,
	  "eyeColor": "blue",
	  "balance": 2735.58,
	  "registered": "2014-05-29T02:36:29 -02:00",
	  "tags": ["anim", "duis"]
	}, {
	  "name": "Crosby Figueroa",
	  "gender": "male",
	  "age": 21,
	  "eyeColor": "brown",
	  "balance": 3326.89,
	  "registered": "2015-10-26T03:40:23 -01:00",
	  "tags": ["et", "nostrud"]
	}, {
	  "name": "Annette Neal",
	  "gender": "female",
	  "age": 28,
	  "eyeColor": "blue",
	  "balance": 1327.66,
	  "registered": "2015-07-30T02:44:40 -02:00",
	  "tags": ["aliquip", "consequat", "adipisicing", "aliqua"]
	}, {
	  "name": "Jackson Hill",
	  "gender": "male",
	  "age": 30,
	  "eyeColor": "blue",
	  "balance": 2424.8,
	  "registered": "2015-02-05T11:31:58 -01:00",
	  "tags": ["amet", "enim"]
	}, {
	  "name": "Tracey Decker",
	  "gender": "female",
	  "age": 34,
	  "eyeColor": "blue",
	  "balance": 3955.63,
	  "registered": "2015-01-28T01:24:42 -01:00",
	  "tags": ["deserunt", "amet", "ut", "elit"]
	}, {
	  "name": "Riggs Copeland",
	  "gender": "male",
	  "age": 20,
	  "eyeColor": "blue",
	  "balance": 3847.3,
	  "registered": "2014-01-29T04:33:54 -01:00",
	  "tags": ["cupidatat", "in", "voluptate", "minim", "duis"]
	}, {
	  "name": "Marlene Meadows",
	  "gender": "female",
	  "age": 22,
	  "eyeColor": "blue",
	  "balance": 2872.95,
	  "registered": "2015-07-13T09:08:29 -02:00",
	  "tags": ["minim", "ipsum", "qui"]
	}, {
	  "name": "Burton Bradshaw",
	  "gender": "male",
	  "age": 40,
	  "eyeColor": "green",
	  "balance": 3388.92,
	  "registered": "2015-02-16T09:41:25 -01:00",
	  "tags": ["laboris", "dolor", "id", "labore"]
	}, {
	  "name": "Valenzuela Vaughan",
	  "gender": "male",
	  "age": 35,
	  "eyeColor": "brown",
	  "balance": 2849.83,
	  "registered": "2015-07-10T04:00:52 -02:00",
	  "tags": ["et", "est"]
	}, {
	  "name": "Rosella Kane",
	  "gender": "female",
	  "age": 29,
	  "eyeColor": "green",
	  "balance": 2431.73,
	  "registered": "2015-05-02T02:25:48 -02:00",
	  "tags": ["elit", "tempor", "consequat", "excepteur"]
	}, {
	  "name": "Melisa Rowe",
	  "gender": "female",
	  "age": 37,
	  "eyeColor": "blue",
	  "balance": 2554.73,
	  "registered": "2014-08-05T11:28:21 -02:00",
	  "tags": ["laboris", "dolor", "esse"]
	}, {
	  "name": "Lloyd Brown",
	  "gender": "male",
	  "age": 32,
	  "eyeColor": "brown",
	  "balance": 2619.65,
	  "registered": "2014-05-22T11:57:22 -02:00",
	  "tags": ["commodo", "enim", "eu"]
	}, {
	  "name": "Gordon Gay",
	  "gender": "male",
	  "age": 24,
	  "eyeColor": "brown",
	  "balance": 1287.57,
	  "registered": "2014-03-20T07:25:12 -01:00",
	  "tags": ["commodo", "officia", "dolor", "do", "ad"]
	}, {
	  "name": "Rosemary Barr",
	  "gender": "female",
	  "age": 28,
	  "eyeColor": "green",
	  "balance": 2269.18,
	  "registered": "2014-08-28T04:21:16 -02:00",
	  "tags": ["incididunt", "quis", "consectetur", "proident"]
	}, {
	  "name": "Skinner Workman",
	  "gender": "male",
	  "age": 21,
	  "eyeColor": "brown",
	  "balance": 2476.03,
	  "registered": "2014-09-27T07:12:47 -02:00",
	  "tags": ["eiusmod", "culpa"]
	}, {
	  "name": "Felicia Hutchinson",
	  "gender": "female",
	  "age": 27,
	  "eyeColor": "brown",
	  "balance": 1989.18,
	  "registered": "2014-05-20T04:01:01 -02:00",
	  "tags": ["cupidatat", "excepteur", "aute"]
	}, {
	  "name": "Jodi Fitzpatrick",
	  "gender": "female",
	  "age": 34,
	  "eyeColor": "blue",
	  "balance": 2352.38,
	  "registered": "2014-06-03T09:21:15 -02:00",
	  "tags": ["tempor", "excepteur", "laborum", "culpa"]
	}, {
	  "name": "Melendez Bond",
	  "gender": "male",
	  "age": 33,
	  "eyeColor": "blue",
	  "balance": 1616.41,
	  "registered": "2016-06-08T01:36:16 -02:00",
	  "tags": ["duis", "fugiat"]
	}, {
	  "name": "Donovan Pennington",
	  "gender": "male",
	  "age": 30,
	  "eyeColor": "blue",
	  "balance": 3991.52,
	  "registered": "2014-07-08T06:58:23 -02:00",
	  "tags": ["Lorem", "incididunt"]
	}, {
	  "name": "Alford Murray",
	  "gender": "male",
	  "age": 28,
	  "eyeColor": "blue",
	  "balance": 3358.28,
	  "registered": "2016-01-04T09:29:11 -01:00",
	  "tags": ["ullamco", "sint"]
	}, {
	  "name": "Green Erickson",
	  "gender": "male",
	  "age": 39,
	  "eyeColor": "blue",
	  "balance": 3612.16,
	  "registered": "2016-03-25T08:16:22 -01:00",
	  "tags": ["commodo", "aliqua", "commodo", "do"]
	}, {
	  "name": "Fitzpatrick Thomas",
	  "gender": "male",
	  "age": 35,
	  "eyeColor": "brown",
	  "balance": 2092.69,
	  "registered": "2015-10-26T09:59:08 -01:00",
	  "tags": ["in", "anim", "mollit"]
	}, {
	  "name": "Shields Olson",
	  "gender": "male",
	  "age": 34,
	  "eyeColor": "brown",
	  "balance": 2263.79,
	  "registered": "2014-09-06T01:00:23 -02:00",
	  "tags": ["nostrud", "cupidatat", "adipisicing", "fugiat"]
	}, {
	  "name": "Robbins Gallagher",
	  "gender": "male",
	  "age": 21,
	  "eyeColor": "brown",
	  "balance": 2664.64,
	  "registered": "2016-01-02T10:36:39 -01:00",
	  "tags": ["aliqua", "veniam"]
	}, {
	  "name": "Fox Stout",
	  "gender": "male",
	  "age": 36,
	  "eyeColor": "blue",
	  "balance": 3076.88,
	  "registered": "2016-05-03T11:47:54 -02:00",
	  "tags": ["quis", "amet", "excepteur", "velit"]
	}, {
	  "name": "Watts Peterson",
	  "gender": "male",
	  "age": 23,
	  "eyeColor": "green",
	  "balance": 3877.51,
	  "registered": "2015-11-06T08:48:09 -01:00",
	  "tags": ["deserunt", "fugiat"]
	}, {
	  "name": "Marilyn Valdez",
	  "gender": "female",
	  "age": 40,
	  "eyeColor": "green",
	  "balance": 1859.76,
	  "registered": "2016-02-28T01:00:34 -01:00",
	  "tags": ["deserunt", "nisi", "nisi"]
	}, {
	  "name": "Oconnor Madden",
	  "gender": "male",
	  "age": 26,
	  "eyeColor": "green",
	  "balance": 3993.55,
	  "registered": "2015-10-05T01:01:11 -02:00",
	  "tags": ["id", "ex", "veniam"]
	}, {
	  "name": "Mooney Collins",
	  "gender": "male",
	  "age": 31,
	  "eyeColor": "blue",
	  "balance": 1889.45,
	  "registered": "2015-04-23T05:27:57 -02:00",
	  "tags": ["laborum", "Lorem", "labore", "consequat"]
	}, {
	  "name": "Love Chavez",
	  "gender": "male",
	  "age": 35,
	  "eyeColor": "blue",
	  "balance": 1370.79,
	  "registered": "2016-04-18T04:21:56 -02:00",
	  "tags": ["irure", "magna"]
	}, {
	  "name": "Leslie Jenkins",
	  "gender": "female",
	  "age": 22,
	  "eyeColor": "green",
	  "balance": 1752.3,
	  "registered": "2014-04-01T02:03:35 -02:00",
	  "tags": ["adipisicing", "labore", "eiusmod"]
	}, {
	  "name": "Yvonne Gates",
	  "gender": "female",
	  "age": 29,
	  "eyeColor": "green",
	  "balance": 2845.05,
	  "registered": "2014-01-12T09:04:56 -01:00",
	  "tags": ["exercitation", "pariatur"]
	}, {
	  "name": "Powers Cortez",
	  "gender": "male",
	  "age": 34,
	  "eyeColor": "blue",
	  "balance": 2790.33,
	  "registered": "2015-07-18T01:56:29 -02:00",
	  "tags": ["exercitation", "in", "magna"]
	}, {
	  "name": "Nichole York",
	  "gender": "female",
	  "age": 25,
	  "eyeColor": "brown",
	  "balance": 3653.84,
	  "registered": "2014-06-09T01:45:58 -02:00",
	  "tags": ["proident", "ipsum"]
	}, {
	  "name": "Patty Carney",
	  "gender": "female",
	  "age": 21,
	  "eyeColor": "blue",
	  "balance": 3988.23,
	  "registered": "2016-04-04T02:55:48 -02:00",
	  "tags": ["dolor", "do", "in", "ex", "nostrud"]
	}, {
	  "name": "Gillespie Hanson",
	  "gender": "male",
	  "age": 21,
	  "eyeColor": "green",
	  "balance": 1155.12,
	  "registered": "2015-05-14T05:11:53 -02:00",
	  "tags": ["dolor", "eiusmod", "duis", "enim"]
	}, {
	  "name": "Joyner Oconnor",
	  "gender": "male",
	  "age": 29,
	  "eyeColor": "brown",
	  "balance": 1115.14,
	  "registered": "2016-01-30T04:12:40 -01:00",
	  "tags": ["officia", "culpa", "veniam", "nulla"]
	}, {
	  "name": "Mathews Castaneda",
	  "gender": "male",
	  "age": 40,
	  "eyeColor": "brown",
	  "balance": 2539.67,
	  "registered": "2014-03-02T03:54:53 -01:00",
	  "tags": ["duis", "ex"]
	}, {
	  "name": "Miranda Burke",
	  "gender": "male",
	  "age": 28,
	  "eyeColor": "blue",
	  "balance": 3191,
	  "registered": "2016-01-25T11:11:29 -01:00",
	  "tags": ["minim", "Lorem", "pariatur", "exercitation"]
	}, {
	  "name": "Meyer Kemp",
	  "gender": "male",
	  "age": 31,
	  "eyeColor": "blue",
	  "balance": 2646.05,
	  "registered": "2016-02-21T07:25:16 -01:00",
	  "tags": ["ea", "consequat"]
	}, {
	  "name": "Roberson Hooper",
	  "gender": "male",
	  "age": 21,
	  "eyeColor": "blue",
	  "balance": 3503.62,
	  "registered": "2016-05-11T04:00:32 -02:00",
	  "tags": ["Lorem", "culpa", "elit", "occaecat"]
	}, {
	  "name": "Ana Sanders",
	  "gender": "female",
	  "age": 37,
	  "eyeColor": "brown",
	  "balance": 1097.07,
	  "registered": "2015-02-23T02:26:51 -01:00",
	  "tags": ["Lorem", "deserunt", "sit", "nostrud"]
	}, {
	  "name": "Henrietta Guerra",
	  "gender": "female",
	  "age": 23,
	  "eyeColor": "blue",
	  "balance": 3658.3,
	  "registered": "2015-10-04T09:39:05 -02:00",
	  "tags": ["do", "duis", "incididunt", "labore"]
	}, {
	  "name": "Peters Gregory",
	  "gender": "male",
	  "age": 33,
	  "eyeColor": "brown",
	  "balance": 1256.64,
	  "registered": "2014-02-24T02:34:43 -01:00",
	  "tags": ["commodo", "cupidatat", "esse"]
	}, {
	  "name": "Tonya Leonard",
	  "gender": "female",
	  "age": 23,
	  "eyeColor": "green",
	  "balance": 2554.89,
	  "registered": "2016-08-02T09:19:50 -02:00",
	  "tags": ["laborum", "cupidatat", "sunt", "in", "consequat"]
	}, {
	  "name": "Vaughan Holland",
	  "gender": "male",
	  "age": 26,
	  "eyeColor": "blue",
	  "balance": 1521.17,
	  "registered": "2015-05-30T05:15:58 -02:00",
	  "tags": ["ipsum", "voluptate", "reprehenderit", "cillum", "pariatur"]
	}, {
	  "name": "Maricela Manning",
	  "gender": "female",
	  "age": 27,
	  "eyeColor": "brown",
	  "balance": 3738.72,
	  "registered": "2015-03-31T01:44:03 -02:00",
	  "tags": ["velit", "aute", "reprehenderit", "est"]
	}, {
	  "name": "Bullock Simmons",
	  "gender": "male",
	  "age": 21,
	  "eyeColor": "green",
	  "balance": 3006.02,
	  "registered": "2014-04-16T01:00:30 -02:00",
	  "tags": ["dolore", "occaecat", "ullamco", "aliqua"]
	}, {
	  "name": "Jacqueline Tillman",
	  "gender": "female",
	  "age": 20,
	  "eyeColor": "brown",
	  "balance": 2584.71,
	  "registered": "2014-07-22T03:57:16 -02:00",
	  "tags": ["mollit", "excepteur"]
	}, {
	  "name": "Eliza Porter",
	  "gender": "female",
	  "age": 23,
	  "eyeColor": "green",
	  "balance": 3029.55,
	  "registered": "2015-07-26T08:52:43 -02:00",
	  "tags": ["elit", "tempor", "dolor", "consequat"]
	}, {
	  "name": "Figueroa Mejia",
	  "gender": "male",
	  "age": 22,
	  "eyeColor": "green",
	  "balance": 3263.04,
	  "registered": "2014-08-03T08:21:16 -02:00",
	  "tags": ["nostrud", "esse"]
	}, {
	  "name": "Bonita Webb",
	  "gender": "female",
	  "age": 39,
	  "eyeColor": "blue",
	  "balance": 2137.15,
	  "registered": "2016-07-27T01:03:08 -02:00",
	  "tags": ["culpa", "enim"]
	}, {
	  "name": "Simpson Robles",
	  "gender": "male",
	  "age": 27,
	  "eyeColor": "brown",
	  "balance": 3668.56,
	  "registered": "2014-11-19T10:10:27 -01:00",
	  "tags": ["deserunt", "eu", "aliqua", "non"]
	}, {
	  "name": "Hogan Pate",
	  "gender": "male",
	  "age": 37,
	  "eyeColor": "blue",
	  "balance": 1224.07,
	  "registered": "2014-06-28T06:43:21 -02:00",
	  "tags": ["eiusmod", "velit", "irure", "laborum"]
	}, {
	  "name": "Nellie Mathews",
	  "gender": "female",
	  "age": 21,
	  "eyeColor": "brown",
	  "balance": 3237.65,
	  "registered": "2014-03-29T08:11:19 -01:00",
	  "tags": ["tempor", "aute", "ullamco", "labore"]
	}, {
	  "name": "Vicky Morrow",
	  "gender": "female",
	  "age": 38,
	  "eyeColor": "brown",
	  "balance": 3770.38,
	  "registered": "2016-02-16T11:03:41 -01:00",
	  "tags": ["labore", "pariatur"]
	}, {
	  "name": "Sharon Shepherd",
	  "gender": "female",
	  "age": 23,
	  "eyeColor": "green",
	  "balance": 3375.04,
	  "registered": "2016-01-08T09:10:23 -01:00",
	  "tags": ["veniam", "pariatur"]
	}, {
	  "name": "Park Craig",
	  "gender": "male",
	  "age": 20,
	  "eyeColor": "brown",
	  "balance": 2402.95,
	  "registered": "2014-07-11T11:39:39 -02:00",
	  "tags": ["labore", "deserunt", "officia", "do"]
	}, {
	  "name": "Scott Juarez",
	  "gender": "male",
	  "age": 24,
	  "eyeColor": "green",
	  "balance": 1910.68,
	  "registered": "2015-07-28T02:35:51 -02:00",
	  "tags": ["anim", "aute", "est", "fugiat", "fugiat"]
	}];
	
	if (( false ? "undefined" : _typeof(exports)) === 'object' && ( false ? "undefined" : _typeof(module)) === 'object') {
	  module.exports = sampleData;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactTisch = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DataManager = function () {
	    /*
	     * Very basic example for implementing your own data manager
	     */
	
	    function DataManager() {
	        _classCallCheck(this, DataManager);
	
	        this.data = [{ index: 0, data: { name: 'Joe' } }, { index: 1, data: { name: 'Mike' } }];
	    }
	
	    _createClass(DataManager, [{
	        key: "initialize",
	        value: function initialize(columns, onNewDataReceived) {
	            /*
	             * Called when the table is mounted
	             */
	        }
	    }, {
	        key: "getData",
	        value: function getData(state) {
	            /*
	             * Called when the table state changes.
	             * For async data fetching, return null and call onNewDataReceived
	             * when the new data is ready
	             */
	            return {
	                itemCount: this.data.length,
	                filterOptions: [[]],
	                visibleRows: this.data
	            };
	        }
	    }]);
	
	    return DataManager;
	}();
	
	var dataManager = new DataManager();
	
	var Sample2 = function Sample2() {
	    return _react2.default.createElement(
	        _reactTisch.Table,
	        { dataManager: dataManager },
	        _react2.default.createElement(
	            _reactTisch.Column,
	            { value: function value(row) {
	                    return row.name;
	                } },
	            "Name"
	        )
	    );
	};
	
	exports.default = Sample2;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=demo.js.map