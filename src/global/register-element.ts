import { App } from 'vue'
import 'element-plus/dist/index.css'

import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput
} from 'element-plus/lib'

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
