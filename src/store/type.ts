import { loginData } from './../api/login/type'
import { iloginState } from './login/type'
export interface iRootState {
  name: string
  age: number
}
interface ilogin {
  login: iloginState
}

export type iStoreLogin = iRootState & ilogin
