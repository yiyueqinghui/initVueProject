const totalCount = 3
const List = [
  {
    id: '@id',
    username: 'admin',
    password: 'admin',
    email: '@email',
    permissions: ['admin'],
    datatime: '@datetime',
  },
  {
    id: '@id',
    username: 'editor',
    password: 'editor',
    email: '@email',
    permissions: ['editor'],
    datatime: '@datetime',
  },
  {
    id: '@id',
    username: 'test',
    password: 'test',
    email: '@email',
    permissions: ['admin', 'editor'],
    datatime: '@datetime',
  },
]
// 模拟的请求，地址请以mock开头
module.exports = [
  {
    url: '/mock/userManagement/getList',
    type: 'get',
    response(config) {
      const { pageNo = 1, pageSize = 20 } = config.body
      const pageList = List.filter(
        (item, index) =>
          index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
      )
      return {
        code: 200,
        msg: 'success',
        totalCount,
        data: pageList,
      }
    },
  },
  {
    url: '/mock/userManagement/doEdit',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟保存成功',
      }
    },
  },
  {
    url: '/userManagement/doDelete',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: '模拟删除成功',
      }
    },
  },
]
