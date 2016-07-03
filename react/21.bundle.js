webpackJsonp([21],{

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _history = __webpack_require__(232);

	var _history2 = _interopRequireDefault(_history);

	var PieExample = _react2['default'].createClass({
	  displayName: 'PieExample',

	  handleClick: function handleClick() {
	    this.props.history.replaceState(null, '/app/component/bubbleExample', { id: 123, name: 'zhangsan' });
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'box u-desc' },
	      'PieExample',
	      _react2['default'].createElement(
	        'button',
	        { className: 'btn btn-default', onClick: this.handleClick },
	        '确定'
	      )
	    );
	  }
	});

	exports['default'] = PieExample;
	module.exports = exports['default'];

/***/ }

});