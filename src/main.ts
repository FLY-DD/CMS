import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import { mountElePlus } from '@/global'
import { loadLocalCache } from '@/store'

import './service'
import 'normalize.css'
import '@/assets/css/index.less'
import 'element-plus/lib/theme-chalk/base.css'

const appInstance = createApp(App)
appInstance.use(store)
loadLocalCache() //这里的执行顺序 是先将路由注册进去 在执行挂载的操作(loadLocalCache是将userMenu重新数据重新铺入，会影响后续router的跳转)
appInstance.use(router)
appInstance.use(mountElePlus)
appInstance.mount('#app')
