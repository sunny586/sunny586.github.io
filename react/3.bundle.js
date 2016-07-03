webpackJsonp([3],{

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(185);

	var Forget = (function (_React$Component) {
	  _inherits(Forget, _React$Component);

	  function Forget() {
	    _classCallCheck(this, Forget);

	    _get(Object.getPrototypeOf(Forget.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Forget, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'form',
	          { className: 'form-access' },
	          _react2['default'].createElement(
	            'h5',
	            { className: 'form-access-heading' },
	            '忘记密码？'
	          ),
	          _react2['default'].createElement(
	            'p',
	            { style: { marginTop: '16px' } },
	            '请填写您需要找回的帐号:'
	          ),
	          _react2['default'].createElement('input', { type: 'text', className: 'form-control', placeholder: '用户名/手机号', style: { marginTop: '40px' } }),
	          _react2['default'].createElement(
	            'button',
	            { className: 'btn btn-primary btn-sm btn-block', type: 'submit', style: { marginTop: '20px' } },
	            '确定'
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'text-center c-w', style: { marginTop: '40px' } },
	          '返回到 ',
	          _react2['default'].createElement(
	            _reactRouter.Link,
	            { to: '/access/signin', className: 'c-w' },
	            '登录'
	          )
	        )
	      );
	    }
	  }]);

	  return Forget;
	})(_react2['default'].Component);

	module.exports = Forget;

/***/ }

});