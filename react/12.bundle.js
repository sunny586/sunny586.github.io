webpackJsonp([12],{

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(185);

	var checked = {
		paddingLeft: '10px',
		borderLeft: '2px solid #FFB300',
		color: '#FFB300',
		fontWeight: 'bold'
	};

	var Bootstrap = _react2['default'].createClass({
		displayName: 'Bootstrap',

		getInitialState: function getInitialState() {

			return {
				items: [{
					url: '/app/bootstrap/btn',
					name: '按钮',
					active: checked
				}, {
					url: '/app/bootstrap/table',
					name: '表格'
				}, {
					url: '/app/bootstrap/form',
					name: '表单'
				}, {
					url: '/app/bootstrap/alert',
					name: '警告框'
				}, {
					url: '/app/bootstrap/icon',
					name: '图标'
				}]
			};
		},
		componentWillMount: function componentWillMount() {
			var _this = this;

			if (this.props) {
				(function () {
					var pathname = _this.props.location.pathname;
					var _items = _this.state.items;
					if (pathname == '/app/bootstrap') pathname = '/app/bootstrap/btn';
					_items.map(function (item) {
						if (item.active) delete item.active;
						if (item.url === pathname) item['active'] = checked;
					});
					_this.setState({
						items: _items
					});
				})();
			}
		},
		handleClick: function handleClick(i) {
			var o = this.state.items;
			for (var k in o) o[k].active && delete o[k].active;
			o[i]['active'] = checked;
		},
		render: function render() {
			var self = this;
			var items = this.state.items.map(function (item, i) {
				return _react2['default'].createElement(
					'li',
					{ key: item.url, onClick: self.handleClick.bind(self, i) },
					_react2['default'].createElement(
						_reactRouter.Link,
						{ to: item.url, style: item.active || null },
						item.name
					)
				);
			});
			return _react2['default'].createElement(
				'div',
				{ className: 'row' },
				_react2['default'].createElement(
					'div',
					{ className: 'col-md-2  text-right' },
					_react2['default'].createElement(
						'h3',
						null,
						'Bootstrap示例'
					),
					_react2['default'].createElement(
						'ul',
						{ style: { padding: '10px 20px' }, className: 'bu-list' },
						items
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'col-md-10 animation-transition' },
					this.props.children
				)
			);
		}
	});
	exports['default'] = Bootstrap;
	module.exports = exports['default'];

/***/ }

});