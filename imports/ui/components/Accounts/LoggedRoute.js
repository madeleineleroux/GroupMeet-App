// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { Redirect, Route } from 'react-router-dom'


const LoggedRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  const isLoggedIn = Meteor.userId();

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Redirect to={{ pathname: '/'}} />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default LoggedRoute