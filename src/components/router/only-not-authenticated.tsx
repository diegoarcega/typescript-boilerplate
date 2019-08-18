import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { redirectTo, RouteInterface, isAuthenticated } from './router'

export const OnlyNotAuthenticated = ({ layout: Layout, component: Component, ...rest }: RouteInterface) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Redirect to={redirectTo('/', props)} />
      ) : (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }
  />
)
