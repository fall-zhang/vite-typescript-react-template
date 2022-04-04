import React from "react"
import styles from "./index.module.less"
import { Tooltip } from "antd"
// import { $http } from "@/utils/reuqest"

const DocPage: React.FC = ({ children }) => {
  function onClick() {
    window.open('')
  }
  return (
    <div>
      <Tooltip placement="top" color={"plum"} title={"fellow me"}>
        <div className={styles.doc}>
          {children}
          <a href="#" >
            <div onClick={()=>{window.open('https://juejin.cn/user/1565342280463325')}}>掘金</div>
          </a>
          <a href="#">
            <div onClick={()=>{window.open('https://github.com/Fall-zhang')}}>Github</div>
          </a>
          <a href="#">
            <div onClick={()=>{window.open('https://segmentfault.com/u/fall_zhang0')}}>思否</div>
          </a>
        </div>
      </Tooltip>
    </div>
  )
}

export default DocPage
