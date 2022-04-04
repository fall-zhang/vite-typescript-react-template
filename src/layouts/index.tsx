import React from "react"
import { Layout} from "antd"

const MainPage:React.FC = ({children})=>{
  return <>
     <Layout className="site-layout">
        <Layout.Header className="site-layout-background" style={{ padding: 0 }} />
        <Layout.Content style={{ margin: "16px 16px" }}>{children}</Layout.Content>
        <Layout.Footer style={{ textAlign: "center" }}>
          Vite-React-TypeScript-template ©2022 Created by Fall
        </Layout.Footer>
      </Layout>
  </>
}

export default MainPage