// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const GroupRoute = ({ component: Component, ...rest }) => {
  

  return (
    <Route
      {...rest}
      render={props =>
        userGroup ? (
          <Redirect to={{ pathname: '/groups'}} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default GroupRoute;