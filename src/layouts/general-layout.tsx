/* 这个 layout
  M |-----------
  E |
  N |  Content
  U |
*/
import React, { useState } from 'react'

import Menu from './menus'
import { Layout } from 'antd'
const { Sider, Content, Footer } = Layout
const MainPage: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  return (<>
    <Layout style={{ minHeight: '100vh', width: '100%' }}>
      <Sider
        collapsible
        theme='light'
        collapsed={collapsed}
        onCollapse={(isOpen) => setCollapsed(isOpen)}
      >
        <Menu />
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '16px 16px', overflow: 'auto' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Vite-React-TypeScript-template ©2022 <span>|</span> Created by Fall
        </Footer>
      </Layout>
    </Layout>
  </>)
}
export default MainPage
