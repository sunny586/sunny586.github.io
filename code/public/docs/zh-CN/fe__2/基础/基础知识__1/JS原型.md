# 原型

# zepto 是什么

先来看看 zepto 是什么。别以为他很基础，平时用 zepto 很多的，并不一定能注意到这些问题，还是跟我一起看看。

## demo

先做一个简单的 demo 页面，就平时最基本的使用方式

``` html
    <p>jquery test 1</p>
    <p>jquery test 2</p>
    <p>jquery test 3</p>

    <div id="div1">
        <p>jquery test in div</p>
    </div>

    <script type="text/javascript" src="jquery-3.2.1.js"></script>
    <script type="text/javascript">
        var $p = $('p')
        $p.css('color', 'red')  // css 是原型方法
        console.log($p.html())  // html 是原型方法

        var $div1 = $('#div1')
        $div1.css('color', 'blue')  // css 是原型方法
        console.log($div1.html())  // html 是原型方法
    </script>
```
# zepto 原型如何实现

## 找到 zepto 对象是哪里创建的

```js
  // 空对象
  var zepto = {}

  // 这就是构造函数
  function Z(dom, selector) {
    var i, len = dom ? dom.length : 0
    for (i = 0; i < len; i++) this[i] = dom[i]
    this.length = len
    this.selector = selector || ''
  }

  zepto.Z = function(dom, selector) {
    // 注意，出现了 new 关键字
    return new Z(dom, selector)
  }

  zepto.init = function (selector) {
    // 源码中，这了的处理情况比较复杂。但因为本次只是针对原型，因此这里就弱化了
    var slice = Array.prototype.slice
    var dom = slice.call(document.querySelectorAll(selector))
    return zepto.Z(dom, selector) 
  }

  // 即使用 zepto 时候的 $
  var $ = function(selector){
    return zepto.init(selector)
  }
```

## 找到原型

```js
$.fn = {
    constructor: zepto.Z,

    css: function (key, value) {

    },
    html: function (value) {

    }
}

zepto.Z.prototype = Z.prototype = $.fn
```

构造函数`Z`的原型的方法，是在`$.fn`定义完了之后，又赋值给`Z.prototype`的

另外，`constructor`赋值了`zepto.Z`而不是`Z`，这是我不太理解的地方，不过完全不影响使用

## 最后

以上提到的每一个核心函数，都要完全透彻的理解才行。

# zepto 看源码

一开始，是一个 umd 规范的封装

接下来 

```js
var Zepto = (function () {
    var $ = function () {

    }

    // 返回核心函数
    return $
})

// 暴露全局方法
window.Zepto = Zepto
window.$ === undefined && (window.$ = Zepto)

// 一些扩展，https://github.com/madrobby/zepto#zepto-modules 这些模块都是通过这种方式扩展的
;(function($) {

})(Zepto)

;(function($) {

})(Zepto)

;(function($) {

})(Zepto)
```

然后就是上一节讲的那些核心方法

# jquery 是什么

这一节完全可以照搬“zepto 是什么”那一节的内容，因为两者的基础 API 都是一样的

## demo

先做一个简单的 demo 页面，就平时最基本的使用方式

``` html
    <p>jquery test 1</p>
    <p>jquery test 2</p>
    <p>jquery test 3</p>

    <div id="div1">
        <p>jquery test in div</p>
    </div>

    <script type="text/javascript" src="jquery-3.2.1.js"></script>
    <script type="text/javascript">
        console.log($)

        var $p = $('p')
        console.log($p)

        var $div1 = $('#div1')
        console.log($div1)
    </script>
```

这里打印出来的俩对象，是什么数据结构呢？—— 类数组，解释一下什么是类数组

还有`console.log($)`别忘了，`$`是一个函数（从`$('p')`就能看出来），传入 selector 返回一个 zepto 对象。

## 关于原型

`$('p')`返回的`$p`的构造函数是什么？因为`$p.__proto__`等于构造函数的`prototype`

这个构造函数和`$`函数的关系是什么？

# jquery 原型如何实现

jquery 的实现方式比 zepto 要更加绕一些，考验各位的理解能力

核心函数

```js
var jQuery = function (selector) {
    // 注意 new 关键字，第一步就找到了构造函数
    return new jQuery.fn.init(selector);
}

// 定义构造函数
var init = jQuery.fn.init = function (selector) {
    var slice = Array.prototype.slice
    var dom = slice.call(document.querySelectorAll(selector))

    var i, len = dom ? dom.length : 0
    for (i = 0; i < len; i++) this[i] = dom[i]
    this.length = len
    this.selector = selector || ''
}

// 初始化 jQuery.fn
jQuery.fn = jQuery.prototype = {
    constructor: jQuery,

    // 其他函数...
    css: function (key, value) {
    },
    html: function (value) {
    }
}
// 定义原型
init.prototype = jQuery.fn;
```
# jquery 看源码

一开始，是一个 umd 规范的封装。封装之后，后面函数的返回值，会直接挂在到 window 对象。

然后看代码一开始定义了`jQuery`，最后`return jQuery;`

然后就是上一节将的核心代码

# 总结

再把最关键的，zepto 和 jquery 的核心代码看一下

## zepto

```js
  // 空对象
  var zepto = {}

  // 这就是构造函数
  function Z(dom, selector) {
    var i, len = dom ? dom.length : 0
    for (i = 0; i < len; i++) this[i] = dom[i]
    this.length = len
    this.selector = selector || ''
  }

  zepto.Z = function(dom, selector) {
    // 注意，出现了 new 关键字
    return new Z(dom, selector)
  }

  zepto.init = function (selector) {
    // 源码中，这了的处理情况比较复杂。但因为本次只是针对原型，因此这里就弱化了
    var slice = Array.prototype.slice
    var dom = slice.call(document.querySelectorAll(selector))
    return zepto.Z(dom, selector) 
  }

  // 即使用 zepto 时候的 $
  var $ = function(selector){
    return zepto.init(selector)
  }
```

## jquery

```js
var jQuery = function (selector) {
    // 注意 new 关键字，第一步就找到了构造函数
    return new jQuery.fn.init(selector);
}

// 初始化 jQuery.fn
jQuery.fn = jQuery.prototype = {
    constructor: jQuery,

    // 其他函数...
    addClass: function () {

    },
    html: function () {
        
    }
}

// 定义构造函数
var init = jQuery.fn.init = function (selector) {
    // 源码中，这了的处理情况比较复杂。但因为本次只是针对原型，因此这里就弱化了
    var slice = Array.prototype.slice
    return slice.call(document.querySelectorAll(selector))
}

// 定义原型
init.prototype = jQuery.fn;
```

## 为何要把原型方法都放在`jQuery.fn`或者`$.fn`？

以 jquery 为例，构造函数本来不是`jQuery`，为何要把对象原型放在`jQuery.fn`，即`jQuery.prototype`？

```js
// 因为要扩展插插件，做一个简单的插件的例子

$.fn.getNodeName = function () {
    return this[0].nodeName
}
```

