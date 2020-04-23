import React, { useContext, useEffect, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {
  const { books, dispatch } = useContext(BookContext)

  // Send REMOVE_ALL to BookContext to clear the state and then clear the localStorage.
  const removeAll = e => {
    e.preventDefault()

    dispatch({
      type: 'REMOVE_ALL'
    })

    localStorage.clear()
  }

  let [onlyOne, setOnlyOne] = useState(false)

  useEffect(() => {
    console.log('book')
    if (books.length === 1) {
      setOnlyOne(true)
    } else {
      setOnlyOne(false)
    }
  }, [books])

  return (
    <div className='navbar'>
      <h1>My Reading List</h1>
      {onlyOne ? (
        <p>Currently, you have only {books.length} book to read through.</p>
      ) : (
        <p>Currently, you have {books.length} books to read through.</p>
      )}

      <button onClick={removeAll}>Remove all books</button>
    </div>
  )
}

export default Navbar
