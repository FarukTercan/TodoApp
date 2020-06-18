import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const TodosContext = createContext()

const TodosContextProvider = ({ children }) => {
  // get local storage values
  const initialForm = JSON.parse(localStorage.getItem('forms')) || []

  // Save local storage values with state
  const [forms, setForms] = useState(initialForm)

  useEffect(() => {
    localStorage.setItem('forms', JSON.stringify(forms))
  }, [forms])

  // set edit item to state
  const [editedItem, setEditedItem] = useState(null)

  // Add todo by form value
  const addTodo = (form) => {
    setForms([...forms, { form, id: uuidv4() }])
  }

  // Remove todo
  const removeTodo = (id) => {
    setForms(forms.filter((form) => form.id !== id))
  }

  // Find todo
  const findTodo = (id) => {
    const item = forms.find((form) => form.id === id)

    setEditedItem(item)
  }

  // Edit todo
  const editTodo = ({ title, tag }, id) => {
    const newForms = forms.map((form) =>
      form.id === id ? { form: { title, tag }, id } : form
    )

    setForms(newForms)
    setEditedItem(null)
  }

  return (
    <TodosContext.Provider
      value={{
        forms,
        addTodo,
        removeTodo,
        findTodo,
        editTodo,
        editedItem,
      }}
    >
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
