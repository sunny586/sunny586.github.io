import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
// element-plus
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/src/index.scss'
import '@/css/theme.scss'
// 导入路由守卫
import './router/router.interceptor'
import loadVMdPreview from './lib/vmd-preview'
// index.css
import '@/css/index.scss'


const app = createApp(App)
app.use(store)
app.use(router)
// 引入 element plus
app.use(ElementPlus, {
  locale: zhCn,
})
// 引入 v-md-preview
loadVMdPreview(app)

app.mount('#app')
