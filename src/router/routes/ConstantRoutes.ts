import React from 'react'

import BlankPage from '@/layouts/menus'

// 实现解析当前路由
import type { RouteParam } from '../route'
const asyncLoad = (str: string) => React.lazy(() => import(str))
const constantRoute: RouteParam[] = [
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
  {
    exact: true,
    path: '/home',
    component: asyncLoad('@/pages/login'),
    meta: { title: '菜单名称', hidden: true, auth: 'menu' },
    children: [
      {
        exact: true,
        path: '/home',
        component: asyncLoad('@/pages/login'),
        meta: { title: '菜单名称', hidden: true, auth: 'menu' },
      }
    ]
  },
]
export default constantRoute