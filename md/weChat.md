##  小程序
### 1 创建项目
* 我们需要通过开发者工具，来完成小程序创建和代码编辑。
* 开发者工具安装完成后，打开并使用微信扫码登录。选择创建“项目”，填入上文获取到的 AppID ，设置一个本地项目的名称（非小程序名称），比如“我的第一个项目”，并选择一个本地的文件夹作为代码存储的目录，点击“新建项目”就可以了。
* 为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择“是”，开发者工具会帮助我们在开发目录里生成一个简单的 demo。

### 2 代码编写
* 点击开发者工具左侧导航的“编辑”，我们可以看到这个项目，已经初始化并包含了一些简单的代码文件。最关键也是必不可少的，是 app.js、app.json、app.wxss 这三个。其中，.js后缀的是脚本文件，.json后缀的文件是配置文件，.wxss后缀的是样式表文件。微信小程序会读取这些文件，并生成小程序实例。
* app.js是小程序的脚本代码。我们可以在这个文件中监听并处理小程序的生命周期函数、声明全局变量。调用框架提供的丰富的 API，如本例的同步存储及同步读取本地数据。想了解更多可用 API，可参考 API 文档。

```javascript
//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData:{
    userInfo:null
  }
})
```
* app.json 是对整个小程序的全局配置。我们可以在这个文件中配置小程序是由哪些页面组成，配置小程序的窗口背景色，配置导航条样式，配置默认标题。注意该文件不可添加任何注释。更多可配置项可参考配置详解。

```json
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ],
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle":"black"
  }
}
```

* app.wxss 是整个小程序的公共样式表。我们可以在页面组件的 class 属性上直接使用 app.wxss 中声明的样式规则。

```css
/**app.wxss**/
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
```
+ 每一个小程序页面是由同路径下同名的四个不同后缀文件的组成，如：index.js、index.wxml、index.wxss、index.json。.js后缀的文件是脚本文件，.json后缀的文件是配置文件，.wxss后缀的是样式表文件，.wxml后缀的文件是页面结构文件


### 3 项目目录

	|- components  组件目录
	|- assets  静态资源目录
	  |- images
	  ... ...
	|- pages  小程序页面
	  |- index  
	    |- index.js
	    |- index.json
	    |- index.wxml
	    |- index.wxss
	  |- login
	    |- login.js
	    |- login.json
	    |- login.wxml
	    |- login.wxss
	   ......
	|- utils 公共方法目录
	  |- util.js
	  ......
	|- app.js 小程序主入口
	|- app.json 全局配置文件
	|- app.wxss 全局样式文件

### 4 生命周期

#### 4.1 App

+ App() 函数用来注册一个小程序。接受一个 object 参数，其指定小程序的生命周期函数等。

```javascript
App({
  onLaunch: function(options) {
    // Do something initial when launch.
  },
  onShow: function(options) {
      // Do something when show.
  },
  onHide: function() {
      // Do something when hide.
  },
  onError: function(msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
```

+ getApp()
+ 我们提供了全局的 getApp() 函数，可以获取到小程序实例。

```javascript
// other.js
var appInstance = getApp()
console.log(appInstance.globalData) // I am global data
```

#### 注意：

+ App() 必须在 app.js 中注册，且不能注册多个。

+ 不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例。

+ 不要在 onLaunch 的时候调用 getCurrentPage()，此时 page 还没有生成。

+ 通过 getApp() 获取实例之后，不要私自调用生命周期函数。

#### 4.2 Page

+ Page() 函数用来注册一个页面。接受一个 object 参数，其指定页面的初始数据、生命周期函数、事件处理函数等。

```javascript
Page({
  data: {
    text: "This is page data."
  },
  onLoad: function(options) {
    // Do some initialize when page load.
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down.
  },
  onReachBottom: function() {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
   // return custom share data when user share.
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    })
  },
  customData: {
    hi: 'MINA'
  }
})
```

######  生命周期函数

+ onLoad: 页面加载
  +  一个页面只会调用一次，可以在 onLoad 中获取打开当前页面所调用的 query 参数。
+ onShow: 页面显示
  + 每次打开页面都会调用一次。
+ onReady: 页面初次渲染完成
  + 一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
  + 对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期
+ onHide: 页面隐藏
  + 当navigateTo或底部tab切换时调用。
+ onUnload: 页面卸载
  + 当redirectTo或navigateBack的时候调用。

###### 页面相关事件处理函数
+ onPullDownRefresh: 下拉刷新
  + 监听用户下拉刷新事件。
  + 需要在config的window选项中开启enablePullDownRefresh。
  + 当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
+ onShareAppMessage: 用户分享
  + 只有定义了此事件处理函数，右上角菜单才会显示“分享”按钮
  + 用户点击分享按钮的时候会调用
  + 此事件需要 return 一个 Object，用于自定义分享内容

```javascript
Page({
  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/page/user?id=123'
    }
  }
})
```

### 5 路由跳转
+ wx.navigateTo(OBJECT)

```javascript
wx.navigateTo({
  url: 'test?id=1'
})
```

```javascript
Page({
  onLoad: function(option){
    console.log(option)
  }
})
```

+ wx.redirectTo(OBJECT)   
  关闭当前页面，跳转到应用内的某个页面。

+ wx.reLaunch(OBJECT)   
  关闭所有页面，打开到应用内的某个页面。

+ wx.switchTab(OBJECT)   
  跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面

```json
{
  "tabBar": {
    "list": [{
      "pagePath": "index",
      "text": "首页"
    },{
      "pagePath": "other",
      "text": "其他"
    }]
  }
}
```

```javascript
wx.switchTab({
  url: '/index'
})
```

+ wx.navigateBack(OBJECT)   
  关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages()) 获取当前的页面栈，决定需要返回几层。

```javascript
// 注意：调用 navigateTo 跳转时，调用该方法的页面会被加入堆栈，而 redirectTo 方法则不会。见下方示例代码

// 此处是A页面
wx.navigateTo({
  url: 'B?id=1'
})

// 此处是B页面
wx.navigateTo({
  url: 'C?id=1'
})

// 在C页面内 navigateBack，将返回A页面
wx.navigateBack({
  delta: 2
})
```

> tip: wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面

### 6 发起请求

+ wx.request(OBJECT)  
  wx.request发起的是 HTTPS 请求。

```javascript
wx.request({
  url: 'test.php', //仅为示例，并非真实的接口地址
  data: {
     x: '' ,
     y: ''
  },
  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
    console.log(res.data)
  }
})
```

1. tip: content-type 默认为 'application/json'
2. bug: 开发者工具 0.10.102800 版本，header 的 content-type 设置异常；
3. tip: 客户端的 HTTPS TLS 版本为1.2，但 Android 的部分机型还未支持 TLS 1.2，所以请确保 HTTPS 服务器的 TLS 版本支持1.2及以下版本；
4. tip: 要注意 method 的 value 必须为大写（例如：GET）；
5. tip: url 中不能有端口；
6. tip: request 的默认超时时间和最大超时时间都是 60s
7. tip: request 的最大并发数是 5
8. tip: 网络请求的 referer 是不可以设置的，格式固定为 https://servicewechat.com/{appid}/{version}/page-frame.html，其中 {appid} 为小程序的 appid，{version} 为小程序的版本号，版本号为 0 表示为开发版。

### 7 WXSS

+ rpx（responsive pixel）: 可以根据屏幕宽度进行自适应。规定屏幕宽为750rpx。如在 iPhone6 上，屏幕宽度为375px，共有750个物理像素，则750rpx = 375px = 750物理像素，1rpx = 0.5px = 1物理像素。

### 8 模板

+ WXML提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。

  定义模板    
+ 使用name属性，作为模板的名字。然后在 < template/>内定义代码片段

```html
<template name="postItem">
  <view class="post-container">
    <view class="post-author-date">
      <image class="post-author" src="{{avatar}}"></image>
      <text class="post-date">{{date}}</text>
    </view>
    <text class="post-title">{{title}}</text>
    <image class="post-image" src="{{imgSrc}}"></image>
    <text class="post-content">{{content}}
    </text>
    <view class="post-like">
      <image class="post-like-image" src="/images/icon/chat.png"></image>
      <text class="post-like-font">{{collection}}</text>
      <image class="post-like-image" src="/images/icon/view.png"></image>
      <text class="post-like-font">{{reading}}</text>
    </view>
  </view>
</template>
```

  使用模板
+ 使用 is 属性，声明需要的使用的模板，然后将模板所需要的 data 传入。

```html
<import src="post-item/post-item-template.wxml" />

<template is="postItem" data="{{...item}}" />
```
> item 是模板所需要的数据。模板中不能写js，只是数据展示。

### 9 配置

+ 我们使用app.json文件来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。

```json
{
  "pages": [
    "pages/index/index",
    "pages/logs/index"
  ],
  "window": {
    "navigationBarTitleText": "Demo"
  },
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页"
    }, {
      "pagePath": "pages/logs/logs",
      "text": "日志"
    }]
  },
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
  },
  "debug": true
}
```

pages
+ 接受一个数组，每一项都是字符串，来指定小程序由哪些页面组成。每一项代表对应页面的【路径+文件名】信息，数组的第一项代表小程序的初始页面。小程序中新增/减少页面，都需要对 pages 数组进行修改。

window
+ 用于设置小程序的状态栏、导航条、标题、窗口背景色。

tabBar
+ 如果我们的小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），那么我们可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。

> Tip： 通过页面跳转（wx.navigateTo）或者页面重定向（wx.redirectTo）所到达的页面，即使它是定义在 tabBar 配置中的页面，也不会显示底部的 tab 栏。

> tabBar 是一个数组，只能配置最少2个、最多5个 tab，tab 按数组的顺序排序。

> tabBar的样式是固定的。上边为图标，下边为文字说明。

### 10 常用组件

+ [见官方文档。](https://mp.weixin.qq.com/debug/wxadoc/dev/component/)

### 11 搜索小程序

+ 小程序又增新流量入口，支持自定义关键词搜索。6月3日凌晨3点多，微信小程序后台新增推广功能，支持开发者添加与业务相关的自定义关键词，搜索策略将于6月9日正式生效。开发者可在小程序后台的 “推广” 模块中，配置与小程序业务相关的关键词

> 值得注意的是，小程序可配置最多10个与业务相关的关键词，关键词在审核通过后，会和小程序的服务质量、用户使用情况等因素，共同影响搜索结果。每30天可以修改3次。

> 关键词设置 可配置最多10个与业务相关的关键词，关键词在审核通过后，会和小程序的服务质量、用户使用情况等因素，共同影响搜索结果。

[相关链接](http://www.sohu.com/a/146095199_282116)

### 12 wx.login(OBJECT)

+ 调用接口获取登录凭证（code）进而换取用户登录态信息，包括用户的唯一标识（openid） 及本次登录的 会话密钥（session_key）。用户数据的加解密通讯需要依赖会话密钥完成。

```js
//app.js
App({
  onLaunch: function() {
    wx.login({
      success: function(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  }
})
```

code 换取 session_key

> ​ 这是一个 HTTPS 接口，开发者服务器使用登录凭证 code 获取 session_key 和 openid。其中 session_key 是对用户数据进行加密签名的密钥。为了自身应用安全，session_key 不应该在网络上传输。

接口地址：
+ https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code

```js
//正常返回的JSON数据包
{
      "openid": "OPENID",
      "session_key": "SESSIONKEY"
}
//错误时返回JSON数据包(示例为Code无效)
{
    "errcode": 40029,
    "errmsg": "invalid code"
}
```

### 13 微信小程序支付

要先到微信公众平台开通微信支付，绑定微信支付商户号

步骤

A：小程序向服务端发送商品详情、金额、openid

B：服务端向微信统一下单

C：服务器收到返回信息二次签名发回给小程序

D：小程序发起支付

E：服务端收到回调

小程序向服务端发送商品详情、金额、openid

```js
  wx.request({
    url:'test.php',
    data:{
      openid:'',     //openid
      tatal_free:'', //商品金额
      wx_body:''     //商品描述
    }
  })
```

> 然后服务端接收小程序发来的信息后 [会发起统一下单](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1)

服务器下单完成后会返回签名参数

```json
{
  'timeStamp': '',
  'nonceStr': '',
  'package': '',
  'signType': 'MD5',
  'paySign': ''
}
```

前端拿到签名参数后发起支付

```js
wx.requestPayment({
  'timeStamp': '',
  'nonceStr': '',
  'package': '',
  'signType': 'MD5',
  'paySign': '',
  'success':function(res){
    wx.showToast({
      title:'支付成功'
    })
  },
  'fail':function(res){},
  'complete':function(res){}
})
```