import Vue from 'vue'
import App from './App'
import router from './router'

import 'babel-polyfill'      //兼容ie9处理
import 'es6-promise/auto'

import '../static/css/common.css';   //全局样式

import common from './utils/common.js'   //全局公用的方法
Vue.prototype.$common = common

import Store from './store'  // 全局状态管理
Vue.prototype.$Store = Store

import ElementUI from 'element-ui';   //引入element-ui
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import globalComp from "./components/globalComp/index.js";   //引入封装的全局通用组件库
Vue.use(globalComp);

import * as filter from './filter'      // 全局filter
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,   // 路由配制
  components: { App },
  template: '<App/>'
})
