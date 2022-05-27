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
appInstance.use(router)
appInstance.use(mountElePlus)
appInstance.use(store)
loadLocalCache()
appInstance.mount('#app')
