webpackJsonp([10],{

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(297);

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var items = [{
		cname: 'timeline-inverted',
		startTime: '2015.11',
		end: '至今',
		company: '深圳百分点',
		job: 'web前端开发工程师',
		work: '百分点个性化推荐系统BPS以及TCL老门店系统等'
	}, {
		startTime: '2015.04',
		end: '2015.11',
		company: '中软国际',
		job: 'web前端开发工程师',
		work: '负责公司的微信服务号的开发以及PC的后台管理系统'
	}, {
		cname: 'timeline-inverted',
		startTime: '2014.09 ',
		end: '2015.04',
		company: '深圳海外国际旅行社',
		job: 'web前端开发工程师',
		work: '负责公司的官网以及微信公众号开发'
	}, {
		startTime: '2013.09',
		end: '2014.08',
		company: '深圳创科科技有限公司',
		job: 'web前端开发工程师',
		work: '后台管理系统开发'
	}, {
		cname: 'timeline-inverted',
		startTime: '2012.03',
		end: '2013.06',
		company: '武汉佳福佳科技',
		job: 'java开发工程师',
		work: ''
	}, {
		startTime: '2008.09',
		end: '2011.07',
		company: '武汉电力职业技术学院',
		job: '电气自动化',
		work: ''
	}];

	var Resume = (function (_React$Component) {
		_inherits(Resume, _React$Component);

		function Resume() {
			_classCallCheck(this, Resume);

			_get(Object.getPrototypeOf(Resume.prototype), 'constructor', this).apply(this, arguments);
		}

		_createClass(Resume, [{
			key: 'render',
			value: function render() {
				var __items = items.map(function (item, i) {
					return _react2['default'].createElement(
						'li',
						{ className: item.cname || '', key: item.company },
						_react2['default'].createElement(
							'div',
							{ className: 'timeline-image' },
							_react2['default'].createElement(
								'h4',
								null,
								item.startTime,
								' ',
								_react2['default'].createElement('br', null),
								'- ',
								_react2['default'].createElement('br', null),
								item.end
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'timeline-panel' },
							_react2['default'].createElement(
								'div',
								{ className: 'timeline-heading' },
								_react2['default'].createElement(
									'h4',
									null,
									item.company
								),
								_react2['default'].createElement(
									'h4',
									{ className: 'subheading' },
									item.job
								)
							),
							_react2['default'].createElement(
								'div',
								{ className: 'timeline-body' },
								_react2['default'].createElement(
									'p',
									null,
									item.work
								)
							)
						)
					);
				});

				return _react2['default'].createElement(
					'div',
					{ className: 'container', id: 'resume' },
					_react2['default'].createElement(
						'div',
						{ className: 'section-title text-center center' },
						_react2['default'].createElement(
							'h2',
							null,
							'经历'
						),
						_react2['default'].createElement('hr', null)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'row' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-lg-12' },
							_react2['default'].createElement(
								'ul',
								{ className: 'timeline' },
								__items
							)
						)
					)
				);
			}
		}]);

		return Resume;
	})(_react2['default'].Component);

	exports['default'] = Resume;
	module.exports = exports['default'];

/***/ },

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(298);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./resume.css", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./resume.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "/* Resume Section */\r\n#resume {\r\n\tpadding: 80px 0;\r\n\tbackground: #ffffff; /* Old browsers */\r\n\tbackground: -moz-linear-gradient(top, #ffffff 0%, #f4f5f6 50%, #ffffff 100%); /* FF3.6+ */\r\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #ffffff), color-stop(50%, #f4f5f6), color-stop(100%, #ffffff)); /* Chrome,Safari4+ */\r\n\tbackground: -webkit-linear-gradient(top, #ffffff 0%, #f4f5f6 50%, #ffffff 100%); /* Chrome10+,Safari5.1+ */\r\n\tbackground: -o-linear-gradient(top, #ffffff 0%, #f4f5f6 50%, #ffffff 100%); /* Opera 11.10+ */\r\n\tbackground: -ms-linear-gradient(top, #ffffff 0%, #f4f5f6 50%, #ffffff 100%); /* IE10+ */\r\n\tbackground: linear-gradient(to bottom, #ffffff 0%, #f4f5f6 50%, #ffffff 100%); /* W3C */\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff', GradientType=0 ); /* IE6-9 */\r\n}\r\n.timeline {\r\n\tposition: relative;\r\n\tpadding: 0;\r\n\tmargin: 0 20px;\r\n\tlist-style: none;\r\n}\r\n.timeline:before {\r\n\tcontent: \"\";\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 40px;\r\n\twidth: 2px;\r\n\tmargin-left: -1.5px;\r\n\tbackground-color: #FF9800;\r\n}\r\n.timeline>li {\r\n\tposition: relative;\r\n\tmargin-bottom: 50px;\r\n\tmin-height: 50px;\r\n}\r\n.timeline>li:before, .timeline>li:after {\r\n\tcontent: \" \";\r\n\tdisplay: table;\r\n}\r\n.timeline>li:after {\r\n\tclear: both;\r\n}\r\n.timeline>li .timeline-panel {\r\n\tfloat: right;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tpadding: 0px 20px 0 100px;\r\n\ttext-align: left;\r\n\ttop: 20px;\r\n}\r\n.timeline>li .timeline-panel:before {\r\n\tright: auto;\r\n\tleft: -15px;\r\n\tborder-right-width: 15px;\r\n\tborder-left-width: 0;\r\n}\r\n.timeline>li .timeline-panel:after {\r\n\tright: auto;\r\n\tleft: -14px;\r\n\tborder-right-width: 14px;\r\n\tborder-left-width: 0;\r\n}\r\n.timeline>li .timeline-image {\r\n\tz-index: 100;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\twidth: 70px;\r\n\theight: 70px;\r\n\tmargin-left: 0;\r\n\tborder: 1px solid #FF9800;\r\n\tborder-radius: 100%;\r\n\ttext-align: center;\r\n\tbackground: #fff;\r\n}\r\n.timeline>li .timeline-image h4 {\r\n\tmargin-top: 20px;\r\n\tfont-size: 14px;\r\n\ttext-transform: uppercase;\r\n}\r\n.timeline>li.timeline-inverted>.timeline-panel {\r\n\tfloat: right;\r\n\tpadding: 0 20px 0 100px;\r\n\ttext-align: left;\r\n}\r\n.timeline>li.timeline-inverted>.timeline-panel:before {\r\n\tright: auto;\r\n\tleft: -15px;\r\n\tborder-right-width: 15px;\r\n\tborder-left-width: 0;\r\n}\r\n.timeline>li.timeline-inverted>.timeline-panel:after {\r\n\tright: auto;\r\n\tleft: -14px;\r\n\tborder-right-width: 14px;\r\n\tborder-left-width: 0;\r\n}\r\n.timeline>li:last-child {\r\n\tmargin-bottom: 40px;\r\n}\r\n.timeline .timeline-heading h4 {\r\n\tmargin-top: 0;\r\n\ttext-transform: uppercase;\r\n}\r\n.timeline .timeline-heading h2 {\r\n\tmargin-top: 30px;\r\n}\r\n.timeline .timeline-heading h4.subheading {\r\n\ttext-transform: none;\r\n\tcolor: #E87E04;\r\n}\r\n.timeline .timeline-body>p, .timeline .timeline-body>ul {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n/* Media Queries */\r\n@media(min-width:768px) {\r\n\r\n.timeline:before {\r\n\tleft: 50%;\r\n}\r\n.timeline>li {\r\n\tmargin-bottom: 100px;\r\n\tmin-height: 100px;\r\n}\r\n.timeline>li .timeline-panel {\r\n\tfloat: left;\r\n\twidth: 41%;\r\n\tpadding: 0 20px 20px 30px;\r\n\ttext-align: right;\r\n}\r\n.timeline>li .timeline-image {\r\n\tleft: 50%;\r\n\twidth: 100px;\r\n\theight: 100px;\r\n\tmargin-left: -50px;\r\n}\r\n.timeline>li .timeline-image h4 {\r\n\tmargin-top: 16px;\r\n\tline-height: 18px;\r\n\tfont-weight: 400;\r\n}\r\n.timeline>li.timeline-inverted>.timeline-panel {\r\n\tfloat: right;\r\n\tpadding: 0 30px 20px 20px;\r\n\ttext-align: left;\r\n}\r\n}\r\n\r\n@media(min-width:992px) {\r\n\r\n.timeline>li {\r\n\tmin-height: 150px;\r\n}\r\n.timeline>li .timeline-panel {\r\n\tpadding: 0 20px 20px;\r\n}\r\n.timeline>li .timeline-image {\r\n\twidth: 150px;\r\n\theight: 150px;\r\n\tmargin-left: -75px;\r\n}\r\n.timeline>li .timeline-image h4 {\r\n\tmargin-top: 30px;\r\n\tfont-size: 18px;\r\n\tline-height: 26px;\r\n}\r\n.timeline>li.timeline-inverted>.timeline-panel {\r\n\tpadding: 0 20px 20px;\r\n}\r\n}\r\n\r\n@media(min-width:1200px) {\r\n.timeline>li {\r\n\tmin-height: 170px;\r\n}\r\n.timeline>li .timeline-panel {\r\n\tpadding: 10px 20px 20px 100px;\r\n}\r\n.timeline>li .timeline-image {\r\n\twidth: 150px;\r\n\theight: 150px;\r\n\tmargin-left: -75px;\r\n}\r\n.timeline>li .timeline-image h4 {\r\n\tmargin-top: 40px;\r\n\tfont-weight: 400;\r\n}\r\n.timeline>li.timeline-inverted>.timeline-panel {\r\n\tpadding: 10px 100px 20px 20px;\r\n}\r\n}", ""]);

	// exports


/***/ }

});