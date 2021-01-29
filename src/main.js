import Vue from 'vue'
import App from './App'
import router from './router'

import 'babel-polyfill'      //兼容ie9处理
import 'es6-promise/auto'

import common from './utils/common.js'
Vue.prototype.common = common

import Store from './store/store'
Vue.prototype.$Store = Store

import ElementUI from 'element-ui';   //引入element-ui
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
