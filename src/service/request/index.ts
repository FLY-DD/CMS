import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { newConfig } from './type'
import { ElLoading } from 'element-plus'
import 'element-plus/lib/theme-chalk/el-loading.css'

export class commonRequest {
  instance: AxiosInstance
  loading: any
  showLoading?: boolean
  constructor(config: newConfig) {
    this.instance = axios.create(config)
    this.loading = config.showLoading || true
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccess,
      config.interceptors?.requestFailed
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccess,
      config.interceptors?.responseFailed
    )
    //被加入到实例队列中，但是是在方法请求之后执行的。所以回头会查找全局变量(就是执行顺序的体现)
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading !== false) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在加载中......',
            background: 'rgba(0,0,0,.5)'
          })
        } else {
          this.loading = null
        }
        return config
      },
      (err) => {
        console.log('每个实例都有的请求失败拦截', err)
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        this.loading?.close()
        const data = config.data
        if (data.returnCode === '-1001') {
          console.log('请求失败')
        } else {
          return data
        }
      },
      (err) => {
        console.log('每个实例都有的响应失败拦截', err)
      }
    )
  }
  //请求中的拦截器实际是对config数据，使用函数做处理，不算真正意义上的拦截
  requset<T>(config: newConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.showLoading === false) this.showLoading = config.showLoading
      if (config.interceptors?.requestSuccess) {
        config = config.interceptors.requestSuccess(config)
      }
      this.instance.request<any, T>(config).then(
        (res) => {
          if (config.interceptors?.responseSuccess) {
            res = config.interceptors.responseSuccess(res)
          }
          this.showLoading = true
          resolve(res)
        },
        (err) => {
          reject(err)
          this.showLoading = true
          console.log('失败的结果', err)
        }
      )
    })
  }
}
//TS 什么时候定义类型  在函数声明的时候 类型多出来的时候可以对参数进行扩展。当执行方法为非自定义方法时，不用考虑参数的类型
