// import axios from 'axios'
// import store from 'store2'
// import router from '../router/index'
// // request拦截器
// axios.interceptors.request.use(
//   (config: any) => {
//     if (store.get('access_token')) {
//       config.headers['Authorization'] = store.get('access_token')
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )
// // respone拦截器
// axios.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     // 捕捉错误代码和错误消息
//     const { statusCode, message } = JSON.parse(error.request.response)
//     // 401代表登陆状态失效或者访问
//     if (statusCode == 401) {     
//       window.location.href =
//         'https://sso.sunny586blog.cn/?redirect=sunny586blog.cn'      
//     }
//     if (statusCode == 404) {
//       router.push({ path: '/404' })
//     }
//     return Promise.reject(error)
//   }
// )
