import HomePage from '@/layouts/menus'
import { lazy as _lazyLoad } from 'react'


// 实现解析当前路由

export default {
  routes: [
    {
      exact: true,
      path: '/',
      component: _lazyLoad(() => import('@/pages/contact')),
      meta: { title: '菜单名称', hidden: true, auth: 'menu' }
    },
    { exact: true, path: '/home', component: HomePage },
  ],
}
