import React from 'react'
import LoginCard from './LoginCard'
import styles from './index.module.less'
import classNames from 'classnames'
import { setLoginWay } from '@/core/auth'
const LoginPage: React.FC = () => {
  function updateWay(name: string) {
    setLoginWay(name)
  }
  // const []
  return (
    <>
      {/* <div className={styles.background}>
        <div className={classNames(styles.trangle2, styles['block1'])} />
        <div className={classNames(styles.halfCircle, styles['block2'])} />
        <div className={classNames(styles.quarterCricle, styles['block3'])} />
      </div> */}
      <div className={classNames(styles.loginContainer)}>
        <LoginCard updateWay={updateWay} />
      </div>
    </>
  )
}

export default LoginPage
