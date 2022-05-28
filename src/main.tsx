import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
import App from './pages/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as ReactDOM.Container
)