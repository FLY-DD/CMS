import type { Module } from 'vuex'
import type { iloginState } from './type'
import type { iRootState } from '../type'

const loginInfo: Module<iloginState, iRootState> = {
  namespaced: true,
  state: () => {
    return {
      name: 'lsc',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {
    loginAction({ commit }, playod) {
      console.log(playod)
    }
  }
}

export default loginInfo
