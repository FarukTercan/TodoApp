import React, { useContext, useState, useEffect, Fragment } from 'react'
import Todo from './Todo'
import { TodosContext } from '../../contexts/TodosContext'

const TodoList = () => {
  const { forms } = useContext(TodosContext)

  // Set searchbar values
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value.trim())
  }

  // Listen searchbar changes
  useEffect(() => {
    const results = forms.filter((form) =>
      form.form.tag.toLowerCase().includes(searchTerm)
    )
    setSearchResults(results)
  }, [searchTerm, forms])

  const data = searchResults ? searchResults : forms

  return (
    <Fragment>
      <input
        type="text"
        name="title"
        placeholder="Search by tag"
        value={searchTerm}
        onChange={handleChange}
        required
        className="search-input"
      />
      <div>
        {data && (
          <ul className="list">
            {searchResults.map((result) => {
              return <Todo result={result} key={result.id} />
            })}
          </ul>
        )}
      </div>
    </Fragment>
  )
}

export default TodoList
