import request from '@/utils/request'

// 分页查询
export const getTopicsList = data => {
  return request({
    url: '/topics',
    method: 'get',
    data
  })
}