### http => index.ts
```ts
import axios from 'axios'
import type { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'
import { Result } from './types'
import qs from 'qs'


const pendingRequest = new Map(); // 请求对象
const CancelToken = axios.CancelToken;

const service: AxiosInstance = axios.create({
  timeout: 30000
})


// 获取请求key
function getReqKey(config: AxiosRequestConfig) {
  // 请求方式、请求地址、请求参数生成的字符串来作为是否重复请求的依据
  const { method, url, params, data } = config; // 解构出来这些参数
  // GET ---> params  POST ---> data
  const requestKey = [method, url, qs.stringify(params), qs.stringify(data)].join('&');
  return requestKey;
}

// 取消重复请求
function removeReqKey(key: string) {
  if (pendingRequest.has(key)) {
    const cancelToken = pendingRequest.get(key);
    cancelToken(key); // 取消之前发送的请求
    pendingRequest.delete(key); // 请求对象中删除requestKey
  }
}


/* 请求拦截器 */
service.interceptors.request.use((config: AxiosRequestConfig) => {
  //  伪代码
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  // 在发送请求之前做些什么
  config.headers = {
    'content-type': 'application/json',
    'token': 'xxxx'
  }
  // 获取请求key
  let requestKey = getReqKey(config);

  // 判断是否是重复请求
  if (pendingRequest.has(requestKey)) { // 是重复请求
    removeReqKey(requestKey); // 取消
  } else {
    // 设置cancelToken
    config.cancelToken = new CancelToken(function executor(cancel) {
      pendingRequest.set(requestKey, cancel); // 设置
    })
  }

  return config
}, (error: AxiosError) => {
  console.log(error.message)
  return Promise.reject(error)
})

/* 响应拦截器 */
service.interceptors.response.use((response: AxiosResponse<Result>) => {
  // 请求对象中删除requestKey
  let requestKey = getReqKey(response.config);
  removeReqKey(requestKey);


  const { code, message, data } = response.data

  // 根据自定义错误码判断请求是否成功
  if (code === 0) {
    // 将组件用的数据返回
    return data
  } else {
    // 处理业务错误。
    alert(message)
    return Promise.reject(new Error(message))
  }
}, (error: AxiosError) => {
  if (error && error.config) {
    const requestKey = getReqKey(error.config);
    removeReqKey(requestKey);
  }
  // 处理 HTTP 网络错误
  let message = ''
  // HTTP 状态码
  const status = error.response?.status
  switch (status) {
    case 401:
      message = 'token 失效，请重新登录'
      // 这里可以触发退出的 action
      break;
    case 403:
      message = '拒绝访问'
      break;
    case 404:
      message = '请求地址错误'
      break;
    case 500:
      message = '服务器故障'
      break;
    default:
      message = '网络连接故障'
  }
  console.log(message)
  return Promise.reject(error)
})


/* 导出封装的请求方法 */
const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.get(url, config)
  },

  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },

  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config)
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return service.delete(url, config)
  }
}

export default http
```

### http => type.ts
```ts
/* 服务器返回数据的的类型，根据接口文档确定 */
export interface Result<T = any> {
  code: number,
  message: string,
  data: T
}
```


### apis => test.ts
```ts
import http from '../http/index'

export function testApi(params: any) {
  return http.get<Array<{ name: string }>>('/test/api', params)
}
```

### 页面使用
```ts
import { testApi } from './apis/test.ts'

testApi().then(res => {
  console.log(res, 'res....22')
})
testApi().then(res => {
  console.log(res, 'res....33')
})
```