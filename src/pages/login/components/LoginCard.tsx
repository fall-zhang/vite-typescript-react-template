import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { loginApp } from '@/core/auth'
import styles from './LoginCard.module.less'
import type { ILoginParams } from './LoginMessage'

/**
 * 登录界面中间的Card
 */
const LoginInputZone: React.FC<ILoginParams> = ({ updateWay }) => {
  const history = useHistory()

  function handleFinish() {
    loginApp({ userName: 'why', pwd: '123' }).then((res) => {
      if (res.code === 200) {
        sessionStorage.setItem('token', '我有权限了')
        history.push('/home')
      } else {
        message.error('用户名或密码错误！')
      }
    })
  }

  function handleClick() {
    updateWay('message')
  }

  return (
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.header}>
          <div className={styles.loginTitle}>登陆</div>
          <div
            onClick={handleClick}
            className={styles.changeWay}
            style={{ width: 99, textAlign: 'right' }}
          >
            验证码登陆
          </div>
        </div>
        <Form onFinish={handleFinish}>
          <Form.Item
            name="user_info"
            rules={[{ required: true, message: '用户名/手机号/邮箱不能为空' }]}
          >
            <Input
              className={styles.input}
              placeholder={'开启json-server后填写即可'}
              maxLength={128}
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="user_check"
            rules={[{ required: true, message: '密码不能为空' }]}
          >
            <Input
              className={styles.input}
              type="password"
              placeholder="密码"
              maxLength={128}
              size="large"
            />
          </Form.Item>
          <div className={styles.toolBox}>
            <Link
              to="/forget-password"
              style={{ width: 105, textAlign: 'right' }}
            >
              忘记密码
            </Link>
          </div>
          <Button
            className={styles.loginButton}
            type="primary"
            htmlType="submit"
            size="large"
            block
          >
            登陆
          </Button>
          <div className={styles.register}>
            <Link to="/register">注册</Link>
          </div>
        </Form>
      </div>
      <div className={styles.right}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoginInputZone
