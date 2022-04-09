# Vue computed 和 watch 区别


## 两者设计用途不同

- computed 用于产出二次处理之后的数据，如对于一个列表进行 filter 处理
- watch 用于监听数据变化（如 v-model 时，数据可能被动改变，需要监听才能拿到）

## computed 有缓存

- computed 有缓存，data 不变则缓存不失效
- methods 无缓存，实时计算

## 答案

- computed 就已有数据产出新数据，有缓存
- watch 监听已有数据

---

代码参考 
```js
<template>
    <p>watch and computed</p>
    <p>姓名：<input v-model="name"> 城市：<input v-model="city"></p>
    <p>个人信息：{{userInfo}}</p>
</template>

<script>
export default {
    data() {
        return {
            name: '张三',
            city: '北京'
        }
    },
    watch: {
        name(newValue, oldValue) {
            console.log('watch name', newValue, oldValue)
        }
    },
    computed: {
        userInfo() {
            // 有缓存
            return this.name + this.city
        }
    },
    methods: {
        getUserInfo() {
            // 无缓存
            return this.name + this.city
        }
    },
}
</script>
```
