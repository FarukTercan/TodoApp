import React, { useState, useContext, useEffect, Fragment } from 'react'
import { TodosContext } from '../../contexts/TodosContext'

const TodoForm = () => {
  const { addTodo, editTodo, editedItem } = useContext(TodosContext)

  // Set todo form values
  const [form, setState] = useState({
    title: '',
    tag: '',
  })

  const handleSub = (e) => {
    e.preventDefault()
    if (!editedItem) {
      addTodo(form)
      setState({
        title: '',
        tag: '',
      })
    } else {
      editTodo(form, editedItem.id)
    }
  }

  const handleChange = (e) => {
    setState({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  // Listen change from edited todo
  useEffect(() => {
    if (editedItem) {
      setState(editedItem.form)
    } else {
      setState({
        title: '',
        tag: '',
      })
    }
  }, [editedItem])

  return (
    <Fragment>
      <form onSubmit={handleSub} className="form">
        <input
          type="text"
          name="title"
          placeholder="Add Todo"
          value={form.title}
          onChange={handleChange}
          required
          className="todo-input"
        />
        <input
          type="text"
          name="tag"
          placeholder="Add Tag"
          value={form.tag}
          onChange={handleChange}
          required
          className="todo-input"
        />
        <div className="buttons">
          <button type="submit" className="btn add-btn">
            {editedItem ? 'Edit Todo' : 'Add Todo'}
          </button>
        </div>
      </form>
    </Fragment>
  )
}

export default TodoForm
