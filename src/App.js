import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './components/login/LoginPage'
import TodosPage from './components/myTodos/TodosPage'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/myTodos">
            <TodosPage />
          </Route>
        </Fragment>
      </Switch>
    </Router>
  )
}

export default App
