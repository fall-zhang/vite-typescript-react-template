import React from 'react'
import { Popover } from 'antd'
import { PopoverProps } from 'antd/es/popover'
import styles from './PopoverMenu.module.less'

interface PopoverMenuProps
  extends Omit<PopoverProps, 'overlayClassName' | 'overlay'> {
  zIndex?: number;
  content: React.ReactNode;
}

/**
 * menu 负责展示
 */
function PopoverMenu({ zIndex, content, ...props }: PopoverMenuProps) {
  const [canRender] = React.useState(true)
  if (!canRender) {
    return null
  }
  return (
    <Popover
      getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
      overlayClassName={styles.menuContent}
      overlayStyle={{ zIndex }}
      {...props}
      content={<ul className={styles.menuList}>{content}</ul>}
    />
  )
}

export default PopoverMenu
