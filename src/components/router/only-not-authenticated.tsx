import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { redirectTo, RouteInterface, isAuthenticated } from './router'

export const OnlyNotAuthenticated = ({ component: Component, ...rest }: RouteInterface) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Redirect to={redirectTo('/', props)} /> : <Component {...props} />
    }
  />
)
