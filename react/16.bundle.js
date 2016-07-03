webpackJsonp([16],{

/***/ 310:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var Icon = _react2['default'].createClass({
	  displayName: 'Icon',

	  render: function render() {
	    var color = {
	      color: 'rgb(76, 217, 100)',
	      marginLeft: '10px'
	    };
	    return _react2['default'].createElement(
	      'div',
	      { className: 'box' },
	      _react2['default'].createElement(
	        'h1',
	        null,
	        '图标'
	      ),
	      _react2['default'].createElement('i', { className: 'fa fa-weixin fa-2x', style: color }),
	      _react2['default'].createElement('i', { className: 'fa fa-toggle-on fa-2x', style: color }),
	      _react2['default'].createElement('i', { className: 'fa fa-hand-o-right fa-2x', style: color }),
	      _react2['default'].createElement('i', { className: 'fa fa-check-circle fa-2x', style: color }),
	      _react2['default'].createElement('i', { className: 'fa fa-edit fa-2x', style: color }),
	      _react2['default'].createElement('i', { className: 'fa fa-bell fa-2x', style: color }),
	      _react2['default'].createElement(
	        'div',
	        { style: { marginTop: '10px' } },
	        _react2['default'].createElement(
	          'a',
	          { href: 'http://fontawesome.io/icons/', target: '_blank' },
	          '更多图标'
	        )
	      )
	    );
	  }
	});
	exports['default'] = Icon;
	module.exports = exports['default'];

/***/ }

});