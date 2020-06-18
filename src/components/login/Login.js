import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  // Set login form values
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // Set authenticated user
  const user = {
    name: 'john',
    pass: 'doe',
  }
  const authUser = username === user.name && password === user.pass

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsername}
        required
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePassword}
        required
        className="login-input"
      />
      <div className="buttons">
        {authUser ? (
          <Link to="/myTodos">
            <button type="submit" className="btn add-btn">
              Log In
            </button>
          </Link>
        ) : (
          <Fragment>
            <button type="submit" className="btn add-btn">
              Log In
            </button>
          </Fragment>
        )}
      </div>
    </form>
  )
}

export default Login
