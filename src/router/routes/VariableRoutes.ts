import React from 'react'

import LoginPage from '@/pages/login'
import DocPage from '@/pages/contact'
import PublicPage from '@/pages/publicComponents'
import CustomPage from '@/pages/testPlugin'
import LocalePage from '@/pages/locales'
import IconPage from '@/pages/icon'
import TableList from '@/pages/table'
import TableEdit from '@/pages/table/edit'
import TableDrag from '@/pages/table/drag'
import PrivateRoute from '../components/PrivateRouter'
import { RouteParam } from '../route'

const asyncLoad = (str: string) => React.lazy(() => import(str))
const variableRoute: RouteParam[] = [
  {
    exact: true,
    path: '/login',
    component: asyncLoad('@/pages/login'),
    meta: { title: '菜单名称', hidden: true, auth: 'menu' }
  },
  {
    exact: true,
    path: '/home',
    component: asyncLoad('@/pages/login'),
    meta: { title: '菜单名称', hidden: true, auth: 'menu' }
  },
]
export default variableRoute