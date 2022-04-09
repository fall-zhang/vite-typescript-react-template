import HomePage from '@/layouts/menus'
import { lazy as _lazyLoad } from 'react'

import PublicPage from '@/pages/publicComponents'
import CustomPage from '@/pages/testPlugin'
import LocalePage from '@/pages/locales'
import IconPage from '@/pages/icon'
import TableList from '@/pages/table'
import TableEdit from '@/pages/table/edit'
import TableDrag from '@/pages/table/drag'
import PrivateRoute from './PrivateRouter'
import AuthPage from '@/pages/auth'
import type { RouteProps } from 'react-router'
// 实现解析当前路由

export default {
  routes: [
    { exact: true, path: '/', component: _lazyLoad(() => import('@/pages/contact')) },
    { exact: true, path: '/home', component: HomePage },
  ],
}
