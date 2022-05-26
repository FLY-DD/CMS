import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink
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
  ElLink
]

function registerEle(app: App) {
  eleArry.forEach((item) => app.component(item.name, item))
}

export const mountElePlus = {
  install: registerEle
}
