import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    let authorization = window.localStorage.getItem('token');
    authorization = authorization ?　authorization　: '';
    config.headers['Authorization'] = authorization
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    console.log(response)
    if('code' in response){
      const res = response.data
      if (res.code == '50014') {          //如果code存在，则根据后端返回的不同特别状态码，进行相应操作，eg: 50014:Token 过期了;
        MessageBox.confirm(
          'token已过期,请重新登录！',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          sessionStorage.clear()
          localStorage.clear()
        })
      }else if (res.code !== '200') {    // 返回状态非200,提示报错！
        Message({
          message: res.message,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject('error')
      } else {                           // 成功返回数据
        return response.data
      }
    }else{    // 如果code不存在，则统一默认为成功
      return response.data
    }  
  },
  error => {       
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
