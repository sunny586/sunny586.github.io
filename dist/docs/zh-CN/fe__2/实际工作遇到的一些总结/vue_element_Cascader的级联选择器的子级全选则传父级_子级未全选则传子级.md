## vue element Cascader 级联选择器 子级全选则传父级, 子级未全选则传子级

需求: 级联选择器中 子级全选则传父级key, 子级未全选则传子级key
`element Cascader` 级联选择器 中有一个方法: `getCheckedNodes()`

```js
let CheckedNodes = this.$refs.region.getCheckedNodes()
CheckedNodes = CheckedNodes.filter(option => !(option.parent && option.parent.checked))
```
其中 `this.$refs.region` 是对应赋予 `Cascader` 组件的 `ref` 名

通过 `getCheckedNodes()` 方法, 可以获取所有已勾选的节点

已知条件: 当父级勾选, 子级必定全选, 子级未全选, 则父级为不勾选状态

那么后面的 `filter` 方法中过滤条件的是 : !(父级存在 且 父级的勾选状态为true), 取反.

个人理解: 当父级不存在或父级的勾选状态为false时, 保留该节点.