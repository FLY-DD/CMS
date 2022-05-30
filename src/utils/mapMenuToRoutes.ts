import { commonRequest } from './../service/request/index'
import { resData } from './../api/login/type'
import user from '@/router/main/system/user/user'

import type { RouteRecordRaw } from 'vue-router'
import type { iBreadcrumbData } from '@/base-ui/breadcrumb'
//路由跳转到main页的逻辑 总默认跳转到第一个菜单下的第二级选项(所以需要对第一个菜单进行保留)
let firstMenu: any = null
//获取需要动态添加的路由对象
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
        if (!firstMenu) firstMenu = item //取首位值的技巧
      } else {
        generateRoutes(item.children)
      }
    })
  }
  generateRoutes(userMenu)

  return routes
}
//foreach的返回值 始终为undefied 所以使用递归函数 使用到返回值不能使用foreach遍历
//该函数作用查找当前路由路径所在的userMenu的对象
export function getBreadcrumbData(userMenu: any[], currentPath: string) {
  const breadcrumbData: iBreadcrumbData[] = []
  getMenuItem(userMenu, currentPath, breadcrumbData)
  return breadcrumbData
}
//获取当前路由路径在userMenu的对象，来决定菜单项目的展开。
//因 ==> 果 决定此函数在那执行。果：菜单展开项，所以函数会在此执行，因==>路由的变化
export function getMenuItem(
  userMenu: any[],
  currentPath: string,
  breadcrumbData?: iBreadcrumbData[]
): any {
  for (const menu of userMenu) {
    if (menu.type === 1) {
      const res = getMenuItem(menu.children ?? [], currentPath)
      if (res) {
        //获取面包屑的值
        breadcrumbData?.push({ name: menu.name, path: menu.url })
        breadcrumbData?.push({ name: res.name, path: res.url })
        return res
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}
//函数内执行产生连结的函数脱离当前函数执行，如何 1 利用返回值 2 利用全局变量
export { firstMenu }
