import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import style from './index.module.css'
import 'antd/dist/antd.less'
import RouterPage from './router'
import { LocaleProvider } from './core/locales'
ReactDOM.render(
  <React.StrictMode>
    <div className={style.App}>
      <header className={style.AppHeader}>
        <LocaleProvider>
          <RouterPage />
        </LocaleProvider>
      </header>
    </div>
  </React.StrictMode>,
  document.getElementById('root') as ReactDOM.Container
)