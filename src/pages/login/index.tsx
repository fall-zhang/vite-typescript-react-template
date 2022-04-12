import React from 'react'
import { useLocalStorageState } from 'ahooks'
import LoginCard from './components/LoginCard'
import styles from './index.module.less'
import classNames from 'classnames'

const LoginPage: React.FC = () => {
  const [loginWay, setLoginWay] = useLocalStorageState('login__Login__way', '测试系统用户')

  function updateWay(name: string) {
    setLoginWay(name)
  }

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
