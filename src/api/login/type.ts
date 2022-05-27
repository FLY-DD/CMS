export interface loginMsg {
  name: string
  password: string
}

export enum LoginApi {
  AccountLogin = 'login',
  UserInfo = '/users/',
  UserMenu = '/role/'
}

export interface loginData {
  id: number
  token: string
}

export interface resData<T = any> {
  code: number
  data: loginData
}
