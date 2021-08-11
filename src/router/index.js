import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',         //这个是为了方便查看,开发请自行修改
      name:'Test', 
      component:()=>import('../view/test/index.vue')
    }
  ]
})
