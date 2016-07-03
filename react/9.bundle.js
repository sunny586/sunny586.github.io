webpackJsonp([9],{

/***/ 295:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var circleList = [{
		name: 'HTML5', id: 'html5', progress: 80, /*default: 100*/duration: 2000, /*default: 1000*/color: 'red', /* default: 'rgb(52, 145, 204)'*/bgColor: 'green', /*default: 'rgb(230, 230, 230)'*/textColor: 'blue', /* default: 'black'*/progressWidth: 0.15, /*default: 0.25 (r)*/fontScale: 0.5, /*default: 0.4 (r)*/toFixed: 1 /*default: 0 */
	}, {
		name: 'CSS3', id: 'css3', progress: 80, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}, {
		name: 'jQuery', id: 'jQuery', progress: 90, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}, {
		name: 'javaScript', id: 'javaScript', progress: 85, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}, {
		name: 'AngularJS', id: 'AngularJS', progress: 85, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}, {
		name: 'Ionic', id: 'Ionic', progress: 80, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}, {
		name: 'Bootstrap', id: 'Bootstrap', progress: 85, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}, {
		name: 'Node.js', id: 'Node', progress: 80, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}, {
		name: 'gulp', id: 'gulp', progress: 80, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}, {
		name: 'Git', id: 'Git', progress: 80, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}, {
		name: 'Github', id: 'github', progress: 80, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}, {
		name: 'React', id: 'React', progress: 80, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}, {
		name: 'Vue', id: 'Vue', progress: 80, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}, {
		name: 'webpack', id: 'webpack', progress: 80, duration: 2000, color: 'red', bgColor: 'green', textColor: 'blue', progressWidth: 0.15, fontScale: 0.5, toFixed: 1
	}];

	var Skills = _react2['default'].createClass({
		displayName: 'Skills',

		render: function render() {
			var items = circleList.map(function (item, i) {
				return _react2['default'].createElement(
					'div',
					{ key: item.id, className: 'col-md-4 col-sm-6 text-center' },
					_react2['default'].createElement('canvas', { id: item.id, width: '200', height: '200' }),
					_react2['default'].createElement(
						'h4',
						null,
						item.name
					)
				);
			});
			return _react2['default'].createElement(
				'div',
				{ className: 'container' },
				_react2['default'].createElement(
					'div',
					{ className: 'section-title text-center center' },
					_react2['default'].createElement(
						'h2',
						null,
						'我的技能'
					),
					_react2['default'].createElement('hr', null)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'row' },
					items
				)
			);
		},
		componentDidMount: function componentDidMount() {
			circleList.map(function (item, i) {
				circleProgress(item);
			});
		}
	});

	exports['default'] = Skills;
	module.exports = exports['default'];

/***/ }

});