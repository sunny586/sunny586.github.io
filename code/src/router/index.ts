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
    path: '/article/:articleId',
    name: 'article_detail',
    component: () => import('@/views/detail.vue'),
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
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
