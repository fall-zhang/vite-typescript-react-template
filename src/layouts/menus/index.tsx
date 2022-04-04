import React, { useState } from "react"
import styles from "./index.module.less"
import { Layout, Menu, Tooltip } from "antd"
import { Link, useLocation, } from "react-router-dom"
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons"
import { formatMessage } from "@/core/locales"

const { Sider } = Layout
const HomePage: React.FC = ({ children }) => {
  // 收缩侧边栏
  const message = formatMessage({ id: "frontEnd" })
  const [collapsed, setCollapsed] = useState<boolean>(false)
  return (
    <Layout style={{ minHeight: "100vh", width: "100%" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(isOpen) => setCollapsed(isOpen)}
      >
        <Tooltip placement="right" title={message}>
          <div className={styles.title}>{message}</div>
        </Tooltip>
        <Menu
          theme="dark"
          defaultSelectedKeys={[`${useLocation().pathname}`]}
          mode="inline"
        >
          <Menu.Item key="/doc" icon={<PieChartOutlined />}>
            <Link to={"/doc"}>文档</Link>
          </Menu.Item>
          <Menu.Item key="/icon" icon={<PieChartOutlined />}>
            <Link to={"/icon"}>图标</Link>
          </Menu.Item>
          <Menu.Item key="/auth" icon={<PieChartOutlined />}>
            <Link to={"/auth"}>权限</Link>
          </Menu.Item>
          <Menu.SubMenu key="sub2" icon={<DesktopOutlined />} title="组件">
            <Menu.Item key="/custom">
              <Link to={"/custom"}>远程搜索框</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="/locale" icon={<FileOutlined />}>
            <Link to={"/locale"}> 国际化搭建</Link>
          </Menu.Item>
          <Menu.SubMenu key="/table" icon={<DesktopOutlined />} title="表格">
            <Menu.Item key="/table/base">
              <Link to={"/table/base"}>基础表格</Link>
            </Menu.Item>{" "}
            <Menu.Item key="/table/drag">
              <Link to={"/table/drag"}>拖拽表格</Link>
            </Menu.Item>{" "}
            <Menu.Item key="/table/edit">
              <Link to={"/table/edit"}>编辑表格</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
    </Layout>
  )
}

export default HomePage
