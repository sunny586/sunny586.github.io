webpackJsonp([14],{

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _publicPre = __webpack_require__(303);

	var _publicPre2 = _interopRequireDefault(_publicPre);

	var Table = (function (_React$Component) {
					_inherits(Table, _React$Component);

					function Table() {
									_classCallCheck(this, Table);

									_get(Object.getPrototypeOf(Table.prototype), 'constructor', this).apply(this, arguments);
					}

					_createClass(Table, [{
									key: 'render',
									value: function render() {
													var data = [{ fname: 'Mark', lname: 'Otto', uname: '@mdo' }, { fname: 'Jacob', lname: 'Thornton', uname: '@fat' }, { fname: 'Larry', lname: 'the Bird', uname: '@twitter' }];
													var items = data.map(function (item, i) {
																	return _react2['default'].createElement(
																					'tr',
																					{ key: i },
																					_react2['default'].createElement(
																									'th',
																									null,
																									i + 1
																					),
																					_react2['default'].createElement(
																									'td',
																									null,
																									item.fname
																					),
																					_react2['default'].createElement(
																									'td',
																									null,
																									item.lname
																					),
																					_react2['default'].createElement(
																									'td',
																									null,
																									item.uname
																					)
																	);
													});
													return _react2['default'].createElement(
																	'div',
																	{ className: 'box' },
																	_react2['default'].createElement(
																					'h3',
																					null,
																					'普通表格'
																	),
																	_react2['default'].createElement(
																					'table',
																					{ className: 'table' },
																					_react2['default'].createElement(
																									'caption',
																									null,
																									'Optional table caption.'
																					),
																					_react2['default'].createElement(
																									'thead',
																									null,
																									_react2['default'].createElement(
																													'tr',
																													null,
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'#'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'First Name'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'Last Name'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'Username'
																													)
																									)
																					),
																					_react2['default'].createElement(
																									'tbody',
																									null,
																									items
																					)
																	),
																	_react2['default'].createElement(
																					_publicPre2['default'],
																					null,
																					'\n<table className="table">\n    <caption>Optional table caption.</caption>\n    <thead>\n        <tr>\n          <th>#</th>\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Username</th>\n        </tr>\n    </thead>\n    <tbody>{items}</tbody>\n</table>'
																	),
																	_react2['default'].createElement(
																					'h3',
																					null,
																					'条纹状表格'
																	),
																	_react2['default'].createElement(
																					'table',
																					{ className: 'table table-striped' },
																					_react2['default'].createElement(
																									'thead',
																									null,
																									_react2['default'].createElement(
																													'tr',
																													null,
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'#'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'First Name'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'Last Name'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'Username'
																													)
																									)
																					),
																					_react2['default'].createElement(
																									'tbody',
																									null,
																									items
																					)
																	),
																	_react2['default'].createElement(
																					_publicPre2['default'],
																					null,
																					'\n<table class="table table-striped">\n  ...\n</table>'
																	),
																	_react2['default'].createElement(
																					'h3',
																					null,
																					'鼠标悬停'
																	),
																	_react2['default'].createElement(
																					'table',
																					{ className: 'table table-hover' },
																					_react2['default'].createElement(
																									'thead',
																									null,
																									_react2['default'].createElement(
																													'tr',
																													null,
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'#'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'First Name'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'Last Name'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'Username'
																													)
																									)
																					),
																					_react2['default'].createElement(
																									'tbody',
																									null,
																									items
																					)
																	),
																	_react2['default'].createElement(
																					_publicPre2['default'],
																					null,
																					'\n<table class="table table-hover">\n  ...\n</table>'
																	),
																	_react2['default'].createElement(
																					'h3',
																					null,
																					'紧缩表格'
																	),
																	_react2['default'].createElement(
																					'table',
																					{ className: 'table table-condensed' },
																					_react2['default'].createElement(
																									'thead',
																									null,
																									_react2['default'].createElement(
																													'tr',
																													null,
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'#'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'First Name'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'Last Name'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'Username'
																													)
																									)
																					),
																					_react2['default'].createElement(
																									'tbody',
																									null,
																									items
																					)
																	),
																	_react2['default'].createElement(
																					_publicPre2['default'],
																					null,
																					'\n<table class="table table-condensed">\n  ...\n</table>'
																	),
																	_react2['default'].createElement(
																					'h3',
																					null,
																					'带边框的表格'
																	),
																	_react2['default'].createElement(
																					'table',
																					{ className: 'table table-bordered' },
																					_react2['default'].createElement(
																									'thead',
																									null,
																									_react2['default'].createElement(
																													'tr',
																													null,
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'#'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'First Name'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'Last Name'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'Username'
																													)
																									)
																					),
																					_react2['default'].createElement(
																									'tbody',
																									null,
																									items
																					)
																	),
																	_react2['default'].createElement(
																					_publicPre2['default'],
																					null,
																					'\n<table class="table table-bordered">\n  ...\n</table>'
																	),
																	_react2['default'].createElement(
																					'h3',
																					null,
																					'状态类'
																	),
																	_react2['default'].createElement(
																					'table',
																					{ className: 'table table-bordered' },
																					_react2['default'].createElement(
																									'thead',
																									null,
																									_react2['default'].createElement(
																													'tr',
																													null,
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'#'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'First Name'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'Last Name'
																													),
																													_react2['default'].createElement(
																																	'th',
																																	null,
																																	'Username'
																													)
																									)
																					),
																					_react2['default'].createElement(
																									'tbody',
																									null,
																									_react2['default'].createElement(
																													'tr',
																													{ className: 'active' },
																													_react2['default'].createElement(
																																	'th',
																																	{ scope: 'row' },
																																	'1'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'Mark'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'Otto'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'@mdo'
																													)
																									),
																									_react2['default'].createElement(
																													'tr',
																													{ className: 'success' },
																													_react2['default'].createElement(
																																	'th',
																																	{ scope: 'row' },
																																	'1'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'Mark'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'Otto'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'@mdo'
																													)
																									),
																									_react2['default'].createElement(
																													'tr',
																													{ className: 'warning' },
																													_react2['default'].createElement(
																																	'th',
																																	{ scope: 'row' },
																																	'1'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'Mark'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'Otto'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'@mdo'
																													)
																									),
																									_react2['default'].createElement(
																													'tr',
																													{ className: 'danger' },
																													_react2['default'].createElement(
																																	'th',
																																	{ scope: 'row' },
																																	'1'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'Mark'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'Otto'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'@mdo'
																													)
																									),
																									_react2['default'].createElement(
																													'tr',
																													{ className: 'info' },
																													_react2['default'].createElement(
																																	'th',
																																	{ scope: 'row' },
																																	'1'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'Mark'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'Otto'
																													),
																													_react2['default'].createElement(
																																	'td',
																																	null,
																																	'@mdo'
																													)
																									)
																					)
																	),
																	_react2['default'].createElement(
																					_publicPre2['default'],
																					null,
																					'\n<!-- On rows -->\n<tr class="active">...</tr>\n<tr class="success">...</tr>\n<tr class="warning">...</tr>\n<tr class="danger">...</tr>\n<tr class="info">...</tr>\n<!-- On cells (\'td\' or \'th\') -->\n<tr>\n  <td class="active">...</td>\n  <td class="success">...</td>\n  <td class="warning">...</td>\n  <td class="danger">...</td>\n  <td class="info">...</td>\n</tr>'
																	),
																	_react2['default'].createElement(
																					'h3',
																					null,
																					'响应式表格'
																	),
																	_react2['default'].createElement(
																					'div',
																					{ className: 'table-responsive' },
																					_react2['default'].createElement(
																									'table',
																									{ className: 'table table-bordered' },
																									_react2['default'].createElement(
																													'thead',
																													null,
																													_react2['default'].createElement(
																																	'tr',
																																	null,
																																	_react2['default'].createElement(
																																					'th',
																																					null,
																																					'#'
																																	),
																																	_react2['default'].createElement(
																																					'th',
																																					null,
																																					'First Name'
																																	),
																																	_react2['default'].createElement(
																																					'th',
																																					null,
																																					'Last Name'
																																	),
																																	_react2['default'].createElement(
																																					'th',
																																					null,
																																					'Username'
																																	)
																													)
																									),
																									_react2['default'].createElement(
																													'tbody',
																													null,
																													items
																									)
																					)
																	),
																	_react2['default'].createElement(
																					_publicPre2['default'],
																					null,
																					'\n<div class="table-responsive">\n  <table class="table">\n    ...\n  </table>\n</div>'
																	)
													);
									}
					}]);

					return Table;
	})(_react2['default'].Component);

	module.exports = Table;

/***/ },

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 语法高亮
	 */

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _codeBeautify = __webpack_require__(304);

	var _codeBeautify2 = _interopRequireDefault(_codeBeautify);

	exports['default'] = _react2['default'].createClass({
	  displayName: 'pre',

	  render: function render() {
	    var code = (0, _codeBeautify2['default'])(this.props.children, this.props.lang || 'js');
	    return _react2['default'].createElement('pre', { className: 'code-beautify', dangerouslySetInnerHTML: { __html: code } });
	  }
	});
	module.exports = exports['default'];

/***/ },

/***/ 304:
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var ruleMap = __webpack_require__(305)

	function parse(source, lang) {

	  // Remove \n in the start
	  source = source.replace(/^\n/g, '');

	  // Replace whitespace with entity
	  // '\s' contains '\n', so just use ' '
	  // source = source.replace(/ /g, '\u00a0');

	  var reg = getReg(lang);
	  if (reg) {
	    var rules = ruleMap[lang];
	    var reg = new RegExp(getReg(lang), 'g');
	    source = source.replace(reg, function() {
	      var args = arguments;
	      for (var i = 1, len = args.length - 1; i < len; i++) {
	        var rule = rules[i - 1]
	        if (args[i] && rule) {
	          if (rule.callback) {
	            args[i] = rule.callback.call(ruleMap, args[i])
	          }
	          return '<span class="' + rule.name + '">' + args[i] + '</span>'
	        }
	      }
	    });
	  }

	  return source.replace(/\n/g, '<br>');
	};


	/**
	 * Get all regexp rules of this lang.
	 */
	function getReg(lang) {
	  if (getReg[lang]) return getReg[lang];
	  var reg = [];
	  var rules = ruleMap[lang];
	  if (rules) {
	    for (var i = 0; i < rules.length; i++) {
	      reg.push(rules[i].rule);
	    }
	  }
	  reg = reg.join('|');

	  getReg[lang] = reg;

	  return reg;
	};


	/**
	 * Outer interface
	 */
	module.exports = function(source, lang) {
	  return parse(source, lang)
	};

/***/ },

/***/ 305:
/***/ function(module, exports) {

	module.exports = {
	  markup: [{
	    name: 'com',
	    rule: '(<!--[\\s\\S]*?-->)',
	    callback: function(str) {
	      return str.replace(/</g, '&lt;');
	    }
	  }, {
	    name: 'tag',
	    rule: '(<[\\/!]?[\\w-]+|/?>)',
	    callback: function(str) {
	      return str.replace('<', '&lt;');
	    }
	  }, {
	    name: 'attr',
	    rule: '\\s([\\w-:]+=?)'
	  }, {
	    name: 'str', // attribute value
	    rule: '(\"[\\s\\S]*?\")'
	  }],

	  css: [{
	    name: 'tag',
	    rule: '(<[\\/!]?[\\w\\d]+|>)',
	    callback: function(str) {
	      return str.replace('<', '&lt;');
	    }
	  }, {
	    name: 'str', // attribute value
	    rule: '(\"[\\s\\S]*?\")'
	  }],

	  js: [{
	    name: 'com', // comment
	    rule: '(\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/)',
	    callback: function(str) {
	      // Some js comment has html tags
	      return str.replace(/</g, '&lt;');
	    }
	  }, {
	    name: 'str', // string
	    rule: '(\'[\\s\\S]*?\'|\"[\\s\\S]*?\")',
	    callback: function(str) {
	      // Some js string has html tags
	      return str.replace(/</g, '&lt;');
	    }
	  }, {
	    name: 'kwd', // keyword
	    rule: '\\b(import|from|export|extends|function|break|case|catch|class|continue|debugger|default|delete|do|else|finally|for|function|if|in|instanceof|new|return|super|switch|this|throw|try|typeof|var|let|const|void|while|with)\\b'
	  }, {
	    name: 'kc', // key constant
	    rule: '\\b(true|false|undefined|null|Infinity)\\b'
	  }, {
	    name: 'nb', // built-in object
	    rule: '\\b(Array|console|Date|document|Function|isFinite|isNaN|Math|Object|parseInt|parseFloat|RegExp|string|window)\\b'
	  }, {
	    // jsx
	    name: 'tag',
	    rule: '(<[\\/!]?[\\w-\\.]+|/?>)',
	    callback: function(str) {
	      return str.replace('<', '&lt;');
	    }
	  }, {
	    name: 'attr',
	    rule: '\\b([\\w-:]+=)'
	  }, {
	    name: 'opt', // operator
	    rule: '(\\+|-|\\*|\\/|%|<|>|=|==|===|!=|!==|!|&&|\\|\\||&|\\|)'
	  }, {
	    name: 'num', // number
	    rule: '(\\d+)'
	  }],

	  sh: [{
	    name: 'com', // comment
	    rule: '(#.*)'
	  }],

	  java: [{
	    name: 'com', // comment
	    rule: '(\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/)'
	  }, {
	    name: 'str', // string
	    rule: '(\'[\\s\\S]*?\'|\"[\\s\\S]*?\")',
	    callback: function(str) {
	      // Some js string has html tags
	      return str.replace(/</g, '&lt;');
	    }
	  }, {
	    name: 'kwd', // keyword
	    rule: '\\b(implements|import|package|public|protected|private|class|extends|void|throws)\\b'
	  }]
	}

/***/ }

});