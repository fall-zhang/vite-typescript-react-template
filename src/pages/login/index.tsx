import React from 'react'
import LoginCard from './LoginCard'
import classNames from 'classnames'
import { setLoginWay } from '@/core/auth'
import styles from './index.module.less'

// const LoginCard = _lazyLoad(()=>import('./LoginCard'))
const LoginPage: React.FC = () => {
  function updateWay(name: string) {
    setLoginWay(name)
  }
  return (
    <>
      <div className={classNames(styles.loginContainer)}>
        <LoginCard updateWay={updateWay} />
      </div>
    </>
  )
}

export default LoginPage
