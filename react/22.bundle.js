webpackJsonp([22],{

/***/ 728:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var BubbleExample = _react2["default"].createClass({
	  displayName: "BubbleExample",

	  componentDidMount: function componentDidMount() {

	    console.log(this.props.location.query);
	  },
	  render: function render() {
	    return _react2["default"].createElement(
	      "div",
	      { className: "box u-desc" },
	      "BubbleExample"
	    );
	  }
	});

	exports["default"] = BubbleExample;
	module.exports = exports["default"];

/***/ }

});