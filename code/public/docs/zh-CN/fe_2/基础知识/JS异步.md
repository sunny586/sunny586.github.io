# event loop

以下代码打印的顺序，分别是怎样的

```js
// 加载图片
var src = 'xxx.png'
function loadImg(src, callback) {
    var img = document.createElement('img')
    img.onload = function () {
        callback(img)
    }
    img.src = src
}

console.log(100)
loadImg(src, function () {
    console.log(200)
})
console.log(300)
setTimeout(function () {
    console.log(400)
}, 100)
setTimeout(function () {
    console.log(500)
})
```

我这边测试的结果是 `100 300 200 500 400` ，你的测试结果可能会不一样，因为`200`的位置，毕竟每个人的网速不一样，加载图片有快慢之分。

## 单线程

JavaScript语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。

```js
// 循环运行期间，JS 执行和 DOM 渲染暂时卡顿
var i, sum = 0;
for (i = 0; i < 1000000000; i++) {
    sum += i;
}
console.log(sum);

// alert 不处理，JS 执行和 DOM 渲染暂时卡顿
console.log(1)
alert('hello')
console.log(2)
```

为何只有单线程？—— 因为如果是多线程渲染 DOM 就乱套了（其他语法的多线程，数据同步也是一个难点）。因此 JS 执行的时候，浏览器会卡顿，浏览器会等着 JS 执行完（防止有 DOM 渲染操作）在去做 DOM 渲染。

这样的机制，才让 JS 有异步。你会发现，当加载不出资源（图片、视频）时候，浏览器肯定不会卡死。但是你写一个 js 死循环，浏览器就卡死了。

> 为了解决这个问题，html5 提出了 web worker 能实现多线程，但是新启的线程，不允许操作 DOM （有可以看出是因为 DOM 操作的冲突才不得不用单线程）

```js
// 例一
console.log(100)
setTimeout(function () {
    console.log(200)       // 反正 1000ms 之后执行
}, 1000)                   // 先不管它，先让其他 JS 代码运行
console.log(300)
console.log(400)

// 例二
console.log(100)
$.ajax({
    url: 'xxxxx',
    success: function (result) {  // ajax 加载完才执行
        console.log(result)       // 先不管它，先让其他 JS 代码运行
    }
})
console.log(300)
console.log(400)
```

## event-loop

将 js 中要执行的每个任务都做一个划分，同步执行的放在“执行栈”，而异步执行的**将**放在（不是马上就放进去）“异步队列”。然后，将“执行栈”放在主线程中执行，挨个任务排队执行，执行到最后就立马去看“异步队列”是否有数据？有数据就拿到主线程中执行，执行完再去看“异步队列”是否有数据？

那么，异步执行任务何时被放在“异步队列”中呢？以上面的 demo 为例。第一个，图片加载完成时；第二，100ms 后；第三，立刻。

按照这个逻辑，再去看一遍 demo 代码的打印顺序，就彻底明白了。

这个过程就是所谓的 event-loop

新增：event-loop 过程示例分析

```js
// 示例 1
setTimeout(function () {
    console.log(100)
})
console.log(200)

// 示例 2
setTimeout(function () {
    console.log(1)
}, 100)
setTimeout(function () {
    console.log(2)
})
console.log(3)

// 示例 3
$.ajax({
    url: 'xxxxx',
    success: function () {
        console.log('a')
    }
})
setTimeout(function () {
    console.log('b')
}, 100)
setTimeout(function () {
    console.log('c')
})
console.log('d')
```
# jquery 的解决方案

## callback hell

jquery 1.5 之前，写 ajax 是这样写的

```js
var ajax = $.ajax({
    url: 'data.json',
    success: function () {
        console.log('success1')
        console.log('success2')
        console.log('success3')
    },
    error: function () {
        console.log('error')
    }
})
console.log(ajax) // 返回一个 XHR 对象
```

带来问题 callback hell

##  jquery 1.5

```js
var ajax = $.ajax('data.json')
ajax.done(function () {
        console.log('success 1')
    })
    .fail(function () {
        console.log('error')
    })
    .done(function () {
         console.log('success 2')
    })
console.log(ajax) // 返回一个 deferred 对象
```

也可以这样写（很像 Promise 的写法）

```js
// 很像 Promise 的写法
var ajax = $.ajax('data.json')
ajax.then(function () {
        console.log('success 1')
    }, function () {
        console.log('error 1')
    })
    .then(function () {
        console.log('success 2')
    }, function () {
        console.log('error 2')
    })
```

因此，我们现在学习的 Promise ，早在 jquery 1.5 的时候就已经实践过了。时间也证明这是目前的一个自荐方式，加入 ES6 大家庭，并且有了 Promise/A+ 标准。

## 从设计原则说

无论是 jquery 还是现在的 Promise ，都无法改变 js 单线程、异步这样的特性。但是从代码编写方式上杜绝了之前的 callback hell

作重要的设计原则就是“开放封闭原则” —— 对扩展开放、对修改封闭。这里就能很好的体现。

# ES6 中的 Promise

## 回顾基本使用

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

var src = 'xxx.png'
var result = loadImg(src)

result.then(function (img) {
    console.log(img.width)
}, function () {    
    console.log('failed')
}).then(function (img) {
    console.log(img.height)
})
```

## 异常捕获

以上 demo 中`then`中传递两个参数确实有点混乱，统一一下异常捕获

```js
// 规定：then 只接受一个参数，最后统一用 catch 捕获异常
result.then(function (img) {
    console.log(img.width)
}).then(function (img) {
    console.log(img.height)
}).catch(function (ex) {
    // 最后统一 catch
    console.log(ex)
})
```

## 多个串联

```js
var src1 = 'xxx1.png'
var result1 = loadImg(src1)
var src2 = 'xxx2.png'
var result2 = loadImg(src2)

// 链式操作
result1.then(function (img) {
    console.log('第一个图片加载完成')
    return result2
}).then(function (img) {
    console.log('第二个图片加载完成')
}).catch(function (ex) {
    // 最后统一 catch
    console.log(ex)
})
```

多个串联更能看出 then 链式操作比 callback 更加有优势。不信，自己用 callback 的方式试一下。

## Promise.all & Promise.race

```js
// Promise.all 接收一个 promise 对象的数组
// 待全部完成之后，统一执行 success
Promise.all([result1, result2]).then(datas => {
    // 接收到的 datas 是一个数组，依次包含了多个 promise 返回的内容
    console.log(datas[0])
    console.log(datas[1])
})

// Promise.race 接收一个包含多个 promise 对象的数组
// 只要有一个完成，就执行 success
Promise.race([result1, result2]).then(data => {
    // data 即最先执行完成的 promise 的返回值
    console.log(data)
})
```

## 其他

社区里有一些 lib 如 Q.js bluebird.js 等，都对 Promise 进行了简单的封装，可以去看一下文档怎么用。

不过我觉得，现在标准的 Promise 已经很精简了，浏览器支持性也很好了（特别是移动端）
# Promise/A+ 标准

> 任何技术、方案、语言（库和框架除外）等，要推广到所有人使用，肯定是有一套标准支持的。例如 html css js http 等。无规矩不成方圆，任何不符合标准的东西（或者说长久推广并未形成标准），都会被大家抛弃。就如当初的 IE 浏览器

> 联想到近期微信小程序推出 webview，允许加载 h5 页面。看到有人评论“任何不符合标准的都是异教徒”。

## 总结

网上搜一下“Promise/A+ 标准”就可以找到很多资源，总结一下：

- 状态可能有三种状态：等待（pending）、已完成（fulfilled）、已拒绝（rejected）
    - promise 的状态只可能从“等待”转到“完成”态或者“拒绝”态，不能逆向转换，同时“完成”态和“拒绝”态不能相互转换
- then
    - promise 必须实现then方法，而且then必须返回一个 promise ，同一个 promise 的then可以调用多次（链式），并且回调的执行顺序跟它们被定义时的顺序一致
    - then方法接受两个参数，第一个参数是成功时的回调，在 promise 由“等待”态转换到“完成”态时调用，另一个是失败时的回调，在 promise 由“等待”态转换到“拒绝”态时调用

## 状态

通过以下 demo 讲解状态的变化，一开始是`pending`，然后`resolve(img)`或者`reject()`。注意：**状态变化不可逆**

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
```

## then

参考一下 demo ，`result`就是一个 Promise 对象，它有 then 方法。第一个参数。。。。第二个参数。。。。

```js
var result = loadImg(src)
result.then(function (img) {
    console.log(img.width)
}, function () {    
    console.log('failed')
}).then(function (img) {
    console.log(img.height)
})
```

另外，then 方法必须返回一个 promise ，上面 demo 没写 return ，它就会返回自身。当然你可以自己手写 return

```js
result1.then(function (img) {
    console.log('第一个图片加载完成')
    return result2
}).then(function (img) {
    console.log('第二个图片加载完成')
})
```
# Async Await

promise 的写法，还是要把函数包括在 then 里面，而 async/await 的写法，完全就是同步代码的写法，更加简洁更加容易理解

提前`npm install --save-dev babel-polyfill`

```js
import 'babel-polyfill'

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

const src1 = 'xxx1.png'
const src2 = 'xxx2.png'

const load = async function () {
    const result1 = await loadImg(src1)
    console.log(result1)
    const result2 = await loadImg(src2)
    console.log(result2)
}
load()
```

注意，async/await 并不是取代了 promise ，而是利用 promise 之后的另外一种写法，取代了 then 函数，写起来更加像同步代码

# 关于 Generator

- 原理比较复杂，语法比较费解
- 不是为解决异步而创建的，恰巧被用来解决异步而已
- 有更好的替代方案 async/await

# 总结

- 异步的概念：单线程、event-loop
- jquery 中的 Promise
- ES6 Promise ，以及 Promise 标准
- asyc-await

# jquery 中的 promise

## 提问

给出一段非常简单的异步操作代码，使用setTimeout函数。

```js
// 给出一段非常简单的异步操作代码，使用setTimeout函数
var wait = function () {
    var task = function () {
        console.log('执行完成')
    }
    setTimeout(task, 2000)
}
wait()

// 新增需求：要在执行完成之后进行某些特别复杂的操作，代码可能会很多，而且分好几个步骤
```

但是我如果再加一个需求 ———— 要在执行完成之后进行某些特别复杂的操作，代码可能会很多，而且分好几个步骤 ———— 那该怎么办？

当然，其中一个答案就是：直接在 task 函数中写这些复杂的操作 ——但是很不符合设计原则

## $.Deferred

首先引用 jquery

```js
function waitHandle() {
    var dtd = $.Deferred()  // 创建一个 deferred 对象

    var wait = function (dtd) {  // 要求传入一个 deferred 对象
        var task = function () {
            console.log('执行完成')
            dtd.resolve()  // 表示异步任务已经完成
            // dtd.reject() // 表示异步任务失败或出错
        }
        setTimeout(task, 2000)
        return dtd  // 要求返回 deferred 对象
    }

    // 注意，这里一定要有返回值
    return wait(dtd)
}
```

解释一下上面的代码，有点绕，关键点：

- 对之前的 wait 函数又进行了封装
- 创建`var dtd = $.Deferred()`
- `wait(dtd)`，并且传入`dtd`，最终返回
- wait 函数内，成功后执行`dtd.resolve()`
- wait 函数最终返回`dtd`

怎么使用？

```js
var w = waitHandle()
w.then(function () {
    console.log('ok 1')
}, function () {
    console.log('err 1')
}).then(function () {
    console.log('ok 2')
}, function () {
    console.log('err 2')
})

// 还有 w.done w.fail
```

这样的使用方式，再结合此前的需求，就能完美解决

## $.Promise

`dtd`的 API 可以分成两组

- `dtd.resolve` `dtd.reject`
- `dtd.then` `dtd.done` `dtd.fail`

这两组应该分开的，因为他们的用意不一样，混合在一起会出问题。例如最后代码最后执行`w.reject()`试试

> 也顺便介绍一下系统设计的时候，拆分、封装的必要

那如何解决？—— Promise 浮出水面

```js
function waitHandle() {
    var dtd = $.Deferred()
    var wait = function (dtd) {
        var task = function () {
            console.log('执行完成')
            dtd.resolve()
        }
        setTimeout(task, 2000)
        return dtd.promise()  // 注意，这里返回的是 primise 而不是直接返回 deferred 对象
    }
    return wait(dtd)
}

var w = waitHandle() // 经过上面的改动，w 接收的就是一个 promise 对象
$.when(w)
 .then(function () {
    console.log('ok 1')
 })
 .then(function () {
    console.log('ok 2')
 })

// w.reject()  // 执行这句话会直接报错
```

promise 对象只有`then` `done` `fail`这些被动监听的方法，没有`resolve` `reject`这些主动触发的方法



