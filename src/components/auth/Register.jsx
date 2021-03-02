import React, { useState } from "react"
import { Auth } from "aws-amplify"
import { useHistory } from "react-router-dom"

export default function Register({ authenticate }) {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const history = useHistory()

  const submit = async (e) => {
    e.preventDefault()
    try {
      //cognito register api
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email,
        },
      })
      authenticate(true)
      history.push("/protected")
    } catch (error) {
      // handle cognito error
      console.log(error)
    }
  }

  return (
    <section className="section auth">
      <h1>Register</h1>
      <form onSubmit={submit}>
        <p className="control">
          <input
            type="text"
            className="input"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="email"
            className="input"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="input"
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input type="submit" value="submit" className="button is-success" />
        </p>
      </form>
    </section>
  )
}
