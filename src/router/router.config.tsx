import React from 'react'
import variableRoute from './routes/VariableRoutes'
import { Route } from 'react-router-dom'
import type { RouteParam } from './route'
// const allRoutes: RouteParam[] = constantRoute.concat(variableRoute)
// <Switch>
//   <Route path={'/login'} exact component={LoginPage} />
//   <Route path={'/login/signin'} exact component={LoginPage} />
//   <Route path={'/login/forget'} exact component={LoginPage} />
//   <Route path={'/err'} component={ErrorPage} />
//   <Route
//     path="/"
//     render={() => (
//       <HomePage>
//         <Switch>
//           <PrivateRoute path="/contact" exact component={DocPage} />
//           <PrivateRoute path="/custom" component={CustomPage} />
//           <PrivateRoute path="/locale" component={LocalePage} />
//           <PrivateRoute path="/icon" component={IconPage} />
//           <PrivateRoute path="/table/base" component={TableList} />
//           <PrivateRoute path="/table/edit" component={TableEdit} />
//           <PrivateRoute path="/table/drag" component={TableDrag} />
//           <PrivateRoute path="/auth" component={AuthPage} />
//           <Redirect to="/err" />
//         </Switch>
//       </HomePage>
//     )}
//   />
// </Switch>
interface Code {
  name: string
  label: string
}
interface LiCode {
  name: string
  label: string
  fun: string
}
type Func = (value:number)=>string
let fuoo:ReturnType<Func> = '1'
fuoo = '12'
function GeneratRoute(routes: RouteParam[]) {

  return (
    <>
      <Route path={route.path} component={route.compn}>
      </Route>
    </>
  )
}

export default GeneratRoute(variableRoute)