import React from 'react'
import type { FormItem as FormType } from './FormType'
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
const FormItem: React.FC<{ formItem: FormType }> = ({ formItem, children, ...porps }) => {
  function onSelectChange(value:any) {
    console.log(value)
  }
  if (formItem.formType === 'input') {
    return (
      <Form.Item label={formItem.label} name={formItem.name}>
        <Input></Input>
      </Form.Item>
    )
  } else if (formItem.formType === 'slot') {
    return (
      <Form.Item label={formItem.label} name={formItem.name}>
        {children}
      </Form.Item>
    )
  } else if (formItem.formType === 'select') {
    return (

      <Form.Item label={formItem.label} name={formItem.name}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={(ev) => onSelectChange(ev)}
          allowClear
        >
          {
            // formItem.childern
          }
          <Select.Option value="male">male</Select.Option>
        </Select>
      </Form.Item>
    )
  }
  return (
    <div>

    </div>
  )
}

export {
  FormItem
}