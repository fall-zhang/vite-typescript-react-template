import React from "react"
import "antd/dist/antd.less"
import style from "./App.module.less"
import RouterPage from "./router"
import { LocaleProvider } from "./components/locales"

/**
 * 入口
 * @constructor
 */
const App: React.FC = function () {
  return (
    <div className={style.App}>
      {/* <header className={style.AppHeader}> */}
      <LocaleProvider>
        <RouterPage />
      </LocaleProvider>
      {/* </header> */}
    </div>
  )
}

export default App
