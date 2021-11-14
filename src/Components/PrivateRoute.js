import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../Contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/signup" />
      }}
      {...rest}
    ></Route>
  )
}
