# curry add

## 题目

写一个 `curry` 函数，可以把其他函数转为 curry 函数

```js
function add(a, b, c) { return a + b + c }
add(1, 2, 3) // 6

const curryAdd = curry(add)
curryAdd(1)(2)(3) // 6
```

## 解答

代码参考 

```ts
export function curry(fn: Function) {
    const fnArgsLength = fn.length // 传入函数的参数长度
    let args: any[] = []

    // ts 中，独立的函数，this 需要声明类型
    function calc(this: any, ...newArgs: any[]) {
        // 积累参数
        args = [
            ...args,
            ...newArgs
        ]
        if (args.length < fnArgsLength) {
            // 参数不够，返回函数
            return calc
        } else {
            // 参数够了，返回执行结果
            return fn.apply(this, args.slice(0, fnArgsLength))
        }
    }

    return calc
}

// function add(a: number, b: number, c: number): number {
//     return a + b + c
// }
// // add(10, 20, 30) // 60

// const curryAdd = curry(add)
// const res = curryAdd(10)(20)(30) // 60
// console.info(res)
```

## 总结

- 判断参数长度
- 中间态返回函数，最后返回执行结果
- 如用 this 慎用箭头函数
