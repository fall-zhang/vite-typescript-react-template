import React from 'react'
import ReactDOM from 'react-dom'
import './index.module.css'
// import App from './App'
const App = React.lazy(()=>import('./App'))
// const Env = import.meta.env
// console.log(Env)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as ReactDOM.Container
)