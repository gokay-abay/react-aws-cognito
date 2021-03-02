import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import Home from "./components/Home"
import Protected from "./components/Protected"
import Register from "./components/auth/Register"
import Login from "./components/auth/Login"
import GuardedRoute from "./components/auth/GuardedRoute"

export default function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false)

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/protected">
          <GuardedRoute
            path="/protected"
            auth={isAuthenticated}
            component={Protected}
          />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}
