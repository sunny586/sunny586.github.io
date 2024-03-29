const path = require('path')
const HotHashWebpackPlugin = require('hot-hash-webpack-plugin')
const WebpackBar = require('webpackbar')
const dotenv = require('dotenv')

const resolve = (dir) => path.join(__dirname, '.', dir)

// 设置dotenv
const lv = process.argv[process.argv.length - 1]
// config
dotenv.config({ path: '.env.' + lv })


module.exports = {
  productionSourceMap: false,

  outputDir:
    process.env.VUE_APP_TARGET === 'gitee'
      ? resolve('../../zhangyu586/dist')
      : resolve('../dist'),
  assetsDir: 'assets',
  publicPath: './',
  devServer: {
    port: 9999,
    host: '0.0.0.0',
    https: false,
    open: true,
  },
  parallel: false,

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/apis'))
      .set('common', resolve('src/common'))
      .set('@config', resolve('config'))

    config.module
      .rule('images')
      .use('url-loader')
      .tap((options) => ({
        name: './assets/images/[name].[ext]',
        quality: 85,
        limit: 0,
        esModule: false,
      }))

    config.module
      .rule('svg')
      .test(/\.svg$/)
      .include.add(resolve('src/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')

    if (process.env.NODE_ENV !== 'production') {
      config.module
        .rule('md')
        .test(/\.md$/)
        .use('file-loader')
        .loader('file-loader')
        .end()
    }

    config.plugin('define').tap((args) => [
      {
        ...args,
        'process.env.VUE_APP_TITLE': JSON.stringify(process.env.VUE_APP_TITLE),
        'process.env.VUE_APP_TARGET': JSON.stringify(process.env.VUE_APP_TARGET),
        'process.env.VUE_BASE_URL': JSON.stringify(process.env.VUE_BASE_URL),
        'process.env.CONST_FG_SORT': JSON.stringify(process.env.CONST_FG_SORT),
      },
    ])

    // 生产环境配置
    if (process.env.NODE_ENV === 'production') {
      config.output.filename('./js/[name].[chunkhash:8].js')
      config.output.chunkFilename('./js/[name].[chunkhash:8].js')
      config.plugin('extract-css').tap((args) => [
        {
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
        },
      ])
      config.plugin('hotHash').use(HotHashWebpackPlugin, [{ version: '1.0.0' }])
      config.plugin('webpackBar').use(WebpackBar)

      config.optimization
        .minimize(true)
        .minimizer('terser')
        .tap((args) => {
          let { terserOptions } = args[0]
          terserOptions.compress.drop_console = true
          terserOptions.compress.drop_debugger = true
          return args
        })
      config.optimization.splitChunks({
        cacheGroups: {
          common: {
            name: 'common',
            chunks: 'all',
            minSize: 1,
            minChunks: 2,
            priority: 1,
          },
          vendor: {
            name: 'chunk-libs',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
          },
        },
      })
    }
  },
}
