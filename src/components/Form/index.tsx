import React from 'react'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd'
import type {FormItem} from './FormIdentify'

// function Right(){

// }

const FormGroup: React.FC<{formField:FormItem[],FormValue:Record<string,any>}> = ({ children,formField,FormValue ,...props }) => {
  return (
    <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} >
      {
        formField.map(item=>{
          return(
            <Form.Item label={item.name} key={item.name} name={item.name}>

            </Form.Item>
          )
        })
      }
      <Form.Item label="用户名称" name='user'>
        <Input></Input>
      </Form.Item>
      {children}
    </Form >
  )
}

export default FormGroup