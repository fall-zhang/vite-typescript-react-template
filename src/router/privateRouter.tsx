import React, { FC } from "react"
import { Route, useHistory } from "react-router-dom"
import { RouteProps } from "react-router"

const PrivateRoute: FC<RouteProps> = (props) => {
  const logged = sessionStorage.getItem("token")
  const history = useHistory()
  if(!logged){
    history.push("/login")
  }
  return (
    <Route {...props} />
  )
}

export default PrivateRoute
