import React from 'react'
import { Router, Route, Switch, RouteProps } from 'react-router-dom'
import { MainLayout } from '../layout/main-layout'
import { createBrowserHistory } from 'history'
import { PrivateRoute } from './private-route'
import { OnlyNotAuthenticated } from './only-not-authenticated'
import { LoginPage } from '../../pages/login'
import { SignupPage } from '../../pages/signup'
import { NotFound } from '../../pages/404'
import { HomePage } from '../../pages/home'

const browserHistory = createBrowserHistory()
export const isAuthenticated = () => true

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
        <Route path="/" exact component={HomePage} />
        <OnlyNotAuthenticated path="/signup" exact component={SignupPage} />
        <OnlyNotAuthenticated path="/login" exact component={LoginPage} />
        <PrivateRoute path="/dashboard" exact component={() => <MainLayout>dashboard</MainLayout>} />
        <Route component={NotFound} />
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
  [propName: string]: any
}

export default Routes
