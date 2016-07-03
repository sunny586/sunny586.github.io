webpackJsonp([13],{

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var Btn = (function (_React$Component) {
		_inherits(Btn, _React$Component);

		function Btn() {
			_classCallCheck(this, Btn);

			_get(Object.getPrototypeOf(Btn.prototype), "constructor", this).apply(this, arguments);
		}

		_createClass(Btn, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					{ className: "box" },
					_react2["default"].createElement(
						"div",
						{ className: "col-md-12" },
						_react2["default"].createElement(
							"h2",
							null,
							"按钮类型"
						),
						_react2["default"].createElement(
							"a",
							{ className: "btn btn-default", href: "javascript:;" },
							"（a）Link"
						),
						_react2["default"].createElement(
							"button",
							{ className: "btn btn-default", type: "submit" },
							"（button）Button"
						),
						_react2["default"].createElement(
							"h2",
							null,
							"按钮颜色"
						),
						_react2["default"].createElement(
							"button",
							{ type: "button", className: "btn btn-default" },
							"（默认样式）Default"
						),
						_react2["default"].createElement(
							"button",
							{ type: "button", className: "btn btn-primary" },
							"（首选项）Primary"
						),
						_react2["default"].createElement(
							"button",
							{ type: "button", className: "btn btn-success" },
							"（成功）Success"
						),
						_react2["default"].createElement(
							"button",
							{ type: "button", className: "btn btn-info" },
							"（一般信息）Info"
						),
						_react2["default"].createElement(
							"button",
							{ type: "button", className: "btn btn-warning" },
							"（警告）Warning"
						),
						_react2["default"].createElement(
							"button",
							{ type: "button", className: "btn btn-danger" },
							"（危险）Danger"
						),
						_react2["default"].createElement(
							"button",
							{ type: "button", className: "btn btn-link" },
							"（链接）Link"
						),
						_react2["default"].createElement(
							"h2",
							null,
							"按钮大小"
						),
						_react2["default"].createElement(
							"p",
							null,
							_react2["default"].createElement(
								"button",
								{ type: "button", className: "btn btn-primary btn-lg" },
								"（大按钮）Large button"
							),
							_react2["default"].createElement(
								"button",
								{ type: "button", className: "btn btn-default btn-lg" },
								"（大按钮）Large button"
							)
						),
						_react2["default"].createElement(
							"p",
							null,
							_react2["default"].createElement(
								"button",
								{ type: "button", className: "btn btn-primary" },
								"（默认尺寸）Default button"
							),
							_react2["default"].createElement(
								"button",
								{ type: "button", className: "btn btn-default" },
								"（默认尺寸）Default button"
							)
						),
						_react2["default"].createElement(
							"p",
							null,
							_react2["default"].createElement(
								"button",
								{ type: "button", className: "btn btn-primary btn-sm" },
								"（小按钮）Small button"
							),
							_react2["default"].createElement(
								"button",
								{ type: "button", className: "btn btn-default btn-sm" },
								"（小按钮）Small button"
							)
						),
						_react2["default"].createElement(
							"p",
							null,
							_react2["default"].createElement(
								"button",
								{ type: "button", className: "btn btn-primary btn-xs" },
								"（超小尺寸）Extra small button"
							),
							_react2["default"].createElement(
								"button",
								{ type: "button", className: "btn btn-default btn-xs" },
								"（超小尺寸）Extra small button"
							)
						),
						_react2["default"].createElement(
							"h2",
							null,
							"块级按钮：添加 .btn-block 类可以将其拉伸至父元素100%的宽度"
						),
						_react2["default"].createElement(
							"button",
							{ type: "button", className: "btn btn-primary btn-lg btn-block" },
							"（块级元素）Block level button"
						),
						_react2["default"].createElement(
							"button",
							{ type: "button", className: "btn btn-default btn-lg btn-block" },
							"（块级元素）Block level button"
						),
						_react2["default"].createElement(
							"h2",
							null,
							"实例应用"
						),
						_react2["default"].createElement(
							"button",
							{ type: "button", className: "btn btn-primary active" },
							"Single Toggle"
						),
						_react2["default"].createElement(
							"div",
							{ className: "btn-group" },
							_react2["default"].createElement(
								"label",
								{ className: "btn btn-primary ng-pristine" },
								"Left"
							),
							_react2["default"].createElement(
								"label",
								{ className: "btn btn-primary ng-pristine active" },
								"Middle"
							),
							_react2["default"].createElement(
								"label",
								{ className: "btn btn-primary ng-pristine" },
								"Right"
							)
						),
						_react2["default"].createElement(
							"h4",
							null,
							"按钮组"
						),
						_react2["default"].createElement(
							"div",
							{ className: "btn-group" },
							_react2["default"].createElement(
								"label",
								{ className: "btn btn-primary", "btn-radio": "'Left'" },
								"Left"
							),
							_react2["default"].createElement(
								"label",
								{ className: "btn btn-primary active", "btn-radio": "'Middle'" },
								"Middle"
							),
							_react2["default"].createElement(
								"label",
								{ className: "btn btn-primary", "btn-radio": "'Right'" },
								"Right"
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "btn-group", style: { marginLeft: '20px' } },
							_react2["default"].createElement(
								"label",
								{ className: "btn btn-success", "btn-radio": "'Left'" },
								"Left"
							),
							_react2["default"].createElement(
								"label",
								{ className: "btn btn-success active", "btn-radio": "'Middle'" },
								"Middle"
							),
							_react2["default"].createElement(
								"label",
								{ className: "btn btn-success", "btn-radio": "'Right'" },
								"Right"
							)
						)
					)
				);
			}
		}]);

		return Btn;
	})(_react2["default"].Component);

	module.exports = Btn;

/***/ }

});