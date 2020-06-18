import React, { useContext } from 'react'
import { TodosContext } from '../../contexts/TodosContext'

const Todo = ({ result }) => {
  // Set todo name
  const title = result.form.title

  const { removeTodo, findTodo } = useContext(TodosContext)

  return (
    <li className="list-item">
      <span>{title} </span>
      <div>
        <button
          className="btn-delete todo-btn"
          onClick={() => removeTodo(result.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button
          className="btn-edit todo-btn"
          onClick={() => findTodo(result.id)}
        >
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
  )
}

export default Todo
