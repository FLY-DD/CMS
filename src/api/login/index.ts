import { newRequest } from '@/service'
import type { loginMsg } from './type'
import { LoginApi, loginData, resData } from './type'

export function signIn(loginData: loginMsg) {
  return newRequest.post<resData<loginData>>({
    url: LoginApi.AccountLogin,
    data: loginData
  })
}

export function getUserInfoById(id: number) {
  return newRequest.get<resData<any>>({
    url: LoginApi.UserInfo + id
  })
}

export function getUserMenuByRoleId(id: number) {
  return newRequest.get<resData<any>>({
    url: LoginApi.UserMenu + id + '/menu'
  })
}
