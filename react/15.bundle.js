webpackJsonp([15],{

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

/***/ 306:
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

	var Alert = _react2['default'].createClass({
	  displayName: 'Alert',

	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { className: 'box' },
	      _react2['default'].createElement(
	        'h1',
	        null,
	        '警告框'
	      ),
	      _react2['default'].createElement(
	        _publicPre2['default'],
	        null,
	        'import Warn from \'public/warn\'\nimport Info from \'public/info\'\nimport Success from \'public/success\'\n      export default React.createClass({\n        render() {\n          return (\n          <div> \n            <Warn>我是Warn警告框</Warn>\n            <Info>我是Info警告框</Info>\n            <Success>我是Success警告框</Success>\n          </div>)  \n        }\n      })'
	      ),
	      _react2['default'].createElement(
	        _publicWarn2['default'],
	        null,
	        '我是Warn警告框'
	      ),
	      _react2['default'].createElement(
	        _publicInfo2['default'],
	        null,
	        '我是Info警告框'
	      ),
	      _react2['default'].createElement(
	        _publicSuccess2['default'],
	        null,
	        '我是Success警告框'
	      )
	    );
	  }
	});

	exports['default'] = Alert;
	module.exports = exports['default'];

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

/***/ }

});