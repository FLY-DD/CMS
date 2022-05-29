import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElAside,
  ElContainer,
  ElMain,
  ElHeader,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem
} from 'element-plus'
import type { App } from 'vue'
const eleArry = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink,
  ElAside,
  ElContainer,
  ElMain,
  ElHeader,
  ElMenu,
  ElSubmenu,
  ElMenuItemGroup,
  ElMenuItem
]

function registerEle(app: App) {
  eleArry.forEach((item) => app.component(item.name, item))
}

export const mountElePlus = {
  install: registerEle
}
