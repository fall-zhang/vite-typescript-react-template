import React from 'react'
import { Popover } from 'antd'
import classNames from 'classnames'
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
    <div>
      <Popover
        getPopupContainer={(triggerNode) => triggerNode.parentNode as HTMLElement}
        overlayClassName={styles.menuContent}
        overlayStyle={{ zIndex }}
        {...props}
        content={<ul className={styles.menuList}>{content}</ul>}
      />
    </div>
  )
}

interface PopoverMenuItemProps extends React.LiHTMLAttributes<{title:string}> {
  disabled?: boolean;
  children?: React.ReactNode;
}

/**
 * PopoverMenu 单条
 */
export function PopoverMenuItem({
  disabled,
  title,
  children,
  className,
  ...props
}: PopoverMenuItemProps) {
  return (
    <li
      className={classNames(
        styles.menuItem,
        { [styles.disabled]: disabled },
        className
      )}
      {...props}
    >
      {children}
    </li>
  )
}

export default PopoverMenu
