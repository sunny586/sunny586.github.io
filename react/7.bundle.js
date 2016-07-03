webpackJsonp([7],{

/***/ 289:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	__webpack_require__(290);

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var About = _react2['default'].createClass({
		displayName: 'About',

		render: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'container', id: 'about' },
				_react2['default'].createElement(
					'div',
					{ className: 'section-title text-center center' },
					_react2['default'].createElement(
						'h2',
						null,
						'关于我'
					),
					_react2['default'].createElement('hr', null)
				),
				_react2['default'].createElement(
					'div',
					{ className: 'row' },
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-12 text-center' },
						_react2['default'].createElement('img', { src: './app/images/about.jpg', className: 'img-responsive' })
					),
					_react2['default'].createElement(
						'div',
						{ className: 'col-md-8 col-md-offset-2' },
						_react2['default'].createElement(
							'div',
							{ className: 'about-text' },
							_react2['default'].createElement(
								'p',
								null,
								'1.通过DIV+CSS和W3C标准，能熟练运用HTML，CSS及html5，css3进行网页制作，理解各主流浏览器之间的兼容性;'
							),
							_react2['default'].createElement(
								'p',
								null,
								'2.熟悉掌握javascript , jquery , Angular1.x , Ionic , Angular2.0 , TypeScript , Vue, React ;'
							),
							_react2['default'].createElement(
								'p',
								null,
								'3.善于使用前端的基本调试工具和Git,GitLab，Github , sourceTree , bitbucket , jira项目管理工具以及Glup，webpack等项目构建打包工具；'
							),
							_react2['default'].createElement(
								'p',
								null,
								'4.能够独立的运用AngularJS(1.x) +Bootstrap+Gulp搭建一套前端开发环境框架，以及嵌套路由配 置，并已积累一些常用的指令，基本可以满足一般的开发需求；'
							),
							_react2['default'].createElement(
								'p',
								null,
								'5.熟练使用React+ES6+Webpack，可以完成React项目的开发工作，可以独立的运用React编写常用的组件；'
							),
							_react2['default'].createElement(
								'p',
								null,
								'6.能够使用Ionic开发APP，可以独立配置Android 的SDK+ADT的环境配置，能够将项目打包apk；'
							),
							_react2['default'].createElement(
								'p',
								null,
								'7.熟悉d3.js数据可视化；'
							),
							_react2['default'].createElement(
								'p',
								null,
								'8.了解Java编程及相关技术；'
							),
							_react2['default'].createElement(
								'p',
								null,
								'9.具有一定的文档交付能力，能够独立解决具体的技术问题；'
							),
							_react2['default'].createElement(
								'p',
								null,
								'10.对Web前端技术有强烈兴趣，能对Web前沿技术研究和新技术调研，有良好的学习能力和团队合作精神。'
							),
							_react2['default'].createElement(
								'p',
								{ className: 'text-center' },
								_react2['default'].createElement(
									'a',
									{ className: 'btn btn-primary', href: 'javascript:void(0)' },
									'前往我的技术博客'
								)
							)
						)
					)
				)
			);
		}

	});

	exports['default'] = About;
	module.exports = exports['default'];

/***/ },

/***/ 290:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(291);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./about.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./about.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 291:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".section-title.center hr{height:4px;width:70px;text-align:center;position:relative;background:#E87E04;margin:0 auto;margin-bottom:30px;border:0;}\r\n#about img{border-radius:50%;width:200px;height:200px;display:inline-block;}\r\n#about p{margin-top:10px;font-size:14px;font-family:cursive;}", ""]);

	// exports


/***/ }

});