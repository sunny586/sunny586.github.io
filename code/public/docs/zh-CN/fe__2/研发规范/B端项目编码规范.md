## B 端项目编码规范
B 端项目使用 ESLint 进行编码规范的约束


### 必须采用的规则合集
在项目中目前已经使用的规范集有：（这三个规则合集 建议必须开启）

```TypeScript
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
```
这三个规则合集正好约束了项目对应的三种语言类型：Vue 文件编码，js 通用编码规范，typescript 编码规范。

### 规则详情
如果想了解规则详情：
请参看如下链接
vue3-essential 规则合集（关于 vue3 的一些规范合集）：[https://eslint.vuejs.org/rules/](https://eslint.vuejs.org/rules/)
eslint recommended（eslint 推荐的 js 编码规范合集）： [https://eslint.org/docs/rules/](https://eslint.org/docs/rules/)
vue/typescript/recommended（typescript 编码规范合集）： [https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### 推荐插件
请使用 vscode 并安装 eslint， vetur 插件，在编辑器内获得显示错误的能力。
[ESLint 插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
[Vetur 插件](https://marketplace.visualstudio.com/items?itemName=octref.vetur)


### 推荐其他规则
按照个人或者团队意愿，可以选择一些扩充的 js 规范作为补充。本项目并没有采用。备选方案如下：
Airbnb Javascript 编码规范（Github 103k星）
Airbnb ESLint 合集：[https://www.npmjs.com/package/eslint-config-airbnb]()
规则详情：[https://github.com/airbnb/javascript#types]()


### 关于 Prettier 的使用
可以使用 Prettier 对代码进行优化，但是本项目并没有采用，同学们可以依据自己的爱好进行选择。创建了一个分支，可以将 Prettier 和 ESLint 在一起进行良好的工作。同学们可以参考：
[https://git.imooc.com/class-110/lego/src/feature/prettier]()