import type { Module } from 'vuex'
import type { iloginState } from './type'
import type { iRootState } from '../type'

import storge from '@/utils/cache'

import { signIn, getUserInfoById, getUserMenuByRoleId } from '@/api/login'

import router from '@/router'

const loginInfo: Module<iloginState, iRootState> = {
  namespaced: true,
  state: () => {
    return {
      name: 'lsc',
      age: 18,
      token: '',
      userInfo: null,
      userMenu: null
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, data: any) {
      state.userInfo = data
    },
    changeUserMenu(state, data: any) {
      state.userMenu = data
    }
  },
  actions: {
    //1 获取token并保存
    async loginAction({ commit }, playod) {
      const loginResult = await signIn(playod)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      storge.setCache('token', token)
      //2 获取用户数据并保存
      const userData = await getUserInfoById(id)
      commit('changeUserInfo', userData.data)
      storge.setCache('userInfo', userData.data)
      //3 获取用户菜单列表
      const userMenuData = await getUserMenuByRoleId(id)
      commit('changeUserMenu', userMenuData.data)
      storge.setCache('userMenu', userMenuData.data)
      //4 跳转到首页
      router.push('/main')
    },
    //此步是刷新页面时 重新将数据填入vuex中
    loadLocalData({ commit }) {
      const token = storge.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = storge.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenu = storge.getCache('userMenu')
      if (userMenu) {
        commit('changeUserMenu', userMenu)
      }
    }
  }
}

export default loginInfo
