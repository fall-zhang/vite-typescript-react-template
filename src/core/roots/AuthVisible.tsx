import React from 'react'

/**
 * 将组件用该组件包裹，只有符合认证，才能查看组件内的 children
 * @param children
 * @returns
 */
const AuthContainer: React.FC<{ token: string }> = ({ children, token }) => {
  const currentList:string[] = ['']
  if (!currentList.includes(token)) {
    return (<div>
      {/* null */}
    </div>)
  }
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthContainer
