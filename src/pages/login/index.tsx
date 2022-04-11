import React, { useState, useEffect } from 'react'
import { useLocalStorageState } from 'ahooks'
import LoginInputZone from './components/LoginInputZone'
import styles from './index.module.less'

const LoginPage: React.FC = () => {
  const [loginWay, setLoginWay] = useLocalStorageState('login__Login__way', '')
  const [way, setWay] = useState<string>(loginWay)

  /**
   * 更新登录方式
   * @param name
   */
  function updateWay(name: string) {
    setWay(name)
    setLoginWay(name)
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginLogo} />
      <div className={styles.loginForm}>
        <LoginInputZone updateWay={updateWay} />
      </div>
    </div>
  )
}

export default LoginPage
