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
  ElMenuItem,
  ElAvatar,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu
} from 'element-plus'
import _Avatar from 'element-plus/lib/el-avatar'
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
  ElMenuItem,
  ElAvatar,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu
]

function registerEle(app: App) {
  eleArry.forEach((item) => app.component(item.name, item))
}

export const mountElePlus = {
  install: registerEle
}
