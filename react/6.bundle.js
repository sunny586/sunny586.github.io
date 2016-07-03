webpackJsonp([6],{

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	Object.defineProperty(exports, '__esModule', {
			value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(285);

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(185);

	var Home = _react2['default'].createClass({
			displayName: 'Home',

			render: function render() {
					return _react2['default'].createElement(
							'div',
							{ className: 'intro' },
							_react2['default'].createElement(
									'div',
									{ className: 'intro-body' },
									_react2['default'].createElement(
											'div',
											{ className: 'container' },
											_react2['default'].createElement(
													'div',
													{ className: 'row' },
													_react2['default'].createElement(
															'div',
															{ className: 'intro-text' },
															_react2['default'].createElement(
																	'h1',
																	null,
																	'Hello, 我叫张宇'
															),
															_react2['default'].createElement(
																	'p',
																	null,
																	'前端开发工程师，热爱前端开发，敢于尝试新技术，新挑战。'
															),
															_react2['default'].createElement(
																	_reactRouter.Link,
																	{ to: '/app/dashboard/about', className: 'btn btn-default btn-lg  btn-home' },
																	'关于我'
															),
															_react2['default'].createElement(
																	_reactRouter.Link,
																	{ to: '/app/dashboard/product', className: 'btn btn-default btn-lg  btn-home' },
																	'我的作品'
															)
													)
											)
									)
							)
					);
			},
			componentDidMount: function componentDidMount() {
					jQuery('.intro').css('height', jQuery('body').height() - 50 + 'px');
			}
	});

	exports['default'] = Home;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(286);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./home.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./home.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".intro {\r\n    display: table;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 100px 0;\r\n    text-align: center;\r\n    color: #fff;\r\n    background: url(" + __webpack_require__(287) + ") no-repeat center center;\r\n    background-color: #000;\r\n    -webkit-background-size: cover;\r\n    -moz-background-size: cover;\r\n    background-size: cover;\r\n    -o-background-size: cover;\r\n}\r\n.intro .intro-body {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    color: #fff;\r\n}\r\n.intro .intro-body .intro-text {\r\n    font-size: 18px;\r\n}\r\n.btn-home {\r\n    margin: 0 10px;\r\n    border: none !important;\r\n}\r\n.btn-home:hover {\r\n    background-color: #2196f3;\r\n    color: #fff;\r\n    border: none;\r\n}", ""]);

	// exports


/***/ },

/***/ 287:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "app/home/components/Dashboard/components/css/images/intro-bg.jpg";

/***/ }

});