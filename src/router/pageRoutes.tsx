import React from 'react'
import {
  GithubOutlined,
  CreditCardOutlined,
  DesktopOutlined,
  PieChartOutlined
} from '@ant-design/icons'
// import BlankRoute from 'BlankPage'
// 实现解析当前路由
// const MySuspense = (path: string) => {
//   const Child = React.lazy(() => import(path))
//   return <React.Suspense fallback={<></>}>
//     <Child></Child>
//   </React.Suspense>
// }

import type { RouteParam } from './route'
const pageRoutes: RouteParam[] = [
  {
    path: '/icon',
    element: React.lazy(() => import('@/pages/icon/index')),
    meta: { title: 'Icon选择', icon: <DesktopOutlined></DesktopOutlined> }
  },
  {
    path: '/contact',
    element: React.lazy(() => import('@/pages/contact/index')),
    meta: { title: '联系方式', icon: <GithubOutlined></GithubOutlined> }
  }
]
export default pageRoutes