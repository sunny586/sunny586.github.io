### vue 全家桶依赖升级
1. 删除项目中的原有 vue 全家桶依赖：删除原项目中 package.json 中的 vue 全家桶依赖
```js
"vue": "^2.1.0",
"vue-router": "^2.1.1",
"vuex": "^2.0.0"
```
2. 升级 vue 全家桶依赖：替换 vue3 版本的依赖
```js
"vue": "^3.0.0",
"vue-router": "^4.0.0-0",
"vuex": "^4.0.0-0"
```
3. 安装项目依赖：
```
npm install
```
4. 配置vue3所需要的依赖
```js
"devDependencies": {
  "@vue/cli-service": "5.0.0-beta.2",
  "@vue/compiler-sfc": "^3.2.6",
  "sass": "^1.49.7",
  "sass-loader": "^12.4.0",
  "webpack": "^5.50.0",
  "webpack-cli": "^4.9.2"
},
```
5. 项目alias移植和eslint错误解决
```js
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'src': path.resolve(__dirname, './src'),
        'assets': path.resolve(__dirname, './src/assets'),
        'components': path.resolve(__dirname, './src/components')
      }
    },
  }
}
```

### vuex 和 vue-router 语法升级
1. 更新 vuex 配置 ：修改项目中 vuex 的配置
```js
import { createStore } from 'vuex'

import mutations from './mutations'
import actions from './action'
import getters from './getters'

const state = {...}

export default createStore({
	state,
	getters,
	actions,
	mutations,
})
```
2. 更新入口文件 vuex 使用：修改 mian.js 中 vuex的使用
```js
import {createApp} from 'vue'

import App from './App.vue';
import store from './store'

createApp(App).use(store).mount('#app');
```
3. 使用案例 : vuex 语法使用
```js
import { useStore } from "vuex";
let store = useStore();
store.state.latitude
store.commit('xx',data)
```

### vue-router 移植
1. 更新 vue-router 配置：修改项目中 vue-router 的配置及使用
```js
// router.js
import { createRouter, createWebHistory } from 'vue-router';

import  Home from '../page/home/home.vue'
import  msite from '../page/msite/msite.vue'

const routes = [
    {
            path: '/',
            redirect: '/home'
        },
        // 首页城市列表页
        {
            path: '/home',
            component: Home
        },
        {
            path: '/msite',
            component: msite
        },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;

// main.js 
import routes from './router/router'
createApp(App).use(store).use(routes).mount('#app');
```
2. vue-router页面集合：
```js
import home from "../page/home/home.vue";
import msite from "../page/msite/msite.vue";
import city from "../page/city/city.vue";
import food from "../page/food/food.vue";
import search from "../page/search/search.vue";
import shop from "../page/shop/shop.vue";
import login from "../page/login/login.vue";
import profile from "../page/profile/profile.vue";
import forget from "../page/forget/forget.vue";
import order from "../page/order/order.vue";
import orderDetail from "../page/order/children/orderDetail.vue";
import vipcard from "../page/vipcard/vipcard.vue";
import invoiceRecord from "../page/vipcard/children/vipDescription.vue";
import useCart from "../page/vipcard/children/useCart.vue";
import vipDescription from "../page/vipcard/children/vipDescription.vue";
import confirmOrder from "../page/confirmOrder/confirmOrder.vue";
import remark from "../page/confirmOrder/children/remark.vue";
import payment from "../page/confirmOrder/children/payment.vue";
import userValidation from "../page/confirmOrder/children/userValidation.vue";
import invoice from "../page/confirmOrder/children/invoice.vue";
import foodDetail from "../page/shop/children/foodDetail.vue";
import shopDetail from "../page/shop/children/shopDetail.vue";
import chooseAddress from "../page/confirmOrder/children/chooseAddress.vue";
import addAddress from "../page/confirmOrder/children/children/addAddress.vue";
import searchAddress from "../page/confirmOrder/children/children/children/searchAddress.vue";
import shopSafe from "../page/shop/children/children/shopSafe.vue";
import info from "../page/profile/children/info.vue";
import setusername from "../page/profile/children/children/setusername.vue";
import address from "../page/profile/children/children/address.vue";
import add from "../page/profile/children/children/children/add.vue";
import addDetail from "../page/profile/children/children/children/children/addDetail.vue";
import balance from "../page/balance/balance.vue";
import balanceDetail from "../page/balance/children/detail.vue";
import benefit from "../page/benefit/benefit.vue";
import coupon from "../page/benefit/children/coupon.vue";
import hbDescription from "../page/benefit/children/hbDescription.vue";
import hbHistory from "../page/benefit/children/hbHistory.vue";
import exchange from "../page/benefit/children/exchange.vue";
import commend from "../page/benefit/children/commend.vue";
import points from "../page/points/points.vue";
import pointsDetail from "../page/points/children/detail.vue";
import service from "../page/service/service.vue";
import questionDetail from "../page/service/children/questionDetail.vue";
import find from "../page/find/find.vue";
import download from "../page/download/download.vue";
```

### 接口升级
代理配置：
```js
devServer: {
  host: "localhost",
  port: 8081,
  hot: true,
  open: false,
  /* 跨域代理 */
  proxy: {
    "/v1": {
      /* 目标代理服务器地址 */
      target: "http://cangdu.org:8001", //
      /* 允许跨域 */
      changeOrigin: true,
      ws: true,
    },
  }
},
```

