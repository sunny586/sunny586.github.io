## vue2 子组件去掉最外层的包裹标签

参考代码

模版

``` html
<div ref="csCompactCascader">
  {children &&
    children.length > 0 &&
    children.map((item, idx) => {
      return (
        <el-col key={item.field} span={this.span}>
          <cs-form-item label={label} prop={item.field}>
                            ...                
          </cs-form-item>
        </el-col>
      )
    })}
</div>
```

js

```ts
  async loadData() {}
  async mounted() {
    this.moveCascaderChildren()
    //  初始化data数据
    await this.loadData()
  }
  created() {}
  moveCascaderChildren() {
    const target = this.$refs.csCompactCascader as Element
    while (true) {
      const node = target.children[0]
      if (!node) {
        break
      }
      target.parentElement!.insertBefore(node, target)
    }
    target.remove()
  }

```
