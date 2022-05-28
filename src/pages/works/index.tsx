import React from 'react'
import { Tabs } from 'antd'
import PictureBigger from './list/PictureBigger'
const { TabPane } = Tabs
const WorkPage: React.FC = () => {
  function onChange(str: string) {
    console.log(str)
  }
  return (
    <div>
      <Tabs defaultActiveKey="1" centered onChange={onChange}>
        <TabPane tab="图片放大" key="1">
          <PictureBigger />
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  )
}
export default WorkPage