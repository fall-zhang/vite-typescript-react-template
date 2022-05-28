import React, { lazy as lazyLoad } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import HomePage from '@/layouts'

import LoginPage from '@/pages/login'
// import DocPage from '@/pages/contact'
const DocPage = lazyLoad(() => import('@/pages/contact'))
// import PublicPage from '@/pages/publicComponents'
import CustomPage from '@/pages/customPage'
import LocalePage from '@/pages/locales'
import WorksList from '@/pages/works'
import IconPage from '@/pages/icon'
import TableList from '@/pages/table'
import TableEdit from '@/pages/table/edit'
import TableDrag from '@/pages/table/drag'
import PrivateRoute from './components/PrivateRouter'

import AuthPage from '@/pages/auth'
import ErrorPage from '@/pages/err'

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
            <HomePage>
              <Switch>
                <PrivateRoute path="/contact" exact component={DocPage} />
                <PrivateRoute path="/custom" component={CustomPage} />
                <PrivateRoute path="/locale" component={LocalePage} />
                <PrivateRoute path="/icon" component={IconPage} />
                <PrivateRoute path="/table/base" component={TableList} />
                <PrivateRoute path="/table/edit" component={TableEdit} />
                <PrivateRoute path="/table/drag" component={TableDrag} />
                <PrivateRoute path="/works" component={WorksList} />
                <PrivateRoute path="/auth" component={AuthPage} />
                <Redirect to="/contact" />
              </Switch>
            </HomePage>
          )}
        />
        {/* <Redirect to="/login" /> */}
      </Switch>
    </BrowserRouter>
  )
}
export default RouterPage
