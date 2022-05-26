import { createStore } from 'vuex'
import type { iRootState } from './type'
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
export default store
