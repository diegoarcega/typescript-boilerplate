import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { redirectTo, RouteInterface } from './router'

const isAuthenticated = () => false

export const OnlyNotAuthenticated = ({ component: Component, ...rest }: RouteInterface) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? <Redirect to={redirectTo('/', props)} /> : <Component {...props} />
    }
  />
)
