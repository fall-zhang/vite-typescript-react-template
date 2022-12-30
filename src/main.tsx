import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.module.css'
import style from './index.module.css'
import 'antd/dist/reset.css'
import RouterPage from './router'
// import { LocaleProvider } from './core/locales'
const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<React.StrictMode>
  <div className={style.App}>
    <RouterPage />
  </div>
</React.StrictMode>)
