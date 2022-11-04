### 原生的js项目升级

1. 进行多入口打包，不同的页面引入不同的js和css
```js
 entry: {
  'index': './src/index.js',
  'login': './src/login.js'
}
```
2. 使用mini-css-extract-plugin插件对css进行抽离
```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module: {
  rules: [{
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader'] 
  }]
}
plugins: [
  new MiniCssExtractPlugin({
    filename: 'css/[name].[hash:6].css',
    chunkFilename: 'css/[name].chunk.css'
  })
]
```
3. 使用css-minimizer-webpack-plugin插件对css进行压缩
```js
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ],
}
```
4. 图片抽离和优化
 ```js
module: {
  rules: [{
    // webpack4 是使用file-loader和url-loader 
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset',
    parser: {
      dataUrlCondition: {
        maxSize: 8 * 1024,
      }
    },
    generator: {
      filename: 'img/[name].[hash:6][ext]'
    }
  }]
}
``` 
5. 使用uglifyjs-webpack-plugin插件对js进行压缩
```js
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
optimization: {
  minimize: true,
  minimizer: [
    new UglifyjsWebpackPlugin({ sourceMap: true })
  ]
}
```
6. 按照treeshaking规范对代码进行优化
```js
// treeshaking触发条件：---------------------------------------
// 1. 通过解构的方式获取方法，可以触发treeshaking
// 2. 调用的npm包必须使用ESM规范
// export function a() {}
// import _ from 'lodash'
/** import { get } from 'lodash-es' */
// 3. 同一文件的treeshaking有触发条件，条件就是mode=production
// 4. 一定要使用解构来加载模块
/** import { test1 } from './tools' */
/** console.log(get({ a: 123456789 }, 'a'))*/
/**test1() */
// treeshaking触发条件：end ------------------------------------
```
7. 使用splitChunk进行代码抽离
```js
optimization: {
  splitChunks: {
    minSize: 300 * 1024,
    chunks: 'async',
    cacheGroups: {
      jquery: {
        name: 'jquery',
        test: /jquery/,
        chunks: 'all'
      },
      'lodash-es': {
        name: 'lodash-es',
        test: /lodash-es/,
        chunks: 'all'
      },
      default: { // 作用于被多次引用的模块
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  }
},
```


### 完整配置如下

```js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  // mode: 'production',
  mode: 'development',
  entry: {
    'index': './src/index.js',
    'login': './src/login.js'
  },
  output: {
    filename: 'js/[name].[hash:6].js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [{
      test: /\.css$/,
      // 抽取css
      // 还需要配合MiniCssExtractPlugin插件
      // new MiniCssExtractPlugin({
      //   filename: 'css/[name].[hash:6].css',
      //   chunkFilename: 'css/[name].chunk.css'
      // })
      use: [MiniCssExtractPlugin.loader, 'css-loader'] 
    }, {
      // webpack4 是使用file-loader和url-loader 
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset',
      parser: {
        dataUrlCondition: {
          maxSize: 8 * 1024,
        }
      },
      generator: {
        filename: 'img/[name].[hash:6][ext]'
      }
    }]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyjsWebpackPlugin({ sourceMap: true }),
      new CssMinimizerWebpackPlugin()
    ],
    splitChunks: {
      minSize: 300 * 1024,
      chunks: 'async',
      cacheGroups: {
        jquery: {
          name: 'jquery',
          test: /jquery/,
          chunks: 'all'
        },
        'lodash-es': {
          name: 'lodash-es',
          test: /lodash-es/,
          chunks: 'all'
        },
        default: { // 作用于被多次引用的模块
          minChunks: 2,
          priority: -20,
          name: 'haha',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/img'),
          to: path.resolve(__dirname, './dist/img')
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/login.html',
      chunks: ['login']
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:6].css',
      chunkFilename: 'css/[name].chunk.css'
    })
  ]
}

/**
 * 1. 进行多入口打包，不同的页面引入不同的js和css  
 * 2. 使用mini-css-extract-plugin插件对css进行抽离
 * 3. 使用css-minimizer-webpack-plugin插件对css进行压缩
 * 4. 图片抽离和优化
 * 5. 使用uglifyjs-webpack-plugin插件对js进行压缩
 * 6. 按照treeshaking规范对代码进行优化
 * 7. 使用splitChunk进行代码抽离
 */
```