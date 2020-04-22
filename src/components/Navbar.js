import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {
  const { dispatch } = useContext(BookContext)

  // Send REMOVE_ALL to BookContext to clear the state and then clear the localStorage.
  const removeAll = e => {
    e.preventDefault()

    dispatch({
      type: 'REMOVE_ALL'
    })

    localStorage.clear()
  }

  return (
    <div className='navbar'>
      <h1>My Reading List</h1>
      <p>Currently, you have {dispatch.length} books to read through.</p>

      <button onClick={removeAll}>Remove all books</button>
    </div>
  )
}

export default Navbar
