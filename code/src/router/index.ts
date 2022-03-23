import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/search.vue')
  },
  {
    path: '/article/:articleId/',
    name: 'article_detail',
    component: () => import('@/views/detail.vue')
  },
  {
    path: '/404',
    name: "NotFound",
    component: () => import('@/views/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    component: () => import('@/views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
