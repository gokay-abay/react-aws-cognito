import React, { useState } from "react"
import { Auth } from "aws-amplify"
import { useHistory } from "react-router-dom"

export default function Login({ authenticate }) {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const history = useHistory()

  const submit = async (e) => {
    e.preventDefault()
    try {
      //cognito register api
      const signInResponse = await Auth.signIn({
        username,
        password,
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
      <h1>Login</h1>
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
            type="password"
            className="input"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input type="submit" value="submit" className="button is-success" />
        </p>
      </form>
    </section>
  )
}
