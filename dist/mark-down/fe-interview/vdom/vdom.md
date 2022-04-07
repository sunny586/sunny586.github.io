# vdom

现在用到的前端主流框架 vue 或者 React ，里面都有 vdom ，目的就是为了提升渲染页面的效率。React 首次将 vdom 引入公众的视野，大家发现这东西真的非常快。vue 那时候还没有 vdom ，后来升级 2.0 就把 vdom 给引入进来，课件对 vdom 的认可。

高级面试题中肯定会被问到 vdom ，因为你无论在介绍 React 还是 vue 的实现逻辑的时候，都逃不出 vdom 。虽然 vdom 不会在工作中直接使用（除非你研究框架），但是会在面试中被直接问到。

本章介绍 vdom ，分以下几部分：

- 描述一个场景，引出 vdom
- 用一个现成的 vdom 库 https://github.com/snabbdom/snabbdom ，介绍一下 vdom 的基本应用
- 讲解 vdom 实现的核心逻辑和算法
- 总结
# 为何使用 vdom

使用 vdom 也是基于一个现状：数据和视图的分离，即数据驱动视图。

## 需求

有这样一段数据，要显示成一个表格

```js
// 1. 将该数据展示成一个表格。2. 随便修改一个信息，表格也跟着修改
[
    {
        name: '张三',
        age: '20',
        address: '北京'
    },
    {
        name: '李四',
        age: '21',
        address: '上海'
    },
    {
        name: '王五',
        age: '22',
        address: '广州'
    }
]
```

在页面中再增加一个按钮，点击按钮的时候可能会修改以上数据的某个信息，修改之后，表格要随着显示出修改结果。

## jquery 如何实现

如果不用 vdom ，用 jquery 实现。核心的实现逻辑如下

``` html
<div id="container"></div>
<button id="btn-change">change</button>

<script type="text/javascript" src="./jquery-3.2.1.js"></script>
<script type="text/javascript">
    var data = [
        {
            name: '张三',
            age: '20',
            address: '北京'
        },
        {
            name: '李四',
            age: '21',
            address: '上海'
        },
        {
            name: '王五',
            age: '22',
            address: '广州'
        }
    ]

    // 渲染函数
    function render(data) {
        var $container = $('#container')

        // 清空现有内容
        $container.html('')

        // 拼接 table
        var $table = $('<table>')
        $table.append($('<tr><td>name</td><td>age</td><td>address</td></tr>'))
        data.forEach(function (item) {
            $table.append($('<tr><td>' + item.name + '</td><td>' + item.age + '</td><td>' + item.address + '</td></tr>'))
        })

        // 渲染到页面
        $container.append($table)
    }


    // 修改信息
    $('#btn-change').click(function () {
        data[1].age = 30
        data[2].address = '深圳'
        render(data)
    })

    // 初始化时候渲染
    render(data)

</script>
```

## 以上实现方式的问题

从以上的实现方式看不出啥问题，但是如果这个表格很大，或者数据、视图再更加复杂，change 的频率再高一些，性能问题可能就会指数级的暴露出来。原因就是：无论修改什么数据，这个表格都会**全部渲染，而不是按需渲染**。

DOM 操作是“昂贵”的（而 JS 执行是很快的），这个大家都知道，按需渲染才能最大范围的减少数据改变对于视图的影响。改一点就重新渲染一点，不改就不重新渲染。

（打印一个 DOM 节点的属性有哪些）

那如何做到按需渲染？—— vdom 就可以做到。
# 使用 vdom

所谓的 vdom 就是用 JS 对象去模拟一个真实的 DOM 结构。所有的 html 标签（或者 DOM 节点），都可以用以下 JS 结构来表示（这也是 xml 的特点决定的）

```js
{
    tag: 'div',
    attrs: {
        id: 'container'
    },
    children: []
}
```

例如

``` html
<ul id='list'>
  <li class='item'>Item 1</li>
  <li class='item'>Item 2</li>
</ul>
```

就可以用以下方式来表示

```js
{
    tag: 'ul',
    attrs: { id: 'list' },
    children: [
        {
            tag: 'li',
            attrs: { className: 'item' },
            children: ['Item 1']
        }, {
            tag: 'li',
            attrs: { className: 'item' },
            children: ['Item 2']
        }
    ]
}
```

**介绍`vdom`和`vnode`的区别**

## 基本流程

先说一下使用 vdom 的基本流程，结合上一节使用 jquery 的 demo 。

- 使用 data 生成一个 vnode （vnode 和 vdom 的区别，就跟 node 和 dom 的区别一样）
- 第一次渲染时，直接将这个 vnode 渲染到`#container`中，并将这份 vnode 暂存下来
- 当 change 的时候，在根据 change 之后的 data 重新生成一份 newVnode
- 那 newVnode 和之前存储的 vnode 做对比，将有差异的部分渲染到页面中（无差异的部分，不动）。这一步一般都是 vdom 工具封装好的，我们只需调用即可。

## snabbdom

snabbdom 是一个开源的 vdom 库（github 可以搜到），vue 中的 vdom 操作就引用了它。先介绍一下它的几个核心函数

`h`函数，第一个参数是 html 标签（也支持 css 选择器，这属于锦上添花），第二个参数是属性，第三个参数是子元素（一个数组）

```js
var vnode = h('div#container.two.classes', {on: {click: someFn}}, [
  h('span', {style: {fontWeight: 'bold'}}, 'This is bold'),
  ' and this is just normal text',
  h('a', {props: {href: '/foo'}}, 'I\'ll take you places!')
]);
```

`path`函数，第一个参数是一个 DOM 节点或者 vnode ，第二个参数是 vnode

```js
var container = document.getElementById('container');

// Patch into empty DOM element – this modifies the DOM as a side effect
patch(container, vnode);

// Second `patch` invocation
patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state
```

**对于外部 snabbdom（或者其他 vdom 库） 的使用者来说，核心函数就是`h`和`vdom`**

## h 函数

```js
var vnode = h('ul#list', {}, [
    h('li.item', {}, 'Item 1'),
    h('li.item', {}, 'Item 2')
])
```

## patch 函数

```js
var vnode = h('ul#list', {}, [
    h('li.item', {}, 'Item 1'),
    h('li.item', {}, 'Item 2')
])

var container = document.getElementById('container')
patch(container, vnode)

// 模拟改变
var btnChange = document.getElementById('btn-change')
btnChange.addEventListener('click', function () {
    var newVnode = h('ul#list', {}, [
        h('li.item', {}, 'Item 111'),
        h('li.item', {}, 'Item 222'),
        h('li.item', {}, 'Item 333'),
    ])
    patch(vnode, newVnode)
})
```

## 重做 demo

按照之前总结的步骤，重写 demo 代码如下

``` html
<div id="container"></div>
<button id="btn-change">change</button>

<script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom.js"></script>
<script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom-class.js"></script>
<script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom-props.js"></script>
<script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom-style.js"></script>
<script src="https://cdn.bootcss.com/snabbdom/0.7.0/snabbdom-eventlisteners.js"></script>
<script src="https://cdn.bootcss.com/snabbdom/0.7.0/h.js"></script>
<script type="text/javascript">
    var snabbdom = window.snabbdom
    // 定义关键函数 patch
    var path = snabbdom.init([
        snabbdom_class,
        snabbdom_props,
        snabbdom_style,
        snabbdom_eventlisteners
    ])

    // 定义关键函数 h
    var h = snabbdom.h

    // 原始数据
    var data = [
        {
            name: '张三',
            age: '20',
            address: '北京'
        },
        {
            name: '李四',
            age: '21',
            address: '上海'
        },
        {
            name: '王五',
            age: '22',
            address: '广州'
        }
    ]
    // 把表头也放在 data 中
    data.unshift({
        name: '姓名',
        age: '年龄',
        address: '地址'
    })

    var container = document.getElementById('container')

    // 渲染函数
    var vnode
    function render(data) {
        var newVnode = h('table', {}, data.map(function (item) {
            // 获取所有的 td
            var tds = []
            var i
            for (i in item) {
                if (item.hasOwnProperty(i)) {
                    tds.push(h('td', {}, [item[i] + '']))
                }
            }
            // 返回 tr
            return h('tr', {}, tds)
        }))
        if (vnode) {
            path(vnode, newVnode)
        } else {
            path(container, newVnode)
        }
        // 保存当前的 vnode
        vnode = newVnode
    }

    // 修改信息
    document.getElementById('btn-change').addEventListener('click', function () {
        data[1].age = 30
        data[2].address = '深圳'

        // re-render
        render(data)
    })

    // 第一次渲染
    render(data)

</script>
```

## 对比

运行 jquery 的 demo ，然后用 chrome 查看 DOM 结构，点击“change”按钮看看都有哪些节点有变化。同样的逻辑，再用 snabbdom 的 demo 运行起来，然后用 chrome 查看 DOM 结构，点击“change”按钮看看都有哪些节点有变化。—— 很容易就能看出两者的区别。

# vdom 实现原理

vdom 的核心就是`diff`算法，也是最难讲、最难理解的部分。**不同的 vdom 库的 diff 算法是不一样的，本教程就以 snabbdom 为例**

> 能通过演示代码的方式来讲，那肯定是直接带着大家写代码。但是有些情况下，不能适合挨行写代码讲解，也没有必要。再者，当合格的程序猿，只会门头写代码可不行。

## 核心接口

```js
path(vnode, newVnode)
path(container, newVnode)
```

```js
function path(currentNode, newVnode) {
    if (isElement(currentNode)) {
        // 此时 currentNode 是一个真实的 DOM 节点
        // 根据 vnode 创建真实 DOM
        createElement(currentNode, newVnode)
        return
    }

    // 直接对比子节点
    updateChildren(currentNode, newVnode)
}
```

## isElement

就是判断一个对象是不是 html 元素，判断方式有很多种，例如

```js
// 就是判断一个对象是不是 html 元素，判断方式有很多种，例如

function isElement(elem) {
    return elem instanceof HTMLElement
}

function isElement(elem) {
    return elem.nodeName && elem.nodeType
}
```

## createElement

就是根据

```js
{
    tag: 'ul',
    attrs: {
        id: 'list'
    },
    children: [
        {
            tag: 'li',
            attrs: {
                className: 'item'
            },
            children: ['Item 1']
        },
        {
            tag: 'li',
            attrs: {
                className: 'item'
            },
            children: ['Item 1']
        }
    ]
}
```

创建出

``` html
<ul id='list'>
  <li class='item'>Item 1</li>
</ul>
```

注意有一个递归（实现逻辑通过代码演示）

## isSameVnode

首先说一个方法`isSameVnode`。其实在创建 vnode 的时候，每个节点都有一个`key`，这个`key`简单来说就是一个序号。记得 React 中做遍历显示的时候要怎么写不？

```js
return (
  <ul>
      {
        list.map((item, index) => {
            return <li key={index}>{item}</li>
        })
      }
  </ul>
);
```

对于每个层级来说，都有一个独一无二的`key`。例如——（**画图表示**）

注意，使用`isSameVnode`都是统一级别的 vnode 进行对比，不能跨级别对比（算法也不允许跨级别对比）

```js
function isSameVnode(a, b) {
    // tag 和 key 相同，就认为是 same vnode
    a.tag === b.tag && a.key === b.key    
}
```

## updateChildren

updateChildren 实现的非常巧妙，详细看一下它的实现逻辑。先拿几个流程图看一下，然后再看代码实现。

先把相同的 vnode 找出来，递归执行`updateChildren`，剩下不同的再去做最坏的打算——DOM 操作

# vdom 实现原理

vdom 的核心就是`diff`算法，也是最难讲、最难理解的部分。

因此，本节以介绍为主，把核心的流程讲出来，让大家快速明白，在面试的时候能说出重点。我们没时间、也没必要把`diff`的下详细过程都将明白，那样成本太高了。2/8原则会提升你的学习效率。

**不同的 vdom 库的 diff 算法是不一样的，本教程就以 snabbdom 为例**

## 核心接口

```js
path(vnode, newVnode)
path(container, newVnode)
```

## 实现方法

首先，用于 path 对比的两个几点，肯定是同一个元素，否则没必要 patch

```js
function path(currentNode, newVnode) {
    if (isElement(currentNode)) {
        // 此时 currentNode 是一个真实的 DOM 节点
        // 根据 vnode 创建真实 DOM
        createElement(currentNode, newVnode)
        return
    }

    // 直接对比子节点
    updateChildren(currentNode, newVnode)
}
```

## isElement

就是判断一个对象是不是 html 元素，判断方式有很多种，例如

```js
function isElement(elem) {
    return elem instanceof HTMLElement
}

function isElement(elem) {
    return elem.nodeName && elem.nodeType
}
```

## createElement

根据 vnode 创建一个真实的 DOM 结构，然后替换掉当前的`currentNode`（一个真实的 DOM 节点，即传进来的`container`）

即，我们根据

```js
{
    tag: 'ul',
    attrs: {
        id: 'list'
    },
    children: [
        {
            tag: 'li',
            attrs: {
                className: 'item'
            },
            children: ['Item 1']
        },
        {
            tag: 'li',
            attrs: {
                className: 'item'
            },
            children: ['Item 2']
        },
        {
            tag: 'li',
            attrs: {
                className: 'item'
            },
            children: ['Item 3']
        }
    ]
}
```

创建出来

``` html
<ul id='list'>
  <li class='item'>Item 1</li>
  <li class='item'>Item 2</li>
  <li class='item'>Item 3</li>
</ul>
```

简单的实现过程如下：


## updateChildren

更新子元素，该方法比较复杂，实现的也比较精巧，先用流程图画一遍看看。

然后再看看代码实现

```js
function updateChildren(vnode, newVnode) {
    var children = vnode.children
    var newChildren = newVnode.children

    
}
```

## 总结

vdom 的 diff 计算非常复杂，但是会大大提升 DOM 更新的效率，而且 DOM 结构越复杂，更新效率就越高。

虽然我们只介绍了 snabbdom 的实现方式，React 中 vdom 的实现方式可能不同，但是：

- 使用的 API 都是一样的
- 面试的时候，你能把 snabbdom 的实现方式说明白，这已经是很有竞争力了

# vdom 总结

折腾这么半天，一定要明白为什么要费劲弄 vdom ？

- 数据驱动视图
- vdom 作为数据和 DOM 中间的桥
- vdom 采用 js 计算数据修改带来的视图差异，做最小范围的更新


