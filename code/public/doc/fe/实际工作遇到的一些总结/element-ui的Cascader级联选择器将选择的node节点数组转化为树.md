
## element-ui 的 Cascader 级联选择器 将选择的node节点数组转化为树

参考代码

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    　
    <link
      rel="stylesheet"
      type="text/css"
      href="https://unpkg.com/element-ui@2.15.7/lib/theme-chalk/index.css"
    />
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/2.5.22/vue.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/element-ui/2.15.7/index.js"></script>
  </head>
  <body>
    <div id="app">
      <div class="block">
        <span class="demonstration">默认显示所有Tag</span>
        <el-cascader
          ref="cascader"
          :options="options"
          :props="props"
          clearable
        ></el-cascader>
      </div>
      <div class="block">
        <span class="demonstration">折叠展示Tag</span>
        <el-cascader
          :options="options"
          :props="props"
          collapse-tags
          clearable
        ></el-cascader>
      </div>

      <div @click="btnClick">按 钮</div>
    </div>

    <script>
      var Main = {
        data() {
          return {
            props: { multiple: true },
            options: [
              {
                value: 1,
                label: '东南',
                children: [
                  {
                    value: 2,
                    label: '上海',
                    children: [
                      { value: 3, label: '普陀' },
                      { value: 4, label: '黄埔' },
                      { value: 5, label: '徐汇' },
                    ],
                  },
                  {
                    value: 7,
                    label: '江苏',
                    children: [
                      { value: 8, label: '南京' },
                      { value: 9, label: '苏州' },
                      { value: 10, label: '无锡' },
                    ],
                  },
                  {
                    value: 12,
                    label: '浙江',
                    children: [
                      { value: 13, label: '杭州' },
                      { value: 14, label: '宁波' },
                      { value: 15, label: '嘉兴' },
                    ],
                  },
                ],
              },
              {
                value: 17,
                label: '西北',
                children: [
                  {
                    value: 18,
                    label: '陕西',
                    children: [
                      { value: 19, label: '西安' },
                      { value: 20, label: '延安' },
                    ],
                  },
                  {
                    value: 21,
                    label: '新疆维吾尔族自治区',
                    children: [
                      { value: 22, label: '乌鲁木齐' },
                      { value: 23, label: '克拉玛依' },
                    ],
                  },
                ],
              },
            ],
          }
        },
        methods: {
          btnClick: function () {
            // getCheckedNodes 获取及联选择的node节点
            const nodes = this.$refs.cascader.getCheckedNodes()
            // 递归转化为树
            function formatArrayToTree(list) {
              let result = []
              const merge = (nodes) => {
                const idToTreeNode = new Map()
                nodes.forEach((item) => {
                  const { label, value, parent, children, uid } = item
                  const treeNode = { label, value, uid }
                  if (children && children.length) {
                    treeNode.children = children
                  }
                  if (parent) {
                    if (!idToTreeNode.get(parent.uid)) {
                      idToTreeNode.set(parent.uid, {
                        label: parent.label,
                        value: parent.value,
                        parent: parent.parent,
                        uid: parent.uid,
                      })
                    }
                    const parentNode = idToTreeNode.get(parent.uid)
                    if (parentNode.children == null) {
                      parentNode.children = []
                    }
                    parentNode.children.push(treeNode)
                  }
                })
                const idToTreeNodes = Array.from(idToTreeNode.values())
                if (idToTreeNodes && idToTreeNodes.length > 0) {
                  result = idToTreeNodes
                  merge(idToTreeNodes)
                }
              }
              merge(list)
              return result
            }
            console.log(formatArrayToTree(nodes), 'result.....')
          },
        },
      }
      var Ctor = Vue.extend(Main)
      new Ctor().$mount('#app')
    </script>
  </body>
</html>
```
