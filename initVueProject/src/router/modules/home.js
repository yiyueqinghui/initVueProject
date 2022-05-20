// 首页导航
export default [
    {
        path: '/',         //这个是为了方便查看,开发请自行修改
        name: 'Test',
        meta: {
            title: '首页',
            requireAuth: false     // true，表示需要登录才可访问
        },
        component: () => import('../../view/test/index.vue')
    },
]