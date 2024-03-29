import axios from 'axios'
import qs from 'qs'
import { Message, MessageBox } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (config.url.substring(0, 5) === '/mock') {   // 专为本地mock请求设置content-type
      config.headers['content-type'] = 'application/json; charset = utf-8';

    } else {   // 真实请求设置content-type
      if (!config.headers['content-type']) {   // 默认传参方式
        config.headers['content-type'] = 'application/x-www-form-urlencoded';
      } else {
        config.headers['content-type'] = config.headers['content-type']
      }
    }

    // content-type 为 application/x-www-form-urlencoded时对data的修改
    if (config.headers['content-type'] === 'application/x-www-form-urlencoded') {
      config.data = qs.stringify(config.data);
    }

    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    if ('code' in response) {
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
      } else if (res.code !== '200') {    // 返回状态非200,提示报错！
        Message({
          message: res.message,
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject('error')
      } else {                           // 成功返回数据
        return response.data
      }
    } else {    // 如果code不存在，则统一默认为成功
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
