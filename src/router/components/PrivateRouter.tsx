import React, { FC, Suspense } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { RouteProps } from 'react-router'

const PrivateRoute: FC<RouteProps> = (props) => {
  const logged = sessionStorage.getItem('token')
  const history = useHistory()
  if (!logged) {
    history.push('/login')
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route {...props} />
    </Suspense>
  )
}

export default PrivateRoute
