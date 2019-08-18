import React from 'react'
import { Router, Switch, RouteProps } from 'react-router-dom'
import { MainLayout } from '../layout/main-layout'
import { MinimalLayout } from '../layout/minimal-layout'
import { createBrowserHistory } from 'history'
import { PrivateRoute } from './private-route'
import { RouteWithLayout } from './route-with-layout'
import { OnlyNotAuthenticated } from './only-not-authenticated'
import { LoginPage } from '../../pages/login'
import { SignupPage } from '../../pages/signup'
import { NotFound } from '../../pages/404'
import { HomePage } from '../../pages/home'

const browserHistory = createBrowserHistory()
export const isAuthenticated = () => false

function Routes(): JSX.Element {
  browserHistory.listen(location => {
    const publicRoutes = ['/', '/login', '/signup']
    if (!isAuthenticated() && !publicRoutes.includes(location.pathname)) {
      browserHistory.push('/login')
    }
  })

  return (
    <Router history={browserHistory}>
      <Switch>
        <RouteWithLayout path="/" exact component={HomePage} layout={MinimalLayout} />
        <OnlyNotAuthenticated path="/signup" exact component={SignupPage} layout={MinimalLayout} />
        <OnlyNotAuthenticated path="/login" exact component={LoginPage} layout={MinimalLayout} />
        <PrivateRoute path="/dashboard" exact component={() => <p>dashboard</p>} layout={MainLayout} />
        <RouteWithLayout component={NotFound} layout={MinimalLayout} />
      </Switch>
    </Router>
  )
}

export function redirectTo(pathname: string, props: RouteProps) {
  return {
    pathname,
    state: { from: props.location },
  }
}

export interface RouteInterface {
  component: any
  layout: any
  [propName: string]: any
}

export default Routes
