import React, { useState } from "react"

export default function Register() {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <section className="section auth">
      <h1>Register</h1>
      <form>
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
        </p>
      </form>
    </section>
  )
}
