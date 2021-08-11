import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/test',
      name:'test',
      component:resolve => require(['../view/test/index.vue'], resolve)   
    }
  ]
})
