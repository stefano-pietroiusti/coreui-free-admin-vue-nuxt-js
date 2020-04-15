import Vue from 'vue'
import { iconsSet } from 'assets/icons/icons'
import { CIcon } from '@coreui/icons-vue'

Vue.component('c-icon', CIcon)

export default ({ app }) => {
  app.icons = iconsSet
}
