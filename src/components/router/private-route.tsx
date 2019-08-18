import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { redirectTo, RouteInterface, isAuthenticated } from './router'

export const PrivateRoute = ({ layout: Layout, component: Component, ...rest }: RouteInterface) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Layout>
          <Component {...props} />
        </Layout>
      ) : (
        <Redirect to={redirectTo('/', props)} />
      )
    }
  />
)
