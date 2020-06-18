import React from 'react'
import TodosContextProvider from '../../contexts/TodosContext'
import TodoList from './TodoList'
import Header from './Header'
import TodoForm from './TodoForm'

function TodosPage() {
  return (
    <TodosContextProvider>
      <div className="container">
        <div className="sub-section">
          <Header />
          <div className="main">
            <TodoForm />
            <TodoList />
          </div>
        </div>
      </div>
    </TodosContextProvider>
  )
}

export default TodosPage
