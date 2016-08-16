(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("ReactBootstrap"));
	else if(typeof define === 'function' && define.amd)
		define("ReactTisch", ["React", "ReactDOM", "ReactBootstrap"], factory);
	else if(typeof exports === 'object')
		exports["ReactTisch"] = factory(require("React"), require("ReactDOM"), require("ReactBootstrap"));
	else
		root["ReactTisch"] = factory(root["React"], root["ReactDOM"], root["ReactBootstrap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Column = exports.Table = undefined;
	
	var _TableController = __webpack_require__(1);
	
	var _TableController2 = _interopRequireDefault(_TableController);
	
	var _Column = __webpack_require__(7);
	
	var _Column2 = _interopRequireDefault(_Column);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Table = _TableController2.default;
	exports.Column = _Column2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(3);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _TablePresentation = __webpack_require__(4);
	
	var _TablePresentation2 = _interopRequireDefault(_TablePresentation);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function componentToText(component) {
	    if (!_react2.default.isValidElement(component)) {
	        return component;
	    }
	    var div = document.createElement("DIV");
	    _reactDom2.default.render(component, div);
	    return div.innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
	}
	
	function getRawCellValue(column, row) {
	    if (column.props.rawValue) {
	        return column.props.rawValue(row);
	    } else if (column.props.value) {
	        return componentToText(column.props.value(row));
	    }
	    return null;
	}
	
	var TableController = function (_React$Component) {
	    _inherits(TableController, _React$Component);
	
	    function TableController() {
	        var _Object$getPrototypeO;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, TableController);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TableController)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            valuesByColumn: [],
	            valuesByRow: [],
	            uniqueValues: [],
	            selectedFilters: [],
	            sortColumn: 0,
	            sortOrder: 1,
	            itemsPerPage: 25,
	            activePage: 1,
	            searchText: ''
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(TableController, [{
	        key: "setData",
	        value: function setData(data) {
	            if (!data) {
	                return;
	            }
	
	            // Precompute value representations that are convenient for sorting and filtering
	
	            var columns = this.props.children,
	                valuesByColumn = columns.map(function (column) {
	                return [];
	            }),
	                uniqueValues = columns.map(function (column) {
	                return Object();
	            }),
	                valuesByRow = void 0;
	
	            valuesByRow = data.map(function (row, i) {
	                return columns.map(function (column, j) {
	                    var value = getRawCellValue(column, row);
	                    valuesByColumn[j].push({
	                        rowIndex: i,
	                        value: value
	                    });
	                    uniqueValues[j][value] = 1;
	                    return value;
	                });
	            }.bind(this));
	
	            valuesByColumn.forEach(function (values) {
	                return values.sort(function (a, b) {
	                    return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
	                });
	            });
	
	            uniqueValues = uniqueValues.map(function (values) {
	                return Object.keys(values);
	            });
	
	            this.setState({
	                valuesByColumn: valuesByColumn,
	                valuesByRow: valuesByRow,
	                uniqueValues: uniqueValues
	            });
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            this.setData(nextProps.data);
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            this.setData(this.props.data);
	        }
	    }, {
	        key: "doesRowMatchSearch",
	        value: function doesRowMatchSearch(rowIndex) {
	            var _state = this.state;
	            var valuesByRow = _state.valuesByRow;
	            var searchText = _state.searchText;
	            var searchWords = searchText.toLowerCase().split(/\s+/g);
	            var rowWords = valuesByRow[rowIndex].join(" ").toLowerCase().split(/\s+/g);
	
	            for (var j = 0; j < searchWords.length; j++) {
	                var searchWord = searchWords[j],
	                    i = void 0;
	                for (i = 0; i < rowWords.length; i++) {
	                    if (rowWords[i].indexOf(searchWord) >= 0) {
	                        break;
	                    }
	                }
	                if (i === rowWords.length) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }, {
	        key: "doesRowMatchFilters",
	        value: function doesRowMatchFilters(rowIndex) {
	            var _state2 = this.state;
	            var valuesByRow = _state2.valuesByRow;
	            var selectedFilters = _state2.selectedFilters;
	            var textValues = valuesByRow[rowIndex];
	
	            for (var i = 0; i < textValues.length; i++) {
	                var filterValue = selectedFilters[i];
	                if (filterValue !== '' && filterValue !== undefined && filterValue != textValues[i]) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }, {
	        key: "sortedRowIndexes",
	        value: function sortedRowIndexes() {
	            var _state3 = this.state;
	            var valuesByColumn = _state3.valuesByColumn;
	            var sortColumn = _state3.sortColumn;
	            var sortOrder = _state3.sortOrder;
	            var sortedValues = valuesByColumn[sortColumn] || [];
	            var sortedRowIndexes = [];
	            if (sortOrder === 1) {
	                for (var i = 0; i < sortedValues.length; i++) {
	                    sortedRowIndexes.push(sortedValues[i].rowIndex);
	                }
	            } else {
	                for (var _i = sortedValues.length - 1; _i >= 0; _i--) {
	                    sortedRowIndexes.push(sortedValues[_i].rowIndex);
	                }
	            }
	            return sortedRowIndexes;
	        }
	    }, {
	        key: "computeSortedAndFilteredRows",
	        value: function computeSortedAndFilteredRows() {
	            var _this2 = this;
	
	            return this.sortedRowIndexes().filter(function (rowIndex) {
	                return _this2.doesRowMatchFilters(rowIndex);
	            }).filter(function (rowIndex) {
	                return _this2.doesRowMatchSearch(rowIndex);
	            });
	        }
	    }, {
	        key: "paginatedRows",
	        value: function paginatedRows(sortedAndFilteredRowIndexes) {
	            var data = this.props.data;
	            var _state4 = this.state;
	            var activePage = _state4.activePage;
	            var itemsPerPage = _state4.itemsPerPage;
	
	
	            return sortedAndFilteredRowIndexes.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage).map(function (rowIndex) {
	                return data[rowIndex];
	            });
	        }
	    }, {
	        key: "pageCount",
	        value: function pageCount(itemCount) {
	            var itemsPerPage = this.state.itemsPerPage;
	
	            return Math.ceil(itemCount / itemsPerPage);
	        }
	    }, {
	        key: "onSort",
	        value: function onSort(sortColumn, sortOrder) {
	            this.setState({
	                sortColumn: sortColumn,
	                sortOrder: sortOrder
	            });
	        }
	    }, {
	        key: "onFilter",
	        value: function onFilter(selectedFilters) {
	            this.setState({
	                selectedFilters: selectedFilters
	            });
	        }
	    }, {
	        key: "onPageSelect",
	        value: function onPageSelect(activePage) {
	            this.setState({ activePage: activePage });
	        }
	    }, {
	        key: "onSearch",
	        value: function onSearch(value) {
	            this.setState({ searchText: value });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var sortedAndFilteredRowIndexes = this.computeSortedAndFilteredRows();
	
	            return _react2.default.createElement(
	                _TablePresentation2.default,
	                {
	                    filterOptions: this.state.uniqueValues,
	                    sortColumn: this.state.sortColumn,
	                    sortOrder: this.state.sortOrder,
	                    selectedFilters: this.state.selectedFilters,
	                    activePage: this.state.activePage,
	                    searchText: this.state.searchText,
	                    pageCount: this.pageCount(sortedAndFilteredRowIndexes.length),
	
	                    onSearch: this.onSearch.bind(this),
	                    onSort: this.onSort.bind(this),
	                    onFilter: this.onFilter.bind(this),
	                    onPageSelect: this.onPageSelect.bind(this),
	
	                    visibleRows: this.paginatedRows(sortedAndFilteredRowIndexes)
	                },
	                this.props.children
	            );
	        }
	    }]);
	
	    return TableController;
	}(_react2.default.Component);
	
	TableController.propTypes = {
	    data: _react2.default.PropTypes.array,
	    children: _react2.default.PropTypes.array
	};
	exports.default = TableController;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _Filter = __webpack_require__(6);
	
	var _Filter2 = _interopRequireDefault(_Filter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TablePresentation = function (_React$Component) {
	    _inherits(TablePresentation, _React$Component);
	
	    function TablePresentation() {
	        _classCallCheck(this, TablePresentation);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TablePresentation).apply(this, arguments));
	    }
	
	    _createClass(TablePresentation, [{
	        key: "onFilterChange",
	        value: function onFilterChange(event, columnIndex) {
	            var selectedFilters = this.props.selectedFilters.slice(); // create a copy: can't mutate props
	            selectedFilters[columnIndex] = event.target.value;
	            this.props.onFilter(selectedFilters);
	        }
	    }, {
	        key: "onSearch",
	        value: function onSearch(event) {
	            this.props.onSearch(event.target.value);
	        }
	    }, {
	        key: "filter",
	        value: function filter(column, i) {
	            var _this2 = this;
	
	            var filterOptions = this.props.filterOptions[i] || [];
	
	            return _react2.default.createElement(_Filter2.default, {
	                key: i,
	                filter: column.props.filter,
	                filterOptions: filterOptions,
	                onChange: function onChange(event) {
	                    return _this2.onFilterChange(event, i);
	                }
	            });
	        }
	    }, {
	        key: "filters",
	        value: function filters() {
	            var children = this.props.children;
	
	            return children.map(this.filter.bind(this));
	        }
	    }, {
	        key: "dataCell",
	        value: function dataCell(row, column, i) {
	            var fn = column.props.value;
	            return _react2.default.createElement(
	                "td",
	                { key: i },
	                fn ? fn(row) : ''
	            );
	        }
	    }, {
	        key: "dataRow",
	        value: function dataRow(row, i) {
	            var _this3 = this;
	
	            return _react2.default.createElement(
	                "tr",
	                { key: i },
	                this.props.children.map(function (column, i) {
	                    return _this3.dataCell(row, column, i);
	                })
	            );
	        }
	    }, {
	        key: "dataRows",
	        value: function dataRows() {
	            return this.props.visibleRows.map(this.dataRow.bind(this));
	        }
	    }, {
	        key: "toggleSort",
	        value: function toggleSort(columnIndex) {
	            var sortOrder = columnIndex === this.props.sortColumn ? -this.props.sortOrder : 1;
	            this.props.onSort(columnIndex, sortOrder);
	        }
	    }, {
	        key: "header",
	        value: function header() {
	            var _this4 = this;
	
	            var children = this.props.children;
	
	            return children.map(function (child, i) {
	                return _react2.default.cloneElement(child, _extends({
	                    key: i,
	                    onToggleSort: function onToggleSort() {
	                        return _this4.toggleSort(i);
	                    },
	                    sortOrder: _this4.props.sortColumn === i ? _this4.props.sortOrder : 0
	                }, child.props));
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var header = this.header();
	            var filters = this.filters();
	            var dataRows = this.dataRows();
	            var _props = this.props;
	            var pageCount = _props.pageCount;
	            var activePage = _props.activePage;
	            var onPageSelect = _props.onPageSelect;
	            var searchText = _props.searchText;
	
	
	            return _react2.default.createElement(
	                _reactBootstrap.Grid,
	                { className: "form-inline" },
	                _react2.default.createElement(
	                    _reactBootstrap.Row,
	                    null,
	                    _react2.default.createElement(
	                        _reactBootstrap.Col,
	                        { md: 6 },
	                        "Show",
	                        ' ',
	                        _react2.default.createElement(
	                            _reactBootstrap.FormControl,
	                            { componentClass: "select", placeholder: "select", className: "input-sm" },
	                            _react2.default.createElement(
	                                "option",
	                                { value: "25" },
	                                "25"
	                            ),
	                            _react2.default.createElement(
	                                "option",
	                                { value: "50" },
	                                "50"
	                            ),
	                            _react2.default.createElement(
	                                "option",
	                                { value: "100" },
	                                "100"
	                            )
	                        ),
	                        ' ',
	                        "entries"
	                    ),
	                    _react2.default.createElement(
	                        _reactBootstrap.Col,
	                        { md: 6 },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "pull-right" },
	                            "Search:",
	                            ' ',
	                            _react2.default.createElement(_reactBootstrap.FormControl, {
	
	                                type: "text",
	                                value: searchText,
	                                placeholder: "",
	                                onChange: this.onSearch.bind(this)
	                            })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Row,
	                    null,
	                    _react2.default.createElement(
	                        _reactBootstrap.Col,
	                        { sm: 12 },
	                        _react2.default.createElement(
	                            _reactBootstrap.Table,
	                            { className: "table text-center table-condensed table-hover", cellSpacing: "0",
	                                id: "data-table" },
	                            _react2.default.createElement(
	                                "thead",
	                                null,
	                                _react2.default.createElement(
	                                    "tr",
	                                    null,
	                                    header
	                                ),
	                                _react2.default.createElement(
	                                    "tr",
	                                    null,
	                                    filters
	                                )
	                            ),
	                            _react2.default.createElement(
	                                "tbody",
	                                null,
	                                dataRows
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Row,
	                    null,
	                    _react2.default.createElement(
	                        _reactBootstrap.Col,
	                        { md: 6 },
	                        "Showing x to y of z entries"
	                    ),
	                    _react2.default.createElement(
	                        _reactBootstrap.Col,
	                        { md: 6 },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "pull-right" },
	                            _react2.default.createElement(_reactBootstrap.Pagination, {
	                                prev: true,
	                                next: true,
	                                ellipsis: true,
	                                boundaryLinks: true,
	                                items: pageCount,
	                                maxButtons: 5,
	                                activePage: activePage,
	                                onSelect: onPageSelect })
	                        )
	                    )
	                )
	            );
	        }
	    }]);
	
	    return TablePresentation;
	}(_react2.default.Component);
	
	TablePresentation.propTypes = {
	    children: _react2.default.PropTypes.node,
	
	    pageCount: _react2.default.PropTypes.number,
	    activePage: _react2.default.PropTypes.number,
	    filterOptions: _react2.default.PropTypes.array,
	    sortColumn: _react2.default.PropTypes.number,
	    sortOrder: _react2.default.PropTypes.number,
	    selectedFilters: _react2.default.PropTypes.array,
	    searchText: _react2.default.PropTypes.string,
	
	    visibleRows: _react2.default.PropTypes.array,
	
	    onSearch: _react2.default.PropTypes.func,
	    onPageSelect: _react2.default.PropTypes.func,
	    onSort: _react2.default.PropTypes.func,
	    onFilter: _react2.default.PropTypes.func
	};
	exports.default = TablePresentation;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Filter = function Filter(_ref) {
	    var filter = _ref.filter;
	    var filterOptions = _ref.filterOptions;
	    var onChange = _ref.onChange;
	    return filter ? _react2.default.createElement(
	        "th",
	        { className: "text-center" },
	        _react2.default.createElement(
	            "select",
	            { name: "", id: "", onChange: onChange, style: { width: '100%' } },
	            _react2.default.createElement("option", { value: "" }),
	            filterOptions.map(function (value) {
	                return _react2.default.createElement(
	                    "option",
	                    { key: value, value: value },
	                    value
	                );
	            })
	        )
	    ) : _react2.default.createElement("th", null);
	};
	
	exports.default = Filter;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactBootstrap = __webpack_require__(5);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sortGlyphs = {
	    0: 'sort',
	    1: 'sort-by-attributes',
	    '-1': 'sort-by-attributes-alt'
	};
	
	exports.default = function (_ref) {
	    var children = _ref.children;
	    var onToggleSort = _ref.onToggleSort;
	    var sortOrder = _ref.sortOrder;
	    return _react2.default.createElement(
	        "th",
	        { className: "text-center", onClick: onToggleSort },
	        children,
	        ' ',
	        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: sortGlyphs[sortOrder] })
	    );
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-tisch.js.map