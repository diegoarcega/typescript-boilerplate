import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { redirectTo, RouteInterface } from './router'

const isAuthenticated = () => false

export const PrivateRoute = ({ component: Component, ...rest }: RouteInterface) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Component {...props} /> : <Redirect to={redirectTo('/', props)} />
    }
  />
)
