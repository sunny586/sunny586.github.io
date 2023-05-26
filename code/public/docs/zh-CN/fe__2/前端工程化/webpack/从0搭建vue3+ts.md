### 配置 ESLint  
```js
yarn add -D eslint
```
实际上 ESLint 的配置远非这么简单。我们可以通过 eslint --init 指令来窥见端倪：

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
npm install husky -D
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
[查看](https://juejin.cn/post/6961620162655027230) [查看](https://blog.csdn.net/zouhai1/article/details/127415791)


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
### Webpack 5 CSS常用配置方法 & 使用mini-css-extract-plugin插件对css进行抽离

安装 mini-css-extract-plugin 为开发依赖：

```js
npm install mini-css-extract-plugin -D
```

```js
npm install -D css-loader sass-loader less-loader stylus-loader
```

修改 webpack 配置
修改 webpack.config.js 文件：
```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

修改 loader 配置

//...
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    },
    {
    test: /\.s[ca]ss$/,
    use: [
      MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ]
    },
    {
      test: /\.less$/,
      use: [
      MiniCssExtractPlugin.loader,
        'css-loader',
        'less-loader',
      ]
    },
    {
      test: /\.styl$/,
      use: [
      MiniCssExtractPlugin.loader,
        'css-loader',
        'stylus-loader'
      ]
    }
  ]
},
//...
```
添加插件配置：在 plugins 中添加该插件
```js
plugins: [
  // ...
  new MiniCssExtractPlugin({
  filename: 'css/index.css'
  })
],
```

### 使用css-minimizer-webpack-plugin插件对css进行压缩
```js
npm install -D css-minimizer-webpack-plugin
```
```js
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ],
}
```

### 使用uglifyjs-webpack-plugin插件对js进行压缩
```js
npm install -D uglifyjs-webpack-plugin
```

```js
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
optimization: {
  minimize: true,
  minimizer: [
    new UglifyjsWebpackPlugin({ sourceMap: false })
  ]
}
```

### 使用splitChunk进行代码抽离
```js
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new UglifyjsWebpackPlugin({ sourceMap: false })
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        libs: {
          name: 'vendors-chunk',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: 'initial'
        },
        elementUI: {
          name: 'chunk-element-plus',
          priority: 20,
          test: /[\\/]node_modules[\\/]_?element-plus(.*)/
        },
        commons: {
          name: 'chunk-commons',
          test: /[\\/]src[\\/]components[\\/]/,
          minChunks: 3,
          priority: 5,
          reuseExistingChunk: true
        }
      }
    }
  },
```


### 分包 DllPlugin DllReferencePlugin
>对于变化几率很小的一些第三方包，其实没必要build的时候都要打包一次， 可以把这些第三方包单独抽离出来，提前打包好。webpack本身是要体现出模块间的依赖关系，当我们将一些包抽离出来后，维护之前的依赖关系就需要manifest.json这个文件,将vue、vue-router、vuex等基础包和业务基础包打包成一个文件,使用 DLLPlugin 进行分包，DllReferencePlugin 对 manifest.json 引用。manifest.json 是对分离出来的包的描述。

+ 分包的具体步骤：
  + 分包：定义webpack.dll.config.js，使用DllPlugin配置分包，定义scripts命令，执行命令，完成分包
  + 排除分包：在vue.config.js中，使用DllReferencePlugin引用manifest文件排除分包
  + 拷贝dll：将dll拷贝至项目目录下
  + 引用dll：使用add-asset-html-webpack-plugin引用分包文件

```js
// webpack.dll.conf.js
const path = require('path')
const webpack = require('webpack')

const dllPath = '../dll'

module.exports = {
  mode: 'production',
  entry: {
    vue: ['vue', 'vue-router', 'vuex']
  },
  output: {
    path: path.join(__dirname, dllPath),
    filename: '[name].dll.js',
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, dllPath, '[name]-manifest.json'),
      name: '[name]_[hash]',
      context: process.cwd()
    })
  ]
}

// vue.config.js
plugins: [
  new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: path.resolve(__dirname, './dll/vue-manifest.json')
  }),
  new AddAssetHtmlWebpackPlugin({
    filepath: path.resolve(__dirname, './dll/vue.dll.js'),
    publicpath: './'
  })
]
```




### 引入ts

下载依赖
```js
npm install -D typescript ts-loader 
```
修改webpack.config.js
```js
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              [require("@babel/plugin-transform-runtime"), { "legacy": true }],
              [require("@babel/plugin-proposal-class-properties"), { "legacy": true }]
            ]
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        },
        generator: {
          filename: 'img/[name].[hash:6][ext]'
        }
      }, { // ts-loader配置
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }]
      }, {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    })
  ],
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  devServer: {
    host: 'localhost',
    port: '8888'
  }
}
```
下载ts相关的eslinit依赖
```js
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm install -D @vue/eslint-config-typescript 
```
修改.eslintrc.js
```js
module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    '@vue/typescript/recommended'
  ],
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    // 允许非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // 允许自定义模块和命名空间
    '@typescript-eslint/no-namespace': 'off',
    // 允许对this设置alias
    '@typescript-eslint/no-this-alias': 'off',
    // 允许使用any类型
    '@typescript-eslint/no-explicit-any': ['off'],
    ......
  }
}
```
[查看](https://blog.csdn.net/Ariel_lj/article/details/123259517)

### ts中 import时，识别后缀为.vue的文件

创建shims-vue.d.ts
```ts
declare module '*.vue'{
  import type { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
```


### 引入vue-router

vue 3.0 路由API [ vue-router 4.0]

vue router API
createRouter 创建路由
```js
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(...)
router.afterEach(...)
         
vue.use(router)
```
+ createWebHashHistory hash 路由

+ createWebHistory history 路由

+ createMemoryHistory 带缓存 history 路由

+ parseQuery 查询参数反序列化

+ stringifyQuery 查询参数序列化

+ onBeforeRouteLeave 路由离开钩子
  + to 目标路由信息
  + from 当前路由信息
  + next 跳转函数
  
+ useRoute 返回当前路由， 子属性都被ref包装
  + path
  + name
  + params
  + query
  + hash
  + fullpath
  + matched
  + meta
  + redirectedFrom
  
+ useRouter 返回路由实例
  + currentRoute 返回当前路由 , 非ref
  + addRoute 动态添加路由
  + removeRoute 动态删除路由
  + hasRoute
  + getRoutes 获取路由配置, 替换原 3.0 routes 属性
  + push 路由跳转
  + replace 路由重定向
  + resolve 解析目标路由
  + beforeEach 全局路由守卫, 路由跳转前
  + afterEach 全局路由守卫, 路由跳转后台
  + onError 报错监听
  + isReady 路由是否初始话， 返回Promise, 替代原3.0 onReady
  + history 路由执行器
  + install vue插件安装器

+ useLink 自定义路由跳转函数, 接受一个路由配置，并返回路由信息及执行回调
  + route 路由对象
  + href 目标地址
  + isActive 是否被激活
  + isExactActive
  + navigate 跳转回调

```js
const { route, href, isActive, isExactActive,navigate } = useLink({ to: '/sub', from :'/sub' }) 
```


+ Link router-link 组件， 私有属性

+ View router-view 组件， 私有属性

+ START_LOCATION 起始路由

+ NavigationFailureType 故障类型

总结
将路由拆分为 hash， history，memory history 三种路由形式. 将类的创建方式改为函数式。


### 引入pinia

[参考文档](https://pinia.vuejs.org/zh/introduction.html)


### 引入element-plus

[参考文档](https://element-plus.gitee.io/zh-CN/)


### 现在支持 package.json 中的 exports 字段。原生支持 Yarn PnP。
更多细节请参见[package exports](https://webpack.docschina.org/guides/package-exports/)。


