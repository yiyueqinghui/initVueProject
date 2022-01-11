import router from './router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { getToken } from "@/utils/auth";

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  NProgress.start()
  var token = getToken(); 
  // 如果有token 
  if (token){
    if (to.path == '/login') {
      next()
      NProgress.done()
    }else{
      next()
    }
  }else {
    // 如果没有token  
    if ( to.meta.requireAuth ) {     //否则全部重定向到登录页
      next(`/login?redirect=${to.path}`) 
      NProgress.done()
    } else {        // 在免登录白名单，直接进入
      next()
    }
  }
  document.querySelector('title').innerText = to.meta.title; 
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

export default router
