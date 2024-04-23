import React from 'react'
import {
  GithubOutlined,
  DesktopOutlined
} from '@ant-design/icons'
const pageRoutes = [
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
