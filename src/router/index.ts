import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import storge from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
//路由拦截器 对去往非登录页的进行拦截 判断有无token
router.beforeEach((to) => {
  const token = storge.getCache('token')
  if (to.path !== '/login') {
    if (!token) {
      return '/login'
    }
  }
})
export default router
