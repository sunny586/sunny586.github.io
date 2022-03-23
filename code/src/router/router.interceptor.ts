// import store from 'store2'
import router from '.';
// import vuex_store from '../store'
// import { get_access_token } from "../api/user.api";
// const whitePathNameList=[ // 以下路径name不检查权限
//   "home",
//   "article_detail",
//   "search",
//   'NotFound'
// ];

router.beforeEach(async (to, from, next) => {
  // if (to.path == '/') {
  //   const ticket_token = to.query.ticket_token;
  //   if (ticket_token) {
  //     // 如果是从SSO登陆回来，则获取accessToken
  //     await get_access_token({
  //       ticketToken: ticket_token as string
  //     })
  //     next({ path: '/' });
  //   }
  // }
  // if(!whitePathNameList.includes(to.name as string)){
  //   // 检查权限,如果没有token进入非游客页面，直接跳转到404
  //   if(!store.get("access_token")){
  //     next({path:'/404'})
  //   }
  // }
  // // 如果本地有access_token,刷新用户信息
  // if (store.get("access_token")) {
  //   await vuex_store.dispatch('user/requestUserInfo');
  // }
  next();

})