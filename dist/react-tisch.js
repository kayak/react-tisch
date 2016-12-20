(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-bootstrap"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("ReactTisch", ["react", "react-bootstrap", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["ReactTisch"] = factory(require("react"), require("react-bootstrap"), require("react-dom"));
	else
		root["ReactTisch"] = factory(root["React"], root["ReactBootstrap"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
	exports.DataManager = exports.Column = exports.Table = undefined;
	
	var _TableController = __webpack_require__(1);
	
	var _TableController2 = _interopRequireDefault(_TableController);
	
	var _Column = __webpack_require__(10);
	
	var _Column2 = _interopRequireDefault(_Column);
	
	var _DataManager = __webpack_require__(8);
	
	var _DataManager2 = _interopRequireDefault(_DataManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Table = _TableController2.default;
	exports.Column = _Column2.default;
	exports.DataManager = _DataManager2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TablePresentation = __webpack_require__(3);
	
	var _TablePresentation2 = _interopRequireDefault(_TablePresentation);
	
	var _DataManager = __webpack_require__(8);
	
	var _DataManager2 = _interopRequireDefault(_DataManager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TableController = function (_React$Component) {
	    _inherits(TableController, _React$Component);
	
	    function TableController() {
	        var _ref;
	
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, TableController);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableController.__proto__ || Object.getPrototypeOf(TableController)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            selectedFilters: [],
	            sortColumn: 0,
	            sortOrder: 1,
	            itemsPerPage: 25,
	            activePage: 1,
	            searchText: '',
	            selectedRows: {},
	            canSelectRows: false,
	            forcedRedrawData: null
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    _createClass(TableController, [{
	        key: "updateStateFromProps",
	        value: function updateStateFromProps(props) {
	            var dataManager = props.dataManager || new _DataManager2.default(props.data || []),
	                columns = _react2.default.Children.toArray(this.props.children);
	            dataManager.initialize(columns, this.onDataUpdate.bind(this));
	            this.setState({ dataManager: dataManager });
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            this.updateStateFromProps(nextProps);
	        }
	    }, {
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            if (this.props.initialState) {
	                this.setState(this.props.initialState);
	            }
	
	            this.updateStateFromProps(this.props);
	        }
	    }, {
	        key: "_setState",
	        value: function _setState(newState) {
	            this.setState(_extends({
	                forcedRedrawData: null
	            }, newState));
	        }
	    }, {
	        key: "onSort",
	        value: function onSort(sortColumn, sortOrder) {
	            this._setState({ sortColumn: sortColumn, sortOrder: sortOrder });
	        }
	    }, {
	        key: "onFilter",
	        value: function onFilter(selectedFilters) {
	            this._setState({ selectedFilters: selectedFilters });
	        }
	    }, {
	        key: "onPageSelect",
	        value: function onPageSelect(activePage) {
	            this._setState({ activePage: activePage });
	        }
	    }, {
	        key: "onSearch",
	        value: function onSearch(searchText) {
	            this._setState({ searchText: searchText });
	        }
	    }, {
	        key: "onItemsPerPageSelect",
	        value: function onItemsPerPageSelect(itemsPerPage) {
	            this._setState({ itemsPerPage: itemsPerPage });
	        }
	    }, {
	        key: "onRowSelection",
	        value: function onRowSelection(selectedRows) {
	            if (this.state.canSelectRows) {
	                this._setState({ selectedRows: selectedRows });
	            }
	        }
	    }, {
	        key: "pageCount",
	        value: function pageCount(itemCount) {
	            var itemsPerPage = this.state.itemsPerPage;
	
	            return Math.ceil(itemCount / itemsPerPage);
	        }
	    }, {
	        key: "onDataUpdate",
	        value: function onDataUpdate(newData) {
	            this.setState({
	                forcedRedrawData: newData
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var data = this.state.forcedRedrawData || this.state.dataManager.getData(this.state);
	
	            return _react2.default.createElement(
	                _TablePresentation2.default,
	                {
	                    filterOptions: data.filterOptions,
	                    sortColumn: this.state.sortColumn,
	                    sortOrder: this.state.sortOrder,
	                    selectedFilters: this.state.selectedFilters,
	                    activePage: this.state.activePage,
	                    searchText: this.state.searchText,
	                    pageCount: this.pageCount(data.itemCount),
	                    itemsPerPage: this.state.itemsPerPage,
	                    selectedRows: this.state.selectedRows,
	                    itemCount: data.itemCount,
	
	                    onSearch: this.onSearch.bind(this),
	                    onSort: this.onSort.bind(this),
	                    onFilter: this.onFilter.bind(this),
	                    onPageSelect: this.onPageSelect.bind(this),
	                    onItemsPerPageSelect: this.onItemsPerPageSelect.bind(this),
	                    onRowSelection: this.onRowSelection.bind(this),
	
	                    visibleRows: data.visibleRows
	                },
	                this.props.children
	            );
	        }
	    }]);
	
	    return TableController;
	}(_react2.default.Component);
	
	TableController.propTypes = {
	    data: _react2.default.PropTypes.array,
	    dataManager: _react2.default.PropTypes.object,
	    children: _react2.default.PropTypes.node.isRequired,
	    initialState: _react2.default.PropTypes.object
	};
	exports.default = TableController;

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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactBootstrap = __webpack_require__(4);
	
	var _Filter = __webpack_require__(5);
	
	var _Filter2 = _interopRequireDefault(_Filter);
	
	var _TableHeader = __webpack_require__(6);
	
	var _TableHeader2 = _interopRequireDefault(_TableHeader);
	
	var _Body = __webpack_require__(7);
	
	var _Body2 = _interopRequireDefault(_Body);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TablePresentation = function (_React$Component) {
	    _inherits(TablePresentation, _React$Component);
	
	    function TablePresentation() {
	        _classCallCheck(this, TablePresentation);
	
	        return _possibleConstructorReturn(this, (TablePresentation.__proto__ || Object.getPrototypeOf(TablePresentation)).apply(this, arguments));
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
	        key: "onItemsPerPageSelect",
	        value: function onItemsPerPageSelect(event) {
	            this.props.onItemsPerPageSelect(parseInt(event.target.value));
	        }
	    }, {
	        key: "onRowToggle",
	        value: function onRowToggle(rowIndex, selected) {
	            var selectedRows = _extends({}, this.props.selectedRows, _defineProperty({}, rowIndex, selected));
	            this.props.onRowSelection(selectedRows);
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
	
	            return _react2.default.Children.map(children, this.filter.bind(this));
	        }
	    }, {
	        key: "shownEntriesText",
	        value: function shownEntriesText() {
	            var _props = this.props,
	                itemsPerPage = _props.itemsPerPage,
	                itemCount = _props.itemCount,
	                activePage = _props.activePage;
	
	            if (itemCount <= itemsPerPage) {
	                return "Showing " + itemCount + " of " + itemCount + " entries";
	            }
	
	            return "Showing " + ((activePage - 1) * itemsPerPage + 1) + " to " + activePage * itemsPerPage + " of " + itemCount + " entries";
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var filters = this.filters(),
	                _props2 = this.props,
	                pageCount = _props2.pageCount,
	                activePage = _props2.activePage,
	                onPageSelect = _props2.onPageSelect,
	                searchText = _props2.searchText,
	                sortColumn = _props2.sortColumn,
	                sortOrder = _props2.sortOrder,
	                onSort = _props2.onSort,
	                visibleRows = _props2.visibleRows,
	                selectedRows = _props2.selectedRows,
	                columns = _react2.default.Children.toArray(this.props.children);
	
	
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
	                            { componentClass: "select", placeholder: "select", defaultValue: "25",
	                                className: "input-sm select-entry-count",
	                                onChange: this.onItemsPerPageSelect.bind(this) },
	                            _react2.default.createElement(
	                                "option",
	                                { value: "10" },
	                                "10"
	                            ),
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
	                                _react2.default.createElement(_TableHeader2.default, {
	                                    onSort: onSort,
	                                    sortColumn: sortColumn,
	                                    sortOrder: sortOrder,
	                                    columns: columns }),
	                                _react2.default.createElement(
	                                    "tr",
	                                    null,
	                                    filters
	                                )
	                            ),
	                            _react2.default.createElement(_Body2.default, {
	                                visibleRows: visibleRows,
	                                selectedRows: selectedRows,
	                                onRowToggle: this.onRowToggle.bind(this),
	                                columns: columns })
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    _reactBootstrap.Row,
	                    null,
	                    _react2.default.createElement(
	                        _reactBootstrap.Col,
	                        { md: 6, className: "shown-entries" },
	                        this.shownEntriesText()
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
	    itemsPerPage: _react2.default.PropTypes.number,
	    itemCount: _react2.default.PropTypes.number,
	    selectedRows: _react2.default.PropTypes.object,
	
	    visibleRows: _react2.default.PropTypes.array,
	
	    onSearch: _react2.default.PropTypes.func,
	    onPageSelect: _react2.default.PropTypes.func,
	    onSort: _react2.default.PropTypes.func,
	    onFilter: _react2.default.PropTypes.func,
	    onItemsPerPageSelect: _react2.default.PropTypes.func,
	    onRowSelected: _react2.default.PropTypes.func
	};
	exports.default = TablePresentation;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Filter = function Filter(_ref) {
	    var filter = _ref.filter,
	        filterOptions = _ref.filterOptions,
	        onChange = _ref.onChange;
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TableHeader = function (_React$Component) {
	    _inherits(TableHeader, _React$Component);
	
	    function TableHeader() {
	        _classCallCheck(this, TableHeader);
	
	        return _possibleConstructorReturn(this, (TableHeader.__proto__ || Object.getPrototypeOf(TableHeader)).apply(this, arguments));
	    }
	
	    _createClass(TableHeader, [{
	        key: "onToggleSort",
	        value: function onToggleSort(columnIndex) {
	            var sortOrder = columnIndex === this.props.sortColumn ? -this.props.sortOrder : 1;
	            this.props.onSort(columnIndex, sortOrder);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _this2 = this;
	
	            var _props = this.props,
	                columns = _props.columns,
	                sortColumn = _props.sortColumn,
	                sortOrder = _props.sortOrder;
	
	
	            return _react2.default.createElement(
	                "tr",
	                null,
	                columns.map(function (child, i) {
	                    return _react2.default.cloneElement(child, _extends({
	                        key: i,
	                        onToggleSort: function onToggleSort() {
	                            return _this2.onToggleSort(i);
	                        },
	                        sortOrder: sortColumn === i ? sortOrder : 0
	                    }, child.props));
	                })
	            );
	        }
	    }]);
	
	    return TableHeader;
	}(_react2.default.Component);
	
	exports.default = TableHeader;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Cell = function Cell(_ref) {
	    var rowData = _ref.rowData,
	        column = _ref.column;
	
	    var fn = column.props.value;
	    return _react2.default.createElement(
	        'td',
	        null,
	        fn ? fn(rowData) : ''
	    );
	};
	
	var Row = function Row(_ref2) {
	    var columns = _ref2.columns,
	        row = _ref2.row,
	        selected = _ref2.selected,
	        onRowToggle = _ref2.onRowToggle;
	    return _react2.default.createElement(
	        'tr',
	        { className: selected ? 'info' : '', onClick: function onClick() {
	                return onRowToggle(row.index, !selected);
	            } },
	        columns.map(function (column, i) {
	            return _react2.default.createElement(Cell, { rowData: row.data, column: column, key: i });
	        })
	    );
	};
	
	var Body = function Body(_ref3) {
	    var visibleRows = _ref3.visibleRows,
	        columns = _ref3.columns,
	        selectedRows = _ref3.selectedRows,
	        onRowToggle = _ref3.onRowToggle;
	    return _react2.default.createElement(
	        'tbody',
	        null,
	        visibleRows.map(function (row, i) {
	            return _react2.default.createElement(Row, { key: i, row: row, columns: columns, selected: !!selectedRows[row.index],
	                onRowToggle: onRowToggle });
	        })
	    );
	};
	
	Body.Row = Row;
	Body.Cell = Cell;
	
	exports.default = Body;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(9);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
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
	
	var DataManager = function () {
	    function DataManager(data) {
	        _classCallCheck(this, DataManager);
	
	        this.data = data;
	        this.columns = null;
	        this.onNewDataReceived = null;
	    }
	
	    _createClass(DataManager, [{
	        key: "initialize",
	        value: function initialize(columns, onNewDataReceived) {
	            /*
	            This method is called by react-tisch once the table is initialized.
	            columns is a list of react element of type Column
	             */
	            this.columns = columns;
	            this.onNewDataReceived = onNewDataReceived;
	            this.precomputeDerivedData();
	        }
	    }, {
	        key: "precomputeDerivedData",
	        value: function precomputeDerivedData() {
	            // Pre-compute value representations that are convenient for sorting and filtering
	            if (!this.columns || !this.data) return;
	
	            var valuesByColumn = this.columns.map(function () {
	                return [];
	            }),
	                uniqueValues = this.columns.map(function () {
	                return Object();
	            }),
	                valuesByRow = void 0;
	
	            valuesByRow = this.data.map(function (row, i) {
	                return this.columns.map(function (column, j) {
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
	
	            this.itemCount = this.data.length;
	            this.valuesByColumn = valuesByColumn;
	            this.valuesByRow = valuesByRow;
	            this.uniqueValues = uniqueValues;
	        }
	    }, {
	        key: "doesRowMatchSearch",
	        value: function doesRowMatchSearch(rowIndex, searchText) {
	            var searchWords = searchText.toLowerCase().split(/\s+/g),
	                rowWords = this.valuesByRow[rowIndex].join(" ").toLowerCase().split(/\s+/g);
	
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
	        value: function doesRowMatchFilters(rowIndex, selectedFilters) {
	            var textValues = this.valuesByRow[rowIndex];
	
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
	        value: function sortedRowIndexes(sortColumn, sortOrder) {
	            var sortedValues = this.valuesByColumn[sortColumn] || [],
	                sortedRowIndexes = [];
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
	        key: "paginatedRows",
	        value: function paginatedRows(sortedAndFilteredRowIndexes, activePage, itemsPerPage) {
	            var data = this.data;
	
	            return sortedAndFilteredRowIndexes.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage).map(function (rowIndex) {
	                return {
	                    index: rowIndex,
	                    data: data[rowIndex]
	                };
	            });
	        }
	    }, {
	        key: "getVisibleRows",
	        value: function getVisibleRows(_ref) {
	            var _this = this;
	
	            var selectedFilters = _ref.selectedFilters,
	                sortColumn = _ref.sortColumn,
	                sortOrder = _ref.sortOrder,
	                itemsPerPage = _ref.itemsPerPage,
	                activePage = _ref.activePage,
	                searchText = _ref.searchText;
	
	            var sortedAndFilteredRowIndexes = this.sortedRowIndexes(sortColumn, sortOrder).filter(function (rowIndex) {
	                return _this.doesRowMatchFilters(rowIndex, selectedFilters);
	            }).filter(function (rowIndex) {
	                return _this.doesRowMatchSearch(rowIndex, searchText);
	            });
	
	            return this.paginatedRows(sortedAndFilteredRowIndexes, activePage, itemsPerPage);
	        }
	    }, {
	        key: "getData",
	        value: function getData(state) {
	            /*
	             * Required public member of DataManager.
	             * It doesn't have to return data: for an async data manager, it can call the onNewDataReceived callback
	             * passed in the `initialize` method.
	             */
	            return {
	                visibleRows: this.getVisibleRows(state),
	                itemCount: this.itemCount,
	                filterOptions: this.uniqueValues
	            };
	        }
	    }]);
	
	    return DataManager;
	}();
	
	exports.default = DataManager;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _reactBootstrap = __webpack_require__(4);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sortGlyphs = {
	    0: 'sort',
	    1: 'sort-by-attributes',
	    '-1': 'sort-by-attributes-alt'
	};
	
	exports.default = function (_ref) {
	    var children = _ref.children,
	        onToggleSort = _ref.onToggleSort,
	        sortOrder = _ref.sortOrder;
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