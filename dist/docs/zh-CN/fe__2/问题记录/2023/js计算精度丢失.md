### 为什么 0.1+0.2 JS加不了？
产生浮点数计算精度不准确的原因： 在计算机角度，计算机算的是二进制，而不是十进制。二进制后变成了无线不循环的数，而计算机可支持浮点数的小数部分可支持到52位，所有两者相加，在转换成十进制，得到的数就不准确了，加减乘除运算原理一样。

### 解决方案 number-precision  [参考资料](https://github.com/nefe/number-precision)

```c++
npm install number-precision --save
```

```js
import NP from 'number-precision'

  NP.strip(0.09999999999999998); // = 0.1
  NP.plus(0.1, 0.2);             // = 0.3, not 0.30000000000000004
  NP.plus(2.3, 2.4);             // = 4.7, not 4.699999999999999
  NP.minus(1.0, 0.9);            // = 0.1, not 0.09999999999999998
  NP.times(3, 0.3);              // = 0.9, not 0.8999999999999999
  NP.times(0.362, 100);          // = 36.2, not 36.199999999999996
  NP.divide(1.21, 1.1);          // = 1.1, not 1.0999999999999999
  NP.round(0.105, 2);            // = 0.11, not 0.1
```

### 混合运算怎么链式调用函数
```ts
// util.ts
export function operation(...args: any[]): ((...args: any[]) => any) {
  const [f, ...o] = args
  if (typeof f !== 'function') {
    return () => null
  }
  let result = f(...o)
  return function fn(...args: any[]) {
    const [ff, ...oo] = args
    if (typeof ff === 'function') {
      result = ff(...[result, ...oo])
    }
    if (!ff) {
      return result
    }
    return fn
  }
}
```

使用
```ts

import { operation } from '@/util'
import { times, divide} from 'number-precision'

function numToFixed(num: number) {
  return num.toFixed(2)
}

// 计算 ”200 * 100 / 15“ 并保留2位小数
const test =  operation(times, 100, 200)(divide, 15)(numToFixed)()

console.log(test)
```

利用lodash的flow 和 partial
```js
import { partial, flow, partialRight } from 'lodash'
import { divide, times, minus } from 'number-precision'

flow(divide, partial(times, 100), numRound)(item.actualMinAmount, item.standardMinAmount)
```