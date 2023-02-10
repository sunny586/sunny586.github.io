### 如何配置 ESLint  
```js
yarn add -D eslint
```


上面通过对 .eslintrc 的简单配置实现了简单代码的校验。然而实际上 ESLint 的配置远非这么简单。我们可以通过 eslint --init 指令来窥见端倪：

在终端输入：
```js
npx eslint --init
```

会看到：
>? How would you like to use ESLint? …
>To check syntax only
>To check syntax and find problems
>To check syntax, find problems, and enforce code style

选择：To check syntax, find problems, and enforce code style => JavaScript modules (import/export) => Vue.js => Yes => Browser => Use a popular style guide => Standard: https://github.com/standard/standard => JSON > Yes

后项目目录生成了 .eslintrc.json，内容如下：
```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["plugin:vue/essential", "standard"],
  "parserOptions": {
    "ecmaVersion": 13,
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": ["vue", "@typescript-eslint"],
  "rules": {}
}
```
[查看](https://zhuanlan.zhihu.com/p/428205589?utm_id=0)


### husky 的使用
1. 安装husky
```js
npm install eslint -D
```
2. 在package.json 中加入prepare脚本，每次在 npm i 安装完依赖后都会执行这个命令
```json
// package.json
{
  scripts: {
    "prepare": "husky install"
  }
}
```
```js
npm run prepare
```
3. 添加 pre-commit 钩子
```js
npx husky add .husky/pre-commit "npx run lint:eslint"
```
运行完之后会在 .husky 文件下新增 pre-commit 文件
若 pre-commit 文件生成失败，可手动添加
```js
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx run lint:eslint
```
[查看](https://juejin.cn/post/6961620162655027230)
[查看](https://blog.csdn.net/zouhai1/article/details/127415791)


### 配置 commit 提交规范
> 完成以上两项配置就已经可以对提交代码进行检测
> 以下内容是对 commit 提交信息的检测，需要对 commit提交规范 有了解
> 例如：“feat: 新增功能”，“fix: 修复bug”

1. 安装 commitlint
```js
npm install --save-dev @commitlint/config-conventional @commitlint/cli
```
2. 新增 commitlint.config.js 文件
```js
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```
3. 新增 commit-msg 钩子
```js
npx husky add .husky/commit-msg  "npx --no -- commitlint --edit ${1}"
```
运行完之后会在 .husky 文件下新增 commit-msg 文件
若 commit-msg 文件生成失败，可手动添加
```js
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit $1
```

### webpack 5 配置babel-loader babel7

1. 安装Balel目的：

在webpack中 默认只能处理部分 ES6的新语法，一些更高级的ES6或ES7的语法，webpack是处理不了的这个时候就需要借助第三方的loader 来帮助webpack 处理这些高级的语法。

Balel 可以帮我我们将高级的语法转为低级的语法。

2. 安装命令

```js
npm install babel-loader @babel/core @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/preset-env @babel/runtime -D
```
3. webpack.config.js配置模块规则

```js
module.exports = {
 module: {       
        rules: [　　　　　　
　　　　　　　　{
                test: /\.js$/, exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ],
                            plugins: [
                                [require("@babel/plugin-transform-runtime"), { "legacy": true }],
                                [require("@babel/plugin-proposal-class-properties"), { "legacy": true }]
                            ]
                        }
                    }
                ]             
            }
        ] 
    }
}    
```  