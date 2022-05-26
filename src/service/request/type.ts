import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface iinterceptor<T = AxiosResponse> {
  requestSuccess?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailed?: (err: any) => void
  responseSuccess?: (config: T) => T
  responseFailed?: (err: any) => void
}
export interface newConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: iinterceptor<T>
  showLoading?: boolean
}
