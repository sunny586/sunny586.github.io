# JS 严格模式和非严格模式

## 设计初衷

Javascript 设计之初，有很多不合理、不严谨、不安全之处，例如变量未定义即可使用 `n = 100`。严格模式用于规避这些问题。

而现在 ES 规范已经普及，从语法上已经规避了这些问题。

## 开启严格模式

代码（或一个函数）一开始插入一行 `'use strict'` 即可开启严格模式

```js
'use strict' // 全局开启

function fn() {
    'use strict' // 某个函数开启

}
```

一般情况下，开发环境用 ES 或者 Typescript ，打包出的 js 代码使用严格模式

## 严格模式的不同

严格模式的细则有很多，这里总结一些常用常见的

### 全局变量必须声明

```js
'use strict'
n = 10 // ReferenceError: n is not defined
```

### 禁止使用 `with`

```js
'use strict'
var obj = { x: 10 }
with (obj) {
    // Uncaught SyntaxError: Strict mode code may not include a with statement
    console.log(x)
}
```

### 创建 eval 作用域

正常模式下，JS 只有两种变量作用域：全局作用域 + 函数作用域。严格模式下，JS 增加了 eval 作用域。

**chrome 隐私模式下执行这段代码？？？**

```js
'use strict'
var x = 10
eval('var x = 20; console.log(x)')
console.log(x)
```

### 禁止 this 指向全局作用域

```js
'use strict'
function fn() {
    console.log('this', this) // undefined
}
fn()
```

### 函数参数不能重名

```js
'use strict'

// Uncaught SyntaxError: Duplicate parameter name not allowed in this context
function fn(x, x, y) {
    return
}
```

## 答案

- 全局变量必须声明
- 禁止使用 with
- 创建 eval 作用域
- 禁止 this 指向全局作用域
- 函数参数不能重名
