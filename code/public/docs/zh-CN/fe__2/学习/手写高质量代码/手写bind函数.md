# 手写函数 bind

## bind 应用

- 返回一个新的函数（旧函数不会更改）
- 绑定 `this` 和部分参数
- 箭头函数，无法改变 `this` ，只能改变参数

```js
function fn(a, b, c) {
  console.log(this, a, b, c)
}
const fn1 = fn.bind({ x: 100 })
fn1(10, 20, 30) // {x: 100} 10 20 30
const fn2 = fn.bind({ x: 100 }, 1, 2)
fn2(10, 20, 30) // {x: 100} 1 2 10 （注意第三个参数变成了 10）
fn(10, 20, 30) // window 10 20 30 （旧函数不变）
```

## 解答

代码参考

```ts
Function.prototype.myBind = function (context: any, ...bindArgs: any[]) {
  // context 是 bind 传入的 this
  // bindArgs 是 bind 传入的各个参数
  const self = this // 当前的函数本身
  return function (...args: any[]) {
    // 拼接参数
    const newArgs = bindArgs.concat(args)
    return self.apply(context, newArgs)
  }
}
```

要点

- 返回新函数
- 拼接参数（bind 参数 + 执行参数）
- 重新绑定 `this`

## 扩展：手写函数 call 和 apply

`bind` 生成新函数，暂不执行。而 `call` `apply` 会直接立即执行函数

- 重新绑定 `this` （箭头函数不支持）
- 传入参数

```js
function fn(a, b, c) {
  console.log(this, a, b, c)
}
fn.call({ x: 100 }, 10, 20, 30)
fn.apply({ x: 100 }, [10, 20, 30])
```

代码参考
```ts
Function.prototype.myCall = function (context: any, ...args: any[]) {
  if (context == null) context = globalThis
  if (typeof context !== 'object') context = new Object(context) // 值类型，变为对象
  const fnKey = Symbol() // 不会出现属性名称的覆盖
  context[fnKey] = this // this 就是当前的函数
  const res = context[fnKey](...args) // 绑定了 this
  delete context[fnKey] // 清理掉 fn ，防止污染
  return res
}
```
```ts
Function.prototype.myApply = function (context: any, args: any[] = []) {
  if (context == null) context = globalThis
  if (typeof context !== 'object') context = new Object(context) // 值类型，变为对象
  const fnKey = Symbol() // 不会出现属性名称的覆盖
  context[fnKey] = this // this 就是当前的函数
  const res = context[fnKey](...args) // 绑定了 this
  delete context[fnKey] // 清理掉 fn ，防止污染
  return res
}
```

- 使用 `obj.fn` 执行，即可设置 `fn` 执行时的 `this`
- 考虑 `context` 各种情况
- 使用 `symbol` 类型扩展属性


参考代码
```ts
// @ts-ignore
Function.prototype.myCall = function (target: any, ..._args: any[]) {
  if (target === null || target === undefined) {
    target = globalThis
  }
  if (typeof target !== 'object') {
    target = new Object(target)
  }
  const key = Symbol()

  Object.defineProperty(target, key, {
    enumerable: false,
    configurable: true,
    value: this
  })
  const result = target[key](..._args)
  Reflect.deleteProperty(target, key)
  return result
}

// @ts-ignore
Function.prototype.myApply = function (target: any, _args: any[]) {
  if (target === null || target === undefined) {
    target = globalThis
  }
  if (typeof target !== 'object') {
    target = new Object(target)
  }
  const key = Symbol()

  Object.defineProperty(target, key, {
    enumerable: false,
    configurable: true,
    value: this
  })
  const result = target[key](..._args)
  Reflect.deleteProperty(target, key)
  return result
}

// @ts-ignore
Function.prototype.myBind = function (target: any, ..._args: any[]) {
  if (target === null || target === undefined) {
    target = globalThis
  }
  if (typeof target !== 'object') {
    target = new Object(target)
  }
  const key = Symbol()
  Object.defineProperty(target, key, {
    enumerable: false,
    configurable: true,
    value: this
  })
  const length = this.length

  return function (...__args: any[]) {
    const args = [..._args, ...__args].slice(0, length)
    const result = target[key](...args)
    Reflect.deleteProperty(target, key)
    return result
  }
}

function test(a: number, b: number, c: number) {
  console.log(this, a, b, c)
  console.log(Object.keys(this))
  return a + b + c
}

// @ts-ignore
const t = test.myBind({ haha: 123 }, 10)
console.log('t:', t(20, 30))


```
