webpackJsonp([19],{

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

/***/ },

/***/ 307:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	function Warn(_ref) {
	  var children = _ref.children;

	  return _react2["default"].createElement(
	    "div",
	    { className: "alert alert-warning" },
	    children
	  );
	}

	exports["default"] = Warn;
	module.exports = exports["default"];

/***/ },

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	function Info(_ref) {
	  var children = _ref.children;

	  return _react2["default"].createElement(
	    "div",
	    { className: "alert alert-info" },
	    children
	  );
	}

	exports["default"] = Info;
	module.exports = exports["default"];

/***/ },

/***/ 309:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	function Success(_ref) {
	  var children = _ref.children;

	  return _react2["default"].createElement(
	    "div",
	    { className: "alert alert-success" },
	    children
	  );
	}

	exports["default"] = Success;
	module.exports = exports["default"];

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(27);

	var _react2 = _interopRequireDefault(_react);

	var _publicPre = __webpack_require__(303);

	var _publicPre2 = _interopRequireDefault(_publicPre);

	var _publicWarn = __webpack_require__(307);

	var _publicWarn2 = _interopRequireDefault(_publicWarn);

	var _publicInfo = __webpack_require__(308);

	var _publicInfo2 = _interopRequireDefault(_publicInfo);

	var _publicSuccess = __webpack_require__(309);

	var _publicSuccess2 = _interopRequireDefault(_publicSuccess);

	__webpack_require__(317);

	var Desc = _react2['default'].createClass({
	  displayName: 'Desc',

	  getInitialState: function getInitialState() {
	    return {
	      url: 'data/LineBarChart.json'
	    };
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'box u-desc' },
	      _react2['default'].createElement(
	        'h2',
	        null,
	        '在 webpack 中使用 ECharts'
	      ),
	      _react2['default'].createElement(
	        'blockquote',
	        null,
	        _react2['default'].createElement(
	          'footer',
	          null,
	          _react2['default'].createElement(
	            'a',
	            { href: 'https://webpack.github.io/', target: '_blank' },
	            'Webpack '
	          ),
	          '是目前比较流行的模块打包工具，你可以在使用 webpack 的项目中轻松的引入和打包 ECharts，这里假设你已经对 webpack 具有一定的了解并且在自己的项目中使用。'
	        )
	      ),
	      _react2['default'].createElement(
	        'h3',
	        null,
	        'npm 安装 ECharts'
	      ),
	      _react2['default'].createElement(
	        'h5',
	        null,
	        '你可以使用如下命令通过 npm 安装 ECharts'
	      ),
	      _react2['default'].createElement(
	        _publicPre2['default'],
	        null,
	        'npm install echarts --save'
	      ),
	      _react2['default'].createElement(
	        'h3',
	        null,
	        '引入 ECharts'
	      ),
	      _react2['default'].createElement(
	        'h5',
	        null,
	        '通过 npm 上安装的 ECharts 和 zrender 会放在node_modules目录下。可以直接在项目代码中 require(\'echarts\') 得到 ECharts(ES6使用import echarts from \'echarts\')。'
	      ),
	      _react2['default'].createElement(
	        _publicPre2['default'],
	        null,
	        '\n      var echarts = require(\'echarts\');\n      // 基于准备好的dom，初始化echarts实例\n      var myChart = echarts.init(document.getElementById(\'main\'));\n      // 绘制图表\n      myChart.setOption({\n          title: { text: \'ECharts 入门示例\' },\n          tooltip: {},\n          xAxis: {\n              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]\n          },\n          yAxis: {},\n          series: [{\n              name: \'销量\',\n              type: \'bar\',\n              data: [5, 20, 36, 10, 10, 20]\n          }]\n      });'
	      ),
	      _react2['default'].createElement('hr', null)
	    );
	  }
	});

	exports['default'] = Desc;
	module.exports = exports['default'];

/***/ },

/***/ 317:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(318);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./Desc.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./Desc.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ }

});