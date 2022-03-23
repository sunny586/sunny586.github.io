import axios from 'axios';
import store from 'store2'
import vuex_store from '../store'
import router from '../router/index';

// request拦截器
axios.interceptors.request.use((config: any) => {
    if (store.get("access_token")) {
        config.headers['Authorization'] = store.get("access_token")
    }
    return config;
}, (error) => {
    // console.log(error)
    return Promise.reject(error);
});

// respone拦截器
axios.interceptors.response.use((response) => {
    // console.log('response拦截器')
    // console.log('response:', response)
    return response;
}, (error) => {
    // 捕捉错误代码和错误消息
    const {statusCode,message}=JSON.parse(error.request.response)
    // console.log(statusCode,message)
    // 401代表登陆状态失效或者访问
    if(statusCode==401){
        // 登陆失败或会话过期等
        // vuex_store.commit('update_err_msg',message)
        window.location.href =
        "https://sso.leoyiblog.cn/?redirect=leoyiblog.cn";
        // "https://sso.leoyiblog.cn/?redirect=localhost:8080";
    }
    if(statusCode==404){
        // 访问未授权的页面
        router.push({ path: "/404" });
    }
    return Promise.reject(error);
});
