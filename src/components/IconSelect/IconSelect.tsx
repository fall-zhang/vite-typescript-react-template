import React from 'react'
import { Input } from 'antd'
import classNames from 'classnames'
import { InputProps } from 'antd/es/input'
import Icon from '../Icon'
import PopoverMenu from '@/components/PopoverMenu'
import styles from './IconSelect.module.less'
const iconList = [
  'bookbianji',
  'bookbianji1',
  'bookbianji3',
  'bookbianji4',
  'bookdibu',
  'bookdingbu',
  'bookdibu1',
  'bookfanhuidingbu',
  'bookhuidingbu',
]
// 利用 Omit 先忽略 InputProps 接口中的 value, onChange, readOnly 属性，再添加所需的类型
interface IconSelectProps
  extends Omit<InputProps, 'value' | 'onChange' | 'readOnly'> {
  // 受控属性
  value?: string;
  // 受控属性
  onChange?: (value: string) => void;
  // 容器位置
  getPopupContainer?: (props: any) => HTMLElement;
}

/**
 * 图标选择表单
 */
function IconSelect({
  value,
  onChange,
  disabled,
  getPopupContainer,
  ...props
}: IconSelectProps) {
  const [visible, setVisible] = React.useState(false)

  function handleSelectIcon(item: string) {
    if (onChange) {
      onChange(item)
    }
    setVisible(false)
  }

  return (
    <PopoverMenu
      trigger={['click']}
      visible={visible}
      onVisibleChange={!disabled ? setVisible : undefined}
      placement="bottomLeft"
      getPopupContainer={getPopupContainer}
      content={
        <div className={styles.selectWrap}>
          {iconList.map((item) => (
            <Icon
              key={item}
              className={classNames(styles.iconItem, {
                [styles.active]: value === item,
              })}
              type={item}
              onClick={() => handleSelectIcon(item)}
            />
          ))}
        </div>
      }
    >
      <Input
        placeholder={value ? undefined : '请选择'}
        suffix={<Icon className={styles.filterIcon} type="bookhuidibu" />}
        prefix={
          value && <Icon className={styles.iconValue} type={value} />
        }
        disabled={disabled}
        readOnly
        {...props}
      />
    </PopoverMenu>
  )
}

export default IconSelect
