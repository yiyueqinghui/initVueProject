import Vue from 'vue'
import Router from 'vue-router'
// 首页
import home from './modules/home.js'

Vue.use(Router)

export default new Router({
  routes: [
    ...home


  ]
})
