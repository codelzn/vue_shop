import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import TreeTable from 'vue-table-with-tree-grid'

// 导入字体图标
import './assets/fonts/iconfont.css'

// 导入全局样式表
import './assets/css/global.css'

// 导入axios
import axios from 'axios'

// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css'
Vue.component('tree-table', TreeTable)
// 配置请求根路径
axios.defaults.baseURL = 'http://112.124.12.46/api/private/v1/'
// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

Vue.config.productionTip = false

// 全局时间过滤器
Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, 0)
  const hh = (dt.getHours() + '').padStart(2, 0)
  const mm = (dt.getMinutes() + '').padStart(2, 0)
  const ss = (dt.getSeconds() + '').padStart(2, 0)
  return `${y}-${m}-${d}-${hh}-${mm}-${ss}`
}) // for bubble theme

Vue.use(VueQuillEditor /* { default global options } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
