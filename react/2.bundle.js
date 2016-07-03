webpackJsonp([2],{

/***/ 279:
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

	var Signin = (function (_React$Component) {
	  _inherits(Signin, _React$Component);

	  function Signin() {
	    _classCallCheck(this, Signin);

	    _get(Object.getPrototypeOf(Signin.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Signin, [{
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
	            '账号登录 ',
	            _react2['default'].createElement(
	              'a',
	              { href: 'javascript:;', className: 'fr' },
	              '立即注册'
	            )
	          ),
	          _react2['default'].createElement('input', { type: 'email', className: 'form-control', placeholder: '用户名', required: true, autofocus: true }),
	          _react2['default'].createElement('input', { type: 'password', className: 'form-control', placeholder: '密码', required: true }),
	          _react2['default'].createElement(
	            'div',
	            { className: 'checkbox' },
	            _react2['default'].createElement(
	              'label',
	              null,
	              _react2['default'].createElement('input', { type: 'checkbox', value: 'remember-me' }),
	              ' 自动登录'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/access/forget', className: 'fr' },
	              '忘记密码？'
	            )
	          ),
	          _react2['default'].createElement(
	            'button',
	            { className: 'btn btn-primary btn-sm btn-block', type: 'submit' },
	            '登录'
	          )
	        )
	      );
	    }
	  }]);

	  return Signin;
	})(_react2['default'].Component);

	module.exports = Signin;

/***/ }

});