import React from 'react'
import { Button } from 'antd'
import styles from './index.module.less'
import { AuthContainer } from '@/core/auth'

const AuthPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignContent: 'center', }}>
      <div className={styles.noAuth}>
        <span>使用权限组件包裹</span>
        <AuthContainer token='addAuth'>
          <Button >Hello world</Button>
        </AuthContainer>
      </div>
      <div className={styles.hasAuth}>
        <div>不使用权限组件包裹</div>
        <Button>button1</Button>
        <Button>button2</Button>
      </div>
    </div>
  )
}

export default AuthPage
