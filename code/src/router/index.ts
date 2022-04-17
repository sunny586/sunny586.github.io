import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {
      keepAlive: true
    }
  }, 
  {
    path: '/book/:articleId',
    name: 'book',
    component: () => import('@/views/book.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    component: () => import('@/views/404.vue'),
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/views/demo.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
