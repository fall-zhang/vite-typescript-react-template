import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'


import PageLayout from '@/layouts'

import LoginPage from '@/pages/login'
import PrivateRoute from './components/PrivateRouter'
import ErrorPage from '@/pages/err'
const allPages = import.meta.glob('@/pages/**/*.tsx')
function getAsyncRoute(neglect:Array<string>) {
  const oneFilePath:Array<string> = []
  const allRoute:Record<string,string> = {}
  Object.keys(allPages).forEach(item=>{
    const routeInfo = item.split('/')
    if(!neglect.includes(routeInfo[2])){
      if(routeInfo.at(-1)==='index.tsx'){
        oneFilePath.push(routeInfo[2])
        const path = '/'+routeInfo[2]
        allRoute[path] = item
      }
    }
  })
  const allNeglectPath = oneFilePath.concat(neglect)
  Object.keys(allPages).map(item=>{
    const routeInfo = item.split('/')
    if(!allNeglectPath.includes(routeInfo[2])){
      const path ='/'+ routeInfo[2]+'/' +routeInfo[3]
      allRoute[path] = item
    }
  })
  return allRoute
}

const asyncRoutes = getAsyncRoute(['login','err'])
console.log(asyncRoutes)
const RouterPage: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/login'} exact component={LoginPage} />
        <Route path={'/login/signin'} exact component={LoginPage} />
        <Route path={'/login/forget'} exact component={LoginPage} />
        <Route path={'/err'} component={ErrorPage} />
        <Route
          path="/"
          render={() => (
            <PageLayout>
              <Switch>
                {
                  Object.entries(asyncRoutes).map(item => {
                    return (<PrivateRoute key={item[0]} path={item[0]} exact component={React.lazy(() => import(item[1]))} />)
                  })
                }
                <Redirect to='/contact' />
              </Switch>
            </PageLayout>
          )}
        />
        {/* <Redirect to="/login" /> */}
      </Switch>
    </BrowserRouter>
  )
}
export default RouterPage
