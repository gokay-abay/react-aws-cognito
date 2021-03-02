import React, { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = ({ isAuthenticated, authenticate }) => {
  const [isActive, setisActive] = useState("")

  const loggedOut = (
    <>
      <Link to="/register" className="button is-primary">
        <strong>Sign up</strong>
      </Link>
      <Link to="/login" className="button is-light">
        Log in
      </Link>
    </>
  )

  const loggedIn = (
    <>
      <Link to="/login" className="button is-primary">
        <strong onClick={() => signOut()}>Sign out</strong>
      </Link>
    </>
  )

  const signOut = () => {
    localStorage.clear()
    authenticate(false)
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setisActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive && "is-active"}`}
      >
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <Link to="/protected" className="navbar-item">
            Protected Route
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {isAuthenticated ? loggedIn : loggedOut}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
