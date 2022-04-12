/* 这个 layout
  M |-----------
  E |
  N |  Content
  U |
*/
import React from 'react'

import Menu from './menus'
import { Layout } from 'antd'
const MainPage: React.FC = ({ children }) => {
  return (<>
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <Menu />
      <Layout className="site-layout">
        <Layout.Content style={{ margin: '16px 16px',overflow:'auto' }}>{children}</Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>
          Vite-React-TypeScript-template ©2022 <span>|</span> Created by Fall
        </Layout.Footer>
      </Layout>
    </Layout>
  </>)
}
export default MainPage
