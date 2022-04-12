import React, { useState } from 'react'
import { useLocalStorageState } from 'ahooks'
import LoginCard from './components/LoginCard'
import styles from './index.module.less'
import classNames from 'classnames'

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
    <div className={classNames(styles.loginContainer)}>
      <div className={classNames(styles['block1'], styles.trangle)} />
      <div className={classNames(styles.loginLogo, styles['rotate-60'])} />
      <div className={classNames(styles.loginLogo, styles['rotate-60'])} />
      {/* <div className={styles.loginForm}> */}
      <LoginCard updateWay={updateWay} />
      {/* </div> */}
    </div>
  )
}

export default LoginPage
