import React from 'react'
import Header from './Header'
import Login from './Login'

function LoginPage() {
  return (
    <div className="container">
      <div className="sub-section">
        <Header />
        <div className="main">
          <Login />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
