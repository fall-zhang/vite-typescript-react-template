import React from "react"
import styles from "./index.module.less"
import { Tooltip } from "antd"
import { $http } from "@/utils/reuqest"

const DocPage: React.FC = ({ children }) => {
  function onClick() {
    $http.post('/auth')
  }
  return (
    <div>
      <Tooltip placement="top" color={"plum"} title={"fellow me"}>
        <div className={styles.doc}>
          {children}
          <a href="https://juejin.cn/post/6956112714779328519">
            <div>掘金</div>
          </a>
          <a href="https://github.com/Fall-zhang">
            <div>Github</div>
          </a>
          <a href="https://segmentfault.com/u/fall_zhang0">
            <div>思否</div>
          </a>
        </div>
      </Tooltip>
    </div>
  )
}

export default DocPage
