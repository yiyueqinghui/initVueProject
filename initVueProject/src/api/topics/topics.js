import request from '@/utils/request'

// get请求---- 获取列表
export const getTopicsList = data => {
  return request({
    url: '/mock/userManagement/getList',
    method: 'get',
    data
  })
}

// post请求 --- 修改数据
export const postTopicsList = data => {
  return request({
    url: '/mock/userManagement/doEdit',
    method: 'post',
    data
  })
}