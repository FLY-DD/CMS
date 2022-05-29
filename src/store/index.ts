import { createStore, useStore as userVuexStore } from 'vuex'
import type { Store } from 'vuex'
import type { iRootState, iStoreLogin } from './type'
import login from './login'
const store = createStore<iRootState>({
  state: () => ({
    name: 'lsc',
    age: 18
  }),
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    login
  }
})
export function useStore(): Store<iStoreLogin> {
  return userVuexStore()
}
export function loadLocalCache() {
  store.dispatch('login/loadLocalData')
}
export default store
