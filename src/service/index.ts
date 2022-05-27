import { commonRequest } from './request'
import { BASE_URL } from './request/config'
import storge from '@/utils/cache'
import type { newConfig } from './request/type'

export const newRequest = new commonRequest({
  baseURL: BASE_URL,
  timeout: 10000,
  interceptors: {
    requestSuccess: (config: newConfig) => {
      const token = storge.getCache('token') ?? ''
      if (token) config.headers.Authorization = `Bearer ${token}`
      return config
    },
    requestFailed: (err) => {},
    responseSuccess: (config) => {
      return config
    },
    responseFailed: (err) => {}
  }
})
// interface dataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
// newRequest
//   .requset<dataType>({
//     method: 'GET',
//     url: '/home/multidata',
//     interceptors: {
//       requestSuccess: (config) => {
//         return config
//       }
//     },
//     showLoading: false
//   })
//   .then((res) => {})
