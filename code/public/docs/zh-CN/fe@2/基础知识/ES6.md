# 开始

ES6 这些知识其实并不算高级，但是因为 ES6 是新出来的标准，因此会被当做高级知识来被询问，也算是考验一个人的积极自学的能力和态度。

因此，本章就总结了一些工作中常用的 ES6 的知识点，以便应对面试中问到的 ES6 的问题。

# 搭建 ES6 环境

ES6 自 2015 年推出之后，虽然浏览器还没有完全支持所有语法特性，但是已经在开发环境得到了广泛的使用。这就需要在开发环境支持实时的编译，把我们写的 ES6 代码转换为浏览器可识别的 JS 代码，才能在浏览器环境运行起来。本节介绍如何配置这个编译环境。

编译 ES6 肯定需要 [babel](http://babeljs.io/) 这个宝贝，另外再配合 [webpack](http://webpack.github.io/) 这个神奇，可以胜任任何 ES6 代码的编译。本节用到的代码可以去 [/code/es6](/code/es6) 中查阅。

在 babel 官网演示在线编译，使用`[1, 2, 3].map(item => item + 1)`

## npm init

保证安装有 node npm （不再介绍安装过程），运行`npm init`，生成 package.json

## 安装 babel

```
npm install --save-dev babel-core babel-preset-es2015 babel-preset-latest --registry=https://registry.npm.taobao.org
```

- babel-preset-es2015 是编译 es2015 即 es6 的规则
- babel-preset-latest 是 ES7 提案（还不是标准）的转发规则

创建`.babelrc`文件

```json
{
  "presets": [
    "es2015",
    "latest"
  ],
  "plugins": []
}
```

全局安装`npm install --global babel-cli --registry=https://registry.npm.taobao.org` （mac 中`sudo`，windows 下管理员身份运行控制台）

然后运行`babel --version`

## 编译 ES6

先创建一个简单的 es6 文件，其中使用了箭头函数（后面会详细讲解）

```js
[1, 2, 3].map(item => item + 1);
```

然后在命令行运行`babel src/index.js`可以看到输出了编译后的 JS 文件。

## 使用 webpack 编译

`npm install webpack babel-loader --save-dev  --registry=https://registry.npm.taobao.org`

创建`webpack.config.js`

```js
module.exports = {    
    entry: './src/index.js',    
    output: {    
        path: __dirname,    
        filename: './build/bundle.js',    
    },    
    module: {    
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]    
    }    
} 
```

然后修改 package.json 增加一个 scripts 配置

```js
  "scripts": {
    "start": "webpack"
  },
```

运行`npm start`


# ES6 Modules

下面介绍 ES6 中的模块化规范。相比于前两个，ES6 中的模块化规范更加简洁易懂，基本一看就会。

首先，本节要求学习者对 JS 模块化有一个基本的了解，知道什么是模块化，为何需要模块化。

## 语法

定义一个`util1.js`，它只返回一个对象

```js
export default {
    a: 100
}
```

定义一个`util2.js`，它返回多个对象

```js
export function fn1() {
    alert('fn1')
}
export function fn2() {
    alert('fn2')
}

// fn3 并未被外部引用
export function fn3() {
    alert('fn3')
}
```

index.js

```js
import util1 from './util1.js'
import { fn1, fn2 } from './util2.js'

console.log(util1)
fn1()
fn2()
```

运行`npm start`

新建`index.html`，起一个 http-server 来看运行效果

## 关于 js 众多的模块标准

当初 JS 还没有模块化这一说，需要什么 JS 就引入什么 JS 文件。

后来，前端有人琢磨出 require.js 这一套，慢慢形成了一个 AMD 的标准。期间淘宝大神自造轮子，搞了一个 CMD（sea.js），不过现在还是 AMD 为主。（貌似每个有技术实力的公司，都会自造轮子）

nodejs 发展出来之后，前端开始有了各种自动化构建工具，因此可以将后端的模块化方案，经过打包应用到前端

ES6 出来之后，视图通过重新定义一种模块化的机制来统一这种不稳定的形式。但是目前 nodejs 支持积极，浏览器因为是客户端的原因，尚未良好支持。—— 期待早日统一

还有些工具、框架自造模块化标准，另起炉灶。我的观点：你可以自造模块化 lib ，但是你不要自造标准。

## rollup

注意看，util2.js 中定义的`fn3`并没有被外部引用，也打包进去了。另外，webpack 打包出来文件有一些其他的代码，很复杂。

给大家安利一个非常好用的 JS 模块化打包工具 [rollup.js](http://rollupjs.org/)。React Vue 都用它打包的，我自己的开源项目 [wangEditor](http://www.wangeditor.com/) 也是用它打包的。
# 使用 rollup 打包

## 安装

新建一个文件夹，运行`npm init`，然后安装`npm i rollup rollup-plugin-node-resolve rollup-plugin-babel babel-plugin-external-helpers babel-preset-latest  --save-dev --registry=https://registry.npm.taobao.org`

- babel-plugin-external-helpers 将一些公共的函数提取成一个文件 ？

在 src 目录下创建`.babelrc`

```
{
  "presets": [
    ["latest", {
      "es2015": {
        "modules": false
      }
    }]
  ],
  "plugins": ["external-helpers"]
}
```

新建 rollup.config.js

```js
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
    entry: 'src/index.js',
    format: 'umd',
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        })
    ],
    dest: 'build/bundle.js'
}
```

## 打包

将之前 webpack 示例中的`src`的所有 JS 文件拷贝过来

修改 package.json 的 srcipts ， `"start": "rollup -c rollup.config.js"`，运行`npm start`

看一下打包出来的文件，再对比一下此前 webpack 打包出来的文件：第一，文件简介了；第二，用不到的`fn3`消失了

## 说明

rollup 只是一个模块化的工具，要想用于前端自动化，还需要其他自动化工具的支持，如 gulp 。

> 这里阐述一下一个系统设计、开发的观点：参考《Linux/Unix设计思想》一书，系统设计应该是各个小工具拼接而成的过程，使用大而全富尔美的框架，违背了这种设计思想。


# 琐碎的功能

## let const

注意，const 不能被重新赋值，编译会报错

```js
// JS
var i = 10;
i = 100;
var j = 20;
j = 200;

// ES6
let i = 10;
i = 100;      // 正确
const j = 20;
j = 200;      // 报错
```

## 多行字符串/模板变量

JS 代码

```js
// JS
var name = 'zhangsan', age = 20, html = '';
html += '<div>';
html += '  <p>' + name + '</p>';
html += '  <p>' + age + '</p>';
html += '</div>';

// ES6
const name = 'zhangsan', age = 20;
const html = `<div>
                <p>${name}</p>
                <p>${age}</p>
            </div>`;
console.log(html);
```

注意两点：

- 多行字符串必须用`反引号`来包裹
- 模板变量必须用`${ }`来包裹，而且必须是在`反引号`包裹中才能生效（`单引号`包裹中不能生效）

## 解构赋值

传统 JS 中，获取对象属性和数组元素的方法是这样的

```js
// JS
var obj = {a: 100, b: 200}
var a = obj.a
var b = obj.b

var arr = ['xxx', 'yyy', 'zzz']
var x = arr[0]
```

通过 ES6 的解构赋值，让获取对象属性和数组元素更加简单

```js
// ES6
const obj = { a: 10, b: 20, c: 30 }
const {a, c} = obj
console.log(a)
console.log(c)


const arr = ['xxx', 'yyy', 'zzz']
const [x, y, z] = arr
console.log(x)
console.log(y)
console.log(z)
```

## 块级作用域

```js
// JS
var obj = {a: 100, b: 200}
for (var item in obj) {
    console.log(item)
}
console.log(item) // 'b'

// ES6
const obj = {a: 100, b: 200}
for (let item in obj) {
    console.log(item)
}
console.log(item) // undefined
```


## 函数默认参数

```js
// JS
function (a, b) {
    if (b == null) {
        b = 0
    }
}
```

```js
// ES6
function (a, b=0) {

}
```

## 箭头函数

```js
// JS
var arr = [1, 2, 3]
arr.map(function (item) {
    return item + 1
})

// ES6
const arr = [1, 2, 3]
arr.map(item => item + 1);
arr.map((item, index) => {
    console.log(index)
    return item + 1
})
```

这里重点注意的是箭头函数的 this ，举例看

```js
function fn() {
    console.log('real', this)  // {a: 100}
    var arr = [1, 2, 3]
    // 普通 JS
    arr.map(function (item) {
        console.log('js', this)  // window
        return item + 1
    })
    // 箭头函数
    arr.map(item => {
        console.log('es6', this)  // {a: 100}
        return item + 1
    })
}
fn.call({a: 100})
```

# Class

目前使用 class 的场景非常多，例如在使用 React 时

```jsx
class Ad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>hello imooc</div>
        )
    }
    componentDidMount() {
        
    }
}
```

## 基本用法

JS 代码

```js
function MathHandle(x, y) {
  this.x = x;
  this.y = y;
}

MathHandle.prototype.add = function () {
  return this.x + this.y;
};

var m = new MathHandle(1, 2);
console.log(m.add())
```

ES6 代码

```js
class MathHandle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }
}
const m = new MathHandle(1, 2);
console.log(m.add())
```

`npm start`看一下，可以看到编译出来的代码有许多附加的内容，不在简洁

其实 class 就是 js 构造函数的一个语法糖，连原型链原理都是一样的（**这种语法糖形式，看起来和实际原理不一样的东西，我个人不太赞同**）

```js
class MathHandle {
  // ...
}

typeof MathHandle // "function"
MathHandle === MathHandle.prototype.constructor // true

// 这种语法糖形式，看起来和实际原理不一样的东西，我个人不太赞同
// 形式上强行模仿 java C# ，却失去了它的本性和个性
```

另外，使用 class 打包出来的 JS 代码，会有很多冗余附加代码，**这就导致使用发布的代码调试 bug 的时候变得很困难**。

## 继承

使用 JS 的原型如何实现集成，在《前端 JS 面试技巧》的课程中已经详细讲过。这里再拿一个例子简单回顾一下，

```js
// 动物
function Animal() {
    this.eat = function () {
        console.log('animal eat')
    }
}
// 狗
function Dog() {
    this.bark = function () {
        console.log('dog bark')
    }
}
Dog.prototype = new Animal()
// 哈士奇
var hashiqi = new Dog()
```

用 ES6 可以这样编写

```js
class Animal {
    constructor(name) {
        this.name = name
    }
    eat() {
        console.log(`${this.name} eat`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
        this.name = name
    }
    say() {
        console.log(`${this.name} say`)
    }
}
const dog = new Dog('哈士奇')
dog.say()
dog.eat()
```

查看编译出来的 js 代码，会发现冗余代码更多，更加复杂了。

## 总结

用 class 做为构造函数，我个人感觉不如直接使用 function ，看起来更加直观，更加接近原理，而且编译出来没有冗余代码

但是，使用 es6 编写继承，比用 js 编写继承看起来更加统一，不像 js 编写继承那么琐碎。这是因为 class 的设计其实是借鉴了 java C# 这些经典面向对象语言的语法，让 js 看起来更加“面向对象”化

但是，无论语法怎样写，其中的原理你得明白，它还是逃不出原型和原型链的理论基础

待 es6 部分讲解完，会带领大家继续深入看 js 原型。
# Promise

## 语法

js 写异步一直是很意见很蛋疼的事，总是逃不开回调函数，即传说中的“callback hell”，例如

```js
function loadImg(src, callback, fail) {
    var img = document.createElement('img')
    img.onload = function () {
        callback(img)
    }
    img.onerror = function () {
        fail()
    }
    img.src = src
}

var src = 'http://www.imooc.com/static/img/index/logo_new.png'
loadImg(src, function (img) {
    console.log(img.width)
}, function () {
    console.log('failed')
})
```

使用 Promise 就是

```js
function loadImg(src) {
    const promise = new Promise(function (resolve, reject) {
        var img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject()
        }
        img.src = src
    })
    return promise   
}

var src = 'http://www.imooc.com/static/img/index/logo_new.png'
var result = loadImg(src)

result.then(function (img) {
    console.log(img.width)
}, function () {
    console.log('failed')
})

result.then(function (img) {
    console.log(img.height)
})
```

## 兼容

Promise 在浏览器的兼容已经比较好了，某些不兼容的，可以引入 q.js 或者 bluebird.js

## 最后

后面会有 js 异步的深入介绍，到时候会详细介绍 Promise 的前生今世，这里显示一下语法。

**为何 Generator 不介绍**

Generator 语法和实现原理都比较复杂，很难理解。另外，它已经有了很成熟的替代方案，async/await（会再接下来的异步中详细介绍）。还有，它并不是为了解决异步这个问题而产生的，而是恰好被用来解决了异步，因此理解起来比较难。因此，Generator 会慢慢退出历史舞台，被更加简洁的东西代替。

# 总结

- 搭建 ES6 编译环境：使用 babel 编译，使用 webpack 做模块化处理，后来又介绍了 rollup 做模块化处理
- modules：关键字`import` `export`
- 琐碎的功能：let/const，多行字符串/模板变量，解构赋值，块级作用域，函数默认参数，箭头函数
- class：用法、和原型的关系、继承
- Promise：用法

---

《Linux/Unix 设计思想》提到的一些软件设计的思想

- 小即是美
- 让每个程序都只做一件事
- 让没个程序都称为过滤器
- 舍高效而取可移植性
- 充分利用杠杆效应
- 尽快建立原型
- 不强制有用户界面
