import Vue from 'vue'
import App from './App'
import router from './router'

import 'babel-polyfill'      //兼容ie9处理
import 'es6-promise/auto'

import '../static/css/common.css';   //全局样式

import Store from './store'  // 全局状态管理
Vue.prototype.$Store = Store

import "./utils/element-ui.js"    // 按需引入element-ui

import globalComp from "./components/globalComp/index.js";   //引入封装的全局通用组件库
Vue.use(globalComp);

import '@/permission'       // 路由权限控制

import * as filter from './filter'      // 全局filter
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

console.log(process.env.NODE_ENV)
// 生产环境，运行mock, 开发环境在devServer中模拟请求
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('@/utils/mockXhr.js')
  mockXHR()
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,   // 路由配制
  components: { App },
  template: '<App/>'
})
