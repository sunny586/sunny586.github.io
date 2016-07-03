webpackJsonp([8],{

/***/ 292:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(293);

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var __items = [{
		url: 'http://www.xiaopiaoyun.com',
		name: '小票去哪儿了',
		images: './app/images/product/01.jpg',
		type: 'angular-pc'
	}, {
		url: 'http://www.dzyouting.com',
		name: '大众游艇PC端',
		images: './app/images/product/02.jpg',
		type: 'pc'
	}, {
		url: 'http://m.dzyouting.com',
		name: '大众游艇移动端',
		images: './app/images/product/04.jpg',
		type: 'app'
	}, {
		url: 'http://weixin.jslife.com.cn:8500/jspsn/sy_html/map.html?from=JTC&openid=okhYWw-CnQ7Jq6lbBrqSKxevJttI&unionid=oUjGnjlozBRu4KIMKglbfZJdxnxY',
		name: '捷停车',
		images: './app/images/product/07.jpg',
		type: 'app'
	}, {
		url: 'http://www.viewmywarehouse.com/app/#/access/signin',
		name: 'warehouse',
		images: './app/images/product/08.jpg',
		type: 'angular-pc'
	}, {
		url: 'http://sunny586.github.io/angular/index.html',
		name: 'AngularJS组件库',
		images: './app/images/product/05.jpg',
		type: 'angular-pc'
	}];

	var __list = [{ filter: '*', cname: 'br', name: '全部', active: 'active' }, { filter: 'angular', cname: 'br', name: 'AngularJS' }, { filter: 'app', cname: 'br', name: '微信/移动端' }, { filter: 'pc', name: 'PC端' }];

	var Product = _react2['default'].createClass({
		displayName: 'Product',

		getInitialState: function getInitialState() {
			return {
				items: __items,
				list: __list
			};
		},

		handleClick: function handleClick(filter) {
			switch (filter) {
				case 'angular':
					this.setState({
						items: this.setProduct('angular'),
						list: __list
					});
					break;
				case 'app':
					this.setState({
						items: this.setProduct('app'),
						list: __list
					});
					break;
				case 'pc':
					this.setState({
						items: this.setProduct('pc'),
						list: __list
					});
					break;
				default:
					this.setState({
						items: __items,
						list: __list
					});
					break;
			}

			for (var k in __list) {
				if (__list[k].active) delete __list[k].active;
				if (__list[k].filter == filter) __list[k].active = 'active';
			}
		},
		setProduct: function setProduct(filetr) {
			var arr = [];
			for (var k in __items) {
				__items[k].type.split('-').map(function (item, i) {
					if (item == filetr) {
						arr.push(__items[k]);
					}
				});
			}
			return arr;
		},
		render: function render() {

			var self = this;
			var list = this.state.list.map(function (item, i) {
				return _react2['default'].createElement(
					'li',
					{ key: item.filter, className: item.cname },
					_react2['default'].createElement(
						'a',
						{ className: item.active, href: 'javascript:;', onClick: self.handleClick.bind(self, item.filter) },
						item.name
					)
				);
			});
			var items = this.state.items.map(function (item, i) {
				return _react2['default'].createElement(
					'div',
					{ key: item.images, className: 'col-sm-6 col-md-3 col-lg-3', style: { padding: 0 } },
					_react2['default'].createElement(
						'div',
						{ className: 'hover-bg' },
						_react2['default'].createElement(
							'a',
							{ href: item.url, target: '_block' },
							_react2['default'].createElement(
								'div',
								{ className: 'hover-text' },
								_react2['default'].createElement(
									'h4',
									null,
									'项目标题'
								),
								_react2['default'].createElement(
									'small',
									null,
									item.name
								),
								_react2['default'].createElement('i', { className: 'fa fa-search' })
							),
							_react2['default'].createElement('img', { src: item.images, className: 'img-responsive' })
						)
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
						'作品集'
					),
					_react2['default'].createElement('hr', null),
					_react2['default'].createElement(
						'p',
						null,
						'下面收集了部分我以前开发的网页或者项目，你可以点击导航目录去查看你想了解的项目分类列表'
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'categories' },
					_react2['default'].createElement(
						'ul',
						{ className: 'cat' },
						_react2['default'].createElement(
							'li',
							null,
							_react2['default'].createElement(
								'ol',
								{ className: 'type' },
								list
							)
						)
					)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'row' },
					_react2['default'].createElement(
						'div',
						{ className: 'animation-transition' },
						items
					)
				)
			);
		}
	});

	exports['default'] = Product;
	module.exports = exports['default'];

/***/ },

/***/ 293:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(294);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./product.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./product.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 294:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".categories {\r\n\tpadding-bottom: 30px;\r\n\ttext-align: center;\r\n}\r\nul.cat li {\r\n\tdisplay: inline-block;\r\n}\r\nol.type li {\r\n\tdisplay: inline-block;\r\n\tpadding: 0 20px;\r\n}\r\nol.type li a.active {\r\n\tcolor: #E87E04;\r\n}\r\n.br {\r\n\tborder-right: 1px solid #7E7878;\r\n}\r\n.hover-text {\r\n\tposition: absolute;\r\n\tbackground-color: rgba(8, 8, 8, 0.85);\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\topacity: 0;\r\n\ttext-align: center;\r\n\tcolor: #fff;\r\n\tpadding-top: 30%;\r\n}\r\n.hover-bg:hover .hover-text {\r\n\topacity: 1.0;\r\n\ttransition: all 1.5s linear;\r\n\t-moz-transition: all 1.5s linear;\r\n\t-webkit-transition: all 1.5s linear;\r\n\t-o-transition: all 1.5s linear;\r\n}\r\n.hover-bg {\r\n\tpadding: 16px;\r\n}\r\n.hover-bg:hover {\r\n\tpadding: 0;\r\n\ttransition: all .5s linear;\r\n\t-moz-transition: all .5s linear;\r\n\t-webkit-transition: all .5s linear;\r\n\t-o-transition: all .5s linear;\r\n}", ""]);

	// exports


/***/ }

});