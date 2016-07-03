webpackJsonp([17],{

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

/***/ 311:
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

	var Form = _react2['default'].createClass({
	  displayName: 'Form',

	  render: function render() {
	    var style = {
	      border: '1px solid #ddd',
	      padding: '10px'
	    };
	    return _react2['default'].createElement(
	      'div',
	      { className: 'box' },
	      _react2['default'].createElement(
	        'h3',
	        null,
	        '基本表单'
	      ),
	      _react2['default'].createElement(
	        'form',
	        { style: style },
	        _react2['default'].createElement(
	          'div',
	          { className: 'form-group' },
	          _react2['default'].createElement(
	            'label',
	            null,
	            'Email address'
	          ),
	          _react2['default'].createElement('input', { type: 'email', className: 'form-control', placeholder: 'Email' })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'form-group' },
	          _react2['default'].createElement(
	            'label',
	            null,
	            'Password'
	          ),
	          _react2['default'].createElement('input', { type: 'password', className: 'form-control', placeholder: 'Password' })
	        ),
	        _react2['default'].createElement(
	          'button',
	          { type: 'submit', className: 'btn btn-default' },
	          'Submit'
	        )
	      ),
	      _react2['default'].createElement(
	        _publicPre2['default'],
	        null,
	        '<form>\n  <div className="form-group">\n    <label>Email address</label>\n    <input type="email" className="form-control" placeholder="Email"/>\n  </div>\n  <div className="form-group">\n    <label>Password</label>\n    <input type="password" className="form-control" placeholder="Password"/>\n  </div>          \n  <button type="submit" className="btn btn-default">Submit</button>\n</form>'
	      ),
	      _react2['default'].createElement(
	        'h3',
	        null,
	        '内联表单'
	      ),
	      _react2['default'].createElement(
	        'form',
	        { className: 'form-inline', style: style },
	        _react2['default'].createElement(
	          'div',
	          { className: 'form-group' },
	          _react2['default'].createElement(
	            'label',
	            null,
	            'Name'
	          ),
	          _react2['default'].createElement('input', { type: 'text', className: 'form-control', placeholder: 'Jane Doe' })
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'form-group' },
	          _react2['default'].createElement(
	            'label',
	            null,
	            'Email'
	          ),
	          _react2['default'].createElement('input', { type: 'email', className: 'form-control', placeholder: 'jane.doe@example.com' })
	        ),
	        _react2['default'].createElement(
	          'button',
	          { type: 'submit', className: 'btn btn-default' },
	          'Send invitation'
	        )
	      ),
	      _react2['default'].createElement(
	        _publicPre2['default'],
	        null,
	        '<form className="form-inline">\n  <div className="form-group">\n    <label>Name</label>\n    <input type="text" className="form-control" placeholder="Jane Doe"/>\n  </div>\n  <div className="form-group">\n    <label>Email</label>\n    <input type="email" className="form-control" placeholder="jane.doe@example.com"/>\n  </div>\n  <button type="submit" className="btn btn-default">Send invitation</button>\n</form>'
	      ),
	      _react2['default'].createElement(
	        'h3',
	        null,
	        '水平排列的表单'
	      ),
	      _react2['default'].createElement(
	        'form',
	        { className: 'form-horizontal', style: style },
	        _react2['default'].createElement(
	          'div',
	          { className: 'form-group' },
	          _react2['default'].createElement(
	            'label',
	            { className: 'col-sm-2 control-label' },
	            'Email'
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'col-sm-10' },
	            _react2['default'].createElement('input', { type: 'email', className: 'form-control', placeholder: 'Email' })
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'form-group' },
	          _react2['default'].createElement(
	            'label',
	            { className: 'col-sm-2 control-label' },
	            'Password'
	          ),
	          _react2['default'].createElement(
	            'div',
	            { className: 'col-sm-10' },
	            _react2['default'].createElement('input', { type: 'password', className: 'form-control', placeholder: 'Password' })
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'form-group' },
	          _react2['default'].createElement(
	            'div',
	            { className: 'col-sm-offset-2 col-sm-10' },
	            _react2['default'].createElement(
	              'button',
	              { type: 'submit', className: 'btn btn-default' },
	              'Sign in'
	            )
	          )
	        )
	      ),
	      _react2['default'].createElement(
	        _publicPre2['default'],
	        null,
	        '<form className="form-horizontal" style={style}>\n  <div className="form-group">\n    <label className="col-sm-2 control-label">Email</label>\n    <div className="col-sm-10">\n      <input type="email" className="form-control" placeholder="Email"/>\n    </div>\n  </div>\n  <div className="form-group">\n    <label className="col-sm-2 control-label">Password</label>\n    <div className="col-sm-10">\n      <input type="password" className="form-control" placeholder="Password"/>\n    </div>\n  </div>         \n  <div className="form-group">\n    <div className="col-sm-offset-2 col-sm-10">\n      <button type="submit" className="btn btn-default">Sign in</button>\n    </div>\n  </div>\n</form>'
	      )
	    );
	  }
	});
	exports['default'] = Form;
	module.exports = exports['default'];

/***/ }

});