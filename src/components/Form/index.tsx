import React from 'react'
import { Form } from 'antd'
import type { FormItem as ItemType } from './FormType'
import { FormItem } from './FormItem'

// function Right(){

// }

const FormGroup: React.FC<{ formField: ItemType[], FormValue: Record<string, any> }> = ({ children, formField, FormValue, ...props }) => {
  return (
    <Form labelCol={{ span: 6 }} wrapperCol={{ span: 16 }} >
      {
        formField.map(item => {
          return (
            <FormItem formItem={item} key={item.name}>
              {/* {item.children} */}
            </FormItem>
          )
        })
      }
      {children}
    </Form >
  )
}

export default FormGroup