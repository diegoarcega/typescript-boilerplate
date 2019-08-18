import React from 'react'
import { Router, Route, Switch, RouteProps } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { PrivateRoute } from './private-route'
import { OnlyNotAuthenticated } from './only-not-authenticated'

const browserHistory = createBrowserHistory()
export const isAuthenticated = () => false

function Routes(): JSX.Element {
  browserHistory.listen(location => {
    const publicRoutes = ['/', '/login']
    if (!isAuthenticated() && !publicRoutes.includes(location.pathname)) {
      browserHistory.push('/login')
    }
  })

  return (
    <Router history={browserHistory}>
      <Switch>
        <Route path="/" exact component={() => <p>I'm an awesome typescript boostrap</p>} />
        <OnlyNotAuthenticated path="/login" exact component={() => <p>login</p>} />
        <PrivateRoute path="/dashboard" component={() => <p>im dashboard </p>} />
        <Route component={() => <p>not found</p>} />
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
