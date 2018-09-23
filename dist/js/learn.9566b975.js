(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["learn"],{

/***/ "0082":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "cadf");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "551c");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ "097d");
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'study',
  components: {},
  props: {},
  created: function created() {
    var screenWidth = document.body.clientWidth;

    if (screenWidth <= 850) {
      this.isCollapse = true;
    } else {
      this.isCollapse = false;
    }
  },
  data: function data() {
    return {
      active: '',
      isCollapse: false,
      list: [{
        title: '学习文档整理',
        data: [{
          desc: 'Http协议',
          href: '/learn/http'
        }, {
          desc: 'Vue学习总结',
          href: '/learn/vue'
        }, {
          desc: '小程序',
          href: '/learn/xcx'
        }, {
          desc: 'Git学习总结',
          href: '/learn/git'
        }, {
          desc: 'Node开发环境安装',
          href: '/learn/kfhj'
        }, {
          desc: 'MongoDB学习整理',
          href: '/learn/mongodb'
        }, {
          desc: 'GO学习整理',
          href: '/learn/go'
        }]
      }]
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.active = to.path;
    });
  },
  methods: {
    handleOpen: function handleOpen(key, keyPath) {// console.log(key, keyPath);
    },
    handleClose: function handleClose(key, keyPath) {// console.log(key, keyPath);
    }
  }
});

/***/ }),

/***/ "01a8":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/http.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "cadf");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "551c");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ "097d");
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _md_http_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./md/http.md */ "c516");
/* harmony import */ var _md_http_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_md_http_md__WEBPACK_IMPORTED_MODULE_3__);



//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'http',
  components: {},
  data: function data() {
    return {
      content: _md_http_md__WEBPACK_IMPORTED_MODULE_3___default.a
    };
  }
});

/***/ }),

/***/ "01dd":
/*!********************************!*\
  !*** ./src/views/learn/go.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _go_vue_vue_type_template_id_288545fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./go.vue?vue&type=template&id=288545fa& */ "412d");
/* harmony import */ var _go_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./go.vue?vue&type=script&lang=js& */ "76f8");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _go_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _go_vue_vue_type_template_id_288545fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _go_vue_vue_type_template_id_288545fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "go.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "0a23":
/*!**********************************************************!*\
  !*** ./src/views/learn/git.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_git_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./git.vue?vue&type=script&lang=js& */ "7dda");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_git_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "0c54":
/*!****************************************************************!*\
  !*** ./src/views/learn/xcx.vue?vue&type=template&id=3a26284e& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_xcx_vue_vue_type_template_id_3a26284e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./xcx.vue?vue&type=template&id=3a26284e& */ "7afa");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_xcx_vue_vue_type_template_id_3a26284e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_xcx_vue_vue_type_template_id_3a26284e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "0d5e":
/*!****************************************************************!*\
  !*** ./src/views/learn/git.vue?vue&type=template&id=3a989c1e& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_git_vue_vue_type_template_id_3a989c1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./git.vue?vue&type=template&id=3a989c1e& */ "ce1f");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_git_vue_vue_type_template_id_3a989c1e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_git_vue_vue_type_template_id_3a989c1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "1066":
/*!*********************************!*\
  !*** ./src/views/learn/git.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _git_vue_vue_type_template_id_3a989c1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./git.vue?vue&type=template&id=3a989c1e& */ "0d5e");
/* harmony import */ var _git_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./git.vue?vue&type=script&lang=js& */ "0a23");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _git_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _git_vue_vue_type_template_id_3a989c1e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _git_vue_vue_type_template_id_3a989c1e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "git.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "14af":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/index.vue?vue&type=template&id=b4f3264a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"study"},[_c('div',{staticClass:"menu"},[_c('el-menu',{staticStyle:{"border-right":"none"},attrs:{"collapse":_vm.isCollapse,"default-active":_vm.active,"unique-opened":true,"router":true},on:{"open":_vm.handleOpen,"close":_vm.handleClose}},_vm._l((_vm.list),function(m,i){return _c('el-submenu',{key:i,attrs:{"index":("" + (i+1))}},[_c('template',{slot:"title"},[_c('i',{staticClass:"el-icon-menu"}),_c('span',[_vm._v(_vm._s(m.title))])]),_vm._l((m.data),function(item,index){return _c('router-link',{key:index,attrs:{"to":item.href}},[_c('el-menu-item',{attrs:{"index":item.href}},[_vm._v("\n          "+_vm._s(item.desc)+"\n        ")])],1)})],2)}))],1),_c('div',{staticClass:"container markdown-body"},[_c('router-view')],1)])}
var staticRenderFns = []



/***/ }),

/***/ "16f1":
/*!**************************************************************!*\
  !*** ./src/views/learn/mongodb.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mongodb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./mongodb.vue?vue&type=script&lang=js& */ "ea95");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mongodb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "2847":
/*!**********************************!*\
  !*** ./src/views/learn/kfhj.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kfhj_vue_vue_type_template_id_3481c599___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kfhj.vue?vue&type=template&id=3481c599& */ "d354");
/* harmony import */ var _kfhj_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kfhj.vue?vue&type=script&lang=js& */ "601d");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _kfhj_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _kfhj_vue_vue_type_template_id_3481c599___WEBPACK_IMPORTED_MODULE_0__["render"],
  _kfhj_vue_vue_type_template_id_3481c599___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "kfhj.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "3b56":
/*!***********************************!*\
  !*** ./src/views/learn/md/xcx.md ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "##  小程序\n### 1 创建项目\n* 我们需要通过开发者工具，来完成小程序创建和代码编辑。\n* 开发者工具安装完成后，打开并使用微信扫码登录。选择创建“项目”，填入上文获取到的 AppID ，设置一个本地项目的名称（非小程序名称），比如“我的第一个项目”，并选择一个本地的文件夹作为代码存储的目录，点击“新建项目”就可以了。\n* 为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择“是”，开发者工具会帮助我们在开发目录里生成一个简单的 demo。\n\n### 2 代码编写\n* 点击开发者工具左侧导航的“编辑”，我们可以看到这个项目，已经初始化并包含了一些简单的代码文件。最关键也是必不可少的，是 app.js、app.json、app.wxss 这三个。其中，.js后缀的是脚本文件，.json后缀的文件是配置文件，.wxss后缀的是样式表文件。微信小程序会读取这些文件，并生成小程序实例。\n* app.js是小程序的脚本代码。我们可以在这个文件中监听并处理小程序的生命周期函数、声明全局变量。调用框架提供的丰富的 API，如本例的同步存储及同步读取本地数据。想了解更多可用 API，可参考 API 文档。\n\n```javascript\n//app.js\nApp({\n  onLaunch: function () {\n    //调用API从本地缓存中获取数据\n    var logs = wx.getStorageSync('logs') || []\n    logs.unshift(Date.now())\n    wx.setStorageSync('logs', logs)\n  },\n  getUserInfo:function(cb){\n    var that = this;\n    if(this.globalData.userInfo){\n      typeof cb == \"function\" && cb(this.globalData.userInfo)\n    }else{\n      //调用登录接口\n      wx.login({\n        success: function () {\n          wx.getUserInfo({\n            success: function (res) {\n              that.globalData.userInfo = res.userInfo;\n              typeof cb == \"function\" && cb(that.globalData.userInfo)\n            }\n          })\n        }\n      });\n    }\n  },\n  globalData:{\n    userInfo:null\n  }\n})\n```\n* app.json 是对整个小程序的全局配置。我们可以在这个文件中配置小程序是由哪些页面组成，配置小程序的窗口\b背景色，配置导航条样式，配置默认标题。注意该文件不可添加任何注释。更多可配置项可参考配置详解。\n\n```json\n{\n  \"pages\":[\n    \"pages/index/index\",\n    \"pages/logs/logs\"\n  ],\n  \"window\":{\n    \"backgroundTextStyle\":\"light\",\n    \"navigationBarBackgroundColor\": \"#fff\",\n    \"navigationBarTitleText\": \"WeChat\",\n    \"navigationBarTextStyle\":\"black\"\n  }\n}\n```\n\n* app.wxss 是整个小程序的公共样式表。我们可以在页面组件的 class 属性上直接使用 app.wxss 中声明的样式规则。\n\n```css\n/**app.wxss**/\n.container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 200rpx 0;\n  box-sizing: border-box;\n}\n```\n+ 每一个小程序页面是由同路径下同名的四个不同后缀文件的组成，如：index.js、index.wxml、index.wxss、index.json。.js后缀的文件是脚本文件，.json后缀的文件是配置文件，.wxss后缀的是样式表文件，.wxml后缀的文件是页面结构文件\n\n\n### 3 项目目录\n\n\t|- components  组件目录\n\t|- assets  静态资源目录\n\t  |- images\n\t  ... ...\n\t|- pages  小程序页面\n\t  |- index  \n\t    |- index.js\n\t    |- index.json\n\t    |- index.wxml\n\t    |- index.wxss\n\t  |- login\n\t    |- login.js\n\t    |- login.json\n\t    |- login.wxml\n\t    |- login.wxss\n\t   ......\n\t|- utils 公共方法目录\n\t  |- util.js\n\t  ......\n\t|- app.js 小程序主入口\n\t|- app.json 全局配置文件\n\t|- app.wxss 全局样式文件\n\n### 4 生命周期\n\n#### 4.1 App\n\n+ App() 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。\n\n```javascript\nApp({\n  onLaunch: function(options) {\n    // Do something initial when launch.\n  },\n  onShow: function(options) {\n      // Do something when show.\n  },\n  onHide: function() {\n      // Do something when hide.\n  },\n  onError: function(msg) {\n    console.log(msg)\n  },\n  globalData: 'I am global data'\n})\n```\n\n+ getApp()\n+ 我们提供了全局的 getApp() 函数，可以获取到小程序实例。\n\n```javascript\n// other.js\nvar appInstance = getApp()\nconsole.log(appInstance.globalData) // I am global data\n```\n\n#### 注意：\n\n+ App() 必须在 app.js 中注册，且不能注册多个。\n\n+ 不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例。\n\n+ 不要在 onLaunch 的时候调用 getCurrentPage()，此时 page 还没有生成。\n\n+ 通过 getApp() 获取实例之后，不要私自调用生命周期函数。\n\n#### 4.2 Page\n\n+ Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。\n\n```javascript\nPage({\n  data: {\n    text: \"This is page data.\"\n  },\n  onLoad: function(options) {\n    // Do some initialize when page load.\n  },\n  onReady: function() {\n    // Do something when page ready.\n  },\n  onShow: function() {\n    // Do something when page show.\n  },\n  onHide: function() {\n    // Do something when page hide.\n  },\n  onUnload: function() {\n    // Do something when page close.\n  },\n  onPullDownRefresh: function() {\n    // Do something when pull down.\n  },\n  onReachBottom: function() {\n    // Do something when page reach bottom.\n  },\n  onShareAppMessage: function () {\n   // return custom share data when user share.\n  },\n  // Event handler.\n  viewTap: function() {\n    this.setData({\n      text: 'Set some data for updating view.'\n    })\n  },\n  customData: {\n    hi: 'MINA'\n  }\n})\n```\n\n######  生命周期函数\n\n+ onLoad: 页面加载\n  +  一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。\n+ onShow: 页面显示\n  + 每次打开页面都会调用一次。\n+ onReady: 页面初次渲染完成\n  + 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。\n  + 对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期\n+ onHide: 页面隐藏\n  + 当navigateTo或底部tab切换时调用。\n+ onUnload: 页面卸载\n  + 当redirectTo或navigateBack的时候调用。\n\n###### 页面相关事件处理函数\n+ onPullDownRefresh: 下拉刷新\n  + 监听用户下拉刷新事件。\n  + 需要在config的window选项中开启enablePullDownRefresh。\n  + 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。\n+ onShareAppMessage: 用户分享\n  + 只有定义了此事件处理函数，右上角菜单才会显示“分享”按钮\n  + 用户点击分享按钮的时候会调用\n  + 此事件需要 return 一个 Object，用于自定义分享内容\n\n```javascript\nPage({\n  onShareAppMessage: function () {\n    return {\n      title: '自定义分享标题',\n      path: '/page/user?id=123'\n    }\n  }\n})\n```\n\n### 5 路由跳转\n+ wx.navigateTo(OBJECT)\n\n```javascript\nwx.navigateTo({\n  url: 'test?id=1'\n})\n```\n\n```javascript\nPage({\n  onLoad: function(option){\n    console.log(option)\n  }\n})\n```\n\n+ wx.redirectTo(OBJECT)   \n  关闭当前页面，跳转到应用内的某个页面。\n\n+ wx.reLaunch(OBJECT)   \n  关闭所有页面，打开到应用内的某个页面。\n\n+ wx.switchTab(OBJECT)   \n  跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面\n\n```json\n{\n  \"tabBar\": {\n    \"list\": [{\n      \"pagePath\": \"index\",\n      \"text\": \"首页\"\n    },{\n      \"pagePath\": \"other\",\n      \"text\": \"其他\"\n    }]\n  }\n}\n```\n\n```javascript\nwx.switchTab({\n  url: '/index'\n})\n```\n\n+ wx.navigateBack(OBJECT)   \n  关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。\n\n```javascript\n// 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码\n\n// 此处是A页面\nwx.navigateTo({\n  url: 'B?id=1'\n})\n\n// 此处是B页面\nwx.navigateTo({\n  url: 'C?id=1'\n})\n\n// 在C页面内 navigateBack，将返回A页面\nwx.navigateBack({\n  delta: 2\n})\n```\n\n> tip: wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面\n\n### 6 发起请求\n\n+ wx.request(OBJECT)  \n  wx.request发起的是 HTTPS 请求。\n\n```javascript\nwx.request({\n  url: 'test.php', //仅为示例，并非真实的接口地址\n  data: {\n     x: '' ,\n     y: ''\n  },\n  header: {\n      'content-type': 'application/json'\n  },\n  success: function(res) {\n    console.log(res.data)\n  }\n})\n```\n\n1. tip: content-type 默认为 'application/json'\n2. bug: 开发者工具 0.10.102800 版本，header 的 content-type 设置异常；\n3. tip: 客户端的 HTTPS TLS 版本为1.2，但 Android 的部分机型还未支持 TLS 1.2，所以请确保 HTTPS 服务器的 TLS 版本支持1.2及以下版本；\n4. tip: 要注意 method 的 value 必须为大写（例如：GET）；\n5. tip: url 中不能有端口；\n6. tip: request 的默认超时时间和最大超时时间都是 60s\n7. tip: request 的最大并发数是 5\n8. tip: 网络请求的 referer 是不可以设置的，格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版。\n\n### 7 WXSS\n\n+ rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。\n\n### 8 模板\n\n+ WXML提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。\n\n  定义模板    \n+ 使用name属性，作为模板的名字。然后在 < template/>内定义代码片段\n\n```html\n<template name=\"postItem\">\n  <view class=\"post-container\">\n    <view class=\"post-author-date\">\n      <image class=\"post-author\" src=\"{{avatar}}\"></image>\n      <text class=\"post-date\">{{date}}</text>\n    </view>\n    <text class=\"post-title\">{{title}}</text>\n    <image class=\"post-image\" src=\"{{imgSrc}}\"></image>\n    <text class=\"post-content\">{{content}}\n    </text>\n    <view class=\"post-like\">\n      <image class=\"post-like-image\" src=\"/images/icon/chat.png\"></image>\n      <text class=\"post-like-font\">{{collection}}</text>\n      <image class=\"post-like-image\" src=\"/images/icon/view.png\"></image>\n      <text class=\"post-like-font\">{{reading}}</text>\n    </view>\n  </view>\n</template>\n```\n\n  使用模板\n+ 使用 is 属性，声明需要的使用的模板，然后将模板所需要的 data 传入。\n\n```html\n<import src=\"post-item/post-item-template.wxml\" />\n\n<template is=\"postItem\" data=\"{{...item}}\" />\n```\n> item 是模板所需要的数据。模板中不能写js，只是数据展示。\n\n### 9 配置\n\n+ 我们使用app.json文件来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。\n\n```json\n{\n  \"pages\": [\n    \"pages/index/index\",\n    \"pages/logs/index\"\n  ],\n  \"window\": {\n    \"navigationBarTitleText\": \"Demo\"\n  },\n  \"tabBar\": {\n    \"list\": [{\n      \"pagePath\": \"pages/index/index\",\n      \"text\": \"首页\"\n    }, {\n      \"pagePath\": \"pages/logs/logs\",\n      \"text\": \"日志\"\n    }]\n  },\n  \"networkTimeout\": {\n    \"request\": 10000,\n    \"downloadFile\": 10000\n  },\n  \"debug\": true\n}\n```\n\npages\n+ 接受一个数组，每一项都是字符串，来指定小程序由哪些页面组成。每一项代表对应页面的【路径+文件名】信息，数组的第一项代表小程序的初始页面。小程序中新增/减少页面，都需要对 pages 数组进行修改。\n\nwindow\n+ 用于设置小程序的状态栏、导航条、标题、窗口背景色。\n\ntabBar\n+ 如果我们的小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），那么我们可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。\n\n> Tip： 通过页面跳转（wx.navigateTo）或者页面重定向（wx.redirectTo）所到达的页面，即使它是定义在 tabBar 配置中的页面，也不会显示底部的 tab 栏。\n\n> tabBar 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。\n\n> tabBar的样式是固定的。上边为图标，下边为文字说明。\n\n### 10 常用组件\n\n+ [见官方文档。](https://mp.weixin.qq.com/debug/wxadoc/dev/component/)\n\n### 11 搜索小程序\n\n+ 小程序又增新流量入口，支持自定义关键词搜索。6月3日凌晨3点多，微信小程序后台新增推广功能，支持开发者添加与业务相关的自定义关键词，搜索策略将于6月9日正式生效。开发者可在小程序后台的 “推广” 模块中，配置与小程序业务相关的关键词\n\n> 值得注意的是，小程序可配置最多10个与业务相关的关键词，关键词在审核通过后，会和小程序的服务质量、用户使用情况等因素，共同影响搜索结果。每30天可以修改3次。\n\n> 关键词设置 可配置最多10个与业务相关的关键词，关键词在审核通过后，会和小程序的服务质量、用户使用情况等因素，共同影响搜索结果。\n\n[相关链接](http://www.sohu.com/a/146095199_282116)\n\n### 12 wx.login(OBJECT)\n\n+ 调用接口获取登录凭证（code）进而换取用户登录态信息，包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）。用户数据的加解密通讯需要依赖会话密钥完成。\n\n```js\n//app.js\nApp({\n  onLaunch: function() {\n    wx.login({\n      success: function(res) {\n        if (res.code) {\n          //发起网络请求\n          wx.request({\n            url: 'https://test.com/onLogin',\n            data: {\n              code: res.code\n            }\n          })\n        } else {\n          console.log('获取用户登录态失败！' + res.errMsg)\n        }\n      }\n    });\n  }\n})\n```\n\ncode 换取 session_key\n\n> ​ 这是一个 HTTPS 接口，开发者服务器使用登录凭证 code 获取 session_key 和 openid。其中 session_key 是对用户数据进行加密签名的密钥。为了自身应用安全，session_key 不应该在网络上传输。\n\n接口地址：\n+ https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code\n\n```js\n//正常返回的JSON数据包\n{\n      \"openid\": \"OPENID\",\n      \"session_key\": \"SESSIONKEY\"\n}\n//错误时返回JSON数据包(示例为Code无效)\n{\n    \"errcode\": 40029,\n    \"errmsg\": \"invalid code\"\n}\n```\n\n### 13 微信小程序支付\n\n要先到微信公众平台开通微信支付，绑定微信支付商户号\n\n步骤\n\nA：小程序向服务端发送商品详情、金额、openid\n\nB：服务端向微信统一下单\n\nC：服务器收到返回信息二次签名发回给小程序\n\nD：小程序发起支付\n\nE：服务端收到回调\n\n小程序向服务端发送商品详情、金额、openid\n\n```js\n  wx.request({\n    url:'test.php',\n    data:{\n      openid:'',     //openid\n      tatal_free:'', //商品金额\n      wx_body:''     //商品描述\n    }\n  })\n```\n\n> 然后服务端接收小程序发来的信息后 [会发起统一下单\b](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1)\n\n服务器下单完成后会返回签名参数\n\n```js\n{\n  'timeStamp': '',\n  'nonceStr': '',\n  'package': '',\n  'signType': 'MD5',\n  'paySign': ''\n}\n```\n\n> 前端拿到签名参数后发起支付\b\n\n```js\nwx.requestPayment({\n  'timeStamp': '',\n  'nonceStr': '',\n  'package': '',\n  'signType': 'MD5',\n  'paySign': '',\n  'success':function(res){\n    wx.showToast({\n      title: '\b支付成功'\n    })\n  },\n  'fail':function(res){},\n  'complete':function(res){}\n})\n```\n\n### 几点注意\n\n+ 如果有需要，建议只在项目目录中放置少量icon类的小图片，其他大图片可以上传到自己的服务器或者网盘中，然后在src中设置图片的网络资源地址。\n\n+ wx.request(object)中method的请求方式默认为GET。有效值: OPTIONS,GET,HEAD,POST,PUT,DELETE,TRACE,CONNECT。经过测试，若使用小写，在安卓中会导致无法发起请求，而在开发者工具和ios中则正常。\n\n+ 小程序执行wx.request(object)发送请求并收到success（成功）的消息后，会自动收到这样的回调参数：\n\n```js\n  {\n    data:'服务器返回的数据',\n    errMsg:'错误信息',\n    statusCode:HTTP状态码\n  }\n```\n```\n特别注意，在开发者工具和ios\b中，res.statusCode的数据类型是一个数值，而在Android中的数据类型是一个字符串，所以在\b判断res.statusCode时不能直接使用===操作符，而应该使用==操作符。\n```"

/***/ }),

/***/ "3ec8":
/*!*********************************************************************!*\
  !*** ./src/views/learn/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../node_modules/css-loader??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/lib??ref--8-oneOf-1-2!../../../node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "d2a3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4063":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/vue.vue?vue&type=template&id=0a25615c& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('vue-markdown',{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{"source":_vm.content}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "412d":
/*!***************************************************************!*\
  !*** ./src/views/learn/go.vue?vue&type=template&id=288545fa& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_go_vue_vue_type_template_id_288545fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./go.vue?vue&type=template&id=288545fa& */ "4f40");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_go_vue_vue_type_template_id_288545fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_go_vue_vue_type_template_id_288545fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "4291":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/kfhj.vue?vue&type=template&id=3481c599& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('vue-markdown',{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{"source":_vm.content}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "4f40":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/go.vue?vue&type=template&id=288545fa& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('vue-markdown',{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{"source":_vm.content}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "5561":
/*!**********************************************************!*\
  !*** ./src/views/learn/vue.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./vue.vue?vue&type=script&lang=js& */ "7b5e");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "5609":
/*!*****************************************************************!*\
  !*** ./src/views/learn/http.vue?vue&type=template&id=122e0acc& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_http_vue_vue_type_template_id_122e0acc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./http.vue?vue&type=template&id=122e0acc& */ "84c1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_http_vue_vue_type_template_id_122e0acc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_http_vue_vue_type_template_id_122e0acc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "5671":
/*!*********************************!*\
  !*** ./src/views/learn/xcx.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _xcx_vue_vue_type_template_id_3a26284e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xcx.vue?vue&type=template&id=3a26284e& */ "0c54");
/* harmony import */ var _xcx_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xcx.vue?vue&type=script&lang=js& */ "6e95");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _xcx_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _xcx_vue_vue_type_template_id_3a26284e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _xcx_vue_vue_type_template_id_3a26284e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "xcx.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "5cce":
/*!********************************************************************!*\
  !*** ./src/views/learn/mongodb.vue?vue&type=template&id=ca575784& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mongodb_vue_vue_type_template_id_ca575784___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./mongodb.vue?vue&type=template&id=ca575784& */ "ccc5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mongodb_vue_vue_type_template_id_ca575784___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mongodb_vue_vue_type_template_id_ca575784___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "601d":
/*!***********************************************************!*\
  !*** ./src/views/learn/kfhj.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kfhj_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./kfhj.vue?vue&type=script&lang=js& */ "b190");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kfhj_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "6e95":
/*!**********************************************************!*\
  !*** ./src/views/learn/xcx.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_xcx_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./xcx.vue?vue&type=script&lang=js& */ "e443");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_xcx_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "76f8":
/*!*********************************************************!*\
  !*** ./src/views/learn/go.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_go_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./go.vue?vue&type=script&lang=js& */ "bf49");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_go_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "7afa":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/xcx.vue?vue&type=template&id=3a26284e& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('vue-markdown',{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{"source":_vm.content}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "7b5e":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/vue.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "cadf");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "551c");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ "097d");
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _md_vue_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./md/vue.md */ "e69d");
/* harmony import */ var _md_vue_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_md_vue_md__WEBPACK_IMPORTED_MODULE_3__);



//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'vue',
  components: {},
  data: function data() {
    return {
      content: _md_vue_md__WEBPACK_IMPORTED_MODULE_3___default.a
    };
  }
});

/***/ }),

/***/ "7dda":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/git.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _md_git_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./md/git.md */ "c918");
/* harmony import */ var _md_git_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_md_git_md__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'git',
  components: {},
  data: function data() {
    return {
      content: _md_git_md__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  }
});

/***/ }),

/***/ "84c1":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/http.vue?vue&type=template&id=122e0acc& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('vue-markdown',{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{"source":_vm.content}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "942a":
/*!***************************************!*\
  !*** ./src/views/learn/md/mongodb.md ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "### MongoDB创建用户\n\n 1.创建管理员\n ```s\n # 创建（切换到）admin数据库\n use admin\n # 创建一个帐号\n db.createUser({user:\"admin\",pwd:\"admin\",roles:[\"root\"]})\n\n ```\n 2.授权认证\n ```s\n # 对帐号进行认证\n db.auth(\"admin\",\"admin\")\n ```\n 3.给使用的数据库添加用户\n ```s\n# 创建（切换到）test数据库\n use test\n # 给test数据库创建一个用户\n db.createUser({user:\"root\",pwd:\"123456\",roles:[{role:\"dbOwner\",db:\"test\"}]})\n ```\n4.通过--auth启动mongoDB\n ```s\n mongod -f /Users/zhangyu/server/mongo/etc/mongo.conf --auth\n ```\n\n ### MongoDB基本语法\n ![avatar](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/mongo/mgdb.png)\n + 插入文档\n + 更新文档\n + 删除文档\n + 查询文档\n\n```s\n# 查看数据库\nshow dbs\n# 创建数据库\nuse demo\n# 创建一个集合（表）\ndb.createCollection(\"user\")\n# 创建一个集合（表），并插入一条数据\ndb.users.insert({id:123,name:\"hello\"})\n# 删除一个集合\ndb.user.drop()\n# 查看集合（表）\nshow conllections\n# 删除数据库\ndb.dropDatabase()\n# 查看数据库\ndb.user.find() # db.user.find().pretty() (格式化)\n# 查询第一条数据\ndb.user.findOne()\n# 更新一条数据\ndb.user.update({userName:\"jack\"},{$set:{userAge:30}})\n# 更新一条子文档\ndb.user.update({userName:\"jack\"},{$set:{\"class.name\":'baidu-test'}})\n# 查询文档\ndb.user.find({userName:'jack'})\n# 查询子文档\ndb.user.find({'class.name':'baidu'})\n# 查询年龄大于40的文档\ndb.user.find({userAge:{$gt:40}})\n# 查询年龄小于40的文档\ndb.user.find({userAge:{$lt:40}})\n# 查询年龄等于40的文档\ndb.user.find({userAge:{$eq:40}})\n# 查询年龄大于等于40的文档\ndb.user.find({userAge:{$gte:40}})\n# 删除一条文档\ndb.user.remove({userId:101})\n```\n### 表数据设计和插入\n\n1.手动插入\n```s\n# 创建数据库db_demo\nuse db_demo\n# 创建goods集合（表），并插入一条数据\ndb.goods.insert({\"id\":'1001',name:'zhangsan',address:'深圳'})\n```\n2.文件导入\n```s\n# 创建一个空集合\ndb.createCollection(\"users\")\n# 用客户端工具将数据文件导入即可\n用mongohub客户端导入数据\n```\n3.用MongoDB终端进行导入\n```s\n# db_demo是数据库名称\n# users是集合名称（表）\n# /Users/zhangyu/Desktop/dumall-users.是要导入的文件\b的目录\nmongoimport -d db_demo -c users --file /Users/zhangyu/Desktop/dumall-users.\n```\n\n### 搭建基于Express框架的运行环境\n\n安装express generator生成器\n```s\n# 全局安装express-generator生成器\nnpm install -g express-generator\n# 查看express版本\nexpress --version\n```\n通过生成器自动创建项目\n```s\n# 生成一个项目\nexpress server\n```\n配置分析\n```s\n# express默认使用jade，可以修改成html\napp.set('views', path.join(__dirname, 'views'));\napp.engine('.html',ejs.__express);\napp.set('view engine', 'html');\n```\n\n### Node的启动和调试方式\n\n通过node命令启动\n```s\nnode server/bin/www\n```\npm2启动\n```s\n# 全局安装pm2 \nnpm install pm2 -g\n# 启动服务\npm2 start server/bin/www\n# 停掉服务\npm2 stop server/bin/www\n# 停掉所有服务\npm2 stop all\n# 查看启动的服务\npm2 list\n# 查看日志\npm2 log\n```\n\n### 基于Express开发后台接口\n\n安装Mongose\n\n创建model\n\n创建路由\n\n\n\n"

/***/ }),

/***/ "9af5":
/*!***********************************!*\
  !*** ./src/views/learn/index.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b4f3264a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b4f3264a& */ "d829");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "f9c1");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "3ec8");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b4f3264a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_b4f3264a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "9b97":
/*!**********************************!*\
  !*** ./src/views/learn/http.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_vue_vue_type_template_id_122e0acc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.vue?vue&type=template&id=122e0acc& */ "5609");
/* harmony import */ var _http_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.vue?vue&type=script&lang=js& */ "e779");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _http_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _http_vue_vue_type_template_id_122e0acc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _http_vue_vue_type_template_id_122e0acc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "http.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "b190":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/kfhj.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _md_kfhj_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./md/kfhj.md */ "fd92");
/* harmony import */ var _md_kfhj_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_md_kfhj_md__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'kfhj',
  components: {},
  data: function data() {
    return {
      content: _md_kfhj_md__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  }
});

/***/ }),

/***/ "b893":
/*!**********************************!*\
  !*** ./src/views/learn/md/go.md ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "## Go学习总结\n\n### 安装\n到golang官网下载，安装。\n```\nhttps://studygolang.com/dl\n```\n\n\n"

/***/ }),

/***/ "bf49":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/go.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _md_go_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./md/go.md */ "b893");
/* harmony import */ var _md_go_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_md_go_md__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'go',
  components: {},
  data: function data() {
    return {
      content: _md_go_md__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  }
});

/***/ }),

/***/ "c516":
/*!************************************!*\
  !*** ./src/views/learn/md/http.md ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "##  Http协议\n###  五层模型介绍\n![avatar](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/wcmx.png)\n* 物理层：主要作用是定义物理设备如何传输数据，网线，光纤 \n* 数据链路层：在通信实体间建立数据链路链接 \n* 网络层：为数据在节点之间传输创建逻辑链路 \n* 传输层：主要有两个协议 TCPIP 和 UDP ，它向用户提供了可靠的端到端的服务。 \n* 建立起了自己电脑到百度服务器的链接，它们两端如何去传输数据，它的传输数据的方式 ，都是在这层定义，传输层向高层屏蔽了下层数据通信的细节 \n* 应用层： 为应用软件提供了服务 http / ftp 是构建于TCP 协议之上，屏蔽了网络传输相关细节\n\n> 解析：\n* 经典五层模型：\n* 1.物理层：一些硬件之类\n* 2.数据链路层：0101之类的\n* 3.网络层：\n* 4.传输层：为用户提供end-to-end服务,向高层屏蔽了下层数据通信的细节\n* 5.应用层（http）:构建于TCP之上\n###  HTTP协议的发展历史\n\n#### 第一个版本 HTTP / 0.9\n* 只有一个命令 GET\n* 没有HEADER 等描述数据的信息\n* 服务器发送完毕就关闭\n\n#### 第二个版本 HTTP / 1.0\n* 增加了很多命令\n* 增加了status code 和 header\n* 多字符集支持、多部分发送、权限、缓存 等等\n   * 1，增加命令比如POST、PUT、Header     \n   * 2，增加status  code和header内容，\n      * （1）status  code用来描述服务端处理某一个请求之后，它的一个状态，\n      * （2）header，对应的是，不管是发送还是请求的相关的一些数据，它的描述以及我们对这部分数据如何进行操作的一个方法。\n\n#### 第三个版本 HTTP / 1.1\n* 持久链接\n* pipleine\n* 增加了 host 和其他一些命令 （在同一个物理服务器可以同时跑很多服务）\n\n#### 第四个版本 HTTP / 2.0\n* 所以数据都是以二进制传输\n* 同一个链接里面发送多个请求不在需要按照顺序来\n* 头信息压缩以及推送等提高效率的功能\n---\n+ 1，弄清楚一个概念，HTTP请求与TCP请求不是一个概念，在同一个TCP请求可以发送多个HTTP请求，以前的协议版本不能这么做，但是现在HTTP1.1.1里面可以这么做，而且在HTTP2里面是会更大的去优化相关的一些东西，来提高HTTP传输效率以及服务器的性能。\n+ 2，这边TCP连接对应多个HTTP请求，而一个HTTP请求肯定在某一个TCP连接里面去定义发送的。\n\n###  HTTP三次握手\n![avatar](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/scws.png)\n* 为了防止服务端开始无用的链接，网络传输是有延时的，传输过程中防止丢包，造成重复创建链接，资源浪费，所以设置三次握手。为了规避网络传输延时。\n\n* 1.客户端发起一个我要连接的数据包请求给服务器，里面会有一个SYN的标志位，标志这是一个创建请求的数据包\n* 2.服务端接收到数据包后知道有一个客户要和它建立链接了，然后会开启一个TCP socket 端口，开启之后返回数据给客户端，数据包含 SYN标志位，ACK= X+1，Seq=Y\n* 3.客户端拿到数据包后意味着服务器端允许创建TCP连接，然后发送数据包 ACK = Y+1，Seq=Z\n\n* http只有请求和响应这个概念，没有链接这个概念\n* 在http1.0的时候，在http request的时候，在里面发起三次握手，创建TCP链接，然后再发起请求，请求结束后则关闭TCP链接\n* 在http1.1的时候，可以通过申明这个链接，可以保持在那里，后面就不需要三次握手开销\n* 在http2.0可以请求并发，只需要一个TCP链接   \n\n* 第一次握手，用户向服务端发送请求，SYN=标志位=创建请求的数据包,Seq=X为数字，一般为1。\n* 第二次握手，服务端返回请求\n* 第三次握手，客户端再次传回服务端\n\n###  URI,URL和URN\n* URI：统一资源标志符,用来标识互联网上的信息资源，包括URL和URN\n* URL：统一资源定位器\n* URN：永久统一资源定位符，在资源移动后还能被找到\n\n> urn作用在于搬动了资源后仍然可以直接找到，相当于面向对象命名。\n框架一般都会出现这个概念，方便多次调用的东西都可以理解为urn，-。\n个人理解\n\n#### 完整的URL地址：http://user:pass@host.com:80/path?query=string#hash\n* http:// 协议\n* user:pass@ 代表访问资源的身份使用用户名和密码\n* host.com 用来定位资源的服务器在互联网中的位置(可以是IP 也可以是 域名)\n* :80 端口，每台物理服务器可以跑很多软件的web服务，端口就是监听物理服务器上面某个具体的web服务\n* /path 路由，web 服务器里面的内容可以通过路由进行定位\n* ?query=string 搜索参数\n* #hash 查找文档的某个片段\n\n###  HTTP报文格式\n#### HTTP方法\n\t 用来定义对于资源的操作\n\t 常用有GET、POST\n\t 从定义上讲有各自的语义\n#### HTTP CODE\n\t定义服务器对请求的处理结果\n\t各个区间的CODE有各自的语义 \n\t好的HTTP服务可以通过CODE判断结果\n\n#### method ： \n    GET:获取数据\n    POST：创建数据\n    PUT：更新数据\n    DELETE ： 删除数据\n\n* http方法：用来定义对于资源的操作\n* http code ：定义服务器对请求的处理结果\n* 100-199代表操作要持续进行\n* 200-299代表成功\n* 300-399需要重定向\n* 400-499代表请求有问题\n* 500-599服务器错误\n\n### CORS跨域请求的限制和解决\n\n* jsonp实现的原理：浏览器允许在某些标签里面写路径加载，是允许跨域的。\n* JSONP是服务器与客户端跨源通信的常用方法，它的基本思想是，网页通过添加一个&lt;script&gt;元素，向服务器请求数据，这种做法不受同源政策限制（亦或者img/src等其他类似访问link的标签）。\n* 跨域概念：一般的，只要网站的 协议名protocol、 主机host、 端口号port 这三个中的任意一个不同，网站间的数据请求与传输便构成了跨域调用。而这是不允许的，想象一下假如允许的话，那么你登陆银行网站，又不小心登陆了一个黑客网站，黑客网站就可以读取银行的cookie进而冒充客户为所欲为。\n* 跨域原理：请求发送成功，服务器也接受到了，内容也已经返回了，但浏览器在解析了返回的内容之后，发现这是不允许的，所以拦截掉了内容。\n* 浏览器如果接收到的服务器返回的响应头中包含 Access-Control-Allow-Origin 则视为允许跨域，该属性设置为 * 则允许所有网站跨域，但是并不安全，所以我们往往设置为我们允许的网站（类似白名单的作用），如截图中仅允许 http://127.0.0.1:8888 的请求跨域访问。但该值仅允许设置为一个，如果需要设置多个，常用做法是在代码中进行判断，动态设置该值即可。\n* 跨域原理：请求发送成功，服务器也接受到了，内容也已经返回了，浏览器在解析了返回的内容之后，发现这是不允许的，所以拦截掉了内容，并在命令行报错，其实是浏览器提供的功能,如果在curl里面是没有跨域概念的。\n* 1，通过 Access-Control-Allow-Origin 响应头 来实现跨域请求\n* 2，通过JSONP来实现跨域请求\n\n### CORS跨域请求的限制及预请求限制\n\n#### 在跨域的时候\n    1.默认允许的方法只有GET、HEAD、POST ，其余 PUT 、DELETE 都是默认不允许的，浏览器会预请求去验证的。\n    2.默认允许的 Content-Type 有 text/plain、multipart/form-data、application/x-www-form-urlencoded 其余Content-Type 都需要 预请求验证\n    3.其他限制：请求头限制、XMLHttpRequestUpload 对象均没有注册任何事件监听器、请求中没有使用 ReadableStream 对象\n\n### Cache-Control的含义和使用\n\n    客户端从服务器请求数据经历如下基本步骤:\n    1、如果请求命中本地缓存则从本地缓存中获取一个对应资源的\"copy\"；\n    2、检查这个\"copy\"是否fresh,是则直接返回，否则继续向服务器转发请求。\n    3、服务器接收到请求，然后判断资源是否变更，是则返回新内容，否则返回304，未变更。\n    4、客户端更新本地缓存。\n    \n    no-cache的作用是：强制客户端跳过步骤2，直接向服务器发送请求。也就是说每次请求都必须向服务器发送。\n    must-revalidate:作用与no-cache相同，但更严格，强制意味更明显。但这只是理论上的描述，根据我在ff6上的测试，它几乎不起作用：只要请求的频率加快到一定程度，服务器就接收不到请求。\n    no-store:缓存将不存储response,包括header和body。测试结果表明，除每次请求都必发送到服务器外，响应代码均是200，且request并没有发送\"If-Modified-Since\"和\"If-None-Match\"头，这意味着缓存的确没有存储response。\n\n    以上三者都是要求客户端每次请求都必须到服务器进行revalidate，此功能还可以通过max-age实现: Cache-Control:max-age=100\n\n\n\n#### 有max-age，服务端内容更新后，希望客户端能获取新的静态资源\n    解决：加上hash码，内容不变，hash码不变，内容变了，hash码变了，请求的url变化，就可以获取更新的文件\n\n#### 重新验证：\n    must-revalidate：缓存过期后，必须去原服务端发送这个请求，重新获取这部分数据，验证是否真的过期\n    procy-revalidate：和上面的差不多，用在缓存服务器\n    其他：\n    no-store： 不能缓存，只能每次从服务器拿\n    no-transform：不压缩、转换返回内容\n    这些声明都没有强制效应\n\n#### 可缓存性：\n    public：http返回的内容经过的任何路径都可以对返回内容进行缓存\n    private：发起请求的浏览器才可以缓存\n    no-cache：可以在发起端进行缓存，要服务器验证才可以使用缓存\n    到期：\n    max-age=seconds 到期多少秒，再次请求\n    s-maxage=seconds 代替max-age 在代理服务器内生效\n    max-stale=seconds 返回的资源有这个属性，即便缓存已经过期，在这个时间内还可以继续使用已经过期的缓存\n\n#### 静态资源解决方案：把实际打包完成的js文件上的文件名上加上一串hash码，如果内容没有变化，hash码不会变化，如果内容有变化，则hash码也会变化。这样可以达到更新缓存的目的\n\n    no-cache:本地可以用使用缓存，但需要服务器验证后才能使用\n    no-store:本地和代理服务器都不能存储缓存，都需要从服务器端重新请求\n    no-transform：告诉代理服务器不能随便改变返回的内容\n    must-revalidate:当缓存到期后，不能直接使用本地缓存数据而需要重新验证\n    proxy-revalidate：缓存服务器上，必须去原服务器重新请求一遍，不能使用本地缓存\n\n\n#### 到期：\n    max-age=<seconds> 服务器缓存到期时间\n    s-maxage=<seconds> 代理服务器缓存的到期时间\n    max-stale=<seconds> 到期后，即便缓存过期，只要在max-stale时间内，依然有缓存\n\n#### 其他\n    1，no-store 本地和代理服务器都不可以存缓存\n    2，no-transform 代理服务器不要去改动返回内容\n    no-store（本地和代理服务器都不可以缓存），no-transform(主要用在代理服务器，不允许改动服务器返回的内容)\n\n* 可缓存性，因为数据传输过程中可能存在多个代理服务器，则数据缓存中的public表示路径上所有（包括代理服务器）都可以对数据进行缓存；而private则代表只有发起请求的浏览器才能进行缓存；no-cache表任何不能缓存\n\n* Cache-Control是客户端的缓存。虽然服务端的文件变了但是url没有变，所以客户端依旧使用缓存的文件。前端常见的解决策略是，生成文件的hash码。\n\n#### 缓存头Cache-Control:\n    一、可缓存性(哪些地方可以缓存)：public（任何地方都可以）， private（发起请求的浏览器可以进行缓存）,  no-cache（任何地方都不可以）\n    二：时间限制：max-age = <seconds>, s-max-age = <seconds>（专用在代理服务器中)，max-stale = <seconds>(发起请求端设置的)\n    三：重新验证：must-revalidate(时间过期必须去原服务端重新获取数据)，proxy-revalidate(和must-revalidate类似,用于缓存服务器中)\n\n\n### 缓存验证Last-Modified和Etag的使用\n![avatar](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/cache.png)\n* 设置了etag、last-modified后，浏览器在第二次发起请求后就会把if-none-match和if-modified-since带上\n####  HTTP验证头：\n    1，Last-Modified 上次修改时间\n    配合If-Modified-Since使用\n    对比上次修改时间以验证资源是否需要更新\n    2，Etag\n    数据签名，对响应内容产生一个唯一的字符串。\n    配合If-Non-Match使用\n    对比资源的签名判断是否使用缓存\n* 304 :\n如果客户端发送了一个带条件的GET 请求且该请求已被允许，而文档的内容（自上次访问以来或者根据请求的条件）并没有改变，则服务器应当返回这个304状态码。简单的表达就是：客户端已经执行了GET，但文件未变化。\n![avatar](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/304.png)\n\n* etag,数据签名.数据修改，资源的数据签名就会修改.例如hash两个属性：if-match,if-non-match里面放的etag值，对比服务端和客户端判断是否使用缓存\n\n* Cache-control：nocache 可以在发起端缓存但要在服务端进行验证是否可以缓存;last-modified：上次修改时间;if-modified-since,in-unmodified-since:服务器读取这两个值，看资源是否重新修改，服务器告诉客户端是否可以用缓存的资源\n\n* Cache-Control: nocache,每次浏览器发起对一个已经设置了Cache-Control资源的请求时，都会要到服务器端进行资源的验证。验证之后确定资源可以使用缓存，确定该资源可以使用缓存，才会读取本地缓存\n\n### cookie\n\n    domain\n    访问域设定\n    cookie只能一个域访问\n    a.com的cookie b.com不能访问\n    domain让a.test.com能访问test.com的cookie\n    不能跨域设置cookie，只能一级通过domain设置二级等\n\n    max-age：有效期多长\n    expires：到期的具体时间\n    服务端返回数据时通过set-Cookie设置到浏览器内，浏览器保存cookie后，在同域的访问内下次请求会自动带上\n\n    max-age 和 expires 设置过期时间\n    Secure 只在https的时候发送\n    httpOnly无法通过js访问,浏览器中还是有的。\n    cookie时效\n    如果没有设置时间，浏览器关闭失效。\n    'Set-cookie': ['id=123; max-age=30', 'name=lin'] : id=123->30s后失效\n\n    设置test.com以及test.com的所有二级域名享受到cookie\n\n### HTTP长连接\n\n    Connection：keep-alive（长）、close（短）\n    http2:信道复用 tcp并发发送http请求\n    http请求是在tcp上发送的，一个tcp可以发送多个http，http1.1是阻塞的\n\n    现在保持长链接比较多\n    应为多次建立tcp链接可能比长链接的开销更大\n    长链接可以设置timeout\n    同个tcp内是有先后顺序的\n    浏览器可以并发6个tcp\n\n    session\n    用cookie保存sesion将用户登陆key保存到cookie，每次用户请求时读取cookie值，定位用户信息\n    session：定位到用户\n\n### 数据协商\n\n    服务端返回\n    X-Content-Type-Options ： nosniff\n    服务端不接受contnettype的数据类型或没设置type，不主动预测类型\n\n    浏览器端会自动加上，也可以在ajax时设置\n    Accept：浏览器能展示的数据格式\n    Accept-Encoding：能接受的数据压缩格式\n    Accept-Language：希望接受的语言\n    User-Agent：系统名 内核 浏览器版本\n\n\n    数据协商：\n    根据客户端发来的要求，服务端返回对应的数据\n    Accept 属性\n    Accept（什么数据类型） Accept-Encoding（编码方式，压缩） Accept-Language（使用的语言） User-Agent（处于哪种系统环境）\n    Content属性\n    Content-Type Content-Encoding Content-Language\n\n### redirect\n\n    通过url去访问资源，资源不在原来的位置，服务器要告诉浏览器，请求的资源在哪里，浏览器再重新请求\n    Lacation：新url\n    302:临时跳转 每一次都要通过服务器跳转\n    301:永久跳转 第二次访问后，就不需要再通过服务器去跳转，是通过浏览器跳转的，被缓存了新url\n\n### 总结\n\n![avatar](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/zj.jpg)"

/***/ }),

/***/ "c918":
/*!***********************************!*\
  !*** ./src/views/learn/md/git.md ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "## Git学习总结\n\n### Git仓库初始化和提交\n    初始化一个Git仓库，使用git init命令。\n\n    添加文件到Git仓库，分两步：\n\n    使用命令git add <file>，注意，可反复多次使用，添加多个文件；\n    使用命令git commit -m <message>，完成。\n    \n### 版本回退\n    git log:显示从最近到最远的提交日志\n    如果嫌输出信息太多，看得眼花缭乱的，可以试试加上--pretty=oneline参数,git log --pretty=oneline\n\n    首先，Git必须知道当前版本是哪个版本，在Git中，用HEAD表示当前版本，上一个版本就是HEAD^，上上一个版本就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100\n    使用 git reset --hard HEAD^ 回退到上个版本\n\n    如果回退到了上个版本，那么问题来了，现在要怎么回到现在呢？好比你从21世纪坐时光穿梭机来到了19世纪，想再回去已经回不去了，肿么办？\n    办法其实还是有的，只要上面的命令行窗口还没有被关掉，你就可以顺着往上找啊找啊，找到那个版本的commit id\n    使用：git reset --hard 1094a，其中1094a是commit id\n\n    现在，你回退到了某个版本，关掉了电脑，第二天早上就后悔了，想恢复到新版本怎么办？找不到新版本的commit id怎么办？\n    Git提供了一个命令git reflog用来记录你的每一次命令\n\n    总结：\n    HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。\n    穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。\n    要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本\n\n\n### 工作区和暂存区\n![avatar](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/git/0.jpeg)\n\n    Git和其他版本控制系统如SVN的一个不同之处就是有暂存区的概念.\n\n    第一步是用git add把文件添加进去，实际上就是把文件修改添加到暂存区；\n    第二步是用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支。\n    因为我们创建Git版本库时，Git自动为我们创建了唯一一个master分支，所以，现在，git commit就是往master分支上提交更改。\n    你可以简单理解为，需要提交的文件修改通通放到暂存区，然后，一次性提交暂存区的所有修改\n\n\n![avatar](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/git/1.jpeg)\n\n    所以，git add命令实际上就是把要提交的所有修改放到暂存区（Stage），然后，执行git commit就可以一次性把暂存区的所有修改提交到分支。\n\n![avatar](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/git/2.jpeg)\n\n### 管理修改\n\n    Git管理的是修改\n    比如你新增了一行，这就是一个修改，删除了一行，也是一个修改，更改了某些字符，也是一个修改，删了一些又加了一些，也是一个修改，甚至创建一个新文件，也算一个修改。\n\n    每次修改，如果不用git add到暂存区，那就不会加入到commit中\n\n\n### 撤销修改\n\n```js\n git checkout -- readme.txt\n```\n\n    命令git checkout -- readme.txt意思就是，把readme.txt文件在工作区的修改全部撤销，这里有两种情况：\n    一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；\n    一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态。\n    总之，就是让这个文件回到最近一次git commit或git add时的状态。\n\n```\ngit checkout -- file命令中的--很重要，没有--，就变成了“切换到另一个分支”的命令，我们在后面的分支管理中会再次遇到git checkout命令。\n```\n\n```\n现在假定是凌晨3点，你不但写了一些胡话，还git add到暂存区了\n庆幸的是，在commit之前，你发现了这个问题。用git status查看一下，修改只是添加到了暂存区，还没有提交\nGit同样告诉我们，用命令git reset HEAD <file>可以把暂存区的修改撤销掉（unstage），重新放回工作区\ngit reset命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用HEAD时，表示最新的版本\n```\n\n```\n场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git checkout -- file。\n场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git reset HEAD <file>，就回到了场景1，第二步按场景1操作。\n场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一节，不过前提是没有推送到远程库。\n```\n\n### 删除文件\n\n````\n在Git中，删除也是一个修改操作\n````\n先添加一个新文件test.txt到Git并且提交\n\n```\n$ git add test.txt\n\n$ git commit -m \"add test.txt\"\n[master b84166e] add test.txt\n 1 file changed, 1 insertion(+)\n create mode 100644 test.txt\n```\n一般情况下，你通常直接在文件管理器中把没用的文件删了，或者用rm命令删了\n```\n$ rm test.txt\n```\n这个时候，Git知道你删除了文件，因此，工作区和版本库就不一致了，git status命令会立刻告诉你哪些文件被删除了\n```\n$ git status\nOn branch master\nChanges not staged for commit:\n  (use \"git add/rm <file>...\" to update what will be committed)\n  (use \"git checkout -- <file>...\" to discard changes in working directory)\n\n    deleted:    test.txt\n\nno changes added to commit (use \"git add\" and/or \"git commit -a\")\n```\n现在你有两个选择，一是确实要从版本库中删除该文件，那就用命令git rm删掉，并且git commit\n```\n$ git rm test.txt\nrm 'test.txt'\n\n$ git commit -m \"remove test.txt\"\n[master d46f35e] remove test.txt\n 1 file changed, 1 deletion(-)\n delete mode 100644 test.txt\n```\n现在，文件就从版本库中被删除了\n\n另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本\n```\n$ git checkout -- test.txt\n```\ngit checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。\n\n小结\n```\n命令git rm用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删，但是要小心，你只能恢复文件到最新版本，你会丢失最近一次提交后你修改的内容。\n```\n\n### 添加远程库\n\n#### 现在的情景是，你已经在本地创建了一个Git仓库后，又想在GitHub创建一个Git仓库，并且让这两个仓库进行远程同步，这样，GitHub上的仓库既可以作为备份，又可以让其他人通过该仓库来协作，真是一举多得。\n\n首先，登陆GitHub，然后，在右上角找到“Create a new repo”按钮，创建一个新的仓库\n\n把本地仓库的内容推送到GitHub仓库\n```\n$ git remote add origin git@github.com:<GitHub账户名>/learngit.git\n例如: git remote add origin git@github.com:sunny586/learngit.git\n```\n```\n同步github上的代码库时，如果使用SSH链接，而你的SSH key没有添加到github帐号设置中，系统会报错\n解决办法：\n需要在本地创建SSH key，然后将生成的SSH key文件内容添加到github帐号上去。\n  首先利用本机安装的Git创建SSH key，执行如下命令就可以\n  1. ssh-keygen -t rsa -C <your email>\n  2. cat ~/.ssh/id_rsa.pub\n```\n\n把本地库的所有内容推送到远程库上\n```\n$ git push -u origin master\n```\n    由于远程库是空的，我们第一次推送master分支时，加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。\n\n    在推送内容到github仓库时，先git pull origin master \n    如果报错：fatal: refusing to merge unrelated histories\n    这是因为在Github新建一个仓库，本地也写了一个仓库，他们是两个不同的项目;\n    要把两个不同的项目合并，git需要添加一句代码：\n    git pull origin master --allow-unrelated-histories\n小结\n```\n要关联一个远程库，使用命令git remote add origin git@server-name:path/repo-name.git；\n关联后，使用命令git push -u origin master第一次推送master分支的所有内容；\n此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改；\n分布式版本系统的最大好处之一是在本地工作完全不需要考虑远程库的存在，也就是有没有联网都可以正常工作，而SVN在没有联网的时候是拒绝干活的！当有网络的时候，再把本地提交推送一下就完成了同步，真是太方便了！\n```\n ### 从远程库克隆\n\n* 假设我们从零开发，那么最好的方式是先创建远程库，然后，从远程库克隆\n* 下一步是用命令git clone克隆一个本地库\n```\n$ git clone git@github.com:michaelliao/gitskills.git\nCloning into 'gitskills'...\nremote: Counting objects: 3, done.\nremote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 3\nReceiving objects: 100% (3/3), done.\n```\n```\n你也许还注意到，GitHub给出的地址不止一个，还可以用https://github.com/michaelliao/gitskills.git这样的地址。实际上，Git支持多种协议，默认的git://使用ssh，但也可以使用https等其他协议。\n\n使用https除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令，但是在某些只开放http端口的公司内部就无法使用ssh协议而只能用https\n```\n小结\n```\n要克隆一个仓库，首先必须知道仓库的地址，然后使用git clone命令克隆。\nGit支持多种协议，包括https，但通过ssh支持的原生git协议速度最快。\n```\n\n### 创建与合并分支\n\n在版本回退里，你已经知道，每次提交，Git都把它们串成一条时间线，这条时间线就是一个分支。截止到目前，只有一条时间线，在Git里，这个分支叫主分支，即master分支。HEAD严格来说不是指向提交，而是指向master，master才是指向提交的，所以，HEAD指向的就是当前分支。\n\n一开始的时候，master分支是一条线，Git用master指向最新的提交，再用HEAD指向master，就能确定当前分支，以及当前分支的提交点：\n\n![](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/git/fz.png)\n\n每次提交，master分支都会向前移动一步，这样，随着你不断提交，master分支的线也越来越长\n\n![](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/git/fzs.png)\n![](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/git/fzs_sz.png)\n\n小结\n```\nGit鼓励大量使用分支：\n查看分支：git branch\n创建分支：git branch <name>\n切换分支：git checkout <name>\n创建+切换分支：git checkout -b <name>\n合并某分支到当前分支：git merge <name>\n删除分支：git branch -d <name>\n```\n* 如果想要删除掉某个分支，并同步到远端请使用命令：\n```\ngit push origin :<分支名称>\n```"

/***/ }),

/***/ "ccc5":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/mongodb.vue?vue&type=template&id=ca575784& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('vue-markdown',{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{"source":_vm.content}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "ce1f":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/git.vue?vue&type=template&id=3a989c1e& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('vue-markdown',{directives:[{name:"highlight",rawName:"v-highlight"}],attrs:{"source":_vm.content}})],1)}
var staticRenderFns = []



/***/ }),

/***/ "d2a3":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-oneOf-1-2!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/index.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d354":
/*!*****************************************************************!*\
  !*** ./src/views/learn/kfhj.vue?vue&type=template&id=3481c599& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kfhj_vue_vue_type_template_id_3481c599___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./kfhj.vue?vue&type=template&id=3481c599& */ "4291");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kfhj_vue_vue_type_template_id_3481c599___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_kfhj_vue_vue_type_template_id_3481c599___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "d829":
/*!******************************************************************!*\
  !*** ./src/views/learn/index.vue?vue&type=template&id=b4f3264a& ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b4f3264a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b4f3264a& */ "14af");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b4f3264a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b4f3264a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "da49":
/*!****************************************************************!*\
  !*** ./src/views/learn/vue.vue?vue&type=template&id=0a25615c& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_vue_type_template_id_0a25615c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b9f9b84a-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./vue.vue?vue&type=template&id=0a25615c& */ "4063");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_vue_type_template_id_0a25615c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b9f9b84a_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_vue_vue_type_template_id_0a25615c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "e08c":
/*!*************************************!*\
  !*** ./src/views/learn/mongodb.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mongodb_vue_vue_type_template_id_ca575784___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mongodb.vue?vue&type=template&id=ca575784& */ "5cce");
/* harmony import */ var _mongodb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mongodb.vue?vue&type=script&lang=js& */ "16f1");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mongodb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mongodb_vue_vue_type_template_id_ca575784___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mongodb_vue_vue_type_template_id_ca575784___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "mongodb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "e443":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/xcx.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _md_xcx_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./md/xcx.md */ "3b56");
/* harmony import */ var _md_xcx_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_md_xcx_md__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'xcx',
  components: {},
  data: function data() {
    return {
      content: _md_xcx_md__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  }
});

/***/ }),

/***/ "e69d":
/*!***********************************!*\
  !*** ./src/views/learn/md/vue.md ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "### 模板语法\n  \n* Mustache语法: {{msg}}\n* Html赋值: v-html=\"\"\n* 绑定属性:v-bind:id=\"\"\n* 使用表达式: {{ok? 'YES':'NO'}}\n* 文本赋值:v-text=\"\"\n* 指令:v-if=\"\"\n* 过滤器: {{message|capitalize}} & v-bind.id=\"rowId | formatId\"\n\n### Class和Style绑定\n* 对象语法: v-bind:class=\"{active:isActive,'text-danger':hasError}\"\n* 数组语法: \n```html\n<div v-bind:class=\"[a,b]\"></div>\ndata:{\n  a:'aClass',\n  b:'bClass'\n}\n```\n* style绑定－对象语法: v-bind:style=\"{color:activeColor,fontSize:fontSize+'px'}\"\n\n### 条件渲染\n* v-if\n* v-else\n* v-else-if\n* v-show\n* v-cloak\n\n### vue 事件处理事件\n![avatar](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/event.png)\n\n### Vue组件\n* 全局组件和局部组件\n* 父子组件通讯－数据传递\n* Slot\n\n![avatar](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/component.png)\n* 子组件操作父组件数据。通过给父组件绑定自定义事件，子组件方法中使用this.$emit('自定义事件名')（此方法相当于jquery里面的trigger）来执行父组件的函数，从而改变父组件数据。\n* 如果想要子组件传值给父组件，通过this.$emit('自定义事件名','想传的值'）传递给父组件，父组件的该自定义事件回调方法的入参，即为你想传递的值。\n\n### 路由基础介绍\n\n#### 什么是前端路由？\n    路由是根据不同的url地址展示不同的\b内容和页面\n\n    前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，之前是通过服务端根据url的不同返回不同的页面实现的\n#### 什么时候使用前端路由？\n    在单页面应用，大部分页面结构不变，只改变部分内容的时候使用\n#### 前端路由有什么优点和缺点？\n    优点：\n        用户体验好，不需要每次从服务器全部获取，快速展现给用户\n    缺点：\n        不利于SEO\n        使用浏览器的前进，后退的时候会重新发请求，没有合理地\b利用缓存\n        单页面无法记录之前滚动的位置，无法在前进，后退的时候纪录滚动条的位置\n\n ```html     \n<router-link> this.$router.push({path:\"\"}) 等于A标签做跳转\n\n<router-view> 跳转之后渲染的位置\n```\n\n![avatar](https://raw.githubusercontent.com/sunny586/sunny586.github.io/master/images/dtly.png)\n\n\n\n\n\n"

/***/ }),

/***/ "e779":
/*!***********************************************************!*\
  !*** ./src/views/learn/http.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_http_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./http.vue?vue&type=script&lang=js& */ "01a8");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_http_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "ea95":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/learn/mongodb.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _md_mongodb_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./md/mongodb.md */ "942a");
/* harmony import */ var _md_mongodb_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_md_mongodb_md__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'mongodb',
  components: {},
  data: function data() {
    return {
      content: _md_mongodb_md__WEBPACK_IMPORTED_MODULE_0___default.a
    };
  }
});

/***/ }),

/***/ "eac1":
/*!*********************************!*\
  !*** ./src/views/learn/vue.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_vue_vue_type_template_id_0a25615c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue.vue?vue&type=template&id=0a25615c& */ "da49");
/* harmony import */ var _vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue.vue?vue&type=script&lang=js& */ "5561");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "2877");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _vue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vue_vue_vue_type_template_id_0a25615c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vue_vue_vue_type_template_id_0a25615c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

component.options.__file = "vue.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "f9c1":
/*!************************************************************!*\
  !*** ./src/views/learn/index.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "0082");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "fd92":
/*!************************************!*\
  !*** ./src/views/learn/md/kfhj.md ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n### 环境安装\n\n安装淘宝镜像\n```\nnpm install -g cnpm --registry=https://registry.npm.taobao.org\n```\n\n#### nodejs环境安装\n\nwindows和mac安装\n```\n去nodejs官网直接傻瓜式安装即可(.msi或.pkg安装)，https://nodejs.org/en/download/\n```\nLinux下安装node环境\n```s\n# 使用wget下载linux的nodejs的压缩包\nwget https://npm.taobao.org/mirrors/node/v6.10.3/node-v6.10.3-linux-x64.tar.xz\n#  解压缩会生产一个tar包\nxz -d node-v6.10.3-linux-x64.tar.xz\n# 继续解压tar包\ntar -xvf node-v6.10.3-linux-x64.tar\n# 建立node软连接\nln -s /node-v6.10.3-linux-x64/bin/node /usr/local/bin/node\n# 建立npm软连接\nln -s /node-v6.10.3-linux-x64/bin/npm /usr/local/bin/npm\n```\n### MongoDB安装\n### windows下MongoDB安装\n```\n下载安装包或者压缩包\n添加db存储和日志存储文件夹\n添加服务，配置环境变量，启动MongoDB\n```\n###### [详细安装过程](https://www.imooc.com/article/18438 \"详细安装过程\")\n\n### Linux下MongoDB安装\n\n1.下载安装包或者压缩包\n\n2.上传服务器\n```\nscp [-r] <压缩包的地址> <服务器用户名>@<服务器ip>:<服务器要存放的目录>\n其中如果加-r表示传文件夹，不加则传文件。这里是文件，不需要加-r。\n```\n3.解压缩\n```\ntar -zxvf <压缩包位置>\n```\n4.添加db存储和日志存储文件夹\n```s\n# 创建mongodb文件夹\nmkdir mongodb  \n# 将解压缩后的文件移动到mongodb文件夹里\nmv <解压缩后的文件> mongodb\n# 创建一个data文件夹\nmkdir data\n# 创建一个logs文件夹\nmkdir logs\n# 进到logs文件夹里\ncd logs/\n# 创建一个mongo.log的文件\ntouch mongo.log\n# 退出logs文件夹\ncd ..\n# 创建一个配置文件夹etc\nmkdir etc\n# 进到etc文件夹里\ncd etc/\n# 创建mongo.conf配置文件，并编辑\nvi mongo.conf\n    dbpath=/mongodb/data\n    logpath=/mongodb/logs/mongo.log\n    logappend=true\n    journal=true\n    quiet=true\n    port=27017\n# 建mongo软连接\nln -s <mongodb文件夹>/bin/mongo /usr/local/bin/mongo\n#建mongod软连接\nln -s <mongodb文件夹>/bin/mongod /usr/local/bin/mongod\n# 启动mongo(/mongodb/etc/mongon.conf，是mongon.conf所在的路径)\nmongod -f /mongodb/etc/mongon.conf\n```\n\nmongo.conf配置文件说明\n```s\n# 数据库数据存放目录\ndbpath=/usr/local/mongodb304/data\n# 数据库日志存放目录\nlogpath=/usr/local/mongodb304/logs/mongodb.log \n# 以追加的方式记录日志\nlogappend = true\n# 端口号 默认为27017\nport=27017 \n# 以后台方式运行进程\nfork=true \n# 开启用户认证\nauth=true\n# 关闭http接口，默认关闭http端口访问\nnohttpinterface=true\n# mongodb所绑定的ip地址\nbind_ip = 127.0.0.1 \n# 启用日志文件，默认启用\njournal=true \n# 这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false\nquiet=true \n```\n\n### Mac下MongoDB安装\n```\n和Linux类似\n```\n\n\n\n"

/***/ })

}]);
//# sourceMappingURL=learn.9566b975.js.map