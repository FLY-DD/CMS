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
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
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
