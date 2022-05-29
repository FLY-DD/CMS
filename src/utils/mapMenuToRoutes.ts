import { commonRequest } from './../service/request/index'
import { resData } from './../api/login/type'
import type { RouteRecordRaw } from 'vue-router'

export function mapMenuToRouter(userMenu: any): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  const allRoutes: RouteRecordRaw[] = []
  const routerFile = require.context('../router/main', true, /\.ts$/) //require.content此方法可以拿到某个文件夹下的某类文件的路径，通过key()方法生成包含路径的数组
  routerFile.keys().forEach((item) => {
    const pathResult = require('../router/main' + item.split('.')[1]) //require可以通过路径将某个模块导入 通过defalult的方法拿到具体路径
    const routesModule = pathResult.default
    allRoutes.push(routesModule)
  })
  function generateRoutes(userMenu: any[]) {
    userMenu.forEach((item: any) => {
      if (item.type === 2) {
        const res = allRoutes.find((res) => item.url === res.path)
        if (res) routes.push(res)
      } else {
        generateRoutes(item.children)
      }
    })
  }
  generateRoutes(userMenu)
  return routes
}
